import { PageContainer } from '@/components/layout/page-container';
import { Card } from '@/components/ui/card';
import { SectionTitle } from '@/components/ui/section-title';
import { questions } from '@/lib/data/faq-section-items';

export function FaqSection() {
  return (
    <section className='py-20 bg-[#faf8f5]'>
      <PageContainer>
        <SectionTitle
          eyebrow='Najčešća pitanja'
          title='Sve što korisnik želi da zna pre analize'
        />

        <div className='mx-auto mt-12 grid max-w-4xl gap-4'>
          {questions.map((item) => (
            <Card key={item.question} className='p-6'>
              <h3 className='text-lg font-semibold text-neutral-950'>
                {item.question}
              </h3>
              <p className='text-sm text-gray-600'>
                {item.answer}
                {item.link && (
                  <a href={item.link} className='ml-1 underline text-primary'>
                    Saznaj više
                  </a>
                )}
              </p>
            </Card>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
