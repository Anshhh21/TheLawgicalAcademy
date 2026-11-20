'use client';

import React from 'react';
import CircularCarousel from '@/components/reactbits/CircularCarousel';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PlaceholderBadge } from '@/components/ui/PlaceholderBadge';

const academyPhotos = [
  {
    src: '/images/academy/academy-1.png',
    alt: 'Classroom Lecture & Jurisprudence Discussion',
    title: 'Interactive Lecture Hall',
    subtitle: 'Deep-dive analytical study of procedural law'
  },
  {
    src: '/images/academy/academy-2.png',
    alt: 'Judicial Aspirants Seminar',
    title: 'Mains Answer Crafting',
    subtitle: 'Practical judgment framing and critique'
  },
  {
    src: '/images/academy/academy-3.png',
    alt: 'Bare Act Analytical Session',
    title: 'Bare Act Dissection',
    subtitle: 'High-yield conceptual clarity & sub-clause mastery'
  },
  {
    src: '/images/academy/academy-4.png',
    alt: 'Classroom Mentorship Session',
    title: 'Civil Judge Mentorship',
    subtitle: 'Direct personalized guidance with lead mentors'
  },
  {
    src: '/images/academy/academy-5.png',
    alt: 'Legal Studies & Research',
    title: 'Comprehensive Study Hub',
    subtitle: 'Curated legal materials & landmark precedents'
  },
  {
    src: '/images/academy/academy-6.png',
    alt: 'ADPO & Prosecution Batch',
    title: 'ADPO Prosecution Focus',
    subtitle: 'Criminal code mastery & courtroom procedure'
  },
  {
    src: '/images/academy/academy-7.png',
    alt: 'Academy Life & Community',
    title: 'Life at The Lawgical Academy',
    subtitle: 'Fostering excellence and judicial discipline'
  }
];

export const AcademyPhotosSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-[#0A1320] text-[#FAF8F3] relative overflow-hidden border-t border-[#B79559]/20">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#B79559]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Campus & Learning Culture"
          title="Life Inside The Lawgical Academy"
          subtitle="Explore our vibrant classrooms, high-intensity discussion halls, and academic environments designed to cultivate judicial thinking."
          alignment="center"
          theme="dark"
        />

        <div className="max-w-md mx-auto mb-8 text-center">
          <PlaceholderBadge
            label="Real Classroom Photographs from Academy Archive"
            variant="subtle"
            className="bg-[#14243A] text-[#D8C294] border-[#B79559]/30 text-xs py-1 px-3"
          />
        </div>

        {/* 3D Circular Carousel Container */}
        <div className="relative w-full h-[520px] rounded-2xl bg-[#08101A]/60 border border-[#B79559]/25 shadow-2xl overflow-hidden backdrop-blur-sm">
          <CircularCarousel
            items={academyPhotos}
            preset="cylinder"
            cardWidth={260}
            aspectRatio={1.35}
            gap={30}
            speed={12}
            autoplay="drift"
            captions={true}
            draggable={true}
            pauseOnHover={true}
            fadeColor="#08101A"
            depthFade={0.65}
            cornerRadius={12}
          />
        </div>

        <p className="text-center text-xs text-[#FAF8F3]/50 mt-4 tracking-wider uppercase font-medium">
          Drag horizontally or click cards to rotate through academy gallery
        </p>
      </div>
    </section>
  );
};

