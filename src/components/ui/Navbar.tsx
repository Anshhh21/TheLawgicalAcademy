'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight, Scale } from 'lucide-react';
import { navigationLinks } from '@/data/navigationData';
import { academyData } from '@/data/academyData';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#14243A]/95 backdrop-blur-md shadow-md shadow-[#08101A]/30 py-3 border-b border-[#B79559]/25'
            : 'bg-[#14243A] py-4.5 border-b border-[#B79559]/20'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Wordmark Logo */}
            <Link
              href="#home"
              className="group flex items-center gap-3 focus:outline-none"
              aria-label="The Lawgical Academy Home"
            >
              <div className="w-10 h-10 rounded-sm bg-[#0E1A2B] border border-[#B79559]/60 flex items-center justify-center text-[#B79559] group-hover:border-[#B79559] group-hover:bg-[#1C3352] transition-colors shrink-0">
                <Scale className="w-5 h-5 text-[#B79559]" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-lg sm:text-xl font-bold tracking-wider text-[#FAF8F3] group-hover:text-[#D8C294] transition-colors uppercase leading-none">
                  {academyData.name}
                </span>
                <span className="text-[10px] tracking-[0.25em] text-[#B79559] uppercase font-semibold mt-1">
                  Judicial & Legal Studies
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navigationLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-xs xl:text-sm font-medium tracking-wide text-[#FAF8F3]/85 hover:text-[#D8C294] transition-colors uppercase py-1 relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#B79559] transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Button
                href="#contact"
                variant="gold"
                size="sm"
                icon={<ArrowUpRight className="w-3.5 h-3.5" />}
              >
                Enquire Now
              </Button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex lg:hidden items-center gap-2">
              <Button
                href="#contact"
                variant="gold"
                size="sm"
                className="text-xs px-2.5 py-1.5"
              >
                Enquire
              </Button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#FAF8F3] hover:text-[#D8C294] focus:outline-none"
                aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-[#D8C294]" />
                ) : (
                  <Menu className="w-6 h-6 text-[#FAF8F3]" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-[#08101A]/80 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Menu */}
          <div className="fixed top-[65px] right-0 bottom-0 w-[80%] max-w-sm bg-[#14243A] border-l border-[#B79559]/30 p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
            <div className="space-y-4">
              <div className="pb-4 border-b border-[#B79559]/20">
                <span className="text-xs uppercase tracking-widest text-[#B79559] font-semibold">
                  Navigation
                </span>
              </div>
              <div className="flex flex-col space-y-2">
                {navigationLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-sm font-medium uppercase tracking-wider text-[#FAF8F3] hover:text-[#D8C294] hover:bg-[#1C3352]/50 py-2.5 px-3 rounded transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#B79559]/20 space-y-3">
              <Button
                href="#contact"
                variant="gold"
                size="md"
                className="w-full justify-center"
                onClick={() => setMobileMenuOpen(false)}
                icon={<ArrowUpRight className="w-4 h-4" />}
              >
                Admission Enquiry
              </Button>
              <div className="text-center pt-2">
                <p className="text-[11px] text-[#FAF8F3]/60 uppercase tracking-widest">
                  Prototype Preview Mode
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

