import Link from 'next/link';
import { PageContainer } from '@/components/layout/page-container';
import { Button } from '@/components/ui/button';

export function CtaSection() {
  return (
    <section className='py-20'>
      <PageContainer>
        <div className='rounded-[32px] bg-neutral-700 px-6 py-12 text-center text-white md:px-12'>
          <h2 className='text-3xl font-semibold tracking-tight md:text-4xl'>
            Spremna da saznaš šta ti stvarno stoji?
          </h2>

          <p className='mx-auto mt-4 max-w-2xl text-neutral-300'>
            Uploaduj dve fotografije i dobiješ lični style blueprint sa bojama,
            krojevima i outfit preporukama.
          </p>

          <div className='mt-8'>
            <Link href='/analiza'>
              <Button variant='secondary'>Započni analizu</Button>
            </Link>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
