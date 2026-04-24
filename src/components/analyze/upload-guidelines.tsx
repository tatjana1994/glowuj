import { Card } from '@/components/ui/card';

type UploadGuidelinesProps = {
  type: 'face' | 'body';
};

export function UploadGuidelines({ type }: UploadGuidelinesProps) {
  const rules =
    type === 'face'
      ? [
          'Gledaj pravo u kameru',
          'Bez filtera i bez sunčanih naočara',
          'Dobro prirodno svetlo',
          'Celo lice mora biti vidljivo',
        ]
      : [
          'Cela figura spreda',
          'Jedna osoba na slici',
          'Neutralna poza (bez sedenja)',
          'Jasna silueta i dovoljno svetla',
        ];

  return (
    <Card className='p-5'>
      <h3 className='text-sm font-semibold text-neutral-950'>
        Pravila za dobru fotografiju
      </h3>

      <ul className='mt-3 space-y-2 text-sm text-neutral-600'>
        {rules.map((rule) => (
          <li key={rule}>• {rule}</li>
        ))}
      </ul>
    </Card>
  );
}
