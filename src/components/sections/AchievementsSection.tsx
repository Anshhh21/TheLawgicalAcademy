'use client';

import React from 'react';
import DepthCarousel from '@/components/reactbits/DepthCarousel';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PlaceholderBadge } from '@/components/ui/PlaceholderBadge';
import { Award, Trophy } from 'lucide-react';

const achievementItems = [
  {
    image: '/images/ach/ach-1.png',
    alt: 'Judicial Examination Felicitation Ceremony & Rank Qualifiers'
  },
  {
    image: '/images/ach/ach-2.png',
    alt: 'Merit List Rank Holders — Civil Judge Examination'
  },
  {
    image: '/images/ach/ach-3.png',
    alt: 'ADPO & Public Prosecution Successful Candidates'
  }
];

export const AchievementsSection: React.FC = () => {
  return (
    <section id="results" className="py-20 sm:py-28 bg-[#14243A] text-[#FAF8F3] relative overflow-hidden border-t border-[#B79559]/20">
      {/* Decorative Golden Highlights */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-[#B79559]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#1C3352]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0E1A2B] border border-[#B79559]/40 text-[#D8C294] text-xs uppercase tracking-widest font-semibold mb-4">
            <Trophy className="w-3.5 h-3.5 text-[#B79559]" />
            <span>Legacy of Judicial Selections</span>
          </div>

          <SectionHeading
            eyebrow="Hall of Fame & Rank Holders"
            title="Celebrating Our Judicial Champions"
            subtitle="Honouring the dedication and relentless pursuit of excellence that propelled our students into the judiciary and public prosecution services."
            alignment="center"
            theme="dark"
          />

          <div className="max-w-md mx-auto mb-8 text-center">
            <PlaceholderBadge
              label="Verified Student Rank Holder Photographs & Testimonials Pending Official Release"
              variant="subtle"
              className="bg-[#0E1A2B] text-[#D8C294] border-[#B79559]/30 text-xs py-1 px-3"
            />
          </div>
        </div>

        {/* 3D Depth Carousel Container */}
        <div className="relative w-full py-8 flex flex-col items-center justify-center">
          <DepthCarousel
            items={achievementItems}
            cardWidth={330}
            cardHeight={440}
            radius={16}
            tint="#0E1A2B"
            depth={240}
            spread={100}
            tilt={18}
            visibleCards={3}
            autoplay={true}
            autoplayDelay={4000}
            showControls={true}
            showIndicators={true}
            className="shadow-2xl"
          />
        </div>

        {/* Highlights banner below carousel */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="p-5 rounded-lg bg-[#0E1A2B]/80 border border-[#B79559]/30 text-center">
            <Award className="w-6 h-6 text-[#B79559] mx-auto mb-2" />
            <h4 className="font-heading text-lg font-bold text-[#D8C294]">Civil Judge Selections</h4>
            <p className="text-xs text-[#FAF8F3]/70 mt-1">High conversion in Preliminary, Mains, and Interview stages across state judicial services.</p>
          </div>
          <div className="p-5 rounded-lg bg-[#0E1A2B]/80 border border-[#B79559]/30 text-center">
            <Award className="w-6 h-6 text-[#B79559] mx-auto mb-2" />
            <h4 className="font-heading text-lg font-bold text-[#D8C294]">ADPO &amp; Prosecution Ranks</h4>
            <p className="text-xs text-[#FAF8F3]/70 mt-1">Specialized coaching delivering top-tier ranks in Assistant District Public Prosecution Officer exams.</p>
          </div>
          <div className="p-5 rounded-lg bg-[#0E1A2B]/80 border border-[#B79559]/30 text-center">
            <Award className="w-6 h-6 text-[#B79559] mx-auto mb-2" />
            <h4 className="font-heading text-lg font-bold text-[#D8C294]">Mains Answer Distinction</h4>
            <p className="text-xs text-[#FAF8F3]/70 mt-1">Structured judgment writing and clause analysis enabling consistent high scores in Mains examination.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

