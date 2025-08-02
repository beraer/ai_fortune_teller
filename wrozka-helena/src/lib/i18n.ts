export type Language = 'pl' | 'en';

export interface Translations {
  // Common
  common: {
    name: string;
    email: string;
    birthDate: string;
    question: string;
    submit: string;
    loading: string;
    error: string;
    success: string;
    online: string;
    offline: string;
    readMore: string;
    close: string;
    cancel: string;
    save: string;
    delete: string;
    edit: string;
    back: string;
    next: string;
    previous: string;
    search: string;
  };

  // Navigation
  nav: {
    home: string;
    readings: string;
    tarot: string;
    aboutMe: string;
    pricing: string;
    reviews: string;
    blog: string;
    contact: string;
    tarotLove: string;
    tarot3Cards: string;
    tarot5Cards: string;
    celticCross: string;
    yearlyTarot: string;
  };

  // Homepage
  home: {
    title: string;
    subtitle: string;
    heroTitle: string;
    heroSubtitle: string;
    heroDescription: string;
    orderReading: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    birthDatePlaceholder: string;
    questionPlaceholder: string;
    aboutHelena: string;
    helenaBio: string;
    onlineStatus: string;
  };

  // Services
  services: {
    title: string;
    loveTitle: string;
    loveDescription: string;
    careerTitle: string;
    careerDescription: string;
    healthTitle: string;
    healthDescription: string;
    futureTitle: string;
    futureDescription: string;
    orderReading: string;
  };

  // Pricing
  pricing: {
    title: string;
    subtitle: string;
    question1: string;
    questions3: string;
    questions5: string;
    response15min: string;
    response25min: string;
    response30min: string;
    orderReading: string;
    tarotTitle: string;
    tarotSubtitle: string;
    cards3: string;
    cards5: string;
    loveTarot: string;
    celticCross: string;
    yearly: string;
    response30m: string;
    response1h: string;
    response2h: string;
    response12h: string;
    response24h: string;
  };

  // Tarot
  tarot: {
    title: string;
    selectCards: string;
    revealCards: string;
    revealingCards: string;
    past: string;
    present: string;
    future: string;
    situation: string;
    challenge: string;
    outcome: string;
    yourReading: string;
    fullInterpretation: string;
    askQuestion: string;
    takeDeepBreath: string;
    focusOnQuestion: string;
    shuffleCards: string;
    cardMeanings: string;
  };

  // Reviews
  reviews: {
    title: string;
    subtitle: string;
    thankYou: string;
    signature: string;
    addReview: string;
    orderReading: string;
    experiences: string;
    verified: string;
    ratingExcellent: string;
    ratingVeryGood: string;
    ratingGood: string;
    ratingAverage: string;
    ratingPoor: string;
    shareStory: string;
    storyDescription: string;
    overallRating: string;
    yourFeedback: string;
    yourName: string;
    yourEmail: string;
    submitReview: string;
    thankYouReview: string;
  };

  // Footer
  footer: {
    description: string;
    menu: string;
    personal: string;
    information: string;
    allRightsReserved: string;
    disclaimer: string;
  };

  // Meta
  meta: {
    homeTitle: string;
    homeDescription: string;
    tarotTitle: string;
    tarotDescription: string;
    reviewsTitle: string;
    reviewsDescription: string;
    pricingTitle: string;
    pricingDescription: string;
  };
}

export const translations: Record<Language, Translations> = {
  pl: {
    common: {
      name: 'Imię',
      email: 'Adres e-mail',
      birthDate: 'Data urodzenia',
      question: 'Twoje pytanie',
      submit: 'Wyślij',
      loading: 'Ładowanie...',
      error: 'Wystąpił błąd',
      success: 'Sukces',
      online: 'JESTEM ONLINE',
      offline: 'OFFLINE',
      readMore: 'Czytaj więcej',
      close: 'Zamknij',
      cancel: 'Anuluj',
      save: 'Zapisz',
      delete: 'Usuń',
      edit: 'Edytuj',
      back: 'Wstecz',
      next: 'Dalej',
      previous: 'Poprzedni',
      search: 'Szukaj'
    },
    nav: {
      home: 'STRONA GŁÓWNA',
      readings: 'WRÓŻBY',
      tarot: 'TAROT',
      aboutMe: 'O MNIE',
      pricing: 'CENNIK',
      reviews: 'OPINIE',
      blog: 'BLOG',
      contact: 'KONTAKT',
      tarotLove: 'TAROT MIŁOSNY',
      tarot3Cards: 'TAROT Z 3 KART',
      tarot5Cards: 'TAROT Z 5 KART',
      celticCross: 'KRZYŻ CELTYCKI',
      yearlyTarot: 'TAROT ROCZNY'
    },
    home: {
      title: 'Wróżka Helena',
      subtitle: 'Profesjonalne Wróżby Online, Tarot i Numerologia',
      heroTitle: 'Wróżby online — poznaj odpowiedzi na nurtujące Cię pytania',
      heroSubtitle: 'W 15 minut wyślę Ci wróżbę ze szczegółową odpowiedzią',
      heroDescription: 'dzięki której odnajdziesz szczęście i podejmiesz trafne decyzje.',
      orderReading: 'Zamów wróżbę',
      namePlaceholder: 'Twoje imię',
      emailPlaceholder: 'Twój adres e-mail',
      birthDatePlaceholder: 'dd-mm-rrrr',
      questionPlaceholder: 'Wpisz jedno pytanie, na które chcesz otrzymać odpowiedź',
      aboutHelena: 'Z tej strony Wróżka Helena',
      helenaBio: 'Twoja przewodniczka na ścieżce życia i miłości.',
      onlineStatus: 'JESTEM ONLINE'
    },
    services: {
      title: 'W czym mogę Ci pomóc?',
      loveTitle: 'Miłość i relacje',
      loveDescription: 'Jeśli tęsknisz za prawdziwą bliskością i harmonią w swoim życiu, jestem tutaj, aby Ci pomóc.',
      careerTitle: 'Kariera i finanse',
      careerDescription: 'Pomogę Ci odkryć Twoje prawdziwe talenty i potencjał.',
      healthTitle: 'Zdrowie i rozwój duchowy',
      healthDescription: 'Zadbaj o swoje zdrowie i równowagę wewnętrzną.',
      futureTitle: 'Życiowe wybory i przyszłość',
      futureDescription: 'Podejmuj decyzje z pewnością siebie i jasnością.',
      orderReading: 'Zamów wróżbę'
    },
    pricing: {
      title: 'Cennik',
      subtitle: 'Pytania do Wróżby',
      question1: '1 pytanie',
      questions3: '3 pytania',
      questions5: '5 pytań',
      response15min: 'Odpowiedź w 15 minut',
      response25min: 'Odpowiedź w 25 minut',
      response30min: 'Odpowiedź w 30 minut',
      orderReading: 'Zamów wróżbę',
      tarotTitle: 'Odkryj tajemnice Tarota',
      tarotSubtitle: 'Wybierz rozkład, zadaj swoje pytania i pozwól, aby karty odsłoniły przed Tobą odpowiedzi.',
      cards3: '3 Karty',
      cards5: '5 Kart',
      loveTarot: 'Miłosny',
      celticCross: 'Krzyż Celtycki',
      yearly: 'Roczny',
      response30m: 'Odpowiedź do 30m',
      response1h: 'Odpowiedź do 1h',
      response2h: 'Odpowiedź do 2h',
      response12h: 'Odpowiedź do 12h',
      response24h: 'Odpowiedź do 1 doby'
    },
    tarot: {
      title: 'Tarot',
      selectCards: 'WYBIERZ',
      revealCards: 'Odkryj karty',
      revealingCards: 'Odkrywam karty...',
      past: 'Przeszłość',
      present: 'Teraźniejszość',
      future: 'Przyszłość',
      situation: 'Sytuacja',
      challenge: 'Wyzwanie',
      outcome: 'Wynik',
      yourReading: 'Twój osobisty rozkład',
      fullInterpretation: 'Odkryj pełne znaczenie kart',
      askQuestion: 'Zadaj pytanie lub opisz, co Cię nurtuje...',
      takeDeepBreath: 'Weź głęboki oddech i skup się na swoim pytaniu',
      focusOnQuestion: 'Skup się na swoim pytaniu',
      shuffleCards: 'Przetasuj karty',
      cardMeanings: 'Znaczenia kart'
    },
    reviews: {
      title: 'Wasze opinie',
      subtitle: 'Opinie klientów',
      thankYou: 'Z serca dziękuję za każde ciepłe słowo i pozytywną myśl, którą ze mną dzielicie.',
      signature: 'Z miłością, Wróżka Helena',
      addReview: 'Dodaj opinię',
      orderReading: 'Zamów wróżbę',
      experiences: 'Wasze odczucia i doświadczenia',
      verified: 'Zweryfikowana',
      ratingExcellent: 'Wyjątkowa',
      ratingVeryGood: 'Bardzo dobra',
      ratingGood: 'Dobra',
      ratingAverage: 'Przeciętna',
      ratingPoor: 'Rozczarowująca',
      shareStory: 'Zapraszam Cię do podzielenia się swoją historią',
      storyDescription: 'Twoje doświadczenie może być światłem przewodnim dla kogoś, kto właśnie rozpoczyna swoją duchową podróż.',
      overallRating: 'Twoja ogólna ocena',
      yourFeedback: 'Twoje odczucia',
      yourName: 'Twoje imię',
      yourEmail: 'Twój e-mail',
      submitReview: 'Dodaj opinię',
      thankYouReview: 'Dziękujemy za opinię! Zostanie ona dodana po weryfikacji.'
    },
    footer: {
      description: 'Poznaj odpowiedzi na nurtujące Cię pytania.',
      menu: 'Menu',
      personal: 'Osobiste',
      information: 'Informacje',
      allRightsReserved: 'Wszystkie prawa zastrzeżone.',
      disclaimer: 'Drogi Przyjacielu, pamiętaj, że wróżby na stronie Wróżka Helena mają charakter rozrywkowy i nie gwarantują konkretnych rezultatów. Wyniki są subiektywne i zależą od interpretacji. Ostateczne decyzje i odpowiedzialność zawsze należą do Ciebie. Usługi są dla osób pełnoletnich i nie zastępują profesjonalnej pomocy. Korzystaj z nich świadomie, a odnajdziesz w nich cenne wskazówki na swojej ścieżce życia.'
    },
    meta: {
      homeTitle: 'Wróżka Helena - Profesjonalne Wróżby Online, Tarot i Numerologia',
      homeDescription: 'Poznaj odpowiedzi na nurtujące Cię pytania. Profesjonalne wróżby online, czytanie kart Tarota i interpretacje numerologiczne od doświadczonej wróżki.',
      tarotTitle: 'Tarot - Wróżka Helena',
      tarotDescription: 'Odkryj tajemnice kart Tarota. Profesjonalne rozkłady miłosne, 3 karty, krzyż celtycki i więcej.',
      reviewsTitle: 'Opinie - Wróżka Helena',
      reviewsDescription: 'Przeczytaj opinie zadowolonych klientów i podziel się swoim doświadczeniem z wróżbami online.',
      pricingTitle: 'Cennik - Wróżka Helena',
      pricingDescription: 'Sprawdź cennik profesjonalnych wróżb online i rozkładów Tarota. Dostępne pakiety od 14zł.'
    }
  },
  en: {
    common: {
      name: 'Name',
      email: 'Email address',
      birthDate: 'Birth date',
      question: 'Your question',
      submit: 'Submit',
      loading: 'Loading...',
      error: 'An error occurred',
      success: 'Success',
      online: 'I AM ONLINE',
      offline: 'OFFLINE',
      readMore: 'Read more',
      close: 'Close',
      cancel: 'Cancel',
      save: 'Save',
      delete: 'Delete',
      edit: 'Edit',
      back: 'Back',
      next: 'Next',
      previous: 'Previous',
      search: 'Search'
    },
    nav: {
      home: 'HOME',
      readings: 'READINGS',
      tarot: 'TAROT',
      aboutMe: 'ABOUT ME',
      pricing: 'PRICING',
      reviews: 'REVIEWS',
      blog: 'BLOG',
      contact: 'CONTACT',
      tarotLove: 'LOVE TAROT',
      tarot3Cards: '3 CARDS TAROT',
      tarot5Cards: '5 CARDS TAROT',
      celticCross: 'CELTIC CROSS',
      yearlyTarot: 'YEARLY TAROT'
    },
    home: {
      title: 'Helena the Fortune Teller',
      subtitle: 'Professional Online Readings, Tarot and Numerology',
      heroTitle: 'Online readings — discover answers to your pressing questions',
      heroSubtitle: 'In 15 minutes I will send you a reading with a detailed answer',
      heroDescription: 'thanks to which you will find happiness and make the right decisions.',
      orderReading: 'Order a reading',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'Your email address',
      birthDatePlaceholder: 'dd-mm-yyyy',
      questionPlaceholder: 'Enter one question you want to receive an answer to',
      aboutHelena: 'This is Helena the Fortune Teller',
      helenaBio: 'Your guide on the path of life and love.',
      onlineStatus: 'I AM ONLINE'
    },
    services: {
      title: 'How can I help you?',
      loveTitle: 'Love and relationships',
      loveDescription: 'If you long for true intimacy and harmony in your life, I am here to help you.',
      careerTitle: 'Career and finances',
      careerDescription: 'I will help you discover your true talents and potential.',
      healthTitle: 'Health and spiritual development',
      healthDescription: 'Take care of your health and inner balance.',
      futureTitle: 'Life choices and future',
      futureDescription: 'Make decisions with confidence and clarity.',
      orderReading: 'Order a reading'
    },
    pricing: {
      title: 'Pricing',
      subtitle: 'Reading Questions',
      question1: '1 question',
      questions3: '3 questions',
      questions5: '5 questions',
      response15min: 'Response in 15 minutes',
      response25min: 'Response in 25 minutes',
      response30min: 'Response in 30 minutes',
      orderReading: 'Order a reading',
      tarotTitle: 'Discover the mysteries of Tarot',
      tarotSubtitle: 'Choose a spread, ask your questions and let the cards reveal the answers to you.',
      cards3: '3 Cards',
      cards5: '5 Cards',
      loveTarot: 'Love',
      celticCross: 'Celtic Cross',
      yearly: 'Yearly',
      response30m: 'Response within 30m',
      response1h: 'Response within 1h',
      response2h: 'Response within 2h',
      response12h: 'Response within 12h',
      response24h: 'Response within 24h'
    },
    tarot: {
      title: 'Tarot',
      selectCards: 'SELECT',
      revealCards: 'Reveal cards',
      revealingCards: 'Revealing cards...',
      past: 'Past',
      present: 'Present',
      future: 'Future',
      situation: 'Situation',
      challenge: 'Challenge',
      outcome: 'Outcome',
      yourReading: 'Your personal reading',
      fullInterpretation: 'Discover the full meaning of the cards',
      askQuestion: 'Ask a question or describe what concerns you...',
      takeDeepBreath: 'Take a deep breath and focus on your question',
      focusOnQuestion: 'Focus on your question',
      shuffleCards: 'Shuffle cards',
      cardMeanings: 'Card meanings'
    },
    reviews: {
      title: 'Your reviews',
      subtitle: 'Customer reviews',
      thankYou: 'I thank you from the bottom of my heart for every warm word and positive thought you share with me.',
      signature: 'With love, Helena the Fortune Teller',
      addReview: 'Add review',
      orderReading: 'Order a reading',
      experiences: 'Your feelings and experiences',
      verified: 'Verified',
      ratingExcellent: 'Excellent',
      ratingVeryGood: 'Very good',
      ratingGood: 'Good',
      ratingAverage: 'Average',
      ratingPoor: 'Disappointing',
      shareStory: 'I invite you to share your story',
      storyDescription: 'Your experience can be a guiding light for someone who is just beginning their spiritual journey.',
      overallRating: 'Your overall rating',
      yourFeedback: 'Your feedback',
      yourName: 'Your name',
      yourEmail: 'Your email',
      submitReview: 'Add review',
      thankYouReview: 'Thank you for your review! It will be added after verification.'
    },
    footer: {
      description: 'Discover answers to your pressing questions.',
      menu: 'Menu',
      personal: 'Personal',
      information: 'Information',
      allRightsReserved: 'All rights reserved.',
      disclaimer: 'Dear Friend, remember that the readings on Helena the Fortune Teller website are for entertainment purposes and do not guarantee specific results. Results are subjective and depend on interpretation. Final decisions and responsibility always belong to you. Services are for adults and do not replace professional help. Use them consciously, and you will find valuable guidance on your life path.'
    },
    meta: {
      homeTitle: 'Helena the Fortune Teller - Professional Online Readings, Tarot and Numerology',
      homeDescription: 'Discover answers to your pressing questions. Professional online readings, Tarot card reading and numerological interpretations from an experienced fortune teller.',
      tarotTitle: 'Tarot - Helena the Fortune Teller',
      tarotDescription: 'Discover the mysteries of Tarot cards. Professional love spreads, 3 cards, Celtic cross and more.',
      reviewsTitle: 'Reviews - Helena the Fortune Teller',
      reviewsDescription: 'Read reviews from satisfied customers and share your experience with online readings.',
      pricingTitle: 'Pricing - Helena the Fortune Teller',
      pricingDescription: 'Check the pricing for professional online readings and Tarot spreads. Available packages from 14 PLN.'
    }
  }
};

export function getTranslation(language: Language): Translations {
  return translations[language] || translations.pl;
}
