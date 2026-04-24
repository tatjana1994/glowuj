import { Card } from '@/components/ui/card';

type BodyShapeCardProps = {
  bodyShape: string;
  focus: string[];
};

export function BodyShapeCard({ bodyShape, focus }: BodyShapeCardProps) {
  return (
    <Card className='p-6'>
      <h2 className='text-xl font-semibold text-neutral-950'>
        Vodič za oblik tela
      </h2>

      <p className='mt-3 text-sm text-neutral-600'>
        Procenjeni oblik tela: {bodyShape}
      </p>

      <ul className='mt-4 space-y-2 text-sm text-neutral-700'>
        {focus.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </Card>
  );
}
