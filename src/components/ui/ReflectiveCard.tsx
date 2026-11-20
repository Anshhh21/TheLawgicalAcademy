'use client';

import React, { useState, useRef } from 'react';

interface ReflectiveCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export const ReflectiveCard: React.FC<ReflectiveCardProps> = ({
  children,
  className = '',
  glowColor = 'rgba(183, 149, 89, 0.15)',
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative rounded-sm overflow-hidden transition-all duration-300 ${className}`}
      style={{
        boxShadow: isHovered
          ? '0 12px 36px -8px rgba(14, 26, 43, 0.18), 0 0 0 1px rgba(183, 149, 89, 0.35)'
          : '0 4px 16px -2px rgba(14, 26, 43, 0.08), 0 0 0 1px rgba(183, 149, 89, 0.18)',
      }}
    >
      {/* Dynamic reflective glow follows mouse */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, ${glowColor}, transparent 60%)`,
          }}
        />
      )}
      <div className="relative z-10 h-full flex flex-col">{children}</div>
    </div>
  );
};

