'use client';

import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { Quote, ChevronLeft, ChevronRight, Award } from 'lucide-react';
import { testimonialsData } from '@/data/testimonialsData';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PlaceholderBadge } from '@/components/ui/PlaceholderBadge';
import { Testimonial } from '@/types';

export const TestimonialsSection: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    const syncState = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      setScrollSnaps(emblaApi.scrollSnapList());
    };
    emblaApi.on('select', syncState);
    emblaApi.on('reInit', syncState);
    const frame = requestAnimationFrame(syncState);
    return () => {
      cancelAnimationFrame(frame);
      emblaApi.off('select', syncState);
      emblaApi.off('reInit', syncState);
    };
  }, [emblaApi]);

  return (
    <section className="py-20 sm:py-28 bg-[#FAF8F3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeading
            eyebrow="Student Reflections"
            title="Aspirant Feedback & Testimonials"
            subtitle="Insights from successful examinees on classroom pedagogy, answer evaluation, and judicial mindset development."
            alignment="left"
            className="mb-0"
          />

          {/* Carousel Arrows */}
          <div className="flex items-center gap-3 mt-6 md:mt-0">
            <button
              onClick={scrollPrev}
              className="w-11 h-11 rounded-sm bg-[#14243A] text-[#FAF8F3] hover:bg-[#B79559] hover:text-[#0E1A2B] transition-colors flex items-center justify-center cursor-pointer shadow-md"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              className="w-11 h-11 rounded-sm bg-[#14243A] text-[#FAF8F3] hover:bg-[#B79559] hover:text-[#0E1A2B] transition-colors flex items-center justify-center cursor-pointer shadow-md"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Global Notice */}
        <div className="mb-8">
          <PlaceholderBadge
            label="Sample Testimonials — Authentic Student Reviews Will Be Published After Written Consent & Verification"
            variant="subtle"
            className="text-xs"
          />
        </div>

        {/* Embla Carousel Viewport */}
        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex -ml-6">
            {testimonialsData.map((test: Testimonial) => (
              <div
                key={test.id}
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-6 min-w-0"
              >
                <div className="h-full bg-[#FFFFFF] p-8 rounded-sm border border-[#14243A]/10 hover:border-[#B79559] transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between relative">
                  <div>
                    {/* Top Quote Icon and Exam Tag */}
                    <div className="flex items-center justify-between mb-6">
                      <Quote className="w-8 h-8 text-[#B79559]/30" />
                      <span className="text-[11px] font-bold text-[#B79559] bg-[#14243A]/5 px-2.5 py-1 rounded">
                        {test.year}
                      </span>
                    </div>

                    {/* Testimonial Quote */}
                    <p className="font-editorial text-base sm:text-lg italic text-[#252525]/90 leading-relaxed mb-6">
                      {test.quote}
                    </p>
                  </div>

                  {/* Student Bio */}
                  <div className="pt-6 border-t border-[#14243A]/10 flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border border-[#B79559]/40 bg-[#14243A]">
                      <Image
                        src={test.avatar}
                        alt={test.studentName}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-heading text-sm font-bold text-[#14243A]">
                        {test.studentName}
                      </h4>
                      <p className="text-xs text-[#B79559] font-medium flex items-center gap-1 mt-0.5">
                        <Award className="w-3 h-3" />
                        {test.examSelection}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {scrollSnaps.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollTo(idx)}
              className={`h-2 transition-all rounded-full ${
                selectedIndex === idx ? 'w-8 bg-[#B79559]' : 'w-2 bg-[#14243A]/20'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

