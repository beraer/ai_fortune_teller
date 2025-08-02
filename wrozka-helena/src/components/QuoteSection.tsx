const QuoteSection = () => {
  return (
    <section className="bg-black text-white section-padding">
      <div className="container-max">
        <div className="text-center max-w-4xl mx-auto">
          <blockquote className="font-playfair text-2xl lg:text-3xl italic text-white leading-relaxed mb-8">
            "W gąszczu codzienności odnajdź cichą przystań w swoim sercu. Wsłuchaj się w intuicję, a odkryjesz klucz do swojego przeznaczenia."
          </blockquote>

          <div className="space-y-2">
            <p className="text-gray-300 font-medium">
              Wróżba dnia
            </p>
            <p className="text-gray-400 text-sm">
              piątek, 1 sierpnia 2025
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
