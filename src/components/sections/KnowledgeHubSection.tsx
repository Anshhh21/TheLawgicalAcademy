'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Clock, Calendar, ArrowRight } from 'lucide-react';
import { blogsData } from '@/data/blogsData';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PlaceholderBadge } from '@/components/ui/PlaceholderBadge';
import { BlogPost } from '@/types';

export const KnowledgeHubSection: React.FC = () => {
  return (
    <section id="knowledge-hub" className="py-20 sm:py-28 bg-[#F7F3EA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="Academic Insights"
          title="Knowledge Hub & Legal Analysis"
          subtitle="Editorial analyses on statutory amendments, landmark Supreme Court ratio decidendi, and judicial examination drafting strategies."
          alignment="center"
        />

        {/* Global notice */}
        <div className="text-center mb-10">
          <PlaceholderBadge
            label="Sample Legal Articles — Full Analytical Dossiers Will Be Authored & Published Periodically"
            variant="subtle"
            className="text-xs"
          />
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogsData.map((post: BlogPost, index: number) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#FFFFFF] rounded-sm border border-[#14243A]/10 hover:border-[#B79559] hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Thumbnail */}
                <div className="relative aspect-[16/9] w-full bg-[#14243A] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-104 transition-transform duration-500"
                  />
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 bg-[#0A1320]/90 px-3 py-1 rounded-xs border border-[#B79559]/40">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#D8C294]">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Metadata */}
                  <div className="flex items-center gap-4 text-xs text-[#252525]/60 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#B79559]" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#B79559]" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-lg font-bold text-[#14243A] group-hover:text-[#9E7D42] transition-colors leading-snug">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="mt-3 text-xs sm:text-sm text-[#252525]/75 leading-relaxed font-light">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Card Footer with Read More CTA */}
              <div className="px-6 py-4 bg-[#FAF8F3] border-t border-[#14243A]/5 flex items-center justify-between">
                <span className="text-xs font-medium text-[#252525]/70">
                  {post.author}
                </span>
                <Link
                  href="#contact"
                  className="text-xs uppercase tracking-wider font-bold text-[#14243A] group-hover:text-[#B79559] flex items-center gap-1 transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};

