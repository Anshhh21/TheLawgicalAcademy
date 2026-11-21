'use client';

import React from 'react';
import { ArrowUpRight, Scale } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const CtaBanner: React.FC = () => {
  return (
    <section className="bg-black border-y border-[#B79559]/30 py-16 text-[#FAF8F3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D0D0D] border border-[#B79559]/40 text-[#D8C294] text-xs uppercase tracking-widest font-semibold">
          <Scale className="w-3.5 h-3.5 text-[#B79559]" />
          <span>New Batches Commencing Soon</span>
        </div>

        <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#FAF8F3] max-w-4xl mx-auto leading-tight">
          Transform Your Legal Acumen into{' '}
          <span className="text-[#B79559] font-editorial italic font-normal">
            Judicial Achievement
          </span>
        </h2>

        <p className="text-sm sm:text-base text-[#FAF8F3]/80 max-w-2xl mx-auto font-light leading-relaxed">
          Limited seats per classroom batch to guarantee individual answer-script evaluation, personal mentorship, and intensive mock-bench interviews.
        </p>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <Button
            href="#contact"
            variant="gold"
            size="lg"
            icon={<ArrowUpRight className="w-4 h-4" />}
          >
            Apply for Batch Admission
          </Button>
          <Button
            href="#courses"
            variant="outline"
            size="lg"
            className="text-[#FAF8F3] border-[#FAF8F3]/40 hover:bg-[#FAF8F3] hover:text-[#0E1A2B]"
          >
            Review Curriculum
          </Button>
        </div>
      </div>
    </section>
  );
};

