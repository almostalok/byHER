'use client';

import { Info, Rocket, Users, UserPlus } from 'lucide-react';
import { useRetroAudio } from '@/lib/useRetroAudio';

interface SideNavProps {
  currentTab: string;
  onNavigate: (tabId: string) => void;
}

export default function SideNav({ currentTab, onNavigate }: SideNavProps) {
  const { playClick } = useRetroAudio();

  const handleNav = (tabId: string) => {
    playClick();
    onNavigate(tabId);
  };

  return (
    <nav className="hidden md:flex flex-col p-6 h-full w-80 fixed left-0 top-0 bg-[#fff0ef] border-r-2 border-[#9e4037] shadow-[8px_0px_0px_0px_rgba(36,25,24,1)] z-[60] transition-transform duration-300 ease-in-out select-none">
      <div className="mb-10 cursor-pointer group" onClick={() => handleNav('home')}>
        <div className="flex items-center gap-3 mb-1">
          <img 
            src="/assets/byher_logo_chocolate.png" 
            alt="byHER Logo" 
            className="h-10 w-auto object-contain transform group-hover:rotate-6 group-hover:scale-110 transition-transform duration-300"
          />
          <h1 className="font-display-xl text-5xl text-[#9e4037] tracking-tighter hover:translate-x-[1px] transition-transform">
            byHER
          </h1>
        </div>
        <p className="font-annotation text-sm text-[#8f4a48] italic">
          Led by her. Built for all.
        </p>
      </div>

      <ul className="flex flex-col gap-3 flex-grow">
        <li>
          <button
            onClick={() => handleNav('about')}
            className={`w-full flex items-center gap-4 p-3 rounded font-label-caps text-xs uppercase text-left transition-all cursor-pointer ${
              currentTab === 'about'
                ? 'bg-[#ff8b7d] text-[#76231c] font-bold shadow-[2px_2px_0px_0px_rgba(36,25,24,1)] border border-[#9e4037] -rotate-1'
                : 'text-[#241918] hover:bg-[#f4dddd] hover:italic'
            }`}
          >
            <Info size={18} />
            <span>About</span>
          </button>
        </li>

        <li>
          <button
            onClick={() => handleNav('projects')}
            className={`w-full flex items-center gap-4 p-3 rounded font-label-caps text-xs uppercase text-left transition-all cursor-pointer ${
              currentTab === 'projects'
                ? 'bg-[#ff8b7d] text-[#76231c] font-bold shadow-[2px_2px_0px_0px_rgba(36,25,24,1)] border border-[#9e4037] rotate-1'
                : 'text-[#241918] hover:bg-[#f4dddd] hover:italic'
            }`}
          >
            <Rocket size={18} />
            <span>Projects</span>
          </button>
        </li>

        <li>
          <button
            onClick={() => handleNav('community')}
            className={`w-full flex items-center gap-4 p-3 rounded font-label-caps text-xs uppercase text-left transition-all cursor-pointer ${
              currentTab === 'community'
                ? 'bg-[#ff8b7d] text-[#76231c] font-bold shadow-[2px_2px_0px_0px_rgba(36,25,24,1)] border border-[#9e4037] -rotate-1'
                : 'text-[#241918] hover:bg-[#f4dddd] hover:italic'
            }`}
          >
            <Users size={18} />
            <span>Community</span>
          </button>
        </li>

        <li>
          <button
            onClick={() => handleNav('join')}
            className={`w-full flex items-center gap-4 p-3 rounded font-label-caps text-xs uppercase text-left transition-all cursor-pointer ${
              currentTab === 'join'
                ? 'bg-[#ff8b7d] text-[#76231c] font-bold shadow-[2px_2px_0px_0px_rgba(36,25,24,1)] border border-[#9e4037] rotate-1'
                : 'text-[#241918] hover:bg-[#f4dddd] hover:italic'
            }`}
          >
            <UserPlus size={18} />
            <span>Join Form</span>
          </button>
        </li>
      </ul>

      <button
        onClick={() => handleNav('join')}
        className="mt-auto p-4 bg-[#9e4037] text-[#ffffff] font-label-caps text-xs uppercase border-2 border-[#241918] shadow-[4px_4px_0px_0px_rgba(36,25,24,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all cursor-pointer"
      >
        Join Collective
      </button>
    </nav>
  );
}
