import { NextResponse } from 'next/server';
import Stripe from 'stripe';

// Pricing packages matching the website
const PRICING_PACKAGES = {
  '1-question': { price: 1400, name: '1 pytanie', description: 'Odpowiedź w 15 minut' }, // 14 PLN in grosz
  '3-questions': { price: 2900, name: '3 pytania', description: 'Odpowiedź w 25 minut' }, // 29 PLN in grosz
  '5-questions': { price: 3900, name: '5 pytań', description: 'Odpowiedź w 30 minut' }, // 39 PLN in grosz
  '3-cards': { price: 5000, name: '3 Karty', description: 'Odpowiedź do 30m' },
  '5-cards': { price: 8000, name: '5 Kart', description: 'Odpowiedź do 1h' },
  'love-tarot': { price: 9000, name: 'Tarot Miłosny', description: 'Odpowiedź do 2h' },
  'celtic-cross': { price: 20000, name: 'Krzyż Celtycki', description: 'Odpowiedź do 12h' },
  'yearly': { price: 24000, name: 'Tarot Roczny', description: 'Odpowiedź do 24h' }
};

export async function POST(request: Request) {
  try {
    const { packageType, customerEmail, customerName } = await request.json();

    // Validate package type
    if (!PRICING_PACKAGES[packageType as keyof typeof PRICING_PACKAGES]) {
      return NextResponse.json(
        { error: 'Invalid package type' },
        { status: 400 }
      );
    }

    // Check for Stripe secret key
    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json(
        { error: 'Stripe not configured' },
        { status: 500 }
      );
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const package_info = PRICING_PACKAGES[packageType as keyof typeof PRICING_PACKAGES];

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card', 'blik', 'p24'], // Polish payment methods
      line_items: [
        {
          price_data: {
            currency: 'pln',
            product_data: {
              name: `Wróżka Helena - ${package_info.name}`,
              description: package_info.description,
              images: ['https://ext.same-assets.com/3736986635/277431083.jpeg'], // Tarot image
            },
            unit_amount: package_info.price,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/dziękujemy?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/cennik`,
      customer_email: customerEmail,
      metadata: {
        package_type: packageType,
        customer_name: customerName,
      },
      billing_address_collection: 'required',
      shipping_address_collection: {
        allowed_countries: ['PL'], // Poland only for now
      },
    });

    return NextResponse.json({ url: session.url });

  } catch (error) {
    console.error('Error creating checkout session:', error);
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}
