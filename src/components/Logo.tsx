import { useState } from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  imgClassName?: string;
}

export function Logo({ size = 'md', className = '', imgClassName = '' }: LogoProps) {
  const [imgError, setImgError] = useState(false);

  const sizeClasses = {
    sm: 'w-8 h-8 rounded-md text-xs',
    md: 'w-9 h-9 sm:w-10 sm:h-10 rounded-lg text-sm',
    lg: 'w-11 h-11 sm:w-12 sm:h-12 rounded-xl text-base',
  };

  return (
    <div
      className={`relative inline-flex items-center justify-center overflow-hidden transition-all duration-300 ${sizeClasses[size]} ${className}`}
    >
      {!imgError ? (
        <img
          src="/logo.png"
          alt="THOTH CELL logo"
          onError={() => setImgError(true)}
          className={`w-full h-full object-contain select-none transition-transform duration-300 group-hover:scale-105 ${imgClassName}`}
          loading="eager"
        />
      ) : (
        /* Fallback typographic TC monogram badge if /logo.png cannot be loaded */
        <div className="w-full h-full bg-white text-black flex items-center justify-center font-display font-extrabold tracking-tighter group-hover:bg-[#ff5500] group-hover:text-white transition-colors duration-300">
          TC
        </div>
      )}
    </div>
  );
}
