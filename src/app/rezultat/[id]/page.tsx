import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageContainer } from '@/components/layout/page-container';
import { ResultHeader } from '@/components/result/result-header';
import { StyleSummaryCard } from '@/components/result/style-summary-card';
import { ColorPaletteCard } from '@/components/result/color-palette-card';
import { BodyShapeCard } from '@/components/result/body-shape-card';
import { RecommendationsCard } from '@/components/result/recommendations-card';
import { AvoidListCard } from '@/components/result/avoid-list-card';
import { OutfitFormulasCard } from '@/components/result/outfit-formulas-card';
import { ShopSuggestionsCard } from '@/components/result/shop-suggestions-card';
import { demoFullResult, demoPreview } from '@/lib/data/demo-result';
import { createServerSupabaseClient } from '@/lib/supabase/server';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;

  return {
    title: `Rezultat ${id}`,
    description: 'Tvoja personalizovana stilska analiza.',
  };
}

export default async function ResultPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = createServerSupabaseClient();

  const { data, error } = await supabase
    .from('analyses')
    .select('*')
    .eq('id', id)
    .single();

  if (error || !data) {
    notFound();
  }

  const paid = true;
  const preview = data.preview_result ?? demoPreview;
  const full = data.full_result ?? demoFullResult;

  const hasFace = Boolean(data.face_image_url);

  const bodyMeasurements = data.body_measurements;

  const hasBodyMeasurements = Boolean(
    bodyMeasurements &&
    (bodyMeasurements.shoulders ||
      bodyMeasurements.bust ||
      bodyMeasurements.waist ||
      bodyMeasurements.hips),
  );

  const hasBody = Boolean(data.body_image_url || hasBodyMeasurements);

  return (
    <main className='bg-[#f7f5f2] py-12 md:py-16'>
      <PageContainer>
        <div className='mx-auto max-w-5xl space-y-6'>
          <ResultHeader createdAt={data.created_at} paid={paid} />

          {hasFace ? (
            <StyleSummaryCard
              season={preview.season}
              bodyShape={hasBody ? preview.bodyShape : undefined}
              summary={preview.summary}
            />
          ) : null}

          {hasFace && hasBody ? (
            <div className='grid gap-6 lg:grid-cols-2'>
              <ColorPaletteCard
                neutralColors={
                  paid ? full.palette.neutrals : preview.previewColors
                }
                accentColors={paid ? full.palette.accents : []}
                metals={paid ? full.palette.metals : []}
              />

              <BodyShapeCard
                bodyShape={preview.bodyShape}
                focus={
                  paid
                    ? [
                        'Vizuelno definiši struk',
                        'Biraj strukturisane slojeve',
                        'Balansiraj siluetu krojevima koji prate liniju tela',
                      ]
                    : ['Otključaj kompletan vodič za svoju figuru']
                }
              />
            </div>
          ) : null}

          {hasFace && !hasBody ? (
            <ColorPaletteCard
              neutralColors={
                paid ? full.palette.neutrals : preview.previewColors
              }
              accentColors={paid ? full.palette.accents : []}
              metals={paid ? full.palette.metals : []}
            />
          ) : null}

          {!hasFace && hasBody ? (
            <BodyShapeCard
              bodyShape={preview.bodyShape}
              focus={
                paid
                  ? [
                      'Vizuelno definiši struk',
                      'Biraj strukturisane slojeve',
                      'Balansiraj siluetu krojevima koji prate liniju tela',
                    ]
                  : ['Otključaj kompletan vodič za svoju figuru']
              }
            />
          ) : null}

          {!hasFace ? (
            <>
              <RecommendationsCard
                recommendations={{
                  tops: full.clothingRecommendations.tops,
                  trousers: full.clothingRecommendations.trousers,
                  dresses: full.clothingRecommendations.dresses,
                  jackets: full.clothingRecommendations.jackets,
                  necklines: full.clothingRecommendations.necklines,
                  sleeves: full.clothingRecommendations.sleeves,
                }}
              />

              <AvoidListCard items={full.avoidList} />

              <OutfitFormulasCard items={full.outfitFormulas} />

              <ShopSuggestionsCard />
            </>
          ) : null}
        </div>
      </PageContainer>
    </main>
  );
}
