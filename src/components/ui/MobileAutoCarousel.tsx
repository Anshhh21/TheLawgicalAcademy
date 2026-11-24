'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export interface MobileCarouselItem {
  src: string;
  alt: string;
  title?: string;
}

interface MobileAutoCarouselProps {
  items: MobileCarouselItem[];
  intervalMs?: number;
}

export const MobileAutoCarousel: React.FC<MobileAutoCarouselProps> = ({
  items,
  intervalMs = 1500,
}) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const pausedRef = useRef(false);
  const indexRef = useRef(0);

  useEffect(() => {
    if (items.length <= 1) return;
    if (
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    const timer = window.setInterval(() => {
      if (pausedRef.current || document.hidden) return;
      const track = trackRef.current;
      if (!track || track.offsetParent === null) return;

      const nextIndex = (indexRef.current + 1) % items.length;
      const targetChild = track.children[nextIndex] as HTMLElement | undefined;
      if (!targetChild) return;

      const left =
        targetChild.offsetLeft - (track.clientWidth - targetChild.clientWidth) / 2;
      track.scrollTo({ left: Math.max(0, left), behavior: 'smooth' });
      indexRef.current = nextIndex;
      setActiveIndex(nextIndex);
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [items.length, intervalMs]);

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track || !track.children.length) return;
    const center = track.scrollLeft + track.clientWidth / 2;
    let closest = 0;
    let bestDist = Infinity;
    for (let i = 0; i < track.children.length; i += 1) {
      const child = track.children[i] as HTMLElement;
      const childCenter = child.offsetLeft + child.clientWidth / 2;
      const dist = Math.abs(childCenter - center);
      if (dist < bestDist) {
        bestDist = dist;
        closest = i;
      }
    }
    indexRef.current = closest;
    setActiveIndex(closest);
  };

  return (
    <div className="sm:hidden w-full">
      <div
        ref={trackRef}
        onScroll={handleScroll}
        onTouchStart={() => {
          pausedRef.current = true;
        }}
        onTouchEnd={() => {
          pausedRef.current = false;
        }}
        onTouchCancel={() => {
          pausedRef.current = false;
        }}
        className="w-full overflow-x-auto snap-x snap-mandatory flex gap-4 px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            className="snap-center shrink-0 w-[82vw] aspect-[4/3] rounded-xl overflow-hidden border border-[#B79559]/30 bg-neutral-950 shadow-xl"
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={800}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Subtle Progress Dots */}
      <div className="flex items-center justify-center gap-1.5 mt-3">
        {items.map((_, idx) => (
          <span
            key={idx}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              idx === activeIndex ? 'w-4 bg-[#B79559]' : 'w-1.5 bg-white/25'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

