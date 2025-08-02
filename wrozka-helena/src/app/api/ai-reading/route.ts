import { NextResponse } from 'next/server';
import { getCardsByIds, type TarotCard } from '@/lib/tarotDeck';
import OpenAI from 'openai';

export async function POST(request: Request) {
  try {
    const { name, birthdate, language, question, cardIds } = await request.json();

    // Validate input
    if (!name || !question) {
      return NextResponse.json(
        { error: 'Name and question are required' },
        { status: 400 }
      );
    }

    // Get the selected cards
    const selectedCards = getCardsByIds(cardIds || []);

    // Create the system prompt
    const systemPrompt = `Jesteś doświadczoną polską wróżką o imieniu Helena. ${
      language === 'EN'
        ? 'Reply in English with a gentle, uplifting style.'
        : 'Odpowiadaj po polsku łagodnym, podnoszącym na duchu stylem.'
    } ${
      selectedCards.length > 0
        ? `Wplej znaczenie następujących kart Tarota w swoją interpretację: ${selectedCards.map(card => card.namePL).join(', ')}.`
        : ''
    } Bądź konkretna, ale pozytywna. Długość odpowiedzi: około 300-400 słów.`;

    const userPrompt = `Imię: ${name}
    ${birthdate ? `Data urodzenia: ${birthdate}` : ''}
    Pytanie: ${question}
    ${selectedCards.length > 0 ? `Wybrane karty: ${selectedCards.map(card => `${card.namePL} - ${card.meaningUpright}`).join('\n')}` : ''}`;

    // Check for OpenAI API key
    if (!process.env.OPENAI_API_KEY) {
      console.warn('OpenAI API key not found, using mock response');
      const mockReading = generateMockReading(name, question, selectedCards, language);
      return NextResponse.json({
        answer: mockReading,
        cards: selectedCards,
        note: 'Mock response - add OPENAI_API_KEY to use real AI'
      });
    }

    // Initialize OpenAI
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    // Call OpenAI API
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: systemPrompt
        },
        {
          role: "user",
          content: userPrompt
        }
      ],
      temperature: 0.9,
      max_tokens: 500,
    });

    const reading = completion.choices[0]?.message?.content || 'Przepraszam, nie udało się wygenerować wróżby.';

    return NextResponse.json({
      answer: reading,
      cards: selectedCards
    });

  } catch (error) {
    console.error('Error generating reading:', error);

    // Fallback to mock reading if OpenAI fails
    try {
      const { name, birthdate, language, question, cardIds } = await request.json();
      const mockReading = generateMockReading(name, question, getCardsByIds(cardIds || []), language);

      return NextResponse.json({
        answer: mockReading,
        cards: getCardsByIds(cardIds || []),
        note: 'Fallback response due to API error'
      });
    } catch {
      return NextResponse.json(
        { error: 'Failed to generate reading' },
        { status: 500 }
      );
    }
  }
}

function generateMockReading(name: string, question: string, cards: TarotCard[], language: string): string {
  if (language === 'EN') {
    return `Dear ${name},

Thank you for your question: "${question}"

${cards.length > 0 ? `The cards you've chosen - ${cards.map(c => c.nameEN).join(', ')} - ` : ''}reveal important insights about your situation.

I see a period of transformation and growth ahead of you. The energy surrounding your question suggests that you are at a crossroads, and the universe is preparing to guide you toward positive changes.

Trust your intuition during this time, as it will be your greatest ally. The challenges you face now are temporary and serve a higher purpose in your spiritual journey.

Remember that every ending creates space for a beautiful new beginning. Stay open to unexpected opportunities and be gentle with yourself as you navigate this period.

Your path is illuminated with hope and possibility.

With love and light,
Helena`;
  }

  return `Droga ${name},

Dziękuję za Twoje pytanie: "${question}"

${cards.length > 0 ? `Wybrane przez Ciebie karty - ${cards.map(c => c.namePL).join(', ')} - ` : ''}odsłaniają ważne przesłania dotyczące Twojej sytuacji.

Widzę przed Tobą okres transformacji i rozwoju. Energia otaczająca Twoje pytanie sugeruje, że znajdujesz się na rozdrożu, a wszechświat przygotowuje się, by poprowadzić Cię ku pozytywnym zmianom.

Zaufaj swojej intuicji w tym czasie, bo będzie Twoim największym sprzymierzeńcem. Wyzwania, z którymi się teraz mierzysz, są tymczasowe i służą wyższemu celowi w Twojej duchowej podróży.

Pamiętaj, że każde zakończenie tworzy przestrzeń dla pięknego nowego początku. Bądź otwarta na nieoczekiwane możliwości i bądź dla siebie łagodna, gdy przechodzisz przez ten okres.

Twoja ścieżka jest oświetlona nadzieją i możliwościami.

Z miłością i światłem,
Helena`;
}
