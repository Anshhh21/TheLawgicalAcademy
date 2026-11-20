import React from 'react';
import Link from 'next/link';
import { Scale, Mail, Phone, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';
import { academyData } from '@/data/academyData';
import { contactData } from '@/data/contactData';
import { quickLinks, examQuickLinks } from '@/data/navigationData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A1320] text-[#FAF8F3] border-t border-[#B79559]/25 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-[#FAF8F3]/10">
          {/* Col 1: Brand & Philosophy */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-sm bg-[#14243A] border border-[#B79559] flex items-center justify-center text-[#B79559]">
                <Scale className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-lg font-bold tracking-wider text-[#FAF8F3] uppercase leading-none">
                  {academyData.name}
                </span>
                <span className="text-[10px] tracking-[0.25em] text-[#B79559] uppercase font-semibold mt-1">
                  Institute of Law
                </span>
              </div>
            </div>
            <p className="text-sm text-[#FAF8F3]/70 leading-relaxed pt-2">
              Dedicated coaching institute specialized in Judicial Services Examination and Assistant District Public Prosecution Officer (ADPO) preparation.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 text-xs text-[#B79559] bg-[#14243A] px-3 py-1.5 rounded border border-[#B79559]/30">
                <ShieldCheck className="w-3.5 h-3.5" />
                Prototype Preview Architecture
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="font-heading text-sm uppercase tracking-[0.2em] text-[#D8C294] font-semibold">
              Explore Academy
            </h3>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[#FAF8F3]/75 hover:text-[#D8C294] transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 text-[#B79559] group-hover:translate-x-1 transition-transform" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Programs & Courses */}
          <div className="space-y-4">
            <h3 className="font-heading text-sm uppercase tracking-[0.2em] text-[#D8C294] font-semibold">
              Examination Batches
            </h3>
            <ul className="space-y-2.5 text-sm">
              {examQuickLinks.map((exam) => (
                <li key={exam.label}>
                  <Link
                    href={exam.href}
                    className="text-[#FAF8F3]/75 hover:text-[#D8C294] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B79559]" />
                    <span>{exam.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Placeholder Information */}
          <div className="space-y-4">
            <h3 className="font-heading text-sm uppercase tracking-[0.2em] text-[#D8C294] font-semibold">
              Admissions Desk
            </h3>
            <ul className="space-y-3 text-sm text-[#FAF8F3]/75">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#B79559] shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed">
                  {contactData.addressLine1}, {contactData.cityStateZip}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#B79559] shrink-0" />
                <span className="text-xs">{contactData.phonePrimary}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#B79559] shrink-0" />
                <span className="text-xs">{contactData.emailEnquiries}</span>
              </li>
            </ul>

            <div className="pt-2">
              <p className="text-[11px] text-[#FAF8F3]/50 italic">
                * Note: Final campus address, telephone lines, and verified registration details will be populated upon official documentation.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FAF8F3]/50 gap-4">
          <p>© {new Date().getFullYear()} {academyData.name}. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-[#D8C294]">Law Coaching Prototype Architecture</span>
            <Link href="#home" className="hover:text-[#FAF8F3] transition-colors">Back to Top ↑</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

