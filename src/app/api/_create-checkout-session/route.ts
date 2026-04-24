export async function POST() {
  return Response.json(
    { error: 'Plaćanje trenutno nije aktivno.' },
    { status: 503 },
  );
}
