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
      {/* Top Navigation Bar (Web & Mobile Header) */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 md:px-10 py-2.5 sm:py-3.5 bg-[#fff8f7] border-b-2 border-[#9e4037] shadow-[4px_4px_0px_0px_rgba(36,25,24,1)] transition-all duration-100 select-none">
        
        {/* Brand Logo with Image & Text */}
        <div 
          onClick={() => handleNav('home')}
          className="flex items-center gap-2.5 sm:gap-3 group cursor-pointer"
        >
          <img 
            src="/assets/byher_logo_chocolate.png" 
            alt="byHER Logo Icon" 
            className="h-8 sm:h-10 w-auto object-contain transform group-hover:rotate-6 group-hover:scale-110 transition-transform duration-300 drop-shadow-xs"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/assets/byher_logo_crimson.png';
            }}
          />
          <span className="font-display-xl text-3xl sm:text-4xl text-[#9e4037] tracking-tighter hover:translate-x-[1px] hover:translate-y-[1px] active:scale-95 transition-all">
            byHER
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <button 
            onClick={() => handleNav('about')}
            className={`font-label-caps text-xs uppercase transition-all pb-1 cursor-pointer ${
              currentTab === 'about' 
                ? 'text-[#9e4037] font-bold border-b-2 border-[#9e4037]' 
                : 'text-[#56423f] hover:text-[#9e4037]'
            }`}
          >
            About
          </button>
          <button 
            onClick={() => handleNav('projects')}
            className={`font-label-caps text-xs uppercase transition-all pb-1 cursor-pointer ${
              currentTab === 'projects' 
                ? 'text-[#9e4037] font-bold border-b-2 border-[#9e4037]' 
                : 'text-[#56423f] hover:text-[#9e4037]'
            }`}
          >
            Projects
          </button>
          <button 
            onClick={() => handleNav('community')}
            className={`font-label-caps text-xs uppercase transition-all pb-1 cursor-pointer ${
              currentTab === 'community' 
                ? 'text-[#9e4037] font-bold border-b-2 border-[#9e4037]' 
                : 'text-[#56423f] hover:text-[#9e4037]'
            }`}
          >
            Community
          </button>
          <button 
            onClick={() => handleNav('join')}
            className={`font-label-caps text-xs uppercase transition-all pb-1 cursor-pointer ${
              currentTab === 'join' 
                ? 'text-[#9e4037] font-bold border-b-2 border-[#9e4037]' 
                : 'text-[#56423f] hover:text-[#9e4037]'
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
            className="p-1.5 text-[#9e4037] hover:scale-110 active:scale-95 transition-transform cursor-pointer"
            title="Toggle Sound Effects [Key: M]"
            aria-label="Toggle Sound"
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>

          {/* CRT Monitor Toggle */}
          {onToggleCrt && (
            <button
              onClick={() => {
                playClick();
                onToggleCrt();
              }}
              className={`p-1.5 transition-transform hover:scale-110 active:scale-95 cursor-pointer ${
                isCrtOn ? 'text-[#8f4a48]' : 'text-[#9e4037]'
              }`}
              title="Toggle Retro CRT Scanlines [Key: R]"
              aria-label="Toggle CRT"
            >
              <Monitor size={20} />
            </button>
          )}

          {/* Cheats Modal Toggle */}
          {onOpenCheats && (
            <button
              onClick={() => {
                playClick();
                onOpenCheats();
              }}
              className="p-1.5 text-[#9e4037] hover:scale-110 active:scale-95 transition-transform cursor-pointer"
              title="Keyboard Cheats [Key: ?]"
              aria-label="Keyboard Cheats"
            >
              <Gamepad2 size={20} />
            </button>
          )}

          {/* Join CTA for Desktop */}
          <button
            onClick={() => handleNav('join')}
            className="hidden sm:inline-flex items-center gap-1.5 bg-[#9e4037] text-[#ffffff] font-label-caps text-xs uppercase px-3 py-1.5 border-2 border-[#241918] shadow-[2px_2px_0px_0px_rgba(36,25,24,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all cursor-pointer"
          >
            <UserPlus size={14} />
            <span>Join</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => {
              playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="md:hidden p-1.5 text-[#241918] hover:text-[#9e4037] transition-colors cursor-pointer"
            aria-label="Toggle navigation drawer"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer (SideNavBar) */}
      <div 
        className={`md:hidden fixed inset-y-0 left-0 z-[60] flex flex-col p-6 h-full w-80 bg-[#fff0ef] border-r-2 border-[#9e4037] shadow-[8px_0px_0px_0px_rgba(36,25,24,1)] transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <div 
            onClick={() => handleNav('home')}
            className="flex items-center gap-2.5 cursor-pointer"
          >
            <img 
              src="/assets/byher_logo_chocolate.png" 
              alt="byHER Logo" 
              className="h-8 w-auto object-contain"
            />
            <span className="font-headline-lg-mobile text-3xl text-[#9e4037]">
              byHER
            </span>
          </div>
          <button 
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#241918] p-1 hover:text-[#9e4037]"
          >
            <X size={24} />
          </button>
        </div>

        <div className="text-[#56423f] text-sm mb-6 font-annotation italic">
          Led by her. Built for all.
        </div>

        <div className="flex flex-col gap-2 flex-grow">
          <button
            onClick={() => handleNav('about')}
            className={`flex items-center gap-4 p-3.5 rounded font-label-caps text-xs uppercase text-left transition-all ${
              currentTab === 'about'
                ? 'bg-[#ff8b7d] text-[#76231c] font-bold shadow-[2px_2px_0px_0px_rgba(36,25,24,1)] border border-[#9e4037]'
                : 'text-[#241918] hover:bg-[#f4dddd]'
            }`}
          >
            <Info size={18} />
            <span>About</span>
          </button>

          <button
            onClick={() => handleNav('projects')}
            className={`flex items-center gap-4 p-3.5 rounded font-label-caps text-xs uppercase text-left transition-all ${
              currentTab === 'projects'
                ? 'bg-[#ff8b7d] text-[#76231c] font-bold shadow-[2px_2px_0px_0px_rgba(36,25,24,1)] border border-[#9e4037]'
                : 'text-[#241918] hover:bg-[#f4dddd]'
            }`}
          >
            <Rocket size={18} />
            <span>Projects</span>
          </button>

          <button
            onClick={() => handleNav('community')}
            className={`flex items-center gap-4 p-3.5 rounded font-label-caps text-xs uppercase text-left transition-all ${
              currentTab === 'community'
                ? 'bg-[#ff8b7d] text-[#76231c] font-bold shadow-[2px_2px_0px_0px_rgba(36,25,24,1)] border border-[#9e4037]'
                : 'text-[#241918] hover:bg-[#f4dddd]'
            }`}
          >
            <Users size={18} />
            <span>Community</span>
          </button>

          <button
            onClick={() => handleNav('join')}
            className={`flex items-center gap-4 p-3.5 rounded font-label-caps text-xs uppercase text-left transition-all ${
              currentTab === 'join'
                ? 'bg-[#ff8b7d] text-[#76231c] font-bold shadow-[2px_2px_0px_0px_rgba(36,25,24,1)] border border-[#9e4037]'
                : 'text-[#241918] hover:bg-[#f4dddd]'
            }`}
          >
            <UserPlus size={18} />
            <span>Join Form</span>
          </button>
        </div>

        <button 
          onClick={() => handleNav('join')}
          className="w-full py-3.5 bg-[#9e4037] text-[#ffffff] font-label-caps text-xs uppercase hard-shadow-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all border-2 border-[#241918] cursor-pointer"
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
