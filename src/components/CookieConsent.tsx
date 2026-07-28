import React, { useState, useEffect } from 'react';
import { X, Shield } from 'lucide-react';

export const CookieConsent: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('charitarth-cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 2500);
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
    <div className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-6 z-50 max-w-lg mx-auto animate-in slide-in-from-bottom-4 fade-in">
      <div className="bg-stone-950 text-white rounded-3xl p-5 sm:p-6 shadow-2xl border border-stone-800 space-y-4">

        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-full bg-[#1B5E20]/20 flex items-center justify-center shrink-0 mt-0.5">
              <Shield className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-sm text-white">We Value Your Privacy</h4>
              <p className="text-stone-400 text-xs leading-relaxed">
                We use essential cookies to ensure the website functions properly. No tracking or advertising cookies are used. Your privacy is important to us.
              </p>
            </div>
          </div>
          <button
            onClick={handleDecline}
            className="p-1 rounded-full hover:bg-stone-800 text-stone-500 transition-colors cursor-pointer shrink-0"
            aria-label="Close cookie banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleAccept}
            className="flex-1 py-2.5 rounded-xl bg-[#1B5E20] hover:bg-[#134017] text-white font-bold text-xs uppercase tracking-wider cursor-pointer transition-colors"
          >
            Accept All
          </button>
          <button
            onClick={handleDecline}
            className="flex-1 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 font-bold text-xs uppercase tracking-wider cursor-pointer transition-colors"
          >
            Essential Only
          </button>
        </div>

      </div>
    </div>
  );
};
