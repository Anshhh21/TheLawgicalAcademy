'use client';

import React, { useEffect, useState, useRef } from 'react';

interface CounterNumberProps {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export const CounterNumber: React.FC<CounterNumberProps> = ({
  value,
  duration = 1800,
  prefix = '',
  suffix = '',
  className = '',
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // Check reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      const frame = requestAnimationFrame(() => setCount(value));
      return () => cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            let startTime: number | null = null;

            const step = (timestamp: number) => {
              if (!startTime) startTime = timestamp;
              const progress = Math.min((timestamp - startTime) / duration, 1);
              // Ease-out cubic easing
              const easeOut = 1 - Math.pow(1 - progress, 3);
              setCount(Math.floor(easeOut * value));

              if (progress < 1) {
                window.requestAnimationFrame(step);
              } else {
                setCount(value);
              }
            };

            window.requestAnimationFrame(step);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, duration, hasAnimated]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
};

