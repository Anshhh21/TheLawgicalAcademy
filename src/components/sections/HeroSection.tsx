'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Scale, ChevronDown, Sparkles } from 'lucide-react';
import SplitFlapText from '@/components/reactbits/SplitFlapText';
import SpecularButton from '@/components/reactbits/SpecularButton';
import { PlaceholderBadge } from '@/components/ui/PlaceholderBadge';

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
      {/* Background Image with Black Faded Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/main/hero-main.png"
          alt="The Lawgical Academy Main Campus"
          fill
          priority
          className="object-cover object-center filter brightness-[0.45] contrast-110 scale-105"
        />
        {/* Layered Black & Navy Fades */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/75 to-[#0A1320]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/50 to-black/95" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center justify-center space-y-8">
        
        {/* Academy Emblem & Top Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-[#B79559]/40 text-[#D8C294] text-xs uppercase tracking-[0.25em] font-medium shadow-2xl"
        >
          <Scale className="w-3.5 h-3.5 text-[#B79559]" />
          <span>India&apos;s Judicial &amp; Prosecution Academy</span>
          <span className="w-1 h-1 rounded-full bg-[#B79559]" />
          <span className="text-white/60">Session 2026–27</span>
        </motion.div>

        {/* Coaching Name with Grand Transition Typography */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-2 text-center"
        >
          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white drop-shadow-[0_10px_35px_rgba(0,0,0,0.8)]">
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
          className="max-w-3xl mx-auto space-y-3"
        >
          <p className="font-heading text-lg sm:text-2xl md:text-3xl text-[#E8DCC4] font-medium leading-relaxed tracking-wide">
            Architects of Judicial Excellence
          </p>
          <p className="text-sm sm:text-base md:text-lg text-white/80 font-light leading-relaxed max-w-2xl mx-auto">
            Premier Mentorship for <span className="text-[#D8C294] font-semibold">Civil Judge (Junior Division)</span> &amp;{' '}
            <span className="text-[#D8C294] font-semibold">ADPO / Public Prosecution</span> Aspirants in India. Dissecting bare acts, procedural statutes, and judgment drafting with clinical precision.
          </p>
        </motion.div>

        {/* Split Flap Numerical Counter Board */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="w-full pt-4 pb-2"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {/* Split Flap 1: Students Taught */}
            <div className="flex flex-col items-center justify-center p-5 sm:p-6 rounded-xl bg-black/65 backdrop-blur-xl border border-[#B79559]/35 shadow-[0_8px_32px_rgba(0,0,0,0.6)] group hover:border-[#B79559]/70 transition-colors">
              <div className="flex items-center gap-2 mb-3 text-center">
                <Sparkles className="w-4 h-4 text-[#B79559]" />
                <span className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#D8C294] font-bold">
                  Aspirants Mentored
                </span>
              </div>
              <div className="overflow-x-auto w-full flex justify-center py-2">
                <SplitFlapText
                  words={['1500+ STUDENTS', 'ACADEMIC RIGOUR', 'TOP MENTORSHIP']}
                  fontSize={26}
                  tileRadius={6}
                  gap={4}
                  flipsPerChar={6}
                  cycleDelay={3200}
                  tileColor="#14243A"
                  textColor="#D8C294"
                  depth={0.5}
                  padTo={14}
                  align="center"
                />
              </div>
              <p className="text-[11px] text-white/50 uppercase tracking-widest mt-2 font-medium">
                [STUDENTS TAUGHT — STATS PREVIEW]
              </p>
            </div>

            {/* Split Flap 2: Rank Holders */}
            <div className="flex flex-col items-center justify-center p-5 sm:p-6 rounded-xl bg-black/65 backdrop-blur-xl border border-[#B79559]/35 shadow-[0_8px_32px_rgba(0,0,0,0.6)] group hover:border-[#B79559]/70 transition-colors">
              <div className="flex items-center gap-2 mb-3 text-center">
                <Scale className="w-4 h-4 text-[#B79559]" />
                <span className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#D8C294] font-bold">
                  Judicial &amp; ADPO Selections
                </span>
              </div>
              <div className="overflow-x-auto w-full flex justify-center py-2">
                <SplitFlapText
                  words={['200+ RANKERS', 'CIVIL JUDGES', 'ADPO SELECTIONS']}
                  fontSize={26}
                  tileRadius={6}
                  gap={4}
                  flipsPerChar={6}
                  cycleDelay={3200}
                  tileColor="#14243A"
                  textColor="#D8C294"
                  depth={0.5}
                  padTo={14}
                  align="center"
                />
              </div>
              <p className="text-[11px] text-white/50 uppercase tracking-widest mt-2 font-medium">
                [RANK HOLDERS — DATA REQUIRED]
              </p>
            </div>
          </div>
        </motion.div>

        {/* SpecularButton Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="pt-4 flex flex-col items-center space-y-4"
        >
          <SpecularButton
            size="large"
            radius={8}
            tint="#B79559"
            tintOpacity={0.25}
            textColor="#FAF8F3"
            onClick={handleScrollToCourses}
            className="shadow-2xl shadow-[#B79559]/20 font-heading tracking-widest uppercase text-sm font-bold px-8 py-3.5 hover:scale-105 transition-transform"
          >
            Explore Courses
          </SpecularButton>

          <div className="pt-2">
            <PlaceholderBadge
              label="Official Institutional Claims & Verification Pending Final Submission"
              variant="subtle"
              className="bg-black/60 text-[#D8C294] border-[#B79559]/30 text-[10px]"
            />
          </div>
        </motion.div>

      </div>

      {/* Subtle Scroll Down Prompt */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-white/40 cursor-pointer hover:text-[#D8C294] transition-colors"
        onClick={handleScrollToCourses}
      >
        <span className="text-[10px] uppercase tracking-widest font-semibold mb-1">Scroll</span>
        <ChevronDown className="w-4 h-4 text-[#B79559]" />
      </motion.div>
    </section>
  );
};
