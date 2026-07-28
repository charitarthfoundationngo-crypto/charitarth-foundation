import React from 'react';
import { GOVERNANCE_DOCS, GOVERNANCE_MEMBERS } from '../data/mockData';
import { ShieldCheck, Download, FileText, Award, Building, Lock } from 'lucide-react';

export const GovernanceSection: React.FC = () => {
  return (
    <section id="governance" className="py-24 bg-[#FAF9F6] text-stone-900 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1B5E20]/10 text-[#1B5E20] text-xs font-bold tracking-widest uppercase">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Uncompromising Transparency</span>
          </div>

          <h2 className="font-serif-title text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight leading-tight">
            Governance & Statutory Compliance
          </h2>

          <p className="text-stone-600 text-base sm:text-lg">
            We hold ourselves to the highest standards of financial accountability, statutory compliance, and ethical governance. Download our audited reports below.
          </p>
        </div>

        {/* Governance Compliance Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GOVERNANCE_DOCS.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-[32px] p-8 border border-black/5 shadow-xs hover:shadow-xl transition-all space-y-4 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-2xl bg-[#1B5E20]/10 text-[#1B5E20] group-hover:bg-[#1B5E20] group-hover:text-white transition-colors">
                    <FileText className="w-6 h-6" />
                  </div>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-stone-500 bg-[#FAF9F6] border border-black/5 px-3 py-1 rounded-full">
                    {doc.category}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif-title font-bold text-lg text-stone-900">
                    {doc.title}
                  </h3>
                  <div className="text-[10px] font-mono text-stone-400 mt-1">
                    Doc ID: {doc.docNumber}
                  </div>
                </div>

                <p className="text-stone-600 text-xs leading-relaxed">
                  {doc.description}
                </p>
              </div>

              <div className="pt-4 border-t border-black/5 flex items-center justify-between">
                <span className="text-[10px] text-stone-400 font-medium">Size: {doc.fileSize}</span>
                <button
                  onClick={() => alert(`Downloading official document: ${doc.title} (${doc.docNumber})`)}
                  className="px-4 py-2 rounded-full bg-stone-900 hover:bg-[#1B5E20] text-white text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>PDF Preview</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Board & Governance Council Profile Cards */}
        <div className="mt-20 space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="font-serif-title font-bold text-2xl sm:text-3xl text-stone-900">
              Board of Trustees & Advisory Council
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm mt-1">
              Guided by distinguished civil servants, rural development scholars, and senior social sector leaders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {GOVERNANCE_MEMBERS.map((m, idx) => (
              <div key={idx} className="bg-white rounded-[32px] p-8 border border-black/5 shadow-xs text-center space-y-4">
                <img
                  src={m.image}
                  alt={m.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto ring-4 ring-[#D4AF37]/30 shadow-md"
                />
                <div>
                  <h4 className="font-serif-title font-bold text-lg text-stone-900">{m.name}</h4>
                  <div className="text-[10px] font-bold text-[#1B5E20] uppercase tracking-widest mt-0.5">{m.role}</div>
                </div>
                <p className="text-stone-600 text-xs leading-relaxed">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
