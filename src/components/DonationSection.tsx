import React, { useState } from 'react';
import { DONATION_TIERS, RECENT_DONORS } from '../data/mockData';
import { DonationTier } from '../types';
import { Heart, ShieldCheck, CheckCircle2, Sparkles, Download, QrCode, CreditCard, Building2, User, Lock, X } from 'lucide-react';

import { Language, TRANSLATIONS } from '../data/translations';

interface DonationSectionProps {
  isOpenModal: boolean;
  onCloseModal: () => void;
  onOpenModal: () => void;
  lang?: Language;
}

export const DonationSection: React.FC<DonationSectionProps> = ({
  isOpenModal,
  onCloseModal,
  onOpenModal,
  lang = 'en'
}) => {
  const t = TRANSLATIONS[lang].donation;
  const [frequency, setFrequency] = useState<'one-time' | 'monthly' | 'corporate'>('one-time');
  const [currency, setCurrency] = useState<'INR' | 'USD' | 'EUR' | 'GBP'>('INR');

  const currencySymbol = currency === 'INR' ? '₹' : currency === 'USD' ? '$' : currency === 'EUR' ? '€' : '£';
  const currencyMultiplier = currency === 'INR' ? 1 : currency === 'USD' ? 0.012 : currency === 'EUR' ? 0.011 : 0.0095;

  const getAmountDisplay = (amountInInr: number) => {
    if (currency === 'INR') return `₹${amountInInr.toLocaleString('en-IN')}`;
    const converted = Math.round(amountInInr * currencyMultiplier);
    return `${currencySymbol}${converted}`;
  };
  const [selectedTier, setSelectedTier] = useState<number>(1000);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'netbanking'>('upi');
  
  // Checkout modal states
  const [showReceiptModal, setShowReceiptModal] = useState(false);
  const [donorDetails, setDonorDetails] = useState({
    name: 'Ananya Sharma',
    email: 'ananya.sharma@example.com',
    pan: 'ABCDE1234F',
    phone: '+91 98765 43210'
  });

  const activeAmount = customAmount ? parseFloat(customAmount) || 0 : selectedTier;

  const handleDonateComplete = (e: React.FormEvent) => {
    e.preventDefault();
    onCloseModal();
    setShowReceiptModal(true);
  };

  return (
    <section id="donate" className="py-24 bg-white text-stone-900 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1B5E20]/10 text-[#1B5E20] text-xs font-bold tracking-widest uppercase">
            <Heart className="w-3.5 h-3.5 fill-[#1B5E20]" />
            <span>{t.badge}</span>
          </div>

          <h2 className="font-serif-title text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight leading-tight">
            {t.heading}
          </h2>

          <p className="text-stone-600 text-base sm:text-lg">
            {t.subheading}
          </p>

          {/* One-time vs Monthly Toggle */}
          <div className="pt-4 flex justify-center">
            <div className="bg-stone-100 p-1.5 rounded-full border border-stone-200 inline-flex items-center space-x-2">
              <button
                onClick={() => setFrequency('one-time')}
                className={`px-6 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  frequency === 'one-time'
                    ? 'bg-[#1B5E20] text-white shadow-md'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                One-Time Giving
              </button>
              <button
                onClick={() => setFrequency('monthly')}
                className={`px-6 py-2 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  frequency === 'monthly'
                    ? 'bg-[#1B5E20] text-white shadow-md'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <span>Monthly Changemaker</span>
                <span className="text-[10px] bg-[#D4AF37] text-stone-900 px-2 py-0.5 rounded-full font-bold">2x Impact</span>
              </button>
            </div>

            {/* Currency Selector (FCRA Foreign & Domestic Support) */}
            <div className="pt-3 flex justify-center items-center space-x-2">
              <span className="text-[11px] font-bold text-stone-500 uppercase">Currency:</span>
              {(['INR', 'USD', 'EUR', 'GBP'] as const).map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCurrency(c)}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    currency === c
                      ? 'bg-stone-900 text-white shadow-xs'
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  {c === 'INR' ? '₹ INR (80G)' : c === 'USD' ? '$ USD (FCRA)' : c === 'EUR' ? '€ EUR' : '£ GBP'}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Preset Donation Tiers Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DONATION_TIERS.map((tier) => {
            const isSelected = selectedTier === tier.amount && !customAmount;
            return (
              <div
                key={tier.id}
                onClick={() => { setSelectedTier(tier.amount); setCustomAmount(''); }}
                className={`bg-[#FAF9F6] rounded-[32px] p-8 border transition-all cursor-pointer flex flex-col justify-between space-y-6 relative ${
                  isSelected
                    ? 'border-[#1B5E20] bg-emerald-50/50 shadow-md ring-2 ring-[#1B5E20]/20'
                    : 'border-black/5 hover:border-black/20 shadow-xs'
                }`}
              >
                {tier.isPopular && (
                  <span className="absolute -top-3 right-6 bg-[#D4AF37] text-stone-900 text-[9px] font-bold uppercase tracking-widest px-3.5 py-1 rounded-full shadow-sm">
                    Most Popular
                  </span>
                )}

                <div className="space-y-3">
                  <div className="font-serif-title font-bold text-3xl sm:text-4xl text-[#1B5E20]">
                    ₹{tier.amount.toLocaleString('en-IN')}
                    <span className="text-xs text-stone-500 font-sans font-normal">{frequency === 'monthly' ? ' / mo' : ''}</span>
                  </div>
                  <h3 className="font-bold text-base text-stone-900">{tier.title}</h3>
                  <p className="text-stone-600 text-xs leading-relaxed">{tier.impactText}</p>
                </div>

                <div className="text-[10px] text-stone-500 pt-4 border-t border-black/5 font-medium">
                  {tier.breakdown}
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Amount Bar */}
        <div className="mt-8 bg-[#FAF9F6] p-6 rounded-3xl border border-stone-200 max-w-xl mx-auto space-y-3 text-center">
          <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider">
            Or Enter a Custom Amount
          </label>
          <div className="flex items-center justify-center gap-2">
            <span className="text-xl font-bold text-stone-500">₹</span>
            <input
              type="number"
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
              placeholder="e.g. 15,000"
              className="w-48 px-4 py-2.5 rounded-xl border border-stone-300 text-lg font-bold text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#1B5E20]"
            />
          </div>
        </div>

        {/* CTA to Open Payment Modal */}
        <div className="mt-8 text-center">
          <button
            onClick={onOpenModal}
            className="px-10 py-4 rounded-full bg-gradient-to-r from-[#1B5E20] via-[#2E7D32] to-[#1B5E20] text-white font-bold text-base tracking-wide uppercase shadow-xl hover:brightness-110 transition-all cursor-pointer transform hover:-translate-y-0.5"
          >
            Proceed to Donate ₹{activeAmount.toLocaleString('en-IN')}
          </button>
        </div>

        {/* Financial Transparency Money Allocation Bar */}
        <div className="mt-16 bg-stone-900 text-white rounded-3xl p-8 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider">100% Financial Integrity</span>
              <h3 className="font-serif-title text-2xl font-bold mt-1">Where Your Money Goes</h3>
            </div>
            <div className="flex items-center gap-2 text-xs text-stone-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Audited by Chartered Accountants</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="space-y-1">
              <div className="flex justify-between font-bold">
                <span className="text-emerald-400">88% Field Programs</span>
                <span>88%</span>
              </div>
              <div className="w-full bg-white/10 h-2.5 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full w-[88%]" />
              </div>
              <p className="text-xs text-stone-400">Directly funds books, tablets, vocational labs, and micro-grants.</p>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between font-bold">
                <span className="text-sky-400">8% Digital Hubs & Tech</span>
                <span>8%</span>
              </div>
              <div className="w-full bg-white/10 h-2.5 rounded-full overflow-hidden">
                <div className="bg-sky-400 h-full w-[8%]" />
              </div>
              <p className="text-xs text-stone-400">Solar power, internet connections, and software maintenance.</p>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between font-bold">
                <span className="text-amber-400">4% Admin & Audit</span>
                <span>4%</span>
              </div>
              <div className="w-full bg-white/10 h-2.5 rounded-full overflow-hidden">
                <div className="bg-amber-400 h-full w-[4%]" />
              </div>
              <p className="text-xs text-stone-400">Compliance, CA audit fees, and 80G tax receipt dispatch.</p>
            </div>
          </div>
        </div>

        {/* Live Donor Wall */}
        <div className="mt-16 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-serif-title font-bold text-2xl text-stone-900">
              Live Donor Wall & Supporter Messages
            </h3>
            <span className="text-xs text-stone-500">Updated Real-Time</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {RECENT_DONORS.map((d) => (
              <div key={d.id} className="bg-[#FAF9F6] p-4 rounded-2xl border border-stone-200 text-xs space-y-2">
                <div className="flex items-center justify-between font-bold text-stone-900">
                  <span>{d.name}</span>
                  <span className="text-[#1B5E20] font-serif-title text-sm">₹{d.amount.toLocaleString('en-IN')}</span>
                </div>
                <p className="text-stone-600 italic">"{d.message}"</p>
                <div className="text-[10px] text-stone-400 flex items-center justify-between pt-1">
                  <span>{d.tier}</span>
                  <span>{d.timeAgo}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Payment Checkout Modal */}
      {isOpenModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-md animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative space-y-6 animate-in zoom-in-95">
            <button
              onClick={onCloseModal}
              className="absolute top-6 right-6 p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
              <img src="/Photos/logo.png" alt="Charitarth Foundation Logo" className="w-10 h-10 object-contain" />
              <div>
                <span className="text-[10px] font-bold text-[#1B5E20] tracking-widest uppercase block">
                  Charitarth Foundation • 80G Exempt
                </span>
                <h3 className="font-serif-title text-2xl font-bold text-stone-900 leading-none">
                  Donating ₹{activeAmount.toLocaleString('en-IN')}
                </h3>
                <p className="text-[11px] text-stone-500 mt-0.5">50% Tax Exemption receipt will be emailed to you.</p>
              </div>
            </div>

            <form onSubmit={handleDonateComplete} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">Donor Name (For 80G Receipt) *</label>
                <input
                  type="text"
                  required
                  value={donorDetails.name}
                  onChange={(e) => setDonorDetails({ ...donorDetails, name: e.target.value })}
                  className="w-full px-4 py-2 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B5E20]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={donorDetails.email}
                    onChange={(e) => setDonorDetails({ ...donorDetails, email: e.target.value })}
                    className="w-full px-4 py-2 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B5E20]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">PAN Number (Required for 80G)</label>
                  <input
                    type="text"
                    value={donorDetails.pan}
                    onChange={(e) => setDonorDetails({ ...donorDetails, pan: e.target.value })}
                    placeholder="ABCDE1234F"
                    className="w-full px-4 py-2 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B5E20]"
                  />
                </div>
              </div>

              {/* Payment Method Selector */}
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-2">Select Payment Method</label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('upi')}
                    className={`p-3 rounded-xl border text-xs font-bold flex flex-col items-center gap-1 cursor-pointer ${
                      paymentMethod === 'upi' ? 'border-[#1B5E20] bg-emerald-50 text-[#1B5E20]' : 'border-stone-200'
                    }`}
                  >
                    <QrCode className="w-5 h-5" />
                    <span>UPI / QR</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-3 rounded-xl border text-xs font-bold flex flex-col items-center gap-1 cursor-pointer ${
                      paymentMethod === 'card' ? 'border-[#1B5E20] bg-emerald-50 text-[#1B5E20]' : 'border-stone-200'
                    }`}
                  >
                    <CreditCard className="w-5 h-5" />
                    <span>Credit/Debit Card</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('netbanking')}
                    className={`p-3 rounded-xl border text-xs font-bold flex flex-col items-center gap-1 cursor-pointer ${
                      paymentMethod === 'netbanking' ? 'border-[#1B5E20] bg-emerald-50 text-[#1B5E20]' : 'border-stone-200'
                    }`}
                  >
                    <Building2 className="w-5 h-5" />
                    <span>Net Banking</span>
                  </button>
                </div>
              </div>

              {paymentMethod === 'upi' && (
                <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 text-center space-y-2">
                  <div className="w-32 h-32 bg-white rounded-xl p-2 mx-auto shadow-md border flex items-center justify-center">
                    {/* Simulated QR Code */}
                    <svg viewBox="0 0 100 100" className="w-full h-full text-stone-900">
                      <rect x="10" y="10" width="30" height="30" fill="currentColor" />
                      <rect x="15" y="15" width="20" height="20" fill="white" />
                      <rect x="20" y="20" width="10" height="10" fill="currentColor" />
                      <rect x="60" y="10" width="30" height="30" fill="currentColor" />
                      <rect x="65" y="15" width="20" height="20" fill="white" />
                      <rect x="70" y="20" width="10" height="10" fill="currentColor" />
                      <rect x="10" y="60" width="30" height="30" fill="currentColor" />
                      <rect x="15" y="65" width="20" height="20" fill="white" />
                      <rect x="20" y="70" width="10" height="10" fill="currentColor" />
                      <rect x="50" y="50" width="15" height="15" fill="currentColor" />
                      <rect x="70" y="70" width="20" height="20" fill="currentColor" />
                    </svg>
                  </div>
                  <div className="text-xs font-semibold text-stone-700">Scan with Google Pay, PhonePe, or Paytm</div>
                  <div className="text-[10px] text-stone-400">UPI ID: charitarth@upi</div>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#1B5E20] hover:bg-[#124216] text-white font-bold text-sm uppercase tracking-wider shadow-lg cursor-pointer transition-colors"
              >
                Complete Payment & Get 80G Receipt
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Celebratory Thank You & 80G Tax Receipt Preview Modal */}
      {showReceiptModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/85 backdrop-blur-md animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-10 shadow-2xl relative space-y-6 animate-in zoom-in-95">
            <button
              onClick={() => setShowReceiptModal(false)}
              className="absolute top-6 right-6 p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center space-y-2">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#1B5E20] flex items-center justify-center mx-auto shadow-inner">
                <Sparkles className="w-8 h-8" />
              </div>
              <h3 className="font-serif-title font-bold text-3xl text-stone-900">
                Thank You, {donorDetails.name}!
              </h3>
              <p className="text-stone-600 text-sm max-w-md mx-auto">
                Your contribution of <span className="font-bold text-[#1B5E20]">₹{activeAmount.toLocaleString('en-IN')}</span> has been received. Your kindness is already creating real impact in rural India.
              </p>
            </div>

            {/* Simulated 80G Tax Exemption Receipt Preview */}
            <div className="bg-[#FAF9F6] p-6 rounded-2xl border-2 border-dashed border-stone-300 space-y-4 text-xs font-mono">
              <div className="flex justify-between items-center border-b border-stone-200 pb-3">
                <div>
                  <div className="font-bold text-stone-900 text-sm font-sans">CHARITARTH FOUNDATION</div>
                  <div className="text-stone-500 text-[10px] font-sans">Reg. No: CF-DEL/2025/001 | 80G Cert: AAATC0987DF20251</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-emerald-700 font-sans">80G TAX RECEIPT</div>
                  <div className="text-stone-500 text-[10px]">Date: {new Date().toLocaleDateString('en-IN')}</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-stone-700">
                <div><span className="font-bold">Receipt No:</span> CF-2025-{Math.floor(100000 + Math.random() * 900000)}</div>
                <div><span className="font-bold">Donor Name:</span> {donorDetails.name}</div>
                <div><span className="font-bold">PAN:</span> {donorDetails.pan}</div>
                <div><span className="font-bold">Amount:</span> ₹{activeAmount.toLocaleString('en-IN')}</div>
                <div><span className="font-bold">Tax Exemption:</span> 50% under Sec 80G</div>
                <div><span className="font-bold">Status:</span> SUCCESS (80G Eligible)</div>
              </div>

              <div className="pt-2 text-[10px] text-stone-500 text-center border-t border-stone-200">
                Prem Niwas, Kamla Nagar, Delhi - 110007 | 80G Approved under Sec 80G(5)(vi)
              </div>
            </div>

            <div className="flex items-center justify-between">
              <button
                onClick={() => alert("Simulated Download: Official 80G PDF Receipt saved to your downloads folder.")}
                className="px-6 py-3 rounded-full bg-stone-900 text-white font-bold text-xs uppercase flex items-center gap-2 hover:bg-stone-800 transition-colors cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download 80G PDF Receipt</span>
              </button>

              <button
                onClick={() => setShowReceiptModal(false)}
                className="px-6 py-3 rounded-full bg-[#1B5E20] text-white font-bold text-xs uppercase hover:bg-[#124216] transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
