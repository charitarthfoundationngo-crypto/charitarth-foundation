import React, { useState } from 'react';
import { Building2, Handshake, ShieldCheck, CheckCircle2, ArrowRight, Mail, Phone, Send, X } from 'lucide-react';

export const PartnerSection: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const PARTNERS_LIST = [
    { name: 'DAY-NRLM Govt of India', tag: 'Rural Livelihoods' },
    { name: 'National Skill Dev Corp (NSDC)', tag: 'Vocational Training' },
    { name: 'IIT Delhi Alumni Network', tag: 'Tech & Digital Labs' },
    { name: 'ONDC E-Commerce Portal', tag: 'SHG Market Access' },
    { name: 'Tata Trusts Partner Network', tag: 'Clean Energy & Water' },
    { name: 'State Rural Livelihood Missions', tag: 'State Outreach' }
  ];

  return (
    <section id="partners" className="py-24 bg-white text-stone-900 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0D47A1]/10 text-[#0D47A1] text-xs font-bold tracking-widest uppercase">
            <Handshake className="w-3.5 h-3.5" />
            <span>Institutional Collaboration</span>
          </div>

          <h2 className="font-serif-title text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight leading-tight">
            Partner With Us for Scalable Grassroots Impact
          </h2>

          <p className="text-stone-600 text-base sm:text-lg">
            We collaborate with Corporates, Foundations, Universities, and Government Agencies to implement high-yield CSR programs under Companies Act 2013.
          </p>
        </div>

        {/* Partner Badges Ticker */}
        <div className="mt-12 bg-[#FAF9F6] p-8 rounded-[32px] border border-black/5 space-y-6 shadow-xs">
          <div className="text-center text-[10px] font-bold text-stone-400 uppercase tracking-widest">
            Key Institutional & CSR Collaborators
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {PARTNERS_LIST.map((p, idx) => (
              <div
                key={idx}
                className="bg-white px-5 py-3.5 rounded-2xl border border-black/5 shadow-xs flex items-center gap-3"
              >
                <div className="w-2 h-2 rounded-full bg-[#1B5E20]" />
                <div>
                  <div className="font-bold text-stone-900 text-xs">{p.name}</div>
                  <div className="text-[10px] text-stone-500 font-medium">{p.tag}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Contact Strip */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <a href="mailto:charitarthfoundation.ngo@gmail.com" className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center gap-3 hover:shadow-md transition-all group">
            <Mail className="w-5 h-5 text-[#1B5E20] group-hover:scale-110 transition-transform" />
            <div>
              <div className="text-[10px] font-bold text-stone-500 uppercase">Official Email</div>
              <div className="text-xs font-bold text-stone-900 group-hover:text-[#1B5E20]">charitarthfoundation.ngo@gmail.com</div>
            </div>
          </a>

          <a href="tel:+919958915893" className="p-4 rounded-2xl bg-blue-50 border border-blue-100 flex items-center gap-3 hover:shadow-md transition-all group">
            <Phone className="w-5 h-5 text-[#0D47A1] group-hover:scale-110 transition-transform" />
            <div>
              <div className="text-[10px] font-bold text-stone-500 uppercase">Click to Call</div>
              <div className="text-xs font-bold text-stone-900 group-hover:text-[#0D47A1]">+91 9958915893</div>
            </div>
          </a>

          <a href="https://instagram.com/charitarthfoundation" target="_blank" rel="noopener noreferrer" className="p-4 rounded-2xl bg-pink-50 border border-pink-100 flex items-center gap-3 hover:shadow-md transition-all group">
            <Send className="w-5 h-5 text-pink-600 group-hover:scale-110 transition-transform" />
            <div>
              <div className="text-[10px] font-bold text-stone-500 uppercase">Instagram Community</div>
              <div className="text-xs font-bold text-stone-900 group-hover:text-pink-700">@charitarthfoundation</div>
            </div>
          </a>
        </div>

        {/* Partnership Models */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-[32px] bg-stone-900 text-white space-y-4 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest">For Corporates</span>
              <h3 className="font-serif-title font-bold text-2xl">CSR Project Adoption</h3>
              <p className="text-stone-300 text-xs leading-relaxed">
                Adopt entire Panchayats or Skill Hubs. MCA CSR-1 compliant, with customized quarterly impact reporting and employee volunteer engagement.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 text-[10px] text-stone-400 font-medium">MCA CSR-1 Registered</div>
          </div>

          <div className="p-8 rounded-[32px] bg-[#1B5E20] text-white space-y-4 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-[10px] font-bold text-emerald-200 uppercase tracking-widest">For Institutions</span>
              <h3 className="font-serif-title font-bold text-2xl">University Research</h3>
              <p className="text-emerald-50 text-xs leading-relaxed">
                Partner on student internships, field research papers, remote coding bootcamps, and rural immersion trips for student leaders.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 text-[10px] text-emerald-200 font-medium">Academic Partnerships</div>
          </div>

          <div className="p-8 rounded-[32px] bg-[#0D47A1] text-white space-y-4 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-[10px] font-bold text-sky-200 uppercase tracking-widest">For Foundations</span>
              <h3 className="font-serif-title font-bold text-2xl">Strategic Grant Funding</h3>
              <p className="text-blue-50 text-xs leading-relaxed">
                Co-fund long-term initiatives in solar pump maintenance, digital libraries, and women weaver cooperatives across Eastern India.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 text-[10px] text-sky-200 font-medium">Co-Funding Frameworks</div>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-10 text-center">
          <button
            onClick={() => setShowModal(true)}
            className="px-8 py-4 rounded-full bg-[#0D47A1] hover:bg-[#0a3880] text-white font-bold text-xs uppercase tracking-wider shadow-lg flex items-center gap-2 mx-auto cursor-pointer transition-colors"
          >
            <Building2 className="w-4 h-4" />
            <span>Initiate Partnership Inquiry</span>
          </button>
        </div>

      </div>

      {/* Partner Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-md animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative space-y-6 animate-in zoom-in-95">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-6 right-6 p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-blue-100 text-[#0D47A1] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-serif-title font-bold text-2xl text-stone-900">Partnership Request Received!</h3>
                <p className="text-stone-600 text-sm">
                  Our Director of Institutional Partnerships will reach out to schedule an initial discussion within 24 hours.
                </p>
              </div>
            ) : (
              <>
                <div>
                  <span className="text-xs font-bold text-[#0D47A1] tracking-widest uppercase">CSR & Institutional Partnership</span>
                  <h3 className="font-serif-title text-2xl font-bold text-stone-900 mt-1">Connect With Our Lead Team</h3>
                </div>

                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); setTimeout(() => { setSubmitted(false); setShowModal(false); }, 2000); }} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">Organization Name *</label>
                      <input type="text" required placeholder="e.g. Acme Corp / University" className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D47A1]" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">Contact Person Name *</label>
                      <input type="text" required placeholder="e.g. Rajesh Mehta" className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D47A1]" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">Official Email *</label>
                      <input type="email" required placeholder="rajesh@acme.com" className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D47A1]" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">Phone Number *</label>
                      <input type="tel" required placeholder="+91 98765 43210" className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D47A1]" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">Partnership Area Interest</label>
                    <select className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D47A1]">
                      <option>CSR Grant Adoption (MCA CSR-1)</option>
                      <option>Digital Smart Classrooms Sponsorship</option>
                      <option>Green Livelihoods & Solar Vocational Hubs</option>
                      <option>Women SHG & E-Commerce Linkage</option>
                      <option>Research & University Collaboration</option>
                    </select>
                  </div>

                  <button type="submit" className="w-full py-3.5 rounded-xl bg-[#0D47A1] hover:bg-[#0a3880] text-white font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer shadow-lg transition-colors">
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry</span>
                  </button>
                </form>
              </>
            )}

          </div>
        </div>
      )}
    </section>
  );
};
