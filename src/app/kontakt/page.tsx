import { Button } from '@/components/ui/button';

export default function ContactPage() {
  return (
    <main className='bg-[#f7f5f2] px-6 py-16 md:py-24'>
      <section className='mx-auto max-w-6xl'>
        <div className='max-w-2xl'>
          <p className='text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500'>
            Kontakt
          </p>

          <h1 className='mt-4 text-4xl font-semibold tracking-tight text-neutral-950 md:text-6xl'>
            Tu smo za sva pitanja.
          </h1>

          <p className='mt-5 text-lg leading-8 text-neutral-600'>
            Pošalji nam poruku ako imaš pitanje o analizi, rezultatima,
            privatnosti ili saradnji.
          </p>
        </div>

        <div className='mt-12 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]'>
          <form className='rounded-[32px] border border-neutral-200 bg-white/80 p-6 shadow-[0_24px_80px_rgba(15,15,15,0.08)] backdrop-blur md:p-8'>
            <div className='grid gap-5 md:grid-cols-2'>
              <div>
                <label className='mb-2 block text-sm font-medium text-neutral-800'>
                  Ime
                </label>
                <input
                  type='text'
                  placeholder='Tvoje ime'
                  className='h-14 w-full rounded-2xl border border-neutral-200 bg-[#fafafa] px-4 text-sm outline-none transition placeholder:text-neutral-400 focus:border-neutral-950 focus:bg-white'
                />
              </div>

              <div>
                <label className='mb-2 block text-sm font-medium text-neutral-800'>
                  Email
                </label>
                <input
                  type='email'
                  placeholder='Tvoj email'
                  className='h-14 w-full rounded-2xl border border-neutral-200 bg-[#fafafa] px-4 text-sm outline-none transition placeholder:text-neutral-400 focus:border-neutral-950 focus:bg-white'
                />
              </div>
            </div>

            <div className='mt-5'>
              <label className='mb-2 block text-sm font-medium text-neutral-800'>
                Poruka
              </label>
              <textarea
                rows={7}
                placeholder='Napiši poruku...'
                className='w-full resize-none rounded-2xl border border-neutral-200 bg-[#fafafa] px-4 py-4 text-sm outline-none transition placeholder:text-neutral-400 focus:border-neutral-950 focus:bg-white'
              />
            </div>

            <Button className='mt-6' variant='primary'>
              Pošalji poruku
            </Button>
          </form>

          <aside className='rounded-[32px] bg-neutral-700 p-8 text-white shadow-[0_24px_80px_rgba(15,15,15,0.18)]'>
            <p className='text-xs font-semibold uppercase tracking-[0.3em] text-white/50'>
              Podrška
            </p>

            <h2 className='mt-4 text-2xl font-semibold'>
              Najbrži način da nas kontaktiraš
            </h2>

            <div className='mt-8 space-y-6'>
              <div>
                <p className='text-sm text-white/50'>Email</p>
                <p className='mt-1 text-lg font-medium'>hello@glowuj.com</p>
              </div>

              <div>
                <p className='text-sm text-white/50'>Vreme odgovora</p>
                <p className='mt-1 text-lg font-medium'>U roku od 24h</p>
              </div>

              <div>
                <p className='text-sm text-white/50'>
                  Za šta nas možeš kontaktirati
                </p>
                <p className='mt-1 leading-7 text-white/80'>
                  Pitanja o analizama, privatnosti, rezultatima, uplati ili
                  potencijalnoj saradnji.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
