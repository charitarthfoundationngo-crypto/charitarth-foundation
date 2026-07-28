import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail, Clock, CheckCircle2 } from 'lucide-react';
import { CONTACT_INFO } from '../data/mockData';

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 bg-white text-stone-900 border-t border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1B5E20]/10 text-[#1B5E20] text-xs font-bold tracking-widest uppercase">
            <Mail className="w-3.5 h-3.5" />
            <span>Reach Out to Us</span>
          </div>

          <h2 className="font-serif-title text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight leading-tight">
            Get in Touch
          </h2>

          <p className="text-stone-600 text-base sm:text-lg">
            Have a question, partnership inquiry, or want to schedule a field visit? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* Left: Contact Info Cards */}
          <div className="lg:col-span-2 space-y-4">

            <div className="bg-[#FAF9F6] rounded-2xl p-5 border border-stone-200 space-y-3">
              <h3 className="font-bold text-stone-900 text-sm uppercase tracking-wider flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#1B5E20]" />
                Registered Office
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">{CONTACT_INFO.address}</p>
            </div>

            <div className="bg-[#FAF9F6] rounded-2xl p-5 border border-stone-200 space-y-3">
              <h3 className="font-bold text-stone-900 text-sm uppercase tracking-wider flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#1B5E20]" />
                Phone & WhatsApp
              </h3>
              <a href={CONTACT_INFO.phoneLink} className="text-[#1B5E20] font-bold text-sm hover:underline block">
                {CONTACT_INFO.phone}
              </a>
              <p className="text-stone-500 text-xs">Available Mon–Sat, 9 AM – 7 PM IST</p>
            </div>

            <div className="bg-[#FAF9F6] rounded-2xl p-5 border border-stone-200 space-y-3">
              <h3 className="font-bold text-stone-900 text-sm uppercase tracking-wider flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#0D47A1]" />
                Email
              </h3>
              <a href={`mailto:${CONTACT_INFO.email}`} className="text-[#0D47A1] font-bold text-sm hover:underline block">
                {CONTACT_INFO.email}
              </a>
              <p className="text-stone-500 text-xs">We typically respond within 24 hours.</p>
            </div>

            <div className="bg-[#FAF9F6] rounded-2xl p-5 border border-stone-200 space-y-3">
              <h3 className="font-bold text-stone-900 text-sm uppercase tracking-wider flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#B8860B]" />
                Office Hours
              </h3>
              <p className="text-stone-600 text-sm">Monday – Saturday: 9:00 AM – 7:00 PM IST</p>
              <p className="text-stone-500 text-xs">Sunday: Closed (Field visits by appointment)</p>
            </div>

          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-[#FAF9F6] rounded-3xl p-8 border border-stone-200 shadow-sm">

              {submitted ? (
                <div className="text-center py-16 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#1B5E20]/10 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8 text-[#1B5E20]" />
                  </div>
                  <h3 className="font-serif-title text-2xl font-bold text-stone-900">Message Sent!</h3>
                  <p className="text-stone-600 text-sm max-w-sm mx-auto">
                    Thank you for reaching out. Our team will respond within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-stone-700 uppercase tracking-wider">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-stone-200 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#1B5E20]/30 focus:border-[#1B5E20] transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-stone-700 uppercase tracking-wider">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-stone-200 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#1B5E20]/30 focus:border-[#1B5E20] transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-stone-700 uppercase tracking-wider">Subject *</label>
                    <select
                      required
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-stone-200 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#1B5E20]/30 focus:border-[#1B5E20] transition-all appearance-none"
                    >
                      <option value="">Select a topic...</option>
                      <option value="donation">Donation Inquiry</option>
                      <option value="volunteer">Volunteering / Internship</option>
                      <option value="csr">Corporate CSR Partnership</option>
                      <option value="field-visit">Schedule a Field Visit</option>
                      <option value="media">Media / Press Inquiry</option>
                      <option value="general">General Question</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-stone-700 uppercase tracking-wider">Message *</label>
                    <textarea
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Tell us how we can help..."
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-stone-200 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#1B5E20]/30 focus:border-[#1B5E20] transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-[#1B5E20] to-[#2E7D32] text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer hover:from-[#134017] hover:to-[#1B5E20] transition-all shadow-lg"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>

                  <p className="text-center text-[10px] text-stone-500">
                    By submitting, you agree to our Privacy Policy. We will never share your information.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
