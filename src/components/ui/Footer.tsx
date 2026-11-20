'use client';

import React from 'react';
import Link from 'next/link';
import { Scale, MapPin, Phone } from 'lucide-react';
import { academyData } from '@/data/academyData';
import { contactData } from '@/data/contactData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#EFECE6] text-[#252525] border-t border-[#D5CFC2] pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid matching VLS Law Academy Structure */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-[#D5CFC2]/80">
          
          {/* Col 1: Brand & Overview (5 cols) */}
          <div className="lg:col-span-5 space-y-5 pr-0 lg:pr-8">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-sm bg-[#14243A] flex items-center justify-center text-[#B79559] shadow-sm">
                <Scale className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-xl font-bold tracking-tight text-[#14243A] leading-none">
                  {academyData.name}
                </span>
                <span className="text-[10px] tracking-[0.2em] text-[#B79559] uppercase font-bold mt-1">
                  Premier Law &amp; Judicial Institute
                </span>
              </div>
            </div>

            <p className="text-sm text-[#4A4A4A] leading-relaxed max-w-md font-normal">
              {academyData.name} as a coaching institute for Law graduates assisting them to scale up the Judicial services exams, Law optional subject (IAS/civil services exam), UGC (Junior research fellowship/ lectureship for law), and ADPO (Public Prosecution) exams.
            </p>

            <div className="pt-1">
              <span className="inline-flex items-center text-[11px] text-[#8C6D37] bg-[#FAF8F3] px-3 py-1 rounded border border-[#B79559]/30 font-medium">
                Prototype Architecture — Replaceable Academy Content
              </span>
            </div>
          </div>

          {/* Col 2: Explore (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-heading text-base font-bold text-[#14243A] tracking-tight">
              Explore
            </h3>
            <ul className="space-y-3 text-sm text-[#4A4A4A]">
              <li>
                <Link href="#home" className="hover:text-[#14243A] hover:font-medium transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#courses" className="hover:text-[#14243A] hover:font-medium transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="#why-choose" className="hover:text-[#14243A] hover:font-medium transition-colors">
                  Why Lawgical
                </Link>
              </li>
              <li>
                <Link href="#results" className="hover:text-[#14243A] hover:font-medium transition-colors">
                  Results
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-[#14243A] hover:font-medium transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Follow us on (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-heading text-base font-bold text-[#14243A] tracking-tight">
              Follow us on
            </h3>
            <ul className="space-y-3 text-sm text-[#4A4A4A]">
              <li>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 hover:text-[#FF0000] transition-colors group"
                >
                  <svg className="w-4 h-4 fill-current text-[#14243A] group-hover:text-[#FF0000] shrink-0" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  <span>Youtube</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 hover:text-[#E4405F] transition-colors group"
                >
                  <svg className="w-4 h-4 fill-current text-[#14243A] group-hover:text-[#E4405F] shrink-0" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 hover:text-[#0A66C2] transition-colors group"
                >
                  <svg className="w-4 h-4 fill-current text-[#14243A] group-hover:text-[#0A66C2] shrink-0" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <span>Linkedin</span>
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 hover:text-[#1877F2] transition-colors group"
                >
                  <svg className="w-4 h-4 fill-current text-[#14243A] group-hover:text-[#1877F2] shrink-0" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span>Facebook</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Us (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-heading text-base font-bold text-[#14243A] tracking-tight">
              Contact Us
            </h3>
            
            <div className="space-y-4 text-sm text-[#4A4A4A]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#14243A] shrink-0 mt-1" />
                <div>
                  <span className="text-[#C0392B] font-semibold">Address : </span>
                  <span className="leading-relaxed">
                    {contactData.addressLine1}, {contactData.cityStateZip} [ACADEMY ADDRESS]
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#14243A] shrink-0 mt-1" />
                <div className="space-y-0.5 font-medium text-[#252525]">
                  <p>+91 95002 07811,</p>
                  <p>+91 95000 25216</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#666666] gap-4">
          <p>© {new Date().getFullYear()} {academyData.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#terms" className="hover:text-[#14243A] transition-colors">
              Terms
            </Link>
            <Link href="#privacy" className="hover:text-[#14243A] transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
