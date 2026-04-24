import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';

export async function POST(request: Request) {
  const { analysisId } = await request.json();

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: [
      {
        price: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID!,
        quantity: 1,
      },
    ],
    success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success?id=${analysisId}`,
    cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/rezultat/${analysisId}`,
  });

  return NextResponse.json({ url: session.url });
}
