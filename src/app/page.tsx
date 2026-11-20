import React from 'react';
import { Navbar } from '@/components/ui/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';
import { AcademyPhotosSection } from '@/components/sections/AcademyPhotosSection';
import { AchievementsSection } from '@/components/sections/AchievementsSection';
import { CoursesSection } from '@/components/sections/CoursesSection';
import { FounderSection } from '@/components/sections/FounderSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { WhyChooseSection } from '@/components/sections/WhyChooseSection';
import { FacultySection } from '@/components/sections/FacultySection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { KnowledgeHubSection } from '@/components/sections/KnowledgeHubSection';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/ui/Footer';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#F7F3EA] text-[#252525]">
      {/* Global Sticky Navigation */}
      <Navbar />

      {/* 1. Hero Section: Black Faded Background, TheLawgicalAcademy transition, Catchy Line, SplitFlapText, SpecularButton */}
      <HeroSection />

      {/* 2. Academy Photo Carousel: CircularCarousel with academy photos */}
      <AcademyPhotosSection />

      {/* 3. Achievements & Rank Holders: DepthCarousel with achievement photos */}
      <AchievementsSection />

      {/* 4. Courses Offered: ReflectiveCard with Course 1, Course 2, Course 3, Course 4 */}
      <CoursesSection />

      {/* 5. Founder Section: 3D Physics Lanyard with Founder Portrait */}
      <FounderSection />

      {/* 6. Academy Profile & Institutional Philosophy */}
      <AboutSection />

      {/* 7. Why Choose The Lawgical Academy */}
      <WhyChooseSection />

      {/* 8. Faculty & Judicial Mentorship */}
      <FacultySection />

      {/* 9. Testimonials & Student Reviews */}
      <TestimonialsSection />

      {/* 10. Knowledge Hub & Analysis */}
      <KnowledgeHubSection />

      {/* 11. Intermediate Admissions Banner */}
      <CtaBanner />

      {/* 12. Contact, Location & Admission Enquiry Form */}
      <ContactSection />

      {/* 13. Academy Footer (VLS Structure) */}
      <Footer />

      {/* 14. Floating WhatsApp Chat Widget */}
      <WhatsAppButton />
    </main>
  );
}
