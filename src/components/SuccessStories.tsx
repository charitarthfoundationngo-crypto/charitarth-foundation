import React, { useState } from 'react';
import { SUCCESS_STORIES } from '../data/mockData';
import { Story } from '../types';
import { Quote, Sparkles, ArrowRight, Play, CheckCircle } from 'lucide-react';

interface SuccessStoriesProps {
  onOpenDonateModal: () => void;
  onOpenVideoModal: () => void;
}

export const SuccessStories: React.FC<SuccessStoriesProps> = ({ onOpenDonateModal, onOpenVideoModal }) => {
  const [filter, setFilter] = useState<'All' | 'Education' | 'Employment' | 'Entrepreneurship'>('All');

  const filteredStories = filter === 'All'
    ? SUCCESS_STORIES
    : SUCCESS_STORIES.filter(s => s.pillar === filter);

  return (
    <section id="stories" className="py-24 bg-white text-stone-900 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/20 text-[#B8860B] text-xs font-bold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Human Stories of Transformation</span>
          </div>

          <h2 className="font-serif-title text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight leading-tight">
            Faces of Courage & Determination
          </h2>

          <p className="text-stone-600 text-base sm:text-lg">
            Read how a single opportunity transforms first-generation learners into engineers, uneducated youth into solar technicians, and rural women into prosperous micro-owners.
          </p>

          {/* Filter Pills */}
          <div className="pt-4 flex flex-wrap justify-center gap-2">
            {['All', 'Education', 'Employment', 'Entrepreneurship'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat as any)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  filter === cat
                    ? 'bg-[#1B5E20] text-white shadow-md'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                {cat} Stories
              </button>
            ))}
          </div>
        </div>

        {/* Stories Magazine Cards Grid */}
        <div className="mt-16 space-y-12">
          {filteredStories.map((story, idx) => (
            <div
              key={story.id}
              className="bg-[#FAF9F6] rounded-[32px] p-8 sm:p-10 border border-black/5 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              
              {/* Photo Cards - Before vs After */}
              <div className="lg:col-span-5 space-y-4">
                <div className="relative rounded-[24px] overflow-hidden shadow-md h-72">
                  <img
                    src={story.imageAfter}
                    alt={story.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#1B5E20] text-white text-[10px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-md">
                    {story.impactTag}
                  </div>

                  <button
                    onClick={onOpenVideoModal}
                    className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md text-stone-900 p-3 rounded-full hover:bg-[#D4AF37] transition-colors shadow-lg group cursor-pointer"
                  >
                    <Play className="w-4 h-4 fill-stone-900" />
                  </button>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-black/5 flex items-center justify-between text-xs text-stone-600">
                  <span className="font-bold text-stone-900">📍 {story.village}, {story.state}</span>
                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-[#1B5E20] font-bold text-[10px] uppercase tracking-wider">{story.pillar} Pillar</span>
                </div>
              </div>

              {/* Editorial Text Story */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="font-serif-title font-bold text-2xl sm:text-3xl text-stone-900">
                    {story.name}, <span className="text-stone-500 font-normal text-xl">{story.age} yrs</span>
                  </h3>
                  <p className="text-[#1B5E20] font-bold text-xs uppercase tracking-wider mt-1">
                    {story.title}
                  </p>
                </div>

                <blockquote className="p-5 rounded-2xl bg-[#F7F5F2] border-l-4 border-[#D4AF37] text-stone-800 italic text-xs sm:text-sm leading-relaxed">
                  "{story.quote}"
                </blockquote>

                {/* Before / Journey / After Progression */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-4 bg-white rounded-2xl border border-black/5 space-y-1">
                    <div className="font-bold text-rose-800 uppercase tracking-widest text-[9px]">The Before</div>
                    <p className="text-stone-600 text-[11px] leading-relaxed">{story.before}</p>
                  </div>

                  <div className="p-4 bg-white rounded-2xl border border-black/5 space-y-1">
                    <div className="font-bold text-[#0D47A1] uppercase tracking-widest text-[9px]">The Journey</div>
                    <p className="text-stone-600 text-[11px] leading-relaxed">{story.journey}</p>
                  </div>

                  <div className="p-4 bg-white rounded-2xl border border-black/5 space-y-1">
                    <div className="font-bold text-[#1B5E20] uppercase tracking-widest text-[9px]">The Today Outcome</div>
                    <p className="text-stone-600 text-[11px] leading-relaxed">{story.after}</p>
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-4">
                  <button
                    onClick={onOpenDonateModal}
                    className="px-6 py-3 rounded-full bg-[#1B5E20] hover:bg-[#0D47A1] text-white text-[10px] font-bold uppercase tracking-widest shadow-md flex items-center gap-2 cursor-pointer transition-colors"
                  >
                    <span>Sponsor a Student Like {story.name.split(' ')[0]}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
