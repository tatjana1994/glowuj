import Stripe from 'stripe';
import { stripe } from '@/lib/stripe';
import { createServerSupabaseClient } from '@/lib/supabase/server';

export async function POST(req: Request) {
  const body = await req.text();
  const signature = req.headers.get('stripe-signature')!;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!,
    );
  } catch {
    return new Response('Greška webhook', { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;

    const analysisId = session.success_url?.split('id=')[1] ?? null;

    if (!analysisId) {
      return new Response('Nedostaje analysisId', { status: 400 });
    }

    const supabase = createServerSupabaseClient();

    await supabase
      .from('analyses')
      .update({ is_paid: true })
      .eq('id', analysisId);
  }

  return new Response('OK');
}
