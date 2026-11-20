import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  alignment?: 'center' | 'left' | 'right';
  theme?: 'light' | 'dark';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  alignment = 'center',
  theme = 'light',
  className = '',
}) => {
  const alignClass = {
    center: 'text-center mx-auto items-center',
    left: 'text-left mr-auto items-start',
    right: 'text-right ml-auto items-end',
  }[alignment];

  const eyebrowColor = theme === 'dark' ? 'text-[#D8C294]' : 'text-[#B79559]';
  const titleColor = theme === 'dark' ? 'text-[#FAF8F3]' : 'text-[#14243A]';
  const subtitleColor = theme === 'dark' ? 'text-[#FAF8F3]/70' : 'text-[#252525]/75';

  return (
    <div className={`max-w-3xl flex flex-col mb-12 sm:mb-16 ${alignClass} ${className}`}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-6 h-[1px] bg-[#B79559]" />
          <span
            className={`text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase ${eyebrowColor}`}
          >
            {eyebrow}
          </span>
          <span className="w-6 h-[1px] bg-[#B79559]" />
        </div>
      )}
      <h2
        className={`font-heading text-2xl sm:text-4xl lg:text-[42px] font-bold leading-tight tracking-tight ${titleColor}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${subtitleColor}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

