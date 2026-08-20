'use client';

import { useState } from 'react';
import { Paperclip, Pin, Terminal, X, Compass, ExternalLink, Sparkles, Layers, Code, Cpu } from 'lucide-react';
import { useRetroAudio } from '@/lib/useRetroAudio';

interface WorkExSectionProps {
  onSelectImage?: (imgUrl: string, title: string) => void;
  onNavigate?: (sectionId: string) => void;
}

export default function WorkExSection({ onSelectImage, onNavigate }: WorkExSectionProps) {
  const { playClick, playPaper } = useRetroAudio();

  return (
    <div className="w-full flex-grow p-4 sm:p-6 md:p-10 flex flex-col relative z-20 select-none max-w-[1400px] mx-auto">
      
      {/* =========================================================================
          PROJECT WALL HEADER
          ========================================================================= */}
      <header className="mb-14 relative mt-2 md:mt-6">
        <h1 className="font-display-xl text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-[#1c1917] mb-3 uppercase leading-none z-10 relative mix-blend-multiply">
          Project<br />Wall
        </h1>
        <p className="font-annotation text-lg sm:text-xl md:text-2xl italic text-[#ea580c] max-w-md z-10 relative font-bold">
          Things we probably shouldn&apos;t have started at 2AM.
        </p>

        {/* Floating Post-It Note (Vibrant Yellow) */}
        <div className="absolute right-0 top-0 sm:right-10 md:right-20 md:top-4 bg-[#fef08a] p-3.5 sm:p-4 rotate-more-pos w-48 sm:w-56 z-0 border-2 border-[#1c1917] hard-shadow-sm">
          <div className="absolute -top-3 -left-3 text-[#1c1917]">
            <Pin size={22} className="fill-[#dc2626] text-[#1c1917]" />
          </div>
          <p className="text-xs sm:text-sm font-annotation text-[#854d0e] leading-tight font-black">
            Note to self: Fix the memory leak in project #042 before demo day.
          </p>
        </div>
      </header>

      {/* =========================================================================
          PROJECT GRID CANVAS (COLORFUL ASYMMETRIC CARDS)
          ========================================================================= */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8 auto-rows-[auto]">
        
        {/* Project 1: Paper Card (Editorial Zine in Peach/Orange) */}
        <article className="md:col-span-8 p-6 md:p-8 rotate-neg relative bg-[#fff7ed] border-3 border-[#1c1917] hard-shadow">
          <Paperclip size={26} className="absolute top-4 right-4 text-[#ea580c] rotate-45 pointer-events-none" />
          
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-1">
              <div className="flex justify-between items-center mb-3">
                <span className="font-label-caps text-xs text-[#ea580c] font-black">#001</span>
                <span className="font-label-caps text-[10px] bg-[#22c55e] text-[#ffffff] px-2.5 py-0.5 border-2 border-[#1c1917] font-black shadow-xs">
                  SHIPPED
                </span>
              </div>

              <h2 className="font-headline-lg-mobile text-2xl sm:text-3xl text-[#1c1917] mb-3 uppercase font-black">
                The Algorithm Zine
              </h2>
              <p className="font-body-md text-sm sm:text-base text-[#44403c] mb-6 leading-relaxed font-medium">
                An exploration of sorting algorithms visualized through analog printing techniques. We wrote a python script to generate halftone patterns based on quicksort operations.
              </p>

              <div className="flex gap-2 flex-wrap mb-2">
                <span className="font-label-caps text-[11px] bg-[#ffedd5] border-2 border-[#1c1917] text-[#c2410c] px-2.5 py-0.5 font-black">
                  Python
                </span>
                <span className="font-label-caps text-[11px] bg-[#bae6fd] border-2 border-[#1c1917] text-[#0369a1] px-2.5 py-0.5 font-black">
                  Processing
                </span>
                <span className="font-label-caps text-[11px] bg-[#fecdd3] border-2 border-[#1c1917] text-[#be123c] px-2.5 py-0.5 font-black">
                  Riso Print
                </span>
              </div>
            </div>

            <div className="w-full md:w-56 h-48 md:h-52 relative shrink-0 border-2 border-[#1c1917] bg-[#ffffff] p-1 shadow-sm">
              <img 
                src="/assets/stitch/project_zine.png" 
                alt="Risograph sorting algorithm zine" 
                className="w-full h-full object-cover"
                onClick={() => onSelectImage?.('/assets/stitch/project_zine.png', 'The Algorithm Zine')}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/assets/notes_polaroid_1.png';
                }}
              />
            </div>
          </div>
        </article>

        {/* Project 2: Terminal Window Card (Neon Cyber Dark) */}
        <article className="md:col-span-4 terminal-card p-6 rotate-pos flex flex-col font-mono text-sm bg-[#18181b] text-[#f4f4f5] border-3 border-[#1c1917] shadow-[-5px_5px_0px_0px_#22c55e]">
          <div className="flex justify-between items-center border-b border-[#3f3f46] pb-2 mb-4">
            <span className="text-[#4ade80] text-xs font-mono font-bold">bash - user@byher:~/projects/042</span>
            <X size={14} className="text-[#a1a1aa]" />
          </div>

          <div className="mb-3 text-[#fde047] text-xs font-bold">&gt; ./run_experiment.sh</div>
          
          <div className="text-[#ffffff] text-xl font-bold uppercase mb-2 font-display-xl tracking-tight">
            Ghost Protocol
          </div>
          
          <p className="mb-6 text-xs sm:text-sm font-sans leading-relaxed text-[#e4e4e7]">
            A decentralized chat protocol running entirely on abandoned smart bulb meshes and discarded microcontrollers.
          </p>

          <div className="mt-auto pt-3 border-t border-[#3f3f46]">
            <div className="flex gap-2 mb-2">
              <span className="text-[10px] bg-[#3b82f6] text-[#ffffff] px-2 py-0.5 font-bold border border-[#1e40af]">C++</span>
              <span className="text-[10px] bg-[#ec4899] text-[#ffffff] px-2 py-0.5 font-bold border border-[#be185d]">LoRaWAN</span>
            </div>
            <span className="text-xs text-[#22c55e] font-bold blink block">
              &gt; STATUS: SOMEHOW WORKS ⚡
            </span>
          </div>
        </article>

        {/* Project 3: Polaroid Image Heavy (Electric Tag) */}
        <article className="md:col-span-4 polaroid-card rotate-more-neg bg-[#ffffff] border-3 border-[#1c1917] p-3 pb-8 hard-shadow">
          <div className="w-full h-48 bg-[#fef3c7] mb-3 overflow-hidden relative border border-[#1c1917]">
            <img 
              src="/assets/stitch/project_synth.png" 
              alt="Electronics workbench with modem hardware synth" 
              className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
              onClick={() => onSelectImage?.('/assets/stitch/project_synth.png', 'Sleep Deprivation Hardware Synth')}
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/assets/notes_polaroid_2.png';
              }}
            />
            <div className="absolute top-2 left-2 font-label-caps text-[10px] bg-[#f97316] text-[#ffffff] px-2.5 py-0.5 border border-[#1c1917] font-black shadow-xs">
              BUILDING
            </div>
          </div>

          <div className="font-annotation">
            <div className="font-bold text-base text-[#1c1917] mb-1">#089: Sleep Deprivation</div>
            <p className="text-xs text-[#57534e] font-medium">Hardware synthesizer constructed from salvaged 56k modems and e-waste.</p>
            <div className="text-[11px] mt-2 text-[#ea580c] font-mono font-bold">Tech: Arduino, E-Waste, Sound Synthesis</div>
          </div>
        </article>

        {/* Project 4: Blueprint Card (Electric Cyan Blueprint Grid) */}
        <article className="md:col-span-5 blueprint-card p-6 rotate-pos bg-[#0c4a6e] text-[#f0f9ff] border-3 border-[#38bdf8] shadow-[5px_5px_0px_0px_#0284c7]">
          <div className="flex justify-between items-center border-b border-[#38bdf8]/40 pb-2 mb-4">
            <span className="font-mono text-xs text-[#7dd3fc] uppercase tracking-widest font-bold">Schematic v1.2</span>
            <span className="font-label-caps text-[10px] bg-[#0284c7] text-[#ffffff] px-2.5 py-0.5 border border-[#38bdf8] font-black">IDEA</span>
          </div>

          <h2 className="font-headline-lg-mobile text-2xl text-[#ffffff] mb-2 font-bold">
            Analog Grid Engine
          </h2>
          
          <p className="mb-4 font-mono text-xs opacity-95 leading-relaxed text-[#bae6fd]">
            A CSS framework based entirely on physical architectural drafting constraints. Strict 12-column grid enforced by border calculations.
          </p>

          <div className="w-full h-28 border border-[#38bdf8]/60 flex items-center justify-center relative mb-4 bg-sky-950/40">
            <Layers size={38} className="text-[#38bdf8] opacity-80" />
            <div className="absolute inset-0 grid grid-cols-6 gap-2 p-2 pointer-events-none">
              <div className="border border-[#38bdf8]/30"></div>
              <div className="border border-[#38bdf8]/30"></div>
              <div className="border border-[#38bdf8]/30"></div>
              <div className="border border-[#38bdf8]/30"></div>
              <div className="border border-[#38bdf8]/30"></div>
              <div className="border border-[#38bdf8]/30"></div>
            </div>
          </div>

          <div className="font-mono text-[11px] text-[#7dd3fc] font-bold">Tech: PostCSS, CSS Math, Canvas Grid</div>
        </article>

        {/* Project 5: Editorial Block (Electric Lavender / Purple Pop) */}
        <article className="md:col-span-3 p-6 border-3 border-[#1c1917] bg-[#f5f3ff] hard-shadow flex flex-col justify-between">
          <div>
            <span className="font-label-caps text-xs text-[#7c3aed] block mb-1 font-black">#101</span>
            <h2 className="font-headline-lg-mobile text-2xl text-[#1c1917] mb-3 uppercase leading-tight font-black">
              The Anti-Portfolio
            </h2>
            <p className="font-body-md text-xs sm:text-sm text-[#4c1d95] mb-4 leading-relaxed font-medium">
              We spent 3 weeks building a portfolio that actively hides our best work behind cryptic terminal puzzles and ASCII riddles.
            </p>
          </div>

          <div>
            <span className="font-label-caps text-[10px] bg-[#7c3aed] text-[#ffffff] px-2.5 py-0.5 inline-block mb-3 border border-[#1c1917] font-black shadow-xs">
              SHIPPED
            </span>
            <div className="font-label-caps text-[10px] text-[#7c3aed] flex gap-2 font-black">
              <span className="bg-[#ede9fe] px-1.5 py-0.5 border border-[#7c3aed]">#React</span>
              <span className="bg-[#ede9fe] px-1.5 py-0.5 border border-[#7c3aed]">#Three.js</span>
              <span className="bg-[#ede9fe] px-1.5 py-0.5 border border-[#7c3aed]">#Spite</span>
            </div>
          </div>
        </article>

      </div>
    </div>
  );
}
