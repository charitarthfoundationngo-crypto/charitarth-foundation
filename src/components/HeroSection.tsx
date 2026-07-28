import React, { useState, useEffect } from 'react';
import { HERO_SLIDES } from '../data/mockData';
import { Heart, Play, ChevronLeft, ChevronRight, Sparkles, ArrowRight, ShieldCheck, ArrowUpRight } from 'lucide-react';

import { Language, TRANSLATIONS } from '../data/translations';

interface HeroSectionProps {
  onOpenDonateModal: () => void;
  onOpenVolunteerModal: () => void;
  onOpenVideoModal: () => void;
  onOpenAiAssistant: () => void;
  lang?: Language;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenDonateModal,
  onOpenVolunteerModal,
  onOpenVideoModal,
  onOpenAiAssistant,
  lang = 'en'
}) => {
  const t = TRANSLATIONS[lang].hero;
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section id="hero" className="pt-32 sm:pt-40 pb-16 bg-[#FAF9F6] text-[#212121] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">

        {/* Hero Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Bento Tile 1: Main Featured Story (Col-Span 7) */}
          <div className="lg:col-span-7 bg-[#EAF6FF] rounded-[32px] relative overflow-hidden flex flex-col justify-between p-8 sm:p-12 shadow-sm border border-black/5 group min-h-[440px]">
            {/* Background Image with subtle gradient overlay */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img
                src={slide.image}
                alt={slide.headline}
                className="w-full h-full object-cover filter brightness-[0.35] contrast-[1.1] transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/50 to-stone-900/30" />
            </div>

            {/* Floating Gold Halo Accent */}
            <div className="absolute -top-20 -right-20 w-80 h-80 border-[30px] border-[#D4AF37]/20 rounded-full pointer-events-none z-1" />

            {/* Top Badge */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md text-[#D4AF37] text-[11px] font-bold uppercase tracking-widest border border-white/20">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{slide.tagline}</span>
              </span>

              {/* Slide Counter Indicator */}
              <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full text-white text-[11px]">
                {HERO_SLIDES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-1.5 rounded-full transition-all ${
                      idx === currentSlide ? 'w-6 bg-[#D4AF37]' : 'w-1.5 bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Headline & Body Text */}
            <div className="relative z-10 space-y-4 mt-12">
              <h1 className="text-3xl sm:text-5xl leading-[1.1] text-white font-serif-title font-bold">
                {t.headline}<br />
                <span className="text-[#D4AF37] italic font-editorial">{t.tagline}</span>
              </h1>

              <p className="text-stone-200 text-sm sm:text-base max-w-xl leading-relaxed">
                {t.subheadline}
              </p>

              {/* Action Button Row */}
              <div className="flex flex-wrap items-center gap-3 pt-4">
                <button
                  onClick={onOpenDonateModal}
                  className="px-7 py-3.5 bg-[#1B5E20] hover:bg-[#0D47A1] text-white font-bold rounded-full text-xs uppercase tracking-widest shadow-xl transition-all flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
                >
                  <Heart className="w-4 h-4 fill-white" />
                  <span>{t.donateNow}</span>
                </button>

                <button
                  onClick={onOpenVideoModal}
                  className="px-6 py-3.5 bg-white/90 hover:bg-white text-stone-900 font-bold rounded-full text-xs uppercase tracking-widest shadow-md transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-stone-900" />
                  <span>{t.watchVideo}</span>
                </button>

                <button
                  onClick={onOpenVolunteerModal}
                  className="px-6 py-3.5 border border-white/40 hover:bg-white/10 text-white font-bold rounded-full text-xs uppercase tracking-widest transition-colors cursor-pointer"
                >
                  <span>{t.becomeVolunteer}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column Bento Tiles (Col-Span 5) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            
            {/* Bento Tile 2: Pillar 01 - Education */}
            <div className="bg-[#1B5E20] rounded-[32px] p-8 text-white relative overflow-hidden flex flex-col justify-between shadow-lg group hover:bg-[#154a19] transition-colors">
              <div className="flex justify-between items-start">
                <span className="text-[10px] uppercase tracking-[0.2em] opacity-70 font-bold">Pillar 01</span>
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white group-hover:bg-[#D4AF37] group-hover:text-stone-900 transition-colors">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>

              <div className="my-4 space-y-1">
                <h3 className="text-2xl font-serif-title font-bold text-white">Education & Literacy</h3>
                <p className="text-stone-200 text-xs leading-relaxed">
                  Bridging the digital divide with smart classrooms, STEM labs, and scholarships for rural youth.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                <span className="text-[10px] font-semibold px-3 py-1 bg-white/15 rounded-full text-emerald-100">Digital Smart Labs</span>
                <span className="text-[10px] font-semibold px-3 py-1 bg-white/15 rounded-full text-emerald-100">Career Guidance</span>
              </div>
            </div>

            {/* Bento Tile 3: Pillar 02 - Employment & Skills */}
            <div className="bg-[#F7F5F2] border border-black/5 rounded-[32px] p-8 flex flex-col justify-between shadow-sm relative overflow-hidden group hover:border-black/20 transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37] opacity-10 rounded-bl-full pointer-events-none" />
              
              <div className="flex justify-between items-start">
                <span className="text-[10px] uppercase tracking-[0.2em] text-stone-500 font-bold">Pillar 02</span>
                <div className="w-9 h-9 rounded-full bg-black/5 flex items-center justify-center text-stone-800 group-hover:bg-[#0D47A1] group-hover:text-white transition-colors">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>

              <div className="my-4 space-y-1">
                <h3 className="text-2xl font-serif-title font-bold text-[#212121]">Employment & Vocations</h3>
                <p className="text-stone-600 text-xs leading-relaxed">
                  Vocational skill bootcamps and guaranteed job placements connecting village talent with companies.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                <span className="text-[10px] font-semibold px-3 py-1 bg-black/5 rounded-full text-stone-700">Vocational Training</span>
                <span className="text-[10px] font-semibold px-3 py-1 bg-black/5 rounded-full text-stone-700">Job Placement</span>
              </div>
            </div>

          </div>

        </div>

        {/* Lower Row Bento Grid (Impact Metrics + Entrepreneurship + AI Volunteer Bento) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Impact Stats Bento Tile (Col Span 4) */}
          <div className="md:col-span-4 bg-[#0D47A1] rounded-[32px] p-8 text-white flex flex-col justify-between shadow-lg relative overflow-hidden">
            <div className="flex justify-between items-start">
              <span className="text-[10px] uppercase tracking-[0.2em] opacity-70 font-bold">Field Impact</span>
              <span className="text-xl">✨</span>
            </div>

            <div className="my-6 space-y-2">
              <div className="text-4xl font-serif-title font-bold text-white">15,000+</div>
              <div className="text-xs font-medium text-blue-100 uppercase tracking-wider">Children Educated & Empowered</div>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between text-[10px] text-blue-200">
                <span>Goal: 20,000 By End of 2025</span>
                <span>75% Achieved</span>
              </div>
              <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                <div className="w-3/4 h-full bg-[#D4AF37] rounded-full" />
              </div>
            </div>
          </div>

          {/* Entrepreneurship Bento Tile (Col Span 5) */}
          <div className="md:col-span-5 bg-white border border-black/5 rounded-[32px] p-8 flex flex-col justify-between shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-bold">Pillar 03</span>
                <h3 className="text-xl font-serif-title font-bold text-stone-900">Entrepreneurship</h3>
              </div>
              <span className="text-xs font-bold text-[#D4AF37] bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                Livelihoods
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 bg-[#FAF9F6] rounded-2xl border border-black/5 space-y-1">
                <span className="text-xs font-bold text-[#1B5E20]">Women SHG Support</span>
                <p className="text-[11px] text-stone-600 leading-snug">Empowering 12,000+ women weavers & artisans.</p>
              </div>
              <div className="p-4 bg-[#FAF9F6] rounded-2xl border border-black/5 space-y-1">
                <span className="text-xs font-bold text-[#0D47A1]">Microfinance Links</span>
                <p className="text-[11px] text-stone-600 leading-snug">Accessible micro-capital for rural start-ups.</p>
              </div>
            </div>
          </div>

          {/* Volunteer & AI Advisor Bento Tile (Col Span 3) */}
          <div className="md:col-span-3 bg-[#D4AF37] rounded-[32px] p-8 flex flex-col justify-between text-[#1B5E20] shadow-md">
            <div className="flex justify-between items-start">
              <span className="text-2xl">☀️</span>
              <button 
                onClick={onOpenAiAssistant}
                className="p-1.5 rounded-full bg-[#1B5E20]/10 hover:bg-[#1B5E20]/20 text-[#1B5E20] transition-colors cursor-pointer"
                title="Ask AI Assistant"
              >
                <Sparkles className="w-4 h-4" />
              </button>
            </div>

            <div className="my-4">
              <h4 className="font-bold text-sm tracking-widest uppercase font-serif-title text-[#1B5E20]">Volunteer</h4>
              <p className="text-[11px] mt-1 text-[#1B5E20]/80 font-medium leading-snug">
                Join 450+ mentors, teachers, and professionals driving grassroots change.
              </p>
            </div>

            <button
              onClick={onOpenVolunteerModal}
              className="w-full bg-[#1B5E20] hover:bg-[#0D47A1] text-white py-3 rounded-2xl text-[10px] font-bold uppercase tracking-widest transition-colors cursor-pointer shadow-md"
            >
              Become a Partner
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

