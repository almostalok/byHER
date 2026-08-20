'use client';

import { Pin, ArrowRight, RefreshCw, Construction, HelpCircle, LockOpen, AlertTriangle, Fingerprint, Compass, Info, Flame } from 'lucide-react';
import { useRetroAudio } from '@/lib/useRetroAudio';

interface AboutSectionProps {
  onNavigate?: (sectionId: string) => void;
}

export default function AboutSection({ onNavigate }: AboutSectionProps) {
  const { playClick } = useRetroAudio();

  return (
    <div className="w-full flex-grow p-4 md:p-10 max-w-[1400px] mx-auto relative select-none">
      
      {/* =========================================================================
          HEADER SECTION: SO, THIS IS US.
          ========================================================================= */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20 md:mb-28 relative mt-6 md:mt-10">
        <div className="md:col-span-9 md:col-start-1 lg:col-span-8 lg:col-start-2 relative z-10">
          
          <h2 className="font-display-xl text-5xl sm:text-7xl md:text-[100px] lg:text-[120px] leading-[0.9] text-[#241918] zine-rotation-1 mb-6 relative">
            SO, THIS<br />
            <span className="text-[#9e4037] ml-6 md:ml-12">IS US.</span>

            {/* Handwritten Floating Note */}
            <div className="absolute -top-10 sm:-top-12 right-0 md:-right-8 handwritten-note p-3 md:p-4 zine-rotation-2 font-annotation text-xs sm:text-sm max-w-[200px] shadow-md border border-[#241918]/20">
              *A DEAD CODE SOCIETY initiative.
            </div>
          </h2>

          <div className="paper-card p-6 md:p-8 zine-rotation-3 relative bg-[#FFF9F2] border-2 border-[#8f4a48] hard-shadow">
            <div className="absolute top-4 right-4 text-[#89726f]">
              <Pin size={20} className="text-[#9e4037]" />
            </div>
            <p className="font-body-md text-base md:text-lg text-[#241918] max-w-2xl leading-relaxed">
              We are a collective operating under the <strong className="font-bold text-[#9e4037]">DEAD CODE SOCIETY</strong>. We build tools, we break systems, and we document the wreckage. This isn&apos;t just about code; it&apos;s about claiming space and owning the technical infrastructure.
            </p>
          </div>
        </div>

        {/* Vertical Decorative Tag */}
        <div className="hidden lg:block lg:col-span-2 relative">
          <div className="vertical-text font-label-caps text-xs text-[#8f4a48] tracking-widest absolute right-0 top-0 h-full flex items-center opacity-80">
            EST. 2024 // ANALOG TECH // RAW DATA // ZERO TO ONE
          </div>
        </div>
      </section>

      {/* =========================================================================
          THE LOOP: VISUAL TIMELINE
          ========================================================================= */}
      <section className="mb-24 md:mb-32 relative">
        <div className="flex items-center gap-3 mb-10 border-b-4 border-[#241918] pb-3 w-max">
          <Flame size={32} className="text-[#9e4037]" />
          <h3 className="font-headline-lg text-3xl sm:text-4xl text-[#241918] uppercase">
            The Loop
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 relative">
          {/* Timeline connecting line behind boxes */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-[#8f4a48] -z-10 transform -translate-y-1/2 opacity-60"></div>

          {/* Step 01: MEET */}
          <div className="paper-card-alt p-5 flex flex-col items-center justify-center aspect-square zine-rotation-2 hover:zine-rotation-1 transition-transform relative bg-[#fae3e2] border-2 border-[#9e4037] hard-shadow-sm">
            <span className="font-label-caps text-xs text-[#8f4a48] mb-1 font-black">01</span>
            <span className="font-headline-lg-mobile text-2xl sm:text-3xl text-[#241918]">MEET</span>
          </div>

          {/* Step 02: LEARN */}
          <div className="paper-card p-5 flex flex-col items-center justify-center aspect-square zine-rotation-3 hover:zine-rotation-2 transition-transform relative bg-[#e7e2db] border-2 border-[#8f4a48] hard-shadow-sm lg:mt-6">
            <span className="font-label-caps text-xs text-[#8f4a48] mb-1 font-black">02</span>
            <span className="font-headline-lg-mobile text-2xl sm:text-3xl text-[#241918]">LEARN</span>
          </div>

          {/* Step 03: BUILD */}
          <div className="paper-card-alt p-5 flex flex-col items-center justify-center aspect-square zine-rotation-1 hover:zine-rotation-3 transition-transform relative bg-[#ffdad5] border-2 border-[#9e4037] hard-shadow-sm">
            <span className="font-label-caps text-xs text-[#8f4a48] mb-1 font-black">03</span>
            <span className="font-headline-lg-mobile text-2xl sm:text-3xl text-[#241918]">BUILD</span>
          </div>

          {/* Step 04: BREAK */}
          <div className="paper-card p-5 flex flex-col items-center justify-center aspect-square zine-rotation-2 hover:zine-rotation-1 transition-transform relative bg-[#f4dddd] border-2 border-[#8f4a48] hard-shadow-sm lg:mt-8">
            <span className="font-label-caps text-xs text-[#8f4a48] mb-1 font-black">04</span>
            <span className="font-headline-lg-mobile text-2xl sm:text-3xl text-[#241918] line-through decoration-[#ba1a1a] decoration-4">
              BREAK
            </span>
          </div>

          {/* Step 05: SHIP */}
          <div className="paper-card-alt p-5 flex flex-col items-center justify-center aspect-square zine-rotation-3 hover:zine-rotation-2 transition-transform relative bg-[#ea9692] border-2 border-[#9e4037] hard-shadow-sm lg:mt-4">
            <span className="font-label-caps text-xs text-[#ffffff] mb-1 font-black">05</span>
            <span className="font-headline-lg-mobile text-2xl sm:text-3xl text-[#6a2d2c] font-black">
              SHIP
            </span>
          </div>

          {/* Step 06: REPEAT */}
          <div className="paper-card p-5 flex flex-col items-center justify-center aspect-square zine-rotation-1 hover:zine-rotation-3 transition-transform relative bg-[#3b2d2d] border-2 border-[#241918] hard-shadow-sm text-[#ffedec]">
            <span className="font-label-caps text-xs text-[#ffb4aa] mb-1 font-black">06</span>
            <span className="font-headline-lg-mobile text-2xl sm:text-3xl text-[#ffedec]">REPEAT</span>
            <RefreshCw size={16} className="absolute bottom-2 right-2 text-[#ffb4aa] opacity-60" />
          </div>

        </div>
      </section>

      {/* =========================================================================
          PRINCIPLES MANIFESTO
          ========================================================================= */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-24 md:mb-32 relative">
        <div className="md:col-span-4 flex flex-col justify-end pb-4">
          <h3 className="font-display-xl text-6xl sm:text-7xl md:text-[84px] leading-none text-[#8f4a48] break-words">
            PRIN<br />CIPLES
          </h3>
        </div>

        <div className="md:col-span-8">
          <div className="paper-card p-6 md:p-10 border-4 border-[#241918] bg-[#FFF9F2] hard-shadow">
            <ul className="space-y-6 font-annotation text-lg sm:text-xl md:text-2xl text-[#241918]">
              
              <li className="flex items-start gap-4 border-b-2 border-[#dcc0bc] pb-4">
                <Construction className="text-[#9e4037] shrink-0 mt-1" size={24} />
                <span><strong className="font-label-caps text-sm md:text-base text-[#9e4037] mr-2">01.</strong> BUILD FIRST.</span>
              </li>

              <li className="flex items-start gap-4 border-b-2 border-[#dcc0bc] pb-4">
                <HelpCircle className="text-[#9e4037] shrink-0 mt-1" size={24} />
                <span><strong className="font-label-caps text-sm md:text-base text-[#9e4037] mr-2">02.</strong> ASK STUPID QUESTIONS.</span>
              </li>

              <li className="flex items-start gap-4 border-b-2 border-[#dcc0bc] pb-4">
                <LockOpen className="text-[#9e4037] shrink-0 mt-1" size={24} />
                <span><strong className="font-label-caps text-sm md:text-base text-[#9e4037] mr-2">03.</strong> NO GATEKEEPING.</span>
              </li>

              <li className="flex items-start gap-4 border-b-2 border-[#dcc0bc] pb-4">
                <AlertTriangle className="text-[#9e4037] shrink-0 mt-1" size={24} />
                <span><strong className="font-label-caps text-sm md:text-base text-[#9e4037] mr-2">04.</strong> BREAK THINGS.</span>
              </li>

              <li className="flex items-start gap-4 border-b-2 border-[#dcc0bc] pb-4">
                <Fingerprint className="text-[#9e4037] shrink-0 mt-1" size={24} />
                <span><strong className="font-label-caps text-sm md:text-base text-[#9e4037] mr-2">05.</strong> OWN YOUR WORK.</span>
              </li>

              <li className="flex items-start gap-4">
                <Compass className="text-[#9e4037] shrink-0 mt-1" size={24} />
                <span><strong className="font-label-caps text-sm md:text-base text-[#9e4037] mr-2">06.</strong> SHIP.</span>
              </li>

            </ul>
          </div>
        </div>
      </section>

      {/* =========================================================================
          WHY NOT OPEN SOURCE? (FAQ / RANT)
          ========================================================================= */}
      <section className="mb-20 relative p-8 md:p-14 bg-[#fae3e2] border-2 border-[#241918] shadow-[10px_10px_0px_0px_rgba(36,25,24,1)] zine-rotation-1">
        
        {/* Top Tag Badge */}
        <div className="absolute -top-5 -left-4 bg-[#ba1a1a] text-[#ffffff] font-label-caps text-xs p-2 zine-rotation-3 border-2 border-[#241918] hard-shadow-xs">
          FAQ / RANT
        </div>

        <h3 className="font-headline-lg text-3xl sm:text-4xl md:text-5xl text-[#241918] mb-6 max-w-2xl uppercase">
          WHY NOT OPEN SOURCE?
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="font-body-md text-base text-[#56423f] mb-4 leading-relaxed">
              Because we want to own our experiments. Open source is beautiful, but sometimes you just want to build a sandcastle, defend it aggressively, and maybe kick it over yourself when you&apos;re done.
            </p>
            <p className="font-body-md text-base text-[#56423f] leading-relaxed">
              It&apos;s about sovereignty over the weird things we make. It&apos;s about not having to explain our messy commits to anyone but ourselves.
            </p>
          </div>

          <div className="flex items-center justify-center p-6 sm:p-8 border-4 border-dashed border-[#8f4a48] bg-[#ffe9e8] relative">
            <div className="flex flex-col sm:flex-row items-center gap-3 text-center">
              <div className="font-headline-lg-mobile text-2xl md:text-3xl text-[#241918]">BUILD</div>
              <ArrowRight size={20} className="text-[#9e4037] hidden sm:block" />
              <div className="font-headline-lg-mobile text-2xl md:text-3xl text-[#241918] bg-[#e7e2db] px-2.5 py-0.5 underline decoration-wavy decoration-[#8f4a48]">
                OWN
              </div>
              <ArrowRight size={20} className="text-[#9e4037] hidden sm:block" />
              <div className="font-headline-lg-mobile text-2xl md:text-3xl text-[#241918]">SHIP</div>
            </div>

            <div className="absolute bottom-2 right-2 handwritten-note px-2 py-1 font-annotation text-xs zine-rotation-2 shadow-xs">
              *mostly ship
            </div>
          </div>
        </div>

      </section>

    </div>
  );
}
