import React, { useState } from 'react';
import { VOLUNTEER_ROLES } from '../data/mockData';
import { VolunteerRole } from '../types';
import { Users, Code, Briefcase, TrendingUp, Stethoscope, Scale, Camera, Clock, MapPin, CheckCircle, Sparkles, Send, X, Loader2 } from 'lucide-react';
import { submitVolunteer } from '../lib/supabase';

interface VolunteerSectionProps {
  isOpenModal: boolean;
  onCloseModal: () => void;
  onOpenModal: () => void;
}

export const VolunteerSection: React.FC<VolunteerSectionProps> = ({
  isOpenModal,
  onCloseModal,
  onOpenModal
}) => {
  const [selectedRole, setSelectedRole] = useState<VolunteerRole | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    roleId: 'vol-1',
    availability: '2-4 hrs/week',
    skills: ''
  });

  const getRoleIcon = (icon: string) => {
    switch (icon) {
      case 'Code': return Code;
      case 'Briefcase': return Briefcase;
      case 'TrendingUp': return TrendingUp;
      case 'Stethoscope': return Stethoscope;
      case 'Scale': return Scale;
      case 'Camera': return Camera;
      default: return Users;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const roleName = VOLUNTEER_ROLES.find(r => r.id === formData.roleId)?.title || formData.roleId;

    await submitVolunteer({
      full_name: formData.name,
      email: formData.email,
      phone: formData.phone,
      role: roleName,
      city: formData.city,
      availability: formData.availability,
      motivation: formData.skills
    });

    setSubmitting(false);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onCloseModal();
    }, 2500);
  };

  return (
    <section id="volunteer" className="py-24 bg-[#FAF9F6] text-stone-900 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0D47A1]/10 text-[#0D47A1] text-xs font-bold tracking-widest uppercase">
            <Users className="w-3.5 h-3.5" />
            <span>Join Our Grassroots Movement</span>
          </div>

          <h2 className="font-serif-title text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight leading-tight">
            Change Begins With You. Lend Your Skills.
          </h2>

          <p className="text-stone-600 text-base sm:text-lg">
            Whether you are a developer, doctor, corporate manager, lawyer, teacher, or creative storyteller — your time and talent can shape a child’s future.
          </p>
        </div>

        {/* Roles Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VOLUNTEER_ROLES.map((role) => {
            const IconComp = getRoleIcon(role.icon);
            return (
              <div
                key={role.id}
                className="bg-white rounded-[32px] p-8 border border-black/5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3.5 rounded-2xl bg-[#0D47A1]/10 text-[#0D47A1] group-hover:bg-[#0D47A1] group-hover:text-white transition-colors">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase bg-[#FAF9F6] border border-black/5 text-stone-600 px-3 py-1 rounded-full">
                      {role.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif-title font-bold text-xl text-stone-900">
                      {role.title}
                    </h3>
                    <p className="text-stone-600 text-xs mt-2 leading-relaxed">
                      {role.description}
                    </p>
                  </div>

                  <div className="space-y-1.5 text-xs text-stone-500 pt-3 border-t border-black/5">
                    <div className="flex items-center gap-2 text-[11px]">
                      <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>{role.commitment}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[11px]">
                      <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>{role.location}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => { setSelectedRole(role); onOpenModal(); }}
                  className="w-full py-3.5 rounded-2xl bg-stone-900 group-hover:bg-[#0D47A1] text-white font-bold text-[10px] tracking-widest uppercase transition-colors cursor-pointer shadow-sm"
                >
                  Apply for This Role
                </button>
              </div>
            );
          })}
        </div>

      </div>

      {/* Application Modal */}
      {isOpenModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-md animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative space-y-6 animate-in zoom-in-95">
            
            <button
              onClick={onCloseModal}
              className="absolute top-6 right-6 p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="font-serif-title font-bold text-2xl text-stone-900">Application Submitted!</h3>
                <p className="text-stone-600 text-sm max-w-md mx-auto">
                  Thank you for stepping forward. Our Volunteer Coordinator will connect with you via email and WhatsApp within 48 hours.
                </p>
              </div>
            ) : (
              <>
                <div>
                  <span className="text-xs font-bold text-[#0D47A1] tracking-widest uppercase">
                    Volunteer Application
                  </span>
                  <h3 className="font-serif-title text-2xl font-bold text-stone-900 mt-1">
                    {selectedRole ? selectedRole.title : 'General Volunteer Application'}
                  </h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Anjali Sharma"
                        className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D47A1]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="anjali@example.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D47A1]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">Phone / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D47A1]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">Current City</label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="e.g. Delhi, Mumbai, Bengaluru"
                        className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D47A1]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">Brief Background & Skills</label>
                    <textarea
                      rows={3}
                      value={formData.skills}
                      onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                      placeholder="Share a bit about your professional background, teaching experience, or technical skills..."
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D47A1]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-[#0D47A1] hover:bg-[#0a3880] text-white font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer shadow-lg transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Volunteer Application</span>
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
