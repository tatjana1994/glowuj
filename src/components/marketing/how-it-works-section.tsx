import { PageContainer } from '@/components/layout/page-container';
import { Card } from '@/components/ui/card';
import { SectionTitle } from '@/components/ui/section-title';
import { Image, Sparkles, User } from 'lucide-react';

export function HowItWorksSection() {
  const steps = [
    {
      icon: User,
      title: 'Uploaduj fotografiju lica',
      description:
        'Pošalji jasnu fotografiju lica bez filtera kako bismo procenili ton, kontrast i paletu boja.',
    },
    {
      icon: Image,
      title: 'Uploaduj fotografiju tela ili unesi mere',
      description:
        'Pošalji fotografiju cele figure spreda ili unesi svoje mere kako bismo procenili proporcije i krojeve koji ti najbolje stoje.',
    },
    {
      icon: Sparkles,
      title: 'Dobij svoj style blueprint',
      description:
        'Dobijaš personalizovan izveštaj sa bojama, preporukama za krojeve, outfit formulama i stvarima koje treba da izbegavaš.',
    },
  ];

  return (
    <section className='py-20'>
      <PageContainer>
        <SectionTitle
          eyebrow='Kako radi'
          title='Tri jednostavna koraka do tvog rezultata'
          description='Bez komplikacije i bez potrebe da znaš bilo šta o analizi boja ili proporcija tela.'
        />

        <div className='mt-12 grid gap-6 md:grid-cols-3'>
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <Card key={index} className='p-6'>
                <div className='flex h-12 w-12 items-center justify-center rounded-2xl bg-[#7A5C4D]/10 shadow-[0_0_20px_rgba(122,92,77,0.15)]'>
                  <Icon className='h-5 w-5 text-[#7A5C4D]' />
                </div>

                <h3 className='mt-4 text-xl font-semibold text-neutral-950'>
                  {step.title}
                </h3>

                <p className='mt-3 text-sm leading-6 text-neutral-600'>
                  {step.description}
                </p>
              </Card>
            );
          })}
        </div>
      </PageContainer>
    </section>
  );
}
