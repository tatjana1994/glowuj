import { Card } from '@/components/ui/card';

type ColorPaletteCardProps = {
  neutralColors: string[];
  accentColors: string[];
  metals: string[];
};

export function ColorPaletteCard({
  neutralColors,
  accentColors,
  metals,
}: ColorPaletteCardProps) {
  const colors = [...neutralColors, ...accentColors];

  return (
    <Card className='p-6'>
      <h2 className='text-xl font-semibold text-neutral-950'>Color Palette</h2>

      <div className='mt-5 flex flex-wrap gap-3'>
        {colors.map((color, index) => (
          <div
            key={`${color}-${index}`}
            className='flex flex-col items-center gap-2'
          >
            <div
              className='h-16 w-16 rounded-2xl border border-neutral-200'
              style={{ backgroundColor: color }}
            />
          </div>
        ))}
      </div>

      <div className='mt-5 text-sm text-neutral-600'>
        Best metals: {metals.join(', ')}
      </div>
    </Card>
  );
}
