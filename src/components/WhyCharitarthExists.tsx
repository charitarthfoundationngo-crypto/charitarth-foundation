import React from 'react';
import { Target, CheckCircle2, TrendingUp, AlertTriangle, ArrowRight, ShieldCheck, Heart } from 'lucide-react';

interface WhyCharitarthExistsProps {
  onOpenDonateModal: () => void;
  onOpenVolunteerModal: () => void;
}

export const WhyCharitarthExists: React.FC<WhyCharitarthExistsProps> = ({
  onOpenDonateModal,
  onOpenVolunteerModal
}) => {
  const COMPARISONS = [
    {
      problemTitle: 'The Rural Reality',
      icon: AlertTriangle,
      problemBg: 'bg-amber-50 border-amber-200 text-amber-900',
      points: [
        'Over 65% of India lives in rural districts with limited access to quality digital education or STEM labs.',
        '41% of rural agricultural workers suffer from disguised unemployment and seasonal migration.',
        'Rural women micro-owners lack access to e-commerce market links, digital UPI tools, and seed capital.',
        'Talented first-generation learners drop out due to financial constraints and lack of career guidance.'
      ]
    },
    {
      solutionTitle: 'The Charitarth Transformation',
      icon: CheckCircle2,
      solutionBg: 'bg-emerald-50 border-emerald-200 text-emerald-950',
      points: [
        'Solar-powered smart classrooms, tablet learning labs, and scholarships in 200+ remote hamlets.',
        'Certified vocational skill hubs in solar tech, retail, and electricals with guaranteed placements.',
        'Charitarth Women Entrepreneurship Incubator connecting SHGs directly with e-commerce and DAY-NRLM.',
        'Mentorship, Entrance Exam Coaching, and 100% Higher Education Fellowships for bright youth.'
      ]
    }
  ];

  return (
    <section className="py-24 bg-white text-stone-900 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0D47A1]/10 text-[#0D47A1] text-xs font-bold tracking-widest uppercase">
            <Target className="w-3.5 h-3.5" />
            <span>Why Charitarth Foundation Exists</span>
          </div>

          <h2 className="font-serif-title text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight leading-tight">
            “Potential Exists Everywhere. Opportunity Doesn’t.”
          </h2>

          <p className="text-stone-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            In thousands of villages across India, brilliant minds, energetic youth, and creative women are eager to learn, earn, and innovate. All they lack is an ecosystem of opportunity. Charitarth Foundation builds that bridge.
          </p>
        </div>

        {/* Problem vs Solution Comparison Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {COMPARISONS.map((col, idx) => {
            const IconComp = col.icon;
            const bentoBgs = ['bg-[#FAF9F6]', 'bg-[#EAF6FF]'];
            return (
              <div key={idx} className={`p-8 sm:p-10 rounded-[32px] border border-black/5 shadow-sm space-y-6 ${bentoBgs[idx]}`}>
                <div className="flex items-center gap-3 pb-4 border-b border-black/5">
                  <div className="p-3 rounded-2xl bg-white shadow-sm">
                    <IconComp className="w-6 h-6 text-[#1B5E20]" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-500">
                      0{idx + 1} • {idx === 0 ? 'Challenge' : 'Action Plan'}
                    </span>
                    <h3 className="font-serif-title font-bold text-2xl text-stone-900">
                      {col.solutionTitle || col.problemTitle}
                    </h3>
                  </div>
                </div>

                <ul className="space-y-4 text-xs sm:text-sm text-stone-800 leading-relaxed">
                  {col.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3 bg-white/70 p-3.5 rounded-2xl border border-black/5">
                      <span className="mt-1 w-2 h-2 rounded-full bg-[#1B5E20] flex-shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Core Pillars Banner */}
        <div className="mt-16 bg-[#1B5E20] rounded-[32px] p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase bg-[#D4AF37] text-stone-900 px-3.5 py-1.5 rounded-full">
                Three Pillars • One Mission
              </span>
              <h3 className="font-serif-title text-2xl sm:text-4xl font-bold">
                Empowering Rural Communities to Become Truly Self-Reliant
              </h3>
              <p className="text-stone-200 text-xs sm:text-sm max-w-xl leading-relaxed">
                We do not distribute temporary charity. We build sustainable institutional capacity — schools, skill centers, and women cooperatives — owned and operated by the community.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
              <button
                onClick={onOpenDonateModal}
                className="w-full py-4 px-6 rounded-full bg-[#D4AF37] hover:bg-white text-stone-900 font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer transform hover:-translate-y-0.5"
              >
                <Heart className="w-4 h-4 fill-stone-900" />
                <span>Support Our Mission</span>
              </button>

              <button
                onClick={onOpenVolunteerModal}
                className="w-full py-4 px-6 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>Join As Volunteer</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
