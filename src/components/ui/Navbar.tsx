'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { navigationLinks } from '@/data/navigationData';

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
            ? 'bg-black/95 backdrop-blur-md shadow-lg shadow-black/90 py-3 border-b border-[#B79559]/20'
            : 'bg-black/85 backdrop-blur-sm py-4 border-b border-white/10'
        }`}
      >
        <div className="w-full px-4 sm:px-8 lg:px-12 flex items-center justify-between">
          
          {/* Text Aligned to the Left - Compact & Refined */}
          <Link
            href="#home"
            className="group flex flex-col text-left focus:outline-none"
            aria-label="The Lawgical Academy Home"
          >
            <span className="font-heading text-sm sm:text-base font-bold tracking-wide text-white leading-tight group-hover:text-[#D8C294] transition-colors">
              The Lawgical
            </span>
            <span className="text-[11px] sm:text-xs tracking-wider text-[#FAF8F3]/70 font-medium leading-none">
              Academy
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navigationLinks.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-xs xl:text-sm font-medium tracking-wide transition-colors py-1 relative group ${
                  index === 0
                    ? 'text-[#B79559] font-semibold'
                    : 'text-[#FAF8F3]/85 hover:text-[#D8C294]'
                }`}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#B79559] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Mobile Hamburger Toggle */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#FAF8F3] hover:text-[#D8C294] focus:outline-none cursor-pointer"
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
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/85 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Menu */}
          <div className="fixed top-[60px] right-0 bottom-0 w-[75%] max-w-sm bg-black border-l border-[#B79559]/30 p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
            <div className="space-y-4">
              <div className="pb-4 border-b border-[#B79559]/20">
                <span className="text-xs uppercase tracking-widest text-[#B79559] font-semibold">
                  The Lawgical Academy
                </span>
              </div>
              <div className="flex flex-col space-y-2">
                {navigationLinks.map((item, index) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-sm font-medium tracking-wider py-2.5 px-3 rounded transition-colors ${
                      index === 0
                        ? 'text-[#B79559] bg-[#0D0D0D]'
                        : 'text-[#FAF8F3] hover:text-[#D8C294] hover:bg-neutral-900'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 text-center">
              <p className="text-[11px] text-[#FAF8F3]/60 tracking-wider">
                Premier Judicial &amp; Legal Education
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
