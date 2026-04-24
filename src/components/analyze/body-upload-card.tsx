'use client';

import { useState } from 'react';
import { UploadDropzone } from '@/components/ui/upload-dropzone';
import { UploadGuidelines } from './upload-guidelines';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

type BodyMeasurementsForm = {
  shoulders: string;
  bust: string;
  waist: string;
  hips: string;
};

type BodyUploadCardProps = {
  file?: File | null;
  onFile: (file: File) => void;
  measurements: BodyMeasurementsForm;
  onMeasurementsChange: (measurements: BodyMeasurementsForm) => void;
};

const onlyNumbers = (value: string) => value.replace(/\D/g, '');

export function BodyUploadCard({
  file,
  onFile,
  measurements,
  onMeasurementsChange,
}: BodyUploadCardProps) {
  const [mode, setMode] = useState<'photo' | 'measurements'>('measurements');

  return (
    <div
      className={`grid gap-4 ${mode === 'photo' ? 'lg:grid-cols-[1fr_320px]' : ''}`}
    >
      <Card className='p-6'>
        <div className='mb-5 flex gap-2'>
          <Button
            type='button'
            variant={mode === 'measurements' ? 'primary' : 'secondary'}
            onClick={() => setMode('measurements')}
          >
            Unesi mere
          </Button>

          <Button
            type='button'
            variant={mode === 'photo' ? 'primary' : 'secondary'}
            onClick={() => setMode('photo')}
          >
            Upload slike tela
          </Button>
        </div>

        {mode === 'photo' ? (
          <UploadDropzone
            title='Fotografija tela'
            fileUpload='Pošalji fotografiju cele figure sprijeda sa jasno vidljivom siluetom.'
            file={file}
            onFile={onFile}
          />
        ) : (
          <div className='grid w-full gap-4 md:grid-cols-2'>
            <Input
              type='number'
              inputMode='numeric'
              min='0'
              placeholder='Širina ramena (cm)'
              value={measurements.shoulders}
              onChange={(e) =>
                onMeasurementsChange({
                  ...measurements,
                  shoulders: onlyNumbers(e.target.value),
                })
              }
            />

            <Input
              type='number'
              inputMode='numeric'
              min='0'
              placeholder='Grudi (cm)'
              value={measurements.bust}
              onChange={(e) =>
                onMeasurementsChange({
                  ...measurements,
                  bust: onlyNumbers(e.target.value),
                })
              }
            />

            <Input
              type='number'
              inputMode='numeric'
              min='0'
              placeholder='Struk (cm)'
              value={measurements.waist}
              onChange={(e) =>
                onMeasurementsChange({
                  ...measurements,
                  waist: onlyNumbers(e.target.value),
                })
              }
            />

            <Input
              type='number'
              inputMode='numeric'
              min='0'
              placeholder='Kukovi (cm)'
              value={measurements.hips}
              onChange={(e) =>
                onMeasurementsChange({
                  ...measurements,
                  hips: onlyNumbers(e.target.value),
                })
              }
            />
          </div>
        )}
      </Card>

      {mode === 'photo' && <UploadGuidelines type='body' />}
    </div>
  );
}
