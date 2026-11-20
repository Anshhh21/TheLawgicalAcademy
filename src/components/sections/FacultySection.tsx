'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Clock } from 'lucide-react';
import { facultyData } from '@/data/facultyData';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PlaceholderBadge } from '@/components/ui/PlaceholderBadge';
import { FacultyMember } from '@/types';

export const FacultySection: React.FC = () => {
  return (
    <section id="faculty" className="py-20 sm:py-28 bg-[#F7F3EA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="Academic Mentorship"
          title="Distinguished Faculty & Guest Jurists"
          subtitle="A dedicated pedagogical collective specializing in bare act mechanics, constitutional jurisprudence, and procedural court craft."
          alignment="center"
        />

        {/* Global notice */}
        <div className="text-center mb-10">
          <PlaceholderBadge
            label="Faculty Profiles & Academic Designations Will Be Populated Upon Official Roster Confirmation"
            variant="subtle"
            className="text-xs"
          />
        </div>

        {/* Faculty Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facultyData.map((faculty: FacultyMember, index: number) => (
            <motion.div
              key={faculty.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#FFFFFF] rounded-sm border border-[#14243A]/10 hover:border-[#B79559] hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Faculty Portrait / Placeholder */}
                <div className="relative aspect-[4/4.5] w-full bg-[#14243A] overflow-hidden">
                  <Image
                    src={faculty.image}
                    alt={faculty.name}
                    fill
                    className="object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                  
                  {/* Badge */}
                  <div className="absolute top-3 right-3 bg-[#0A1320]/90 px-2.5 py-1 rounded-xs border border-[#B79559]/40">
                    <span className="text-[10px] text-[#D8C294] uppercase tracking-wider font-semibold">
                      Faculty Placeholder
                    </span>
                  </div>
                </div>

                {/* Profile Details */}
                <div className="p-6">
                  <h3 className="font-heading text-lg font-bold text-[#14243A] group-hover:text-[#9E7D42] transition-colors leading-snug">
                    {faculty.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#B79559] mt-0.5">
                    {faculty.title}
                  </p>

                  <div className="space-y-2 mt-4 pt-4 border-t border-[#14243A]/10 text-xs text-[#252525]/80">
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

                  <p className="mt-4 text-xs text-[#252525]/70 italic leading-relaxed">
                    {faculty.bio}
                  </p>
                </div>
              </div>

              {/* Bottom Card Plaque */}
              <div className="px-6 py-3 bg-[#FAF8F3] border-t border-[#14243A]/5">
                <span className="text-[10px] font-mono text-[#7E6332] block">
                  [PROFILE CARD READY FOR REAL DATA]
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

