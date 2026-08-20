'use client';

import { ArrowUpRight } from 'lucide-react';
import { useRetroAudio } from '@/lib/useRetroAudio';

interface ContactFooterProps {
  hasSideNav?: boolean;
}

export default function ContactFooter({ hasSideNav = false }: ContactFooterProps) {
  const { playClick } = useRetroAudio();

  return (
    <footer className={`w-full mt-auto py-8 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6 bg-[#241918] border-t-4 border-[#8f4a48] text-[#fff8f7] relative z-30 select-none ${
      hasSideNav ? 'md:pl-10' : ''
    }`}>
      {/* Brand / Logo */}
      <div className="flex items-center gap-3">
        <span className="font-display-xl text-2xl tracking-tight text-[#ffdad7] uppercase border border-[#fff8f7]/40 px-2.5 py-0.5">
          byHER
        </span>
        <span className="font-annotation text-sm text-[#dcc0bc] italic hidden sm:inline">
          Led by her. Built for all.
        </span>
      </div>

      {/* Center: Initiative Tag */}
      <div className="font-annotation text-sm text-center">
        <a 
          href="https://github.com/deadcoderssociety" 
          target="_blank" 
          rel="noopener noreferrer"
          onClick={playClick}
          className="text-[#dcc0bc] hover:text-[#ffdad5] transition-colors underline decoration-dotted underline-offset-4 flex items-center gap-1"
        >
          <span>A DEAD CODE SOCIETY initiative.</span>
          <ArrowUpRight size={14} />
        </a>
      </div>

      {/* Right: Social Links */}
      <div className="flex items-center gap-3 text-xs sm:text-sm font-label-caps uppercase tracking-wider text-[#dcc0bc]">
        <a 
          href="https://www.instagram.com" 
          target="_blank" 
          rel="noopener noreferrer"
          onClick={playClick}
          className="hover:text-[#ffb4aa] transition-colors"
        >
          Instagram
        </a>
        <span className="text-[#89726f]">/</span>
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer"
          onClick={playClick}
          className="hover:text-[#ffb4aa] transition-colors"
        >
          GitHub
        </a>
        <span className="text-[#89726f]">/</span>
        <a 
          href="https://www.linkedin.com" 
          target="_blank" 
          rel="noopener noreferrer"
          onClick={playClick}
          className="hover:text-[#ffb4aa] transition-colors"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
