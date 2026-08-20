'use client';

import { motion } from 'framer-motion';
import { Lightbulb, Hammer, Bug, Rocket, FolderOpen, ArrowRight, ArrowDown, ExternalLink, PlusSquare, Paperclip, Pin } from 'lucide-react';
import { useRetroAudio } from '@/lib/useRetroAudio';

const HERO_MEMBERS = [
  { id: '1', name: 'Parul', tilt: '-rotate-2', image: '/assets/hero_portrait_1.png', tagBg: 'bg-[#fef08a] text-[#854d0e] border-[#ca8a04]' },
  { id: '2', name: 'Kritika', tilt: 'rotate-3', image: '/assets/hero_portrait_2.png', tagBg: 'bg-[#bae6fd] text-[#0369a1] border-[#0284c7]' },
  { id: '3', name: 'Prachi', tilt: '-rotate-1', image: '/assets/hero_portrait_3.png', tagBg: 'bg-[#bbf7d0] text-[#15803d] border-[#16a34a]' },
  { id: '4', name: 'Anu', tilt: 'rotate-2', image: '/assets/hero_portrait_4.png', tagBg: 'bg-[#fed7aa] text-[#9a3412] border-[#ea580c]' },
  { id: '5', name: 'Nidhi', tilt: '-rotate-3', image: '/assets/hero_portrait_5.png', tagBg: 'bg-[#fecdd3] text-[#be123c] border-[#e11d48]' },
  { id: '6', name: 'Madhuri', tilt: 'rotate-1', image: '/assets/hero_portrait_6.png', tagBg: 'bg-[#ddd6fe] text-[#6d28d9] border-[#7c3aed]' },
  { id: '7', name: 'Nikita', tilt: '-rotate-2', image: '/assets/hero_portrait_7.png', tagBg: 'bg-[#fed7e2] text-[#9d174d] border-[#db2777]' },
];

interface HeroSectionProps {
  onNavigate?: (sectionId: string) => void;
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  const loopMembers = [...HERO_MEMBERS, ...HERO_MEMBERS];
  const { playClick } = useRetroAudio();

  return (
    <div className="w-full flex flex-col selection:bg-[#ea580c] selection:text-[#ffffff]">
      
      {/* =========================================================================
          HERO LANDING FRAME (ORIGINAL SIZES & PROPORTIONS WITHIN SINGLE VIEW)
          ========================================================================= */}
      <section className="relative w-full h-[calc(100vh-3.5rem)] sm:h-[calc(100vh-4rem)] min-h-[620px] max-h-[100vh] bg-gradient-to-b from-[#fed7aa] via-[#fecdd3] to-[#ffedd5] bg-noise flex flex-col justify-between pt-3 sm:pt-4 pb-2 sm:pb-3 overflow-hidden select-none border-b-3 border-[#1c1917]">
        
        {/* Zine Note Left: "led by her, built for all." (Full Size Sticky) */}
        <motion.div
          initial={{ opacity: 0, x: -20, rotate: -5 }}
          animate={{ opacity: 1, x: 0, rotate: -4 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden md:block absolute left-6 lg:left-14 top-8 lg:top-12 z-20 group"
        >
          <div className="relative bg-[#fef08a] border-2 border-[#1c1917] hard-shadow-sm p-3.5 sm:p-4 max-w-[225px] transition-transform duration-200 hover:rotate-0">
            <div className="absolute -top-3 -left-3 text-[#1c1917] bg-[#ffffff] rounded-full p-0.5 border border-[#1c1917] shadow-xs">
              <Pin size={18} className="text-[#dc2626] fill-[#dc2626]" />
            </div>
            <p className="font-annotation text-lg sm:text-xl lg:text-2xl text-[#b45309] font-black leading-tight pt-0.5">
              led by her, built for all.
            </p>
          </div>
        </motion.div>

        {/* Zine Badge Right: "software & hardware from 0 to 1 ➔" (Full Size Card) */}
        <motion.div
          initial={{ opacity: 0, x: 20, rotate: 5 }}
          animate={{ opacity: 1, x: 0, rotate: 4 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="hidden md:block absolute right-6 lg:right-14 top-8 lg:top-12 z-20 group"
        >
          <div className="relative bg-[#ffffff] border-2 border-[#1c1917] hard-shadow-sm p-3.5 sm:p-4 max-w-[235px] text-left transition-transform duration-200 hover:rotate-0">
            <div className="absolute -top-3 right-4 w-12 h-3.5 bg-[#f97316] opacity-30 rotate-[-4deg] pointer-events-none"></div>
            <p className="font-annotation text-base sm:text-lg text-[#1c1917] font-black leading-snug">
              software &amp; hardware from <span className="text-[#ea580c] underline decoration-wavy decoration-[#f97316]">0 to 1 ➔</span>
            </p>
          </div>
        </motion.div>

        {/* Center Main "byHER" Display Title & Subtitle */}
        <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex-1 flex flex-col items-center justify-center my-auto py-1">
          
          <div className="relative flex flex-col items-center">
            {/* Layered Giant Title: "byHER" (Original High Impact Size) */}
            <motion.h1 
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="font-condensed font-normal text-[85px] sm:text-[135px] md:text-[16vw] lg:text-[195px] xl:text-[215px] leading-[0.82] tracking-tight text-[#1c1917] select-none text-center drop-shadow-[0_8px_24px_rgba(234,88,12,0.3)]"
            >
              byHER
            </motion.h1>

            {/* Subtle Overlay Outline */}
            <h1 
              aria-hidden="true"
              className="font-condensed font-normal text-[85px] sm:text-[135px] md:text-[16vw] lg:text-[195px] xl:text-[215px] leading-[0.82] tracking-tight text-transparent select-none text-center absolute inset-0 pointer-events-none"
              style={{
                WebkitTextStroke: '2px rgba(255, 255, 255, 0.8)',
              }}
            >
              byHER
            </h1>

            {/* "@ DEAD CODERS SOCIETY INITIATIVE" Small Under byHER Title */}
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-1 bg-[#ffedd5] border-2 border-[#1c1917] px-3.5 py-1 hard-shadow-xs transform -rotate-1 hover:rotate-0 transition-transform select-none"
            >
              <span className="font-annotation text-xs sm:text-sm uppercase tracking-wider text-[#046e41] font-black">
                @ DEAD CODERS SOCIETY INITIATIVE
              </span>
            </motion.div>
          </div>

          {/* Subtitle Mission Description */}
          <div className="max-w-2xl mx-auto text-center pt-3 pb-2 px-4 z-10">
            {/* Mobile Tagline Badge */}
            <div className="inline-block bg-[#fef08a] border-2 border-[#1c1917] hard-shadow-xs px-4 py-1.5 mb-2.5 md:hidden">
              <p className="font-annotation text-sm text-[#b45309] font-black">
                led by her, built for all.
              </p>
            </div>
            
            <p className="font-label-caps text-xs sm:text-sm text-[#431407] uppercase tracking-[0.12em] sm:tracking-[0.16em] leading-relaxed max-w-xl mx-auto font-black">
              AN ORGANIZATION FOR WOMEN BUILDING SOFTWARE AND HARDWARE PRODUCTS FROM ZERO TO ONE WHILE LEARNING SKILLS AND NETWORKING.
            </p>

            {/* CTAs */}
            <div className="mt-3.5 flex items-center justify-center gap-3">
              <button
                onClick={() => {
                  playClick();
                  onNavigate?.('projects');
                }}
                className="px-5 py-2.5 sm:px-6 sm:py-3 bg-[#ea580c] hover:bg-[#c2410c] text-[#ffffff] font-label-caps text-xs uppercase border-2 border-[#1c1917] shadow-[3px_3px_0px_0px_#1c1917] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all cursor-pointer flex items-center gap-2 font-black"
              >
                <span>View Projects</span>
                <ArrowRight size={16} />
              </button>

              <button
                onClick={() => {
                  playClick();
                  onNavigate?.('join');
                }}
                className="px-5 py-2.5 sm:px-6 sm:py-3 bg-[#ffffff] hover:bg-[#fff7ed] text-[#1c1917] font-label-caps text-xs uppercase border-2 border-[#1c1917] shadow-[3px_3px_0px_0px_#1c1917] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all cursor-pointer font-black"
              >
                Join Collective
              </button>
            </div>
          </div>

        </div>

        {/* =======================================================================
            BOTTOM CUTOUT MEMBER CAROUSEL (ORIGINAL WIDTH & HEIGHT PRESERVED)
            ======================================================================= */}
        <div className="relative w-full overflow-hidden pt-1 pb-2 z-20 shrink-0">
          
          {/* Edge Blurs */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-[#ffedd5] to-transparent z-30" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-[#ffedd5] to-transparent z-30" />

          {/* Marquee Track */}
          <div className="animate-marquee flex items-end gap-5 sm:gap-9 px-4">
            {loopMembers.map((member, idx) => (
              <div
                key={`${member.id}-${idx}`}
                className={`group relative flex-shrink-0 flex flex-col items-center cursor-pointer transition-transform duration-300 transform hover:-translate-y-3 hover:scale-105 ${member.tilt}`}
                onClick={() => {
                  playClick();
                  onNavigate?.('community');
                }}
              >
                {/* Cutout Portrait with White Sticker Shadow / Outline */}
                <div className="relative w-[105px] sm:w-[145px] lg:w-[170px] h-[120px] sm:h-[165px] lg:h-[195px] flex items-end justify-center">
                  <img
                    src={member.image}
                    alt={`${member.name} - byHER Maker`}
                    className="w-full h-full object-contain object-bottom sticker-white-cutout select-none"
                    draggable={false}
                  />
                </div>

                {/* Scrapbook Tape Tag Label with Unique Colors */}
                <div className={`mt-1.5 border-2 border-[#1c1917] px-3.5 sm:px-4 py-0.5 hard-shadow-xs transform -rotate-1 group-hover:rotate-0 transition-transform ${member.tagBg}`}>
                  <span className="font-annotation text-xs sm:text-base lg:text-lg font-black whitespace-nowrap">
                    {member.name}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </section>

      {/* =========================================================================
          INTRO WORKFLOW PIPELINE: SO... WHAT IS byHER? (COLORFUL VIBRANT PIPELINE)
          ========================================================================= */}
      <section className="py-20 md:py-24 px-4 md:px-10 bg-[#fffaf5] dotted-bg border-b-3 border-[#1c1917] relative">
        <div className="max-w-[1280px] mx-auto grid grid-cols-12 gap-8 items-center">
          
          <div className="col-span-12 md:col-span-4 flex flex-col justify-start">
            <h2 className="font-headline-lg text-3xl sm:text-4xl md:text-5xl text-[#1c1917] uppercase mb-4 border-b-4 border-[#ea580c] pb-2 inline-block">
              SO... WHAT IS byHER?
            </h2>
            <p className="font-annotation text-base md:text-lg text-[#57534e] mt-2 leading-relaxed font-semibold">
              A maker collective that skips the networking panels and goes straight to the code and hardware benches.
            </p>
          </div>

          <div className="col-span-12 md:col-span-8 flex flex-col md:flex-row items-center justify-between gap-6 py-10 px-6 md:px-8 bg-[#ffffff] border-3 border-[#1c1917] hard-shadow tilt-right relative z-10">
            
            {/* Step 1: IDEA (Yellow Pop) */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 rounded-2xl bg-[#fef08a] border-2 border-[#1c1917] flex items-center justify-center text-[#854d0e] hard-shadow-xs">
                <Lightbulb size={32} />
              </div>
              <span className="font-annotation text-sm text-[#854d0e] font-black uppercase tracking-widest bg-[#fef08a] px-3 py-1 border-2 border-[#1c1917] hard-shadow-xs">
                IDEA
              </span>
            </div>

            <ArrowRight className="text-[#ea580c] hidden md:block" size={26} />
            <ArrowDown className="text-[#ea580c] md:hidden" size={26} />

            {/* Step 2: BUILD (Cyan Pop) */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 rounded-2xl bg-[#bae6fd] border-2 border-[#1c1917] flex items-center justify-center text-[#0369a1] hard-shadow-xs">
                <Hammer size={32} />
              </div>
              <span className="font-annotation text-sm text-[#0369a1] font-black uppercase tracking-widest bg-[#bae6fd] px-3 py-1 border-2 border-[#1c1917] hard-shadow-xs">
                BUILD
              </span>
            </div>

            <ArrowRight className="text-[#ea580c] hidden md:block" size={26} />
            <ArrowDown className="text-[#ea580c] md:hidden" size={26} />

            {/* Step 3: BREAK (Coral Red Pop) */}
            <div className="flex flex-col items-center gap-2 relative">
              <span className="absolute -top-3 -right-3 text-[#ffffff] bg-[#dc2626] border-2 border-[#1c1917] rounded-full px-2 py-0.5 text-xs font-black shadow-xs animate-bounce">
                FAIL!
              </span>
              <div className="w-16 h-16 rounded-2xl bg-[#fecdd3] border-2 border-[#1c1917] flex items-center justify-center text-[#be123c] hard-shadow-xs">
                <Bug size={32} />
              </div>
              <span className="font-annotation text-sm text-[#be123c] font-black uppercase tracking-widest bg-[#fecdd3] px-3 py-1 border-2 border-[#1c1917] hard-shadow-xs line-through decoration-[#dc2626] decoration-3">
                BREAK
              </span>
            </div>

            <ArrowRight className="text-[#ea580c] hidden md:block" size={26} />
            <ArrowDown className="text-[#ea580c] md:hidden" size={26} />

            {/* Step 4: SHIP (Electric Emerald Pop) */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 rounded-2xl bg-[#22c55e] border-2 border-[#1c1917] flex items-center justify-center text-[#ffffff] hard-shadow-xs">
                <Rocket size={32} />
              </div>
              <span className="font-annotation text-sm font-black uppercase tracking-widest bg-[#22c55e] text-[#ffffff] px-4 py-1 border-2 border-[#1c1917] hard-shadow-sm tilt-left">
                SHIP
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          PHILOSOPHY BANNER: LESS TALK. MORE BUILDING. (ELECTRIC TERRACOTTA / ORANGE)
          ========================================================================= */}
      <section className="py-24 md:py-32 px-4 md:px-10 bg-gradient-to-r from-[#ea580c] via-[#c2410c] to-[#b91c1c] border-b-3 border-[#1c1917] relative overflow-hidden text-center select-none">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1.75px,transparent_1.75px)] bg-[size:18px_18px]"></div>
        
        <div className="max-w-[1280px] mx-auto relative z-10">
          <h2 className="font-display-xl text-[56px] sm:text-[84px] md:text-[115px] lg:text-[140px] leading-none text-[#fed7aa] uppercase tracking-tighter opacity-95">
            LESS TALK.
          </h2>
          <h2 className="font-display-xl text-[72px] sm:text-[105px] md:text-[145px] lg:text-[180px] leading-none text-[#ffffff] uppercase tracking-tighter mt-2 md:mt-4 hard-shadow">
            MORE BUILDING.
          </h2>
        </div>
      </section>

      {/* =========================================================================
          THINGS WE'RE BUILDING (PROJECTS PREVIEW)
          ========================================================================= */}
      <section className="py-24 px-4 md:px-10 relative bg-[#fffaf5]">
        <div className="max-w-[1280px] mx-auto">
          
          <div className="flex items-center justify-between border-b-3 border-[#1c1917] pb-4 mb-16">
            <div className="flex items-center gap-3">
              <FolderOpen size={38} className="text-[#ea580c]" />
              <h2 className="font-headline-lg text-2xl sm:text-4xl text-[#1c1917] uppercase">
                THINGS WE&apos;RE BUILDING
              </h2>
            </div>

            <button
              onClick={() => {
                playClick();
                onNavigate?.('projects');
              }}
              className="hidden sm:flex items-center gap-1.5 font-label-caps text-xs uppercase text-[#ea580c] hover:underline cursor-pointer font-black"
            >
              <span>View All Wall</span>
              <ArrowRight size={14} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            
            {/* Project Card 1: Project Alpha (Cyan Tint) */}
            <div className="bg-[#f0f9ff] p-6 border-3 border-[#1c1917] hard-shadow tilt-left flex flex-col h-full relative group hover:-translate-y-2 transition-all">
              <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-[#38bdf8] opacity-50 rotate-3 pointer-events-none"></div>
              
              <div className="border-b-2 border-dashed border-[#0284c7] pb-4 mb-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-headline-lg-mobile text-2xl text-[#0369a1] uppercase font-black">
                    Project Alpha
                  </h3>
                  <span className="font-label-caps text-[10px] bg-[#0284c7] text-[#ffffff] px-2.5 py-0.5 border border-[#1c1917] font-black">
                    SHIPPED
                  </span>
                </div>
                <p className="font-annotation text-sm text-[#0369a1] mt-1 font-bold">Status: Shipped to production</p>
              </div>

              <div className="flex-grow">
                <div className="w-full h-44 bg-[#e0f2fe] mb-4 border-2 border-[#1c1917] relative overflow-hidden group-hover:border-[#0284c7] transition-colors">
                  <img 
                    src="/assets/stitch/project_alpha.png" 
                    alt="Project Alpha CRT Interface" 
                    className="w-full h-full object-cover grayscale mix-blend-multiply opacity-90 group-hover:grayscale-0 transition-all duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/assets/almosthack_graphic.png';
                    }}
                  />
                </div>
                <p className="text-[#334155] font-body-md text-sm leading-relaxed font-medium">
                  A decentralized platform for collective intelligence gathering. Built with modern stack, broken twice, shipped once.
                </p>
              </div>

              <div className="mt-6 flex justify-between items-center pt-4 border-t-2 border-[#1c1917]">
                <span className="font-label-caps text-[11px] bg-[#0284c7] text-[#ffffff] px-3 py-1 border border-[#1c1917] font-black">
                  WEB3
                </span>
                <button 
                  onClick={() => {
                    playClick();
                    onNavigate?.('projects');
                  }}
                  className="font-annotation text-sm text-[#0369a1] hover:italic flex items-center gap-1 font-black cursor-pointer"
                >
                  <span>View Details</span>
                  <ExternalLink size={14} />
                </button>
              </div>
            </div>

            {/* Project Card 2: Data Viz Tools (Amber Tint) */}
            <div className="bg-[#fffbeb] p-6 border-3 border-[#1c1917] hard-shadow tilt-right flex flex-col h-full relative group hover:-translate-y-2 transition-all md:mt-6">
              <div className="absolute -top-3 -right-2 text-[#b45309] rotate-45 pointer-events-none">
                <Paperclip size={28} />
              </div>

              <div className="border-b-2 border-dashed border-[#d97706] pb-4 mb-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-headline-lg-mobile text-2xl text-[#b45309] uppercase font-black">
                    Data Viz Tools
                  </h3>
                  <span className="font-label-caps text-[10px] bg-[#dc2626] text-[#ffffff] px-2.5 py-0.5 border border-[#1c1917] font-black">
                    BREAKING
                  </span>
                </div>
                <p className="font-annotation text-sm text-[#b45309] mt-1 font-bold">Status: Stress-testing limits</p>
              </div>

              <div className="flex-grow">
                <div className="w-full h-44 bg-[#fef3c7] mb-4 border-2 border-[#1c1917] relative overflow-hidden group-hover:border-[#d97706] transition-colors">
                  <img 
                    src="/assets/stitch/project_dataviz.png" 
                    alt="Data Viz Graphic Experiments" 
                    className="w-full h-full object-cover grayscale mix-blend-multiply opacity-90 group-hover:grayscale-0 transition-all duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/assets/whiteboard_designer_lab.png';
                    }}
                  />
                </div>
                <p className="text-[#451a03] font-body-md text-sm leading-relaxed font-medium">
                  Making complex data accessible without dumbing it down. Heavy focus on performance and raw analog aesthetic.
                </p>
              </div>

              <div className="mt-6 flex justify-between items-center pt-4 border-t-2 border-[#1c1917]">
                <span className="font-label-caps text-[11px] bg-[#d97706] text-[#ffffff] px-3 py-1 border border-[#1c1917] font-black">
                  DATA
                </span>
                <button 
                  onClick={() => {
                    playClick();
                    onNavigate?.('projects');
                  }}
                  className="font-annotation text-sm text-[#b45309] hover:italic flex items-center gap-1 font-black cursor-pointer"
                >
                  <span>View Details</span>
                  <ExternalLink size={14} />
                </button>
              </div>
            </div>

            {/* Project Card 3: Got an Idea? Submit PR (Rose Pop) */}
            <div className="bg-[#fff1f2] p-8 border-3 border-[#1c1917] border-dashed flex flex-col h-full relative justify-center items-center text-center tilt-left hover:bg-[#ffe4e6] transition-colors">
              <PlusSquare size={54} className="text-[#e11d48] mb-4" />
              <h3 className="font-headline-lg text-3xl text-[#1c1917] uppercase mb-2">
                Got an Idea?
              </h3>
              <p className="font-annotation text-base text-[#881337] mb-6 max-w-xs font-bold">
                Stop talking about it in meetings. Start building and breaking it with us.
              </p>
              <button 
                onClick={() => {
                  playClick();
                  onNavigate?.('join');
                }}
                className="font-label-caps text-xs uppercase bg-[#e11d48] hover:bg-[#be123c] text-[#ffffff] px-6 py-3.5 hard-shadow-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all cursor-pointer font-black border-2 border-[#1c1917]"
              >
                Submit Application / PR
              </button>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
