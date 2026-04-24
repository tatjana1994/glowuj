export function AboutSection() {
  return (
    <section className='bg-white py-16 md:py-24'>
      <div className='mx-auto max-w-6xl px-6'>
        <div className='grid items-center gap-12 lg:grid-cols-[1fr_1fr]'>
          <div>
            <p className='text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500'>
              O nama
            </p>

            <h2 className='mt-4 text-4xl font-semibold tracking-tight text-neutral-950 md:text-5xl'>
              Glowuj spaja stil, tehnologiju i personalizaciju.
            </h2>

            <p className='mt-6 text-lg leading-8 text-neutral-600'>
              Verujemo da dobar stil ne treba da bude komplikovan. Zato smo
              napravili platformu koja kroz pametnu analizu pomaže da otkriješ
              boje, krojeve i kombinacije koje ti zaista pristaju.
            </p>

            <p className='mt-5 text-lg leading-8 text-neutral-600'>
              Cilj Glowuj-a je da svaka osoba dobije jasan i moderan vodič kroz
              sopstveni izgled — bez nagađanja i bez lutanja pri kupovini.
            </p>
          </div>

          <div className='grid gap-4 sm:grid-cols-2'>
            <div className='rounded-[28px] border border-neutral-200 bg-[#f7f5f2] p-6'>
              <p className='text-sm font-medium text-neutral-500'>
                Personalizovano
              </p>
              <h3 className='mt-3 text-xl font-semibold text-neutral-950'>
                Prilagođeno tebi
              </h3>
              <p className='mt-3 text-sm leading-7 text-neutral-600'>
                Svaka preporuka bazirana je na tvojim fotografijama, merama i
                preferencijama.
              </p>
            </div>

            <div className='rounded-[28px] border border-neutral-200 bg-[#f7f5f2] p-6'>
              <p className='text-sm font-medium text-neutral-500'>
                Jednostavno
              </p>
              <h3 className='mt-3 text-xl font-semibold text-neutral-950'>
                Brzo i jasno
              </h3>
              <p className='mt-3 text-sm leading-7 text-neutral-600'>
                Bez komplikovanih pravila — dobijaš konkretne smernice koje
                možeš odmah primeniti.
              </p>
            </div>

            <div className='rounded-[28px] border border-neutral-200 bg-[#f7f5f2] p-6 sm:col-span-2'>
              <p className='text-sm font-medium text-neutral-500'>
                Naša misija
              </p>
              <h3 className='mt-3 text-xl font-semibold text-neutral-950'>
                Više samopouzdanja kroz stil
              </h3>
              <p className='mt-3 text-sm leading-7 text-neutral-600'>
                Želimo da ti pomognemo da se osećaš sigurnije, izgledaš bolje i
                kupuješ pametnije.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
