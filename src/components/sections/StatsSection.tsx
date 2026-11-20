'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { statsData } from '@/data/statsData';
import { CounterNumber } from '@/components/ui/CounterNumber';
import { AlertCircle } from 'lucide-react';

export const StatsSection: React.FC = () => {
  return (
    <section className="relative z-20 -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#FAF8F3] rounded-sm shadow-xl border border-[#B79559]/30 p-6 sm:p-10">
        {/* Prototype Header Notice */}
        <div className="flex flex-col sm:flex-row items-center justify-between pb-6 mb-8 border-b border-[#14243A]/10 gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#B79559] animate-pulse" />
            <h3 className="font-heading text-sm uppercase tracking-widest text-[#14243A] font-bold">
              Key Metrics & Institutional Benchmarks
            </h3>
          </div>
          <div className="inline-flex items-center gap-1.5 text-xs text-[#7E6332] bg-[#B79559]/10 px-3 py-1 rounded">
            <AlertCircle className="w-3.5 h-3.5 text-[#B79559]" />
            <span>Numerical Values Are Illustrative Placeholders Awaiting Official Data</span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#14243A]/10">
          {statsData.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`flex flex-col justify-between ${idx !== 0 ? 'pt-6 sm:pt-0 sm:pl-6' : ''}`}
            >
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="font-heading text-4xl sm:text-5xl font-extrabold text-[#14243A] tracking-tight">
                    <CounterNumber
                      value={stat.numericValue}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                    />
                  </span>
                </div>
                <p className="mt-2 text-sm sm:text-base font-semibold text-[#252525]">
                  {stat.label}
                </p>
              </div>

              {/* Explicit Placeholder Indicator */}
              <div className="mt-4 pt-3 border-t border-[#14243A]/5">
                <span className="text-[11px] font-mono font-medium text-[#7E6332] block">
                  {stat.placeholderNote}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

