'use client';

import React from 'react';
import CircularCarousel from '@/components/reactbits/CircularCarousel';
import { MobileAutoCarousel } from '@/components/ui/MobileAutoCarousel';

const academyPhotos = [
  {
    src: '/images/academy/academy-1.png',
    alt: 'The Lawgical Academy Campus & Student Cohort',
    title: 'Academy Campus'
  },
  {
    src: '/images/academy/academy-2.png',
    alt: 'Jurisprudence & Judicial Discussion',
    title: 'Lecture Discussion'
  },
  {
    src: '/images/academy/academy-3.png',
    alt: 'Classroom Instruction Hall',
    title: 'Classroom Instruction'
  },
  {
    src: '/images/academy/academy-4.png',
    alt: 'Interactive Case Law Analysis',
    title: 'Case Law Analysis'
  },
  {
    src: '/images/academy/academy-5.png',
    alt: 'Judicial Aspirants Seminar',
    title: 'Judicial Seminar'
  },
  {
    src: '/images/academy/academy-6.png',
    alt: 'Bare Act Mechanics & Mentorship',
    title: 'Bare Act Mentorship'
  },
  {
    src: '/images/academy/academy-7.png',
    alt: 'Intensive Legal Studies',
    title: 'Legal Studies'
  },
  {
    src: '/images/academy/academy-8.png',
    alt: 'Mains Answer Writing & Guidance',
    title: 'Mains Answer Drafting'
  },
  {
    src: '/images/academy/academy-9.png',
    alt: 'Judicial Examination Preparation Cohort',
    title: 'Examination Cohort'
  },
  {
    src: '/images/academy/academy-10.png',
    alt: 'Life at The Lawgical Academy',
    title: 'Academy Life'
  },
  {
    src: '/images/academy/academy-11.jpg',
    alt: 'The Lawgical Academy Student Cohort & Campus Gathering',
    title: 'Academy Cohort'
  }
];

export const AcademyPhotosSection: React.FC = () => {
  return (
    <section className="pt-8 sm:pt-12 pb-10 sm:pb-6 bg-black text-[#FAF8F3] relative overflow-hidden">
      {/* Clean Header - Positioned Tight to Carousel */}
      <div className="w-full text-center px-4 mb-5 sm:mb-2 relative z-10">
        <span className="text-xs uppercase tracking-[0.25em] text-[#B79559] font-bold block">
          Campus &amp; Learning Culture
        </span>
        <h2 className="font-heading text-2xl sm:text-5xl font-bold text-white mt-1 leading-tight">
          Life Inside The Lawgical Academy
        </h2>
      </div>

      {/* Mobile Large Auto-Advancing Carousel (< 640px) — Moves every 1.5s */}
      <MobileAutoCarousel items={academyPhotos} intervalMs={1500} />

      {/* Tablet & Desktop Edge-to-Edge 3D Circular Carousel (>= 640px) */}
      <div className="hidden sm:block w-full h-[660px] lg:h-[800px] overflow-hidden relative -mt-8 lg:-mt-12">
        <CircularCarousel
          items={academyPhotos}
          preset="cylinder"
          cardWidth={540}
          aspectRatio={1.35}
          gap={32}
          speed={11}
          autoplay="drift"
          captions={false}
          draggable={true}
          pauseOnHover={true}
          fadeColor="#000000"
          depthFade={0.65}
          cornerRadius={14}
        />
      </div>
    </section>
  );
};
