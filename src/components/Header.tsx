'use client';

import { useState } from 'react';
import { Volume2, VolumeX, Monitor, Gamepad2, Menu, X, Info, Rocket, Users, UserPlus } from 'lucide-react';
import { useRetroAudio } from '@/lib/useRetroAudio';

interface HeaderProps {
  currentTab: string;
  onNavigate: (tabId: string) => void;
  onToggleCrt?: () => void;
  isCrtOn?: boolean;
  onOpenCheats?: () => void;
}

export default function Header({
  currentTab,
  onNavigate,
  onToggleCrt,
  isCrtOn = false,
  onOpenCheats,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isMuted, toggleMute, playClick } = useRetroAudio();

  const handleNav = (tabId: string) => {
    playClick();
    onNavigate(tabId);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 md:px-10 py-2.5 sm:py-3.5 bg-[#fffdfa]/95 backdrop-blur-md border-b-3 border-[#1c1917] shadow-[0_4px_0px_0px_rgba(28,25,23,1)] transition-all duration-100 select-none">
        
        {/* Brand Logo with Real Colors and NO surrounding box */}
        <div 
          onClick={() => handleNav('hero')}
          className="flex items-center gap-2.5 sm:gap-3 group cursor-pointer"
        >
          <img 
            src="/assets/byher_logo_chocolate.png" 
            alt="byHER Logo Icon" 
            className="h-8 sm:h-10 w-auto object-contain transform group-hover:scale-105 group-hover:rotate-3 transition-transform duration-200"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/assets/byher_logo_crimson.png';
            }}
          />
          <span className="font-display-xl text-3xl sm:text-4xl text-[#522a25] tracking-tighter hover:translate-x-[1px] hover:translate-y-[1px] active:scale-95 transition-all">
            byHER
          </span>
        </div>

        {/* Desktop Navigation Links with colorful active pills */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          <button 
            onClick={() => handleNav('about')}
            className={`font-label-caps text-xs uppercase transition-all px-3 py-1 rounded-md cursor-pointer border-2 ${
              currentTab === 'about' 
                ? 'bg-[#fed7aa] text-[#9a3412] font-black border-[#1c1917] shadow-[2px_2px_0px_0px_#1c1917]' 
                : 'text-[#44403c] border-transparent hover:border-[#1c1917] hover:bg-[#fff7ed]'
            }`}
          >
            About
          </button>
          <button 
            onClick={() => handleNav('projects')}
            className={`font-label-caps text-xs uppercase transition-all px-3 py-1 rounded-md cursor-pointer border-2 ${
              currentTab === 'projects' 
                ? 'bg-[#bae6fd] text-[#0369a1] font-black border-[#1c1917] shadow-[2px_2px_0px_0px_#1c1917]' 
                : 'text-[#44403c] border-transparent hover:border-[#1c1917] hover:bg-[#fff7ed]'
            }`}
          >
            Projects
          </button>
          <button 
            onClick={() => handleNav('community')}
            className={`font-label-caps text-xs uppercase transition-all px-3 py-1 rounded-md cursor-pointer border-2 ${
              currentTab === 'community' 
                ? 'bg-[#bbf7d0] text-[#15803d] font-black border-[#1c1917] shadow-[2px_2px_0px_0px_#1c1917]' 
                : 'text-[#44403c] border-transparent hover:border-[#1c1917] hover:bg-[#fff7ed]'
            }`}
          >
            Community
          </button>
          <button 
            onClick={() => handleNav('join')}
            className={`font-label-caps text-xs uppercase transition-all px-3 py-1 rounded-md cursor-pointer border-2 ${
              currentTab === 'join' 
                ? 'bg-[#fecdd3] text-[#be123c] font-black border-[#1c1917] shadow-[2px_2px_0px_0px_#1c1917]' 
                : 'text-[#44403c] border-transparent hover:border-[#1c1917] hover:bg-[#fff7ed]'
            }`}
          >
            Join
          </button>
        </div>

        {/* Action Controls (Sound, CRT, Cheats, Join Button) */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Sound FX Toggle */}
          <button
            onClick={() => {
              playClick();
              toggleMute();
            }}
            className="p-2 bg-[#fef08a] border-2 border-[#1c1917] rounded-lg shadow-xs text-[#854d0e] hover:scale-110 active:scale-95 transition-transform cursor-pointer"
            title="Toggle Sound Effects [Key: M]"
            aria-label="Toggle Sound"
          >
            {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>

          {/* CRT Monitor Toggle */}
          {onToggleCrt && (
            <button
              onClick={() => {
                playClick();
                onToggleCrt();
              }}
              className={`p-2 border-2 border-[#1c1917] rounded-lg shadow-xs transition-transform hover:scale-110 active:scale-95 cursor-pointer ${
                isCrtOn 
                  ? 'bg-[#ea580c] text-[#ffffff]' 
                  : 'bg-[#ffedd5] text-[#c2410c]'
              }`}
              title="Toggle Retro CRT Scanlines [Key: R]"
              aria-label="Toggle CRT"
            >
              <Monitor size={18} />
            </button>
          )}

          {/* Cheats Modal Toggle */}
          {onOpenCheats && (
            <button
              onClick={() => {
                playClick();
                onOpenCheats();
              }}
              className="p-2 bg-[#e0e7ff] border-2 border-[#1c1917] rounded-lg shadow-xs text-[#3730a3] hover:scale-110 active:scale-95 transition-transform cursor-pointer"
              title="Keyboard Cheats [Key: ?]"
              aria-label="Keyboard Cheats"
            >
              <Gamepad2 size={18} />
            </button>
          )}

          {/* Join CTA for Desktop */}
          <button
            onClick={() => handleNav('join')}
            className="hidden sm:inline-flex items-center gap-1.5 bg-[#ea580c] text-[#ffffff] font-label-caps text-xs uppercase px-4 py-2 border-2 border-[#1c1917] shadow-[3px_3px_0px_0px_#1c1917] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all cursor-pointer font-black"
          >
            <UserPlus size={14} />
            <span>Join Collective</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => {
              playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="md:hidden p-1.5 text-[#1c1917] hover:text-[#ea580c] transition-colors cursor-pointer"
            aria-label="Toggle navigation drawer"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer (SideNavBar) */}
      <div 
        className={`md:hidden fixed inset-y-0 left-0 z-[60] flex flex-col p-6 h-full w-80 bg-[#fff7ed] border-r-3 border-[#1c1917] shadow-[8px_0px_0px_0px_rgba(28,25,23,1)] transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <div 
            onClick={() => handleNav('hero')}
            className="flex items-center gap-2.5 cursor-pointer"
          >
            <img 
              src="/assets/byher_logo_chocolate.png" 
              alt="byHER Logo" 
              className="h-8 w-auto object-contain"
            />
            <span className="font-headline-lg-mobile text-3xl text-[#522a25]">
              byHER
            </span>
          </div>
          <button 
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#1c1917] p-1 hover:text-[#ea580c]"
          >
            <X size={24} />
          </button>
        </div>

        <div className="text-[#522a25] text-sm mb-6 font-annotation italic font-semibold">
          Led by her. Built for all.
        </div>

        <div className="flex flex-col gap-2.5 flex-grow">
          <button
            onClick={() => handleNav('about')}
            className={`flex items-center gap-4 p-3.5 rounded-lg font-label-caps text-xs uppercase text-left transition-all border-2 ${
              currentTab === 'about'
                ? 'bg-[#fed7aa] text-[#9a3412] font-black shadow-[3px_3px_0px_0px_#1c1917] border-[#1c1917]'
                : 'text-[#1c1917] border-transparent hover:bg-[#ffedd5]'
            }`}
          >
            <Info size={18} />
            <span>About</span>
          </button>

          <button
            onClick={() => handleNav('projects')}
            className={`flex items-center gap-4 p-3.5 rounded-lg font-label-caps text-xs uppercase text-left transition-all border-2 ${
              currentTab === 'projects'
                ? 'bg-[#bae6fd] text-[#0369a1] font-black shadow-[3px_3px_0px_0px_#1c1917] border-[#1c1917]'
                : 'text-[#1c1917] border-transparent hover:bg-[#ffedd5]'
            }`}
          >
            <Rocket size={18} />
            <span>Projects</span>
          </button>

          <button
            onClick={() => handleNav('community')}
            className={`flex items-center gap-4 p-3.5 rounded-lg font-label-caps text-xs uppercase text-left transition-all border-2 ${
              currentTab === 'community'
                ? 'bg-[#bbf7d0] text-[#15803d] font-black shadow-[3px_3px_0px_0px_#1c1917] border-[#1c1917]'
                : 'text-[#1c1917] border-transparent hover:bg-[#ffedd5]'
            }`}
          >
            <Users size={18} />
            <span>Community</span>
          </button>

          <button
            onClick={() => handleNav('join')}
            className={`flex items-center gap-4 p-3.5 rounded-lg font-label-caps text-xs uppercase text-left transition-all border-2 ${
              currentTab === 'join'
                ? 'bg-[#fecdd3] text-[#be123c] font-black shadow-[3px_3px_0px_0px_#1c1917] border-[#1c1917]'
                : 'text-[#1c1917] border-transparent hover:bg-[#ffedd5]'
            }`}
          >
            <UserPlus size={18} />
            <span>Join Form</span>
          </button>
        </div>

        <button 
          onClick={() => handleNav('join')}
          className="w-full py-3.5 bg-[#ea580c] text-[#ffffff] font-label-caps text-xs uppercase hard-shadow-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all border-2 border-[#1c1917] cursor-pointer font-black"
        >
          Join Collective
        </button>
      </div>

      {/* Backdrop overlay for mobile drawer */}
      {mobileMenuOpen && (
        <div 
          onClick={() => setMobileMenuOpen(false)}
          className="md:hidden fixed inset-0 bg-black/40 z-50 backdrop-blur-xs"
        />
      )}
    </>
  );
}
