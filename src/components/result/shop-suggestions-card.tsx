import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { shopItems } from '@/lib/data/shop-items';

export function ShopSuggestionsCard() {
  const items = [...shopItems.trousers, ...shopItems.jackets].slice(0, 4);

  return (
    <Card className='p-6'>
      <h2 className='text-xl font-semibold text-neutral-950'>
        Predlozi za kupovinu
      </h2>

      <div className='mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4'>
        {items.map((item) => (
          <a
            key={item.title}
            href={item.url}
            target='_blank'
            rel='noreferrer'
            className='group rounded-2xl border border-neutral-200 p-3'
          >
            <div className='relative aspect-[4/5] overflow-hidden rounded-2xl bg-neutral-100'>
              <Image
                src={item.image}
                alt={item.title}
                fill
                className='object-cover transition group-hover:scale-[1.02]'
                unoptimized
              />
            </div>

            <div className='mt-3'>
              <p className='text-sm font-medium text-neutral-950'>
                {item.title}
              </p>
              <p className='mt-1 text-xs text-neutral-500'>
                {item.brand} · {item.price}
              </p>
            </div>
          </a>
        ))}
      </div>
    </Card>
  );
}
