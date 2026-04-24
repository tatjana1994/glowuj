'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PageContainer } from '@/components/layout/page-container';
import { Button } from '@/components/ui/button';
import { Stepper } from './stepper';
import { FaceUploadCard } from './face-upload-card';
import { BodyUploadCard } from './body-upload-card';
import {
  StylePreferencesForm,
  type StylePreferences,
} from './style-preferences-form';
import { ValidationErrorCard } from './validation-error-card';
import { AnalyzingLoader } from './analyzing-loader';
import { createBrowserSupabaseClient } from '@/lib/supabase/client';

type BodyMeasurements = {
  shoulders: string;
  bust: string;
  waist: string;
  hips: string;
};

export function AnalyzeShell() {
  const router = useRouter();

  const [step, setStep] = useState(1);
  const [faceFile, setFaceFile] = useState<File | null>(null);
  const [bodyFile, setBodyFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const [errors, setErrors] = useState<{
    face: string[];
    body: string[];
  }>({
    face: [],
    body: [],
  });

  const [preferences, setPreferences] = useState<StylePreferences>({
    gender: '',
    ageGroup: '',
    style: '',
    occasion: '',
  });

  const [bodyMeasurements, setBodyMeasurements] = useState<BodyMeasurements>({
    shoulders: '',
    bust: '',
    waist: '',
    hips: '',
  });

  const hasBodyMeasurements =
    bodyMeasurements.shoulders.trim() !== '' ||
    bodyMeasurements.bust.trim() !== '' ||
    bodyMeasurements.waist.trim() !== '' ||
    bodyMeasurements.hips.trim() !== '';

  async function uploadFile(file: File) {
    const supabase = createBrowserSupabaseClient();

    const filePath = `uploads/${crypto.randomUUID()}-${file.name}`;

    const { error } = await supabase.storage
      .from('style-images')
      .upload(filePath, file, {
        contentType: file.type || 'image/jpeg',
        upsert: false,
      });

    if (error) {
      console.error('SUPABASE CLIENT UPLOAD ERROR:', error);
      throw new Error(error.message || 'Upload failed.');
    }

    const { data } = supabase.storage
      .from('style-images')
      .getPublicUrl(filePath);

    return { url: data.publicUrl };
  }

  async function handleStartAnalysis() {
    if (!faceFile && !bodyFile && !hasBodyMeasurements) return;

    setIsLoading(true);
    setErrors({ face: [], body: [] });

    try {
      const faceUpload = faceFile ? await uploadFile(faceFile) : null;
      const bodyUpload = bodyFile ? await uploadFile(bodyFile) : null;

      const createAnalysisResponse = await fetch('/api/create-analysis', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          faceImageUrl: faceUpload?.url ?? null,
          bodyImageUrl: bodyUpload?.url ?? null,
          bodyMeasurements: hasBodyMeasurements
            ? {
                bust: bodyMeasurements.bust,
                waist: bodyMeasurements.waist,
                hips: bodyMeasurements.hips,
                ...(bodyMeasurements.shoulders.trim() !== ''
                  ? {
                      shoulders: bodyMeasurements.shoulders,
                    }
                  : {}),
              }
            : null,
          gender: preferences.gender,
          ageGroup: preferences.ageGroup,
          style: preferences.style,
          occasion: preferences.occasion,
        }),
      });

      if (!createAnalysisResponse.ok) {
        throw new Error('Creating analysis failed.');
      }

      const analysis = await createAnalysisResponse.json();

      if (faceFile || bodyFile) {
        const validateResponse = await fetch('/api/validate-images', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            faceImageUrl: faceUpload?.url ?? null,
            bodyImageUrl: bodyUpload?.url ?? null,
          }),
        });

        if (!validateResponse.ok) {
          throw new Error('Image validation failed.');
        }

        const validation = await validateResponse.json();

        if (
          (faceFile && !validation.faceValid) ||
          (bodyFile && !validation.bodyValid)
        ) {
          setErrors({
            face: validation.faceErrors ?? [],
            body: validation.bodyErrors ?? [],
          });

          setIsLoading(false);
          return;
        }
      }

      const analyzeResponse = await fetch('/api/analyze-style', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          analysisId: analysis.id,
        }),
      });

      if (!analyzeResponse.ok) {
        throw new Error('AI analysis failed.');
      }

      router.push(`/rezultat/${analysis.id}`);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  }

  return (
    <section className='bg-[#f7f5f2] py-12 md:py-16'>
      <PageContainer>
        <div className='mx-auto max-w-4xl space-y-8'>
          <div>
            <p className='text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500'>
              Analiza
            </p>

            <h1 className='mt-3 text-3xl font-semibold tracking-tight text-neutral-950 md:text-4xl'>
              Kreiraj svoj lični vodič stila
            </h1>

            <p className='mt-4 max-w-2xl text-base text-neutral-600'>
              Uploaduj fotografije ili unesi mere i dobićeš personalizovanu
              stilsku analizu sa preporukama za boje, krojeve i outfite koji ti
              najbolje stoje.
            </p>
          </div>

          <Stepper step={isLoading ? 4 : step} />

          {!isLoading && step === 1 ? (
            <FaceUploadCard file={faceFile} onFile={setFaceFile} />
          ) : null}

          {!isLoading && step === 2 ? (
            <BodyUploadCard
              file={bodyFile}
              onFile={setBodyFile}
              measurements={bodyMeasurements}
              onMeasurementsChange={setBodyMeasurements}
            />
          ) : null}

          {!isLoading && step === 3 ? (
            <StylePreferencesForm
              value={preferences}
              onChange={setPreferences}
            />
          ) : null}

          {!isLoading && errors.face.length > 0 ? (
            <ValidationErrorCard
              title='Issue with face photo'
              errors={errors.face}
            />
          ) : null}

          {!isLoading && errors.body.length > 0 ? (
            <ValidationErrorCard
              title='Issue with body photo'
              errors={errors.body}
            />
          ) : null}

          {isLoading ? <AnalyzingLoader /> : null}

          {!isLoading ? (
            <div className='flex items-center justify-between gap-4'>
              <Button
                variant='ghost'
                disabled={step === 1}
                onClick={() => setStep((prev) => Math.max(1, prev - 1))}
              >
                Nazad
              </Button>

              {step < 3 ? (
                <Button onClick={() => setStep((prev) => prev + 1)}>
                  Dalje
                </Button>
              ) : (
                <Button
                  onClick={handleStartAnalysis}
                  disabled={!faceFile && !bodyFile && !hasBodyMeasurements}
                >
                  Započni analizu
                </Button>
              )}
            </div>
          ) : null}
        </div>
      </PageContainer>
    </section>
  );
}
