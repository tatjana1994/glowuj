import { PageContainer } from '@/components/layout/page-container';
import { Card } from '@/components/ui/card';
import { SectionTitle } from '@/components/ui/section-title';
import { Palette, Ruler, Shirt, Ban } from 'lucide-react';

export function BenefitsSection() {
  const items = [
    {
      icon: Palette,
      title: 'Paleta boja',
      description:
        'Dobijaš nijanse koje ti najbolje stoje, najbolje neutralne tonove i metale koji ti najviše laskaju.',
    },
    {
      icon: Ruler,
      title: 'Vodič za figuru',
      description:
        'Saznaješ koji krojevi, dužine i siluete najbolje funkcionišu za tvoje proporcije.',
    },
    {
      icon: Shirt,
      title: 'Outfit formule',
      description:
        'Dobijaš gotove kombinacije koje možeš lako da rekreiraš za svaki dan ili posebne prilike.',
    },
    {
      icon: Ban,
      title: 'Šta da izbegavaš',
      description:
        'Jasno vidiš koje boje i krojevi ti najmanje odgovaraju, da ne trošiš novac na pogrešne kupovine.',
    },
  ];
  return (
    <section className='bg-[#faf8f5] py-20'>
      <PageContainer>
        <SectionTitle
          eyebrow='Šta dobijaš'
          title='Mnogo više od običnog AI odgovora'
          description='Rezultat je organizovan kao lični stilski izveštaj koji možeš odmah da primeniš u kupovini i oblačenju.'
        />

        <div className='mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4'>
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <Card key={index} className='p-6'>
                <div className='flex items-center gap-3'>
                  <div className='flex h-10 w-10 items-center justify-center rounded-xl bg-[#7A5C4D]/10'>
                    <Icon className='h-5 w-5 text-[#7A5C4D]' />
                  </div>

                  <h3 className='text-lg font-semibold text-neutral-950'>
                    {item.title}
                  </h3>
                </div>

                <p className='mt-4 text-sm leading-6 text-neutral-600'>
                  {item.description}
                </p>
              </Card>
            );
          })}
        </div>
      </PageContainer>
    </section>
  );
}
