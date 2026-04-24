export function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className='mx-auto max-w-2xl text-center'>
      {eyebrow ? (
        <p className='mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500'>
          {eyebrow}
        </p>
      ) : null}

      <h2 className='text-3xl font-semibold tracking-tight text-neutral-950 md:text-4xl'>
        {title}
      </h2>

      {description ? (
        <p className='mt-4 text-base text-neutral-600'>{description}</p>
      ) : null}
    </div>
  );
}
