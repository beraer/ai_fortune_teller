export interface TarotCard {
  id: number;
  namePL: string;
  nameEN: string;
  suit: 'major' | 'cups' | 'wands' | 'swords' | 'pentacles';
  number?: number;
  keywords: string[];
  meaningUpright: string;
  meaningReversed: string;
}

export const tarotDeck: TarotCard[] = [
  // Major Arcana
  { id: 0, namePL: "Błazen", nameEN: "The Fool", suit: "major", number: 0, keywords: ["nowy początek", "spontaniczność", "wolność"], meaningUpright: "Nowy początek, spontaniczność, wolny duch", meaningReversed: "Nieostrożność, bezmyślność, ryzyko" },
  { id: 1, namePL: "Mag", nameEN: "The Magician", suit: "major", number: 1, keywords: ["moc", "umiejętności", "determinacja"], meaningUpright: "Siła woli, umiejętności, koncentracja", meaningReversed: "Manipulacja, słaba wola, złe intencje" },
  { id: 2, namePL: "Wysoka Kapłanka", nameEN: "The High Priestess", suit: "major", number: 2, keywords: ["intuicja", "mądrość", "tajemnica"], meaningUpright: "Intuicja, podświadomość, wewnętrzna mądrość", meaningReversed: "Odłączenie od intuicji, sekreciarstwo" },
  { id: 3, namePL: "Cesarzowa", nameEN: "The Empress", suit: "major", number: 3, keywords: ["płodność", "femininność", "natura"], meaningUpright: "Płodność, kobiecość, piękno natury", meaningReversed: "Problemy z płodnością, zależność" },
  { id: 4, namePL: "Cesarz", nameEN: "The Emperor", suit: "major", number: 4, keywords: ["władza", "struktura", "kontrola"], meaningUpright: "Autorytet, struktura, kontrola", meaningReversed: "Tyrania, sztywność, brak kontroli" },
  { id: 5, namePL: "Hierofanta", nameEN: "The Hierophant", suit: "major", number: 5, keywords: ["tradycja", "religia", "konformizm"], meaningUpright: "Tradycja, duchowość, konformizm", meaningReversed: "Rebeliantctwo, nowe podejście" },
  { id: 6, namePL: "Kochankowie", nameEN: "The Lovers", suit: "major", number: 6, keywords: ["miłość", "związki", "wybory"], meaningUpright: "Miłość, harmonia, wybory serca", meaningReversed: "Problemy w związku, błędne wybory" },
  { id: 7, namePL: "Rydwan", nameEN: "The Chariot", suit: "major", number: 7, keywords: ["determinacja", "sukces", "kontrola"], meaningUpright: "Determinacja, sukces, siła woli", meaningReversed: "Brak kontroli, porażka, agresja" },
  { id: 8, namePL: "Siła", nameEN: "Strength", suit: "major", number: 8, keywords: ["siła", "odwaga", "cierpliwość"], meaningUpright: "Wewnętrzna siła, odwaga, cierpliwość", meaningReversed: "Słabość, brak pewności siebie" },
  { id: 9, namePL: "Pustelnik", nameEN: "The Hermit", suit: "major", number: 9, keywords: ["samotność", "mądrość", "poszukiwanie"], meaningUpright: "Introspetkcja, poszukiwanie prawdy", meaningReversed: "Izolacja, unikanie pomocy" },
  { id: 10, namePL: "Koło Fortuny", nameEN: "Wheel of Fortune", suit: "major", number: 10, keywords: ["szczęście", "zmiana", "przeznaczenie"], meaningUpright: "Szczęście, pozytywne zmiany, przeznaczenie", meaningReversed: "Pech, brak kontroli, opór przed zmianą" },
  { id: 11, namePL: "Sprawiedliwość", nameEN: "Justice", suit: "major", number: 11, keywords: ["sprawiedliwość", "prawda", "równowaga"], meaningUpright: "Sprawiedliwość, prawda, równowaga", meaningReversed: "Niesprawiedliwość, oszustwo, brak równowagi" },
  { id: 12, namePL: "Powieszony", nameEN: "The Hanged Man", suit: "major", number: 12, keywords: ["ofiara", "oczekiwanie", "zawieszenie"], meaningUpright: "Poświęcenie, nowa perspektywa, czekanie", meaningReversed: "Opór, stagnacja, fałszywe poświęcenie" },
  { id: 13, namePL: "Śmierć", nameEN: "Death", suit: "major", number: 13, keywords: ["transformacja", "koniec", "odnowa"], meaningUpright: "Transformacja, koniec cyklu, odnowa", meaningReversed: "Opór przed zmianą, stagnacja" },
  { id: 14, namePL: "Umiarkowanie", nameEN: "Temperance", suit: "major", number: 14, keywords: ["równowaga", "umiakowość", "cierpliwość"], meaningUpright: "Równowaga, harmonia, cierpliwość", meaningReversed: "Niecierpliwość, ekstreny, brak równowagi" },
  { id: 15, namePL: "Diabeł", nameEN: "The Devil", suit: "major", number: 15, keywords: ["pokusa", "więzy", "materializm"], meaningUpright: "Pokusa, więzy, materializm", meaningReversed: "Uwolnienie, przezwyciężenie pokus" },
  { id: 16, namePL: "Wieża", nameEN: "The Tower", suit: "major", number: 16, keywords: ["zniszczenie", "rewelacja", "nagła zmiana"], meaningUpright: "Nagłe zmiany, zniszczenie, rewelacja", meaningReversed: "Unikanie zmiany, wewnętrzne przewroty" },
  { id: 17, namePL: "Gwiazda", nameEN: "The Star", suit: "major", number: 17, keywords: ["nadzieja", "inspiracja", "duchowość"], meaningUpright: "Nadzieja, inspiracja, duchowe przewodnictwo", meaningReversed: "Rozpacz, brak wiary, utrata kierunku" },
  { id: 18, namePL: "Księżyc", nameEN: "The Moon", suit: "major", number: 18, keywords: ["iluzja", "intuicja", "nieświadomość"], meaningUpright: "Iluzja, oszustwa, podświadomość", meaningReversed: "Uwolnienie od iluzji, jasność" },
  { id: 19, namePL: "Słońce", nameEN: "The Sun", suit: "major", number: 19, keywords: ["radość", "sukces", "optymizm"], meaningUpright: "Radość, sukces, optymizm", meaningReversed: "Tymczasowe niepowodzenia, pesymizm" },
  { id: 20, namePL: "Sąd", nameEN: "Judgement", suit: "major", number: 20, keywords: ["odrodzenie", "przebudzenie", "drugia szansa"], meaningUpright: "Odrodzenie, przebudzenie, drugia szansa", meaningReversed: "Samoocena, wybaczenie sobie" },
  { id: 21, namePL: "Świat", nameEN: "The World", suit: "major", number: 21, keywords: ["zakończenie", "spełnienie", "jedność"], meaningUpright: "Zakończenie, spełnienie, osiągnięcie celów", meaningReversed: "Niedokończone sprawy, brak zamknięcia" },

  // Cups (Kielichy)
  { id: 22, namePL: "As Kielichów", nameEN: "Ace of Cups", suit: "cups", number: 1, keywords: ["nowa miłość", "emocje", "intuicja"], meaningUpright: "Nowa miłość, emocjonalny początek", meaningReversed: "Blokady emocjonalne, odrzucenie" },
  { id: 23, namePL: "Dwójka Kielichów", nameEN: "Two of Cups", suit: "cups", number: 2, keywords: ["partnerstwo", "miłość", "związek"], meaningUpright: "Miłość, partnerstwo, związki", meaningReversed: "Problemy w związku, niezgoda" },
  { id: 24, namePL: "Trójka Kielichów", nameEN: "Three of Cups", suit: "cups", number: 3, keywords: ["przyjaźń", "świętowanie", "radość"], meaningUpright: "Przyjaźń, świętowanie, wspólnota", meaningReversed: "Przesadne przyjemności, konflikty" },
  { id: 25, namePL: "Czwórka Kielichów", nameEN: "Four of Cups", suit: "cups", number: 4, keywords: ["apatia", "kontemplacja", "niezadowolenie"], meaningUpright: "Apatia, medytacja, ponowne ocenienie", meaningReversed: "Motywacja, nowe możliwości" },
  { id: 26, namePL: "Piątka Kielichów", nameEN: "Five of Cups", suit: "cups", number: 5, keywords: ["żal", "utrata", "żałoba"], meaningUpright: "Żal, utrata, rozczarowanie", meaningReversed: "Akceptacja, nadzieja, wybaczenie" },

  // Wands (Buławy)
  { id: 27, namePL: "As Buław", nameEN: "Ace of Wands", suit: "wands", number: 1, keywords: ["nowy początek", "inspiracja", "kreatywność"], meaningUpright: "Nowy początek, inspiracja, kreatywność", meaningReversed: "Blokady kreatywne, brak kierunku" },
  { id: 28, namePL: "Dwójka Buław", nameEN: "Two of Wands", suit: "wands", number: 2, keywords: ["planowanie", "przyszłość", "decyzje"], meaningUpright: "Planowanie przyszłości, osobista moc", meaningReversed: "Brak planów, niepewność" },
  { id: 29, namePL: "Trójka Buław", nameEN: "Three of Wands", suit: "wands", number: 3, keywords: ["ekspansja", "perspektywy", "handel"], meaningUpright: "Ekspansja, dalekosiężne planowanie", meaningReversed: "Brak perspektyw, niepowodzenia" },

  // Swords (Miecze)
  { id: 30, namePL: "As Mieczy", nameEN: "Ace of Swords", suit: "swords", number: 1, keywords: ["jasność", "prawda", "nowy pomysł"], meaningUpright: "Nowy pomysł, jasność myślenia, prawda", meaningReversed: "Zamieszanie, fałszywe idee" },
  { id: 31, namePL: "Dwójka Mieczy", nameEN: "Two of Swords", suit: "swords", number: 2, keywords: ["wybór", "dylemat", "równowaga"], meaningUpright: "Trudny wybór, stagnacja, dylemat", meaningReversed: "Podjęcie decyzji, jasność" },

  // Pentacles (Monety)
  { id: 32, namePL: "As Monet", nameEN: "Ace of Pentacles", suit: "pentacles", number: 1, keywords: ["nowa możliwość", "manifestacja", "prosperita"], meaningUpright: "Nowa możliwość finansowa, manifestacja", meaningReversed: "Utracone możliwości, materializm" },
  { id: 33, namePL: "Dwójka Monet", nameEN: "Two of Pentacles", suit: "pentacles", number: 2, keywords: ["równowaga", "adaptacja", "priorytet"], meaningUpright: "Balansowanie priorytetów, adaptacja", meaningReversed: "Przeciążenie, brak organizacji" },

  // ... Add more cards as needed. For now, I'll add a few more key cards

  { id: 34, namePL: "Dziewięć Mieczy", nameEN: "Nine of Swords", suit: "swords", number: 9, keywords: ["lęk", "niepokój", "bezsenność"], meaningUpright: "Lęk, niepokój, koszmary", meaningReversed: "Nadzieja, przezwyciężenie lęków" },
  { id: 35, namePL: "Cztery Buław", nameEN: "Four of Wands", suit: "wands", number: 4, keywords: ["stabilność", "świętowanie", "dom"], meaningUpright: "Stabilność, świętowanie, harmonia w domu", meaningReversed: "Brak harmonii, nieukończone projekty" },
  { id: 36, namePL: "Cztery Kielichy", nameEN: "Four of Cups", suit: "cups", number: 4, keywords: ["rozczarowanie", "apatia", "kontemplacja"], meaningUpright: "Apatia, medytacja, ponowne ocenienie", meaningReversed: "Motywacja, nowe możliwości" },
  { id: 37, namePL: "Paź Monet", nameEN: "Page of Pentacles", suit: "pentacles", keywords: ["student", "praktyczność", "nowe umiejętności"], meaningUpright: "Nowe możliwości nauki, praktyczność", meaningReversed: "Brak skupienia, prokrastynacja" },
];

export const getRandomCards = (count: number): TarotCard[] => {
  const shuffled = [...tarotDeck].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const getCardById = (id: number): TarotCard | undefined => {
  return tarotDeck.find(card => card.id === id);
};

export const getCardsByIds = (ids: number[]): TarotCard[] => {
  return ids.map(id => getCardById(id)).filter(Boolean) as TarotCard[];
};
