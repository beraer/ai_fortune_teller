import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-16">
      <div className="container-max px-4">
        <div className="grid md:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">WH</span>
              </div>
              <span className="font-playfair text-xl font-bold text-gray-900">
                Wróżka Helena
              </span>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed">
              Poznaj odpowiedzi na nurtujące Cię pytania.
            </p>
          </div>

          {/* Menu */}
          <div className="space-y-4">
            <h3 className="font-lato font-semibold text-gray-900 uppercase tracking-wide">
              Menu
            </h3>
            <div className="space-y-2">
              <Link href="/wrozby" className="block text-gray-600 hover:text-gray-900 transition-colors text-sm">
                Wróżby
              </Link>
              <Link href="/tarot" className="block text-gray-600 hover:text-gray-900 transition-colors text-sm">
                Tarot
              </Link>
              <Link href="/darmowe-wrozby" className="block text-gray-600 hover:text-gray-900 transition-colors text-sm">
                Darmowe wróżby
              </Link>
              <Link href="/cennik" className="block text-gray-600 hover:text-gray-900 transition-colors text-sm">
                Cennik
              </Link>
            </div>
          </div>

          {/* Osobiste */}
          <div className="space-y-4">
            <h3 className="font-lato font-semibold text-gray-900 uppercase tracking-wide">
              Osobiste
            </h3>
            <div className="space-y-2">
              <Link href="/o-mnie" className="block text-gray-600 hover:text-gray-900 transition-colors text-sm">
                O mnie
              </Link>
              <Link href="/blog" className="block text-gray-600 hover:text-gray-900 transition-colors text-sm">
                Blog
              </Link>
              <Link href="/opinie" className="block text-gray-600 hover:text-gray-900 transition-colors text-sm">
                Opinie
              </Link>
            </div>
          </div>

          {/* Informacje */}
          <div className="space-y-4">
            <h3 className="font-lato font-semibold text-gray-900 uppercase tracking-wide">
              Informacje
            </h3>
            <div className="space-y-2">
              <Link href="/regulamin" className="block text-gray-600 hover:text-gray-900 transition-colors text-sm">
                Regulamin
              </Link>
              <Link href="/polityka-prywatnosci" className="block text-gray-600 hover:text-gray-900 transition-colors text-sm">
                Polityka prywatności
              </Link>
              <Link href="/kontakt" className="block text-gray-600 hover:text-gray-900 transition-colors text-sm">
                Kontakt
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-8 mt-12">
          <p className="text-gray-500 text-sm text-center">
            © 2025 <strong>Wróżka Helena</strong>. Wszystkie prawa zastrzeżone.
          </p>

          {/* Disclaimer - Small font as required */}
          <div className="mt-6 text-center">
            <p className="text-gray-400 text-xs max-w-6xl mx-auto leading-relaxed">
              Drogi Przyjacielu, pamiętaj, że wróżby na stronie Wróżka Helena mają charakter rozrywkowy i nie gwarantują
              konkretnych rezultatów. Wyniki są subiektywne i zależą od interpretacji. Ostateczne decyzje i odpowiedzialność
              zawsze należą do Ciebie. Usługi są dla osób pełnoletnich i nie zastępują profesjonalnej pomocy. Korzystaj z nich
              świadomie, a odnajdziesz w nich cenne wskazówki na swojej ścieżce życia.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
