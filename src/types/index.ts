export interface NavItem {
  label: string;
  href: string;
  isButton?: boolean;
}

export interface AcademyInfo {
  name: string;
  shortTagline: string;
  heroHeadline: string;
  heroSubheadline: string;
  aboutTitle: string;
  aboutP1: string;
  aboutP2: string;
  missionStatement: string;
  visionStatement: string;
  placeholderNotice: string;
}

export interface FounderInfo {
  name: string;
  designation: string;
  qualifications: string;
  experienceYears: string;
  bioP1: string;
  bioP2: string;
  teachingPhilosophy: string;
  quote: string;
  image: string;
  isPlaceholder: boolean;
}

export interface StatItem {
  id: string;
  label: string;
  numericValue: number;
  prefix?: string;
  suffix?: string;
  placeholderNote: string;
  isPending: boolean;
}

export interface Course {
  id: string;
  title: string;
  targetExam: string;
  category: 'Judiciary' | 'Prosecution' | 'Foundation' | 'Specialized';
  badge: string;
  duration: string;
  mode: string;
  description: string;
  subjects: string[];
  features: string[];
  isPendingVerification: boolean;
}

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  isPendingVerification: boolean;
}

export interface FacultyMember {
  id: string;
  name: string;
  title: string;
  qualifications: string;
  subjectExpertise: string;
  experience: string;
  bio: string;
  image: string;
  isPlaceholder: boolean;
}

export interface ResultItem {
  id: string;
  studentName: string;
  exam: string;
  rankOrAchievement: string;
  year: string;
  storyExcerpt: string;
  image: string;
  isPendingVerification: boolean;
}

export interface Testimonial {
  id: string;
  studentName: string;
  examSelection: string;
  quote: string;
  year: string;
  avatar: string;
  isPendingVerification: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  readTime: string;
  date: string;
  author: string;
  image: string;
  slug: string;
}

export interface ContactInfo {
  phonePrimary: string;
  phoneSecondary?: string;
  whatsappNumber: string;
  whatsappMessage: string;
  emailPrimary: string;
  emailEnquiries: string;
  addressLine1: string;
  addressLine2: string;
  cityStateZip: string;
  operatingHours: string;
  googleMapsUrl: string;
  googleMapsEmbedQuery: string;
  socials: {
    youtube?: string;
    telegram?: string;
    instagram?: string;
    linkedin?: string;
    facebook?: string;
  };
  isPlaceholder: boolean;
}

