export async function POST() {
  return Response.json(
    { received: true, message: 'Stripe webhook trenutno nije aktivan.' },
    { status: 200 },
  );
}
