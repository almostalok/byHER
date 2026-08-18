'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Sparkles, BookOpen } from 'lucide-react';
import HowWeBuildModal from '@/components/HowWeBuildModal';
import { useRetroAudio } from '@/lib/useRetroAudio';

export default function ContentWorkSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { playClick, playPaper } = useRetroAudio();

  const handleOpenHandbook = () => {
    playClick();
    playPaper();
    setIsModalOpen(true);
  };

  return (
    <section id="content-work" className="relative w-screen min-w-[100vw] h-full flex-shrink-0 snap-start snap-always bg-[#dfdac3] border-r-2 border-dashed border-[#be3519]/40 flex flex-col justify-between py-6 px-4 sm:px-8 lg:px-16 overflow-y-auto select-none">
      <div className="max-w-7xl mx-auto w-full space-y-6 my-auto">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b-2 border-dashed border-[#be3519] pb-3 gap-2">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="bg-[#be3519] text-[#ebdcc4] font-display font-black text-[10px] sm:text-xs px-2.5 sm:px-3 py-1 rounded-full uppercase tracking-widest shadow-sm flex items-center gap-1">
              <BookOpen size={12} /> 04 / METHODOLOGY & PROCESS
            </span>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-display font-black text-2xl sm:text-4xl text-[#be3519] uppercase tracking-wider"
            >
              HOW WE BUILD
            </motion.h2>
          </div>

          <div className="flex items-center space-x-3 text-xs sm:text-sm font-bold text-[#522a25] uppercase tracking-widest">
            <span className="font-script text-base sm:text-lg text-[#be3519] font-bold">Zero to One Pipeline</span>
            <span className="text-[#be3519]">|</span>
            <span className="font-mono text-xs">SPEC v2.4</span>
          </div>
        </div>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Group Photo & Halftone Computer Graphic (Cols 1-6) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative flex flex-col items-center justify-center min-h-[300px] sm:min-h-[380px]"
          >
            {/* Retro 90s Computer Graphic */}
            <div className="absolute -top-3 -right-2 z-20 w-20 h-16 sm:w-28 sm:h-24 pointer-events-none drop-shadow-lg">
              <img 
                src="/assets/computer_90s_graphic.png" 
                alt="90s Terminal Computer" 
                className="w-full h-full object-contain"
              />
            </div>

            {/* Girls Ideating Group Photograph */}
            <div className="relative w-full max-w-md h-52 sm:h-72 rounded-3xl overflow-hidden shadow-2xl border-4 border-[#be3519] bg-[#dfdac3]">
              <img 
                src="/assets/girls_ideating_group.png" 
                alt="byHER Group of Women Makers Ideating and Discussing a Project" 
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Corner Decorative Pushpin Graphic */}
            <div className="absolute -bottom-2 left-4 z-20 w-6 h-6 sm:w-7 sm:h-7 pointer-events-none drop-shadow-md">
              <img 
                src="/assets/pushpin_graphic.png" 
                alt="Pushpin" 
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>

          {/* Right Column: The 0-to-1 Handbook Manifesto & Single Popup Trigger (Cols 7-12) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 space-y-4"
          >
            {/* Manifesto Card */}
            <div className="bg-[#ebdcc4] border-3 border-[#be3519] rounded-3xl p-5 sm:p-7 shadow-xl space-y-4">
              <div className="flex items-center justify-between border-b-2 border-dashed border-[#be3519]/40 pb-2">
                <span className="font-mono text-xs font-bold text-[#be3519] uppercase tracking-widest flex items-center gap-1.5">
                  <Sparkles size={14} /> 0 ➔ 1 METHODOLOGY
                </span>
                <span className="bg-[#be3519] text-[#ebdcc4] text-[10px] font-display font-black px-2.5 py-0.5 rounded-full uppercase">
                  PUBLIC SPEC
                </span>
              </div>

              <h3 className="font-display font-black text-2xl sm:text-3xl text-[#be3519] uppercase tracking-wide leading-tight">
                FROM CONCEPT TO WORKING SILICON & SERVERS
              </h3>

              <p className="font-display text-xs sm:text-sm text-[#522a25] leading-relaxed font-bold uppercase tracking-wider">
                We believe the best way to master technology is to build it from absolute scratch. Our build sprints take multidisciplinary maker pods from raw schematic design to production deployments.
              </p>

              {/* SINGLE EMBEDDED POPUP TRIGGER BUTTON */}
              <div className="pt-2 border-t-2 border-dashed border-[#be3519]/30">
                <button
                  onClick={handleOpenHandbook}
                  className="w-full bg-[#be3519] hover:bg-[#522a25] text-[#ebdcc4] py-3 px-6 rounded-2xl font-display font-black text-xs sm:text-sm uppercase tracking-widest shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer group"
                >
                  <FileText size={18} className="transform group-hover:scale-110 transition-transform" />
                  <span>Open Handbook Doc ➔</span>
                </button>
              </div>
            </div>

          </motion.div>

        </div>

        {/* Bottom Process Step Banner */}
        <div className="bg-[#be3519] text-[#ebdcc4] py-3 px-4 sm:px-8 rounded-2xl border-2 border-[#522a25] shadow-lg mb-8 md:mb-12">
          <div className="flex flex-wrap items-center justify-between gap-3 text-center sm:text-left">
            <span className="font-display font-black text-xs sm:text-sm uppercase tracking-widest text-[#ebdcc4]">
              BUILD PROCESS:
            </span>
            <div className="flex flex-wrap items-center gap-3 sm:gap-6 font-script text-base sm:text-lg font-bold text-[#ebdcc4]">
              <span>1. ideate & scope ➔</span>
              <span>2. prototype circuit ➔</span>
              <span>3. solder & code ➔</span>
              <span>4. ship product ⚡</span>
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
