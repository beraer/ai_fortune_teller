'use client';

import { useState } from 'react';

interface MysticalTarotCardProps {
  index: number;
  isSelected: boolean;
  onClick: () => void;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const MysticalTarotCard = ({
  index,
  isSelected,
  onClick,
  size = 'md',
  className = ''
}: MysticalTarotCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const sizeClasses = {
    sm: 'w-12 h-20',
    md: 'w-16 h-24',
    lg: 'w-20 h-32'
  };

  return (
    <div
      className={`
        relative cursor-pointer transition-all duration-300 flex-shrink-0
        ${sizeClasses[size]}
        ${isSelected ? 'transform -translate-y-2 scale-105' : ''}
        ${isHovered ? 'transform -translate-y-1' : ''}
        ${className}
      `}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Outer glow effect when selected */}
      {isSelected && (
        <div className="absolute inset-0 bg-yellow-400 rounded-lg blur-md opacity-20 -z-10"></div>
      )}

      {/* Main card body */}
      <div className={`
        relative w-full h-full rounded-lg overflow-hidden
        bg-gradient-to-b from-gray-800 via-gray-900 to-black
        border-2 transition-all duration-300
        ${isSelected ? 'border-yellow-400 shadow-lg shadow-yellow-400/25' : 'border-gray-600'}
        ${isHovered ? 'border-gray-500' : ''}
      `}>
        {/* Ornate border pattern */}
        <div className="absolute inset-1 rounded border border-gray-500">
          {/* Corner decorations */}
          <div className="absolute top-1 left-1 w-2 h-2">
            <svg viewBox="0 0 20 20" className="w-full h-full text-gray-400 fill-current">
              <path d="M2 2 L8 2 L8 4 L4 4 L4 8 L2 8 Z" />
            </svg>
          </div>
          <div className="absolute top-1 right-1 w-2 h-2">
            <svg viewBox="0 0 20 20" className="w-full h-full text-gray-400 fill-current">
              <path d="M18 2 L12 2 L12 4 L16 4 L16 8 L18 8 Z" />
            </svg>
          </div>
          <div className="absolute bottom-1 left-1 w-2 h-2">
            <svg viewBox="0 0 20 20" className="w-full h-full text-gray-400 fill-current">
              <path d="M2 18 L8 18 L8 16 L4 16 L4 12 L2 12 Z" />
            </svg>
          </div>
          <div className="absolute bottom-1 right-1 w-2 h-2">
            <svg viewBox="0 0 20 20" className="w-full h-full text-gray-400 fill-current">
              <path d="M18 18 L12 18 L12 16 L16 16 L16 12 L18 12 Z" />
            </svg>
          </div>

          {/* Center mystical symbol */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              {/* Outer circle */}
              <div className="w-8 h-8 border border-gray-500 rounded-full flex items-center justify-center">
                {/* Inner mystical pattern */}
                <div className="w-4 h-4 relative">
                  <svg viewBox="0 0 24 24" className="w-full h-full text-gray-400 fill-current">
                    <path d="M12 2L13.5 8.5L20 7L14.5 12L20 17L13.5 15.5L12 22L10.5 15.5L4 17L9.5 12L4 7L10.5 8.5Z" />
                  </svg>
                </div>
              </div>

              {/* Mystical dots */}
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gray-500 rounded-full"></div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gray-500 rounded-full"></div>
              <div className="absolute top-1/2 -left-2 transform -translate-y-1/2 w-1 h-1 bg-gray-500 rounded-full"></div>
              <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 w-1 h-1 bg-gray-500 rounded-full"></div>
            </div>
          </div>

          {/* Decorative lines */}
          <div className="absolute top-3 left-3 right-3 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-50"></div>
          <div className="absolute bottom-3 left-3 right-3 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-50"></div>
        </div>

        {/* Selection indicator */}
        {isSelected && (
          <div className="absolute inset-0 bg-yellow-400 bg-opacity-10 rounded-lg flex items-center justify-center">
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
          </div>
        )}

        {/* Card number (for debugging) */}
        {/* <div className="absolute bottom-1 left-1 text-xs text-gray-500 font-mono">
          {index + 1}
        </div> */}
      </div>
    </div>
  );
};

export default MysticalTarotCard;
