'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Sparkles, Wrench, Flame, Coffee } from 'lucide-react';
import HowWeBuildModal from '@/components/HowWeBuildModal';
import { useRetroAudio } from '@/lib/useRetroAudio';
import { 
  DoodleUnderline, 
  DoodleArrow, 
  DoodleStar, 
  DoodleCircle,
  DoodleSquiggle,
  TapeStrip, 
  BinderHoles, 
  ScrapbookStamp,
  PaperClip
} from '@/components/scrapbook/Scribbles';

export default function ContentWorkSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { playClick, playPaper } = useRetroAudio();

  const handleOpenHandbook = () => {
    playClick();
    playPaper();
    setIsModalOpen(true);
  };

  return (
    <section id="content-work" className="relative w-screen min-w-[100vw] h-full flex-shrink-0 snap-start snap-always bg-[#dfdac3] border-r-2 border-dashed border-[#be3519]/60 flex flex-col justify-start md:justify-center py-3 sm:py-5 px-3 sm:px-8 lg:px-12 overflow-y-auto select-none">
      
      {/* Notebook Binder Spiral Spine */}
      <div className="absolute left-1 top-0 bottom-0 z-30 hidden md:block">
        <BinderHoles count={9} />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 my-0 md:my-auto pb-16 md:pb-2 md:pl-6">
        
        {/* Section Header Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b-2 border-dashed border-[#be3519]/50 pb-2 sm:pb-3 gap-2">
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <ScrapbookStamp text="PAGE 04" subtext="THE RECIPE" rotate="-rotate-2" />
            
            <div className="relative">
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="font-display font-black text-2xl sm:text-4xl text-[#be3519] uppercase tracking-wider flex items-center gap-2"
              >
                HOW WE ACTUALLY BUILD
              </motion.h2>
              <div className="absolute -bottom-2 left-0 w-full">
                <DoodleUnderline className="text-[#be3519]" width="100%" />
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-3 text-xs sm:text-sm font-bold text-[#3d1e1a] uppercase tracking-widest">
            <span className="font-script text-base sm:text-xl text-[#be3519] font-bold">Zero to One Pipeline</span>
            <span className="text-[#be3519]">|</span>
            <span className="font-mono text-xs bg-[#ebdcc4] px-2 py-0.5 rounded-xs border border-[#3d1e1a]">MANUAL v2.4</span>
          </div>
        </div>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-center mt-3 sm:mt-5">
          
          {/* Left Column: Taped Workshop Photo & 90s Computer Sticker (Cols 1-6) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative flex flex-col items-center justify-center min-h-[200px] sm:min-h-[340px]"
          >
            {/* Washi Tape and Pushpin */}
            <TapeStrip tilt="-rotate-6" color="pink" width="w-28" className="-top-3 left-6" />
            <TapeStrip tilt="rotate-4" color="crimson" width="w-24" className="-bottom-2 right-8" />
            
            <div className="absolute top-1 right-6 z-30">
              <PaperClip tilt="rotate-12" />
            </div>

            {/* Retro 90s Computer Graphic */}
            <div className="absolute -top-3 -right-2 z-20 w-16 h-12 sm:w-24 sm:h-20 pointer-events-none drop-shadow-md">
              <img 
                src="/assets/computer_90s_graphic.png" 
                alt="90s Terminal Computer" 
                className="w-full h-full object-contain"
              />
            </div>

            {/* Girls Ideating Group Photograph Frame */}
            <div className="relative w-full max-w-md bg-[#ebdcc4] p-3 pb-5 rounded-xl border-2 border-[#3d1e1a] shadow-xl transform -rotate-1">
              <div className="w-full h-40 sm:h-64 rounded-md overflow-hidden border border-[#3d1e1a]/40 bg-[#dfdac3]">
                <img 
                  src="/assets/girls_ideating_group.png" 
                  alt="byHER Group of Women Makers Ideating and Discussing a Project" 
                  className="w-full h-full object-cover object-center filter contrast-105"
                />
              </div>

              {/* Scribbled Caption */}
              <div className="mt-2 flex items-center justify-between px-1">
                <span className="font-script text-sm sm:text-base text-[#be3519] font-bold">
                  Napkin Ideation Sprint ⚡
                </span>
                <span className="font-mono text-[8px] sm:text-[9px] text-[#3d1e1a] uppercase tracking-wider font-bold">
                  Arguing about PCB traces at 1 AM
                </span>
              </div>
            </div>

            <div className="absolute -bottom-1 left-2 z-20 w-6 h-6 sm:w-7 sm:h-7 pointer-events-none drop-shadow-md">
              <img 
                src="/assets/pushpin_graphic.png" 
                alt="Pushpin" 
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>

          {/* Right Column: Dog-Eared Handbook Manifesto (Cols 7-12) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 space-y-3"
          >
            {/* Handbook Card */}
            <div className="bg-[#ebdcc4] border-2 border-[#3d1e1a] border-rough p-3.5 sm:p-5 shadow-xl space-y-2.5 relative">
              <TapeStrip tilt="rotate-3" color="tan" width="w-24" className="-top-2 left-6" />

              <div className="flex items-center justify-between border-b border-dashed border-[#be3519]/30 pb-1.5">
                <span className="font-mono text-[9px] sm:text-[10px] font-bold text-[#be3519] uppercase tracking-widest flex items-center gap-1">
                  <Sparkles size={12} /> THE SECRET RECIPE LOG
                </span>
                <span className="bg-[#be3519] text-[#ebdcc4] text-[8px] sm:text-[9px] font-mono font-black px-2 py-0.5 rounded-xs uppercase">
                  PUBLIC SPEC
                </span>
              </div>

              <h3 className="font-display font-black text-base sm:text-2xl text-[#be3519] uppercase tracking-wide leading-tight">
                NO TUTORIAL HELL. JUST PICK A BUILD & BREAK THINGS.
              </h3>

              <p className="font-display text-[11px] sm:text-xs text-[#3d1e1a] leading-relaxed font-bold uppercase tracking-wider">
                We believe the only way to actually learn engineering is to jump straight into making hardware & software products from scratch.
              </p>

              {/* Scribble Quote Banner */}
              <div className="bg-[#dfdac3] p-2.5 rounded-lg border border-dashed border-[#be3519] text-center">
                <p className="font-script text-sm sm:text-base text-[#be3519] font-bold leading-tight">
                  "If you're not breaking a few circuit traces, you're not really learning." ☕
                </p>
              </div>

              {/* Pop-up Handbook Trigger Button */}
              <div className="pt-1">
                <button
                  onClick={handleOpenHandbook}
                  className="w-full bg-[#be3519] hover:bg-[#3d1e1a] text-[#ebdcc4] py-2 sm:py-2.5 px-4 rounded-lg font-display font-black text-xs sm:text-sm uppercase tracking-widest shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer group border border-[#3d1e1a]"
                >
                  <FileText size={15} className="transform group-hover:scale-110 transition-transform" />
                  <span>Open Full Methodology Handbook ➔</span>
                </button>
              </div>
            </div>

          </motion.div>

        </div>

        {/* Bottom Process Step Ribbon */}
        <div className="mt-3 bg-[#3d1e1a] text-[#ebdcc4] py-2 sm:py-2.5 px-3 sm:px-6 rounded-xl border-2 border-[#be3519] shadow-md relative">
          <div className="flex flex-wrap items-center justify-between gap-2 text-center sm:text-left">
            <span className="font-mono font-black text-[10px] sm:text-xs uppercase tracking-widest text-[#f49799] flex items-center gap-1">
              <Wrench size={13} /> BUILD PIPELINE:
            </span>
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-4 font-script text-xs sm:text-base font-bold text-[#ebdcc4]">
              <span className="bg-[#be3519] px-2 py-0.5 rounded-sm transform -rotate-1">1. wild discord idea ➔</span>
              <span className="bg-[#be3519] px-2 py-0.5 rounded-sm transform rotate-1">2. breadboard & wire ➔</span>
              <span className="bg-[#be3519] px-2 py-0.5 rounded-sm transform -rotate-1">3. solder & write code ➔</span>
              <span className="bg-[#be3519] px-2 py-0.5 rounded-sm transform rotate-1">4. ship & eat snacks ☕</span>
            </div>
          </div>
        </div>

      </div>

      {/* Real Paper Document Popup Modal */}
      <HowWeBuildModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
}
