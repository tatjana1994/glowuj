import { Badge } from '@/components/ui/badge';

type ResultHeaderProps = {
  createdAt: string;
  paid: boolean;
};

export function ResultHeader({ createdAt, paid }: ResultHeaderProps) {
  const formattedDate = new Date(createdAt).toLocaleDateString('sr-RS', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  return (
    <div className='flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
      <div>
        <p className='text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500'>
          Tvoj rezultat
        </p>

        <h1 className='mt-2 text-3xl font-semibold tracking-tight text-neutral-950 md:text-4xl'>
          Lični vodič stila
        </h1>

        <p className='mt-2 text-sm text-neutral-500'>
          Kreirano: {formattedDate}
        </p>
      </div>

      <Badge
        className={
          paid
            ? 'bg-emerald-100 text-emerald-700'
            : 'bg-neutral-100 text-neutral-700'
        }
      >
        {paid ? 'Otključano' : 'Pregled'}
      </Badge>
    </div>
  );
}
