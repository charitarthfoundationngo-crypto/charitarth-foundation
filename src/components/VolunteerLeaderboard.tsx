import React, { useState } from 'react';
import { Award, ShieldCheck, HeartHandshake, Clock, Download, Sparkles, Star, Users } from 'lucide-react';

export interface LeaderboardMember {
  id: string;
  name: string;
  role: string;
  badge: string;
  hours: number;
  location: string;
  avatar: string;
}

export const LEADERBOARD_MEMBERS: LeaderboardMember[] = [
  { id: 'm-1', name: 'Aarav Sharma', role: 'STEM & Python Coding Mentor', badge: 'Gold Educator', hours: 145, location: 'New Delhi (Remote)', avatar: 'A' },
  { id: 'm-2', name: 'Dr. Priya Patel', role: 'Medical Camp Volunteer Lead', badge: 'Health Champion', hours: 120, location: 'Gaya, Bihar', avatar: 'P' },
  { id: 'm-3', name: 'Rohan Mehta', role: 'Solar Grid Practical Instructor', badge: 'Solar Master', hours: 98, location: 'Hardoi, UP', avatar: 'R' },
  { id: 'm-4', name: 'Sunita & Team', role: 'Women SHG Micro-Credit Mentor', badge: 'SHG Accelerator', hours: 86, location: 'Phulbani, Odisha', avatar: 'S' }
];

export const VolunteerLeaderboard: React.FC = () => {
  const [selectedCertMember, setSelectedCertMember] = useState<LeaderboardMember | null>(null);

  return (
    <div className="bg-white rounded-[32px] p-8 border border-emerald-900/10 shadow-sm space-y-6 mt-12">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-100 pb-4">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1B5E20] uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full">
            <Award className="w-3.5 h-3.5" />
            <span>Volunteer Honor Wall & Impact Badges</span>
          </div>
          <h3 className="font-serif-title text-2xl font-bold text-stone-900 mt-2">
            Top Active Volunteers & Mentors
          </h3>
        </div>

        <div className="text-right text-xs text-stone-500 font-medium">
          <span className="font-bold text-[#1B5E20] text-sm block">45,000+ Hours</span>
          <span>Contributed Nationwide</span>
        </div>
      </div>

      {/* Leaderboard Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {LEADERBOARD_MEMBERS.map((member) => (
          <div
            key={member.id}
            className="p-5 rounded-2xl bg-nature-parchment border border-stone-200/80 space-y-3 flex flex-col justify-between hover:shadow-md transition-shadow"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-full bg-[#1B5E20] text-white font-serif font-bold flex items-center justify-center text-sm shadow-xs">
                  {member.avatar}
                </div>
                <span className="text-[9px] font-bold uppercase tracking-widest bg-[#D4AF37] text-stone-950 px-2.5 py-0.5 rounded-full">
                  {member.badge}
                </span>
              </div>

              <div>
                <h4 className="font-bold text-stone-900 text-sm">{member.name}</h4>
                <p className="text-[11px] text-stone-500 font-medium">{member.role}</p>
              </div>
            </div>

            <div className="pt-2 border-t border-stone-200/60 flex items-center justify-between text-xs">
              <span className="text-stone-600 font-semibold flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#1B5E20]" />
                <span>{member.hours} hrs</span>
              </span>

              <button
                onClick={() => setSelectedCertMember(member)}
                className="text-[10px] font-bold text-[#1B5E20] hover:underline cursor-pointer"
              >
                View Certificate
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Certificate Modal */}
      {selectedCertMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-md animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-8 shadow-2xl relative space-y-6 text-center border-4 border-amber-300">
            <div className="space-y-2">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-[#1B5E20] flex items-center justify-center mx-auto border border-emerald-200">
                <Award className="w-8 h-8" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#B8860B]">Official Recognition</span>
              <h3 className="font-serif-title text-2xl font-bold text-stone-900">Certificate of Grassroots Mentorship</h3>
              <p className="text-xs text-stone-500">Awarded by Charitarth Foundation to</p>
              <h4 className="font-serif-title text-xl font-bold text-[#1B5E20]">{selectedCertMember.name}</h4>
              <p className="text-xs text-stone-600">For contributing <strong className="text-stone-900">{selectedCertMember.hours} volunteer hours</strong> in {selectedCertMember.role}.</p>
            </div>

            <div className="flex justify-center gap-3 pt-2">
              <button
                onClick={() => alert(`Downloading verified certificate for ${selectedCertMember.name}`)}
                className="px-5 py-2.5 rounded-full bg-[#1B5E20] hover:bg-[#0D47A1] text-white text-xs font-bold uppercase flex items-center gap-1.5 cursor-pointer shadow-md"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </button>
              <button
                onClick={() => setSelectedCertMember(null)}
                className="px-5 py-2.5 rounded-full bg-stone-100 text-stone-800 text-xs font-bold uppercase cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
