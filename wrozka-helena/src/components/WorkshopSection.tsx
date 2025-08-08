const WorkshopSection = () => {
  return (
    <section className="bg-beige section-padding">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-8 h-8 mx-auto mb-6">
            <img
              src="/images/icons/sparkle.png"
              alt="Sparkle icon"
              className="w-full h-full object-contain"
            />
          </div>

          <h2 className="font-playfair text-3xl lg:text-4xl text-gray-900 mb-6">
            Mój magiczny warsztat
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Holistyczne podejście pozwala mi uzyskać pełniejszy obraz Twojej sytuacji i udzielić
            bardziej trafnych wskazówek. Czerpiąc z różnych dziedzin ezoterycznych, jestem w stanie
            odpowiedzieć na Twoje pytania w sposób dogłębny i wielowymiarowy.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {/* Tarot */}
          <div className="text-center space-y-6">
            <div className="w-24 h-24 mx-auto mb-6">
              <svg viewBox="0 0 100 100" className="w-full h-full text-gray-700">
                <g fill="none" stroke="currentColor" strokeWidth="2">
                  {/* Hand outline */}
                  <path d="M20 80 C20 85, 25 90, 30 90 L45 90 C50 90, 55 85, 55 80 L55 40 C55 35, 50 30, 45 30 L30 30 C25 30, 20 35, 20 40 Z"/>
                  {/* Fingers */}
                  <line x1="35" y1="30" x2="35" y2="15"/>
                  <line x1="40" y1="30" x2="40" y2="12"/>
                  <line x1="45" y1="30" x2="45" y2="15"/>
                  {/* Moon and cross */}
                  <circle cx="37" cy="50" r="4" fill="none"/>
                  <path d="M45 45 L50 50 M50 45 L45 50"/>
                </g>
              </svg>
            </div>

            <h3 className="font-playfair text-xl font-bold text-gray-900 mb-4">
              Tarot
            </h3>

            <p className="text-gray-600 leading-relaxed text-sm">
              Karty Tarota to niezwykłe narzędzie, które przybliży Cię do zrozumienia Twojej
              przeszłości, teraźniejszości i przyszłości. Dzięki mojemu intuicyjnemu połączeniu z tą
              starożytną sztuką, otrzymasz ode mnie odpowiedzi na nawet najtrudniejsze dylematy
              życiowe i jasne wskazówki, jak kształtować swoją ścieżkę.
            </p>
          </div>

          {/* Astrologia */}
          <div className="text-center space-y-6">
            <div className="w-24 h-24 mx-auto mb-6">
              <svg viewBox="0 0 100 100" className="w-full h-full text-gray-700">
                <g fill="none" stroke="currentColor" strokeWidth="2">
                  {/* Hand with euro symbol */}
                  <path d="M25 80 C25 85, 30 90, 35 90 L50 90 C55 90, 60 85, 60 80 L60 40 C60 35, 55 30, 50 30 L35 30 C30 30, 25 35, 25 40 Z"/>
                  {/* Euro symbol */}
                  <path d="M40 45 C35 45, 32 48, 32 52 C32 56, 35 59, 40 59"/>
                  <line x1="30" y1="49" x2="38" y2="49"/>
                  <line x1="30" y1="55" x2="38" y2="55"/>
                  {/* Stars */}
                  <g fill="currentColor">
                    <circle cx="45" cy="35" r="1"/>
                    <circle cx="55" cy="40" r="1"/>
                    <circle cx="50" cy="25" r="1"/>
                  </g>
                </g>
              </svg>
            </div>

            <h3 className="font-playfair text-xl font-bold text-gray-900 mb-4">
              Astrologia
            </h3>

            <p className="text-gray-600 leading-relaxed text-sm">
              Pomogę Ci poznać swój potencjał i życiowe wyzwania. Astrologia to starożytna nauka,
              która bada wpływ gwiazd i planet na nasze życie. Analiza Twojego horoskopu
              urodzeniowego ujawni Twoje wrodzone talenty, predyspozycje, wyzwania i cele życiowe.
            </p>
          </div>

          {/* Numerologia */}
          <div className="text-center space-y-6">
            <div className="w-24 h-24 mx-auto mb-6">
              <svg viewBox="0 0 100 100" className="w-full h-full text-gray-700">
                <g fill="none" stroke="currentColor" strokeWidth="2">
                  {/* Hand with hourglass */}
                  <path d="M25 75 C25 80, 30 85, 35 85 L50 85 C55 85, 60 80, 60 75 L60 40 C60 35, 55 30, 50 30 L35 30 C30 30, 25 35, 25 40 Z"/>
                  {/* Hourglass */}
                  <path d="M40 45 L45 45 L45 40 L40 40 Z"/>
                  <path d="M40 55 L45 55 L45 60 L40 60 Z"/>
                  <line x1="42.5" y1="45" x2="42.5" y2="55"/>
                  {/* Numbers/symbols around */}
                  <text x="50" y="38" fontSize="8" fill="currentColor">11</text>
                </g>
              </svg>
            </div>

            <h3 className="font-playfair text-xl font-bold text-gray-900 mb-4">
              Numerologia
            </h3>

            <p className="text-gray-600 leading-relaxed text-sm">
              Odkryj znaczenie liczb w Twoim życiu. Numerologia to nauka o wibracjach liczb
              i ich wpływie na nasze życie. Każda litera i cyfra posiada swoją unikalną energię,
              która może oddziaływać na nasze osobowości, relacje, wybory i przeznaczenie.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopSection;
