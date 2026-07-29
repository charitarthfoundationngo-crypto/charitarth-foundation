import React, { useState, useEffect } from 'react';
import { X, Shield } from 'lucide-react';

export const CookieConsent: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('charitarth-cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 3500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('charitarth-cookie-consent', 'accepted');
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('charitarth-cookie-consent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-3 left-3 right-3 sm:left-6 sm:right-6 z-40 max-w-md mx-auto animate-in slide-in-from-bottom-4 fade-in">
      <div className="bg-stone-950/95 backdrop-blur-xl text-white rounded-2xl sm:rounded-3xl p-3.5 sm:p-5 shadow-2xl border border-stone-800 space-y-3">

        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#1B5E20]/30 flex items-center justify-center shrink-0">
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
            </div>
            <div className="truncate">
              <h4 className="font-bold text-xs sm:text-sm text-white truncate">We Value Your Privacy</h4>
              <p className="text-stone-400 text-[10px] sm:text-xs truncate">
                Essential cookies only. No ad tracking used.
              </p>
            </div>
          </div>

          <button
            onClick={handleDecline}
            className="p-1.5 rounded-full hover:bg-stone-800 text-stone-400 transition-colors cursor-pointer shrink-0"
            aria-label="Close cookie banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center gap-2 pt-0.5">
          <button
            onClick={handleAccept}
            className="flex-1 py-2 sm:py-2.5 rounded-xl bg-[#1B5E20] hover:bg-[#134017] text-white font-bold text-[11px] sm:text-xs uppercase tracking-wider cursor-pointer transition-colors"
          >
            Accept
          </button>
          <button
            onClick={handleDecline}
            className="flex-1 py-2 sm:py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 font-bold text-[11px] sm:text-xs uppercase tracking-wider cursor-pointer transition-colors"
          >
            Essential Only
          </button>
        </div>

      </div>
    </div>
  );
};
