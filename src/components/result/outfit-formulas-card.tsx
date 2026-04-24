import { Card } from '@/components/ui/card';

type OutfitFormulasCardProps = {
  items: string[];
};

export function OutfitFormulasCard({ items }: OutfitFormulasCardProps) {
  return (
    <Card className='p-6'>
      <h2 className='text-xl font-semibold text-neutral-950'>Outfit formule</h2>

      <div className='mt-5 space-y-3'>
        {items.map((item) => (
          <div
            key={item}
            className='rounded-2xl bg-neutral-50 p-4 text-sm text-neutral-700'
          >
            {item}
          </div>
        ))}
      </div>
    </Card>
  );
}
