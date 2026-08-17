'use client';

import { useState } from 'react';
import { Menu, X, ExternalLink, Volume2, VolumeX, Monitor, Gamepad2 } from 'lucide-react';
import { useRetroAudio } from '@/lib/useRetroAudio';

const READ_DOC_URL = 'https://docs.google.com/document/d/15-QOa-XTIeh0FHPbKWlyB_-RjzsE-NUJkjcHn3QO_qs/edit?usp=sharing';

interface HeaderProps {
  onNavigate?: (sectionId: string) => void;
  onToggleCrt?: () => void;
  isCrtOn?: boolean;
  onOpenCheats?: () => void;
}

export default function Header({ onNavigate, onToggleCrt, isCrtOn = false, onOpenCheats }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isMuted, toggleMute, playClick } = useRetroAudio();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    playClick();
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
    <header className="w-full bg-[#f49799] border-b border-[#be3519]/20 h-20 flex-shrink-0 relative z-30 select-none">
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
        <nav className="hidden md:flex items-center space-x-5 text-xs sm:text-sm font-bold tracking-[0.2em] text-[#be3519]">
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

          {/* RETRO EXPERIENCE TOGGLE BUTTONS */}
          <div className="flex items-center gap-2 pl-2">
            {/* Sound FX Toggle */}
            <button
              onClick={() => {
                playClick();
                toggleMute();
              }}
              className="bg-[#dfdac3] text-[#be3519] border border-[#be3519] hover:bg-[#be3519] hover:text-[#ebdcc4] p-1.5 rounded-full transition-colors cursor-pointer shadow-xs flex items-center gap-1 text-[11px] px-2.5 font-mono"
              title="Toggle Retro Sound Effects [Key: M]"
            >
              {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
              <span className="hidden lg:inline">{isMuted ? 'MUTED' : 'SOUND'}</span>
            </button>

            {/* CRT FX Toggle */}
            {onToggleCrt && (
              <button
                onClick={() => {
                  playClick();
                  onToggleCrt();
                }}
                className={`border p-1.5 rounded-full transition-colors cursor-pointer shadow-xs flex items-center gap-1 text-[11px] px-2.5 font-mono ${
                  isCrtOn
                    ? 'bg-[#be3519] text-[#ebdcc4] border-[#522a25]'
                    : 'bg-[#dfdac3] text-[#be3519] border-[#be3519] hover:bg-[#be3519] hover:text-[#ebdcc4]'
                }`}
                title="Toggle 90s CRT Monitor Filter [Key: R]"
              >
                <Monitor size={14} />
                <span className="hidden lg:inline">{isCrtOn ? 'CRT ON' : 'CRT FX'}</span>
              </button>
            )}

            {/* Cheats Modal Toggle */}
            {onOpenCheats && (
              <button
                onClick={() => {
                  playClick();
                  onOpenCheats();
                }}
                className="bg-[#be3519] text-[#ebdcc4] border border-[#522a25] hover:bg-[#522a25] p-1.5 rounded-full transition-colors cursor-pointer shadow-xs flex items-center gap-1 text-[11px] px-2.5 font-mono"
                title="View Keyboard Cheat Sheet [Key: ?]"
              >
                <Gamepad2 size={14} />
                <span className="hidden lg:inline">KEYS</span>
              </button>
            )}
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => {
            playClick();
            setMobileMenuOpen(!mobileMenuOpen);
          }}
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
          
          <div className="flex items-center justify-center gap-3 pt-2">
            <button
              onClick={() => {
                playClick();
                toggleMute();
              }}
              className="bg-[#be3519] text-[#ebdcc4] px-4 py-2 rounded-full font-mono text-xs font-bold flex items-center gap-1.5"
            >
              {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
              <span>{isMuted ? 'SOUND OFF' : 'SOUND ON'}</span>
            </button>

            {onToggleCrt && (
              <button
                onClick={() => {
                  playClick();
                  onToggleCrt();
                }}
                className="bg-[#be3519] text-[#ebdcc4] px-4 py-2 rounded-full font-mono text-xs font-bold flex items-center gap-1.5"
              >
                <Monitor size={16} />
                <span>{isCrtOn ? 'CRT ON' : 'CRT OFF'}</span>
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
