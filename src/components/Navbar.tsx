import React, { useState, useEffect } from 'react';
import { Heart, Menu, X, Sparkles, Phone, Mail, Instagram, Users, Search, Globe, ChevronDown, MessageCircle, ShieldCheck, Award, BookOpen, Briefcase, Lightbulb, FileText, CheckCircle2, MapPin, Layers, GraduationCap, BarChart3, HelpCircle } from 'lucide-react';
import { CONTACT_INFO, LOGO_URL } from '../data/mockData';
import { Language, TRANSLATIONS } from '../data/translations';

interface NavbarProps {
  onOpenDonateModal: () => void;
  onOpenVolunteerModal: () => void;
  onOpenAiAssistant: () => void;
  onOpenSearch: () => void;
  lang: Language;
  onToggleLang: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenDonateModal,
  onOpenVolunteerModal,
  onOpenAiAssistant,
  onOpenSearch,
  lang,
  onToggleLang,
  activeSection
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const t = TRANSLATIONS[lang].nav;
  const isHindi = lang === 'hi';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappUrl = `https://wa.me/919958915893?text=${encodeURIComponent(
    'Namaste! I would like to learn more about Charitarth Foundation programs.'
  )}`;

  return (
    <header className={`fixed left-0 right-0 z-50 max-w-7xl mx-auto px-3 sm:px-6 pointer-events-none transition-all duration-500 ${
      isScrolled ? 'top-2 sm:top-3' : 'top-3 sm:top-5'
    }`}>
      <div className={`pointer-events-auto glass-navbar rounded-[28px] sm:rounded-[36px] transition-all duration-500 ${
        isScrolled ? 'p-2 sm:p-2.5 shadow-2xl' : 'p-2.5 sm:p-3.5 shadow-2xl'
      }`}>
        
        {/* Tier 1: Merged Translucent Announcement & Trust Strip */}
        <div className={`hidden lg:flex items-center justify-between gap-4 px-4 py-1 mb-2 border-b border-stone-900/5 text-[10px] sm:text-[11px] font-semibold text-stone-600 transition-all duration-300 whitespace-nowrap ${
          isScrolled ? 'hidden' : 'flex'
        }`}>
          
          {/* Left Trust Tags */}
          <div className="flex items-center space-x-2.5 whitespace-nowrap shrink-0">
            <span className="inline-flex items-center gap-1.5 font-bold text-[#1B5E20] bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/60 shadow-2xs whitespace-nowrap">
              <ShieldCheck className="w-3.5 h-3.5 text-[#1B5E20] shrink-0" />
              <span className="whitespace-nowrap">80G & 12A CERTIFIED</span>
            </span>

            <span className="text-stone-300 font-normal px-0.5">•</span>

            <span className="text-stone-700 whitespace-nowrap">
              Tax Exempt (50%) | Reg: <strong className="text-stone-900 font-bold whitespace-nowrap">CF-DEL/2025/001</strong>
            </span>

            <span className="text-stone-300 font-normal px-0.5">•</span>

            <span className="text-stone-700 whitespace-nowrap">
              CSR-1 Reg: <strong className="text-stone-900 font-bold whitespace-nowrap">CSR00078921</strong>
            </span>
          </div>

          {/* Right Contact Strip & AI Assistant */}
          <div className="flex items-center space-x-3 whitespace-nowrap shrink-0">
            <a
              href={CONTACT_INFO.phoneLink}
              className="hover:text-[#1B5E20] transition-colors flex items-center gap-1.5 font-medium whitespace-nowrap px-1"
            >
              <Phone className="w-3.5 h-3.5 text-[#1B5E20] shrink-0" />
              <span className="whitespace-nowrap">{CONTACT_INFO.phone}</span>
            </a>

            <span className="text-stone-300 font-normal px-0.5">•</span>

            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="hover:text-[#1B5E20] transition-colors flex items-center gap-1.5 font-medium whitespace-nowrap px-1"
            >
              <Mail className="w-3.5 h-3.5 text-[#0D47A1] shrink-0" />
              <span className="lowercase whitespace-nowrap">{CONTACT_INFO.email}</span>
            </a>

            <span className="text-stone-300 font-normal px-0.5">•</span>

            <a
              href={CONTACT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1B5E20] transition-colors flex items-center gap-1.5 font-medium whitespace-nowrap px-1"
            >
              <Instagram className="w-3.5 h-3.5 text-pink-600 shrink-0" />
              <span className="whitespace-nowrap">{CONTACT_INFO.instagram}</span>
            </a>

            <span className="text-stone-300 font-normal px-0.5">•</span>

            <button
              onClick={onOpenAiAssistant}
              className="inline-flex items-center gap-1.5 text-[#B8860B] font-bold bg-amber-50 hover:bg-amber-100 px-3 py-0.5 rounded-full transition-colors cursor-pointer border border-amber-200/60 shadow-2xs whitespace-nowrap shrink-0"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
              <span className="whitespace-nowrap">AI Assistant</span>
            </button>
          </div>

        </div>

        {/* Tier 2: Main Navigation Bar */}
        <div className="flex items-center justify-between gap-2 sm:gap-4 px-2 sm:px-3">
          
          {/* Left Brand Identity: Logo + Wordmark + Tagline */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center space-x-3 text-left group cursor-pointer"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden p-0.5 bg-white shadow-md border border-emerald-900/10 group-hover:scale-105 transition-transform duration-300">
              <img
                src={LOGO_URL}
                alt="Charitarth Foundation Official Logo"
                className="w-full h-full object-contain"
              />
            </div>
            
            <div className="flex flex-col">
              <span className="font-serif-title font-bold text-stone-900 text-sm sm:text-base tracking-wider uppercase leading-tight group-hover:text-[#1B5E20] transition-colors">
                Charitarth
              </span>
              <span className="text-[9px] sm:text-[10px] font-bold text-[#1B5E20] tracking-widest uppercase">
                Foundation
              </span>
              <span className="hidden sm:block text-[9px] font-editorial italic text-stone-500 font-medium">
                {isHindi ? 'साथ मिलकर, हम संभावनाएं बनाते हैं।' : 'Together, We Create Possibilities.'}
              </span>
            </div>
          </button>

          {/* Center 6-Hub Rich Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 text-xs font-bold text-stone-700">
            
            {/* Hub 1: About */}
            <div className="relative" onMouseLeave={() => setActiveDropdown(null)}>
              <button
                onMouseEnter={() => setActiveDropdown('about')}
                onClick={() => scrollToSection('motto')}
                className="px-3 py-2 rounded-full hover:bg-white/80 hover:text-[#1B5E20] transition-all flex items-center gap-1 cursor-pointer"
              >
                <span>{isHindi ? 'हमारे बारे में' : 'About'}</span>
                <ChevronDown className="w-3.5 h-3.5 text-stone-400" />
              </button>

              {activeDropdown === 'about' && (
                <div className="absolute top-full left-0 mt-2 w-72 rounded-3xl glass-dropdown p-3 space-y-1 shadow-2xl animate-in fade-in slide-in-from-top-2">
                  <button
                    onClick={() => scrollToSection('motto')}
                    className="w-full text-left p-2.5 rounded-2xl hover:bg-emerald-50 transition-colors flex items-start gap-3 group"
                  >
                    <Sparkles className="w-4 h-4 text-[#1B5E20] mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="font-bold text-stone-900 text-xs">{t.motto}</div>
                      <div className="text-[10px] text-stone-500 font-normal">Our guiding philosophy for grassroots action</div>
                    </div>
                  </button>

                  <button
                    onClick={() => scrollToSection('logo-story')}
                    className="w-full text-left p-2.5 rounded-2xl hover:bg-amber-50 transition-colors flex items-start gap-3 group"
                  >
                    <Award className="w-4 h-4 text-[#B8860B] mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="font-bold text-stone-900 text-xs">{isHindi ? 'प्रतीक चिन्ह' : 'Logo Emblem Story'}</div>
                      <div className="text-[10px] text-stone-500 font-normal">The 8 sacred symbols of our identity</div>
                    </div>
                  </button>
                </div>
              )}
            </div>

            {/* Hub 2: Our Work (Three Pillars) */}
            <div className="relative" onMouseLeave={() => setActiveDropdown(null)}>
              <button
                onMouseEnter={() => setActiveDropdown('work')}
                onClick={() => scrollToSection('pillars')}
                className="px-3 py-2 rounded-full hover:bg-white/80 hover:text-[#1B5E20] transition-all flex items-center gap-1 cursor-pointer"
              >
                <span>{isHindi ? 'हमारा कार्य' : 'Our Work'}</span>
                <ChevronDown className="w-3.5 h-3.5 text-stone-400" />
              </button>

              {activeDropdown === 'work' && (
                <div className="absolute top-full left-0 mt-2 w-80 rounded-3xl glass-dropdown p-3 space-y-1 shadow-2xl animate-in fade-in slide-in-from-top-2">
                  <button
                    onClick={() => scrollToSection('pillars')}
                    className="w-full text-left p-2.5 rounded-2xl hover:bg-emerald-50 transition-colors flex items-start gap-3 group"
                  >
                    <BookOpen className="w-4 h-4 text-[#1B5E20] mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="font-bold text-stone-900 text-xs">Pillar 1: Education & STEM</div>
                      <div className="text-[10px] text-stone-500 font-normal">Solar smart labs and first-gen scholarships</div>
                    </div>
                  </button>

                  <button
                    onClick={() => scrollToSection('pillars')}
                    className="w-full text-left p-2.5 rounded-2xl hover:bg-blue-50 transition-colors flex items-start gap-3 group"
                  >
                    <Briefcase className="w-4 h-4 text-[#0D47A1] mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="font-bold text-stone-900 text-xs">Pillar 2: Employment & CEQI</div>
                      <div className="text-[10px] text-stone-500 font-normal">Certified job skills and practical vocational training</div>
                    </div>
                  </button>

                  <button
                    onClick={() => scrollToSection('pillars')}
                    className="w-full text-left p-2.5 rounded-2xl hover:bg-amber-50 transition-colors flex items-start gap-3 group"
                  >
                    <Lightbulb className="w-4 h-4 text-[#B8860B] mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="font-bold text-stone-900 text-xs">Pillar 3: Entrepreneurship</div>
                      <div className="text-[10px] text-stone-500 font-normal">Micro-credit & mentorship for women SHGs</div>
                    </div>
                  </button>
                </div>
              )}
            </div>

            {/* Hub 3: Impact */}
            <div className="relative" onMouseLeave={() => setActiveDropdown(null)}>
              <button
                onMouseEnter={() => setActiveDropdown('impact')}
                onClick={() => scrollToSection('impact')}
                className="px-3 py-2 rounded-full hover:bg-white/80 hover:text-[#1B5E20] transition-all flex items-center gap-1 cursor-pointer"
              >
                <span>{isHindi ? 'प्रभाव' : 'Impact'}</span>
                <ChevronDown className="w-3.5 h-3.5 text-stone-400" />
              </button>

              {activeDropdown === 'impact' && (
                <div className="absolute top-full left-0 mt-2 w-72 rounded-3xl glass-dropdown p-3 space-y-1 shadow-2xl animate-in fade-in slide-in-from-top-2">
                  <button
                    onClick={() => scrollToSection('impact')}
                    className="w-full text-left p-2.5 rounded-2xl hover:bg-emerald-50 transition-colors flex items-start gap-3 group"
                  >
                    <BarChart3 className="w-4 h-4 text-[#1B5E20] mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="font-bold text-stone-900 text-xs">Live Impact Counter</div>
                      <div className="text-[10px] text-stone-500 font-normal">15,000+ Children, 8,500+ Youth, 200+ Villages</div>
                    </div>
                  </button>

                  <button
                    onClick={() => scrollToSection('india-map')}
                    className="w-full text-left p-2.5 rounded-2xl hover:bg-[#EAF6FF] transition-colors flex items-start gap-3 group"
                  >
                    <MapPin className="w-4 h-4 text-[#0D47A1] mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="font-bold text-stone-900 text-xs">India Footprint Map</div>
                      <div className="text-[10px] text-stone-500 font-normal">Interactive map across UP, Bihar, Rajasthan & MP</div>
                    </div>
                  </button>
                </div>
              )}
            </div>

            {/* Hub 4: Knowledge Centre */}
            <div className="relative" onMouseLeave={() => setActiveDropdown(null)}>
              <button
                onMouseEnter={() => setActiveDropdown('knowledge')}
                onClick={() => scrollToSection('knowledge-centre')}
                className="px-3 py-2 rounded-full hover:bg-white/80 hover:text-[#1B5E20] transition-all flex items-center gap-1 cursor-pointer"
              >
                <span>{t.knowledge}</span>
                <ChevronDown className="w-3.5 h-3.5 text-stone-400" />
              </button>

              {activeDropdown === 'knowledge' && (
                <div className="absolute top-full left-0 mt-2 w-76 rounded-3xl glass-dropdown p-3 space-y-1 shadow-2xl animate-in fade-in slide-in-from-top-2">
                  <button
                    onClick={() => scrollToSection('knowledge-centre')}
                    className="w-full text-left p-2.5 rounded-2xl hover:bg-emerald-50 transition-colors flex items-start gap-3 group"
                  >
                    <FileText className="w-4 h-4 text-[#1B5E20] mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="font-bold text-stone-900 text-xs">20-Category Research Papers</div>
                      <div className="text-[10px] text-stone-500 font-normal">Open-access policy briefs and CEQI reports</div>
                    </div>
                  </button>

                  <button
                    onClick={() => scrollToSection('editorial-blog')}
                    className="w-full text-left p-2.5 rounded-2xl hover:bg-blue-50 transition-colors flex items-start gap-3 group"
                  >
                    <FileText className="w-4 h-4 text-[#0D47A1] mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="font-bold text-stone-900 text-xs">{t.blog}</div>
                      <div className="text-[10px] text-stone-500 font-normal">Ground-level field notes and director essays</div>
                    </div>
                  </button>
                </div>
              )}
            </div>

            {/* Hub 5: Transparency */}
            <button
              onClick={() => scrollToSection('governance')}
              className="px-3 py-2 rounded-full hover:bg-white/80 hover:text-[#1B5E20] transition-all cursor-pointer"
            >
              {t.governance}
            </button>

            {/* Hub 6: Get Involved */}
            <div className="relative" onMouseLeave={() => setActiveDropdown(null)}>
              <button
                onMouseEnter={() => setActiveDropdown('involved')}
                onClick={() => scrollToSection('volunteer')}
                className="px-3 py-2 rounded-full hover:bg-white/80 hover:text-[#1B5E20] transition-all flex items-center gap-1 cursor-pointer font-bold text-[#1B5E20]"
              >
                <span>{isHindi ? 'शामिल हों' : 'Get Involved'}</span>
                <ChevronDown className="w-3.5 h-3.5 text-stone-400" />
              </button>

              {activeDropdown === 'involved' && (
                <div className="absolute top-full right-0 mt-2 w-76 rounded-3xl glass-dropdown p-3 space-y-1 shadow-2xl animate-in fade-in slide-in-from-top-2">
                  <button
                    onClick={() => scrollToSection('student-sponsorship')}
                    className="w-full text-left p-2.5 rounded-2xl hover:bg-amber-50 transition-colors flex items-start gap-3 group"
                  >
                    <GraduationCap className="w-4 h-4 text-[#D4AF37] mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="font-bold text-stone-900 text-xs">1-to-1 Student Sponsorship</div>
                      <div className="text-[10px] text-stone-500 font-normal">Sponsor a rural student ($15/mo or ₹1,000/mo)</div>
                    </div>
                  </button>

                  <button
                    onClick={onOpenVolunteerModal}
                    className="w-full text-left p-2.5 rounded-2xl hover:bg-emerald-50 transition-colors flex items-start gap-3 group"
                  >
                    <Users className="w-4 h-4 text-[#1B5E20] mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="font-bold text-stone-900 text-xs">Volunteer Fellowship</div>
                      <div className="text-[10px] text-stone-500 font-normal">Share your skills in teaching or solar technology</div>
                    </div>
                  </button>

                  <button
                    onClick={() => scrollToSection('partners')}
                    className="w-full text-left p-2.5 rounded-2xl hover:bg-blue-50 transition-colors flex items-start gap-3 group"
                  >
                    <ShieldCheck className="w-4 h-4 text-[#0D47A1] mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="font-bold text-stone-900 text-xs">Corporate CSR Alliances</div>
                      <div className="text-[10px] text-stone-500 font-normal">MCA CSR-1 registered partnerships</div>
                    </div>
                  </button>
                </div>
              )}
            </div>

          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center space-x-1.5 sm:space-x-2">
            
            {/* Search Trigger (Cmd+K) */}
            <button
              onClick={onOpenSearch}
              className="p-2 sm:p-2.5 rounded-full bg-white/70 hover:bg-white text-stone-700 hover:text-[#1B5E20] transition-all cursor-pointer border border-stone-200/60 shadow-2xs"
              title="Search (Cmd+K)"
            >
              <Search className="w-4 h-4 text-[#1B5E20]" />
            </button>

            {/* Language Switcher Pill */}
            <button
              onClick={onToggleLang}
              className="px-3 py-1.5 rounded-full text-[11px] font-bold text-stone-800 bg-amber-50 hover:bg-amber-100 border border-amber-200 transition-colors cursor-pointer flex items-center gap-1 shadow-2xs"
            >
              <Globe className="w-3.5 h-3.5 text-[#B8860B]" />
              <span>{lang === 'en' ? 'EN | हिंदी' : 'हिंदी | EN'}</span>
            </button>

            {/* WhatsApp Icon-only Floating Glass Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex p-2.5 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-700 transition-colors border border-emerald-200/60 cursor-pointer shadow-2xs items-center justify-center"
              title="Chat on WhatsApp (+91 9958915893)"
            >
              <MessageCircle className="w-4 h-4 fill-emerald-600 text-emerald-600" />
            </a>

            {/* Glass Outlined Volunteer Pill Button */}
            <button
              onClick={onOpenVolunteerModal}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-stone-800 hover:text-[#1B5E20] glass-pill transition-all cursor-pointer hover:shadow-md"
            >
              <Users className="w-3.5 h-3.5" />
              <span>{t.volunteer}</span>
            </button>

            {/* Primary Emerald Gradient Donate CTA */}
            <button
              onClick={onOpenDonateModal}
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest text-white bg-gradient-to-r from-[#1B5E20] to-[#2E7D32] hover:from-[#134017] hover:to-[#1B5E20] glow-emerald transition-all cursor-pointer transform hover:scale-105 active:scale-95 shadow-lg"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>{t.donate}</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full bg-white/80 text-stone-800 hover:text-[#1B5E20] transition-colors cursor-pointer border border-stone-200/60"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>

        </div>

      </div>

      {/* Mobile Glass Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto lg:hidden fixed inset-x-4 top-24 z-40 glass-dropdown rounded-3xl p-6 shadow-2xl space-y-4 animate-in fade-in zoom-in-95 border border-white/60">
          
          <div className="flex flex-col space-y-2 font-bold text-sm text-stone-800">
            <button
              onClick={() => scrollToSection('motto')}
              className="py-2.5 px-4 rounded-2xl hover:bg-emerald-50 text-left transition-colors flex items-center justify-between"
            >
              <span>{t.motto}</span>
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            </button>

            <button
              onClick={() => scrollToSection('logo-story')}
              className="py-2.5 px-4 rounded-2xl hover:bg-amber-50 text-left transition-colors flex items-center justify-between"
            >
              <span>{isHindi ? 'प्रतीक चिन्ह' : 'Logo Emblem Story'}</span>
              <Award className="w-4 h-4 text-[#B8860B]" />
            </button>

            <button
              onClick={() => scrollToSection('pillars')}
              className="py-2.5 px-4 rounded-2xl hover:bg-emerald-50 text-left transition-colors flex items-center justify-between"
            >
              <span>{t.pillars}</span>
              <BookOpen className="w-4 h-4 text-[#1B5E20]" />
            </button>

            <button
              onClick={() => scrollToSection('student-sponsorship')}
              className="py-2.5 px-4 rounded-2xl hover:bg-amber-50 text-left transition-colors flex items-center justify-between"
            >
              <span>{t.sponsorship}</span>
              <Heart className="w-4 h-4 text-rose-500" />
            </button>

            <button
              onClick={() => scrollToSection('knowledge-centre')}
              className="py-2.5 px-4 rounded-2xl hover:bg-emerald-50 text-left transition-colors flex items-center justify-between"
            >
              <span>{t.knowledge}</span>
              <FileText className="w-4 h-4 text-[#1B5E20]" />
            </button>

            <button
              onClick={() => scrollToSection('editorial-blog')}
              className="py-2.5 px-4 rounded-2xl hover:bg-blue-50 text-left transition-colors flex items-center justify-between"
            >
              <span>{t.blog}</span>
              <FileText className="w-4 h-4 text-[#0D47A1]" />
            </button>

            <button
              onClick={() => scrollToSection('governance')}
              className="py-2.5 px-4 rounded-2xl hover:bg-emerald-50 text-left transition-colors flex items-center justify-between"
            >
              <span>{t.governance}</span>
              <ShieldCheck className="w-4 h-4 text-[#1B5E20]" />
            </button>
          </div>

          {/* Mobile Action Controls */}
          <div className="pt-4 border-t border-stone-200/60 flex flex-col space-y-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenVolunteerModal(); }}
              className="w-full py-3 rounded-2xl bg-stone-100 hover:bg-stone-200 text-stone-900 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
            >
              <Users className="w-4 h-4" />
              <span>{t.volunteer}</span>
            </button>

            <button
              onClick={() => { setMobileMenuOpen(false); onOpenDonateModal(); }}
              className="w-full py-3 rounded-2xl bg-gradient-to-r from-[#1B5E20] to-[#2E7D32] text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer shadow-lg"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>{t.donate}</span>
            </button>
          </div>

        </div>
      )}

    </header>
  );
};
