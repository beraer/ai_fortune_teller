'use client';

import { useState, useRef } from 'react';
import MysticalTarotCard from './MysticalTarotCard';

interface EnhancedTarotDeckProps {
  selectedCards: number[];
  onCardSelect: (cardIndex: number) => void;
  requiredCards: number;
  onRevealCards: () => void;
  isReading?: boolean;
  title?: string;
  subtitle?: string;
}

const EnhancedTarotDeck = ({
  selectedCards,
  onCardSelect,
  requiredCards,
  onRevealCards,
  isReading = false,
  title = "Weź głęboki oddech i skup się na swoim pytaniu",
  subtitle = "WYBIERZ KARTY"
}: EnhancedTarotDeckProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      const newScrollLeft = scrollRef.current.scrollLeft + (direction === 'right' ? scrollAmount : -scrollAmount);

      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });

      // Update arrow visibility
      setTimeout(() => {
        if (scrollRef.current) {
          setShowLeftArrow(scrollRef.current.scrollLeft > 0);
          setShowRightArrow(
            scrollRef.current.scrollLeft < scrollRef.current.scrollWidth - scrollRef.current.clientWidth - 10
          );
        }
      }, 300);
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      setShowLeftArrow(scrollRef.current.scrollLeft > 0);
      setShowRightArrow(
        scrollRef.current.scrollLeft < scrollRef.current.scrollWidth - scrollRef.current.clientWidth - 10
      );
    }
  };

  return (
    <div className="w-full bg-gradient-to-b from-gray-100 to-gray-200 rounded-lg p-8">
      <div className="text-center mb-8">
        <h2 className="font-playfair text-2xl text-gray-900 mb-4 italic">
          {title}
        </h2>
        <h3 className="text-gray-600 text-lg mb-6">
          {subtitle} {requiredCards} {requiredCards === 1 ? 'KARTĘ' : requiredCards < 5 ? 'KARTY' : 'KART'}
        </h3>
      </div>

      {/* Horizontal scrolling deck */}
      <div className="relative mb-8">
        {/* Left scroll arrow */}
        {showLeftArrow && (
          <button
            onClick={() => scroll('left')}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-200"
          >
            <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        )}

        {/* Right scroll arrow */}
        {showRightArrow && (
          <button
            onClick={() => scroll('right')}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-200"
          >
            <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        )}

        {/* Scrollable container */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="overflow-x-auto scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex space-x-3 px-4 py-4" style={{ width: 'max-content' }}>
            {Array.from({ length: 78 }, (_, i) => (
              <MysticalTarotCard
                key={i}
                index={i}
                isSelected={selectedCards.includes(i)}
                onClick={() => onCardSelect(i)}
                size="md"
              />
            ))}
          </div>
        </div>

        {/* Gradient overlays for smooth scroll effect */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-gray-200 to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-gray-200 to-transparent pointer-events-none"></div>
      </div>

      {/* Progress indicator */}
      <div className="w-full max-w-md mx-auto mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-600">Wybrano kart:</span>
          <span className="text-sm font-medium text-gray-900">{selectedCards.length} / {requiredCards}</span>
        </div>
        <div className="w-full bg-gray-300 rounded-full h-2 overflow-hidden">
          <div
            className="bg-gradient-to-r from-yellow-400 to-yellow-600 h-2 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${(selectedCards.length / requiredCards) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Selected cards preview */}
      {selectedCards.length > 0 && (
        <div className="mb-6">
          <h4 className="text-center text-sm text-gray-600 mb-3">Wybrane karty:</h4>
          <div className="flex justify-center space-x-2">
            {selectedCards.map((cardIndex, i) => (
              <MysticalTarotCard
                key={cardIndex}
                index={cardIndex}
                isSelected={true}
                onClick={() => onCardSelect(cardIndex)}
                size="sm"
              />
            ))}
          </div>
        </div>
      )}

      {/* Reveal button */}
      <div className="text-center">
        <button
          className={`
            px-8 py-3 rounded-lg font-medium text-white transition-all duration-300
            ${selectedCards.length === requiredCards && !isReading
              ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 shadow-lg transform hover:scale-105'
              : 'bg-gray-400 cursor-not-allowed'
            }
          `}
          onClick={onRevealCards}
          disabled={selectedCards.length !== requiredCards || isReading}
        >
          {isReading ? (
            <div className="flex items-center space-x-2">
              <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
              <span>Odkrywam karty...</span>
            </div>
          ) : (
            'Odkryj karty'
          )}
        </button>

        {selectedCards.length < requiredCards && (
          <p className="text-sm text-gray-500 mt-2">
            Wybierz {requiredCards - selectedCards.length} {requiredCards - selectedCards.length === 1 ? 'kartę więcej' : 'karty więcej'}
          </p>
        )}
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default EnhancedTarotDeck;
