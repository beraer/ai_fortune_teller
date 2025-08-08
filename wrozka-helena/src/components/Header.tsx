'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'pl' ? 'en' : 'pl');
  };

  return (
    <header className="z-50" style={{ backgroundColor: '#f7f7f7' }}>
      <div className="container-max px-4">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">WH</span>
            </div>
            <span className="font-playfair text-xl font-bold text-gray-900">
              {language === 'en' ? 'Helena the Fortune Teller' : 'Wróżka Helena'}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/wrozby"
              className="text-gray-700 hover:text-black transition-colors font-lato uppercase text-sm tracking-wide"
            >
              {t.nav.readings}
            </Link>

            <div className="relative group">
              <button className="text-gray-700 hover:text-black transition-colors font-lato uppercase text-sm tracking-wide flex items-center">
                {t.nav.tarot}
                <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>

              {/* Dropdown */}
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/tarot/milosny" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                  {t.nav.tarotLove}
                </Link>
                <Link href="/tarot/3-karty" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                  {t.nav.tarot3Cards}
                </Link>
                <Link href="/tarot/5-kart" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                  {t.nav.tarot5Cards}
                </Link>
                <Link href="/tarot/krzyz-celtycki" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                  {t.nav.celticCross}
                </Link>
                <Link href="/tarot/roczny" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                  {t.nav.yearlyTarot}
                </Link>
              </div>
            </div>

            <Link
              href="/o-mnie"
              className="text-gray-700 hover:text-black transition-colors font-lato uppercase text-sm tracking-wide"
            >
              {t.nav.aboutMe}
            </Link>
            <Link
              href="/cennik"
              className="text-gray-700 hover:text-black transition-colors font-lato uppercase text-sm tracking-wide"
            >
              {t.nav.pricing}
            </Link>
            <Link
              href="/opinie"
              className="text-gray-700 hover:text-black transition-colors font-lato uppercase text-sm tracking-wide"
            >
              {t.nav.reviews}
            </Link>
            <Link
              href="/blog"
              className="text-gray-700 hover:text-black transition-colors font-lato uppercase text-sm tracking-wide"
            >
              {t.nav.blog}
            </Link>

            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-gray-700 hover:text-black transition-colors font-lato uppercase text-sm tracking-wide border border-gray-300 px-3 py-1 rounded"
            >
              <span className={language === 'pl' ? 'font-bold' : ''}>{language === 'pl' ? 'PL' : 'EN'}</span>
              <span className="text-gray-400">|</span>
              <span className={language === 'en' ? 'font-bold' : ''}>{language === 'en' ? 'EN' : 'PL'}</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link href="/wrozby" className="text-gray-700 font-lato uppercase text-sm tracking-wide">
                {t.nav.readings}
              </Link>
              <Link href="/tarot/milosny" className="text-gray-700 font-lato uppercase text-sm tracking-wide pl-4">
                {t.nav.tarotLove}
              </Link>
              <Link href="/tarot/3-karty" className="text-gray-700 font-lato uppercase text-sm tracking-wide pl-4">
                {t.nav.tarot3Cards}
              </Link>
              <Link href="/tarot/5-kart" className="text-gray-700 font-lato uppercase text-sm tracking-wide pl-4">
                {t.nav.tarot5Cards}
              </Link>
              <Link href="/tarot/krzyz-celtycki" className="text-gray-700 font-lato uppercase text-sm tracking-wide pl-4">
                {t.nav.celticCross}
              </Link>
              <Link href="/tarot/roczny" className="text-gray-700 font-lato uppercase text-sm tracking-wide pl-4">
                {t.nav.yearlyTarot}
              </Link>
              <Link href="/o-mnie" className="text-gray-700 font-lato uppercase text-sm tracking-wide">
                {t.nav.aboutMe}
              </Link>
              <Link href="/cennik" className="text-gray-700 font-lato uppercase text-sm tracking-wide">
                {t.nav.pricing}
              </Link>
              <Link href="/opinie" className="text-gray-700 font-lato uppercase text-sm tracking-wide">
                {t.nav.reviews}
              </Link>
              <Link href="/blog" className="text-gray-700 font-lato uppercase text-sm tracking-wide">
                {t.nav.blog}
              </Link>

              {/* Mobile Language Switcher */}
              <button
                onClick={toggleLanguage}
                className="text-gray-700 font-lato uppercase text-sm tracking-wide text-left border-t pt-4"
              >
                {language === 'pl' ? 'Switch to English' : 'Przełącz na Polski'}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
