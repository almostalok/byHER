'use client';

import { motion } from 'framer-motion';
import { Cpu, Code2, Sparkles, Zap, ArrowRight, CheckCircle2, Bookmark } from 'lucide-react';
import { useRetroAudio } from '@/lib/useRetroAudio';

export default function AboutSection() {
  const { playClick } = useRetroAudio();

  return (
    <section id="about" className="relative w-screen min-w-[100vw] h-full flex-shrink-0 snap-start snap-always bg-[#dfdac3] border-r-2 border-dashed border-[#be3519]/40 flex flex-col justify-center py-6 px-6 sm:px-12 lg:px-16 overflow-y-auto select-none">
      
      {/* Section Background Stipple Texture Grid Accent */}
      <div className="max-w-7xl mx-auto w-full space-y-6 lg:space-y-8 my-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center justify-between border-b-2 border-dashed border-[#be3519]/40 pb-3">
          <div className="flex items-center gap-3">
            <span className="bg-[#be3519] text-[#ebdcc4] font-display font-black text-xs px-3 py-1 rounded-full uppercase tracking-widest shadow-sm flex items-center gap-1.5">
              <Bookmark size={12} /> 01 / WHO WE ARE
            </span>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-display font-black text-3xl sm:text-4xl text-[#be3519] uppercase tracking-wider"
            >
              ABOUT US
            </motion.h2>
          </div>
          
          <div className="hidden sm:flex items-center gap-2">
            <Sparkles size={18} className="text-[#be3519]" />
            <span className="font-script text-xl sm:text-2xl text-[#522a25] font-bold transform -rotate-1">
              led by her, built for all
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Scrapbook Collage Container (Cols 1-5) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative flex flex-col items-center justify-center py-4 min-h-[420px]"
          >
            {/* Pushpin Graphic Top Right */}
            <div className="absolute top-1 right-6 z-30 w-7 h-7 pointer-events-none drop-shadow-md transform rotate-12">
              <img 
                src="/assets/pushpin_graphic.png" 
                alt="Pushpin" 
                className="w-full h-full object-contain"
              />
            </div>

            {/* Red Halftone Camera Graphic */}
            <div className="absolute top-0 left-2 z-20 w-24 h-20 pointer-events-none drop-shadow-md">
              <img 
                src="/assets/camera_graphic.png" 
                alt="Retro Tech Camera" 
                className="w-full h-full object-contain"
              />
            </div>

            {/* byHER Team Members Software Discussion Photo with Tape Corners */}
            <div className="relative w-[300px] h-[360px] sm:w-[330px] sm:h-[390px] rounded-3xl overflow-hidden border-4 border-[#be3519] shadow-2xl z-10 my-3 bg-[#dfdac3] group">
              {/* Retro Corner Tape Strips */}
              <div className="absolute -top-2 left-6 z-30 w-16 h-6 bg-[#ebdcc4]/80 border border-[#be3519]/40 transform -rotate-6 shadow-sm" />
              <div className="absolute -bottom-2 right-6 z-30 w-16 h-6 bg-[#ebdcc4]/80 border border-[#be3519]/40 transform rotate-6 shadow-sm" />

              <img 
                src="/assets/about_portrait.png" 
                alt="byHER Team Members collaborating on software project" 
                className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#522a25]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-[#ebdcc4] font-script text-lg font-bold">byHER Makers in Action ⚡</span>
              </div>
            </div>

            {/* Speech Bubble 1 */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute -left-2 sm:-left-6 top-20 z-30 bg-[#f4ebd0] border-2 border-dashed border-[#be3519] rounded-2xl px-4 py-2 shadow-lg max-w-[210px] text-center transform -rotate-2"
            >
              <p className="font-script text-base text-[#be3519] leading-snug font-bold">
                breadboards, solder & code.
              </p>
            </motion.div>

            {/* Speech Bubble 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -left-4 sm:-left-8 bottom-4 z-30 bg-[#f4ebd0] border-2 border-dashed border-[#be3519] rounded-2xl px-4 py-2 shadow-lg max-w-[230px] text-center transform rotate-1"
            >
              <p className="font-script text-sm text-[#be3519] leading-snug font-bold">
                zero gatekeeping. 100% build.
              </p>
            </motion.div>

            {/* Red Halftone Lips Graphic */}
            <div className="absolute right-2 bottom-0 z-30 w-16 h-12 pointer-events-none drop-shadow-md">
              <img 
                src="/assets/lips_graphic.png" 
                alt="byHER Graphic" 
                className="w-full h-full object-contain"
              />
            </div>

          </motion.div>

          {/* Right Text & Graphical Cards (Cols 6-12) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 space-y-5 lg:pl-2"
          >
            {/* High-Impact Headline with Highlight Badge */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 bg-[#be3519]/10 text-[#be3519] border border-[#be3519]/30 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider">
                <Zap size={14} className="text-[#be3519]" />
                <span>Hands-On Women in Tech Collective</span>
              </div>

              <h3 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-[#be3519] uppercase leading-tight tracking-wide">
                NO FLUFF. NO PANELS. JUST WOMEN BUILDING <span className="bg-[#f4ebd0] px-2 py-0.5 rounded-lg border border-dashed border-[#be3519]/40 text-[#522a25]">FROM 0 TO 1</span>.
              </h3>
            </div>

            {/* Authentic Human Story Copy */}
            <div className="space-y-2 font-display text-sm sm:text-base text-[#522a25] leading-relaxed tracking-wide">
              <p>
                byHER was born out of a simple frustration: women in tech are constantly invited to sit on panels, but rarely given the space, tools, and community to sit down and <strong className="text-[#be3519] font-black underline underline-offset-2">actually build</strong>.
              </p>
              <p className="font-semibold">
                We get together, heat up the soldering irons, open VS Code, and turn ideas into working hardware and production software from total scratch.
              </p>
            </div>

            {/* Graphical Pill Strip (4 Core Pillars) */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 bg-[#be3519] text-[#ebdcc4] text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                <Zap size={13} /> PROTOTYPE
              </span>
              <span className="inline-flex items-center gap-1.5 bg-[#522a25] text-[#ebdcc4] text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                <Cpu size={13} /> SOLDER
              </span>
              <span className="inline-flex items-center gap-1.5 bg-[#be3519] text-[#ebdcc4] text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                <Code2 size={13} /> CODE
              </span>
              <span className="inline-flex items-center gap-1.5 bg-[#522a25] text-[#ebdcc4] text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                <ArrowRight size={13} /> SHIP
              </span>
            </div>

            {/* Two Graphic Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-3 border-t-2 border-dashed border-[#be3519]/40">
              
              {/* Card 1: Hardware Engineering */}
              <motion.div 
                onClick={playClick}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="space-y-3 bg-[#f4ebd0] p-4 rounded-2xl border-2 border-[#be3519]/30 shadow-md relative overflow-hidden cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[#be3519] text-[#ebdcc4] flex items-center justify-center shadow-sm">
                      <Cpu size={18} />
                    </div>
                    <h4 className="font-display font-black text-base text-[#be3519] uppercase tracking-wider">
                      HARDWARE LAB
                    </h4>
                  </div>
                  <span className="text-[10px] bg-[#be3519] text-[#ebdcc4] font-bold px-2 py-0.5 rounded-full uppercase">0 ➔ 1</span>
                </div>

                <p className="font-display font-bold text-xs text-[#522a25] uppercase tracking-wider">
                  EMBEDDED SYSTEMS & PROTOTYPING
                </p>

                <ul className="text-xs text-[#522a25] space-y-2 font-medium">
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 size={14} className="text-[#be3519] shrink-0 mt-0.5" />
                    <span>PCB schematics & KiCad layouts</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 size={14} className="text-[#be3519] shrink-0 mt-0.5" />
                    <span>ESP32 & STM32 firmware in C++</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 size={14} className="text-[#be3519] shrink-0 mt-0.5" />
                    <span>Telemetry, sensors & 3D printed builds</span>
                  </li>
                </ul>

                <p className="font-script text-xs text-[#be3519] font-bold pt-1 border-t border-dashed border-[#be3519]/20">
                  burnt fingers & working circuits.
                </p>
              </motion.div>

              {/* Card 2: Software Collective */}
              <motion.div 
                onClick={playClick}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="space-y-3 bg-[#f4ebd0] p-4 rounded-2xl border-2 border-[#be3519]/30 shadow-md relative overflow-hidden cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[#522a25] text-[#ebdcc4] flex items-center justify-center shadow-sm">
                      <Code2 size={18} />
                    </div>
                    <h4 className="font-display font-black text-base text-[#be3519] uppercase tracking-wider">
                      SOFTWARE DEV
                    </h4>
                  </div>
                  <span className="text-[10px] bg-[#522a25] text-[#ebdcc4] font-bold px-2 py-0.5 rounded-full uppercase">PRODUCTION</span>
                </div>

                <p className="font-display font-bold text-xs text-[#522a25] uppercase tracking-wider">
                  FULL-STACK & AI ARCHITECTURES
                </p>

                <ul className="text-xs text-[#522a25] space-y-2 font-medium">
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 size={14} className="text-[#be3519] shrink-0 mt-0.5" />
                    <span>Next.js fullstack & Python backends</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 size={14} className="text-[#be3519] shrink-0 mt-0.5" />
                    <span>Local AI agent pipelines</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 size={14} className="text-[#be3519] shrink-0 mt-0.5" />
                    <span>Open-source repos & PR shipments</span>
                  </li>
                </ul>

                <p className="font-script text-xs text-[#be3519] font-bold pt-1 border-t border-dashed border-[#be3519]/20">
                  git push origin main. zero fluff.
                </p>
              </motion.div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
