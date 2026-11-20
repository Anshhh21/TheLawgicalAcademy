'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, BookOpen, Scale, Award, CheckCircle2, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { PlaceholderBadge } from '@/components/ui/PlaceholderBadge';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center bg-[#14243A] text-[#FAF8F3] pt-28 pb-20 overflow-hidden"
    >
      {/* Background Decorative Grid & Subtle Radial Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#B79559]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-[#1C3352]/40 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(#B79559 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Institution Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0E1A2B] border border-[#B79559]/40 text-[#D8C294] text-xs uppercase tracking-widest font-semibold shadow-inner">
              <Scale className="w-3.5 h-3.5 text-[#B79559]" />
              <span>The Lawgical Academy</span>
              <span className="w-1 h-1 rounded-full bg-[#B79559]" />
              <span className="text-[#FAF8F3]/70">Prototype Preview</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAF8F3] leading-[1.12]">
              Mastering the Law with{' '}
              <span className="text-[#B79559] italic font-editorial font-normal">
                Precision, Rigour
              </span>{' '}
              & Logic.
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-[#FAF8F3]/80 max-w-2xl leading-relaxed font-light">
              Strategic classroom instruction and personalized mentorship for{' '}
              <span className="text-[#FAF8F3] font-medium">Civil Judge (Judiciary)</span> and{' '}
              <span className="text-[#FAF8F3] font-medium">ADPO (Prosecution)</span> competitive
              examinations. Focused on bare-act clause dissection, analytical jurisprudence, and high-scoring Mains answer drafting.
            </p>

            {/* Placeholder Indicator */}
            <div className="pt-1">
              <PlaceholderBadge
                label="Course Curricula & Batches Awaiting Official Confirmation"
                variant="subtle"
                className="bg-[#0E1A2B] text-[#D8C294] border-[#B79559]/30"
              />
            </div>

            {/* Call To Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button
                href="#courses"
                variant="gold"
                size="lg"
                icon={<ChevronRight className="w-4 h-4" />}
              >
                Explore Courses
              </Button>
              <Button
                href="#contact"
                variant="primary"
                size="lg"
                className="bg-[#1C3352]/70 border-[#B79559]/40 hover:bg-[#1C3352]"
                icon={<ArrowUpRight className="w-4 h-4" />}
              >
                Enquire Now
              </Button>
            </div>

            {/* Key Value Highlights */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-[#FAF8F3]/10">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B79559] shrink-0" />
                <span className="text-xs text-[#FAF8F3]/80 font-medium">BNS & BSA Updated</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B79559] shrink-0" />
                <span className="text-xs text-[#FAF8F3]/80 font-medium">Mains Answer Evaluation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B79559] shrink-0" />
                <span className="text-xs text-[#FAF8F3]/80 font-medium">Individual Mentorship</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Premium Visual Composition / Founder & Academy Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Outer Glowing Border Frame */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#B79559]/40 via-[#B79559]/10 to-[#1C3352] rounded-md blur-sm opacity-60" />
              
              <div className="relative rounded-sm bg-[#0E1A2B] border border-[#B79559]/40 overflow-hidden shadow-2xl">
                {/* Hero Showcase SVG / Photo Container */}
                <div className="relative aspect-[4/4.8] w-full bg-[#08101A] overflow-hidden group">
                  <Image
                    src="/images/academy/hero-graphic.svg"
                    alt="The Lawgical Academy Academic Overview"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-102"
                    priority
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08101A] via-transparent to-transparent opacity-80" />

                  {/* Floating Overlay Badge on Hero Image */}
                  <div className="absolute top-4 right-4 bg-[#08101A]/90 backdrop-blur-md px-3 py-1.5 rounded border border-[#B79559]/50 text-right">
                    <span className="block text-[10px] text-[#B79559] uppercase tracking-wider font-semibold">
                      Academic Session
                    </span>
                    <span className="block text-xs font-bold text-[#FAF8F3]">
                      2026 – 2027 Batches
                    </span>
                  </div>

                  {/* Bottom Image Caption */}
                  <div className="absolute bottom-4 left-4 right-4 bg-[#14243A]/90 backdrop-blur-md p-4 rounded-sm border border-[#B79559]/30">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-heading text-sm font-semibold text-[#D8C294]">
                          Judicial & Prosecution Pedagogy
                        </p>
                        <p className="text-[11px] text-[#FAF8F3]/70">
                          [Official Academy Photographs Will Be Slotted Here]
                        </p>
                      </div>
                      <Award className="w-6 h-6 text-[#B79559] shrink-0" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Pill Accent */}
              <div className="hidden sm:flex absolute -bottom-5 -left-5 bg-[#0A1320] text-[#FAF8F3] px-4 py-3 rounded shadow-xl border border-[#B79559]/40 items-center gap-3">
                <div className="w-9 h-9 rounded bg-[#B79559]/15 border border-[#B79559] flex items-center justify-center text-[#B79559]">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#FAF8F3]">Standardized Bare Act Rigour</p>
                  <p className="text-[10px] text-[#D8C294]">Bilingual Hindi & English Coaching</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

