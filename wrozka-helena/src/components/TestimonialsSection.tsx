const TestimonialsSection = () => {
  const testimonials = [
    {
      title: "Nowa perspektywa",
      rating: 5,
      text: "Odpowiedź na moje pytanie była bardzo szczegółowa i dała mi nadzieję i moc do działania dalej. Poczułam się pewniejsza siebie i swoich możliwości. Dziękuję!",
      author: "Domi"
    },
    {
      title: "teraz wiem o co chodziło mojemu partnerowi",
      rating: 5,
      text: "Już od jakiegoś czasu miałam kłopoty w związku i nie miałam pojęcia co dalej. Helena pomogła mi zrozumieć całą sytuację i dała cenne rady, jak mogę poprawić relację z chłopakiem. Dzięki jej wsparciu udało nam się przeżyć ten kryzys i teraz jesteśmy szczęśliwsi niż kiedykolwiek wcześniej:)",
      author: "Małgosia"
    },
    {
      title: "NAJLEPSZA WRÓŻBA!",
      rating: 5,
      text: "Wróżba trafiła w sedno mojej obecnej sytuacji i dała praktyczne rady, dzięki czemu uniknęłam poważnego błędu, który mógłby mnie wiele kosztować. Polecam z całego serca!",
      author: "Ania"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-yellow-400 ${i < rating ? 'fill-current' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  return (
    <section className="bg-white section-padding">
      <div className="container-max">
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg">
              <h3 className="font-playfair text-lg font-bold text-gray-900 mb-2">
                {testimonial.title}
              </h3>

              <div className="flex items-center mb-4">
                {renderStars(testimonial.rating)}
              </div>

              <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                {testimonial.text}
              </p>

              <p className="text-gray-500 text-sm">
                ~ {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
