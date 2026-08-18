'use client';

import { motion } from 'framer-motion';
import { Radio, Disc, Sparkles, Award } from 'lucide-react';
import { useRetroAudio } from '@/lib/useRetroAudio';

interface WrappedProps {
  onSelectImage?: (imgUrl: string, title: string) => void;
}

export default function WrappedSection({ onSelectImage }: WrappedProps) {
  const { playClick } = useRetroAudio();

  return (
    <section id="community" className="relative w-screen min-w-[100vw] h-full flex-shrink-0 snap-start snap-always bg-[#dfdac3] border-r-2 border-dashed border-[#be3519]/40 flex flex-col justify-start md:justify-center py-6 px-4 sm:px-8 lg:px-16 overflow-y-auto select-none">
      <div className="max-w-7xl mx-auto w-full space-y-4 sm:space-y-6 lg:space-y-8 my-0 md:my-auto pb-16 md:pb-0">
        
        {/* Layout Grid: Left Header & Megaphone vs Right Tilted Wrapped Collage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
          
          {/* Left Side: Title & Megaphone "What's trending??" (Cols 1-5) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col items-start space-y-3 sm:space-y-5"
          >
            {/* Top Section Character Badge */}
            <div className="flex items-center gap-2">
              <span className="bg-[#be3519] text-[#ebdcc4] font-display font-black text-[10px] sm:text-xs px-2.5 sm:px-3 py-1 rounded-full uppercase tracking-widest shadow-sm flex items-center gap-1.5">
                <Disc size={12} /> 03 / COMMUNITY & IMPACT
              </span>
              <span className="bg-[#f49799] text-[#be3519] border border-[#be3519] font-mono text-[9px] sm:text-[10px] font-bold px-2 sm:px-2.5 py-0.5 rounded-full uppercase">
                MIXTAPE 2025
              </span>
            </div>

            {/* Megaphone Graphic */}
            <div className="w-24 h-20 sm:w-44 sm:h-36 relative drop-shadow-lg">
              <img 
                src="/assets/megaphone_graphic.png" 
                alt="Megaphone Graphic" 
                className="w-full h-full object-contain transform hover:rotate-6 transition-transform duration-300"
              />
            </div>

            {/* Speech Bubble */}
            <div className="relative bg-[#dfdac3] border-2 border-dashed border-[#be3519] rounded-full px-5 sm:px-8 py-2 sm:py-3.5 shadow-lg">
              <p className="font-script text-lg sm:text-2xl text-[#be3519] font-bold">
                What's trending??
              </p>
            </div>

            {/* Main Section Header */}
            <h2 className="font-display font-black text-xl sm:text-4xl lg:text-5xl text-[#be3519] uppercase tracking-wider leading-tight">
              byHER COMMUNITY<br />IMPACT & WRAPPED
            </h2>
            
            <p className="font-display text-[11px] sm:text-sm font-bold text-[#522a25] uppercase tracking-wider leading-relaxed">
              From first breadboard hookup to full production deployment, see what our collective of women makers shipped this year.
            </p>
          </motion.div>

          {/* Right Side: Interactive Wrapped Collage (Cols 6-12) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 relative group rounded-3xl overflow-hidden shadow-2xl border-4 border-[#be3519] bg-[#0d1b2a]"
          >
            <div 
              onClick={() => {
                playClick();
                onSelectImage?.('/assets/pngs_2x/Section_1_2666.png', 'byHER Community Milestone Cards');
              }}
              className="cursor-pointer overflow-hidden relative bg-[#1b263b]"
            >
              <img 
                src="/assets/pngs_2x/Section_1_2666.png" 
                alt="byHER Impact Report Cards" 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500 max-h-[260px] sm:max-h-[380px]"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#522a25]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="bg-[#be3519] text-[#ebdcc4] font-display font-bold text-xs uppercase tracking-widest px-4 py-2 sm:px-6 sm:py-3 rounded-full shadow-lg flex items-center gap-2">
                  <Sparkles size={15} /> Click to Expand Community Cards
                </span>
              </div>
            </div>

            {/* Interactive Stats Callout Cards Grid below image */}
            <div className="bg-[#0d1b2a] p-3 sm:p-5 text-white grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-4 border-t-2 border-[#be3519]">
              
              {/* Stat Card 1 */}
              <div className="bg-[#1b263b] p-3 sm:p-4 rounded-2xl border border-[#be3519]/40 space-y-0.5 sm:space-y-1">
                <p className="font-mono font-bold text-[8px] sm:text-[10px] text-[#f49799] uppercase tracking-widest flex items-center gap-1">
                  <Radio size={11} /> COLLECTIVE BUILD STATS
                </p>
                <p className="font-display font-black text-sm sm:text-xl text-[#ebdcc4] uppercase">48+ PROTOTYPES SHIPPED</p>
                <p className="text-[10px] sm:text-xs font-mono text-gray-300">1,500+ Women Upskilled in 0 ➔ 1</p>
              </div>

              {/* Stat Card 2 */}
              <div className="bg-[#1b263b] p-3 sm:p-4 rounded-2xl border border-[#be3519]/40 space-y-0.5 sm:space-y-1">
                <p className="font-mono font-bold text-[8px] sm:text-[10px] text-[#f49799] uppercase tracking-widest flex items-center gap-1">
                  <Award size={11} /> COMMUNITY MOOD
                </p>
                <p className="font-display font-black text-sm sm:text-xl text-[#ebdcc4] uppercase">"Led by Her, Built for All"</p>
                <p className="text-[10px] sm:text-xs font-mono text-gray-300">Genre: Relentless Maker Energy</p>
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
