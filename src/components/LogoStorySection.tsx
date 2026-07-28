import React, { useState } from 'react';
import { LOGO_STORY_ITEMS, LOGO_URL } from '../data/mockData';
import { Sun, BookOpen, Users, Leaf, Home, TrendingUp, Compass, ShieldCheck, Sparkles, HelpCircle } from 'lucide-react';

import { Language, TRANSLATIONS } from '../data/translations';

interface LogoStorySectionProps {
  lang?: Language;
}

export const LogoStorySection: React.FC<LogoStorySectionProps> = ({ lang = 'en' }) => {
  const t = TRANSLATIONS[lang].logoStory;
  const [activeElementId, setActiveElementId] = useState<string>('sun');

  const getElementIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sun': return Sun;
      case 'BookOpen': return BookOpen;
      case 'Users': return Users;
      case 'Leaf': return Leaf;
      case 'Home': return Home;
      case 'TrendingUp': return TrendingUp;
      case 'Compass': return Compass;
      case 'ShieldCheck': return ShieldCheck;
      default: return Sparkles;
    }
  };

  const selectedItem = LOGO_STORY_ITEMS.find(item => item.id === activeElementId) || LOGO_STORY_ITEMS[0];

  return (
    <section id="logo-story" className="py-24 bg-nature-parchment botanical-overlay text-stone-900 border-t border-emerald-900/10 relative overflow-hidden">
      
      {/* Background Subtle Leaf Accents */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-[#1B5E20]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1B5E20]/10 text-[#1B5E20] text-xs font-bold tracking-widest uppercase border border-[#1B5E20]/20">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{t.badge}</span>
          </div>

          <h2 className="font-serif-title text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight leading-tight">
            {t.heading}
          </h2>

          <p className="text-stone-600 text-base sm:text-lg">
            {t.subheading}
          </p>

          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            Every curve, symbol, and shade within the Charitarth Foundation seal holds a deep purpose—embodying hope, education, community empowerment, sustainability, and economic self-reliance across rural India.
          </p>
        </div>

        {/* 2-Column Interactive Logo Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Official Logo Display with Interactive Hotspots */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-6">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-300/30 via-emerald-400/30 to-blue-400/30 rounded-full blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Official Logo Container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-white p-4 shadow-2xl border-4 border-amber-300/80 flex items-center justify-center transition-transform duration-500 hover:scale-105">
                <img
                  src={LOGO_URL}
                  alt="Charitarth Foundation Official Seal"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <div className="text-center space-y-1">
              <span className="font-serif-title font-bold text-xl text-stone-900 block">CHARITARTH FOUNDATION</span>
              <p className="text-xs font-bold tracking-[0.25em] text-[#1B5E20] uppercase">
                Education • Employment • Entrepreneurship
              </p>
              <p className="text-[11px] text-stone-500 italic pt-1">
                Hover or click on any symbol card to explore its meaning
              </p>
            </div>
          </div>

          {/* Right Column: 8 Emblem Element Cards */}
          <div className="lg:col-span-7 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {LOGO_STORY_ITEMS.map((item) => {
                const IconComp = getElementIcon(item.iconName);
                const isSelected = activeElementId === item.id;
                
                return (
                  <div
                    key={item.id}
                    onMouseEnter={() => setActiveElementId(item.id)}
                    onClick={() => setActiveElementId(item.id)}
                    className={`p-5 rounded-3xl border transition-all duration-300 cursor-pointer space-y-3 relative flex flex-col justify-between ${
                      isSelected
                        ? 'bg-white border-[#1B5E20] shadow-xl ring-2 ring-[#1B5E20]/20 translate-x-1'
                        : 'bg-white/70 border-stone-200/80 hover:bg-white hover:border-amber-300 shadow-xs'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-2xl text-white bg-gradient-to-r ${item.color} shadow-xs`}>
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-serif-title font-bold text-base text-stone-900 leading-tight">
                          {item.elementName}
                        </h3>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#1B5E20] block mt-0.5">
                          {item.symbolism}
                        </span>
                      </div>
                    </div>

                    <p className="text-stone-600 text-xs leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
