'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  BookOpenCheck,
  CalendarRange,
  PenTool,
  UserCheck,
  Award,
  FileText,
  LucideIcon,
} from 'lucide-react';
import { whyChooseData } from '@/data/whyChooseData';
import { SectionHeading } from '@/components/ui/SectionHeading';

const iconMap: Record<string, LucideIcon> = {
  BookOpenCheck,
  CalendarRange,
  PenTool,
  UserCheck,
  Award,
  FileText,
};

const academyMilestones = [
  'Conceptualised 2019 • Online 2020 • Offline 2021',
  '400+ Students Mentored',
  'Quality Over Quantity',
  'Judiciary • MP ADPO • CLAT PG • UGC-NET',
];

export const WhyChooseSection: React.FC = () => {
  return (
    <section
      id="why-lawgical"
      className="py-20 sm:py-24 bg-black text-[#FAF8F3] relative border-t border-[#B79559]/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Your Journey Towards the Judiciary"
          title="Why Choose The Lawgical Academy"
          subtitle="Built on a Quality over Quantity philosophy, combining conceptual classroom depth, bilingual clarity, and continuous personal mentorship."
          alignment="center"
          theme="dark"
          className="mb-8 sm:mb-10"
        />

        {/* Concise Heritage & Scope Highlights */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {academyMilestones.map((item) => (
            <span
              key={item}
              className="px-3.5 py-1.5 rounded-full bg-neutral-950 border border-[#B79559]/35 text-[11px] sm:text-xs font-medium text-[#D8C294]"
            >
              {item}
            </span>
          ))}
        </div>

        {/* 9 Feature Cards (Balanced 3x3 Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {whyChooseData.map((item, index) => {
            const Icon = iconMap[item.iconName] || BookOpenCheck;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="bg-neutral-950 p-6 sm:p-7 rounded-xl border border-[#B79559]/25 hover:border-[#B79559] hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-lg bg-black border border-[#B79559]/40 text-[#B79559] flex items-center justify-center group-hover:bg-[#B79559] group-hover:text-black transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-heading text-lg text-[#B79559] font-black tracking-wider">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="font-heading text-base sm:text-lg font-bold text-white group-hover:text-[#D8C294] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-[#FAF8F3]/75 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Closing Academy Maxim */}
        <div className="mt-12 text-center max-w-3xl mx-auto pt-6 border-t border-white/10">
          <p className="font-editorial text-lg sm:text-2xl italic text-[#D8C294]">
            &ldquo;We don&apos;t just prepare students for an examination; we prepare them for the responsibility of the judiciary.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
};
