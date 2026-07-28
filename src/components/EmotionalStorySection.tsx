import React, { useState } from 'react';
import { Sparkles, Heart, ArrowRight, UserCheck, Home, Trees, Globe2 } from 'lucide-react';

interface EmotionalStorySectionProps {
  onOpenDonateModal: () => void;
}

export const EmotionalStorySection: React.FC<EmotionalStorySectionProps> = ({ onOpenDonateModal }) => {
  const [activeStep, setActiveStep] = useState(0);

  const RIPPLE_STEPS = [
    {
      id: 'step-1',
      stage: '01. The Individual Child',
      title: 'One Child. One Dream. One Opportunity.',
      icon: UserCheck,
      color: 'bg-emerald-600',
      description: 'It begins with 10-year-old Ananya in a quiet village in Hardoi. With a ₹500 learning kit and access to Charitarth’s digital smart classroom, she unlocks foundational literacy and STEM coding skills.',
      quote: '"I used to think computers were only in big cities. Now I am building my own science quiz!"',
      stat: '1 Child Educated',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 'step-2',
      stage: '02. The Rural Family',
      title: 'A Family Lifted Out of Generational Poverty',
      icon: Home,
      color: 'bg-blue-600',
      description: 'Ananya’s digital skills enable her elder brother to join Charitarth’s Green Livelihoods vocational hub, certifying him as a solar grid technician with a stable monthly salary of ₹18,500.',
      quote: '"For the first time in three generations, our family has a monthly bank salary and healthcare safety net."',
      stat: 'Family Income Increased 3x',
      image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 'step-3',
      stage: '03. The Gram Panchayat',
      title: 'A Self-Reliant Gram Panchayat Emerges',
      icon: Trees,
      color: 'bg-amber-600',
      description: 'Ananya’s mother joins the local Charitarth Prerna SHG collective, founding a solar-powered organic spice milling unit that employs 14 other village women.',
      quote: '"We no longer migrate for seasonal day labor. Our village produces and sells directly across India."',
      stat: '200+ Villages Transformed',
      image: 'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 'step-4',
      stage: '04. The Nation',
      title: 'Building a Stronger, Self-Reliant India',
      icon: Globe2,
      color: 'bg-emerald-800',
      description: 'When hundreds of rural hamlets thrive with educated children, skilled youth, and women entrepreneurs, we build an India where geography no longer determines human potential.',
      quote: '"Potential exists everywhere in rural India. When given opportunity, our villages lead national growth."',
      stat: 'Viksit Bharat Rural Vision',
      image: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=800&auto=format&fit=crop'
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#FAF9F6] text-stone-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1B5E20]/10 text-[#1B5E20] text-xs font-bold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Ripple Effect of Opportunity</span>
          </div>
          
          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight leading-tight">
            How Your Single Act of Kindness Transforms an Entire Nation
          </h2>

          <p className="text-stone-600 text-base sm:text-lg font-editorial text-lg sm:text-xl">
            Transformation is never an isolated event. When you support one child, you spark a generational multiplier effect that lifts families, strengthens villages, and builds a self-reliant India.
          </p>
        </div>

        {/* Step-by-Step Interactive Ripple Story */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Step Navigation Cards (Left) */}
          <div className="lg:col-span-5 space-y-4">
            {RIPPLE_STEPS.map((step, idx) => {
              const IconComp = step.icon;
              const isActive = activeStep === idx;
              return (
                <div
                  key={step.id}
                  onClick={() => setActiveStep(idx)}
                  className={`p-5 rounded-2xl cursor-pointer transition-all border ${
                    isActive
                      ? 'bg-white border-[#1B5E20] shadow-xl ring-2 ring-[#1B5E20]/20 transform translate-x-2'
                      : 'bg-stone-50 border-stone-200 hover:bg-white hover:border-stone-300'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl text-white ${step.color} shadow-md`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-bold text-stone-400 tracking-wider uppercase">{step.stage}</div>
                      <h3 className={`font-bold text-base sm:text-lg mt-0.5 ${isActive ? 'text-[#1B5E20]' : 'text-stone-800'}`}>
                        {step.title}
                      </h3>
                      <div className="mt-2 text-xs font-semibold px-2.5 py-1 rounded-md bg-stone-100 text-stone-700 inline-block">
                        {step.stat}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Expanded Step Display Canvas (Right) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-stone-200 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#D4AF37]/20 to-transparent rounded-bl-full pointer-events-none" />

              <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={RIPPLE_STEPS[activeStep].image}
                  alt={RIPPLE_STEPS[activeStep].title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs font-bold bg-[#D4AF37] text-stone-900 px-3 py-1 rounded-full">
                    {RIPPLE_STEPS[activeStep].stage}
                  </span>
                  <h4 className="text-xl font-bold font-serif-title mt-2">
                    {RIPPLE_STEPS[activeStep].title}
                  </h4>
                </div>
              </div>

              <p className="text-stone-700 text-base leading-relaxed">
                {RIPPLE_STEPS[activeStep].description}
              </p>

              <blockquote className="p-4 rounded-xl bg-amber-50/80 border-l-4 border-[#D4AF37] text-stone-800 italic text-sm">
                {RIPPLE_STEPS[activeStep].quote}
              </blockquote>

              <div className="pt-2 flex items-center justify-between border-t border-stone-100">
                <div className="flex items-center space-x-2">
                  {RIPPLE_STEPS.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveStep(i)}
                      className={`h-2 rounded-full transition-all ${
                        i === activeStep ? 'w-8 bg-[#1B5E20]' : 'w-2 bg-stone-300'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={onOpenDonateModal}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold text-white bg-[#1B5E20] hover:bg-[#124216] transition-colors cursor-pointer shadow-md"
                >
                  <Heart className="w-3.5 h-3.5 fill-white" />
                  <span>Start a Ripple Today</span>
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
