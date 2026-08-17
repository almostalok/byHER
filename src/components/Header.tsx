'use client';

import { useState } from 'react';
import { Menu, X, ExternalLink } from 'lucide-react';

const READ_DOC_URL = 'https://docs.google.com/document/d/15-QOa-XTIeh0FHPbKWlyB_-RjzsE-NUJkjcHn3QO_qs/edit?usp=sharing';

interface HeaderProps {
  onNavigate?: (sectionId: string) => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(sectionId);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
      }
    }
  };

  return (
    <header className="w-full bg-[#f49799] border-b border-[#be3519]/20 h-20 flex-shrink-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        
        {/* Brand Logo / Signature with byHER Icon */}
        <a 
          href="#hero"
          onClick={(e) => handleNavClick(e, 'hero')}
          className="flex items-center gap-2.5 sm:gap-3 group cursor-pointer"
        >
          <img 
            src="/assets/byher_logo_chocolate.png" 
            alt="byHER Logo Icon" 
            className="h-8 sm:h-10 w-auto object-contain transform group-hover:rotate-6 group-hover:scale-110 transition-transform duration-300 drop-shadow-sm"
          />
          <span className="font-script text-4xl sm:text-5xl text-[#522a25] font-bold group-hover:text-[#be3519] transition-colors leading-none">
            byHER
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-xs sm:text-sm font-bold tracking-[0.2em] text-[#be3519]">
          <a 
            href="#about" 
            onClick={(e) => handleNavClick(e, 'about')}
            className="py-1 px-2 border-b-2 border-transparent hover:border-dashed hover:border-[#be3519] hover:text-[#522a25] transition-all uppercase cursor-pointer"
          >
            ABOUT US
          </a>
          <span className="text-[#be3519]/40">◆</span>
          <a 
            href="#projects" 
            onClick={(e) => handleNavClick(e, 'projects')}
            className="py-1 px-2 border-b-2 border-transparent hover:border-dashed hover:border-[#be3519] hover:text-[#522a25] transition-all uppercase cursor-pointer"
          >
            PROJECTS
          </a>
          <span className="text-[#be3519]/40">◆</span>
          <a 
            href="#community" 
            onClick={(e) => handleNavClick(e, 'community')}
            className="py-1 px-2 border-b-2 border-transparent hover:border-dashed hover:border-[#be3519] hover:text-[#522a25] transition-all uppercase cursor-pointer"
          >
            COMMUNITY
          </a>
          <span className="text-[#be3519]/40">◆</span>
          <a 
            href="#contact" 
            onClick={(e) => handleNavClick(e, 'contact')}
            className="py-1 px-2 border-b-2 border-transparent hover:border-dashed hover:border-[#be3519] hover:text-[#522a25] transition-all uppercase cursor-pointer"
          >
            CONTACT
          </a>
          <span className="text-[#be3519]/40">◆</span>
          <a 
            href={READ_DOC_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 bg-[#be3519] text-[#ebdcc4] px-4 py-1.5 rounded-full hover:bg-[#522a25] transition-colors uppercase font-bold tracking-widest shadow-sm"
          >
            READ <ExternalLink size={13} />
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#522a25] hover:text-[#be3519] focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#f49799] border-b border-[#be3519]/30 px-6 py-6 space-y-4 text-center shadow-xl relative z-50">
          <a 
            href="#about"
            onClick={(e) => handleNavClick(e, 'about')}
            className="block text-lg font-bold text-[#be3519] hover:text-[#522a25] uppercase tracking-widest"
          >
            ABOUT US
          </a>
          <a 
            href="#projects"
            onClick={(e) => handleNavClick(e, 'projects')}
            className="block text-lg font-bold text-[#be3519] hover:text-[#522a25] uppercase tracking-widest"
          >
            PROJECTS
          </a>
          <a 
            href="#community"
            onClick={(e) => handleNavClick(e, 'community')}
            className="block text-lg font-bold text-[#be3519] hover:text-[#522a25] uppercase tracking-widest"
          >
            COMMUNITY
          </a>
          <a 
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="block text-lg font-bold text-[#be3519] hover:text-[#522a25] uppercase tracking-widest"
          >
            CONTACT
          </a>
          <a 
            href={READ_DOC_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="inline-flex items-center gap-1 text-lg font-bold text-[#ebdcc4] bg-[#be3519] px-6 py-2 rounded-full uppercase tracking-widest shadow-md"
          >
            JOIN US <ExternalLink size={16} />
          </a>
        </div>
      )}
    </header>
  );
}


