'use client';

import { useState } from 'react';
import { Paperclip, Pin, Terminal, X, Compass, ExternalLink, Sparkles, Layers } from 'lucide-react';
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
      <header className="mb-14 relative mt-4 md:mt-8">
        <h1 className="font-display-xl text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-[#241918] mb-3 uppercase leading-none z-10 relative mix-blend-multiply">
          Project<br />Wall
        </h1>
        <p className="font-annotation text-lg sm:text-xl md:text-2xl italic text-[#9e4037] max-w-md z-10 relative">
          Things we probably shouldn&apos;t have started at 2AM.
        </p>

        {/* Floating Post-It Note */}
        <div className="absolute right-0 top-0 sm:right-10 md:right-20 md:top-4 sticky-note p-3 sm:p-4 rotate-more-pos w-44 sm:w-52 z-0 border border-[#241918]/20">
          <div className="absolute -top-3 -left-3 text-[#8f4a48]">
            <Pin size={20} className="fill-[#8f4a48] text-[#241918]" />
          </div>
          <p className="text-xs sm:text-sm font-annotation text-[#241918] leading-tight">
            Note to self: Fix the memory leak in project #042 before demo day.
          </p>
        </div>
      </header>

      {/* =========================================================================
          PROJECT GRID CANVAS (ASYMMETRIC EDITORIAL LAYOUT)
          ========================================================================= */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8 auto-rows-[auto]">
        
        {/* Project 1: Paper Card (Editorial Zine) */}
        <article className="md:col-span-8 paper-card p-6 md:p-8 rotate-neg relative bg-[#FFF9F2] border-2 border-[#8f4a48] hard-shadow">
          <Paperclip size={24} className="absolute top-4 right-4 text-[#615e59] rotate-45 pointer-events-none" />
          
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-1">
              <div className="flex justify-between items-center mb-3">
                <span className="font-label-caps text-xs text-[#8f4a48] font-bold">#001</span>
                <span className="font-label-caps text-[10px] bg-[#615e59] text-[#ffffff] px-2 py-0.5 border border-[#241918]">
                  SHIPPED
                </span>
              </div>

              <h2 className="font-headline-lg-mobile text-2xl sm:text-3xl text-[#241918] mb-3 uppercase">
                The Algorithm Zine
              </h2>
              <p className="font-body-md text-sm sm:text-base text-[#56423f] mb-6 leading-relaxed">
                An exploration of sorting algorithms visualized through analog printing techniques. We wrote a python script to generate halftone patterns based on quicksort operations.
              </p>

              <div className="flex gap-2 flex-wrap mb-2">
                <span className="font-label-caps text-[11px] border border-[#9e4037] text-[#9e4037] px-2 py-0.5">
                  Python
                </span>
                <span className="font-label-caps text-[11px] border border-[#9e4037] text-[#9e4037] px-2 py-0.5">
                  Processing
                </span>
                <span className="font-label-caps text-[11px] border border-[#9e4037] text-[#9e4037] px-2 py-0.5">
                  Riso Print
                </span>
              </div>
            </div>

            <div className="w-full md:w-56 h-48 md:h-52 relative shrink-0">
              <img 
                src="/assets/stitch/project_zine.png" 
                alt="Risograph sorting algorithm zine" 
                className="w-full h-full object-cover cutout-img"
                onClick={() => onSelectImage?.('/assets/stitch/project_zine.png', 'The Algorithm Zine')}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/assets/notes_polaroid_1.png';
                }}
              />
            </div>
          </div>
        </article>

        {/* Project 2: Terminal Window Card */}
        <article className="md:col-span-4 terminal-card p-6 rotate-pos flex flex-col font-mono text-sm bg-[#241918] text-[#fff8f7] border-2 border-[#241918] shadow-[-4px_4px_0px_0px_#9e4037]">
          <div className="flex justify-between items-center border-b border-[#56423f] pb-2 mb-4">
            <span className="text-[#ffb3af] text-xs font-mono">bash - user@byher:~/projects/042</span>
            <X size={14} className="text-[#dcc0bc]" />
          </div>

          <div className="mb-3 text-[#ffb4aa] text-xs">&gt; ./run_experiment.sh</div>
          
          <div className="text-[#ffdad7] text-lg font-bold uppercase mb-2 font-display-xl tracking-tight">
            Ghost Protocol
          </div>
          
          <p className="mb-6 opacity-85 text-xs sm:text-sm font-sans leading-relaxed text-[#f4dddd]">
            A decentralized chat protocol running entirely on abandoned smart bulb meshes and discarded microcontrollers.
          </p>

          <div className="mt-auto pt-3 border-t border-[#56423f]/50">
            <div className="flex gap-2 mb-2">
              <span className="text-[10px] bg-[#8f4a48] text-[#ffffff] px-1.5 py-0.5">C++</span>
              <span className="text-[10px] bg-[#8f4a48] text-[#ffffff] px-1.5 py-0.5">LoRaWAN</span>
            </div>
            <span className="text-xs text-[#ff8b7d] font-bold blink block">
              &gt; STATUS: SOMEHOW WORKS
            </span>
          </div>
        </article>

        {/* Project 3: Polaroid Image Heavy */}
        <article className="md:col-span-4 polaroid-card rotate-more-neg bg-[#ffffff] border border-[#e7e2db] p-3 pb-8 hard-shadow-sm">
          <div className="w-full h-48 bg-[#f4dddd] mb-3 overflow-hidden relative">
            <img 
              src="/assets/stitch/project_synth.png" 
              alt="Electronics workbench with modem hardware synth" 
              className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
              onClick={() => onSelectImage?.('/assets/stitch/project_synth.png', 'Sleep Deprivation Hardware Synth')}
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/assets/notes_polaroid_2.png';
              }}
            />
            <div className="absolute top-2 left-2 font-label-caps text-[10px] bg-[#241918] text-[#ffffff] px-2 py-0.5">
              BUILDING
            </div>
          </div>

          <div className="font-annotation">
            <div className="font-bold text-base text-[#241918] mb-1">#089: Sleep Deprivation</div>
            <p className="text-xs text-[#56423f]">Hardware synthesizer constructed from salvaged 56k modems and e-waste.</p>
            <div className="text-[11px] mt-2 text-[#89726f] font-mono">Tech: Arduino, E-Waste, Sound Synthesis</div>
          </div>
        </article>

        {/* Project 4: Blueprint Card */}
        <article className="md:col-span-5 blueprint-card p-6 rotate-pos bg-[#494642] text-[#FFF9F2] border border-[#dcc0bc] hard-shadow-sm">
          <div className="flex justify-between items-center border-b border-[#dcc0bc]/40 pb-2 mb-4">
            <span className="font-mono text-xs text-[#dcc0bc] uppercase tracking-widest">Schematic v1.2</span>
            <span className="font-label-caps text-[10px] border border-[#dcc0bc] px-2 py-0.5">IDEA</span>
          </div>

          <h2 className="font-headline-lg-mobile text-2xl text-[#ffffff] mb-2 font-light">
            Analog Grid Engine
          </h2>
          
          <p className="mb-4 font-mono text-xs opacity-90 leading-relaxed text-[#e7e2db]">
            A CSS framework based entirely on physical architectural drafting constraints. Strict 12-column grid enforced by border calculations.
          </p>

          <div className="w-full h-28 border border-[#dcc0bc]/50 flex items-center justify-center relative mb-4 bg-black/10">
            <Layers size={36} className="text-[#dcc0bc] opacity-50" />
            <div className="absolute inset-0 grid grid-cols-6 gap-2 p-2 pointer-events-none">
              <div className="border border-[#dcc0bc]/20"></div>
              <div className="border border-[#dcc0bc]/20"></div>
              <div className="border border-[#dcc0bc]/20"></div>
              <div className="border border-[#dcc0bc]/20"></div>
              <div className="border border-[#dcc0bc]/20"></div>
              <div className="border border-[#dcc0bc]/20"></div>
            </div>
          </div>

          <div className="font-mono text-[11px] text-[#ffdad7]">Tech: PostCSS, CSS Math, Canvas Grid</div>
        </article>

        {/* Project 5: Minimal Text Block (Editorial Asymmetry) */}
        <article className="md:col-span-3 p-6 border-l-4 border-[#9e4037] bg-[#fff0ef] hard-shadow-xs flex flex-col justify-between">
          <div>
            <span className="font-label-caps text-xs text-[#8f4a48] block mb-1">#101</span>
            <h2 className="font-headline-lg-mobile text-2xl text-[#241918] mb-3 uppercase leading-tight">
              The Anti-Portfolio
            </h2>
            <p className="font-body-md text-xs sm:text-sm text-[#56423f] mb-4 leading-relaxed">
              We spent 3 weeks building a portfolio that actively hides our best work behind cryptic terminal puzzles and ASCII riddles.
            </p>
          </div>

          <div>
            <span className="font-label-caps text-[10px] bg-[#241918] text-[#ffffff] px-2 py-0.5 inline-block mb-3">
              SHIPPED
            </span>
            <div className="font-label-caps text-[10px] text-[#89726f] flex gap-2">
              <span>#React</span>
              <span>#Three.js</span>
              <span>#Spite</span>
            </div>
          </div>
        </article>

      </div>
    </div>
  );
}
