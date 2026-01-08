'use client';

import React, { useState } from 'react';
import Image from "next/image";
import Button from './Button';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 bg-white border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-6 md:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 relative bg-[#E8A22E] border-2 border-black rounded-full overflow-hidden shrink-0 group-hover:scale-105 transition-transform">
                <Image src="/logo.png" alt="Dictation Doggy" fill className="object-cover" />
            </div>
            <span className="text-xl font-bold tracking-tight">Dictation Doggy</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#features" className="font-bold hover:text-[#E8A22E] transition-colors">Features</Link>
          <Link href="#pricing" className="font-bold hover:text-[#E8A22E] transition-colors">Pricing</Link>
          <Link href="#faq" className="font-bold hover:text-[#E8A22E] transition-colors">FAQ</Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
             <Button variant="primary" href="https://dictationdoggy.s3.amazonaws.com/downloads/DictationDoggy_Latest.zip" className="px-6 py-2 text-base shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5">
                Download
             </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={toggleMenu}>
          <div className="w-8 flex flex-col gap-1.5">
            <span className={`block h-0.5 w-full bg-black transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block h-0.5 w-full bg-black transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-0.5 w-full bg-black transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b-4 border-black p-6 flex flex-col gap-6 shadow-brutal">
          <nav className="flex flex-col gap-4 text-center">
            <Link href="#features" className="text-xl font-bold py-2 hover:bg-[#F0F0F0]" onClick={toggleMenu}>Features</Link>
            <Link href="#pricing" className="text-xl font-bold py-2 hover:bg-[#F0F0F0]" onClick={toggleMenu}>Pricing</Link>
            <Link href="#faq" className="text-xl font-bold py-2 hover:bg-[#F0F0F0]" onClick={toggleMenu}>FAQ</Link>
          </nav>
          <Button variant="primary" href="https://dictationdoggy.s3.amazonaws.com/downloads/DictationDoggy_Latest.zip" className="w-full justify-center">
            Download for Mac
          </Button>
        </div>
      )}
    </header>
  );
}
