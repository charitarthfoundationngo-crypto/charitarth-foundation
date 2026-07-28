import React, { useState } from 'react';
import { Heart, GraduationCap, MapPin, Sparkles, CheckCircle2, User, BookOpen } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';

interface StudentSponsorshipSectionProps {
  lang: Language;
  onOpenDonateModal: () => void;
}

export interface StudentProfile {
  id: string;
  name: string;
  age: number;
  grade: string;
  village: string;
  state: string;
  dream: string;
  image: string;
  monthlyNeed: number;
  fundedPercent: number;
  story: string;
}

export const STUDENT_PROFILES: StudentProfile[] = [
  {
    id: 'sp-1',
    name: 'Sunita Vishwakarma',
    age: 14,
    grade: 'Class 9',
    village: 'Pipra, Hardoi',
    state: 'Uttar Pradesh',
    dream: 'Wants to become a Computer Engineer',
    image: '/Photos/IMG_3779.JPG',
    monthlyNeed: 1000,
    fundedPercent: 65,
    story: 'First-generation learner in her family. Excels in algebra and basic Python coding modules in our solar smart lab.'
  },
  {
    id: 'sp-2',
    name: 'Rohan Prakash',
    age: 15,
    grade: 'Class 10',
    village: 'Tekari, Gaya',
    state: 'Bihar',
    dream: 'Wants to become a Renewable Energy Technician',
    image: '/Photos/IMG_3782.JPG',
    monthlyNeed: 1000,
    fundedPercent: 40,
    story: 'Avid science enthusiast leading the village school STEM club. Requires scholarship support for Class 10 board prep.'
  },
  {
    id: 'sp-3',
    name: 'Pooja Maravi',
    age: 13,
    grade: 'Class 8',
    village: 'Sagar',
    state: 'Madhya Pradesh',
    dream: 'Wants to become a Doctor for Tribal Health',
    image: '/Photos/IMG_3780.JPG',
    monthlyNeed: 1000,
    fundedPercent: 80,
    story: 'Active reader at the Charitarth village library. Aspires to clear NEET medical entrance examination.'
  }
];

export const StudentSponsorshipSection: React.FC<StudentSponsorshipSectionProps> = ({ lang, onOpenDonateModal }) => {
  const [selectedStudent, setSelectedStudent] = useState<StudentProfile | null>(null);
  const t = TRANSLATIONS[lang].sponsorship;

  return (
    <section id="student-sponsorship" className="py-24 bg-nature-soft text-stone-900 border-t border-emerald-900/10 relative overflow-hidden">
      
      {/* Nature Foliage Background Glows */}
      <div className="absolute top-10 left-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1B5E20]/10 text-[#1B5E20] text-xs font-bold tracking-widest uppercase border border-[#1B5E20]/20">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>

          <h2 className="font-serif-title text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight leading-tight">
            {t.title}
          </h2>

          <p className="text-stone-600 text-base sm:text-lg">
            {t.subtitle}
          </p>
        </div>

        {/* Student Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STUDENT_PROFILES.map((student) => (
            <div
              key={student.id}
              className="bg-white rounded-[32px] overflow-hidden border border-emerald-900/10 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Photo & Badge */}
              <div className="relative h-64 overflow-hidden bg-stone-100">
                <img
                  src={student.image}
                  alt={student.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-[#1B5E20] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-xs">
                  {student.grade} • Age {student.age}
                </span>

                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <h3 className="font-serif-title text-xl font-bold">{student.name}</h3>
                  <p className="text-[11px] text-stone-200 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#D4AF37]" />
                    <span>{student.village}, {student.state}</span>
                  </p>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B8860B] bg-amber-50 px-3 py-1 rounded-full border border-amber-200/60">
                    <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>{student.dream}</span>
                  </div>
                  <p className="text-stone-600 text-xs leading-relaxed pt-1">
                    {student.story}
                  </p>
                </div>

                {/* Progress Bar */}
                <div className="space-y-1.5 pt-2 border-t border-stone-100">
                  <div className="flex justify-between text-[11px] font-bold">
                    <span className="text-stone-500">Sponsorship Goal</span>
                    <span className="text-[#1B5E20]">₹{student.monthlyNeed}/mo</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-stone-100 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#1B5E20] to-emerald-400 rounded-full"
                      style={{ width: `${student.fundedPercent}%` }}
                    />
                  </div>
                  <div className="text-[10px] text-stone-400 text-right">{student.fundedPercent}% Sponsored</div>
                </div>

                {/* CTA */}
                <button
                  onClick={onOpenDonateModal}
                  className="w-full py-3 rounded-full bg-[#1B5E20] hover:bg-[#0D47A1] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Heart className="w-3.5 h-3.5 fill-white" />
                  <span>Sponsor {student.name.split(' ')[0]} (₹1,000/mo)</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
