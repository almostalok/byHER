'use client';

import { Pin, ArrowRight, RefreshCw, Construction, HelpCircle, LockOpen, AlertTriangle, Fingerprint, Compass, Info, Flame, Sparkles } from 'lucide-react';
import { useRetroAudio } from '@/lib/useRetroAudio';

interface AboutSectionProps {
  onNavigate?: (sectionId: string) => void;
}

export default function AboutSection({ onNavigate }: AboutSectionProps) {
  const { playClick } = useRetroAudio();

  return (
    <div className="w-full flex-grow p-4 sm:p-6 md:p-10 max-w-[1400px] mx-auto relative select-none">
      
      {/* =========================================================================
          HEADER SECTION: SO, THIS IS US.
          ========================================================================= */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20 md:mb-28 relative mt-2 md:mt-6">
        <div className="md:col-span-9 md:col-start-1 lg:col-span-8 lg:col-start-2 relative z-10">
          
          <h2 className="font-display-xl text-5xl sm:text-7xl md:text-[100px] lg:text-[120px] leading-[0.9] text-[#1c1917] zine-rotation-1 mb-6 relative">
            SO, THIS<br />
            <span className="text-[#ea580c] ml-6 md:ml-12">IS US.</span>

            {/* Handwritten Floating Note */}
            <div className="absolute -top-10 sm:-top-12 right-0 md:-right-8 bg-[#fef08a] p-3 md:p-4 zine-rotation-2 font-annotation text-xs sm:text-sm max-w-[210px] hard-shadow-xs border-2 border-[#1c1917] text-[#854d0e] font-black">
              *A DEAD CODE SOCIETY initiative.
            </div>
          </h2>

          <div className="paper-card p-6 md:p-8 zine-rotation-3 relative bg-[#ffffff] border-3 border-[#1c1917] hard-shadow">
            <div className="absolute top-4 right-4 text-[#ea580c]">
              <Pin size={22} className="text-[#ea580c] fill-[#ea580c]" />
            </div>
            <p className="font-body-md text-base md:text-lg text-[#1c1917] max-w-2xl leading-relaxed font-medium">
              We are a collective operating under the <strong className="font-black text-[#ea580c] bg-[#ffedd5] px-1.5 py-0.5 border border-[#ea580c] rounded">DEAD CODE SOCIETY</strong>. We build tools, we break systems, and we document the wreckage. This isn&apos;t just about code; it&apos;s about claiming space and owning the technical infrastructure.
            </p>
          </div>
        </div>

        {/* Vertical Decorative Tag */}
        <div className="hidden lg:block lg:col-span-2 relative">
          <div className="vertical-text font-label-caps text-xs text-[#c2410c] tracking-widest absolute right-0 top-0 h-full flex items-center font-black opacity-90">
            EST. 2024 // ANALOG TECH // RAW DATA // ZERO TO ONE
          </div>
        </div>
      </section>

      {/* =========================================================================
          THE LOOP: MULTI-COLORED VISUAL TIMELINE
          ========================================================================= */}
      <section className="mb-24 md:mb-32 relative">
        <div className="flex items-center gap-3 mb-10 border-b-4 border-[#1c1917] pb-3 w-max">
          <Flame size={34} className="text-[#ea580c]" />
          <h3 className="font-headline-lg text-3xl sm:text-4xl text-[#1c1917] uppercase">
            The Loop
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 relative">
          {/* Timeline connecting line behind boxes */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1.5 bg-[#ea580c] -z-10 transform -translate-y-1/2 opacity-70"></div>

          {/* Step 01: MEET (Warm Yellow) */}
          <div className="p-5 flex flex-col items-center justify-center aspect-square zine-rotation-2 hover:zine-rotation-1 transition-transform relative bg-[#fef08a] border-3 border-[#1c1917] hard-shadow-sm">
            <span className="font-label-caps text-xs text-[#854d0e] mb-1 font-black">01</span>
            <span className="font-headline-lg-mobile text-2xl sm:text-3xl text-[#1c1917] font-black">MEET</span>
          </div>

          {/* Step 02: LEARN (Sky Blue) */}
          <div className="p-5 flex flex-col items-center justify-center aspect-square zine-rotation-3 hover:zine-rotation-2 transition-transform relative bg-[#bae6fd] border-3 border-[#1c1917] hard-shadow-sm lg:mt-6">
            <span className="font-label-caps text-xs text-[#0369a1] mb-1 font-black">02</span>
            <span className="font-headline-lg-mobile text-2xl sm:text-3xl text-[#1c1917] font-black">LEARN</span>
          </div>

          {/* Step 03: BUILD (Apricot Orange) */}
          <div className="p-5 flex flex-col items-center justify-center aspect-square zine-rotation-1 hover:zine-rotation-3 transition-transform relative bg-[#fed7aa] border-3 border-[#1c1917] hard-shadow-sm">
            <span className="font-label-caps text-xs text-[#9a3412] mb-1 font-black">03</span>
            <span className="font-headline-lg-mobile text-2xl sm:text-3xl text-[#1c1917] font-black">BUILD</span>
          </div>

          {/* Step 04: BREAK (Coral Rose with Strikethrough) */}
          <div className="p-5 flex flex-col items-center justify-center aspect-square zine-rotation-2 hover:zine-rotation-1 transition-transform relative bg-[#fecdd3] border-3 border-[#1c1917] hard-shadow-sm lg:mt-8">
            <span className="font-label-caps text-xs text-[#be123c] mb-1 font-black">04</span>
            <span className="font-headline-lg-mobile text-2xl sm:text-3xl text-[#1c1917] font-black line-through decoration-[#dc2626] decoration-4">
              BREAK
            </span>
          </div>

          {/* Step 05: SHIP (Electric Emerald) */}
          <div className="p-5 flex flex-col items-center justify-center aspect-square zine-rotation-3 hover:zine-rotation-2 transition-transform relative bg-[#22c55e] border-3 border-[#1c1917] hard-shadow-sm lg:mt-4 text-[#ffffff]">
            <span className="font-label-caps text-xs text-[#dcfce7] mb-1 font-black">05</span>
            <span className="font-headline-lg-mobile text-2xl sm:text-3xl font-black">
              SHIP
            </span>
          </div>

          {/* Step 06: REPEAT (Electric Indigo / Purple) */}
          <div className="p-5 flex flex-col items-center justify-center aspect-square zine-rotation-1 hover:zine-rotation-3 transition-transform relative bg-[#4f46e5] border-3 border-[#1c1917] hard-shadow-sm text-[#ffffff]">
            <span className="font-label-caps text-xs text-[#e0e7ff] mb-1 font-black">06</span>
            <span className="font-headline-lg-mobile text-2xl sm:text-3xl font-black">REPEAT</span>
            <RefreshCw size={18} className="absolute bottom-2 right-2 text-[#e0e7ff] opacity-80" />
          </div>

        </div>
      </section>

      {/* =========================================================================
          PRINCIPLES MANIFESTO (COLORFUL BADGES & ICONS)
          ========================================================================= */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-24 md:mb-32 relative">
        <div className="md:col-span-4 flex flex-col justify-end pb-4">
          <h3 className="font-display-xl text-6xl sm:text-7xl md:text-[84px] leading-none text-[#ea580c] break-words">
            PRIN<br />CIPLES
          </h3>
        </div>

        <div className="md:col-span-8">
          <div className="paper-card p-6 md:p-10 border-3 border-[#1c1917] bg-[#ffffff] hard-shadow">
            <ul className="space-y-5 font-annotation text-lg sm:text-xl md:text-2xl text-[#1c1917]">
              
              <li className="flex items-start gap-4 border-b-2 border-[#ffedd5] pb-4">
                <div className="p-1.5 bg-[#fed7aa] border-2 border-[#1c1917] rounded-lg text-[#ea580c] shrink-0 mt-0.5">
                  <Construction size={22} />
                </div>
                <span><strong className="font-label-caps text-sm md:text-base text-[#ea580c] mr-2">01.</strong> BUILD FIRST.</span>
              </li>

              <li className="flex items-start gap-4 border-b-2 border-[#ffedd5] pb-4">
                <div className="p-1.5 bg-[#bae6fd] border-2 border-[#1c1917] rounded-lg text-[#0284c7] shrink-0 mt-0.5">
                  <HelpCircle size={22} />
                </div>
                <span><strong className="font-label-caps text-sm md:text-base text-[#0284c7] mr-2">02.</strong> ASK STUPID QUESTIONS.</span>
              </li>

              <li className="flex items-start gap-4 border-b-2 border-[#ffedd5] pb-4">
                <div className="p-1.5 bg-[#bbf7d0] border-2 border-[#1c1917] rounded-lg text-[#16a34a] shrink-0 mt-0.5">
                  <LockOpen size={22} />
                </div>
                <span><strong className="font-label-caps text-sm md:text-base text-[#16a34a] mr-2">03.</strong> NO GATEKEEPING.</span>
              </li>

              <li className="flex items-start gap-4 border-b-2 border-[#ffedd5] pb-4">
                <div className="p-1.5 bg-[#fecdd3] border-2 border-[#1c1917] rounded-lg text-[#e11d48] shrink-0 mt-0.5">
                  <AlertTriangle size={22} />
                </div>
                <span><strong className="font-label-caps text-sm md:text-base text-[#e11d48] mr-2">04.</strong> BREAK THINGS.</span>
              </li>

              <li className="flex items-start gap-4 border-b-2 border-[#ffedd5] pb-4">
                <div className="p-1.5 bg-[#ddd6fe] border-2 border-[#1c1917] rounded-lg text-[#7c3aed] shrink-0 mt-0.5">
                  <Fingerprint size={22} />
                </div>
                <span><strong className="font-label-caps text-sm md:text-base text-[#7c3aed] mr-2">05.</strong> OWN YOUR WORK.</span>
              </li>

              <li className="flex items-start gap-4">
                <div className="p-1.5 bg-[#fef08a] border-2 border-[#1c1917] rounded-lg text-[#ca8a04] shrink-0 mt-0.5">
                  <Compass size={22} />
                </div>
                <span><strong className="font-label-caps text-sm md:text-base text-[#ca8a04] mr-2">06.</strong> SHIP.</span>
              </li>

            </ul>
          </div>
        </div>
      </section>

      {/* =========================================================================
          WHY NOT OPEN SOURCE? (VIBRANT PEACH/ROSE CARD)
          ========================================================================= */}
      <section className="mb-20 relative p-8 md:p-14 bg-[#fed7aa] border-3 border-[#1c1917] shadow-[10px_10px_0px_0px_rgba(28,25,23,1)] zine-rotation-1">
        
        {/* Top Tag Badge */}
        <div className="absolute -top-5 -left-4 bg-[#dc2626] text-[#ffffff] font-label-caps text-xs p-2.5 zine-rotation-3 border-2 border-[#1c1917] hard-shadow-xs font-black">
          FAQ / RANT
        </div>

        <h3 className="font-headline-lg text-3xl sm:text-4xl md:text-5xl text-[#1c1917] mb-6 max-w-2xl uppercase">
          WHY NOT OPEN SOURCE?
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="font-body-md text-base text-[#451a03] mb-4 leading-relaxed font-semibold">
              Because we want to own our experiments. Open source is beautiful, but sometimes you just want to build a sandcastle, defend it aggressively, and maybe kick it over yourself when you&apos;re done.
            </p>
            <p className="font-body-md text-base text-[#451a03] leading-relaxed font-semibold">
              It&apos;s about sovereignty over the weird things we make. It&apos;s about not having to explain our messy commits to anyone but ourselves.
            </p>
          </div>

          <div className="flex items-center justify-center p-6 sm:p-8 border-3 border-dashed border-[#1c1917] bg-[#ffffff] relative hard-shadow-sm">
            <div className="flex flex-col sm:flex-row items-center gap-3 text-center">
              <div className="font-headline-lg-mobile text-2xl md:text-3xl text-[#1c1917] font-black">BUILD</div>
              <ArrowRight size={22} className="text-[#ea580c] hidden sm:block" />
              <div className="font-headline-lg-mobile text-2xl md:text-3xl text-[#ffffff] bg-[#ea580c] px-3 py-1 border-2 border-[#1c1917] font-black shadow-xs">
                OWN
              </div>
              <ArrowRight size={22} className="text-[#ea580c] hidden sm:block" />
              <div className="font-headline-lg-mobile text-2xl md:text-3xl text-[#1c1917] font-black">SHIP</div>
            </div>

            <div className="absolute bottom-2 right-2 bg-[#fef08a] border border-[#1c1917] px-2.5 py-1 font-annotation text-xs zine-rotation-2 shadow-xs text-[#854d0e] font-black">
              *mostly ship
            </div>
          </div>
        </div>

      </section>

    </div>
  );
}
