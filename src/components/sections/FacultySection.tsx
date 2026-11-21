'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Clock } from 'lucide-react';
import { facultyData } from '@/data/facultyData';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FacultyMember } from '@/types';

export const FacultySection: React.FC = () => {
  return (
    <section id="faculty" className="py-20 sm:py-28 bg-black text-[#FAF8F3] relative border-t border-[#B79559]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="Academic Mentorship"
          title="Distinguished Faculty & Guest Jurists"
          subtitle="A dedicated pedagogical collective specializing in bare act mechanics, constitutional jurisprudence, and procedural court craft."
          alignment="center"
          theme="dark"
        />

        {/* Faculty Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {facultyData.map((faculty: FacultyMember, index: number) => (
            <motion.div
              key={faculty.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-neutral-950 rounded-sm border border-[#B79559]/20 hover:border-[#B79559] hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Faculty Portrait / Placeholder */}
                <div className="relative aspect-[4/4.5] w-full bg-black overflow-hidden">
                  <Image
                    src={faculty.image}
                    alt={faculty.name}
                    fill
                    className="object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                  
                  {/* Badge */}
                  <div className="absolute top-3 right-3 bg-black/90 px-2.5 py-1 rounded-xs border border-[#B79559]/40">
                    <span className="text-[10px] text-[#D8C294] uppercase tracking-wider font-semibold">
                      Faculty Profile
                    </span>
                  </div>
                </div>

                {/* Faculty Info */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-heading text-lg font-bold text-white group-hover:text-[#D8C294] transition-colors leading-snug">
                      {faculty.name}
                    </h3>
                    <p className="text-xs text-[#D8C294] font-medium mt-0.5">
                      {faculty.title}
                    </p>
                  </div>

                  {/* Qualifications */}
                  <div className="space-y-2 mt-4 pt-4 border-t border-white/10 text-xs text-[#FAF8F3]/80">
                    <div className="flex items-start gap-2">
                      <GraduationCap className="w-4 h-4 text-[#B79559] shrink-0 mt-0.5" />
                      <span>{faculty.qualifications}</span>
                    </div>

                    <div className="flex items-start gap-2">
                      <BookOpen className="w-4 h-4 text-[#B79559] shrink-0 mt-0.5" />
                      <span>{faculty.subjectExpertise}</span>
                    </div>

                    <div className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-[#B79559] shrink-0 mt-0.5" />
                      <span>{faculty.experience}</span>
                    </div>
                  </div>

                  <p className="mt-4 text-xs text-[#FAF8F3]/70 italic leading-relaxed">
                    {faculty.bio}
                  </p>
                </div>
              </div>

              {/* Bottom Card Plaque */}
              <div className="px-6 py-3 bg-[#0D0D0D] border-t border-white/10">
                <span className="text-[10px] font-mono text-[#D8C294] block">
                  Judicial Faculty Collective
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
