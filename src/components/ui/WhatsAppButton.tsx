'use client';

import React from 'react';
import Link from 'next/link';

export const WhatsAppButton: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 group flex items-center gap-3">
      {/* Tooltip */}
      <span className="hidden sm:inline-block px-3 py-1.5 rounded-full bg-[#14243A] text-white text-xs font-medium shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none border border-[#B79559]/30">
        Chat with Admissions
      </span>

      {/* WhatsApp Floating Button */}
      <Link
        href="https://wa.me/919500207811?text=Hello%20The%20Lawgical%20Academy%2C%20I%20would%20like%20to%20enquire%20about%20Judiciary%20%26%20ADPO%20coaching."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact The Lawgical Academy on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-110 active:scale-95 transition-transform duration-200 ease-out focus:outline-hidden focus:ring-4 focus:ring-[#25D366]/40"
      >
        {/* Radar ping ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none" />

        {/* WhatsApp SVG Icon */}
        <svg
          className="w-8 h-8 fill-current relative z-10"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.596 2.669-.699c.974.546 1.763.782 2.791.782h.001c3.18 0 5.766-2.586 5.767-5.766.001-3.182-2.585-5.766-5.768-5.766zm3.376 8.204c-.149.42-1.047.808-1.442.846-.395.038-.853.111-2.474-.537-1.621-.649-2.684-2.29-2.765-2.399-.082-.109-.646-.86-0.646-1.637 0-.777.408-1.16.554-1.317.147-.157.324-.197.432-.197.108 0 .216.002.311.006.1.005.234-.038.365.277.136.328.463 1.13.504 1.213.04.083.067.18.013.288-.054.108-.081.176-.162.271-.081.095-.171.212-.245.285-.082.08-.168.167-.072.332.096.164.426.703.914 1.138.629.56 1.159.734 1.323.816.164.082.261.072.359-.041.098-.113.42-.489.532-.656.113-.167.227-.139.38-.083.153.056.974.459 1.141.543.167.084.279.125.32.195.041.07.041.408-.108.828zM12.012 2C6.486 2 2 6.479 2 12c0 2.186.702 4.212 1.895 5.861L2 22l4.316-1.848C7.905 21.247 9.88 22 12.012 22c5.526 0 10.012-4.479 10.012-10S17.538 2 12.012 2zm0 18.2c-1.83 0-3.535-.589-4.93-1.59l-.353-.255-2.56.705.719-2.493-.277-.373C3.52 14.869 3 13.488 3 12c0-4.963 4.04-9 9.012-9 4.973 0 9.012 4.037 9.012 9s-4.039 9.2-9.012 9.2z" />
        </svg>
      </Link>
    </div>
  );
};

