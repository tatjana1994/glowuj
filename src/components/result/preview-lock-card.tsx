'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

type PreviewLockCardProps = {
  analysisId: string;
};

export function PreviewLockCard({ analysisId }: PreviewLockCardProps) {
  async function handleCheckout() {
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ analysisId }),
    });

    const data = await response.json();

    if (data.url) {
      window.location.href = data.url;
    }
  }

  return (
    <Card className='border-neutral-900 p-6'>
      <h2 className='text-2xl font-semibold text-neutral-950'>
        Otključaj puni izveštaj
      </h2>

      <p className='mt-3 text-sm text-neutral-600'>
        Kompletna paleta boja, detaljan vodič za figuru, preporuke po
        kategorijama, stvari koje treba da izbegavaš i outfit formule.
      </p>

      <div className='mt-6 flex items-center justify-between gap-4'>
        <p className='text-2xl font-semibold text-neutral-950'>7.99€</p>

        <Button onClick={handleCheckout}>Otključaj sada</Button>
      </div>
    </Card>
  );
}
