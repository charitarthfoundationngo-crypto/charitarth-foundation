import React, { useState } from 'react';
import { INDIA_STATES } from '../data/mockData';
import { StateData } from '../types';
import { MapPin, Phone, Mail, CheckCircle, ArrowRight, UserCheck, Sparkles, Building } from 'lucide-react';

export const IndiaMapSection: React.FC = () => {
  const [selectedState, setSelectedState] = useState<StateData>(INDIA_STATES[0]);

  return (
    <section id="india-map" className="py-24 bg-[#FAF9F6] text-stone-900 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1B5E20]/10 text-[#1B5E20] text-xs font-bold tracking-widest uppercase">
            <MapPin className="w-3.5 h-3.5" />
            <span>Interactive Grassroots Footprint</span>
          </div>

          <h2 className="font-serif-title text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight leading-tight">
            Our India Journey Across 200+ Rural Hamlets
          </h2>

          <p className="text-stone-600 text-base sm:text-lg">
            Explore state-specific field centers, beneficiaries count, regional project highlights, and direct local field coordinator details.
          </p>
        </div>

        {/* State Selector Buttons Bar */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {INDIA_STATES.map((st) => (
            <button
              key={st.id}
              onClick={() => setSelectedState(st)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                selectedState.id === st.id
                  ? 'bg-[#1B5E20] text-white shadow-lg scale-105 ring-4 ring-[#1B5E20]/20'
                  : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
              <span>{st.name} ({st.code})</span>
            </button>
          ))}
        </div>

        {/* State Detail Dashboard */}
        <div className="mt-10 bg-white rounded-[32px] p-6 sm:p-10 shadow-sm border border-black/5 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Map Graphic Box (Left) */}
          <div className="lg:col-span-5 relative bg-[#1B5E20] rounded-[28px] p-8 text-white overflow-hidden min-h-[380px] flex flex-col justify-between shadow-xl">
            <div className="absolute top-0 right-0 p-8 opacity-15 font-serif-title font-bold text-9xl text-white select-none">
              {selectedState.code}
            </div>

            <div className="relative z-10 space-y-2">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase bg-[#D4AF37] text-stone-900 px-3.5 py-1.5 rounded-full inline-block">
                Region Highlight
              </span>
              <h3 className="font-serif-title text-3xl font-bold text-white">
                {selectedState.name}
              </h3>
              <p className="text-stone-200 text-xs leading-relaxed">
                Deep field interventions across {selectedState.districtsCovered} key rural districts.
              </p>
            </div>

            {/* Quick State Metrics */}
            <div className="relative z-10 grid grid-cols-3 gap-2 pt-6 border-t border-white/20 text-center">
              <div className="bg-white/10 p-3 rounded-2xl backdrop-blur-md">
                <div className="font-serif-title font-bold text-xl text-[#D4AF37]">{selectedState.districtsCovered}</div>
                <div className="text-[10px] text-stone-200">Districts</div>
              </div>
              <div className="bg-white/10 p-3 rounded-2xl backdrop-blur-md">
                <div className="font-serif-title font-bold text-xl text-sky-300">{selectedState.villagesCount}</div>
                <div className="text-[10px] text-stone-200">Villages</div>
              </div>
              <div className="bg-white/10 p-3 rounded-2xl backdrop-blur-md">
                <div className="font-serif-title font-bold text-xl text-emerald-300">{selectedState.beneficiaries}</div>
                <div className="text-[10px] text-stone-200">Impacted</div>
              </div>
            </div>

            {/* Local Coordinator Card */}
            <div className="relative z-10 mt-4 p-4 rounded-2xl bg-black/30 border border-white/10 text-xs space-y-1">
              <div className="text-[#D4AF37] font-bold text-[11px] tracking-wider uppercase flex items-center gap-1">
                <UserCheck className="w-3.5 h-3.5" />
                <span>Field Lead: {selectedState.localCoordinator.name}</span>
              </div>
              <div className="text-stone-200 flex items-center justify-between text-[11px]">
                <span>📞 {selectedState.localCoordinator.phone}</span>
                <span>✉️ {selectedState.localCoordinator.email}</span>
              </div>
            </div>
          </div>

          {/* Programs & Featured Story (Right) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Key Programs */}
            <div>
              <h4 className="font-bold text-stone-900 text-sm tracking-wider uppercase mb-3 flex items-center gap-2">
                <Building className="w-4 h-4 text-[#1B5E20]" />
                <span>Active Regional Programs in {selectedState.name}</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedState.keyPrograms.map((prog, pIdx) => (
                  <span key={pIdx} className="bg-emerald-50 text-[#1B5E20] font-semibold text-xs px-3 py-1.5 rounded-lg border border-emerald-200">
                    ✓ {prog}
                  </span>
                ))}
              </div>
            </div>

            {/* Field Highlights */}
            <div className="space-y-2">
              <h4 className="font-bold text-stone-900 text-xs tracking-wider uppercase text-stone-500">
                Key Accomplishments
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-stone-700">
                {selectedState.highlights.map((hl, hIdx) => (
                  <li key={hIdx} className="flex items-center gap-2 bg-stone-50 p-2.5 rounded-lg border border-stone-100">
                    <CheckCircle className="w-4 h-4 text-[#1B5E20] flex-shrink-0" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Featured Individual Story Box */}
            <div className="bg-amber-50/80 p-5 rounded-2xl border border-amber-200 flex flex-col sm:flex-row gap-4 items-center">
              <img
                src={selectedState.featuredStory.image}
                alt={selectedState.featuredStory.person}
                className="w-20 h-20 rounded-xl object-cover shadow-md flex-shrink-0"
              />
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-[#B8860B] tracking-wider uppercase">
                  Featured Grassroots Story
                </span>
                <h5 className="font-bold text-stone-900 text-sm">
                  {selectedState.featuredStory.title} ({selectedState.featuredStory.person})
                </h5>
                <p className="text-stone-700 italic text-xs leading-relaxed">
                  "{selectedState.featuredStory.quote}"
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
