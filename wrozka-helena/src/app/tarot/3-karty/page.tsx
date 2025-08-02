'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EnhancedTarotDeck from '@/components/EnhancedTarotDeck';

const Tarot3Karty = () => {
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [isReading, setIsReading] = useState(false);
  const [showReading, setShowReading] = useState(false);

  const requiredCards = 3;

  const handleCardSelect = (cardIndex: number) => {
    if (selectedCards.includes(cardIndex)) {
      setSelectedCards(selectedCards.filter(card => card !== cardIndex));
    } else if (selectedCards.length < requiredCards) {
      setSelectedCards([...selectedCards, cardIndex]);
    }
  };

  const handleRevealCards = async () => {
    if (selectedCards.length === requiredCards) {
      setIsReading(true);

      // Simulate AI reading generation
      setTimeout(() => {
        setShowReading(true);
        setIsReading(false);
      }, 3000);
    }
  };

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
                <button className="underline hover:text-gray-800 transition-colors">
                  CHCESZ WYLOSOWAĆ INNE KARTY? KLIKNIJ TUTAJ
                </button>
              </p>
            </div>

            {/* Reading Results */}
            <div className="max-w-4xl mx-auto bg-white rounded-lg p-8 shadow-sm">
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <h3 className="font-semibold text-gray-700 mb-2">Przeszłość</h3>
                  <div className="w-20 h-32 mx-auto bg-gray-800 rounded-lg mb-4"></div>
                  <p className="text-sm text-gray-600">AS MIECZY - Jasność myślenia, nowe możliwości</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-700 mb-2">Teraźniejszość</h3>
                  <div className="w-20 h-32 mx-auto bg-gray-800 rounded-lg mb-4"></div>
                  <p className="text-sm text-gray-600">TRÓJKA KIELICHÓW - Radość, przyjaźń, świętowanie</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-700 mb-2">Przyszłość</h3>
                  <div className="w-20 h-32 mx-auto bg-gray-800 rounded-lg mb-4"></div>
                  <p className="text-sm text-gray-600">SŁOŃCE - Sukces, radość, spełnienie</p>
                </div>
              </div>

              <div className="text-center">
                <p className="text-gray-600 italic mb-6">
                  Chcesz wiedzieć co te karty oznaczają konkretnie dla Ciebie? Przeprowę pełną interpretację, która rozjaśni Twoją sytuację.
                </p>
                <form className="space-y-4 max-w-lg mx-auto">
                  <textarea
                    placeholder="Zadaj pytanie lub opisz, co Cię nurtuje..."
                    className="form-input h-32"
                    rows={6}
                  />
                  <button className="btn-primary w-full">
                    Odkryj pełne znaczenie kart (50zł) →
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
          <div className="text-center mb-12">
            <h1 className="font-playfair text-3xl lg:text-4xl text-gray-900 mb-6 italic">
              Rozkład Tarota z 3 kart
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Rozkład Tarota na przyszłość — <strong>wylosuj trzy karty Tarota</strong> i poznaj ich znaczenie:
              <em>przeszłość, teraźniejszość i przyszłość</em>.
            </p>

            <div className="mb-12">
              <button className="bg-black text-white px-8 py-3 rounded text-sm font-medium mb-4">
                Zamów rozkład
              </button>
              <p className="text-gray-500 text-sm">
                lub wylosuj karty poniżej:
              </p>
            </div>
          </div>

          {/* Enhanced Card Selection */}
          <EnhancedTarotDeck
            selectedCards={selectedCards}
            onCardSelect={handleCardSelect}
            requiredCards={requiredCards}
            onRevealCards={handleRevealCards}
            isReading={isReading}
            title="Weź głęboki oddech i skup się na swoim pytaniu"
            subtitle="WYBIERZ"
          />

          {/* Information Sections */}
          <div className="mt-16 grid lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="mb-6">
                <span className="text-sm text-gray-500 italic">Tarot — Rozkład 3 Kart</span>
                <h2 className="font-playfair text-2xl font-bold text-gray-900 mt-2 mb-4">
                  Spojrzenie w przeszłość, teraźniejszość i przyszłość
                </h2>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">
                Stoisz na rozdrożu? Nurtuje Cię jakaś kwestia i pragniesz jasności? <em>Rozkład 3 Kart</em> to idealne
                rozwiązanie, gdy potrzebujesz szybkiego wglądu w daną sytuację i wskazówek na przyszłość.
              </p>

              <button className="bg-black text-white px-6 py-3 rounded text-sm font-medium">
                Wylosuj karty
              </button>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  <strong>Przeszłość, Teraźniejszość, Przyszłość</strong>
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Ten rozkład jest dla mnie jak kompas, który wskazuje kierunek w gąszczu możliwości.
                  To idealne rozwiązanie dla osób, które cenią sobie konkretne odpowiedzi i praktyczne wskazówki.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <div>
                <p className="text-gray-600 leading-relaxed">
                  Prosty, ale niezwykle skuteczny rozkład 3 kart to idealne narzędzie do uzyskania zwięzłych
                  odpowiedzi i wglądów w konkretną sytuację. Karty reprezentują kolejno: przeszłość, teraźniejszość
                  i przyszłość związaną z Twoim pytaniem. Ten klasyczny układ pozwala zrozumieć źródła problemu,
                  obecne okoliczności oraz możliwe scenariusze na drodze przed Tobą.
                </p>
              </div>

              <div>
                <p className="text-gray-600 leading-relaxed">
                  Rozkład 3 kart sięga korzeniami głęboko w historię wróżbiarstwa. Już w starożytności znano jego
                  moc objawiania prawd ukrytych w nurcie czasu. Trzy karty to trzy zasłony opadające przed Twoimi
                  oczami — ukazujące drogę przebytą, stan obecny oraz niewiadome ścieżki czekające na odkrycie.
                </p>
              </div>
            </div>
          </div>

          {/* Questions Section */}
          <div className="mt-16 bg-gray-100 rounded-lg p-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="font-playfair text-xl font-bold text-gray-900 mb-6">
                  Czy zastanawiasz się...
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1">✓</span>
                    Co powinnam zrobić w tej konkretnej sytuacji?
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1">✓</span>
                    W jakim kierunku zmierza moje życie?
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1">✓</span>
                    Co czeka mnie w pracy w najbliższym czasie?
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1">✓</span>
                    Co mogę zrobić, aby poprawić moją relację z partnerem?
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1">✓</span>
                    Czy powinnam podjąć ryzykowną decyzję?
                  </li>
                </ul>

                <p className="text-gray-600 text-sm mt-6">
                  To tylko przykłady — karty Tarota mogą odpowiedzieć na każde Twoje pytanie.
                </p>

                <div className="mt-6 space-x-4">
                  <button className="bg-black text-white px-6 py-2 rounded text-sm">
                    Zadaj swoje pytanie
                  </button>
                  <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded text-sm hover:bg-gray-50 transition-colors">
                    Zobacz przykładowy rozkład
                  </button>
                </div>
              </div>

              <div>
                <h3 className="font-playfair text-xl font-bold text-gray-900 mb-6">
                  Co odkryjesz dzięki temu rozkładowi?
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1">✓</span>
                    Uzyskasz zwięzłe, ale trafne odpowiedzi na nurtujące Cię pytania
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1">✓</span>
                    Zrozumiesz kontekst sytuacji — jej przyczyny, obecny stan i potencjalne następstwa
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1">✓</span>
                    Dostaniesz wskazówki co do najbardziej optymalnych działań
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1">✓</span>
                    Rozwiejesz dylematy i wątpliwości utrudniające podjęcie decyzji
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1">✓</span>
                    Zyskasz spokój i większą pewność co do obranego kierunku
                  </li>
                </ul>

                <button className="bg-black text-white px-6 py-2 rounded text-sm mt-6">
                  Wylosuj 3 karty Tarota
                </button>
              </div>
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="mt-16 bg-black text-white rounded-lg p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex justify-center text-yellow-400 mb-4">
                  ★★★★★
                </div>
                <p className="text-sm leading-relaxed mb-4">
                  Byłam zaskoczona, jak wiele informacji można uzyskać z zaledwie trzech kart!
                  Interpretacja była bardzo trafna i pomogła mi podjąć ważną decyzję.
                </p>
                <p className="text-gray-300 text-sm">~ Anna, 35 lat</p>
              </div>

              <div className="text-center">
                <div className="flex justify-center text-yellow-400 mb-4">
                  ★★★★★
                </div>
                <p className="text-sm leading-relaxed mb-4">
                  Rozkład 3 kart to strzał w dziesiątkę! Dzięki niemu w końcu uporałam się z dylematem
                  dotyczącym zmiany pracy. Helena w jasny sposób wyłożyła całą sytuację i dała mi ostatni
                  impuls, którego potrzebowałam. Jestem bardzo zadowolona!
                </p>
                <p className="text-gray-300 text-sm">~ Dorota, 28 lat</p>
              </div>

              <div className="text-center">
                <div className="flex justify-center text-yellow-400 mb-4">
                  ★★★★★
                </div>
                <p className="text-sm leading-relaxed mb-4">
                  Dzięki rozkładowi 3 kart w końcu zrozumiałem, co blokuje moje postępy. Helena pomogła mi
                  spojrzeć na moje problemy z nowej perspektywy. Teraz wiem, co robić dalej.
                </p>
                <p className="text-gray-300 text-sm">~ Michał, 41 lat</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Tarot3Karty;
