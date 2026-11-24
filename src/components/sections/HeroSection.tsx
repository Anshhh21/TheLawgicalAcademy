'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import SplitFlapText from '@/components/reactbits/SplitFlapText';
import SpecularButton from '@/components/reactbits/SpecularButton';

export const HeroSection: React.FC = () => {
  const handleScrollToCourses = () => {
    const el = document.getElementById('courses');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 pt-24 pb-16 overflow-hidden bg-black"
    >
      {/* Background Image with Balanced Faded Overlay (Clearly Visible) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Image
          src="/images/main/thelawgical-hero.jpg"
          alt="The Lawgical Academy Main Campus"
          fill
          priority
          className="object-cover object-center filter brightness-[0.68] contrast-105 saturate-[0.85] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_20%,_rgba(0,0,0,0.8)_95%)]" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center justify-center space-y-7 sm:space-y-9">
        {/* Official Academy Crest Blended Cleanly */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-black/85 border border-[#B79559]/50 shadow-[0_0_30px_rgba(183,149,89,0.25)] overflow-hidden flex items-center justify-center p-1.5"
        >
          <Image
            src="/images/logo/academy-crest.jpg"
            alt="The Lawgical Academy Emblem"
            width={160}
            height={132}
            priority
            className="w-full h-full object-contain mix-blend-lighten"
          />
        </motion.div>

        {/* Coaching Name with Grand Transition Typography (Fits cleanly on all mobile widths) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-3 text-center w-full max-w-full px-1"
        >
          <h1 className="font-heading text-[clamp(1.35rem,5.8vw,2.5rem)] sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white drop-shadow-[0_12px_40px_rgba(0,0,0,0.95)] break-words">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-[#FAF8F3] to-[#D8C294]">
              TheLawgicalAcademy
            </span>
          </h1>
        </motion.div>

        {/* Catchy Line for Law Coaching in India */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto px-2"
        >
          <p className="font-heading text-base sm:text-3xl md:text-4xl text-[#E8DCC4] font-medium leading-relaxed tracking-wide drop-shadow-md">
            Where Legal Knowledge Meets Judicial Aspirations
          </p>
        </motion.div>

        {/* Split Flap Numerical Counter Board - Flips ONCE on load with verified numbers */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="w-full pt-1 pb-1"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto w-full">
            {/* Split Flap 1: Students Taught */}
            <div className="flex flex-col items-center justify-center p-5 sm:p-7 rounded-xl bg-black/85 backdrop-blur-xl border border-[#B79559]/40 shadow-[0_10px_35px_rgba(0,0,0,0.85)] group hover:border-[#B79559]/80 transition-colors overflow-hidden">
              <div className="mb-3 text-center">
                <span className="text-xs sm:text-sm uppercase tracking-[0.25em] text-[#D8C294] font-bold">
                  Students Mentored Since 2019
                </span>
              </div>
              <div className="w-full flex justify-center py-2 overflow-hidden">
                <SplitFlapText
                  words={['400+ STUDENTS']}
                  loop={false}
                  intro={true}
                  fontSize={20}
                  tileRadius={4}
                  gap={3}
                  flipsPerChar={5}
                  flipDuration={0.09}
                  tileColor="#0D0D0D"
                  textColor="#D8C294"
                  depth={0.5}
                  padTo={14}
                  align="center"
                />
              </div>
            </div>

            {/* Split Flap 2: Selections */}
            <div className="flex flex-col items-center justify-center p-5 sm:p-7 rounded-xl bg-black/85 backdrop-blur-xl border border-[#B79559]/40 shadow-[0_10px_35px_rgba(0,0,0,0.85)] group hover:border-[#B79559]/80 transition-colors overflow-hidden">
              <div className="mb-3 text-center">
                <span className="text-xs sm:text-sm uppercase tracking-[0.25em] text-[#D8C294] font-bold">
                  Selections in Last 5 Years
                </span>
              </div>
              <div className="w-full flex justify-center py-2 overflow-hidden">
                <SplitFlapText
                  words={['25+ SELECTIONS']}
                  loop={false}
                  intro={true}
                  fontSize={20}
                  tileRadius={4}
                  gap={3}
                  flipsPerChar={5}
                  flipDuration={0.09}
                  tileColor="#0D0D0D"
                  textColor="#D8C294"
                  depth={0.5}
                  padTo={14}
                  align="center"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* SpecularButton Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="pt-1 flex flex-col items-center space-y-4"
        >
          <SpecularButton
            size="large"
            radius={8}
            tint="#B79559"
            tintOpacity={0.25}
            textColor="#FAF8F3"
            onClick={handleScrollToCourses}
            className="shadow-2xl shadow-[#B79559]/20 font-heading tracking-widest uppercase text-sm font-bold px-9 py-4 hover:scale-105 transition-transform cursor-pointer"
          >
            Explore Courses
          </SpecularButton>
        </motion.div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-white/50 cursor-pointer hover:text-[#D8C294] transition-colors"
        onClick={handleScrollToCourses}
      >
        <span className="text-[10px] uppercase tracking-widest font-semibold mb-1">Scroll</span>
        <ChevronDown className="w-4 h-4 text-[#B79559]" />
      </motion.div>
    </section>
  );
};
