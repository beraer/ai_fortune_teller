'use client';

import { useState } from 'react';

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    birthDate: '',
    question: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        alert('Dziękujemy! Wróżba wkrótce trafi na Twój e-mail.');
        setFormData({ name: '', email: '', birthDate: '', question: '' });
      } else {
        alert('Wystąpił błąd. Spróbuj ponownie.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Wystąpił błąd. Spróbuj ponownie.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="bg-white section-padding">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text and Form */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-playfair text-4xl lg:text-5xl text-gray-900 leading-tight">
                <em className="italic">Wróżby online</em> — poznaj odpowiedzi na nurtujące Cię pytania
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                W 15 minut wyślę Ci wróżbę ze szczegółową odpowiedzią,
                dzięki której odnajdziesz szczęście i podejmiesz trafne decyzje.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 bg-white">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Imię:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Twoje imię"
                  className="form-input"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Adres e-mail:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Twój adres e-mail"
                  className="form-input"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="birthDate" className="block text-sm font-medium text-gray-700 mb-2">
                  Data urodzenia:
                </label>
                <input
                  type="text"
                  id="birthDate"
                  name="birthDate"
                  placeholder="dd-mm-rrrr"
                  className="form-input"
                  value={formData.birthDate}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="question" className="block text-sm font-medium text-gray-700 mb-2">
                  Twoje pytanie:
                </label>
                <textarea
                  id="question"
                  name="question"
                  rows={4}
                  placeholder="Wpisz jedno pytanie, na które chcesz otrzymać odpowiedź"
                  className="form-input resize-none"
                  value={formData.question}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full text-center"
              >
                Zamów wróżbę
              </button>
            </form>

            {/* Indicators */}
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              <div className="w-2 h-2 bg-black rounded-full"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <img
                src="https://ext.same-assets.com/3736986635/277431083.jpeg"
                alt="Wróżka Helena z kartami Tarota"
                className="object-cover w-full h-full"
              />
            </div>

            {/* Text overlay */}
            <div className="mt-6 text-center lg:text-left">
              <p className="text-gray-600 leading-relaxed">
                Z tej strony <strong className="font-playfair italic">Wróżka Helena</strong>,
                Twoja przewodniczka na ścieżce życia i miłości.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Od ponad 20 lat pomagam ludziom odkrywać ich prawdziwy potencjał i odnajdywać szczęście.
                Posiadam dar jasnowidz enia i bogate doświadczenie wróżbiarskie, co pozwala mi na głębokie
                zrozumienie ludzkich problemów i trafne przewidywanie przyszłości.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Jako numerologiczna 11 posiadam wysoką świadomość, intuicję oraz zdolność inspirowania
                i prowadzenia innych na drodze duchowego rozwoju.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Jeśli czujesz się zagubiony, stoisz przed trudnymi wyborami, lub po prostu pragniesz
                spojrzeć w przyszłość, zapraszam Cię do skorzystania z mojej pomocy.
              </p>

              <div className="mt-6 flex items-center text-green-600">
                <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                <span className="text-sm font-medium">JESTEM ONLINE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
