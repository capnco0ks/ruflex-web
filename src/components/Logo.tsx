import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({ className = 'w-11 h-11', size }) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center flex-shrink-0 ${className}`}
      style={size ? { width: size, height: size } : undefined}
    >
      <img
        src="/logo.svg"
        alt="Диана Трейд Логотип"
        className="w-full h-full object-contain rounded-full shadow-sm hover:scale-105 transition-transform"
      />
    </div>
  );
};
