'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, GraduationCap, Check, ArrowUpRight, BookOpen, Layers } from 'lucide-react';
import { coursesData } from '@/data/coursesData';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ReflectiveCard } from '@/components/ui/ReflectiveCard';
import { Button } from '@/components/ui/Button';
import { PlaceholderBadge } from '@/components/ui/PlaceholderBadge';
import { Course } from '@/types';

export const CoursesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Judiciary', 'Prosecution', 'Foundation', 'Specialized'];

  const filteredCourses =
    selectedCategory === 'All'
      ? coursesData
      : coursesData.filter((c) => c.category === selectedCategory);

  return (
    <section id="courses" className="py-20 sm:py-28 bg-[#101E31] text-[#FAF8F3] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#B79559]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#1C3352]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          eyebrow="Academic Programs"
          title="Curated Examination Courses"
          subtitle="Rigorous, milestone-driven curricula designed specifically for Judicial Services and Public Prosecution competitive examinations."
          alignment="center"
          theme="dark"
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-sm text-xs sm:text-sm uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#B79559] text-[#0A1320] shadow-md shadow-[#B79559]/20'
                  : 'bg-[#14243A] text-[#FAF8F3]/70 hover:text-[#FAF8F3] hover:bg-[#1C3352] border border-[#B79559]/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Global Courses Status Notice */}
        <div className="max-w-xl mx-auto mb-10 text-center">
          <PlaceholderBadge
            label="All Course Offerings, Batches & Durations Are Pending Official Confirmation"
            variant="subtle"
            className="bg-[#0A1320] text-[#D8C294] border-[#B79559]/30 py-1 px-3 text-xs"
          />
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-8">
          {filteredCourses.map((course: Course, index: number) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ReflectiveCard
                className="bg-[#14243A]/90 border border-[#B79559]/25 p-6 sm:p-8 flex flex-col justify-between card-shimmer group"
                glowColor="rgba(183, 149, 89, 0.22)"
              >
                <div>
                  {/* Top Badges */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#FAF8F3]/10">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#B79559] bg-[#0E1A2B] px-3 py-1 rounded-sm border border-[#B79559]/30">
                      {course.targetExam}
                    </span>
                    <PlaceholderBadge
                      label="Pending Details"
                      variant="subtle"
                      className="bg-[#0A1320] text-[#D8C294] border-[#B79559]/20 text-[10px]"
                    />
                  </div>

                  {/* Course Title */}
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#FAF8F3] mt-4 group-hover:text-[#D8C294] transition-colors leading-snug">
                    {course.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm text-[#FAF8F3]/75 leading-relaxed font-light">
                    {course.description}
                  </p>

                  {/* Duration & Mode Specs */}
                  <div className="grid grid-cols-2 gap-3 my-5 p-3 rounded-sm bg-[#0E1A2B] border border-[#FAF8F3]/10 text-xs">
                    <div className="flex items-center gap-2 text-[#FAF8F3]/80">
                      <Clock className="w-4 h-4 text-[#B79559] shrink-0" />
                      <div>
                        <span className="block text-[10px] text-[#FAF8F3]/50 uppercase">Duration</span>
                        <span className="font-medium text-[#FAF8F3]">{course.duration}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-[#FAF8F3]/80">
                      <GraduationCap className="w-4 h-4 text-[#B79559] shrink-0" />
                      <div>
                        <span className="block text-[10px] text-[#FAF8F3]/50 uppercase">Mode</span>
                        <span className="font-medium text-[#FAF8F3]">{course.mode}</span>
                      </div>
                    </div>
                  </div>

                  {/* Key Subjects Covered */}
                  <div className="space-y-2 mt-4">
                    <p className="text-xs uppercase tracking-wider text-[#D8C294] font-semibold flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5" />
                      Key Core Subjects
                    </p>
                    <ul className="grid grid-cols-1 gap-1.5 text-xs text-[#FAF8F3]/85">
                      {course.subjects.slice(0, 4).map((sub, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#B79559] mt-1.5 shrink-0" />
                          <span className="leading-snug">{sub}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Features Highlights */}
                  <div className="space-y-1.5 mt-4 pt-4 border-t border-[#FAF8F3]/10">
                    <p className="text-xs uppercase tracking-wider text-[#D8C294] font-semibold flex items-center gap-1.5 mb-2">
                      <Layers className="w-3.5 h-3.5" />
                      Pedagogy Highlights
                    </p>
                    {course.features.slice(0, 2).map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#FAF8F3]/75">
                        <Check className="w-3.5 h-3.5 text-[#B79559] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="pt-6 mt-6 border-t border-[#FAF8F3]/10 flex items-center justify-between">
                  <span className="text-xs text-[#FAF8F3]/50">
                    * Syllabus & schedule subject to verification
                  </span>
                  <Button
                    href="#contact"
                    variant="gold"
                    size="sm"
                    icon={<ArrowUpRight className="w-3.5 h-3.5" />}
                  >
                    Enquire Batch
                  </Button>
                </div>
              </ReflectiveCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

