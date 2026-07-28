import React from 'react';
import { Users2, Linkedin, Mail, MapPin } from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  bio: string;
  expertise: string[];
  image: string;
  location: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'tm-1',
    name: 'Shri R. C. Sharma',
    role: 'Founder & Managing Trustee',
    department: 'Executive Leadership',
    bio: 'Former Senior IAS Officer with 35+ years of rural governance, policy planning, and grassroots empowerment. Envisioned Charitarth Foundation as a self-sustaining rural development engine.',
    expertise: ['Rural Governance', 'Policy Planning', 'Institutional Building'],
    image: '/Photos/IMG_3798.JPG',
    location: 'New Delhi'
  },
  {
    id: 'tm-2',
    name: 'Dr. Sunita Deshmukh',
    role: 'Director, Education & Child Welfare',
    department: 'Education Pillar',
    bio: 'Ph.D. in Rural Education Development from Delhi University. Former UNESCO consultant on primary literacy in South Asia. Leads Charitarth Shiksha Fellowship and digital smart lab strategy.',
    expertise: ['STEM Education', 'Child Psychology', 'Curriculum Design'],
    image: '/Photos/IMG_3799.JPG',
    location: 'Lucknow, UP'
  },
  {
    id: 'tm-3',
    name: 'Siddharth Varma',
    role: 'Director, Livelihoods & CSR Integration',
    department: 'Employment Pillar',
    bio: 'Ex-McKinsey & Co Director with 15 years experience structuring CSR partnerships and rural micro-finance models. Architect of the CEQI (Charitarth Employment Quality Index) framework.',
    expertise: ['CSR Strategy', 'Micro-Finance', 'Corporate Partnerships'],
    image: '/Photos/IMG_3802.JPG',
    location: 'New Delhi'
  },
  {
    id: 'tm-4',
    name: 'Pooja Kumari',
    role: 'Regional Director, Bihar Operations',
    department: 'Field Operations',
    bio: 'Born and raised in rural Gaya, Bihar. Leads vocational training centers, solar technician bootcamps, and women SHG financial literacy programs across 58 villages in Bihar.',
    expertise: ['Field Coordination', 'Women Empowerment', 'Financial Literacy'],
    image: '/Photos/IMG_3803.JPG',
    location: 'Gaya, Bihar'
  },
  {
    id: 'tm-5',
    name: 'Sanjay Vishwakarma',
    role: 'Regional Coordinator, Uttar Pradesh',
    department: 'Field Operations',
    bio: 'Manages 72 village adoption programs in Hardoi and surrounding districts. Specializes in solar-powered digital classrooms and teacher upskilling initiatives.',
    expertise: ['Solar Technology', 'Digital Classrooms', 'Teacher Training'],
    image: '/Photos/IMG_3804.JPG',
    location: 'Hardoi, UP'
  },
  {
    id: 'tm-6',
    name: 'Rakesh Sharma, FCA',
    role: 'Governance & Finance Advisor',
    department: 'Compliance & Audit',
    bio: 'Fellow Chartered Accountant with 20+ years in non-profit financial auditing and compliance. Ensures 100% audit transparency, 80G tax receipt automation, and CSR-1 regulatory adherence.',
    expertise: ['80G Compliance', 'Financial Auditing', 'CSR-1 Reporting'],
    image: '/Photos/IMG_3805.JPG',
    location: 'New Delhi'
  }
];

export const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-white text-stone-900 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1B5E20]/10 text-[#1B5E20] text-xs font-bold tracking-widest uppercase">
            <Users2 className="w-3.5 h-3.5" />
            <span>Our Leadership Team</span>
          </div>

          <h2 className="font-serif-title text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight leading-tight">
            The People Behind the Mission
          </h2>

          <p className="text-stone-600 text-base sm:text-lg">
            A team of passionate professionals and grassroots leaders driving sustainable change across 200+ villages.
          </p>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="bg-[#FAF9F6] rounded-3xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              {/* Photo */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] mb-1">
                    {member.department}
                  </div>
                  <h3 className="font-serif-title text-xl font-bold leading-tight">{member.name}</h3>
                  <p className="text-emerald-200 text-xs font-bold">{member.role}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <p className="text-stone-600 text-xs leading-relaxed">{member.bio}</p>

                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {member.expertise.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#1B5E20]/8 text-[#1B5E20] border border-[#1B5E20]/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Location */}
                <div className="flex items-center gap-1.5 text-stone-500 text-[10px] font-medium pt-2 border-t border-stone-200/60">
                  <MapPin className="w-3 h-3 text-[#B8860B]" />
                  <span>{member.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
