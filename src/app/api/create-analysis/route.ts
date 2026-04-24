import { NextResponse } from 'next/server';
import { createServerSupabaseClient } from '@/lib/supabase/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const supabase = createServerSupabaseClient();

    const { data, error } = await supabase
      .from('analyses')
      .insert({
        face_image_url: body.faceImageUrl,
        body_image_url: body.bodyImageUrl,
        body_measurements: body.bodyMeasurements ?? null,
        gender: body.gender,
        age_group: body.ageGroup,
        style: body.style,
        occasion: body.occasion,
        status: 'pending',
        is_paid: false,
      })
      .select('*')
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: 'Error creating analysis' },
      { status: 500 },
    );
  }
}
