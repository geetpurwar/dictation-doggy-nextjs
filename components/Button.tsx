'use client';

import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  href?: string;
  onClick?: () => void;
}

export default function Button({ children, variant = 'primary', className = '', href, onClick }: ButtonProps) {

  const baseStyles = "inline-flex items-center font-bold border-4 border-black transition-all active:translate-y-1 active:shadow-none";

  const variants = {
    // Primary: White bg, Black text -> Hover: Black bg, Orange text (Mono Theme)
    primary: "bg-white text-black hover:bg-black hover:text-[#E8A22E] shadow-[var(--shadow-brutal)] hover:translate-y-[-4px]",

    // Secondary: Orange bg, Black text -> Hover: White bg, Black text
    secondary: "bg-[#E8A22E] text-black hover:bg-white hover:text-black shadow-[var(--shadow-brutal)] hover:translate-y-[-4px]",

    // Outline: Transparent/White, Black text -> Hover: Black bg, White text
    outline: "bg-transparent text-black hover:bg-black hover:text-white shadow-[var(--shadow-brutal)] hover:translate-y-[-4px]",
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  const handleClick = () => {
    // Auto-track downloads
    if (href && (href.endsWith('.zip') || href.endsWith('.dmg'))) {
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'download', {
          event_category: 'engagement',
          event_label: href,
          file_name: href.split('/').pop()
        });
      }
    }

    if (onClick) onClick();
  };

  if (href) {
    return (
      <Link href={href} className={combinedClasses} onClick={handleClick}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} onClick={handleClick}>
      {children}
    </button>
  );
}
