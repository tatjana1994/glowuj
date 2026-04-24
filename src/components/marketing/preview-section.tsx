import { PageContainer } from '@/components/layout/page-container';
import { Card } from '@/components/ui/card';
import { SectionTitle } from '@/components/ui/section-title';

export function PreviewSection() {
  return (
    <section id='primer-rezultata' className='py-20 bg-[#faf8f5]'>
      <PageContainer>
        <SectionTitle
          eyebrow='Primer rezultata'
          title='Ovako izgleda tvoj finalni izveštaj'
          description='Rezultat je podeljen u jasne sekcije koje možeš odmah da primeniš u svakodnevnom oblačenju.'
        />

        <div className='mt-12 grid gap-6 lg:grid-cols-2'>
          <Card className='p-6'>
            <h3 className='text-xl font-semibold text-neutral-950'>
              Paleta boja
            </h3>

            <div className='mt-5 flex flex-wrap gap-3'>
              {[
                '#5B4636',
                '#8A7661',
                '#D8C7B0',
                '#7F2F2F',
                '#B5642D',
                '#4B5D3A',
              ].map((color) => (
                <div
                  key={color}
                  className='h-16 w-16 rounded-2xl border border-neutral-200'
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>

            <p className='mt-4 text-sm text-neutral-600'>
              Neutralne i akcentne boje koje najbolje ističu tvoj ten i
              kontrast.
            </p>
          </Card>

          <Card className='p-6'>
            <h3 className='text-xl font-semibold text-neutral-950'>
              Outfit formule
            </h3>

            <div className='mt-5 space-y-3 text-sm text-neutral-700'>
              <div className='rounded-2xl bg-neutral-50 p-4'>
                Strukirani top + pantalone visokog struka + blejzer
              </div>

              <div className='rounded-2xl bg-neutral-50 p-4'>
                Midi haljina sa pojasom + cipele sa špicem
              </div>

              <div className='rounded-2xl bg-neutral-50 p-4'>
                Monohromatska kombinacija + zlatni detalji
              </div>
            </div>

            <p className='mt-4 text-sm text-neutral-600'>
              Gotove kombinacije koje možeš odmah da primeniš bez razmišljanja.
            </p>
          </Card>
        </div>
      </PageContainer>
    </section>
  );
}
