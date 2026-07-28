export interface PillarDetail {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  color: string;
  badge: string;
  description: string;
  keyInitiatives: string[];
  metrics: { label: string; value: string }[];
  quote: string;
  image: string;
  caseStudyTitle: string;
  caseStudySnippet: string;
}

export interface ImpactMetric {
  id: string;
  value: number;
  suffix: string;
  label: string;
  category: 'all' | 'education' | 'employment' | 'entrepreneurship';
  description: string;
  icon: string;
}

export interface StateData {
  id: string;
  name: string;
  code: string;
  coordinates: { x: number; y: number }; // SVG percentage placement
  districtsCovered: number;
  villagesCount: number;
  beneficiaries: string;
  keyPrograms: string[];
  localCoordinator: { name: string; phone: string; email: string };
  featuredStory: { title: string; person: string; quote: string; image: string };
  highlights: string[];
}

export interface Story {
  id: string;
  name: string;
  age: number;
  village: string;
  state: string;
  pillar: 'Education' | 'Employment' | 'Entrepreneurship';
  title: string;
  quote: string;
  before: string;
  journey: string;
  after: string;
  imageBefore: string;
  imageAfter: string;
  videoUrl?: string;
  impactTag: string;
}

export interface VolunteerRole {
  id: string;
  title: string;
  category: string;
  commitment: string;
  location: string;
  icon: string;
  description: string;
  skillsNeeded: string[];
  impactSummary: string;
}

export interface DonationTier {
  id: string;
  amount: number;
  title: string;
  impactText: string;
  breakdown: string;
  isPopular?: boolean;
}

export interface GovernanceDoc {
  id: string;
  title: string;
  category: string;
  year: string;
  fileSize: string;
  docNumber: string;
  downloadUrl: string;
  description: string;
}

export interface ResearchPaper {
  id: string;
  title: string;
  subtitle: string;
  authors: string[];
  publishDate: string;
  category: string;
  abstract: string;
  keyFindings: string[];
  readTime: string;
  pdfUrl: string;
  coverImage?: string;
  fullTextSections?: { heading: string; body: string }[];
  relatedPaperIds?: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  location: string;
  category: 'Education' | 'Employment' | 'Entrepreneurship' | 'Community' | 'Events' | 'Volunteers';
  image: string;
  caption: string;
  date: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  author: string;
  role: string;
  date: string;
  category: string;
  readTime: string;
  summary: string;
  content: string[];
  image: string;
  featured?: boolean;
  tableOfContents?: string[];
  pullQuote?: { text: string; author: string };
  galleryImages?: string[];
  infographics?: { label: string; value: string; detail: string }[];
  relatedPostIds?: string[];
}

export interface LogoStoryItem {
  id: string;
  elementName: string;
  symbolism: string;
  description: string;
  iconName: string;
  color: string;
}

export interface MottoDimension {
  id: string;
  stakeholder: string;
  role: string;
  impactQuote: string;
  icon: string;
  color: string;
}

export interface DonorRecord {
  id: string;
  name: string;
  amount: number;
  timeAgo: string;
  message?: string;
  tier: string;
  isAnonymous?: boolean;
}
