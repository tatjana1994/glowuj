export function AnalyzingLoader() {
  return (
    <div className='rounded-3xl border border-neutral-200 bg-white p-8 text-center shadow-sm'>
      <div className='mx-auto h-12 w-12 animate-spin rounded-full border-4 border-neutral-200 border-t-neutral-900' />

      <h3 className='mt-6 text-xl font-semibold text-neutral-950'>
        Analiziramo tvoje fotografije
      </h3>

      <p className='mt-3 text-sm leading-6 text-neutral-600'>
        Proveravamo kvalitet slika, ton i kontrast lica, proporcije tela i
        pripremamo tvoje preporuke.
      </p>
    </div>
  );
}
