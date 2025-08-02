import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, birthDate, question } = await request.json();

    // Validate input
    if (!name || !email || !question) {
      return NextResponse.json(
        { error: 'Name, email and question are required' },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Trigger AI reading if it's a paid order

    console.log('New order received:', { name, email, birthDate, question });

    // For now, just log and return success
    // In production, you'd integrate with your database and email service

    return NextResponse.json({
      message: 'Dziękujemy! Wróżba wkrótce trafi na Twój e-mail.',
      success: true
    });

  } catch (error) {
    console.error('Error processing order:', error);
    return NextResponse.json(
      { error: 'Failed to process order' },
      { status: 500 }
    );
  }
}
