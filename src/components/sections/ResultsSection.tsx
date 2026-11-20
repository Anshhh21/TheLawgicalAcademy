'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Trophy, Calendar, Award, CheckCircle } from 'lucide-react';
import { resultsData } from '@/data/resultsData';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PlaceholderBadge } from '@/components/ui/PlaceholderBadge';
import { ResultItem } from '@/types';

export const ResultsSection: React.FC = () => {
  return (
    <section id="results" className="py-20 sm:py-28 bg-[#0E1A2B] text-[#FAF8F3] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#B79559]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          eyebrow="Hall of Achievement"
          title="Proven Track Record in Judicial & Prosecution Exams"
          subtitle="Celebrating the rigorous dedication and adjudicative triumphs of our mentored candidates across competitive state examinations."
          alignment="center"
          theme="dark"
        />

        {/* Official Status Warning */}
        <div className="max-w-xl mx-auto mb-12 text-center">
          <PlaceholderBadge
            label="Candidate Selection Records & High Ranks Pending Verified Academy Documentation"
            variant="subtle"
            className="bg-[#08101A] text-[#D8C294] border-[#B79559]/30 text-xs py-1 px-3"
          />
        </div>

        {/* Results Grid / Showcase */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {resultsData.map((result: ResultItem, index: number) => (
            <motion.div
              key={result.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#14243A] rounded-sm border border-[#B79559]/25 hover:border-[#B79559] hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Candidate Photo Container */}
                <div className="relative aspect-[4/4.5] w-full bg-[#08101A] overflow-hidden">
                  <Image
                    src={result.image}
                    alt={result.studentName}
                    fill
                    className="object-cover group-hover:scale-103 transition-transform duration-500"
                  />
                  
                  {/* Rank Plaque */}
                  <div className="absolute top-3 left-3 bg-[#B79559] text-[#0A1320] px-2.5 py-1 rounded-xs flex items-center gap-1.5 shadow-md">
                    <Trophy className="w-3.5 h-3.5" />
                    <span className="text-[10px] font-bold uppercase tracking-wider">
                      {result.rankOrAchievement}
                    </span>
                  </div>

                  {/* Year Tag */}
                  <div className="absolute top-3 right-3 bg-[#0A1320]/90 px-2 py-1 rounded-xs border border-[#B79559]/30 text-[10px] text-[#FAF8F3]/80 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#B79559]" />
                    <span>{result.year}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5">
                  <h3 className="font-heading text-base font-bold text-[#FAF8F3] group-hover:text-[#D8C294] transition-colors leading-snug">
                    {result.studentName}
                  </h3>

                  <div className="mt-2 flex items-center gap-1.5 text-xs text-[#B79559] font-medium">
                    <Award className="w-3.5 h-3.5 shrink-0" />
                    <span>{result.exam}</span>
                  </div>

                  <p className="mt-3 text-xs text-[#FAF8F3]/70 font-light leading-relaxed">
                    {result.storyExcerpt}
                  </p>
                </div>
              </div>

              {/* Card Footer Plaque */}
              <div className="px-5 py-3 bg-[#08101A] border-t border-[#FAF8F3]/10 flex items-center justify-between">
                <span className="text-[10px] font-mono text-[#D8C294]">
                  [VERIFICATION PENDING]
                </span>
                <CheckCircle className="w-3.5 h-3.5 text-[#B79559]/50" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

