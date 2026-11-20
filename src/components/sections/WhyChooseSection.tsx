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
import { PlaceholderBadge } from '@/components/ui/PlaceholderBadge';

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
    <section id="why-lawgical" className="py-20 sm:py-28 bg-[#FAF8F3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="Pedagogical Distinction"
          title="Why Choose The Lawgical Academy"
          subtitle="A disciplined legal academy model designed to eliminate ambiguity, hone interpretive clarity, and build exam-hall temperament."
          alignment="center"
        />

        {/* Global section notice */}
        <div className="text-center mb-10">
          <PlaceholderBadge
            label="Methodology & Services Represent Proposed Academic Framework Pending Formal Adoption"
            variant="subtle"
            className="text-xs"
          />
        </div>

        {/* 6 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseData.map((item, index) => {
            const Icon = iconMap[item.iconName] || BookOpenCheck;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-[#FFFFFF] p-8 rounded-sm border border-[#14243A]/10 hover:border-[#B79559] hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  {/* Icon and Accent */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-sm bg-[#14243A] text-[#B79559] flex items-center justify-center group-hover:bg-[#B79559] group-hover:text-[#0A1320] transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-[#B79559]/70 font-semibold">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Feature Title */}
                  <h3 className="font-heading text-lg font-bold text-[#14243A] group-hover:text-[#9E7D42] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  {/* Feature Description */}
                  <p className="mt-3 text-sm text-[#252525]/75 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                {/* Card Bottom Placeholder Note */}
                <div className="mt-6 pt-4 border-t border-[#14243A]/5">
                  <span className="text-[11px] text-[#7E6332] font-mono block">
                    [PROPOSED METHODOLOGY — EDITABLE]
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

