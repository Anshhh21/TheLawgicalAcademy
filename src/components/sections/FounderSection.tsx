'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Award, BookOpen, GraduationCap, Sparkles } from 'lucide-react';
import { founderData } from '@/data/founderData';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { PlaceholderBadge } from '@/components/ui/PlaceholderBadge';
import Lanyard from '@/components/reactbits/Lanyard';

export const FounderSection: React.FC = () => {
  return (
    <section id="founder" className="py-20 sm:py-28 bg-[#14243A] text-[#FAF8F3] relative overflow-hidden border-t border-[#B79559]/20">
      {/* Decorative Golden Glow */}
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#B79559]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          eyebrow="Academic Leadership"
          title="Founder & Lead Judicial Mentor"
          subtitle="Pioneering an analytical approach to statutory interpretation, transforming judicial examination preparation into an exact science."
          alignment="center"
          theme="dark"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: 3D Interactive Lanyard Badge with Founder Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Golden Border Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-b from-[#B79559]/40 via-transparent to-[#B79559]/20 rounded-2xl blur-xs" />
              
              {/* 3D Lanyard Container */}
              <div className="relative rounded-2xl bg-[#08101A] border border-[#B79559]/40 overflow-hidden shadow-2xl h-[560px] flex flex-col items-center justify-center">
                {/* Top Corner Plaque */}
                <div className="absolute top-4 left-4 z-20 bg-[#0E1A2B]/90 backdrop-blur-md px-3 py-1.5 rounded-sm border border-[#B79559]/40">
                  <span className="text-[10px] text-[#B79559] uppercase tracking-widest font-bold flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3" />
                    Interactive 3D Badge
                  </span>
                </div>

                {/* 3D Interactive Lanyard Physics Component */}
                <Lanyard
                  frontImage="/images/founder/founder-photo.png"
                  backImage="/images/founder/founder-photo.png"
                  finish="matte"
                  cornerRadius={0.12}
                  anchor="center"
                  cardColor="#14243A"
                  strapColor="#B79559"
                  strapWidth={0.7}
                  metal="gold"
                  interactive={true}
                  size={0.65}
                  gravity={0.9}
                  damping={0.45}
                  elasticity={0.45}
                />

                {/* Bottom Instruction Bar */}
                <div className="absolute bottom-4 left-4 right-4 z-20 bg-[#0E1A2B]/90 backdrop-blur-md p-3 rounded-lg border border-[#B79559]/30 flex items-center justify-between">
                  <div>
                    <h4 className="font-heading text-sm font-bold text-[#D8C294]">
                      {founderData.name}
                    </h4>
                    <p className="text-[11px] text-[#FAF8F3]/70 font-medium">
                      {founderData.designation}
                    </p>
                  </div>
                  <Award className="w-5 h-5 text-[#B79559] shrink-0" />
                </div>
              </div>

              {/* Floating Teaching Experience Tag */}
              <div className="absolute -bottom-5 -right-3 sm:-right-5 bg-[#0E1A2B] border border-[#B79559]/60 p-4 rounded-lg shadow-2xl max-w-[240px] z-20">
                <p className="text-[10px] uppercase tracking-widest text-[#B79559] font-bold">
                  Teaching Experience
                </p>
                <p className="text-xs font-semibold text-[#FAF8F3] mt-0.5">
                  {founderData.experienceYears}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Biography, Credentials & Quote */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Placeholder Indicator */}
            <PlaceholderBadge
              label="[OFFICIAL FOUNDER BIO & CREDENTIALS PENDING FINAL ACADEMY SUBMISSION]"
              variant="subtle"
              className="bg-[#0E1A2B] text-[#D8C294] border-[#B79559]/30 text-xs py-1"
            />

            <div>
              <h3 className="font-heading text-2xl sm:text-4xl font-bold text-[#FAF8F3]">
                {founderData.name}
              </h3>
              <p className="text-sm sm:text-base text-[#D8C294] font-medium mt-1">
                {founderData.designation}
              </p>
            </div>

            {/* Qualifications & Subject Expertise Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-lg bg-[#0E1A2B] border border-[#FAF8F3]/10">
                <div className="flex items-center gap-2 text-[#B79559] mb-1">
                  <GraduationCap className="w-4 h-4" />
                  <span className="text-[11px] uppercase tracking-wider font-bold">
                    Qualifications
                  </span>
                </div>
                <p className="text-xs text-[#FAF8F3]/90 font-medium leading-relaxed">
                  {founderData.qualifications}
                </p>
              </div>

              <div className="p-3.5 rounded-lg bg-[#0E1A2B] border border-[#FAF8F3]/10">
                <div className="flex items-center gap-2 text-[#B79559] mb-1">
                  <BookOpen className="w-4 h-4" />
                  <span className="text-[11px] uppercase tracking-wider font-bold">
                    Specialisation
                  </span>
                </div>
                <p className="text-xs text-[#FAF8F3]/90 font-medium leading-relaxed">
                  Substantive Criminal Codes, Procedural Civil Laws &amp; Judgment Framing
                </p>
              </div>
            </div>

            {/* Biography Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-[#FAF8F3]/80 leading-relaxed font-light">
              <p>{founderData.bioP1}</p>
              <p>{founderData.bioP2}</p>
            </div>

            {/* Editorial Quote Box */}
            <div className="relative p-6 rounded-lg bg-[#0E1A2B]/80 border-l-4 border-[#B79559] border-y border-r border-[#FAF8F3]/10">
              <Quote className="w-8 h-8 text-[#B79559]/30 absolute top-4 right-4" />
              <p className="font-editorial text-lg sm:text-xl italic text-[#D8C294] leading-relaxed relative z-10">
                &ldquo;{founderData.teachingPhilosophy}&rdquo;
              </p>
              <p className="text-xs uppercase tracking-widest text-[#B79559] mt-3 font-semibold">
                — Founder&apos;s Guiding Maxim
              </p>
            </div>

            {/* Action */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button
                href="#contact"
                variant="gold"
                size="md"
              >
                Schedule Mentorship Session
              </Button>
              <Button
                href="#courses"
                variant="outline"
                size="md"
                className="border-[#B79559]/40 text-[#FAF8F3] hover:bg-[#B79559]/10"
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
