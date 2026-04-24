import { Card } from '@/components/ui/card';

type StyleSummaryCardProps = {
  season: string;
  bodyShape?: string;
  summary: string;
};

export function StyleSummaryCard({
  season,
  bodyShape,
  summary,
}: StyleSummaryCardProps) {
  return (
    <Card className='p-6'>
      <p className='text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500'>
        Style Summary
      </p>

      <div className='mt-4 flex flex-wrap gap-3 text-sm text-neutral-700'>
        <span className='rounded-full bg-neutral-100 px-3 py-1'>{season}</span>

        {bodyShape ? (
          <span className='rounded-full bg-neutral-100 px-3 py-1'>
            {bodyShape}
          </span>
        ) : null}
      </div>

      <p className='mt-4 text-sm leading-7 text-neutral-700'>{summary}</p>
    </Card>
  );
}
