'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TarotCardDeck from '@/components/TarotCardDeck';

// Sample tarot card images for demonstration
const sampleCards = [
  'https://ext.same-assets.com/3736986635/1716170053.jpeg', // Four of Swords
  'https://ext.same-assets.com/3736986635/2902686682.jpeg', // Five of Pentacles
  'https://ext.same-assets.com/3736986635/1068553693.jpeg', // Ten of Cups
  'https://ext.same-assets.com/3736986635/3943504748.jpeg', // King of Cups
  'https://ext.same-assets.com/3736986635/277431083.jpeg'   // The Hermit
];

const Tarot5Karty = () => {
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [isReading, setIsReading] = useState(false);
  const [showReading, setShowReading] = useState(false);

  const requiredCards = 5;

  const handleCardSelect = (cardIndex: number) => {
    if (selectedCards.includes(cardIndex)) {
      setSelectedCards(selectedCards.filter(card => card !== cardIndex));
    } else if (selectedCards.length < requiredCards) {
      setSelectedCards([...selectedCards, cardIndex]);
    }
  };

  const handleRevealCards = () => {
    if (selectedCards.length === requiredCards) {
      setIsReading(true);
      setTimeout(() => {
        setShowReading(true);
        setIsReading(false);
      }, 2000);
    }
  };

  const RevealedCard = ({ index, image }: { index: number; image?: string }) => (
    <div className="relative w-20 h-28 rounded-lg overflow-hidden shadow-lg">
      {image ? (
        <img
          src={image}
          alt={`Tarot card ${index + 1}`}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full bg-gray-800 border-2 border-dashed border-gray-400 rounded-lg flex items-center justify-center">
          <div className="w-6 h-6 border border-gray-500 rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
          </div>
        </div>
      )}
    </div>
  );

  if (showReading) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="section-padding bg-beige">
          <div className="container-max">
            <div className="text-center mb-8">
              <h1 className="font-playfair text-3xl lg:text-4xl text-gray-900 mb-4">
                Oto Twój rozkład kart
              </h1>
              <p className="text-gray-600 mb-8">
                CHCESZ WYLOSOWAĆ INNE KARTY? KLIKNIJ TUTAJ
              </p>
            </div>

            {/* Revealed Cards */}
            <div className="flex justify-center space-x-4 mb-12">
              {selectedCards.slice(0, 5).map((cardIndex, i) => (
                <RevealedCard key={cardIndex} index={i} image={sampleCards[i]} />
              ))}
            </div>

            {/* Reading Results */}
            <div className="max-w-4xl mx-auto bg-white rounded-lg p-8 shadow-sm">
              <h2 className="font-playfair text-2xl text-gray-900 mb-6 text-center">
                Twój osobisty rozkład tarota:
              </h2>

              <div className="space-y-4 text-gray-600 mb-8">
                <p><strong>SIEDEM MIECZY:</strong> Spryt i strategia pomogą Ci osiągnąć cel, dbałoś rozwazenie, ale również nie oszukuje.</p>
                <p><strong>DWA BUŁAW:</strong> Plany i decyzje czasu na wspór długi, który wprowadzi Cię do celu.</p>
                <p><strong>DZIEWIĘĆ MONET:</strong> Dziedzictwo i stabilności materialne otwierają nowe rozkłady, co pozwolisz po sobie?</p>
                <p><strong>DZIEWIĘĆ MIECZY:</strong> Lęki, niepewność i koszmar w związku.</p>
                <p><strong>DZIEWIĘĆ KIELICHÓW:</strong> Twoje pragnienia się na wysycisiejsce rai, ale czy to jest przynosi Ci szczęściet?</p>
              </div>

              <div className="text-center">
                <p className="text-gray-600 italic mb-6">
                  Chcesz wiedzieć co ta karty oznaczają konkretnie dla Ciebie? Przeprowę pełną interpretację, która rozjaśni Twoją sytuację.
                </p>
                <form className="space-y-4 max-w-lg mx-auto">
                  <textarea
                    placeholder="Zadaj pytanie lub opisz, co Cię nurtuje..."
                    className="form-input h-32"
                    rows={6}
                  />
                  <button className="btn-primary w-full">
                    Odkryj pełne znaczenie kart (80zł) →
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="section-padding bg-white">
        <div className="container-max">
          {/* Header */}
          <div className="text-center mb-8">
            <button className="bg-black text-white px-6 py-2 rounded text-sm mb-6">
              Zamów rozkład
            </button>
            <p className="text-gray-500 text-sm mb-8">
              lub wylosuj karty poniżej
            </p>

            <h1 className="font-playfair text-3xl lg:text-4xl text-gray-900 mb-6 italic">
              Oto Twój rozkład kart
            </h1>
            <p className="text-gray-600 text-sm mb-8">
              CHCESZ WYLOSOWAĆ INNE KARTY? KLIKNIJ TUTAJ
            </p>
          </div>

          {/* Card Selection Area */}
          <div className="bg-beige rounded-lg p-8 mb-12">
            <div className="text-center">
              <h2 className="font-playfair text-2xl text-gray-900 mb-6 italic">
                Weź głęboki oddech i skup się na swoim pytaniu
              </h2>

              <h3 className="text-gray-600 text-lg mb-8">
                WYBIERZ 5 KART
              </h3>

              {/* Selected card positions */}
              <div className="flex justify-center space-x-4 mb-8">
                {Array.from({ length: 5 }, (_, i) => (
                  <RevealedCard
                    key={i}
                    index={i}
                    image={selectedCards.length > i ? sampleCards[i] : undefined}
                  />
                ))}
              </div>

              {/* Scrollable Deck */}
              <TarotCardDeck
                selectedCards={selectedCards}
                onCardSelect={handleCardSelect}
                requiredCards={requiredCards}
                onRevealCards={handleRevealCards}
                isReading={isReading}
              />
            </div>
          </div>

          {/* Bottom Info Section */}
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-gray-600 text-sm mb-4 italic">
                  Tarot — Rozkład 5 Kart
                </p>
                <h3 className="font-playfair text-xl font-bold text-gray-900 mb-4">
                  Odkryj pełny obraz swojej sytuacji
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Miłość to jedno z najważniejszych sfer naszego życia, ale i źródło wielu pytań i wątpliwości. Jak rozważyć sprawę uczuciowe?
                </p>
              </div>
              <div className="flex justify-center">
                <div className="w-64 h-40 bg-gray-800 rounded-lg flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-16 h-16 bg-gray-600 rounded-lg mx-auto mb-2"></div>
                    <p className="text-sm">Tarot Cards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Tarot5Karty;
