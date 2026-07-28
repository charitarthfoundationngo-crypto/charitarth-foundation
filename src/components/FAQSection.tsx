import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Heart, ShieldCheck, Users, BookOpen } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'donations' | 'volunteering' | 'programs' | 'legal';
}

const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Is my donation to Charitarth Foundation tax-deductible?',
    answer: 'Yes. Charitarth Foundation is registered under Section 80G and 12A of the Income Tax Act 1961. All donations are eligible for 50% tax deduction. You will receive an instant digital 80G tax receipt along with Form 10BE issued from the Income Tax e-filing portal.',
    category: 'donations'
  },
  {
    id: 'faq-2',
    question: 'How is my donation used?',
    answer: 'Every rupee donated is allocated transparently across our three pillars: Education & Literacy (smart classrooms, scholarships), Employment & Vocations (solar technician certifications, skill bootcamps), and Entrepreneurship (women SHG micro-grants, financial literacy). Detailed utilization reports are published quarterly and audited by a Chartered Accountant.',
    category: 'donations'
  },
  {
    id: 'faq-3',
    question: 'Can I donate from outside India (foreign donation)?',
    answer: 'Yes. Charitarth Foundation accepts foreign contributions under FCRA (Foreign Contribution Regulation Act) guidelines. International donors can contribute in USD, EUR, or GBP. All foreign donations are reported to the Ministry of Home Affairs as required by law.',
    category: 'donations'
  },
  {
    id: 'faq-4',
    question: 'Can I sponsor a specific child or student?',
    answer: 'Absolutely. Our 1-to-1 Student Sponsorship program lets you directly sponsor a rural student for as little as ₹1,000/month ($15/month). You will receive regular progress reports, photos, and academic updates from your sponsored student.',
    category: 'donations'
  },
  {
    id: 'faq-5',
    question: 'Can corporates partner with Charitarth Foundation for CSR?',
    answer: 'Yes. We are registered under MCA CSR-1 (Registration No: CSR00078921) and are eligible to receive CSR funds under Schedule VII of the Companies Act, 2013. We provide end-to-end CSR project management, impact measurement, and audit-ready compliance documentation.',
    category: 'donations'
  },
  {
    id: 'faq-6',
    question: 'How can I volunteer with Charitarth Foundation?',
    answer: 'We offer multiple volunteer tracks: Weekend Teaching Fellows (4–8 hrs/week), Digital Mentors (remote), Field Coordinators (on-ground), and Corporate Skill Volunteers. Apply through the Volunteer section on our website or contact us via WhatsApp at +91 9958915893.',
    category: 'volunteering'
  },
  {
    id: 'faq-7',
    question: 'Do you offer internships for college students?',
    answer: 'Yes. We run a structured Charitarth Fellowship Program for undergraduate and postgraduate students in social work, education, public policy, and rural development. Internships range from 2 to 6 months with field immersion opportunities.',
    category: 'volunteering'
  },
  {
    id: 'faq-8',
    question: 'Can I visit your projects or field centers?',
    answer: 'We warmly welcome field visits. You can schedule a guided visit to our digital smart labs, skill development centers, and village community meets in Uttar Pradesh, Bihar, Rajasthan, or Madhya Pradesh. Contact us at charitarthfoundation.ngo@gmail.com to arrange a visit.',
    category: 'volunteering'
  },
  {
    id: 'faq-9',
    question: 'What is the Charitarth Employment Quality Index (CEQI)?',
    answer: 'CEQI is our proprietary 5-dimension framework that measures rural livelihood quality beyond nominal wages. It evaluates Wage Stability, Social Security Coverage, Skill Utilization, Working Conditions, and Upward Mobility to ensure our vocational graduates achieve dignified, sustainable employment.',
    category: 'programs'
  },
  {
    id: 'faq-10',
    question: 'How many villages does Charitarth Foundation operate in?',
    answer: 'We currently operate across 200+ villages in 4 states: Uttar Pradesh (72 villages), Bihar (58 villages), Rajasthan (42 villages), and Madhya Pradesh (48 villages). Our programs have directly impacted over 45,000 rural residents.',
    category: 'programs'
  },
  {
    id: 'faq-11',
    question: 'Is Charitarth Foundation registered with NITI Aayog?',
    answer: "Yes. We are registered on the NITI Aayog Darpan portal (Registration No: DL/2025/08912), which is the Government of India's official platform for verified NGOs and voluntary organizations.",
    category: 'legal'
  },
  {
    id: 'faq-12',
    question: 'Where can I find your audited financial reports?',
    answer: 'Our complete CA-audited financial statements, annual reports, 80G certificates, and CSR-1 registration documents are available for download in the Governance & Transparency section of this website. We believe in 100% financial transparency.',
    category: 'legal'
  }
];

const CATEGORY_FILTERS = [
  { key: 'all', label: 'All Questions', icon: HelpCircle },
  { key: 'donations', label: 'Donations & Tax', icon: Heart },
  { key: 'volunteering', label: 'Volunteering', icon: Users },
  { key: 'programs', label: 'Programs', icon: BookOpen },
  { key: 'legal', label: 'Legal & Compliance', icon: ShieldCheck }
];

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = activeCategory === 'all'
    ? FAQ_DATA
    : FAQ_DATA.filter(f => f.category === activeCategory);

  return (
    <section id="faq" className="py-24 bg-[#FAF9F6] text-stone-900 border-t border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1B5E20]/10 text-[#1B5E20] text-xs font-bold tracking-widest uppercase">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="font-serif-title text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight leading-tight">
            Everything You Need to Know
          </h2>

          <p className="text-stone-600 text-base sm:text-lg">
            Answers to common questions about donations, tax benefits, volunteering, and our rural development programs.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATEGORY_FILTERS.map(cat => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeCategory === cat.key
                    ? 'bg-[#1B5E20] text-white shadow-md'
                    : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {filtered.map(faq => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-[#1B5E20]/20 shadow-lg'
                    : 'border-stone-200 shadow-sm hover:shadow-md'
                }`}
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className={`font-bold text-sm sm:text-base transition-colors ${
                    isOpen ? 'text-[#1B5E20]' : 'text-stone-900'
                  }`}>
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-[#1B5E20]' : 'text-stone-400'
                  }`} />
                </button>

                <div className={`transition-all duration-300 ease-in-out ${
                  isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-5 text-stone-600 text-sm leading-relaxed border-t border-stone-100 pt-4">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-12 text-center bg-gradient-to-r from-[#1B5E20] to-[#2E7D32] rounded-3xl p-8 text-white">
          <h3 className="font-serif-title text-xl sm:text-2xl font-bold mb-2">
            Still have questions?
          </h3>
          <p className="text-emerald-100 text-sm mb-5">
            Reach out to us directly. We typically respond within 24 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="mailto:charitarthfoundation.ngo@gmail.com"
              className="px-5 py-2.5 rounded-full bg-white text-[#1B5E20] font-bold text-xs uppercase tracking-wider hover:bg-emerald-50 transition-colors shadow-md"
            >
              Email Us
            </a>
            <a
              href="https://wa.me/919958915893"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-white/20 text-white font-bold text-xs uppercase tracking-wider hover:bg-white/30 transition-colors border border-white/30"
            >
              WhatsApp Chat
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
