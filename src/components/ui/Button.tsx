'use client';

import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'gold' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  target?: string;
  rel?: string;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
  iconPosition = 'right',
  target,
  rel,
  type = 'submit',
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-sm cursor-pointer select-none active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-2 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-7 py-3.5 gap-2.5',
  }[size];

  const variantStyles = {
    primary:
      'bg-[#14243A] text-[#FAF8F3] hover:bg-[#0E1A2B] hover:shadow-lg hover:shadow-[#14243A]/20 border border-[#B79559]/30 hover:border-[#B79559]',
    gold: 'bg-[#B79559] text-[#0E1A2B] font-semibold hover:bg-[#C7AA71] hover:shadow-lg hover:shadow-[#B79559]/25 border border-[#B79559]',
    outline:
      'bg-transparent text-[#14243A] hover:bg-[#14243A] hover:text-[#FAF8F3] border border-[#14243A]/40 hover:border-[#14243A]',
    ghost:
      'bg-transparent text-[#14243A] hover:bg-[#14243A]/5 hover:text-[#0E1A2B]',
  }[variant];

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
        target={target}
        rel={rel}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
    >
      {content}
    </button>
  );
};

