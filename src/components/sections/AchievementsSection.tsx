'use client';

import React from 'react';
import Image from 'next/image';
import CircularCarousel from '@/components/reactbits/CircularCarousel';

const achievementPhotos = [
  {
    src: '/images/ach/ach-1.png',
    alt: 'Founder Ankur Samadhiya Receiving Academic Felicitation',
    title: 'Academic Excellence Award'
  },
  {
    src: '/images/ach/ach-2.png',
    alt: 'Honour for Contribution to Legal Education',
    title: 'Legal Education Honour'
  },
  {
    src: '/images/ach/ach-3.png',
    alt: 'Founder Felicitation Ceremony',
    title: 'Founder Felicitation'
  },
  {
    src: '/images/ach/ach-4.png',
    alt: 'Institutional Recognition & Award Presentation',
    title: 'Institutional Recognition'
  },
  {
    src: '/images/ach/ach-5.png',
    alt: 'Distinguished Legal Mentor Honour',
    title: 'Distinguished Mentor'
  },
  {
    src: '/images/ach/ach-6.png',
    alt: 'Award Ceremony & Academic Accolade',
    title: 'Academic Accolade'
  }
];

export const AchievementsSection: React.FC = () => {
  return (
    <section id="awards" className="pt-10 sm:pt-14 pb-16 sm:pb-28 bg-black text-[#FAF8F3] relative z-20 rounded-b-[32px] sm:rounded-b-[64px] border-t border-[#B79559]/20 shadow-[0_25px_50px_rgba(0,0,0,0.85)] overflow-hidden">
      {/* Clean Minimal Header with Golden Eyebrow Tight to Carousel */}
      <div className="w-full text-center px-4 mb-5 sm:mb-2 relative z-10">
        <span className="text-xs uppercase tracking-[0.25em] text-[#B79559] font-bold block mb-1">
          Founder &amp; Academy Recognition
        </span>
        <h2 className="font-heading text-2xl sm:text-5xl font-bold text-white tracking-tight">
          Awards &amp; Accolades
        </h2>
      </div>

      {/* Mobile Large Swipeable Showcase (< 640px) — Zero empty black voids */}
      <div className="sm:hidden w-full overflow-x-auto snap-x snap-mandatory flex gap-4 px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {achievementPhotos.map((item, idx) => (
          <div
            key={idx}
            className="snap-center shrink-0 w-[82vw] aspect-[4/3] rounded-xl overflow-hidden border border-[#B79559]/30 bg-neutral-950 shadow-xl"
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={800}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Tablet & Desktop Edge-to-Edge 3D Circular Carousel (>= 640px) */}
      <div className="hidden sm:block w-full h-[680px] lg:h-[820px] overflow-hidden relative -mt-8 lg:-mt-12">
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
