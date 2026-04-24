import { NextResponse } from 'next/server';
import { createServerSupabaseClient } from '@/lib/supabase/server';
import { demoPreview, demoFullResult } from '@/lib/data/demo-result';
import {
  determineBodyShape,
  bodyShapeContent,
  BodyShape,
} from '@/lib/body-shape';

export async function POST(request: Request) {
  try {
    const { analysisId } = await request.json();
    const supabase = createServerSupabaseClient();

    const { data: analysis, error } = await supabase
      .from('analyses')
      .select('*')
      .eq('id', analysisId)
      .single();

    if (error || !analysis) {
      return NextResponse.json(
        { error: 'Analiza nije pronađena' },
        { status: 404 },
      );
    }

    const measurements = analysis.body_measurements;

    let BodyShape: BodyShape = 'Rectangle';
    let bodyDescription: string = bodyShapeContent['Rectangle'].description;
    let bodyRecommendations: readonly string[] =
      bodyShapeContent['Rectangle'].recommendations;

    const hasValidMeasurements =
      measurements &&
      typeof measurements.bust !== 'undefined' &&
      typeof measurements.waist !== 'undefined' &&
      typeof measurements.hips !== 'undefined';

    if (hasValidMeasurements) {
      const bust = Number(measurements.bust);
      const waist = Number(measurements.waist);
      const hips = Number(measurements.hips);
      const shoulders =
        typeof measurements.shoulders !== 'undefined' &&
        measurements.shoulders !== null
          ? Number(measurements.shoulders)
          : undefined;

      const validNumbers =
        !Number.isNaN(bust) &&
        !Number.isNaN(waist) &&
        !Number.isNaN(hips) &&
        bust > 0 &&
        waist > 0 &&
        hips > 0;

      const validShoulders =
        typeof shoulders === 'undefined' ||
        (!Number.isNaN(shoulders) && shoulders > 0);

      if (validNumbers && validShoulders) {
        BodyShape = determineBodyShape({
          bust,
          waist,
          hips,
          shoulders,
        });

        bodyDescription = bodyShapeContent[BodyShape].description;
        bodyRecommendations = bodyShapeContent[BodyShape].recommendations;
      }
    }

    const previewResult = {
      ...demoPreview,
      bodyShape: BodyShape,
    };

    const fullResult = {
      ...demoFullResult,
      summary: `${demoFullResult.summary} ${bodyDescription}`,
      clothingRecommendations: {
        ...demoFullResult.clothingRecommendations,
        trousers: [
          ...demoFullResult.clothingRecommendations.trousers,
          ...bodyRecommendations,
        ],
      },
    };

    await supabase
      .from('analyses')
      .update({
        preview_result: previewResult,
        full_result: fullResult,
        status: 'completed',
        is_paid: true,
      })
      .eq('id', analysisId);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: 'Mock analiza nije uspela' },
      { status: 500 },
    );
  }
}
