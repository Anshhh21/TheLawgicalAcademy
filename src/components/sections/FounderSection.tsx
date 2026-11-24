'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, GraduationCap, User, Compass } from 'lucide-react';
import { founderData } from '@/data/founderData';
import { Button } from '@/components/ui/Button';
import Lanyard from '@/components/reactbits/Lanyard';

export const FounderSection: React.FC = () => {
  return (
    <section
      id="founder"
      className="relative z-10 -mt-10 sm:-mt-14 pt-8 sm:pt-14 pb-20 sm:pb-28 bg-[#FAF8F3] text-[#14243A] overflow-visible"
    >
      {/* Subtle Warm Glow for Depth */}
      <div className="absolute top-1/3 -right-24 w-96 h-96 bg-[#B79559]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: ID Card Hanging Directly from the Upper Black Background */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col items-center relative z-30 -mt-6 sm:-mt-10 lg:-mt-12"
          >
            {/* 3D Lanyard Hanging Freely from the Black Background Above */}
            <div className="w-full h-[580px] relative">
              <Lanyard
                frontImage="/images/founder/founder-photo.png"
                backImage="/images/founder/founder-photo.png"
                finish="matte"
                cornerRadius={0.12}
                anchor="center"
                cardColor="#000000"
                strapColor="#222222"
                strapWidth={0.75}
                strapLength={0.75}
                metal="silver"
                interactive={true}
                size={0.6}
                gravity={0.9}
                damping={0.45}
                elasticity={0.45}
              />
            </div>

            {/* Black Identifier Pill - Placed cleanly BELOW the ID card */}
            <div className="w-full max-w-sm mt-3 bg-black text-[#FAF8F3] p-4 rounded-xl border border-[#B79559]/40 shadow-2xl flex items-center justify-between">
              <div>
                <h4 className="font-heading text-sm font-bold text-[#D8C294]">
                  {founderData.name}
                </h4>
                <p className="text-[11px] text-white/70 font-medium">
                  Founder &amp; Director
                </p>
              </div>
              <Award className="w-5 h-5 text-[#B79559] shrink-0" />
            </div>
          </motion.div>

          {/* Right Column: Founder Name, Qualifications, Experience & Vision Alongside Lanyard */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7 space-y-5 pt-2 sm:pt-6 lg:pt-12"
          >
            <div>
              <h3 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-[#14243A] tracking-tight">
                {founderData.name}
              </h3>
              <p className="text-xs sm:text-sm text-[#8B6E38] font-bold mt-2 uppercase tracking-wider">
                {founderData.designation}
              </p>
            </div>

            {/* Qualifications & Specialisation Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="p-5 rounded-xl bg-white border border-neutral-200/90 shadow-sm flex flex-col justify-start">
                <div className="flex items-center gap-2 text-[#B79559] mb-2">
                  <GraduationCap className="w-4 h-4 shrink-0" />
                  <span className="text-xs uppercase tracking-wider font-bold text-[#14243A]">
                    Qualifications
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-medium">
                  {founderData.qualifications}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-neutral-200/90 shadow-sm flex flex-col justify-start">
                <div className="flex items-center gap-2 text-[#B79559] mb-2">
                  <BookOpen className="w-4 h-4 shrink-0" />
                  <span className="text-xs uppercase tracking-wider font-bold text-[#14243A]">
                    Experience &amp; Focus
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-medium">
                  {founderData.experienceYears}
                </p>
              </div>
            </div>

            {/* About Founder & Vision */}
            <div className="p-5 sm:p-6 rounded-xl bg-white border border-neutral-200/90 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-[#B79559]">
                <User className="w-4 h-4 shrink-0" />
                <span className="text-xs uppercase tracking-wider font-bold text-[#14243A]">
                  About Founder
                </span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                {founderData.bioP1}
              </p>
              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                {founderData.bioP2}
              </p>

              <div className="pt-3 mt-3 border-t border-neutral-100 flex items-start gap-2.5">
                <Compass className="w-4 h-4 text-[#B79559] mt-0.5 shrink-0" />
                <p className="text-xs text-[#14243A] font-medium leading-relaxed">
                  <span className="text-[#8B6E38] font-bold uppercase tracking-wider mr-1.5">
                    Vision:
                  </span>
                  {founderData.teachingPhilosophy}
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-1 flex flex-wrap items-center gap-4">
              <Button href="#contact" variant="gold" size="md">
                Schedule Mentorship Session
              </Button>
              <Button
                href="#courses"
                variant="outline"
                size="md"
                className="border-[#14243A]/40 text-[#14243A] hover:bg-[#14243A]/5 font-semibold"
              >
                Explore Batches
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
