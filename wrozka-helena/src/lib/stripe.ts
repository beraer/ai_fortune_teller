export const handlePayment = async (packageType: string, customerEmail?: string, customerName?: string) => {
  try {
    const response = await fetch('/api/create-checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        packageType,
        customerEmail,
        customerName,
      }),
    });

    const data = await response.json();

    if (data.url) {
      // Redirect to Stripe checkout
      window.location.href = data.url;
    } else {
      console.error('Error creating checkout:', data.error);
      alert('Wystąpił błąd podczas przetwarzania płatności. Spróbuj ponownie.');
    }
  } catch (error) {
    console.error('Payment error:', error);
    alert('Wystąpił błąd podczas przetwarzania płatności. Spróbuj ponownie.');
  }
};

export const PACKAGE_TYPES = {
  '1-question': '1-question',
  '3-questions': '3-questions',
  '5-questions': '5-questions',
  '3-cards': '3-cards',
  '5-cards': '5-cards',
  'love-tarot': 'love-tarot',
  'celtic-cross': 'celtic-cross',
  'yearly': 'yearly'
} as const;
