import Link from 'next/link';

export default function NotFound() {
  return (
    <main className='min-h-screen bg-[#f7f5f2] px-6 py-16 md:py-24'>
      <section className='mx-auto flex max-w-4xl flex-col items-center justify-center text-center'>
        <p className='text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500'>
          Greška 404
        </p>

        <h1 className='mt-5 text-5xl font-semibold tracking-tight text-neutral-950 md:text-7xl'>
          Stranica nije pronađena
        </h1>

        <p className='mt-6 max-w-2xl text-lg leading-8 text-neutral-600'>
          Stranica koju tražiš ne postoji, obrisana je ili je link pogrešan.
        </p>

        <div className='mt-10 flex flex-wrap items-center justify-center gap-4'>
          <Link
            href='/'
            className='inline-flex h-14 items-center justify-center rounded-full bg-neutral-950 px-8 text-sm font-semibold text-white transition hover:bg-neutral-800'
          >
            Nazad na početnu
          </Link>

          <Link
            href='/kontakt'
            className='inline-flex h-14 items-center justify-center rounded-full border border-neutral-200 bg-white px-8 text-sm font-semibold text-neutral-900 transition hover:border-neutral-300'
          >
            Kontakt podrška
          </Link>
        </div>
      </section>
    </main>
  );
}
