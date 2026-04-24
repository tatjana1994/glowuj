import Link from 'next/link';
import { PageContainer } from '@/components/layout/page-container';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export function HeroSection() {
  return (
    <section className='bg-[#f7f5f2] py-16 md:py-24'>
      <PageContainer>
        <div className='grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]'>
          <div>
            <p className='mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500'>
              Lična stilska analiza
            </p>

            <h1 className='max-w-3xl text-4xl font-semibold tracking-tight text-neutral-950 md:text-6xl'>
              Otkrij koje boje, krojevi i proporcije ti najbolje stoje.
            </h1>

            <p className='mt-6 max-w-2xl text-lg text-neutral-600'>
              Uploaduj fotografiju lica i fotografiju tela ili unesi svoje mere,
              pa dobiješ personalizovanu paletu boja, vodič za oblik tela i
              konkretne outfit preporuke prilagođene tebi.
            </p>

            <div className='mt-8 flex flex-wrap gap-3'>
              <Link href='/analiza'>
                <Button>Započni analizu</Button>
              </Link>

              <a href='#primer-rezultata'>
                <Button variant='secondary'>Pogledaj primer</Button>
              </a>
            </div>
          </div>

          <Card className='overflow-hidden p-6'>
            <div className='space-y-5'>
              <div>
                <p className='text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500'>
                  Primer rezultata
                </p>

                <h3 className='mt-2 text-2xl font-semibold text-neutral-950'>
                  Topla jesen · Pravougaonik
                </h3>

                <p className='mt-2 text-sm text-neutral-600'>
                  Tople, bogate nijanse i strukturisani krojevi sa naglašenim
                  strukom najviše laskaju tvojoj figuri.
                </p>
              </div>

              <div className='flex gap-3'>
                <div
                  className='h-16 w-16 rounded-2xl border border-neutral-200'
                  style={{ backgroundColor: '#6E4B3A' }}
                />
                <div
                  className='h-16 w-16 rounded-2xl border border-neutral-200'
                  style={{ backgroundColor: '#8C6A43' }}
                />
                <div
                  className='h-16 w-16 rounded-2xl border border-neutral-200'
                  style={{ backgroundColor: '#4B3A2F' }}
                />
              </div>

              <div className='rounded-2xl bg-neutral-100 p-4 text-sm text-neutral-700'>
                Puni izveštaj uključuje kompletnu paletu boja, vodič za figuru,
                preporuke po kategorijama i outfit formule.
              </div>
            </div>
          </Card>
        </div>
      </PageContainer>
    </section>
  );
}
