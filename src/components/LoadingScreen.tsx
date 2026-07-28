import React, { useState, useEffect } from 'react';
import { LOGO_URL } from '../data/mockData';

export const LoadingScreen: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 1800);
    const hideTimer = setTimeout(() => setVisible(false), 2400);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-stone-950 transition-opacity duration-600 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Ambient Glow */}
      <div className="absolute w-72 h-72 bg-[#1B5E20]/30 rounded-full blur-3xl pointer-events-none" />

      {/* Logo Animation */}
      <div className="relative z-10 flex flex-col items-center space-y-6">
        <div className="w-24 h-24 rounded-full bg-white p-2.5 shadow-2xl border-2 border-[#D4AF37]/50 animate-pulse">
          <img
            src={LOGO_URL}
            alt="Charitarth Foundation"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="text-center space-y-2">
          <h1 className="font-serif-title text-2xl sm:text-3xl font-bold text-white tracking-wider uppercase">
            Charitarth Foundation
          </h1>
          <p className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.3em]">
            Education • Employment • Entrepreneurship
          </p>
        </div>

        {/* Loading Bar */}
        <div className="w-48 h-1 bg-stone-800 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-[#1B5E20] to-[#D4AF37] rounded-full animate-loading-bar" />
        </div>

        <p className="text-stone-500 text-[10px] font-medium tracking-wider uppercase">
          Together, We Create Possibilities.
        </p>
      </div>
    </div>
  );
};
