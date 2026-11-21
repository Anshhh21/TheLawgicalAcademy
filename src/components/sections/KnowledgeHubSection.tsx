'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Clock, Calendar, ArrowRight } from 'lucide-react';
import { blogsData } from '@/data/blogsData';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { BlogPost } from '@/types';

export const KnowledgeHubSection: React.FC = () => {
  return (
    <section id="knowledge-hub" className="py-20 sm:py-28 bg-black text-[#FAF8F3] relative border-t border-[#B79559]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="Academic Insights"
          title="Knowledge Hub & Legal Analysis"
          subtitle="Editorial analyses on statutory amendments, landmark Supreme Court ratio decidendi, and judicial examination drafting strategies."
          alignment="center"
          theme="dark"
        />

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {blogsData.map((post: BlogPost, index: number) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-neutral-950 rounded-sm border border-[#B79559]/20 hover:border-[#B79559] hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Thumbnail */}
                <div className="relative aspect-[16/9] w-full bg-black overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-104 transition-transform duration-500"
                  />
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 bg-black/90 px-3 py-1 rounded-xs border border-[#B79559]/40">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#D8C294]">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Metadata */}
                  <div className="flex items-center gap-4 text-xs text-white/50 mb-3">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#B79559]" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#B79559]" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-lg font-bold text-white group-hover:text-[#D8C294] transition-colors leading-snug">
                    <Link href="#contact" className="hover:underline">
                      {post.title}
                    </Link>
                  </h3>

                  {/* Excerpt */}
                  <p className="mt-3 text-sm text-[#FAF8F3]/75 leading-relaxed font-light line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Read More Link */}
              <div className="px-6 py-4 bg-[#0D0D0D] border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-white/50">By {post.author}</span>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[#B79559] group-hover:text-[#D8C294] transition-colors"
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
