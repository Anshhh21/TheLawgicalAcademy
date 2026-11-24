'use client';

import React, { useEffect, useId, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Clock,
  GraduationCap,
  Check,
  ArrowUpRight,
  BookOpen,
  X,
  Sparkles,
  Maximize2,
  Users,
} from 'lucide-react';
import ReflectiveCard from '@/components/reactbits/ReflectiveCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import {
  prospectusCourses,
  academicSupportPillars,
  ProspectusCourse,
} from '@/data/coursesData';

export const CoursesSection: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<ProspectusCourse | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (selectedCourse && !dialog.open) {
      dialog.showModal();
    } else if (!selectedCourse && dialog.open) {
      dialog.close();
    }
  }, [selectedCourse]);

  // Fallback light-dismiss for browsers without HTMLDialogElement `closedBy` support (e.g. Safari)
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || 'closedBy' in HTMLDialogElement.prototype) return;

    const isOutside = (e: PointerEvent) => {
      const r = dialog.getBoundingClientRect();
      return (
        e.clientX < r.left ||
        e.clientX > r.right ||
        e.clientY < r.top ||
        e.clientY > r.bottom
      );
    };

    let pressedOutside = false;
    const onPointerDown = (e: PointerEvent) => {
      pressedOutside = isOutside(e);
    };
    const onPointerUp = (e: PointerEvent) => {
      if (pressedOutside && isOutside(e)) {
        dialog.close();
      }
      pressedOutside = false;
    };

    dialog.addEventListener('pointerdown', onPointerDown);
    dialog.addEventListener('pointerup', onPointerUp);
    return () => {
      dialog.removeEventListener('pointerdown', onPointerDown);
      dialog.removeEventListener('pointerup', onPointerUp);
    };
  }, []);

  const handleOpenCourse = (course: ProspectusCourse) => {
    setSelectedCourse(course);
  };

  const handleCloseModal = () => {
    const dialog = dialogRef.current;
    if (dialog?.open) {
      dialog.close();
    }
    setSelectedCourse(null);
  };

  const handleCardSurfaceClick = (
    e: React.MouseEvent<HTMLDivElement>,
    course: ProspectusCourse
  ) => {
    const target = e.target as HTMLElement;
    if (target.closest('a, button')) return;
    handleOpenCourse(course);
  };

  const handleEnquireFromModal = () => {
    handleCloseModal();
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="courses"
      className="py-20 sm:py-28 bg-black text-[#FAF8F3] relative overflow-hidden border-t border-[#B79559]/20"
    >
      {/* Background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#B79559]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-black/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Our Flagship Programmes"
          title="Courses Offered at The Lawgical Academy"
          subtitle="Structured learning, bilingual instruction, and personal mentorship. Tap any course card to explore its complete syllabus and tracks."
          alignment="center"
          theme="dark"
        />

        {/* Course Cards Grid using ReflectiveCard */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {prospectusCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="w-full flex"
              onClick={(e) => handleCardSurfaceClick(e, course)}
            >
              <ReflectiveCard
                palette="dark"
                radius={18}
                className="w-full min-h-[460px] sm:h-[520px] border border-[#B79559]/35 hover:border-[#B79559]/80 transition-colors shadow-2xl cursor-pointer group"
              >
                <div className="flex flex-col justify-between h-full text-left">
                  <div>
                    {/* Top Badges */}
                    <div className="flex items-center justify-between gap-2 pb-3 border-b border-white/10">
                      <span className="text-xs font-black uppercase tracking-widest text-black bg-[#B79559] px-3 py-1 rounded-sm">
                        {course.code}
                      </span>
                      <span className="text-xs font-medium text-[#D8C294] tracking-wide text-right">
                        {course.targetExam}
                      </span>
                    </div>

                    {/* Title & Tagline */}
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mt-4 leading-tight group-hover:text-[#D8C294] transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/75 mt-2 leading-relaxed">
                      {course.tagline}
                    </p>

                    {/* Duration & Focus */}
                    <div className="grid grid-cols-2 gap-3 my-4 p-3 rounded-lg bg-neutral-950/85 border border-white/10 text-xs">
                      <div className="flex items-center gap-2 text-white/80">
                        <Clock className="w-4 h-4 text-[#B79559] shrink-0" />
                        <div>
                          <span className="block text-[10px] text-white/50 uppercase">
                            Duration
                          </span>
                          <span className="font-semibold text-white">
                            {course.duration}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-white/80">
                        <GraduationCap className="w-4 h-4 text-[#B79559] shrink-0" />
                        <div>
                          <span className="block text-[10px] text-white/50 uppercase">
                            Core Focus
                          </span>
                          <span className="font-semibold text-white line-clamp-1">
                            {course.focus}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Concise Key Highlights */}
                    <div className="space-y-2 mt-3">
                      <p className="text-[11px] uppercase tracking-wider text-[#D8C294] font-bold flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5" />
                        Programme Highlights
                      </p>
                      <ul className="space-y-1.5 text-xs text-white/85">
                        {course.highlights.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#B79559] mt-1.5 shrink-0" />
                            <span className="leading-snug">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Bottom Interactive Actions */}
                  <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 mt-auto">
                    <button
                      type="button"
                      onClick={() => handleOpenCourse(course)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D8C294] hover:text-white transition-colors cursor-pointer py-1.5"
                    >
                      <Maximize2 className="w-3.5 h-3.5 text-[#B79559]" />
                      <span>Tap for Full Syllabus</span>
                    </button>

                    <Button
                      href="#contact"
                      variant="gold"
                      size="sm"
                      icon={<ArrowUpRight className="w-3.5 h-3.5" />}
                    >
                      Enquire Batch
                    </Button>
                  </div>
                </div>
              </ReflectiveCard>
            </motion.div>
          ))}
        </div>

        {/* Common Academic Support System Strip */}
        <div className="mt-14 rounded-xl bg-neutral-950 border border-[#B79559]/30 p-6 sm:p-7">
          <div className="text-center mb-5">
            <span className="text-[11px] uppercase tracking-[0.22em] text-[#B79559] font-bold">
              Included Across Every Programme
            </span>
            <h3 className="font-heading text-lg sm:text-xl font-bold text-white mt-1">
              Academic Support Framework
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {academicSupportPillars.map((pillar) => (
              <div
                key={pillar.label}
                className="p-3.5 rounded-lg bg-black/70 border border-white/10 text-center"
              >
                <p className="text-xs font-semibold text-[#D8C294]">{pillar.label}</p>
                <p className="text-[11px] text-white/65 mt-1 leading-snug">
                  {pillar.detail}
                </p>
              </div>
            ))}
          </div>
          <p className="text-[11px] text-white/50 text-center mt-5">
            Course schedules, subject coverage, and state-specific modules align with the latest official examination notifications.
          </p>
        </div>
      </div>

      {/* Elaborative Course Pop-Up Modal using native <dialog> */}
      <dialog
        ref={dialogRef}
        {...({ closedby: 'any' } as Record<string, string>)}
        aria-labelledby={titleId}
        onClose={() => setSelectedCourse(null)}
        className="m-auto w-[calc(100%-1.5rem)] max-w-4xl max-h-[88vh] rounded-2xl bg-[#090909] text-[#FAF8F3] border border-[#B79559]/50 shadow-[0_25px_70px_rgba(0,0,0,0.95)] p-0 overflow-hidden"
      >
        {selectedCourse && (
          <div className="flex flex-col max-h-[88vh]">
            {/* Sticky Modal Header */}
            <div className="flex items-start justify-between gap-4 p-5 sm:p-7 border-b border-[#B79559]/25 bg-black">
              <div className="space-y-2 text-left">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="text-[11px] font-black uppercase tracking-widest text-black bg-[#B79559] px-2.5 py-1 rounded-sm">
                    {selectedCourse.code}
                  </span>
                  <span className="text-xs font-semibold text-[#D8C294]">
                    {selectedCourse.targetExam}
                  </span>
                  <span className="text-xs text-white/40">•</span>
                  <span className="text-xs text-white/80 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#B79559]" />
                    {selectedCourse.duration}
                  </span>
                </div>
                <h1
                  id={titleId}
                  className="font-heading text-xl sm:text-3xl font-bold text-white leading-tight"
                >
                  {selectedCourse.title}
                </h1>
                <p className="text-xs sm:text-sm text-[#FAF8F3]/75 leading-relaxed">
                  {selectedCourse.overview}
                </p>
              </div>

              <button
                type="button"
                autoFocus
                onClick={handleCloseModal}
                aria-label="Close course details"
                className="p-2 rounded-lg bg-neutral-900 border border-[#B79559]/35 text-[#D8C294] hover:bg-[#B79559] hover:text-black transition-colors shrink-0 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="p-5 sm:p-7 overflow-y-auto overscroll-contain space-y-6 text-left">
              {/* Optional Three-Fold Tracks (Course 01) */}
              {selectedCourse.tracks && (
                <div>
                  <h2 className="text-xs uppercase tracking-[0.2em] text-[#B79559] font-bold mb-3">
                    Flexible Preparation Tracks
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {selectedCourse.tracks.map((track) => (
                      <div
                        key={track.duration}
                        className="p-4 rounded-xl bg-neutral-950 border border-[#B79559]/30"
                      >
                        <p className="font-heading text-base font-bold text-[#D8C294]">
                          {track.duration}
                        </p>
                        <p className="text-xs font-semibold text-white mt-0.5">
                          {track.label}
                        </p>
                        <p className="text-xs text-white/70 mt-2 leading-relaxed">
                          {track.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Structured Syllabus Modules */}
              <div>
                <h2 className="text-xs uppercase tracking-[0.2em] text-[#B79559] font-bold mb-3">
                  Curriculum &amp; Preparation Structure
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedCourse.modules.map((mod) => (
                    <div
                      key={mod.code}
                      className="p-4 rounded-xl bg-neutral-950 border border-white/10 space-y-2.5"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded bg-[#B79559]/20 border border-[#B79559]/40 text-[#D8C294] text-xs font-bold flex items-center justify-center shrink-0">
                          {mod.code}
                        </span>
                        <h3 className="font-heading text-sm sm:text-base font-bold text-white">
                          {mod.title}
                        </h3>
                      </div>
                      <ul className="space-y-1.5 text-xs text-white/80">
                        {mod.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#B79559] mt-1.5 shrink-0" />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* What Students Receive & Ideal For */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="md:col-span-7 p-4 sm:p-5 rounded-xl bg-neutral-950 border border-[#B79559]/25 space-y-2.5">
                  <h2 className="text-xs uppercase tracking-wider text-[#D8C294] font-bold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#B79559]" />
                    What Students Receive
                  </h2>
                  <ul className="space-y-1.5 text-xs text-white/85">
                    {selectedCourse.whatStudentsReceive.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#B79559] mt-0.5 shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="md:col-span-5 p-4 sm:p-5 rounded-xl bg-[#B79559]/10 border border-[#B79559]/35 flex flex-col justify-between space-y-3">
                  <div>
                    <h2 className="text-xs uppercase tracking-wider text-[#D8C294] font-bold flex items-center gap-1.5 mb-2">
                      <Users className="w-3.5 h-3.5 text-[#B79559]" />
                      Ideal For
                    </h2>
                    <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                      {selectedCourse.idealFor}
                    </p>
                  </div>
                  <p className="text-[11px] text-[#D8C294]/80 italic">
                    Bilingual classroom guidance (Hindi &amp; English).
                  </p>
                </div>
              </div>
            </div>

            {/* Sticky Modal Footer */}
            <div className="p-4 sm:px-7 sm:py-4 border-t border-[#B79559]/25 bg-black flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                onClick={handleCloseModal}
                className="px-4 py-2 rounded text-xs font-semibold text-white/70 hover:text-white border border-white/15 hover:border-white/35 transition-colors cursor-pointer"
              >
                Close
              </button>
              <Button
                type="button"
                onClick={handleEnquireFromModal}
                variant="gold"
                size="md"
                icon={<ArrowUpRight className="w-4 h-4" />}
              >
                Enquire About This Programme
              </Button>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
};
