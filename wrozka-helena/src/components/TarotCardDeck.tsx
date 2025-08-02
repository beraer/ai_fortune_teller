'use client';

import { useState } from 'react';

interface TarotCardDeckProps {
  selectedCards: number[];
  onCardSelect: (cardIndex: number) => void;
  requiredCards: number;
  onRevealCards: () => void;
  isReading?: boolean;
}

const TarotCardDeck = ({
  selectedCards,
  onCardSelect,
  requiredCards,
  onRevealCards,
  isReading = false
}: TarotCardDeckProps) => {

  const CardBack = ({ index, isSelected, onClick }: {
    index: number;
    isSelected: boolean;
    onClick: () => void
  }) => (
    <div
      className={`relative w-16 h-24 bg-gray-800 border-2 border-dashed border-gray-400 rounded-lg cursor-pointer transition-all duration-300 flex-shrink-0 ${
        isSelected ? 'border-solid border-black transform -translate-y-1 shadow-lg' : 'hover:border-gray-600'
      }`}
      onClick={onClick}
    >
      <div className="absolute inset-1 border border-gray-500 rounded">
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-6 h-6 border border-gray-500 rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full">
      {/* Scrollable deck */}
      <div className="relative mb-6">
        <div className="overflow-x-auto pb-4">
          <div className="flex space-x-2 min-w-max px-4">
            {Array.from({ length: 50 }, (_, i) => (
              <CardBack
                key={i}
                index={i}
                isSelected={selectedCards.includes(i)}
                onClick={() => onCardSelect(i)}
              />
            ))}
          </div>
        </div>

        {/* Custom scrollbar indicator */}
        <div className="flex justify-center items-center space-x-2 mt-2">
          <button className="text-gray-400 hover:text-gray-600">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </button>

          <div className="w-64 h-1 bg-gray-300 rounded-full">
            <div className="w-1/4 h-1 bg-gray-600 rounded-full"></div>
          </div>

          <button className="text-gray-400 hover:text-gray-600">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>

      {/* Progress indicator */}
      <div className="w-full max-w-md mx-auto bg-gray-200 rounded-full h-2 mb-6">
        <div
          className="bg-black h-2 rounded-full transition-all duration-300"
          style={{ width: `${(selectedCards.length / requiredCards) * 100}%` }}
        ></div>
      </div>

      {/* Reveal button */}
      <div className="text-center">
        <button
          className={`btn-primary ${
            selectedCards.length === requiredCards
              ? 'opacity-100 cursor-pointer'
              : 'opacity-50 cursor-not-allowed'
          }`}
          onClick={onRevealCards}
          disabled={selectedCards.length !== requiredCards || isReading}
        >
          {isReading ? 'Odkrywam karty...' : 'Odkryj karty'}
        </button>
      </div>
    </div>
  );
};

export default TarotCardDeck;
