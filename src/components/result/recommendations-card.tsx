import { Card } from '@/components/ui/card';

type RecommendationsCardProps = {
  recommendations: {
    tops: string[];
    trousers: string[];
    dresses: string[];
    jackets: string[];
    necklines: string[];
    sleeves: string[];
  };
};

export function RecommendationsCard({
  recommendations,
}: RecommendationsCardProps) {
  const sections = [
    { label: 'Topovi', items: recommendations.tops },
    { label: 'Pantalone', items: recommendations.trousers },
    { label: 'Haljine', items: recommendations.dresses },
    { label: 'Jakne i kaputi', items: recommendations.jackets },
    { label: 'Izrezi', items: recommendations.necklines },
    { label: 'Rukavi', items: recommendations.sleeves },
  ];

  return (
    <Card className='p-6'>
      <h2 className='text-xl font-semibold text-neutral-950'>What to Wear</h2>

      <div className='mt-6 grid gap-5 md:grid-cols-2'>
        {sections.map((section) => (
          <div key={section.label}>
            <h3 className='text-sm font-semibold text-neutral-900'>
              {section.label}
            </h3>

            <ul className='mt-3 space-y-2 text-sm text-neutral-700'>
              {section.items.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Card>
  );
}
