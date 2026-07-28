import React, { useState } from 'react';
import { MOTTO_DATA } from '../data/mockData';
import { Heart, Users, HeartHandshake, BookOpen, Sparkles, Building2, Quote, ArrowRight, CheckCircle2 } from 'lucide-react';

import { Language, TRANSLATIONS } from '../data/translations';

interface MottoSectionProps {
  lang?: Language;
}

export const MottoSection: React.FC<MottoSectionProps> = ({ lang = 'en' }) => {
  const t = TRANSLATIONS[lang].motto;
  const [selectedStakeholder, setSelectedStakeholder] = useState<string>(MOTTO_DATA.dimensions[0].id);

  const getStakeholderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Home': return Users;
      case 'HeartHandshake': return HeartHandshake;
      case 'Heart': return Heart;
      case 'BookOpen': return BookOpen;
      case 'Sparkles': return Sparkles;
      case 'Building2': return Building2;
      default: return Sparkles;
    }
  };

  const activeDim = MOTTO_DATA.dimensions.find(d => d.id === selectedStakeholder) || MOTTO_DATA.dimensions[0];

  return (
    <section id="motto" className="py-24 bg-gradient-to-b from-[#F4F7F4] via-[#FAF8F5] to-[#EEF4EE] text-stone-900 border-t border-emerald-900/10 relative overflow-hidden">
      
      {/* Nature Floral & Forest Ambient Accents */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#1B5E20]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* Banner Callout */}
        <div className="bg-gradient-to-r from-[#1B5E20] via-[#2E7D32] to-[#134017] rounded-[40px] p-8 sm:p-14 text-white shadow-2xl relative overflow-hidden border border-white/10">
          
          <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
            <svg width="400" height="400" viewBox="0 0 100 100" fill="white">
              <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="2" fill="none" />
              <path d="M 50 10 C 70 30, 70 70, 50 90 C 30 70, 30 30, 50 10 Z" fill="white" />
            </svg>
          </div>

          <div className="relative z-10 max-w-3xl space-y-6 text-center mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37] text-stone-950 text-xs font-black tracking-widest uppercase shadow-md">
              <Quote className="w-3.5 h-3.5" />
              <span>{t.badge}</span>
            </div>

            <h2 className="font-serif-title text-4xl sm:text-6xl font-bold tracking-tight leading-tight text-amber-100">
              {t.heading}
            </h2>

            <p className="text-stone-100 text-base sm:text-xl font-editorial italic max-w-2xl mx-auto leading-relaxed">
              {t.story}
            </p>

            <div className="pt-2 flex flex-wrap justify-center gap-4 text-xs font-bold text-emerald-100">
              <span className="flex items-center gap-1">✓ Community Ownership</span>
              <span className="flex items-center gap-1">✓ Grassroots Empathy</span>
              <span className="flex items-center gap-1">✓ Sustainable Impact</span>
            </div>
          </div>
        </div>

        {/* Interactive Stakeholder Unity Matrix */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-stone-900">
              Six Pillars of Collective Action
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm">
              Discover how each stakeholder contributes to building self-reliant rural communities across India.
            </p>
          </div>

          {/* Stakeholder Selector Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {MOTTO_DATA.dimensions.map((dim) => {
              const IconComp = getStakeholderIcon(dim.icon);
              const isSelected = selectedStakeholder === dim.id;

              return (
                <button
                  key={dim.id}
                  onClick={() => setSelectedStakeholder(dim.id)}
                  className={`p-4 rounded-2xl border text-left transition-all duration-300 cursor-pointer space-y-2 flex flex-col justify-between ${
                    isSelected
                      ? 'bg-white border-[#1B5E20] shadow-lg ring-2 ring-[#1B5E20]/20 translate-y-[-2px]'
                      : 'bg-white/60 border-stone-200 hover:bg-white hover:border-amber-300 shadow-2xs'
                  }`}
                >
                  <div className={`p-2.5 rounded-xl w-fit ${dim.color}`}>
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 text-xs">{dim.stakeholder}</h4>
                    <p className="text-[10px] text-stone-500 line-clamp-1">{dim.role}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Highlight Card for Active Stakeholder */}
          <div className="bg-white rounded-3xl p-8 border border-emerald-900/10 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="text-[10px] font-bold uppercase tracking-widest bg-[#1B5E20] text-white px-3 py-1 rounded-full">
                {activeDim.stakeholder} • {activeDim.role}
              </span>
              <h4 className="font-serif-title text-2xl font-bold text-stone-900 leading-snug">
                "{activeDim.impactQuote}"
              </h4>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                When {activeDim.stakeholder.toLowerCase()} unite with Charitarth Foundation, grassroots interventions achieve scalable momentum—transforming lives from foundational literacy to economic independence.
              </p>
            </div>

            <div className="flex-shrink-0">
              <a
                href="#donate"
                className="px-6 py-3 rounded-full bg-[#1B5E20] hover:bg-[#0D47A1] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md inline-flex items-center gap-2"
              >
                <span>Join The Mission</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
