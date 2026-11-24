import React from 'react';
import { Navbar } from '@/components/ui/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';
import { AcademyPhotosSection } from '@/components/sections/AcademyPhotosSection';
import { CoursesSection } from '@/components/sections/CoursesSection';
import { WhyChooseSection } from '@/components/sections/WhyChooseSection';
import { FounderSection } from '@/components/sections/FounderSection';
import { AchievementsSection } from '@/components/sections/AchievementsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/ui/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-black text-[#FAF8F3] overflow-x-clip">
      {/* 1. Global Navigation Bar */}
      <Navbar />

      {/* 2. Home Hero Section: Visible Main Photo, Transition Title, Catchy Line, SplitFlapText (flips once), SpecularButton */}
      <HeroSection />

      {/* 3. Large Life Inside The Lawgical Academy 3D Carousel (Edge-to-Edge) */}
      <AcademyPhotosSection />

      {/* 4. Courses Offered (Course 1, 2, 3, 4 with Reflective Cards) */}
      <CoursesSection />

      {/* 5. Why Choose The Lawgical Academy */}
      <WhyChooseSection />

      {/* 6. Results & Hall of Fame (Final Black Section with Rounded Edge) */}
      <AchievementsSection />

      {/* 7. Founder Section with 3D Physics Lanyard Badge (White Transition) */}
      <FounderSection />

      {/* 8. Contact & Admission Enquiry Form */}
      <ContactSection />

      {/* 9. Academy Global Footer */}
      <Footer />
    </main>
  );
}
