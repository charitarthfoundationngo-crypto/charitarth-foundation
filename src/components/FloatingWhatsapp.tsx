import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { CONTACT_INFO } from '../data/mockData';

export const FloatingWhatsapp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = `https://wa.me/919958915893?text=${encodeURIComponent(
    'Namaste! I would like to learn more about Charitarth Foundation programs, volunteering, or donations.'
  )}`;

  return (
    <div className="fixed bottom-safe right-5 sm:right-6 z-40 flex flex-col items-end pointer-events-auto">
      {/* Interactive Floating Tooltip */}
      {showTooltip && (
        <div className="mb-2 bg-white/95 backdrop-blur-md text-stone-900 text-xs font-semibold px-3.5 py-2 rounded-2xl shadow-xl border border-emerald-900/10 flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span>Need Help? Chat with Us</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-stone-400 hover:text-stone-700 p-0.5 rounded-full"
            aria-label="Close Tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main WhatsApp Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Charitarth Foundation (+91 9958915893)"
        className="relative group p-3.5 sm:p-4 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-2xl hover:shadow-emerald-500/40 hover:scale-110 transition-all duration-300 flex items-center justify-center border-2 border-white/40 cursor-pointer"
      >
        <span className="absolute -inset-1 rounded-full bg-emerald-400/40 animate-ping opacity-75 pointer-events-none" />
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-white text-emerald-600 relative z-10" />
      </a>
    </div>
  );
};
