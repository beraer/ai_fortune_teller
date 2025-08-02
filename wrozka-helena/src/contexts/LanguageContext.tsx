'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, Translations, getTranslation } from '@/lib/i18n';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('pl');
  const [translations, setTranslations] = useState<Translations>(getTranslation('pl'));

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    setTranslations(getTranslation(newLanguage));

    // Save to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('helena-language', newLanguage);
      // Update HTML lang attribute
      document.documentElement.lang = newLanguage;
    }
  };

  useEffect(() => {
    // Load from localStorage on mount
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('helena-language') as Language;
      if (savedLanguage && (savedLanguage === 'pl' || savedLanguage === 'en')) {
        setLanguage(savedLanguage);
      } else {
        // Default to Polish
        setLanguage('pl');
      }
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
