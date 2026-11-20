'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Target, Compass, CheckCircle, ArrowRight } from 'lucide-react';
import { academyData } from '@/data/academyData';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { PlaceholderBadge } from '@/components/ui/PlaceholderBadge';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'mission' | 'vision' | 'methodology'>('mission');

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#F7F3EA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="Institution Profile"
          title="About The Lawgical Academy"
          subtitle="Sculpting discerning legal minds through disciplined statutory analysis, ethical grounding, and competitive judicial acumen."
          alignment="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Composition with Placeholder Framer */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative borders */}
              <div className="absolute -top-3 -left-3 w-24 h-24 border-t-2 border-l-2 border-[#B79559]" />
              <div className="absolute -bottom-3 -right-3 w-24 h-24 border-b-2 border-r-2 border-[#B79559]" />

              <div className="relative bg-[#0E1A2B] rounded-sm p-3 shadow-xl border border-[#B79559]/30">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xs bg-[#14243A]">
                  <Image
                    src="/images/placeholders/faculty-placeholder.svg"
                    alt="The Lawgical Academy Campus & Classrooms"
                    fill
                    className="object-cover"
                  />
                  
                  {/* Overlay Plaque */}
                  <div className="absolute bottom-4 left-4 right-4 bg-[#0A1320]/90 backdrop-blur-md p-4 rounded border border-[#B79559]/40">
                    <p className="font-heading text-xs uppercase tracking-widest text-[#D8C294] font-bold">
                      Campus Infrastructure
                    </p>
                    <p className="text-[11px] text-[#FAF8F3]/70 mt-1">
                      [Classroom & Library Facility Photographs Will Replace This Slot]
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Stat card */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-[#FAF8F3] border border-[#B79559]/50 p-4 rounded shadow-lg max-w-[220px]">
                <p className="text-xs uppercase tracking-wider text-[#B79559] font-bold">
                  Curriculum Focus
                </p>
                <p className="text-xs text-[#252525] mt-1 font-medium leading-snug">
                  Judicial Services & Public Prosecution Examination Standards
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative, Mission & Vision Tabs */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-4">
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#14243A]">
                {academyData.aboutTitle}
              </h3>
              
              <p className="text-[#252525]/85 leading-relaxed text-base">
                {academyData.aboutP1}
              </p>

              <div className="p-4 rounded-sm bg-[#14243A]/5 border-l-4 border-[#B79559]">
                <p className="text-xs sm:text-sm text-[#252525]/80 italic">
                  {academyData.aboutP2}
                </p>
              </div>
            </div>

            {/* Interactive Philosophy Tabs */}
            <div className="pt-2">
              <div className="flex border-b border-[#14243A]/15 gap-4">
                <button
                  onClick={() => setActiveTab('mission')}
                  className={`pb-3 text-xs sm:text-sm uppercase tracking-wider font-semibold transition-all relative ${
                    activeTab === 'mission'
                      ? 'text-[#14243A]'
                      : 'text-[#252525]/50 hover:text-[#14243A]'
                  }`}
                >
                  Our Mission
                  {activeTab === 'mission' && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#B79559]" />
                  )}
                </button>
                <button
                  onClick={() => setActiveTab('vision')}
                  className={`pb-3 text-xs sm:text-sm uppercase tracking-wider font-semibold transition-all relative ${
                    activeTab === 'vision'
                      ? 'text-[#14243A]'
                      : 'text-[#252525]/50 hover:text-[#14243A]'
                  }`}
                >
                  Our Vision
                  {activeTab === 'vision' && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#B79559]" />
                  )}
                </button>
                <button
                  onClick={() => setActiveTab('methodology')}
                  className={`pb-3 text-xs sm:text-sm uppercase tracking-wider font-semibold transition-all relative ${
                    activeTab === 'methodology'
                      ? 'text-[#14243A]'
                      : 'text-[#252525]/50 hover:text-[#14243A]'
                  }`}
                >
                  Pedagogy Pillars
                  {activeTab === 'methodology' && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#B79559]" />
                  )}
                </button>
              </div>

              {/* Tab Content Panels */}
              <div className="pt-4 min-h-[110px]">
                {activeTab === 'mission' && (
                  <div className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-[#B79559] shrink-0 mt-0.5" />
                    <p className="text-sm text-[#252525]/85 leading-relaxed">
                      {academyData.missionStatement}
                    </p>
                  </div>
                )}

                {activeTab === 'vision' && (
                  <div className="flex items-start gap-3">
                    <Compass className="w-5 h-5 text-[#B79559] shrink-0 mt-0.5" />
                    <p className="text-sm text-[#252525]/85 leading-relaxed">
                      {academyData.visionStatement}
                    </p>
                  </div>
                )}

                {activeTab === 'methodology' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#252525]/85">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#B79559]" />
                      <span>Exhaustive Bare Act Clause Reading</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#B79559]" />
                      <span>Weekly Mains Answer Script Evaluation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#B79559]" />
                      <span>Judgment Writing Workshops</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#B79559]" />
                      <span>Local & Minor Acts Special Focus</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Actions & Notice */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button href="#courses" variant="primary" icon={<ArrowRight className="w-4 h-4" />}>
                Explore Programs
              </Button>
              <PlaceholderBadge
                label="Full Academy History Pending Verification"
                variant="subtle"
              />
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

