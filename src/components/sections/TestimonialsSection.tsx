'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { testimonialsData } from '@/data/testimonialsData';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Testimonial } from '@/types';

export const TestimonialsSection: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
  });

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

    requestAnimationFrame(() => {
      setScrollSnaps(emblaApi.scrollSnapList());
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="py-20 sm:py-28 bg-black text-[#FAF8F3] relative overflow-hidden border-t border-[#B79559]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeading
            eyebrow="Student Reflections"
            title="Aspirant Feedback &amp; Testimonials"
            subtitle="Insights from examinees on classroom pedagogy, answer evaluation, and judicial mindset development."
            alignment="left"
            theme="dark"
            className="mb-0"
          />

          {/* Carousel Arrows */}
          <div className="flex items-center gap-3 mt-6 md:mt-0">
            <button
              onClick={scrollPrev}
              className="w-11 h-11 rounded-sm bg-neutral-900 border border-[#B79559]/40 text-white hover:bg-[#B79559] hover:text-black transition-colors flex items-center justify-center cursor-pointer shadow-md"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              className="w-11 h-11 rounded-sm bg-neutral-900 border border-[#B79559]/40 text-white hover:bg-[#B79559] hover:text-black transition-colors flex items-center justify-center cursor-pointer shadow-md"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Embla Carousel Viewport */}
        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex -ml-6">
            {testimonialsData.map((test: Testimonial) => (
              <div
                key={test.id}
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-6 min-w-0"
              >
                <div className="h-full bg-neutral-950 p-8 rounded-sm border border-[#B79559]/20 hover:border-[#B79559] transition-all duration-300 shadow-xl flex flex-col justify-between relative">
                  <div>
                    {/* Top Quote Icon and Exam Tag */}
                    <div className="flex items-center justify-between mb-6">
                      <Quote className="w-8 h-8 text-[#B79559]/40" />
                      <span className="text-[11px] font-bold text-[#B79559] bg-black px-2.5 py-1 rounded border border-[#B79559]/30">
                        {test.year}
                      </span>
                    </div>

                    {/* Testimonial Quote */}
                    <p className="font-editorial text-base sm:text-lg italic text-[#FAF8F3]/90 leading-relaxed mb-6">
                      &ldquo;{test.quote}&rdquo;
                    </p>
                  </div>

                  {/* Student Bio */}
                  <div className="pt-6 border-t border-white/10 flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border border-[#B79559]/40 bg-black">
                      <Image
                        src={test.avatar}
                        alt={test.studentName}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-heading text-sm font-bold text-white">
                        {test.studentName}
                      </h4>
                      <p className="text-xs text-[#D8C294] font-medium">
                        {test.examSelection}
                      </p>
                      <div className="flex items-center gap-1 mt-1 text-[#B79559]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {scrollSnaps.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollTo(idx)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                selectedIndex === idx ? 'w-8 bg-[#B79559]' : 'w-2 bg-white/20'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
