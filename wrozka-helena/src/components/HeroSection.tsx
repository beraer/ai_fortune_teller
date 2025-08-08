'use client';

import { useState } from 'react';
import MoonPhases from './MoonPhases';

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
    <section className="section-padding" style={{ backgroundColor: '#f7f7f7', paddingTop: '2rem' }}>
      <div className="container-max max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Text and Form */}
          <div className="space-y-3">
            <div className="space-y-2">
              <h1 className="font-playfair text-3xl lg:text-4xl text-gray-900 leading-tight">
                <em className="italic">Wróżby online</em> — poznaj odpowiedzi na nurtujące Cię pytania
              </h1>
              <p className="text-gray-600 text-base leading-relaxed">
                W 15 minut wyślę Ci wróżbę ze szczegółową odpowiedzią,
                dzięki której odnajdziesz szczęście i podejmiesz trafne decyzje.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3 mt-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Imię:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Twoje imię"
                  className="w-full px-3 py-2 border border-gray-300 rounded-xl bg-white focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 font-playfair transition-all duration-200"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Adres e-mail:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Twój adres e-mail"
                  className="w-full px-3 py-2 border border-gray-300 rounded-xl bg-white focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 font-playfair transition-all duration-200"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="birthDate" className="block text-sm font-medium text-gray-700 mb-1">
                  Data urodzenia:
                </label>
                <input
                  type="text"
                  id="birthDate"
                  name="birthDate"
                  placeholder="dd-mm-rrrr"
                  className="w-full px-3 py-2 border border-gray-300 rounded-xl bg-white focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 font-playfair transition-all duration-200"
                  value={formData.birthDate}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="question" className="block text-sm font-medium text-gray-700 mb-1">
                  Twoje pytanie:
                </label>
                <textarea
                  id="question"
                  name="question"
                  rows={3}
                  placeholder="Wpisz jedno pytanie, na które chcesz otrzymać odpowiedź"
                  className="w-full px-3 py-2 border border-gray-300 rounded-xl bg-white focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 font-playfair resize-none transition-all duration-200"
                  value={formData.question}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full text-center flex items-center justify-center space-x-2 mt-4 bg-black text-white px-4 py-2 rounded-xl font-medium hover:bg-gray-800 transition-all duration-200"
              >
                <span>Zamów wróżbę</span>
                <img
                  src="/images/icons/magic-wand.gif"
                  alt="Magic wand"
                  className="w-4 h-4 ml-1"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
              </button>
            </form>

            {/* Moon Phases aligned with JESTEM ONLINE */}
            <div className="flex items-center justify-center mt-8">
              <img
                src="/images/icons/moon_phase.png"
                alt="Moon phases"
                className="w-auto h-3 md:h-4 opacity-60"
              />
            </div>
          </div>

          {/* Right Column - Image and Text */}
          <div className="relative">
            {/* Background Image with soft corners */}
            <div className="relative rounded-2xl overflow-hidden mb-4">
              <img
                src="/images/backgrounds/register_page.png"
                alt="Mystical background"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Text overlay */}
            <div className="text-center lg:text-left space-y-3">
              <p className="text-gray-600 leading-relaxed text-sm">
                Z tej strony <strong className="font-playfair italic">Wróżka Helena</strong>,
                Twoja przewodniczka na ścieżce życia i miłości.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm">
                Od ponad 20 lat pomagam ludziom odkrywać ich prawdziwy potencjał i odnajdywać szczęście.
                Posiadam dar jasnowidz enia i bogate doświadczenie wróżbiarskie, co pozwala mi na głębokie
                zrozumienie ludzkich problemów i trafne przewidywanie przyszłości.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm">
                Jako numerologiczna 11 posiadam wysoką świadomość, intuicję oraz zdolność inspirowania
                i prowadzenia innych na drodze duchowego rozwoju.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm">
                Jeśli czujesz się zagubiony, stoisz przed trudnymi wyborami, lub po prostu pragniesz
                spojrzeć w przyszłość, zapraszam Cię do skorzystania z mojej pomocy.
              </p>

              <div className="flex items-center text-green-600 mt-4">
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
