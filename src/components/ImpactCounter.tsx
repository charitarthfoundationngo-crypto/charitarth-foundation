import React, { useState } from 'react';
import { IMPACT_METRICS } from '../data/mockData';
import { GraduationCap, Award, Users, MapPin, HeartHandshake, Clock, BookMarked, Monitor, Building2, Filter } from 'lucide-react';

export const ImpactCounter: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'education' | 'employment' | 'entrepreneurship'>('all');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap': return GraduationCap;
      case 'Award': return Award;
      case 'Users': return Users;
      case 'MapPin': return MapPin;
      case 'HeartHandshake': return HeartHandshake;
      case 'Clock': return Clock;
      case 'BookMarked': return BookMarked;
      case 'Monitor': return Monitor;
      case 'Building2': return Building2;
      default: return Users;
    }
  };

  const filteredMetrics = filter === 'all' 
    ? IMPACT_METRICS 
    : IMPACT_METRICS.filter(m => m.category === filter || m.category === 'all');

  return (
    <section id="impact" className="py-24 bg-stone-900 text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#1B5E20]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#0D47A1]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold tracking-widest uppercase text-[#D4AF37] px-3 py-1 rounded-full bg-white/10 border border-white/10">
            Measurable Field Outcomes
          </span>

          <h2 className="font-serif-title text-3xl sm:text-5xl font-bold tracking-tight">
            Grassroots Impact Measured in Real Lives
          </h2>

          <p className="text-stone-300 text-base sm:text-lg font-light">
            Every number represents a verified beneficiary — a child learning to code, a youth placed in formal employment, or a woman launching her rural micro-enterprise.
          </p>

          {/* Category Filter Tabs */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'all', label: 'All Impact Metrics' },
              { id: 'education', label: 'Education' },
              { id: 'employment', label: 'Employment' },
              { id: 'entrepreneurship', label: 'Entrepreneurship' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  filter === tab.id
                    ? 'bg-[#D4AF37] text-stone-900 shadow-lg scale-105'
                    : 'bg-white/10 text-stone-300 hover:bg-white/20'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMetrics.map((item, idx) => {
            const IconComp = getIcon(item.icon);
            const bentoColors = [
              'bg-white/5 hover:bg-[#1B5E20]/30',
              'bg-white/5 hover:bg-[#0D47A1]/30',
              'bg-white/5 hover:bg-[#D4AF37]/20'
            ];
            const currentColor = bentoColors[idx % bentoColors.length];

            return (
              <div
                key={item.id}
                className={`${currentColor} border border-white/10 hover:border-[#D4AF37]/60 rounded-[32px] p-8 backdrop-blur-md transition-all hover:-translate-y-1 hover:shadow-2xl space-y-5 group flex flex-col justify-between`}
              >
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-2xl bg-white/10 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-stone-900 transition-colors">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-stone-300 bg-black/40 px-3 py-1 rounded-full border border-white/10">
                    Verified 2025
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="font-serif-title font-bold text-4xl sm:text-5xl text-[#D4AF37] tracking-tight">
                    {item.value.toLocaleString('en-IN')}{item.suffix}
                  </div>
                  <div className="font-bold text-lg text-white">
                    {item.label}
                  </div>
                  <p className="text-stone-300 text-xs leading-relaxed pt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
