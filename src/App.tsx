import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { EmotionalStorySection } from './components/EmotionalStorySection';
import { MottoSection } from './components/MottoSection';
import { WhyCharitarthExists } from './components/WhyCharitarthExists';
import { ThreePillars } from './components/ThreePillars';
import { LogoStorySection } from './components/LogoStorySection';
import { StudentSponsorshipSection } from './components/StudentSponsorshipSection';
import { ImpactCounter } from './components/ImpactCounter';
import { IndiaMapSection } from './components/IndiaMapSection';
import { SuccessStories } from './components/SuccessStories';
import { VolunteerSection } from './components/VolunteerSection';
import { VolunteerLeaderboard } from './components/VolunteerLeaderboard';
import { DonationSection } from './components/DonationSection';
import { GovernanceSection } from './components/GovernanceSection';
import { PartnerSection } from './components/PartnerSection';
import { GallerySection } from './components/GallerySection';
import { ResearchBlogSection } from './components/ResearchBlogSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { TeamSection } from './components/TeamSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AiAssistantModal } from './components/AiAssistantModal';
import { VideoModal } from './components/VideoModal';
import { FloatingWhatsapp } from './components/FloatingWhatsapp';
import { GlobalSearchModal } from './components/GlobalSearchModal';
import { PrivacyPolicyModal } from './components/PrivacyPolicyModal';
import { LoadingScreen } from './components/LoadingScreen';
import { CookieConsent } from './components/CookieConsent';
import { ScrollToTop } from './components/ScrollToTop';
import { Language } from './data/translations';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [donateModalOpen, setDonateModalOpen] = useState(false);
  const [volunteerModalOpen, setVolunteerModalOpen] = useState(false);
  const [aiAssistantOpen, setAiAssistantOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);

  const toggleLang = () => {
    setLang((prev) => (prev === 'en' ? 'hi' : 'en'));
  };

  return (
    <div className="min-h-screen bg-nature-parchment botanical-overlay text-[#212121] flex flex-col font-sans selection:bg-[#D4AF37] selection:text-stone-900">
      {/* Branded Loading Splash Screen */}
      <LoadingScreen />

      {/* Header Navbar */}
      <Navbar
        onOpenDonateModal={() => setDonateModalOpen(true)}
        onOpenVolunteerModal={() => setVolunteerModalOpen(true)}
        onOpenAiAssistant={() => setAiAssistantOpen(true)}
        onOpenSearch={() => setSearchOpen(true)}
        lang={lang}
        onToggleLang={toggleLang}
        activeSection="hero"
      />

      {/* Main Content Sections */}
      <main className="flex-grow space-y-0">
        {/* Cinematic Hero */}
        <HeroSection
          lang={lang}
          onOpenDonateModal={() => setDonateModalOpen(true)}
          onOpenVolunteerModal={() => setVolunteerModalOpen(true)}
          onOpenVideoModal={() => setVideoModalOpen(true)}
          onOpenAiAssistant={() => setAiAssistantOpen(true)}
        />

        {/* Official Motto Section ("Together, We Create Possibilities.") */}
        <MottoSection lang={lang} />

        {/* Emotional Ripple Story Transformation */}
        <EmotionalStorySection
          onOpenDonateModal={() => setDonateModalOpen(true)}
        />

        {/* Why Charitarth Exists - Problem to Solution */}
        <WhyCharitarthExists
          onOpenDonateModal={() => setDonateModalOpen(true)}
          onOpenVolunteerModal={() => setVolunteerModalOpen(true)}
        />

        {/* Three Pillars (Education, Employment, Entrepreneurship) */}
        <ThreePillars
          lang={lang}
          onOpenDonateModal={() => setDonateModalOpen(true)}
          onOpenVolunteerModal={() => setVolunteerModalOpen(true)}
        />

        {/* Dedicated "The Story Behind Our Logo" Section */}
        <LogoStorySection lang={lang} />

        {/* Direct 1-to-1 Child & Student Sponsorship Portal */}
        <StudentSponsorshipSection
          lang={lang}
          onOpenDonateModal={() => setDonateModalOpen(true)}
        />

        {/* Live Impact Counters & Metrics */}
        <ImpactCounter />

        {/* Interactive India Footprint Map */}
        <IndiaMapSection />

        {/* Human Success Stories */}
        <SuccessStories
          onOpenDonateModal={() => setDonateModalOpen(true)}
          onOpenVideoModal={() => setVideoModalOpen(true)}
        />

        {/* Testimonials & Endorsements */}
        <TestimonialsSection />

        {/* Leadership Team Profiles */}
        <TeamSection />

        {/* Volunteer Role Cards & Leaderboard */}
        <VolunteerSection
          isOpenModal={volunteerModalOpen}
          onCloseModal={() => setVolunteerModalOpen(false)}
          onOpenModal={() => setVolunteerModalOpen(true)}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <VolunteerLeaderboard />
        </div>

        {/* Donation Tiers, Tax Benefits & Live Donor Wall */}
        <DonationSection
          lang={lang}
          isOpenModal={donateModalOpen}
          onCloseModal={() => setDonateModalOpen(false)}
          onOpenModal={() => setDonateModalOpen(true)}
        />

        {/* Governance, 80G Certificates & Audit Reports */}
        <GovernanceSection />

        {/* CSR & Institutional Partners */}
        <PartnerSection />

        {/* Grassroots Photo Gallery */}
        <GallerySection />

        {/* Expanded 20-Category Digital Knowledge Hub & Editorial Journal */}
        <ResearchBlogSection />

        {/* Frequently Asked Questions */}
        <FAQSection />

        {/* Contact Form & Office Details */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenDonateModal={() => setDonateModalOpen(true)}
        onOpenVolunteerModal={() => setVolunteerModalOpen(true)}
        onOpenAiAssistant={() => setAiAssistantOpen(true)}
        onOpenPrivacyPolicy={() => setPrivacyOpen(true)}
      />

      {/* Floating WhatsApp Support Button (+91 9958915893) */}
      <FloatingWhatsapp />

      {/* Floating Scroll-to-Top Button */}
      <ScrollToTop />

      {/* Cookie Consent Banner (GDPR) */}
      <CookieConsent />

      {/* Global Instant Search Modal (Cmd+K) */}
      <GlobalSearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
      />

      {/* AI Impact & Guidance Assistant Modal */}
      <AiAssistantModal
        isOpen={aiAssistantOpen}
        onClose={() => setAiAssistantOpen(false)}
        onOpenDonateModal={() => setDonateModalOpen(true)}
      />

      {/* Watch Our Story Video Modal */}
      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        onOpenDonateModal={() => setDonateModalOpen(true)}
      />

      {/* Privacy Policy & Terms of Use Modal */}
      <PrivacyPolicyModal
        isOpen={privacyOpen}
        onClose={() => setPrivacyOpen(false)}
      />
    </div>
  );
}
