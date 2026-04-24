import { NextResponse } from 'next/server';
import { createServerSupabaseClient } from '@/lib/supabase/server';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file');

    if (!(file instanceof File)) {
      return NextResponse.json(
        { error: 'Fajl nije prosleđen' },
        { status: 400 },
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const filePath = `uploads/${crypto.randomUUID()}-${file.name}`;

    const supabase = createServerSupabaseClient();

    const { error } = await supabase.storage
      .from('style-images')
      .upload(filePath, buffer, {
        contentType: file.type,
      });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    const { data } = supabase.storage
      .from('style-images')
      .getPublicUrl(filePath);

    return NextResponse.json({ url: data.publicUrl });
  } catch (err) {
    return NextResponse.json({ error: 'Upload nije uspeo' }, { status: 500 });
  }
}
