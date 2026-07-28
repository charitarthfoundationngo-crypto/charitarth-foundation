import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PILLARS_DATA } from '../data/mockData';
import { PillarDetail } from '../types';
import { BookOpen, Briefcase, Lightbulb, ChevronRight, X, Check, Award, Heart, Sparkles, ArrowRight } from 'lucide-react';

import { Language, TRANSLATIONS } from '../data/translations';

interface ThreePillarsProps {
  onOpenDonateModal: () => void;
  onOpenVolunteerModal: () => void;
  lang?: Language;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const ThreePillars: React.FC<ThreePillarsProps> = ({ onOpenDonateModal, onOpenVolunteerModal, lang = 'en' }) => {
  const t = TRANSLATIONS[lang].pillars;
  const [selectedPillar, setSelectedPillar] = useState<PillarDetail | null>(null);

  const getPillarIcon = (name: string) => {
    switch (name) {
      case 'BookOpen': return BookOpen;
      case 'Briefcase': return Briefcase;
      case 'Lightbulb': return Lightbulb;
      default: return BookOpen;
    }
  };

  return (
    <section id="pillars" className="py-24 bg-[#FAF9F6] text-stone-900 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1B5E20]/10 text-[#1B5E20] text-xs font-bold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>

          <h2 className="font-serif-title text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight leading-tight">
            {t.heading}
          </h2>

          <p className="text-stone-600 text-base sm:text-lg">
            {t.subheading}
          </p>
        </motion.div>

        {/* 3 Interactive Cards Grid with Stagger Animation */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {PILLARS_DATA.map((pillar, idx) => {
            const IconComp = getPillarIcon(pillar.iconName);
            const cardBgs = ['bg-white', 'bg-[#F7F5F2]', 'bg-[#EAF6FF]'];
            const currentBg = cardBgs[idx % cardBgs.length];

            return (
              <motion.div
                key={pillar.id}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`${currentBg} rounded-[32px] overflow-hidden border border-black/5 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col group cursor-pointer`}
                onClick={() => setSelectedPillar(pillar)}
              >
                {/* Image Header */}
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/30 to-transparent" />
                  
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                    <span className="bg-white/95 backdrop-blur-md text-stone-900 text-[10px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-md">
                      {pillar.badge}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#1B5E20] transition-colors">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center gap-2 text-[#D4AF37] text-[10px] font-bold tracking-widest uppercase mb-1">
                      <IconComp className="w-3.5 h-3.5" />
                      <span>Pillar Program 0{idx + 1}</span>
                    </div>
                    <h3 className="font-serif-title text-2xl font-bold">
                      {pillar.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <p className="text-[#1B5E20] font-bold text-xs tracking-wider uppercase">
                      {pillar.subtitle}
                    </p>
                    <p className="text-stone-700 text-xs sm:text-sm leading-relaxed">
                      {pillar.description}
                    </p>

                    {/* Key Initiative Tag Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {pillar.keyInitiatives.slice(0, 4).map((init, initIdx) => (
                        <span
                          key={initIdx}
                          className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-950/10 text-emerald-900 border border-emerald-900/10 backdrop-blur-xs flex items-center gap-1"
                        >
                          <Sparkles className="w-2.5 h-2.5 text-[#1B5E20]" />
                          <span>{init}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Highlight Metrics */}
                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-black/5 text-center">
                    {pillar.metrics.slice(0, 2).map((m, mIdx) => (
                      <div key={mIdx} className="bg-white/80 p-3 rounded-2xl border border-black/5 shadow-2xs">
                        <div className="font-serif-title font-bold text-lg text-[#1B5E20]">{m.value}</div>
                        <div className="text-[10px] text-stone-500 font-medium">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  <button className="w-full py-3.5 rounded-2xl bg-stone-900 group-hover:bg-[#1B5E20] text-white font-bold text-[10px] tracking-widest uppercase flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-sm">
                    <span>Explore Strategy & Initiatives</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>

      {/* Expanded Modal Detail Drawer */}
      {selectedPillar && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/75 backdrop-blur-md animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 shadow-2xl relative space-y-8 animate-in zoom-in-95">
            
            <button
              onClick={() => setSelectedPillar(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Title & Header */}
            <div className="flex items-center gap-4 border-b border-stone-200 pb-6">
              <div className="p-4 rounded-2xl bg-[#1B5E20] text-white shadow-lg">
                {React.createElement(getPillarIcon(selectedPillar.iconName), { className: 'w-8 h-8' })}
              </div>
              <div>
                <span className="text-xs font-bold text-[#D4AF37] tracking-widest uppercase">
                  {selectedPillar.badge} Detailed Framework
                </span>
                <h3 className="font-serif-title text-3xl font-bold text-stone-900">
                  {selectedPillar.title}
                </h3>
                <p className="text-stone-600 text-sm">{selectedPillar.subtitle}</p>
              </div>
            </div>

            {/* Description & Initiatives */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="font-bold text-stone-900 text-base flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#1B5E20]" />
                  <span>Key Strategic Initiatives</span>
                </h4>

                <ul className="space-y-3">
                  {selectedPillar.keyInitiatives.map((init, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-stone-700 text-sm bg-stone-50 p-3 rounded-xl border border-stone-100">
                      <Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span>{init}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
                <div className="bg-amber-50 p-5 rounded-2xl border border-amber-200 space-y-2">
                  <h5 className="font-bold text-stone-900 text-xs tracking-wider uppercase text-[#B8860B]">
                    Featured Field Case Study
                  </h5>
                  <h6 className="font-serif-title font-bold text-lg text-stone-900">
                    {selectedPillar.caseStudyTitle}
                  </h6>
                  <p className="text-stone-700 text-sm">
                    {selectedPillar.caseStudySnippet}
                  </p>
                </div>

                <div className="bg-emerald-50/80 p-5 rounded-2xl border border-emerald-100 text-emerald-950 italic text-sm">
                  "{selectedPillar.quote}"
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 text-center">
                  {selectedPillar.metrics.map((m, idx) => (
                    <div key={idx} className="p-3 bg-stone-100 rounded-xl">
                      <div className="font-serif-title font-bold text-xl text-[#1B5E20]">{m.value}</div>
                      <div className="text-[10px] text-stone-600 font-medium">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-6 border-t border-stone-200 flex flex-wrap gap-4 items-center justify-end">
              <button
                onClick={() => { setSelectedPillar(null); onOpenVolunteerModal(); }}
                className="px-6 py-3 rounded-full border border-stone-300 text-stone-800 font-semibold text-xs uppercase hover:bg-stone-100 transition-colors"
              >
                Volunteer for {selectedPillar.title}
              </button>

              <button
                onClick={() => { setSelectedPillar(null); onOpenDonateModal(); }}
                className="px-8 py-3 rounded-full bg-[#1B5E20] hover:bg-[#124216] text-white font-bold text-xs uppercase shadow-lg flex items-center gap-2 cursor-pointer transition-colors"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>Sponsor This Pillar</span>
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
