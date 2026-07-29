import {
  PillarDetail,
  ImpactMetric,
  StateData,
  Story,
  VolunteerRole,
  DonationTier,
  GovernanceDoc,
  ResearchPaper,
  GalleryItem,
  BlogPost,
  DonorRecord,
  LogoStoryItem,
  MottoDimension
} from '../types';

export const LOGO_URL = '/Photos/logo.png';

export const CONTACT_INFO = {
  email: 'charitarthfoundation.ngo@gmail.com',
  emailLink: 'mailto:charitarthfoundation.ngo@gmail.com',
  phone: '+91 9958915893',
  phoneLink: 'tel:+919958915893',
  instagram: '@charitarthfoundation',
  instagramUrl: 'https://instagram.com/charitarthfoundation',
  address: 'Charitarth Foundation, New Delhi & Field Centers across UP, Bihar, Rajasthan & MP'
};

export const LOGO_STORY_ITEMS: LogoStoryItem[] = [
  {
    id: 'sun',
    elementName: 'The Rising Sun',
    symbolism: 'Hope, New Beginnings & Limitless Possibilities',
    description: 'The golden radiant sun rays represent the dawn of new opportunity across rural villages, driving away generational poverty and illuminating bright futures for rural youth.',
    iconName: 'Sun',
    color: 'from-amber-400 to-[#D4AF37]'
  },
  {
    id: 'book',
    elementName: 'The Open Book',
    symbolism: 'Education as the Foundation of Transformation',
    description: 'The expansive open book forms the structural bedrock of our identity, symbolizing quality education, digital literacy, and knowledge as the indispensable catalyst for social change.',
    iconName: 'BookOpen',
    color: 'from-blue-600 to-[#0D47A1]'
  },
  {
    id: 'figures',
    elementName: 'Three Human Figures',
    symbolism: 'Communities United in Growth & Empowerment',
    description: 'Representing children, youth, and women standing together with open arms. They embody our three core pillars—Education, Employment, and Entrepreneurship.',
    iconName: 'Users',
    color: 'from-[#1B5E20] to-emerald-600'
  },
  {
    id: 'leaves',
    elementName: 'The Green Leaves',
    symbolism: 'Sustainable Development & Continuous Growth',
    description: 'Flourishing green foliage sprouting upwards signifies environmental responsibility, renewable energy integration (solar power), and organic community expansion.',
    iconName: 'Leaf',
    color: 'from-emerald-500 to-[#1B5E20]'
  },
  {
    id: 'village',
    elementName: 'Village House & Tree',
    symbolism: 'Rooted Commitment to Rural India',
    description: 'The traditional home and shade tree reflect our deep grassroots presence across 200+ villages, ensuring interventions are culturally sensitive and locally owned.',
    iconName: 'Home',
    color: 'from-amber-700 to-[#B8860B]'
  },
  {
    id: 'graph',
    elementName: 'The Upward Graph & Arrow',
    symbolism: 'Economic Progress, CEQI & Self-Reliance',
    description: 'The ascending bar chart and golden arrow symbolize measurable income growth, formal vocational employment quality (CEQI), micro-enterprises, and financial independence.',
    iconName: 'TrendingUp',
    color: 'from-emerald-600 to-teal-700'
  },
  {
    id: 'pathway',
    elementName: 'The Flowing Pathway',
    symbolism: 'Journey from Opportunity to Transformation',
    description: 'The central winding stream connecting the book to the horizon represents the guided journey every beneficiary takes—from foundational learning to sustainable livelihoods.',
    iconName: 'Compass',
    color: 'from-sky-500 to-[#0D47A1]'
  },
  {
    id: 'seal',
    elementName: 'The Circular Seal & Motto',
    symbolism: 'Unity, Inclusiveness & Long-Term Impact',
    description: 'The golden circular boundary binds our mission into a unified pledge of transparency, governance, 80G tax integrity, and enduring partnership.',
    iconName: 'ShieldCheck',
    color: 'from-[#D4AF37] to-amber-600'
  }
];

export const MOTTO_DATA = {
  motto: 'Together, We Create Possibilities.',
  subheading: 'Our Guiding Philosophy for Grassroots Rural Transformation',
  story: 'At Charitarth Foundation, we believe that lasting, generational transformation cannot be achieved in isolation. It emerges when rural communities, passionate volunteers, visionary donors, dedicated educators, local micro-entrepreneurs, and institutional partners unite around a shared purpose. By bridging resources, technology, and empathy, we unlock latent potential and build self-reliant rural ecosystems across India.',
  dimensions: [
    { id: 'dim-1', stakeholder: 'Rural Communities', role: 'Active Co-Creators of Progress', impactQuote: 'Panchayats and village elders leading program design and sustainability.', icon: 'Home', color: 'bg-emerald-50 text-[#1B5E20]' },
    { id: 'dim-2', stakeholder: 'Volunteers & Mentors', role: 'Skills & Compassion in Action', impactQuote: 'Tech mentors, doctors, and coaches sharing knowledge with first-gen learners.', icon: 'HeartHandshake', color: 'bg-blue-50 text-[#0D47A1]' },
    { id: 'dim-3', stakeholder: 'Donors & Philanthropists', role: 'Catalysts for Scale & Transparency', impactQuote: 'Enabling solar smart labs and revolving micro-grants with 80G tax efficiency.', icon: 'Heart', color: 'bg-amber-50 text-[#B8860B]' },
    { id: 'dim-4', stakeholder: 'Educators & Trainers', role: 'Nurturing Minds & Technical Mastery', impactQuote: 'Teachers delivering STEM curriculum and accredited green energy skills.', icon: 'BookOpen', color: 'bg-[#1B5E20]/10 text-[#1B5E20]' },
    { id: 'dim-5', stakeholder: 'Women Entrepreneurs', role: 'Pillars of Local Economic Growth', impactQuote: 'SHG leaders driving micro-enterprises and family financial security.', icon: 'Sparkles', color: 'bg-pink-50 text-pink-700' },
    { id: 'dim-6', stakeholder: 'CSR & Govt Partners', role: 'Institutional Power & Scale', impactQuote: 'Aligning with DAY-NRLM and corporate CSR for district-wide impact.', icon: 'Building2', color: 'bg-indigo-50 text-indigo-700' }
  ]
};

export const HERO_SLIDES = [
  {
    id: 'slide-1',
    image: '/Photos/IMG_3787.JPG',
    tagline: 'THREE PILLARS • ONE MISSION • ENDLESS POSSIBILITIES',
    headline: 'Changing Lives. Creating Opportunities. Building Futures.',
    subheadline: 'Every child deserves education. Every youth deserves employment. Every entrepreneur deserves an opportunity. Together, we are building a self-reliant rural India across 200+ villages.',
    primaryCta: '❤️ Donate Now',
    secondaryCta: 'Become a Volunteer'
  },
  {
    id: 'slide-2',
    image: '/Photos/IMG_3782.JPG',
    tagline: 'PILLAR I: QUALITY EDUCATION',
    headline: 'Education is not an expense. It is the greatest investment in humanity.',
    subheadline: 'Bridging the urban-rural divide with digital smart classrooms, STEM labs, and personalized career mentorship for first-generation learners.',
    primaryCta: 'Explore Education Programs',
    secondaryCta: 'Sponsor a Student'
  },
  {
    id: 'slide-3',
    image: '/Photos/IMG_3820.JPG',
    tagline: 'PILLAR II & III: EMPLOYMENT & ENTREPRENEURSHIP',
    headline: 'Potential Exists Everywhere. Opportunity Doesn’t.',
    subheadline: 'Transforming rural jobseekers into skilled technicians, solar innovators, and self-employed women leaders driving micro-enterprises across district economies.',
    primaryCta: 'Partner With Us',
    secondaryCta: 'Read Research Papers'
  },
  {
    id: 'slide-4',
    image: '/Photos/IMG_3783.JPG',
    tagline: '200+ VILLAGES ADOPTED',
    headline: 'Empowering Grassroots Leadership Across Rural India',
    subheadline: 'Working side-by-side with Gram Panchayats, village elders, and local youth to create enduring economic and social self-reliance.',
    primaryCta: 'View Impact Map',
    secondaryCta: 'Schedule Field Visit'
  }
];

export const PILLARS_DATA: PillarDetail[] = [
  {
    id: 'education',
    title: 'Education',
    subtitle: 'Nurturing Minds, Unlocking Bright Futures',
    iconName: 'BookOpen',
    color: 'from-[#1B5E20] to-[#2E7D32]',
    badge: 'Pillar I',
    description: 'We establish high-quality digital learning centers, science labs, community libraries, and scholarship programs that empower rural students to dream beyond socio-economic limitations.',
    keyInitiatives: [
      'Digital Literacy & Smart Classrooms in Govt Schools',
      'Charitarth Shiksha Fellowships for Higher Education',
      'After-School Remedial Learning & STEM Clubs',
      'Community Village Libraries & Book Banks',
      'Career Counselling & Entrance Exam Coaching'
    ],
    metrics: [
      { label: 'Children Enrolled', value: '15,000+' },
      { label: 'Smart Labs Established', value: '85+' },
      { label: 'Scholarships Awarded', value: '500+' }
    ],
    quote: 'Education is the most powerful tool to break generational poverty in rural communities.',
    image: '/Photos/IMG_3782.JPG',
    caseStudyTitle: 'Project Bodhi - Digital Classrooms in Hardoi, UP',
    caseStudySnippet: 'Provided solar-powered interactive tablets and trained rural teachers, improving foundational literacy by 78% within 9 months.'
  },
  {
    id: 'employment',
    title: 'Employment',
    subtitle: 'Bridging Skills to Sustainable Livelihoods',
    iconName: 'Briefcase',
    color: 'from-[#0D47A1] to-[#1976D2]',
    badge: 'Pillar II',
    description: 'Focused vocational training, industry-aligned skill hubs, and direct job placement support that transition rural youth from low-yield agriculture into formal wage employment.',
    keyInitiatives: [
      'Charitarth Skill Development Centers (CSDC)',
      'Solar Technician & Green Energy Certifications',
      'Retail & BPO Industry Placement Programs',
      'Vocational Livelihood Bootcamps for High School Graduates',
      'Charitarth Employment Quality Index (CEQI) Framework'
    ],
    metrics: [
      { label: 'Youth Skill Trained', value: '8,500+' },
      { label: 'Formal Placements', value: '6,800+' },
      { label: 'Average Wage Growth', value: '2.8x' }
    ],
    quote: 'Skills transform a dependent jobseeker into an empowered earner driving family stability.',
    image: '/Photos/IMG_3820.JPG',
    caseStudyTitle: 'Green Livelihood Hub - Solar Tech Trainees in Gaya, Bihar',
    caseStudySnippet: 'Trained 140 rural youth in solar pump maintenance and grid maintenance, securing 92% placement across green energy enterprises.'
  },
  {
    id: 'entrepreneurship',
    title: 'Entrepreneurship',
    subtitle: 'Fostering Rural Innovation & Self-Reliance',
    iconName: 'Lightbulb',
    color: 'from-[#B8860B] to-[#D4AF37]',
    badge: 'Pillar III',
    description: 'Catalyzing micro-enterprises, women Self Help Groups (SHGs), agro-processing cooperatives, and local businesses through seed funding, business mentorship, and market linkage.',
    keyInitiatives: [
      'Charitarth Women Entrepreneurship Incubator',
      'Micro-Grant & Revolving Seed Funds for Rural Startups',
      'Financial Literacy & Digital Banking Training',
      'DAY-NRLM Cooperative Market Linkages',
      'Agritech & Local Craft Value Chain Acceleration'
    ],
    metrics: [
      { label: 'Women Micro-Owners', value: '12,000+' },
      { label: 'Self Help Groups', value: '450+' },
      { label: 'Micro Enterprises Started', value: '1,100+' }
    ],
    quote: 'When you fund a rural woman entrepreneur, you fund the prosperity of an entire village.',
    image: '/Photos/IMG_3783.JPG',
    caseStudyTitle: 'Prerna Artisan Collective - Handloom SHG in Odisha',
    caseStudySnippet: 'Mobilized 85 tribal women weavers, connected them with e-commerce platforms, increasing average monthly household income from ₹3,200 to ₹14,500.'
  }
];

export const IMPACT_METRICS: ImpactMetric[] = [
  { id: '1', value: 15000, suffix: '+', label: 'Children Educated', category: 'education', description: 'Access to quality schooling and smart labs', icon: 'GraduationCap' },
  { id: '2', value: 8500, suffix: '+', label: 'Youth Trained', category: 'employment', description: 'Certified in industry-relevant vocational skills', icon: 'Award' },
  { id: '3', value: 12000, suffix: '+', label: 'Women Empowered', category: 'entrepreneurship', description: 'Leading micro-enterprises & SHGs', icon: 'Users' },
  { id: '4', value: 200, suffix: '+', label: 'Villages Reached', category: 'all', description: 'Deep grassroots interventions across India', icon: 'MapPin' },
  { id: '5', value: 1200, suffix: '+', label: 'Active Volunteers', category: 'all', description: 'Dedicated mentors, doctors, developers & educators', icon: 'HeartHandshake' },
  { id: '6', value: 45000, suffix: '+', label: 'Hours Contributed', category: 'all', description: 'Volunteered time on field & digital mentoring', icon: 'Clock' },
  { id: '7', value: 500, suffix: '+', label: 'Higher Ed Scholarships', category: 'education', description: 'Full funding for underprivileged merit students', icon: 'BookMarked' },
  { id: '8', value: 85, suffix: '+', label: 'Digital Hubs Built', category: 'education', description: 'Solar-powered tech hubs in remote areas', icon: 'Monitor' },
  { id: '9', value: 40, suffix: '+', label: 'CSR Partners', category: 'all', description: 'Corporate leaders collaborating for scale', icon: 'Building2' }
];

export const INDIA_STATES: StateData[] = [
  {
    id: 'up',
    name: 'Uttar Pradesh',
    code: 'UP',
    coordinates: { x: 48, y: 38 },
    districtsCovered: 14,
    villagesCount: 72,
    beneficiaries: '14,200+',
    keyPrograms: ['Project Bodhi Smart Classrooms', 'CSDC Solar Skill Center', 'Rural Women Weaver Cooperatives'],
    localCoordinator: { name: 'Sanjay Vishwakarma', phone: '+91 9958915893', email: 'charitarthfoundation.ngo@gmail.com' },
    featuredStory: {
      title: 'First Engineer from Pipra Village',
      person: 'Amit Kumar, 21',
      quote: 'The Charitarth scholarship changed my life. Today I am a software engineer contributing to my village school.',
      image: '/Photos/IMG_3779.JPG'
    },
    highlights: ['85% pass rate in Class 10 board exams across 12 adopted govt schools', '240 women running sanitary napkin manufacturing SHGs']
  },
  {
    id: 'bihar',
    name: 'Bihar',
    code: 'BR',
    coordinates: { x: 62, y: 42 },
    districtsCovered: 11,
    villagesCount: 58,
    beneficiaries: '11,800+',
    keyPrograms: ['Green Livelihood Solar Hub', 'Charitarth Remedial STEM Clubs', 'Mithila Micro-Artisan Incubator'],
    localCoordinator: { name: 'Pooja Kumari', phone: '+91 9958915893', email: 'charitarthfoundation.ngo@gmail.com' },
    featuredStory: {
      title: 'Solar Technician to Business Owner',
      person: 'Ravi Prakash, 24',
      quote: 'I used to earn ₹150 a day as a seasonal laborer. Now I maintain solar pumps across 8 villages.',
      image: '/Photos/5C38A187-05D6-4197-AFB2-02EAD24C5943.PNG'
    },
    highlights: ['92% placement rate for solar technician certification graduates', '45 micro-enterprises launched in food processing']
  },
  {
    id: 'rajasthan',
    name: 'Rajasthan',
    code: 'RJ',
    coordinates: { x: 32, y: 40 },
    districtsCovered: 8,
    villagesCount: 42,
    beneficiaries: '8,500+',
    keyPrograms: ['Marwar Girl Literacy Project', 'Water Conservation & SHG Dairies', 'Handicraft E-Commerce Linkage'],
    localCoordinator: { name: 'Vikram Singh', phone: '+91 9958915893', email: 'charitarthfoundation.ngo@gmail.com' },
    featuredStory: {
      title: 'Empowering Women Artisans in Barmer',
      person: 'Chanda Devi, 32',
      quote: 'Our embroidery work now reaches buyers in Mumbai and Delhi through Charitarth digital catalogue.',
      image: '/Photos/9AC49410-99F8-4BF9-B672-2EADE756E059.PNG'
    },
    highlights: ['Zero dropout rate achieved among 400 targeted female students', '28 dairy collection cooperatives established']
  },
  {
    id: 'mp',
    name: 'Madhya Pradesh',
    code: 'MP',
    coordinates: { x: 44, y: 52 },
    districtsCovered: 9,
    villagesCount: 48,
    beneficiaries: '9,100+',
    keyPrograms: ['Tribal Youth Vocational Training', 'Forest Produce Micro-Incubator', 'Village Book Bank Project'],
    localCoordinator: { name: 'Kavita Maravi', phone: '+91 9958915893', email: 'charitarthfoundation.ngo@gmail.com' },
    featuredStory: {
      title: 'Mahua Value Addition by Gond SHG',
      person: 'Sunita & Team',
      quote: 'We converted raw mahua collection into high-grade organic jam and herbal teas, tripling our household income.',
      image: '/Photos/ACBFE7EF-AEE1-4E58-ABF7-B0C7C18B5467.PNG'
    },
    highlights: ['18 tribal village libraries created', '120 youth trained in agro-equipment repair']
  }
];

export const SUCCESS_STORIES: Story[] = [
  {
    id: 'story-1',
    name: 'Kavita Vishwakarma',
    age: 22,
    village: 'Pipra, Hardoi',
    state: 'Uttar Pradesh',
    pillar: 'Education',
    title: 'From First-Generation Learner to Solar Tech Fellow',
    quote: 'Before Charitarth came to our village, girls stopped studying after 8th grade. Today, I am pursuing my B.Sc and teaching digital tools to 30 young girls.',
    before: 'Faced imminent family pressure to drop out after 8th grade due to absence of local secondary school and digital facilities.',
    journey: 'Enrolled in Charitarth Shiksha Fellowship, received a merit scholarship, access to digital smart lab, and intense mentoring.',
    after: 'Scored 89% in Class 12, currently pursuing B.Sc. Information Technology while earning ₹6,000/month as a digital lab facilitator.',
    imageBefore: '/Photos/IMG_3780.JPG',
    imageAfter: '/Photos/IMG_3781.JPG',
    impactTag: 'Pillar I • Education Champion'
  },
  {
    id: 'story-2',
    name: 'Rakesh Yadav',
    age: 25,
    village: 'Tekari, Gaya',
    state: 'Bihar',
    pillar: 'Employment',
    title: 'Breaking the Cycle of Seasonal Agricultural Migration',
    quote: 'Every winter I migrated to cities for unsafe construction work. Charitarth CSDC gave me an accredited solar skill trade right in my district.',
    before: 'Worked irregular 60-day construction stints earning under ₹4,000/month with high living costs away from family.',
    journey: 'Completed Charitarth 90-Day Solar Technician & Grid Maintenance Certification with hands-on lab training.',
    after: 'Employed full-time with a regional solar EPC firm as Lead Technician earning ₹18,500/month with PF and health insurance.',
    imageBefore: '/Photos/5C38A187-05D6-4197-AFB2-02EAD24C5943.PNG',
    imageAfter: '/Photos/19BAB20F-5A74-478C-B240-699D1CCB24EF.PNG',
    impactTag: 'Pillar II • Employment Quality (CEQI 0.82)'
  },
  {
    id: 'story-3',
    name: 'Prerna Women SHG Collective',
    age: 34,
    village: 'Phulbani',
    state: 'Odisha',
    pillar: 'Entrepreneurship',
    title: '85 Tribal Women Transforming Native Weaving into Global Craft',
    quote: 'We went from selling raw cotton work to middleman agents for pennies to running our registered handloom brand with digital QR payments.',
    before: 'Exploited by middlemen who paid ₹40 per handwoven scarf; zero access to financial literacy or working capital.',
    journey: 'Formed a registered SHG with Charitarth seed micro-grant, attended financial management workshops, and onboarded on ONDC.',
    after: 'Generated ₹18.4 Lakhs in collective revenue in FY 24-25, providing consistent ₹12,000+ monthly income to each weaver member.',
    imageBefore: '/Photos/C25D9240-BD5B-419C-A857-E1C4A41710A5.PNG',
    imageAfter: '/Photos/F9DD4FB3-B6E5-4EEC-AA67-E8B9CFB0870F.PNG',
    impactTag: 'Pillar III • Micro-Enterprise & Women SHG'
  }
];

export const VOLUNTEER_ROLES: VolunteerRole[] = [
  {
    id: 'vol-1',
    title: 'Remote STEM & Coding Mentor',
    category: 'Education',
    commitment: '2-4 hrs/week (Virtual)',
    location: 'Remote / Online',
    icon: 'Code',
    description: 'Guide high school students in rural digital labs with basic programming, math, and digital literacy skills.',
    skillsNeeded: ['Python / Web Basics', 'Patience & Mentoring', 'Hindi / Regional Language fluency'],
    impactSummary: 'Directly mentor 3 students towards higher tech education.'
  },
  {
    id: 'vol-2',
    title: 'Career & Industry Skills Coach',
    category: 'Employment',
    commitment: '3 hrs/week',
    location: 'Hybrid / Regional Centers',
    icon: 'Briefcase',
    description: 'Conduct mock interviews, resume writing workshops, and soft skills training for rural vocational trainees.',
    skillsNeeded: ['Corporate HR / Management', 'Interview Techniques', 'Communication Skills'],
    impactSummary: 'Prepare 15 rural jobseekers for formal industry placement.'
  },
  {
    id: 'vol-3',
    title: 'Micro-Business & SHG Mentor',
    category: 'Entrepreneurship',
    commitment: '4 hrs/week',
    location: 'On-field / Virtual',
    icon: 'TrendingUp',
    description: 'Assist rural women entrepreneurs with financial literacy, inventory tracking, UPI payments, and market expansion.',
    skillsNeeded: ['Business Planning', 'Accounting / Finance', 'E-commerce Linkages'],
    impactSummary: 'Help 2 women-led micro-businesses double their sales.'
  },
  {
    id: 'vol-4',
    title: 'Medical / Health Workshop Doctor',
    category: 'Community',
    commitment: '1 Weekend / Month',
    location: 'Field Medical Camps',
    icon: 'Stethoscope',
    description: 'Conduct preventive healthcare screenings, eye tests, and nutritional workshops in adoption villages.',
    skillsNeeded: ['MBBS / Medical Practitioner', 'Community Health', 'Compassion'],
    impactSummary: 'Provide free medical checkups to 200+ villagers per camp.'
  },
  {
    id: 'vol-5',
    title: 'Legal Literacy & Rights Advisor',
    category: 'Governance',
    commitment: '2 hrs/week',
    location: 'Remote / Field',
    icon: 'Scale',
    description: 'Help villagers understand government schemes, land records, 80G documentation, and women legal rights.',
    skillsNeeded: ['Legal Background (LLB/LLM)', 'Government Scheme Awareness', 'Drafting'],
    impactSummary: 'Secure government scheme benefits for 50+ families.'
  },
  {
    id: 'vol-6',
    title: 'Content Creator & Photographer',
    category: 'Media & Communications',
    commitment: 'Project-based',
    location: 'Field Visits / Remote Editing',
    icon: 'Camera',
    description: 'Capture real grassroots stories of change, record video interviews, and write impactful stories.',
    skillsNeeded: ['Photography / Video Editing', 'Storytelling', 'Social Media'],
    impactSummary: 'Amplify the voice of rural heroes to global supporters.'
  }
];

export const DONATION_TIERS: DonationTier[] = [
  {
    id: 'tier-500',
    amount: 500,
    title: 'Learning & School Kit',
    impactText: 'Provides 1 rural child with a complete academic kit (school bag, books, stationery, uniform support) for 3 months.',
    breakdown: '₹350 Books & Supplies + ₹100 Digital Portal Access + ₹50 Admin/Logistics'
  },
  {
    id: 'tier-1000',
    amount: 1000,
    title: 'Digital Learning & Smart Lab Support',
    impactText: 'Funds 1 student’s access to a solar-powered digital smart classroom, tablet learning software, and internet for 6 months.',
    breakdown: '₹700 Device & Internet Maintenance + ₹200 Teacher Training + ₹100 Curriculum Material',
    isPopular: true
  },
  {
    id: 'tier-2500',
    amount: 2500,
    title: 'Vocational Skill Certification',
    impactText: 'Sponsors a youth for a 2-month certified vocational course (Solar Tech, Electrical, Retail) with placement assistance.',
    breakdown: '₹1,800 Trainer & Practical Lab + ₹400 Certification Exam Fee + ₹300 Placement Cell'
  },
  {
    id: 'tier-5000',
    amount: 5000,
    title: 'Rural Women Micro-Enterprise Grant',
    impactText: 'Provides seed micro-funding and business mentorship to 1 woman entrepreneur or SHG weaver unit.',
    breakdown: '₹3,500 Revolving Equipment Grant + ₹1,000 Mentorship & Accounting Tool + ₹500 Market Linkage'
  }
];

export const GOVERNANCE_DOCS: GovernanceDoc[] = [
  {
    id: 'doc-1',
    title: 'Charitarth Comprehensive Report 2025',
    category: 'Annual Impact Reports',
    year: '2024-2025',
    fileSize: '5.3 MB',
    docNumber: 'CF-AR-2025-01',
    downloadUrl: '/docs/comprehensive-report.pdf',
    description: 'Complete baseline audit of field impact across 200+ villages, financial allocations, program outcomes, and auditor remarks.'
  },
  {
    id: 'doc-2',
    title: 'Executive Summary Strategic Paper',
    category: 'White Papers',
    year: '2024-2025',
    fileSize: '0.8 MB',
    docNumber: 'CF-EX-2025-01',
    downloadUrl: '/docs/executive-summary.pdf',
    description: 'Strategic summary of Charitarth Foundation pillars, village coverage, key metrics, and governance overview.'
  },
  {
    id: 'doc-3',
    title: '80G Tax Exemption Certificate',
    category: 'CSR & ESG Resources',
    year: '2025-2030',
    fileSize: '1.1 MB',
    docNumber: 'AAATC0987DF20251',
    downloadUrl: '#',
    description: 'Official approval under Section 80G(5)(vi) of Income Tax Act 1961 granting 50% tax deduction to Indian donors.'
  },
  {
    id: 'doc-4',
    title: '12A Registration Certificate',
    category: 'Government Schemes & Policy Updates',
    year: '2025-2030',
    fileSize: '1.4 MB',
    docNumber: '12A-DEL-2025-88',
    downloadUrl: '#',
    description: 'Income Tax Department registration granting charitable tax exemption status to Charitarth Foundation.'
  },
  {
    id: 'doc-5',
    title: 'CSR-1 Registration Certificate (MCA)',
    category: 'CSR & ESG Resources',
    year: '2025',
    fileSize: '0.9 MB',
    docNumber: 'CSR00078921',
    downloadUrl: '#',
    description: 'Ministry of Corporate Affairs (MCA) registration authorizing Charitarth Foundation to receive CSR grants.'
  },
  {
    id: 'doc-6',
    title: 'Societies Registration Certificate',
    category: 'Government Schemes & Policy Updates',
    year: '2025',
    fileSize: '1.5 MB',
    docNumber: 'CF-DEL/2025/001',
    downloadUrl: '#',
    description: 'Registration under Societies Registration Act XXI of 1860, Govt of NCT Delhi.'
  }
];

export const RESEARCH_PAPERS: ResearchPaper[] = [
  {
    id: 'res-1',
    title: 'State of Rural Agriculture and Household Income Analysis',
    subtitle: 'An Empirical Field Study across Rural Households in Uttar Pradesh, Bihar & Rajasthan',
    authors: ['Dr. Ananya Saxena', 'Charitarth Policy Unit'],
    publishDate: 'January 2025',
    category: 'Rural Development Studies',
    abstract: 'This extensive field report analyzes agricultural productivity, farm household earnings, land fragmentation, and seasonal underemployment. It outlines structural strategies for diversifying income sources through solar micro-grids, post-harvest sorting hubs, and local enterprise creation.',
    keyFindings: [
      '64% of rural households depend exclusively on rainfed agriculture with high vulnerability to climate anomalies.',
      'Integrating solar-powered cold hubs increases farmgate realization by 28% for smallholder farmers.',
      'Off-farm vocational skill training increases household income stability index by 3.2x.'
    ],
    readTime: '15 min read',
    pdfUrl: '/docs/rural-agriculture-report.pdf',
    coverImage: '/Photos/08BC5A20-C712-427D-AD06-21CA8BA47429.PNG',
    fullTextSections: [
      { heading: '1. Agricultural Baseline in Target Districts', body: 'Our survey across 72 villages indicates that small and marginal farmers (<2 hectares) comprise 84% of the agricultural workforce. Average net monthly income from farming alone remains under ₹6,500 per family.' },
      { heading: '2. Post-Harvest Value Addition', body: 'Losses in perishable crops reach up to 30% due to lack of local cold storage. Charitarth solar-assisted micro-warehouses allow farmers to hold produce for optimal market prices.' },
      { heading: '3. Strategic Policy Recommendations', body: 'Facilitate village-level micro-enterprises, incentivize solar irrigation, and expand digital financial literacy among women farmers through DAY-NRLM collectives.' }
    ],
    relatedPaperIds: ['res-2', 'res-3']
  },
  {
    id: 'res-2',
    title: 'The Charitarth Employment Quality Index (CEQI)',
    subtitle: 'A Quantitative Framework for Assessing Rural Livelihood Quality Beyond Nominal Wages',
    authors: ['Dr. Ananya Saxena', 'Rohan Mehta', 'Charitarth Policy Hub'],
    publishDate: 'December 2024',
    category: 'Employment & Skill Development Insights',
    abstract: 'Conventional metrics measure rural employment purely by days worked or minimum wage threshold. The CEQI introduces a 5-dimension index measuring Wage Stability, Social Security Coverage, Skill Utilization, Working Conditions, and Upward Mobility.',
    keyFindings: [
      '68% of seasonal rural workers in UP & Bihar score below 0.35 on CEQI despite earning above nominal daily minimums.',
      'Transitioning youth through 6-month green skill certifications increases their CEQI score from 0.28 to 0.74.',
      'Women in DAY-NRLM collective SHGs demonstrate 42% higher long-term financial resilience.'
    ],
    readTime: '12 min read',
    pdfUrl: '/docs/research-document.pdf',
    coverImage: '/Photos/19BAB20F-5A74-478C-B240-699D1CCB24EF.PNG',
    fullTextSections: [
      { heading: '1. Limitations of Conventional Employment Metrics', body: 'Measuring employment merely by headcount obscures severe underemployment, lack of safety, and lack of wage growth. CEQI evaluates the holistic dignity and trajectory of work.' },
      { heading: '2. The 5 Dimensions of CEQI', body: '1. Income Predictability & Multi-stream stability. 2. Health & Social Security. 3. Skill & Capacity Alignment. 4. Dignity of Physical Environment. 5. Upward Economic Mobility.' },
      { heading: '3. Field Implementation & Results', body: 'After applying CEQI to 1,200 vocational graduates, 84% achieved CEQI scores above 0.70 within 6 months of corporate or green-energy placement.' }
    ],
    relatedPaperIds: ['res-1', 'res-4']
  },
  {
    id: 'res-3',
    title: 'Comprehensive Foundation Governance & Impact Baseline Report',
    subtitle: 'Strategic Roadmap for Rural Interventions Across Education, Employment & Entrepreneurship',
    authors: ['Shri R. C. Sharma', 'Executive Board', 'Charitarth Research Unit'],
    publishDate: 'January 2025',
    category: 'Annual Impact Reports',
    abstract: 'A foundational report outlining Charitarth Foundation’s structural governance, operational methodologies, field monitoring protocols, and 5-year scaling targets across 200+ Indian villages.',
    keyFindings: [
      'Impact footprint spans 4 key states with direct reach to over 45,000 rural residents.',
      '100% of financial disbursements audited with CA certification and 80G/12A regulatory compliance.',
      'Multi-stakeholder model combining Gram Panchayats, corporate CSR, and digital mentors.'
    ],
    readTime: '18 min read',
    pdfUrl: '/docs/comprehensive-report.pdf',
    coverImage: '/Photos/1BEBE08D-B612-4FBF-BC69-CA9621905A58.PNG',
    fullTextSections: [
      { heading: '1. Foundation Vision & Operational Governance', body: 'Charitarth Foundation operates on strict transparency protocols, open audit reporting, and community-led execution.' },
      { heading: '2. Three Pillar Delivery Mechanism', body: 'Integrating Education, Employment, and Entrepreneurship into a unified village ecosystem to prevent dropouts and economic migration.' }
    ],
    relatedPaperIds: ['res-1', 'res-2']
  },
  {
    id: 'res-4',
    title: 'Executive Strategic Summary & Policy White Paper',
    subtitle: 'Key Takeaways for Donors, CSR Partners & Policy Makers',
    authors: ['Charitarth Strategy & Advisory Board'],
    publishDate: 'November 2024',
    category: 'White Papers',
    abstract: 'Executive summary detailing high-impact, scalable intervention models for corporate social responsibility (CSR) partners in rural education, solar vocational hubs, and women micro-enterprise incubators.',
    keyFindings: [
      'Sponsoring 1 solar digital smart classroom yields 89% improvement in foundational learning.',
      'CSR capital deployment efficiency reaches 94.2% direct field allocation.',
      'Replicable model for district-level rural youth skill centers.'
    ],
    readTime: '8 min read',
    pdfUrl: '/docs/executive-summary.pdf',
    coverImage: '/Photos/5C38A187-05D6-4197-AFB2-02EAD24C5943.PNG',
    fullTextSections: [
      { heading: '1. Executive Mandate', body: 'Empowering rural communities through sustainable, tech-enabled, and self-reliant grassroots programs.' },
      { heading: '2. CSR Partnership Framework', body: 'Co-creating measurable, audit-ready CSR initiatives under MCA CSR-1 guidelines.' }
    ],
    relatedPaperIds: ['res-2', 'res-3']
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: 'gal-1', title: 'Interactive Learning in Village Smart Lab', location: 'Hardoi, Uttar Pradesh', category: 'Education', image: '/Photos/IMG_3779.JPG', caption: 'Rural students learning digital skills in our solar-powered smart classroom.', date: 'February 2025' },
  { id: 'gal-2', title: 'Foundational STEM Workshop', location: 'Hardoi, UP', category: 'Education', image: '/Photos/IMG_3782.JPG', caption: 'First-generation learners experimenting with basic science kits and tablets.', date: 'January 2025' },
  { id: 'gal-3', title: 'Solar Technician Practical Training', location: 'Gaya, Bihar', category: 'Employment', image: '/Photos/08BC5A20-C712-427D-AD06-21CA8BA47429.PNG', caption: 'Trainees conducting voltage tests and solar pump controller wiring.', date: 'January 2025' },
  { id: 'gal-4', title: 'Vocational Electrical & Green Skill Hub', location: 'Gaya, Bihar', category: 'Employment', image: '/Photos/19BAB20F-5A74-478C-B240-699D1CCB24EF.PNG', caption: 'Certified youth practicing electrical safety and grid installation.', date: 'December 2024' },
  { id: 'gal-5', title: 'Prerna Women SHG Weaver Collective', location: 'Chandauli, UP', category: 'Entrepreneurship', image: '/Photos/9AC49410-99F8-4BF9-B672-2EADE756E059.PNG', caption: 'Artisan weavers inspecting high-grade handloom textiles for e-commerce.', date: 'December 2024' },
  { id: 'gal-6', title: 'Rural Micro-Enterprise Food Unit', location: 'Barmer, Rajasthan', category: 'Entrepreneurship', image: '/Photos/ACBFE7EF-AEE1-4E58-ABF7-B0C7C18B5467.PNG', caption: 'Women entrepreneurs operating hygienic food processing machinery.', date: 'November 2024' },
  { id: 'gal-7', title: 'Community Library Reading Session', location: 'Sagar, Madhya Pradesh', category: 'Education', image: '/Photos/IMG_3783.JPG', caption: 'Children gathered in the newly inaugurated village book bank.', date: 'January 2025' },
  { id: 'gal-8', title: 'Field Volunteer Mentorship Drive', location: 'Hardoi, UP', category: 'Volunteers', image: '/Photos/IMG_3815.JPG', caption: 'Charitarth volunteers guiding students during weekend career sessions.', date: 'February 2025' },
  { id: 'gal-9', title: 'Gram Panchayat Health & Awareness Camp', location: 'Gaya, Bihar', category: 'Community', image: '/Photos/IMG_3818.JPG', caption: 'Preventive health screening and nutrition consultation for mothers and children.', date: 'January 2025' },
  { id: 'gal-10', title: 'Scholarship & Merit Laptop Award', location: 'New Delhi', category: 'Events', image: '/Photos/1BEBE08D-B612-4FBF-BC69-CA9621905A58.PNG', caption: 'Felicitation of Charitarth Shiksha fellows pursuing higher engineering degrees.', date: 'December 2024' },
  { id: 'gal-11', title: 'Women Financial Literacy Workshop', location: 'Phulbani, Odisha', category: 'Entrepreneurship', image: '/Photos/C25D9240-BD5B-419C-A857-E1C4A41710A5.PNG', caption: 'Teaching UPI payments, accounting registers, and bank account opening.', date: 'November 2024' },
  { id: 'gal-12', title: 'Field Activity & Village Survey', location: 'Hardoi, UP', category: 'Volunteers', image: '/Photos/IMG_3821.JPG', caption: 'Charitarth survey team mapping village education and employment needs.', date: 'February 2025' }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    title: 'Why Rural India Needs Quality Jobs, Not Just Nominal Daily Wages',
    slug: 'quality-jobs-rural-india',
    author: 'Dr. Ananya Saxena',
    role: 'Head of Research & Strategy',
    date: 'February 12, 2025',
    category: 'Employment & Skill Development Insights',
    readTime: '6 min read',
    summary: 'An in-depth look at how the Charitarth Employment Quality Index (CEQI) is redefining rural livelihood interventions from survival wages to dignified, sustainable careers.',
    content: [
      'For decades, conventional rural development frameworks measured success by the sheer number of days of employment provided. However, a day spent performing erratic, backbreaking manual labor for survival wages does not lift a family out of generational poverty.',
      'At Charitarth Foundation, we developed the Charitarth Employment Quality Index (CEQI) to evaluate job interventions across five crucial dimensions: wage stability, social security, skill dignity, working conditions, and upward economic mobility.',
      'When we train a rural youth to become a certified solar grid technician or solar pump operator, their CEQI score jumps from 0.25 to 0.78. They earn stable monthly incomes, receive health benefits, and gain immense social respect within their panchayat.',
      'Sustainable empowerment happens when we bridge the gap between high-potential rural youth and high-value green energy market demand.'
    ],
    image: '/Photos/19BAB20F-5A74-478C-B240-699D1CCB24EF.PNG',
    featured: true,
    tableOfContents: [
      '1. The Illusion of Nominal Daily Wage Metrics',
      '2. Introducing the Charitarth Employment Quality Index (CEQI)',
      '3. Case Study: Green Energy Skill Hubs in Bihar',
      '4. Policy Roadmap for Rural Vocational Transformation'
    ],
    pullQuote: {
      text: 'Employment without skill dignity and wage predictability is merely temporary relief. True empowerment is creating structured, high-CEQI careers in the rural economy.',
      author: 'Dr. Ananya Saxena, Head of Research'
    },
    galleryImages: [
      '/Photos/08BC5A20-C712-427D-AD06-21CA8BA47429.PNG',
      '/Photos/5C38A187-05D6-4197-AFB2-02EAD24C5943.PNG'
    ],
    infographics: [
      { label: 'CEQI Score Shift', value: '0.28 → 0.76', detail: 'Average index improvement after 90-day certified green skill course' },
      { label: 'Placement Rate', value: '92%', detail: 'Trainees secured formal jobs with health & insurance coverage' },
      { label: 'Income Growth', value: '2.8x', detail: 'Monthly earnings compared to pre-training informal daily labor' }
    ],
    relatedPostIds: ['post-2', 'post-3']
  },
  {
    id: 'post-2',
    title: 'The Ripple Effect: How Educating One Rural Girl Transforms an Entire Panchayat',
    slug: 'educating-rural-girl-impact',
    author: 'Meenakshi Verma',
    role: 'Lead, Education Programs',
    date: 'January 28, 2025',
    category: 'Education Research',
    readTime: '5 min read',
    summary: 'Real field stories from Hardoi district showing how digital literacy and smart labs for adolescent girls reduce child marriage rates and boost local household economies.',
    content: [
      'When 17-year-old Sunita first walked into the Charitarth Digital Hub in Hardoi, she had never touched a computer keyboard. Her family was preparing to arrange her marriage right after 10th grade due to economic constraints.',
      'Through our 8-month intensive fellowship in digital literacy, data entry, and basic programming, Sunita gained incredible confidence. When she earned her first remote data entry contract paying ₹8,500/month, her family’s perspective shifted completely.',
      'Today, Sunita not only funds her own higher college education but also tutors 14 younger girls in her village. Child marriage rates in her block have dropped significantly as parents see tangible financial and social value in educating their daughters.'
    ],
    image: '/Photos/IMG_3779.JPG',
    featured: false,
    tableOfContents: [
      '1. Barriers to Secondary Education for Rural Girls',
      '2. Project Bodhi: Solar-Powered Smart Classrooms',
      '3. Sunita’s Story: From Dropout Vulnerability to Tech Fellow',
      '4. Community-Wide Social & Economic Shift'
    ],
    pullQuote: {
      text: 'When a girl gains digital skills and financial independence, she becomes a beacon of change for her entire village.',
      author: 'Meenakshi Verma, Education Lead'
    },
    galleryImages: [
      '/Photos/IMG_3780.JPG',
      '/Photos/IMG_3782.JPG'
    ],
    infographics: [
      { label: 'Girls Enrolled', value: '6,200+', detail: 'Adolescent girls active in digital literacy clubs' },
      { label: 'Retention Rate', value: '94%', detail: 'Class 10 completion rate in Charitarth adoption schools' }
    ],
    relatedPostIds: ['post-1', 'post-3']
  },
  {
    id: 'post-3',
    title: 'Empowering Women Self Help Groups Through ONDC & Digital Micro-Enterprise',
    slug: 'women-shg-micro-enterprise-ondc',
    author: 'Priyanka Sen',
    role: 'Lead, Women Entrepreneurship',
    date: 'January 20, 2025',
    category: 'Women Empowerment Articles',
    readTime: '7 min read',
    summary: 'How Charitarth Foundation connects tribal women weavers and food artisans in Odisha and UP directly to e-commerce buyers using UPI and ONDC.',
    content: [
      'For decades, rural women artisans produced exquisite handloom textiles and organic food products but captured less than 15% of the final retail price due to layers of village middlemen.',
      'Charitarth Foundation’s Women Entrepreneurship Incubator mobilizes women into registered Self Help Groups (SHGs), provides revolving seed micro-grants, and trains members in smartphone inventory management and QR payments.',
      'By integrating their catalog with ONDC (Open Network for Digital Commerce), weavers in Odisha now ship sarees directly to buyers in Mumbai, Bengaluru, and international markets, quadrupling their earnings.'
    ],
    image: '/Photos/9AC49410-99F8-4BF9-B672-2EADE756E059.PNG',
    featured: false,
    tableOfContents: [
      '1. The Middleman Trap in Traditional Rural Crafts',
      '2. Charitarth SHG Incubation Model',
      '3. Digital Payment & ONDC Integration',
      '4. Measuring Impact on Women Financial Agency'
    ],
    pullQuote: {
      text: 'Connecting rural women directly to digital markets turns traditional art into sustainable wealth.',
      author: 'Priyanka Sen, Livelihoods Lead'
    },
    galleryImages: [
      '/Photos/ACBFE7EF-AEE1-4E58-ABF7-B0C7C18B5467.PNG',
      '/Photos/C25D9240-BD5B-419C-A857-E1C4A41710A5.PNG'
    ],
    infographics: [
      { label: 'Women Entrepreneurs', value: '12,000+', detail: 'Active members across 450 SHGs' },
      { label: 'Avg Monthly Income', value: '₹14,500', detail: 'Up from ₹3,200 baseline pre-incubation' }
    ],
    relatedPostIds: ['post-1', 'post-2']
  },
  {
    id: 'post-4',
    title: 'Tax Deductions Under Section 80G: Maximizing Philanthropic Impact in India',
    slug: '80g-tax-deduction-guide',
    author: 'Rakesh Sharma, FCA',
    role: 'Governance & Finance Advisor',
    date: 'January 15, 2025',
    category: 'CSR & ESG Resources',
    readTime: '4 min read',
    summary: 'A clear guide for Indian individual and corporate donors on how 50% tax exemption under Section 80G works with Charitarth Foundation.',
    content: [
      'Donating to Charitarth Foundation is a tax-efficient way to make a direct, tangible difference in rural India under Section 80G of the Income Tax Act 1961.',
      'Every donation made to Charitarth Foundation receives an instant digital 80G tax receipt along with Form 10BE issued from the Income Tax e-filing portal.',
      'Whether you donate ₹1,000 or ₹1,00,000, 50% of the donated amount is eligible as a deduction from your taxable income. Our automated donor portal sends your compliance certificates directly to your email.'
    ],
    image: '/Photos/1BEBE08D-B612-4FBF-BC69-CA9621905A58.PNG',
    featured: false,
    tableOfContents: [
      '1. Understanding Section 80G Tax Exemption',
      '2. Step-by-Step Process for Claiming Deductions',
      '3. Form 10BE and Audit Transparency',
      '4. Corporate CSR Compliance under MCA CSR-1'
    ],
    pullQuote: {
      text: 'Transparency and compliance are the foundation of donor trust. 100% of donations are audited with full 80G tax receipts.',
      author: 'Rakesh Sharma, FCA'
    },
    relatedPostIds: ['post-1', 'post-2']
  },
  {
    id: 'post-5',
    title: 'Digital Literacy in First-Gen Rural Schools: A Case Study in Solar-Powered STEM Labs',
    slug: 'digital-literacy-solar-stem-labs',
    author: 'Sanjay Vishwakarma',
    role: 'UP Regional Coordinator',
    date: 'February 05, 2025',
    category: 'Digital Literacy Articles',
    readTime: '6 min read',
    summary: 'How solar-powered tablets and offline curriculum servers enable continuous STEM learning in grid-starved rural UP schools.',
    content: [
      'In remote villages where grid electricity is unreliable, traditional computer labs fail. Charitarth Foundation deployed solar-powered tablet labs equipped with local offline servers carrying interactive STEM modules in Hindi.',
      'Students access interactive math puzzles, foundational science simulations, and basic coding tutorials without relying on internet connectivity.',
      'Over 85 schools have adopted this framework, resulting in a 42% increase in STEM subject interest among rural middle school students.'
    ],
    image: '/Photos/IMG_3782.JPG',
    featured: false,
    tableOfContents: [
      '1. The Energy Deficit in Rural Classrooms',
      '2. Offline Server & Solar Micro-Grid Setup',
      '3. Teacher Upskilling and Curriculum Adaptation',
      '4. Measured Learning Outcomes'
    ],
    pullQuote: {
      text: 'Technology in rural education should not depend on power grids. Solar innovation makes digital learning uninterrupted.',
      author: 'Sanjay Vishwakarma'
    },
    relatedPostIds: ['post-2', 'post-1']
  },
  {
    id: 'post-6',
    title: 'Financial Inclusion for Rural Youth: UPI, Banking & Micro-Credit Literacy',
    slug: 'financial-inclusion-rural-youth',
    author: 'Pooja Kumari',
    role: 'Bihar Field Director',
    date: 'January 10, 2025',
    category: 'Financial Inclusion & Entrepreneurship Guides',
    readTime: '5 min read',
    summary: 'A field guide on training rural high school graduates in digital banking, zero-balance account opening, and credit safety.',
    content: [
      'Financial inclusion is the bridge between earning income and building generational wealth. Our field camps in Bihar train youth and women on zero-balance Jan Dhan bank accounts, safe UPI transactions, and avoiding predatory money lenders.',
      'By pairing financial literacy with vocational certification, Charitarth graduates save on average 35% of their monthly earnings in formal bank deposits.',
      'Over 8,500 rural youth have completed our financial safety bootcamp.'
    ],
    image: '/Photos/F9DD4FB3-B6E5-4EEC-AA67-E8B9CFB0870F.PNG',
    featured: false,
    tableOfContents: [
      '1. Rural Credit Vulnerability',
      '2. Digital Banking & Safe UPI Workshops',
      '3. Micro-Savings Habits Among Youth',
      '4. Long-Term Financial Agency'
    ],
    pullQuote: {
      text: 'Earning a wage is only half the battle; knowing how to save, invest, and protect your earnings completes self-reliance.',
      author: 'Pooja Kumari'
    },
    relatedPostIds: ['post-3', 'post-1']
  }
];

export const RECENT_DONORS: DonorRecord[] = [
  { id: 'd-1', name: 'Vikram Malhotra', amount: 5000, timeAgo: '12 mins ago', message: 'Proud to support rural solar technicians in Bihar!', tier: 'Rural Women Micro-Enterprise Grant' },
  { id: 'd-2', name: 'Ananya & Sameer Kapur', amount: 2500, timeAgo: '45 mins ago', message: 'For bright young girls in Hardoi.', tier: 'Vocational Skill Certification' },
  { id: 'd-3', name: 'Anonymous Donor', amount: 1000, timeAgo: '2 hours ago', message: 'Keep up the incredible work!', tier: 'Digital Learning Support' },
  { id: 'd-4', name: 'Dr. Ramesh Iyer', amount: 10000, timeAgo: '5 hours ago', message: 'In memory of my grandparents from rural UP.', tier: 'Custom Contribution' },
  { id: 'd-5', name: 'Neha Gupta', amount: 500, timeAgo: '8 hours ago', message: 'Small step towards a big change.', tier: 'Learning & School Kit' }
];

export const GOVERNANCE_MEMBERS = [
  {
    name: 'Shri R. C. Sharma',
    role: 'Founder & Managing Trustee',
    bio: 'Former Senior IAS Officer with 35+ years of rural governance, policy planning, and grassroots empowerment experience.',
    image: '/Photos/1BEBE08D-B612-4FBF-BC69-CA9621905A58.PNG'
  },
  {
    name: 'Dr. Sunita Deshmukh',
    role: 'Director, Education & Child Welfare',
    bio: 'Ph.D. in Rural Education Development from Delhi University, former UNESCO consultant on primary literacy in South Asia.',
    image: '/Photos/IMG_3782.JPG'
  },
  {
    name: 'Siddharth Varma',
    role: 'Director, Livelihoods & CSR Integration',
    bio: 'Ex-McKinsey & Co Director with 15 years experience structuring CSR partnerships and rural micro-finance models.',
    image: '/Photos/19BAB20F-5A74-478C-B240-699D1CCB24EF.PNG'
  }
];
