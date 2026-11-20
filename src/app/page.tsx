import React from 'react';
import { Navbar } from '@/components/ui/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { CoursesSection } from '@/components/sections/CoursesSection';
import { WhyChooseSection } from '@/components/sections/WhyChooseSection';
import { FounderSection } from '@/components/sections/FounderSection';
import { FacultySection } from '@/components/sections/FacultySection';
import { ResultsSection } from '@/components/sections/ResultsSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { KnowledgeHubSection } from '@/components/sections/KnowledgeHubSection';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/ui/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#F7F3EA] text-[#252525]">
      {/* Global Sticky Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Animated Numerical Statistics & Benchmarks */}
      <StatsSection />

      {/* Academy Introduction & Institutional Profile */}
      <AboutSection />

      {/* Courses & Examination Batches with Reflective Glass Cards */}
      <CoursesSection />

      {/* Why Choose The Lawgical Academy Feature Cards */}
      <WhyChooseSection />

      {/* Founder Spotlight & Teaching Philosophy */}
      <FounderSection />

      {/* Faculty & Judicial Mentorship Team */}
      <FacultySection />

      {/* Results & Student Achievement Showcase */}
      <ResultsSection />

      {/* Testimonials Interactive Carousel */}
      <TestimonialsSection />

      {/* Knowledge Hub & Educational Analysis */}
      <KnowledgeHubSection />

      {/* Intermediate Admissions Call To Action */}
      <CtaBanner />

      {/* Contact, Location & Admission Enquiry Form */}
      <ContactSection />

      {/* Academy Global Footer */}
      <Footer />
    </main>
  );
}
