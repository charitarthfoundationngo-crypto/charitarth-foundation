import React, { useState } from 'react';
import { X, Shield, FileText, Lock, Eye, Database, UserCheck, Globe } from 'lucide-react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms'>('privacy');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-md animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-stone-200 animate-in zoom-in-95">

        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-stone-200 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#1B5E20]/10 flex items-center justify-center">
              <Shield className="w-5 h-5 text-[#1B5E20]" />
            </div>
            <div>
              <h2 className="font-serif-title text-xl font-bold text-stone-900">Legal & Compliance</h2>
              <p className="text-[10px] text-stone-500 font-medium">Charitarth Foundation • Last Updated: January 2025</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-stone-100 text-stone-500 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex gap-2 p-4 border-b border-stone-100 shrink-0">
          <button
            onClick={() => setActiveTab('privacy')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'privacy'
                ? 'bg-[#1B5E20] text-white shadow-md'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            <Lock className="w-3.5 h-3.5" />
            <span>Privacy Policy</span>
          </button>
          <button
            onClick={() => setActiveTab('terms')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'terms'
                ? 'bg-[#1B5E20] text-white shadow-md'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Terms of Use</span>
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 space-y-6 text-stone-700 text-sm leading-relaxed">

          {activeTab === 'privacy' ? (
            <>
              <div className="space-y-3">
                <h3 className="font-bold text-stone-900 text-lg flex items-center gap-2">
                  <Eye className="w-5 h-5 text-[#1B5E20]" />
                  Privacy Policy
                </h3>
                <p>
                  Charitarth Foundation ("we", "us", or "our") is committed to protecting the privacy and personal data of all visitors, donors, volunteers, and stakeholders who interact with our website and services.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-stone-900 flex items-center gap-2">
                  <Database className="w-4 h-4 text-[#0D47A1]" />
                  1. Information We Collect
                </h4>
                <ul className="space-y-1 ml-6 list-disc text-stone-600 text-xs">
                  <li><strong>Personal Information:</strong> Name, email address, phone number, and mailing address when you make a donation, subscribe to our newsletter, submit a contact form, or register as a volunteer.</li>
                  <li><strong>Financial Information:</strong> Payment details are processed securely through third-party payment gateways (Razorpay, Stripe). We do not store credit card or bank account numbers on our servers.</li>
                  <li><strong>Usage Data:</strong> We collect anonymized analytics data (page views, session duration, device type) to improve website performance. No personally identifiable tracking is performed.</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-stone-900 flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-[#1B5E20]" />
                  2. How We Use Your Information
                </h4>
                <ul className="space-y-1 ml-6 list-disc text-stone-600 text-xs">
                  <li>To process donations and issue 80G tax receipts and Form 10BE certificates.</li>
                  <li>To send newsletter updates, impact reports, and field stories (only if you opt in).</li>
                  <li>To communicate with you regarding volunteer applications, CSR partnerships, or general inquiries.</li>
                  <li>To comply with legal obligations under the Income Tax Act, FCRA, and Societies Registration Act.</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-stone-900 flex items-center gap-2">
                  <Lock className="w-4 h-4 text-[#B8860B]" />
                  3. Data Security
                </h4>
                <p className="text-stone-600 text-xs">
                  We employ industry-standard security measures including SSL/TLS encryption, secure server infrastructure, and access controls. All financial transactions are processed through PCI-DSS compliant payment gateways.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-stone-900 flex items-center gap-2">
                  <Globe className="w-4 h-4 text-[#0D47A1]" />
                  4. Third-Party Sharing
                </h4>
                <p className="text-stone-600 text-xs">
                  We do not sell, rent, or share your personal information with third parties for marketing purposes. Information may be shared only with: (a) authorized payment processors for transaction completion, (b) government authorities as required by Indian tax and FCRA compliance laws, and (c) CA auditors for financial transparency purposes.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-stone-900">5. Your Rights</h4>
                <p className="text-stone-600 text-xs">
                  You may request access to, correction of, or deletion of your personal data at any time by emailing <strong>charitarthfoundation.ngo@gmail.com</strong>. You may unsubscribe from our newsletter at any time using the link provided in each email.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-stone-900">6. Cookies</h4>
                <p className="text-stone-600 text-xs">
                  This website uses only essential cookies required for basic functionality (e.g., language preference, cookie consent status). We do not use advertising, tracking, or third-party analytics cookies.
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="space-y-3">
                <h3 className="font-bold text-stone-900 text-lg flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#1B5E20]" />
                  Terms of Use
                </h3>
                <p>
                  By accessing and using the Charitarth Foundation website (charitarthfoundation.org), you agree to the following terms and conditions.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-stone-900">1. General Use</h4>
                <p className="text-stone-600 text-xs">
                  This website is provided for informational purposes about Charitarth Foundation's programs, initiatives, and impact. All content, including text, images, research papers, and multimedia, is the intellectual property of Charitarth Foundation unless otherwise noted.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-stone-900">2. Donations</h4>
                <p className="text-stone-600 text-xs">
                  All donations made through this website are voluntary and non-refundable. Charitarth Foundation is registered under Section 80G and 12A of the Income Tax Act, 1961. Donors will receive valid 80G tax receipts for all contributions. Foreign donations are accepted under FCRA compliance.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-stone-900">3. Accuracy of Information</h4>
                <p className="text-stone-600 text-xs">
                  We make reasonable efforts to ensure all information on this website is accurate and up-to-date. However, we do not warrant the completeness or accuracy of third-party data, statistics, or external links.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-stone-900">4. Intellectual Property</h4>
                <p className="text-stone-600 text-xs">
                  The Charitarth Foundation logo, name, tagline ("Together, We Create Possibilities."), research publications, and all website content are protected by applicable intellectual property laws. Unauthorized reproduction, distribution, or modification is prohibited.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-stone-900">5. Limitation of Liability</h4>
                <p className="text-stone-600 text-xs">
                  Charitarth Foundation shall not be liable for any direct, indirect, or consequential damages arising from the use of this website or reliance on its content.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-stone-900">6. Governing Law</h4>
                <p className="text-stone-600 text-xs">
                  These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in New Delhi, India.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-stone-900">7. Contact</h4>
                <p className="text-stone-600 text-xs">
                  For questions regarding these terms, contact us at: <strong>charitarthfoundation.ngo@gmail.com</strong> or call <strong>+91 9958915893</strong>.
                </p>
              </div>
            </>
          )}

        </div>

      </div>
    </div>
  );
};
