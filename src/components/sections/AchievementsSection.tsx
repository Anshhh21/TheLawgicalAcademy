'use client';

import React from 'react';
import CircularCarousel from '@/components/reactbits/CircularCarousel';

const achievementPhotos = [
  {
    src: '/images/ach/ach-1.png',
    alt: 'Judicial Examination Felicitation & Rank Qualifiers',
    title: 'Judicial Selections'
  },
  {
    src: '/images/ach/ach-2.png',
    alt: 'Merit List Rank Holders — Civil Judge Examination',
    title: 'Merit Qualifiers'
  },
  {
    src: '/images/ach/ach-3.png',
    alt: 'ADPO & Public Prosecution Successful Candidates',
    title: 'Prosecution Ranks'
  },
  {
    src: '/images/ach/ach-4.png',
    alt: 'Judicial Examination Rank Holder Felicitation',
    title: 'Rank Felicitation'
  },
  {
    src: '/images/ach/ach-5.png',
    alt: 'State Judicial Services Qualifiers',
    title: 'Judicial Officers'
  },
  {
    src: '/images/ach/ach-6.png',
    alt: 'Celebrating Student Success & Ranks',
    title: 'Success Celebration'
  }
];

export const AchievementsSection: React.FC = () => {
  return (
    <section id="results" className="pt-10 sm:pt-14 pb-20 sm:pb-28 bg-black text-[#FAF8F3] relative z-20 rounded-b-[40px] sm:rounded-b-[64px] border-t border-[#B79559]/20 shadow-[0_25px_50px_rgba(0,0,0,0.85)] overflow-hidden">
      {/* Clean Minimal Header with Golden Eyebrow Tight to Carousel */}
      <div className="w-full text-center px-4 mb-1 sm:mb-2 relative z-10">
        <span className="text-xs uppercase tracking-[0.25em] text-[#B79559] font-bold block mb-1">
          Selections &amp; Achievements
        </span>
        <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white tracking-tight">
          Hall of Fame
        </h2>
      </div>

      {/* Prominent Edge-to-Edge 3D Circular Carousel Positioned Tight Below Heading */}
      <div className="w-full h-[640px] sm:h-[760px] lg:h-[820px] overflow-hidden relative -mt-4 sm:-mt-8 lg:-mt-12">
        <CircularCarousel
          items={achievementPhotos}
          preset="cylinder"
          cardWidth={520}
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
