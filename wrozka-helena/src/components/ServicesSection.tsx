const ServicesSection = () => {
  return (
    <section className="bg-black text-white section-padding">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-8 h-8 mx-auto mb-6">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          <h2 className="font-playfair text-3xl lg:text-4xl mb-6">
            W czym mogę Ci pomóc?
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Love & Relationships */}
          <div className="space-y-6">
            <h3 className="font-playfair text-2xl font-semibold">
              Miłość i relacje
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Jeśli tęsknisz za prawdziwą bliskością i harmonią w swoim życiu,
              jestem tutaj, aby Ci pomóc. Przyciągnij miłość, na którą zasługujesz.
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                Kiedy spotkam miłość swojego życia?
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                Czy mój związek przetrwa kryzys?
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                Jak przyciągnąć do siebie odpowiedniego partnera?
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                Czy mój partner mnie kocha?
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                Czy mój były partner wróci do mnie?
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                Jak mogę naprawić relację z bliską mi osobą?
              </li>
            </ul>
          </div>

          {/* Career & Finance */}
          <div className="space-y-6">
            <h3 className="font-playfair text-2xl font-semibold">
              Kariera i finanse
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Pomogę Ci odkryć Twoje prawdziwe talenty i potencjał,
              abyś mogła cieszyć się spełnieniem w pracy i życiu osobistym.
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                Czy mój obecny zawód jest zgodny z moim przeznaczeniem?
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                Czy zmiana pracy teraz to dobry pomysł?
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                Jak przyciągnąć obfitość i dobrobyt do mojego życia?
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                Kiedy mogę spodziewać się większych zarobków?
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                Czy moja firma odniesie sukces?
              </li>
            </ul>
          </div>

          {/* Health & Spiritual Development */}
          <div className="space-y-6">
            <h3 className="font-playfair text-2xl font-semibold">
              Zdrowie i rozwój duchowy
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Zadbaj o swoje zdrowie i równowagę wewnętrzną. Odkryj nieograniczone
              źródło siły i spokoju, które zawsze było w Tobie.
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                Jak mogę poprawić swoje zdrowie fizyczne i psychiczne?
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                W jaki sposób mogę znaleźć większą równowagę między ciałem a duchem?
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                Jak radzić sobie ze stresem i napięciem w codziennym życiu?
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                Czy wyzdrowieję z choroby?
              </li>
            </ul>
          </div>

          {/* Life Choices & Future */}
          <div className="space-y-6">
            <h3 className="font-playfair text-2xl font-semibold">
              Życiowe wybory i przyszłość
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Podejmuj decyzje z pewnością siebie i jasnością. Z moim przewodnictwem
              stworzysz przyszłość, o jakiej zawsze marzyłaś.
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                Jakie decyzje powinnam podjąć?
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                Co mnie czeka w przyszłości?
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                Czy powinnam dać partnerowi jeszcze jedną szansę?
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                Czy uda mi się osiągnąć swoje cele?
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                Jak poradzić sobie z trudną sytuacją lub emocjami?
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                Jaki jest cel mojego życia?
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="bg-white text-black px-8 py-4 rounded font-lato font-medium hover:bg-gray-100 transition-colors">
            Zamów wróżbę
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
