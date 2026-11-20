'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Clock, GraduationCap, Check, ArrowUpRight, BookOpen, Layers } from 'lucide-react';
import ReflectiveCard from '@/components/reactbits/ReflectiveCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { PlaceholderBadge } from '@/components/ui/PlaceholderBadge';

const coursesList = [
  {
    code: 'Course 1',
    targetExam: 'MP Civil Judge (Junior Division)',
    title: 'Civil Judge Comprehensive Pre-cum-Mains Batch',
    tagline: 'Complete bare-act mastery, judgment writing & personal mentorship',
    duration: '12 Months Intensive',
    mode: 'Classroom & Hybrid Mentorship',
    subjects: [
      'Constitutional Law & Civil Procedure Code (CPC)',
      'Bharatiya Nyaya Sanhita (BNS) & BNSS / BSA Criminal Reforms',
      'Law of Contracts, Torts, Specific Relief & Limitation',
      'MP Accommodation Control Act & Land Revenue Code (LRC)',
      'Civil & Criminal Judgment Writing and Charge Framing'
    ],
    features: [
      'Weekly simulated Prelims test series with negative marking',
      'One-on-one evaluation of Mains descriptive answers by senior mentors',
      'Dissection of landmark Supreme Court & High Court precedents'
    ]
  },
  {
    code: 'Course 2',
    targetExam: 'MP ADPO (Prosecution Officer)',
    title: 'ADPO & Public Prosecution Fast-Track Batch',
    tagline: 'Focused preparation for Assistant District Public Prosecution Officer examination',
    duration: '6 Months Accelerated',
    mode: 'Classroom & Weekend Batch Available',
    subjects: [
      'Major Criminal Codes: BNS, BNSS & Bharatiya Sakshya Adhiniyam',
      'Special & Minor Local Laws of Madhya Pradesh (20+ Acts)',
      'Protection of Children from Sexual Offences (POCSO) & SC/ST Act',
      'NDPS Act, Arms Act, Excise & Motor Vehicles Acts',
      'General Studies & MP State Knowledge for ADPO'
    ],
    features: [
      'Comprehensive MCQ question bank with 5000+ targeted questions',
      'Focused revision on minor acts with high weightage in ADPO exam',
      'Speed and accuracy drills for high-cutoff clearance'
    ]
  },
  {
    code: 'Course 3',
    targetExam: 'New Criminal Laws Specialization',
    title: 'BNS, BNSS & BSA Comparative Masterclass',
    tagline: 'Clause-by-clause comparative transition from IPC, CrPC & Evidence Act',
    duration: '8 Weeks Dedicated',
    mode: 'Intensive Workshop & Weekend Seminar',
    subjects: [
      'Bharatiya Nyaya Sanhita (BNS) vs Indian Penal Code (IPC)',
      'Bharatiya Nagarik Suraksha Sanhita (BNSS) vs Code of Criminal Procedure',
      'Bharatiya Sakshya Adhiniyam (BSA) vs Indian Evidence Act',
      'Critical analysis of electronic records & forensic admissibility',
      'Handling transition clauses in upcoming 2026–2027 judicial papers'
    ],
    features: [
      'Comparative chart compendiums and section cross-reference maps',
      'Practical drafting exercises for trial court and appellate filings',
      'Essential for all serving advocates and judicial aspirants'
    ]
  },
  {
    code: 'Course 4',
    targetExam: 'Integrated Foundation (LL.B. Students)',
    title: '2-Year Integrated Judicial Foundation Batch',
    tagline: 'Long-term foundational training for law undergraduates and early graduates',
    duration: '24 Months Progressive',
    mode: 'Flexible Evening & Weekend Batches',
    subjects: [
      'Fundamental jurisprudence and statutory interpretation techniques',
      'Holistic coverage of substantive, procedural & personal laws',
      'Language papers: Legal Hindi & English translation masterclass',
      'Extensive moot court style problem solving & analytical case laws',
      'Personalized judicial career roadmap from year 1 to selection'
    ],
    features: [
      'Milestone-driven learning designed alongside law degree studies',
      'Early command over bare acts before graduation',
      'Interview guidance and personality enrichment modules'
    ]
  }
];

export const CoursesSection: React.FC = () => {
  return (
    <section id="courses" className="py-20 sm:py-28 bg-[#101E31] text-[#FAF8F3] relative overflow-hidden border-t border-[#B79559]/20">
      {/* Background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#B79559]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#1C3352]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          eyebrow="Curated Examination Programs"
          title="Courses Offered at The Lawgical Academy"
          subtitle="Rigorous, milestone-driven programs structured around competitive state judicial service and prosecution syllabi."
          alignment="center"
          theme="dark"
        />

        {/* Global Courses Status Notice */}
        <div className="max-w-xl mx-auto mb-12 text-center">
          <PlaceholderBadge
            label="[COURSE DETAILS TO BE CONFIRMED — CURRICULA & FEES PENDING OFFICIAL RELEASE]"
            variant="subtle"
            className="bg-[#0A1320] text-[#D8C294] border-[#B79559]/30 py-1.5 px-4 text-xs font-semibold"
          />
        </div>

        {/* Course Cards Grid using ReflectiveCard */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {coursesList.map((course, index) => (
            <motion.div
              key={course.code}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full flex"
            >
              <ReflectiveCard
                palette="dark"
                height={580}
                radius={18}
                className="w-full border border-[#B79559]/35 hover:border-[#B79559]/70 transition-colors shadow-2xl"
              >
                <div className="flex flex-col justify-between h-full text-left">
                  {/* Top Badges */}
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                      <span className="text-xs font-black uppercase tracking-widest text-[#0A1320] bg-[#B79559] px-3 py-1 rounded-sm">
                        {course.code}
                      </span>
                      <span className="text-xs font-medium text-[#D8C294] tracking-wide">
                        {course.targetExam}
                      </span>
                    </div>

                    {/* Course Title */}
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mt-4 leading-tight">
                      {course.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/75 mt-2 leading-relaxed">
                      {course.tagline}
                    </p>

                    {/* Duration & Mode Meta */}
                    <div className="grid grid-cols-2 gap-3 my-4 p-3 rounded-lg bg-[#0E1A2B]/80 border border-white/10 text-xs">
                      <div className="flex items-center gap-2 text-white/80">
                        <Clock className="w-4 h-4 text-[#B79559] shrink-0" />
                        <div>
                          <span className="block text-[10px] text-white/50 uppercase">Duration</span>
                          <span className="font-semibold text-white">{course.duration}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-white/80">
                        <GraduationCap className="w-4 h-4 text-[#B79559] shrink-0" />
                        <div>
                          <span className="block text-[10px] text-white/50 uppercase">Delivery</span>
                          <span className="font-semibold text-white">{course.mode}</span>
                        </div>
                      </div>
                    </div>

                    {/* Key Core Subjects */}
                    <div className="space-y-1.5 mt-3">
                      <p className="text-[11px] uppercase tracking-wider text-[#D8C294] font-bold flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5" />
                        Key Curriculum Focus
                      </p>
                      <ul className="grid grid-cols-1 gap-1 text-xs text-white/85">
                        {course.subjects.slice(0, 3).map((sub, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#B79559] mt-1.5 shrink-0" />
                            <span className="leading-snug">{sub}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Features Highlights */}
                    <div className="space-y-1 mt-3 pt-3 border-t border-white/10">
                      <p className="text-[11px] uppercase tracking-wider text-[#D8C294] font-bold flex items-center gap-1.5 mb-1.5">
                        <Layers className="w-3.5 h-3.5" />
                        Pedagogical Distinction
                      </p>
                      {course.features.slice(0, 2).map((feat, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-white/75">
                          <Check className="w-3.5 h-3.5 text-[#B79559] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between mt-auto">
                    <span className="text-[11px] text-white/50 italic">
                      * Batch timing subject to enrollment
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
                </div>
              </ReflectiveCard>
            </motion.div>
          ))}
        </div>

        {/* Bottom Curriculum Advisory Notice */}
        <div className="mt-12 p-4 rounded-lg bg-[#0E1A2B] border border-[#B79559]/30 text-center max-w-3xl mx-auto">
          <p className="text-xs text-white/70">
            <span className="text-[#D8C294] font-semibold">Specialized Batches:</span> Additional state-specific local laws (UP, Rajasthan, Delhi, Bihar, Haryana) and customized one-on-one judicial interview preparation modules are available upon admissions consultation.
          </p>
        </div>

      </div>
    </section>
  );
};
