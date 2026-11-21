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

export const WhyChooseSection: React.FC = () => {
  return (
    <section id="why-lawgical" className="py-20 sm:py-24 bg-black text-[#FAF8F3] relative border-t border-[#B79559]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="Pedagogical Distinction"
          title="Why Choose The Lawgical Academy"
          subtitle="A disciplined legal academy model designed to eliminate ambiguity, hone interpretive clarity, and build exam-hall temperament."
          alignment="center"
          theme="dark"
        />

        {/* 6 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {whyChooseData.map((item, index) => {
            const Icon = iconMap[item.iconName] || BookOpenCheck;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-neutral-950 p-7 rounded-xl border border-[#B79559]/25 hover:border-[#B79559] hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  {/* Icon and Accent Number */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-lg bg-black border border-[#B79559]/40 text-[#B79559] flex items-center justify-center group-hover:bg-[#B79559] group-hover:text-black transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-heading text-xl text-[#B79559] font-black tracking-wider">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Clean Number Heading */}
                  <h3 className="font-heading text-lg font-bold text-white group-hover:text-[#D8C294] transition-colors leading-snug">
                    0{index + 1}
                  </h3>

                  {/* Unfilled Box Placeholder */}
                  <div className="mt-4 h-16 w-full rounded border border-dashed border-[#FAF8F3]/15 bg-black/50 flex items-center px-3.5">
                    <span className="text-xs text-white/30 italic">Details to be updated</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
