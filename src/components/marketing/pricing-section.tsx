import Link from 'next/link';
import { PageContainer } from '@/components/layout/page-container';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { SectionTitle } from '@/components/ui/section-title';

export function PricingSection() {
  return (
    <section className='bg-[#faf8f5] py-20'>
      <PageContainer>
        <SectionTitle
          eyebrow='Cene'
          title='Besplatan preview, puni izveštaj uz jedno plaćanje'
          description='Korisnik prvo vidi osnovni preview, a kompletan personalizovani izveštaj otključava nakon plaćanja.'
        />

        <div className='mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2'>
          <Card className='p-6'>
            <p className='text-sm font-semibold text-neutral-500'>
              Besplatan preview
            </p>

            <h3 className='mt-3 text-3xl font-semibold text-neutral-950'>0€</h3>

            <ul className='mt-5 space-y-3 text-sm text-neutral-700'>
              <li>• Kratak style summary</li>
              <li>• Preview palete boja</li>
              <li>• Naziv procenjenog oblika tela</li>
              <li>• Jedna teaser preporuka</li>
            </ul>
          </Card>

          <Card className='border-neutral-900 p-6'>
            <p className='text-sm font-semibold text-neutral-500'>
              Puni izveštaj
            </p>

            <h3 className='mt-3 text-3xl font-semibold text-neutral-950'>
              7.99€
            </h3>

            <ul className='mt-5 space-y-3 text-sm text-neutral-700'>
              <li>• Kompletna paleta boja</li>
              <li>• Vodič za oblik tela i proporcije</li>
              <li>• Preporuke po kategorijama</li>
              <li>• Šta da nosiš, a šta da izbegavaš</li>
              <li>• Outfit formule i smernice za kupovinu</li>
            </ul>

            <div className='mt-6'>
              <Link href='/analiza'>
                <Button className='w-full'>Započni analizu</Button>
              </Link>
            </div>
          </Card>
        </div>
      </PageContainer>
    </section>
  );
}
