import { Card } from '@/components/ui/card';

type AvoidListCardProps = {
  items: string[];
};

export function AvoidListCard({ items }: AvoidListCardProps) {
  return (
    <Card className='p-6'>
      <h2 className='text-xl font-semibold text-neutral-950'>
        Šta da izbegavaš
      </h2>

      <ul className='mt-5 space-y-3 text-sm text-neutral-700'>
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </Card>
  );
}
