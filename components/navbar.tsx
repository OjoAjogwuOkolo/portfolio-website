'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#0A0A0A]/80 backdrop-blur-md border-b border-[#27272A] py-4 shadow-lg' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 text-sm">O</span>
          <span>Okolo<span className="text-amber-500">.</span></span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-[#A1A1AA] hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Resume Button */}
        <div className="hidden md:flex items-center gap-4">
          <a 
            href="/resume.pdf" 
            download="Goodluck_Okolo_Resume.pdf"
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl text-xs font-semibold bg-amber-500 hover:bg-amber-400 text-zinc-950 transition-all shadow-sm shadow-amber-500/10"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#A1A1AA] hover:text-white"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#111111] border-b border-[#27272A] px-6 py-6 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-[#A1A1AA] hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="/resume.pdf" 
            download="Goodluck_Okolo_Resume.pdf"
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full text-center py-2.5 rounded-xl text-xs font-semibold bg-amber-500 text-zinc-950 mt-2"
          >
            Download Resume
          </a>
        </div>
      )}
    </header>
  );
}