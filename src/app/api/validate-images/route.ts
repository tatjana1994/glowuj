import { NextResponse } from 'next/server';

export async function POST() {
  try {
    return NextResponse.json({
      faceValid: true,
      bodyValid: true,
      faceErrors: [],
      bodyErrors: [],
    });
  } catch {
    return NextResponse.json(
      {
        faceValid: false,
        bodyValid: false,
        faceErrors: ['Greška pri validaciji'],
        bodyErrors: ['Greška pri validaciji'],
      },
      { status: 500 },
    );
  }
}
