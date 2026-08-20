'use client';

import { ArrowUpRight } from 'lucide-react';
import { useRetroAudio } from '@/lib/useRetroAudio';

interface ContactFooterProps {
  hasSideNav?: boolean;
}

export default function ContactFooter({ hasSideNav = false }: ContactFooterProps) {
  const { playClick } = useRetroAudio();

  return (
    <footer className={`w-full mt-auto py-10 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6 bg-[#1c1917] border-t-4 border-[#ea580c] text-[#fafaf9] relative z-30 select-none ${
      hasSideNav ? 'md:pl-10' : ''
    }`}>
      {/* Brand / Logo with NO box, real colors */}
      <div className="flex items-center gap-3">
        <img 
          src="/assets/byher_logo_cream.png" 
          alt="byHER Logo" 
          className="h-7 w-auto object-contain"
        />
        <span className="font-display-xl text-3xl tracking-tight text-[#fed7aa]">
          byHER
        </span>
        <span className="font-annotation text-sm text-[#d6d3d1] italic hidden sm:inline ml-2">
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
          className="text-[#fed7aa] hover:text-[#ffffff] transition-colors underline decoration-dotted underline-offset-4 flex items-center gap-1 font-bold"
        >
          <span>A DEAD CODE SOCIETY initiative.</span>
          <ArrowUpRight size={14} />
        </a>
      </div>

      {/* Right: Social Links with vibrant pills */}
      <div className="flex items-center gap-2 text-xs sm:text-sm font-label-caps uppercase tracking-wider">
        <a 
          href="https://www.instagram.com" 
          target="_blank" 
          rel="noopener noreferrer"
          onClick={playClick}
          className="px-2.5 py-1 bg-[#292524] hover:bg-[#ec4899] text-[#fed7aa] hover:text-[#ffffff] rounded border border-[#44403c] transition-all"
        >
          Instagram
        </a>
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer"
          onClick={playClick}
          className="px-2.5 py-1 bg-[#292524] hover:bg-[#3b82f6] text-[#fed7aa] hover:text-[#ffffff] rounded border border-[#44403c] transition-all"
        >
          GitHub
        </a>
        <a 
          href="https://www.linkedin.com" 
          target="_blank" 
          rel="noopener noreferrer"
          onClick={playClick}
          className="px-2.5 py-1 bg-[#292524] hover:bg-[#0284c7] text-[#fed7aa] hover:text-[#ffffff] rounded border border-[#44403c] transition-all"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
