'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle, Target, Compass, ArrowRight } from 'lucide-react';
import { academyData } from '@/data/academyData';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'mission' | 'vision' | 'methodology'>('mission');

  return (
    <section id="about" className="py-20 sm:py-28 bg-black text-[#FAF8F3] relative border-t border-[#B79559]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="Institution Profile"
          title="About The Lawgical Academy"
          subtitle="Sculpting discerning legal minds through disciplined statutory analysis, ethical grounding, and competitive judicial acumen."
          alignment="center"
          theme="dark"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mt-6">
          
          {/* Left Column: Visual Composition */}
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

              <div className="relative bg-neutral-950 rounded-sm p-3 shadow-xl border border-[#B79559]/30">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xs bg-[#0D0D0D]">
                  <Image
                    src="/images/placeholders/faculty-placeholder.svg"
                    alt="The Lawgical Academy Campus & Classrooms"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                  
                  {/* Photo Caption Badge */}
                  <div className="absolute bottom-4 left-4 right-4 bg-black/90 backdrop-blur-md p-4 rounded border border-[#B79559]/40">
                    <p className="text-xs font-semibold text-[#D8C294]">
                      Campus Infrastructure &amp; Classrooms
                    </p>
                    <p className="text-[11px] text-[#FAF8F3]/60 mt-0.5">
                      Dedicated legal research center and moot halls
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Stat card */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-neutral-950 border border-[#B79559]/50 p-4 rounded shadow-2xl max-w-[220px]">
                <p className="text-xs uppercase tracking-wider text-[#B79559] font-bold">
                  Curriculum Focus
                </p>
                <p className="text-xs text-[#FAF8F3] mt-1 font-medium leading-snug">
                  Judicial Services &amp; Public Prosecution Examination Standards
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
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
                {academyData.aboutTitle}
              </h3>
              
              <p className="text-[#FAF8F3]/80 leading-relaxed text-base">
                {academyData.aboutP1}
              </p>

              <div className="p-4 rounded-sm bg-neutral-950 border-l-4 border-[#B79559]">
                <p className="text-xs sm:text-sm text-[#D8C294] italic">
                  {academyData.aboutP2}
                </p>
              </div>
            </div>

            {/* Interactive Philosophy Tabs */}
            <div className="pt-2">
              <div className="flex border-b border-white/10 gap-4">
                <button
                  onClick={() => setActiveTab('mission')}
                  className={`pb-3 text-xs sm:text-sm uppercase tracking-wider font-semibold transition-all relative ${
                    activeTab === 'mission'
                      ? 'text-[#D8C294]'
                      : 'text-white/50 hover:text-white'
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
                      ? 'text-[#D8C294]'
                      : 'text-white/50 hover:text-white'
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
                      ? 'text-[#D8C294]'
                      : 'text-white/50 hover:text-white'
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
                    <p className="text-sm text-[#FAF8F3]/85 leading-relaxed">
                      {academyData.missionStatement}
                    </p>
                  </div>
                )}

                {activeTab === 'vision' && (
                  <div className="flex items-start gap-3">
                    <Compass className="w-5 h-5 text-[#B79559] shrink-0 mt-0.5" />
                    <p className="text-sm text-[#FAF8F3]/85 leading-relaxed">
                      {academyData.visionStatement}
                    </p>
                  </div>
                )}

                {activeTab === 'methodology' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#FAF8F3]/85">
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
                      <span>Local &amp; Minor Acts Special Focus</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button href="#courses" variant="gold" icon={<ArrowRight className="w-4 h-4" />}>
                Explore Programs
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
