'use client';

import React from 'react';
import { AlertCircle } from 'lucide-react';

interface PlaceholderBadgeProps {
  label?: string;
  variant?: 'subtle' | 'warning' | 'pill';
  className?: string;
}

export const PlaceholderBadge: React.FC<PlaceholderBadgeProps> = ({
  label = 'Data Pending Official Confirmation',
  variant = 'subtle',
  className = '',
}) => {
  if (variant === 'pill') {
    return (
      <span
        className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium tracking-wide uppercase bg-[#B79559]/10 text-[#7E6332] border border-[#B79559]/30 ${className}`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#B79559] animate-pulse" />
        {label}
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-medium bg-[#14243A]/5 text-[#14243A]/80 border border-[#14243A]/15 ${className}`}
    >
      <AlertCircle className="w-3 h-3 text-[#B79559]" />
      <span>{label}</span>
    </span>
  );
};

