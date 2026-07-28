import React from 'react';
import { Quote, Star } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  organization: string;
  quote: string;
  image: string;
  rating: number;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Dr. Meena Agarwal',
    role: 'District Education Officer',
    organization: 'Govt. of Uttar Pradesh',
    quote: "Charitarth Foundation's digital smart labs have transformed learning outcomes in our most underserved government schools. Their structured approach to STEM education is a model for rural India.",
    image: '/Photos/IMG_3792.JPG',
    rating: 5
  },
  {
    id: 't-2',
    name: 'Rajesh Kumar Singh',
    role: 'CSR Head',
    organization: 'Tata Power Solar',
    quote: 'Our CSR partnership with Charitarth Foundation has been exceptional. Their transparency, audit-ready documentation, and genuine grassroots impact set them apart from every other NGO we have partnered with.',
    image: '/Photos/IMG_3793.JPG',
    rating: 5
  },
  {
    id: 't-3',
    name: 'Sunita Devi',
    role: 'Village Sarpanch',
    organization: 'Gram Panchayat, Hardoi',
    quote: 'Before Charitarth came to our village, no girl studied beyond 8th class. Today, 14 girls from our village are in college. They brought not just books, but hope and dignity to our community.',
    image: '/Photos/IMG_3794.JPG',
    rating: 5
  },
  {
    id: 't-4',
    name: 'Prof. Arvind Sharma',
    role: 'Dean, Social Sciences',
    organization: 'Delhi University',
    quote: 'The CEQI framework developed by Charitarth Foundation is a breakthrough in measuring rural livelihood quality. It goes far beyond conventional employment metrics and deserves wider academic adoption.',
    image: '/Photos/IMG_3795.JPG',
    rating: 5
  },
  {
    id: 't-5',
    name: 'Priya Menon',
    role: 'Volunteer Fellow',
    organization: 'IIT Delhi Graduate',
    quote: 'My 3-month fellowship at Charitarth was life-changing. Teaching solar engineering to rural youth who had never seen a solar panel before, and watching them build their first micro-grid — nothing compares.',
    image: '/Photos/IMG_3796.JPG',
    rating: 5
  },
  {
    id: 't-6',
    name: 'Mohd. Irfan Khan',
    role: 'Block Development Officer',
    organization: 'Gaya District, Bihar',
    quote: "Charitarth's vocational bootcamps have reduced seasonal migration from our block by nearly 30%. Youth now have dignified local employment options they never had before.",
    image: '/Photos/IMG_3797.JPG',
    rating: 5
  }
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-[#F4F7F4] text-stone-900 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1B5E20]/10 text-[#1B5E20] text-xs font-bold tracking-widest uppercase">
            <Quote className="w-3.5 h-3.5" />
            <span>Voices of Trust & Impact</span>
          </div>

          <h2 className="font-serif-title text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight leading-tight">
            What People Say About Us
          </h2>

          <p className="text-stone-600 text-base sm:text-lg">
            Endorsements from government officials, corporate partners, village leaders, and volunteer fellows.
          </p>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Quote */}
              <div className="space-y-4 flex-1">
                <Quote className="w-8 h-8 text-[#1B5E20]/20 group-hover:text-[#1B5E20]/40 transition-colors" />

                <p className="text-stone-700 text-sm leading-relaxed italic">
                  "{item.quote}"
                </p>

                {/* Stars */}
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>
              </div>

              {/* Person */}
              <div className="flex items-center gap-3 mt-6 pt-5 border-t border-stone-100">
                <div className="w-11 h-11 rounded-full overflow-hidden bg-stone-100 border border-stone-200 shadow-sm shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-stone-900 text-sm">{item.name}</div>
                  <div className="text-[10px] text-stone-500 font-medium">{item.role}</div>
                  <div className="text-[10px] text-[#1B5E20] font-bold">{item.organization}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
