import React, { useState } from 'react';
import { Heart, Mail, Phone, MapPin, Send, ArrowUp, Sparkles, CheckCircle2, Instagram } from 'lucide-react';
import { CONTACT_INFO, LOGO_URL } from '../data/mockData';
import { subscribeNewsletter } from '../lib/supabase';

interface FooterProps {
  onOpenDonateModal: () => void;
  onOpenVolunteerModal: () => void;
  onOpenAiAssistant: () => void;
  onOpenPrivacyPolicy: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenDonateModal,
  onOpenVolunteerModal,
  onOpenAiAssistant,
  onOpenPrivacyPolicy
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    await subscribeNewsletter(email);
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 4000);
    setEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 text-stone-300 pt-20 pb-12 border-t border-stone-800 relative overflow-hidden">
      {/* Background Accent Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#1B5E20]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#0D47A1]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 z-10">
        
        {/* Newsletter & Direct Contact Card Banner */}
        <div className="bg-gradient-to-r from-[#1B5E20] via-[#2E7D32] to-[#1B5E20] rounded-[32px] p-8 sm:p-10 text-white shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 border border-white/10">
          <div className="space-y-2 max-w-xl">
            <span className="text-[10px] font-bold uppercase tracking-widest bg-[#D4AF37] text-stone-900 px-3.5 py-1 rounded-full shadow-xs">
              Stay Connected With Real Impact
            </span>
            <h3 className="font-serif-title text-2xl sm:text-3xl font-bold">
              Subscribe to Charitarth Grassroots Insights
            </h3>
            <p className="text-stone-200 text-xs sm:text-sm">
              Receive authentic field updates, research publications, and community stories directly from our 200+ rural adoption villages.
            </p>
          </div>

          <div className="w-full lg:w-auto">
            {subscribed ? (
              <div className="flex items-center gap-2 bg-white/20 px-6 py-3 rounded-full text-xs font-bold text-emerald-200">
                <CheckCircle2 className="w-4 h-4" />
                <span>Thank you for subscribing to our newsletter!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="px-5 py-3 rounded-full bg-black/40 border border-white/20 text-white text-xs placeholder:text-stone-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] w-full sm:w-72"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-full bg-[#D4AF37] hover:bg-[#B8860B] text-stone-900 font-bold text-xs uppercase tracking-wider cursor-pointer transition-colors shadow-lg flex items-center justify-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Subscribe</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* 4-Column Footer Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 text-xs">
          
          {/* Column 1: Organization Identity & Official Logo */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white p-1 flex items-center justify-center shadow-md border border-amber-300">
                <img src={LOGO_URL} alt="Charitarth Foundation Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="font-serif-title font-bold text-xl text-white tracking-tight block leading-tight">Charitarth Foundation</span>
                <p className="text-[10px] text-[#D4AF37] font-semibold uppercase tracking-wider">
                  Education • Employment • Entrepreneurship
                </p>
              </div>
            </div>

            <p className="text-stone-400 leading-relaxed">
              Charitarth Foundation is dedicated to empowering rural India through sustainable education, formal employment skills (CEQI), and micro-entrepreneurship across 200+ villages.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenDonateModal}
                className="px-4 py-2 rounded-full bg-[#1B5E20] text-white font-bold text-xs uppercase flex items-center gap-1.5 hover:bg-[#124216] cursor-pointer transition-colors shadow-md"
              >
                <Heart className="w-3.5 h-3.5 fill-white" />
                <span>Donate Now</span>
              </button>

              <button
                onClick={onOpenAiAssistant}
                className="px-4 py-2 rounded-full bg-white/10 text-[#D4AF37] font-semibold text-xs flex items-center gap-1 hover:bg-white/20 cursor-pointer transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>AI Assistant</span>
              </button>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider border-b border-stone-800 pb-2">
              Navigation
            </h4>
            <ul className="space-y-2 text-stone-400">
              <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors cursor-pointer">Our Story</button></li>
              <li><button onClick={() => scrollToSection('pillars')} className="hover:text-[#D4AF37] transition-colors cursor-pointer">Three Pillars</button></li>
              <li><button onClick={() => scrollToSection('knowledge-centre')} className="hover:text-[#D4AF37] transition-colors cursor-pointer font-semibold text-emerald-400">Knowledge Centre</button></li>
              <li><button onClick={() => scrollToSection('editorial-blog')} className="hover:text-white transition-colors cursor-pointer font-semibold text-blue-400">Editorial Blog</button></li>
              <li><button onClick={() => scrollToSection('gallery')} className="hover:text-white transition-colors cursor-pointer">Photo Gallery</button></li>
              <li><button onClick={() => scrollToSection('governance')} className="hover:text-white transition-colors cursor-pointer">Governance & 80G</button></li>
            </ul>
          </div>

          {/* Column 3: Mandatory Contact Information Cards */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider border-b border-stone-800 pb-2">
              Official Contact
            </h4>
            <div className="space-y-3 text-stone-300">
              <a 
                href={CONTACT_INFO.emailLink} 
                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-stone-900 border border-stone-800 hover:border-[#1B5E20] transition-all group"
              >
                <Mail className="w-4 h-4 text-[#D4AF37] flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div className="truncate">
                  <div className="text-[10px] text-stone-400 font-semibold uppercase">Email Us</div>
                  <div className="font-medium text-white truncate hover:underline">{CONTACT_INFO.email}</div>
                </div>
              </a>

              <a 
                href={CONTACT_INFO.phoneLink} 
                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-stone-900 border border-stone-800 hover:border-[#1B5E20] transition-all group"
              >
                <Phone className="w-4 h-4 text-[#D4AF37] flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="text-[10px] text-stone-400 font-semibold uppercase">Click to Call</div>
                  <div className="font-medium text-white hover:underline">{CONTACT_INFO.phone}</div>
                </div>
              </a>

              <a 
                href={CONTACT_INFO.instagramUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-stone-900 border border-stone-800 hover:border-pink-500 transition-all group"
              >
                <Instagram className="w-4 h-4 text-pink-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="text-[10px] text-stone-400 font-semibold uppercase">Instagram</div>
                  <div className="font-medium text-pink-400 hover:underline">{CONTACT_INFO.instagram}</div>
                </div>
              </a>
            </div>
          </div>

          {/* Column 4: Compliance & Registered Address */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider border-b border-stone-800 pb-2">
              Compliance & Address
            </h4>
            <div className="space-y-2 text-stone-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                <span>{CONTACT_INFO.address}</span>
              </div>

              <div className="pt-2 text-[10px] text-stone-500 font-mono space-y-1">
                <div>• Societies Reg: CF-DEL/2025/001</div>
                <div>• 80G Tax Exemption: AAATC0987DF20251</div>
                <div>• MCA CSR-1 Reg: CSR00078921</div>
                <div>• 12A Certified Charitable Trust</div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between text-stone-500 text-[11px] gap-4">
          <div>
            © 2025 Charitarth Foundation. All Rights Reserved. Empowering Rural India.
          </div>

          <div className="flex items-center space-x-4 sm:space-x-6 flex-wrap justify-center">
            <button
              onClick={onOpenPrivacyPolicy}
              className="hover:text-white transition-colors cursor-pointer underline-offset-2 hover:underline"
            >
              Privacy Policy
            </button>
            <button
              onClick={onOpenPrivacyPolicy}
              className="hover:text-white transition-colors cursor-pointer underline-offset-2 hover:underline"
            >
              Terms of Use
            </button>
            <span className="text-stone-600">80G & 12A Certified</span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-stone-900 hover:bg-stone-800 text-stone-300 transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
