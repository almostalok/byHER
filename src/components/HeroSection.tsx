'use client';

import { motion } from 'framer-motion';
import { Lightbulb, Hammer, Bug, Rocket, FolderOpen, ArrowRight, ArrowDown, ExternalLink, PlusSquare, Paperclip, Pin } from 'lucide-react';
import { useRetroAudio } from '@/lib/useRetroAudio';
import confetti from 'canvas-confetti';

const HERO_MEMBERS = [
  { id: '1', name: 'Parul', tilt: '-rotate-2', image: '/assets/hero_portrait_1.png' },
  { id: '2', name: 'Kritika', tilt: 'rotate-3', image: '/assets/hero_portrait_2.png' },
  { id: '3', name: 'Prachi', tilt: '-rotate-1', image: '/assets/hero_portrait_3.png' },
  { id: '4', name: 'Anu', tilt: 'rotate-2', image: '/assets/hero_portrait_4.png' },
  { id: '5', name: 'Nidhi', tilt: '-rotate-3', image: '/assets/hero_portrait_5.png' },
  { id: '6', name: 'Madhuri', tilt: 'rotate-1', image: '/assets/hero_portrait_6.png' },
  { id: '7', name: 'Nikita', tilt: '-rotate-2', image: '/assets/hero_portrait_7.png' },
];

interface HeroSectionProps {
  onNavigate?: (sectionId: string) => void;
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  const loopMembers = [...HERO_MEMBERS, ...HERO_MEMBERS];
  const { playClick, playQuack } = useRetroAudio();

  const handleDuckClick = () => {
    playQuack();
    confetti({
      particleCount: 30,
      spread: 60,
      origin: { x: 0.15, y: 0.25 },
      colors: ['#9e4037', '#8f4a48', '#ff8b7d', '#ebdcc4'],
    });
  };

  return (
    <div className="w-full flex flex-col selection:bg-[#9e4037] selection:text-[#ffffff]">
      
      {/* =========================================================================
          HERO LANDING FRAME (MUTED DUSTY ROSE/CREAM PALETTE, ZINE STICKERS & CAROUSEL)
          ========================================================================= */}
      <section className="relative w-full min-h-[90vh] md:min-h-screen bg-[#ebd8d4] bg-noise flex flex-col justify-between pt-16 sm:pt-20 pb-4 overflow-hidden select-none border-b-2 border-[#241918]">
        
        {/* Floating Pink Rubber Duck Mascot with Interactive Quack Note */}
        <motion.div 
          onClick={handleDuckClick}
          initial={{ y: 0, rotate: -5 }}
          animate={{ y: [-6, 6, -6], rotate: [-6, 4, -6] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-3 sm:left-8 lg:left-12 top-20 sm:top-24 z-30 w-14 h-14 sm:w-20 sm:h-20 lg:w-22 lg:h-22 pointer-events-auto cursor-pointer drop-shadow-lg group"
          title="Click the duck for retro quack!"
        >
          <img 
            src="/assets/mascot_duck.png" 
            alt="Mascot Rubber Duck" 
            className="w-full h-full object-contain transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300"
          />
          {/* Micro Quack Bubble */}
          <div className="absolute -top-3 -right-4 sm:-right-6 bg-[#FEF3C7] border-2 border-[#241918] rounded-md px-2 py-0.5 shadow-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            <span className="font-annotation text-[10px] sm:text-xs text-[#9e4037] font-bold whitespace-nowrap">quack! ⚡</span>
          </div>
        </motion.div>

        {/* Zine Note Left: "led by her, built for all." (Matching full website design) */}
        <motion.div
          initial={{ opacity: 0, x: -20, rotate: -4 }}
          animate={{ opacity: 1, x: 0, rotate: -3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden md:block absolute left-8 lg:left-14 top-40 z-20 group"
        >
          <div className="relative bg-[#FEF3C7] border-2 border-[#241918] hard-shadow-sm p-3.5 sm:p-4 max-w-[220px] transition-transform duration-200 hover:rotate-0">
            <div className="absolute -top-3 -left-3 text-[#615e59] bg-[#ffffff] rounded-full p-0.5 border border-[#241918] shadow-xs">
              <Pin size={16} className="text-[#9e4037] fill-[#9e4037]" />
            </div>
            <p className="font-annotation text-lg sm:text-xl text-[#9e4037] font-bold leading-tight pt-0.5">
              led by her, built for all.
            </p>
          </div>
        </motion.div>

        {/* Zine Badge Right: "software & hardware from 0 to 1 ➔" (Matching full website design) */}
        <motion.div
          initial={{ opacity: 0, x: 20, rotate: 4 }}
          animate={{ opacity: 1, x: 0, rotate: 3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="hidden md:block absolute right-8 lg:right-14 top-40 z-20 group"
        >
          <div className="relative bg-[#FFF9F2] border-2 border-[#8f4a48] hard-shadow-sm p-3.5 sm:p-4 max-w-[230px] text-left transition-transform duration-200 hover:rotate-0">
            <div className="absolute -top-3 right-4 w-12 h-3.5 bg-[#241918] opacity-15 rotate-[-3deg] pointer-events-none"></div>
            <p className="font-annotation text-base sm:text-lg text-[#241918] font-bold leading-snug">
              software &amp; hardware from <span className="text-[#9e4037]">0 to 1 ➔</span>
            </p>
          </div>
        </motion.div>

        {/* Floating Cream byHER Logo Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, y: [-4, 4, -4], rotate: [4, -4, 4] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
          className="hidden lg:block absolute right-16 top-20 z-10 w-16 h-16 opacity-80 pointer-events-none drop-shadow-xs"
        >
          <img 
            src="/assets/byher_logo_chocolate.png" 
            alt="byHER Logo Mark" 
            className="w-full h-full object-contain"
          />
        </motion.div>

        {/* Center Main "byHER" Giant Display Title */}
        <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex-1 flex flex-col items-center justify-center my-auto py-4">
          
          <div className="relative">
            {/* Layered Giant Title with Bebas Neue Condensed Lettering */}
            <motion.h1 
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="font-condensed font-normal text-[85px] sm:text-[130px] md:text-[17vw] lg:text-[210px] leading-[0.88] tracking-tight text-[#fff8f7] select-none text-center uppercase drop-shadow-[0_4px_12px_rgba(36,25,24,0.15)]"
            >
              byHER
            </motion.h1>

            {/* Subtle Overlay Outline for Extra Punch */}
            <h1 
              aria-hidden="true"
              className="font-condensed font-normal text-[85px] sm:text-[130px] md:text-[17vw] lg:text-[210px] leading-[0.88] tracking-tight text-transparent select-none text-center uppercase absolute inset-0 pointer-events-none"
              style={{
                WebkitTextStroke: '2px rgba(158, 64, 55, 0.4)',
              }}
            >
              byHER
            </h1>
          </div>

          {/* Subtitle Mission Description with Stitch typography */}
          <div className="max-w-2xl mx-auto text-center pt-1 pb-3 px-4 z-10">
            {/* Mobile Tagline Badge */}
            <div className="inline-block bg-[#FEF3C7] border-2 border-[#241918] hard-shadow-xs px-3.5 py-1 mb-2.5 md:hidden">
              <p className="font-annotation text-sm text-[#9e4037] font-bold">
                led by her, built for all.
              </p>
            </div>
            
            <p className="font-label-caps text-xs sm:text-sm text-[#241918] uppercase tracking-[0.12em] sm:tracking-[0.16em] leading-relaxed max-w-xl mx-auto font-bold opacity-90">
              AN ORGANIZATION FOR WOMEN BUILDING SOFTWARE AND HARDWARE PRODUCTS FROM ZERO TO ONE WHILE LEARNING SKILLS AND NETWORKING.
            </p>

            {/* CTAs */}
            <div className="mt-4 flex items-center justify-center gap-3">
              <button
                onClick={() => {
                  playClick();
                  onNavigate?.('projects');
                }}
                className="px-5 py-2.5 bg-[#9e4037] text-[#ffffff] font-label-caps text-xs uppercase border-2 border-[#241918] hard-shadow-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all cursor-pointer flex items-center gap-2"
              >
                <span>View Projects</span>
                <ArrowRight size={14} />
              </button>

              <button
                onClick={() => {
                  playClick();
                  onNavigate?.('join');
                }}
                className="px-5 py-2.5 bg-[#FFF9F2] text-[#241918] font-label-caps text-xs uppercase border-2 border-[#8f4a48] hard-shadow-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all cursor-pointer"
              >
                Join Collective
              </button>
            </div>
          </div>

        </div>

        {/* =======================================================================
            BOTTOM CUTOUT MEMBER CAROUSEL (WHITE STICKER OUTLINE & TAPE TAGS)
            ======================================================================= */}
        <div className="relative w-full overflow-hidden pt-2 pb-1 z-20">
          
          {/* Edge Blurs */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-[#ebd8d4] to-transparent z-30" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-[#ebd8d4] to-transparent z-30" />

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
                <div className="relative w-[105px] sm:w-[150px] lg:w-[175px] h-[125px] sm:h-[175px] lg:h-[205px] flex items-end justify-center">
                  <img
                    src={member.image}
                    alt={`${member.name} - byHER Maker`}
                    className="w-full h-full object-contain object-bottom sticker-white-cutout select-none"
                    draggable={false}
                  />
                </div>

                {/* Scrapbook Tape Tag Label */}
                <div className="mt-1 bg-[#FFF9F2] border-2 border-[#8f4a48] px-3 sm:px-4 py-0.5 hard-shadow-xs transform -rotate-1 group-hover:rotate-0 transition-transform">
                  <span className="font-annotation text-xs sm:text-sm lg:text-base text-[#9e4037] font-bold whitespace-nowrap">
                    {member.name}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </section>

      {/* =========================================================================
          INTRO WORKFLOW PIPELINE: SO... WHAT IS byHER? (STITCH)
          ========================================================================= */}
      <section className="py-20 md:py-24 px-4 md:px-10 bg-[#fff0ef] dotted-bg border-b-2 border-[#241918] relative">
        <div className="max-w-[1280px] mx-auto grid grid-cols-12 gap-8 items-center">
          
          <div className="col-span-12 md:col-span-4 flex flex-col justify-start">
            <h2 className="font-headline-lg text-3xl sm:text-4xl md:text-5xl text-[#241918] uppercase mb-4 border-b-4 border-[#9e4037] pb-2 inline-block">
              SO... WHAT IS byHER?
            </h2>
            <p className="font-annotation text-base md:text-lg text-[#56423f] mt-2 leading-relaxed">
              A maker collective that skips the networking panels and goes straight to the code and hardware benches.
            </p>
          </div>

          <div className="col-span-12 md:col-span-8 flex flex-col md:flex-row items-center justify-between gap-6 py-10 px-6 md:px-8 bg-[#FFF9F2] border-2 border-[#8f4a48] hard-shadow tilt-right relative z-10">
            
            {/* Step 1: IDEA */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 rounded-full bg-[#ffe9e8] border border-[#89726f] flex items-center justify-center text-[#9e4037]">
                <Lightbulb size={28} />
              </div>
              <span className="font-annotation text-sm text-[#241918] font-bold uppercase tracking-widest bg-[#ffe9e8] px-3 py-1 border border-[#89726f]">
                IDEA
              </span>
            </div>

            <ArrowRight className="text-[#615e59] hidden md:block" size={24} />
            <ArrowDown className="text-[#615e59] md:hidden" size={24} />

            {/* Step 2: BUILD */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 rounded-full bg-[#ffe9e8] border border-[#89726f] flex items-center justify-center text-[#9e4037]">
                <Hammer size={28} />
              </div>
              <span className="font-annotation text-sm text-[#241918] font-bold uppercase tracking-widest bg-[#ffe9e8] px-3 py-1 border border-[#89726f]">
                BUILD
              </span>
            </div>

            <ArrowRight className="text-[#615e59] hidden md:block" size={24} />
            <ArrowDown className="text-[#615e59] md:hidden" size={24} />

            {/* Step 3: BREAK */}
            <div className="flex flex-col items-center gap-2 relative">
              <span className="absolute -top-3 -right-3 text-[#ba1a1a] animate-bounce bg-[#FEF3C7] border border-[#241918] rounded-full p-0.5 text-xs font-bold px-1.5 shadow-xs">
                FAIL!
              </span>
              <div className="w-14 h-14 rounded-full bg-[#fae3e2] border border-[#89726f] flex items-center justify-center text-[#9e4037]">
                <Bug size={28} />
              </div>
              <span className="font-annotation text-sm text-[#241918] font-bold uppercase tracking-widest bg-[#ffe9e8] px-3 py-1 border border-[#89726f] line-through decoration-[#ba1a1a] decoration-2">
                BREAK
              </span>
            </div>

            <ArrowRight className="text-[#615e59] hidden md:block" size={24} />
            <ArrowDown className="text-[#615e59] md:hidden" size={24} />

            {/* Step 4: SHIP */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 rounded-full bg-[#9e4037] border-2 border-[#241918] flex items-center justify-center text-[#ffffff] hard-shadow-xs">
                <Rocket size={28} />
              </div>
              <span className="font-annotation text-sm font-bold uppercase tracking-widest bg-[#9e4037] text-[#ffffff] px-4 py-1.5 border-2 border-[#241918] hard-shadow-sm tilt-left">
                SHIP
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          PHILOSOPHY BANNER: LESS TALK. MORE BUILDING. (STITCH)
          ========================================================================= */}
      <section className="py-24 md:py-32 px-4 md:px-10 bg-[#9e4037] relative overflow-hidden text-center select-none">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1.5px,transparent_1.5px)] bg-[size:16px_16px]"></div>
        
        <div className="max-w-[1280px] mx-auto relative z-10">
          <h2 className="font-display-xl text-[54px] sm:text-[80px] md:text-[110px] lg:text-[130px] leading-none text-[#ffffff] uppercase tracking-tighter opacity-90">
            LESS TALK.
          </h2>
          <h2 className="font-display-xl text-[68px] sm:text-[100px] md:text-[140px] lg:text-[170px] leading-none text-[#ffffff] uppercase tracking-tighter mt-2 md:mt-4 hard-shadow">
            MORE BUILDING.
          </h2>
        </div>
      </section>

      {/* =========================================================================
          THINGS WE'RE BUILDING (PROJECTS PREVIEW)
          ========================================================================= */}
      <section className="py-24 px-4 md:px-10 relative bg-[#fff8f7]">
        <div className="max-w-[1280px] mx-auto">
          
          <div className="flex items-center justify-between border-b-2 border-[#241918] pb-4 mb-16">
            <div className="flex items-center gap-3">
              <FolderOpen size={36} className="text-[#9e4037]" />
              <h2 className="font-headline-lg text-2xl sm:text-4xl text-[#241918] uppercase">
                THINGS WE&apos;RE BUILDING
              </h2>
            </div>

            <button
              onClick={() => {
                playClick();
                onNavigate?.('projects');
              }}
              className="hidden sm:flex items-center gap-1.5 font-label-caps text-xs uppercase text-[#9e4037] hover:underline cursor-pointer"
            >
              <span>View All Wall</span>
              <ArrowRight size={14} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            
            {/* Project Card 1: Project Alpha */}
            <div className="bg-[#FFF9F2] p-6 border-2 border-[#8f4a48] hard-shadow tilt-left flex flex-col h-full relative group hover:-translate-y-2 transition-all">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-14 h-4 bg-[#241918] opacity-20 rotate-3 pointer-events-none"></div>
              
              <div className="border-b-2 border-dashed border-[#89726f] pb-4 mb-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-headline-lg-mobile text-2xl text-[#241918] uppercase">
                    Project Alpha
                  </h3>
                  <span className="font-label-caps text-[10px] bg-[#9e4037] text-[#ffffff] px-2 py-0.5 border border-[#241918]">
                    SHIPPED
                  </span>
                </div>
                <p className="font-annotation text-sm text-[#615e59] mt-1">Status: Shipped to production</p>
              </div>

              <div className="flex-grow">
                <div className="w-full h-44 bg-[#ffe9e8] mb-4 border border-[#89726f] relative overflow-hidden group-hover:border-[#9e4037] transition-colors">
                  <img 
                    src="/assets/stitch/project_alpha.png" 
                    alt="Project Alpha CRT Interface" 
                    className="w-full h-full object-cover grayscale mix-blend-multiply opacity-85 group-hover:grayscale-0 transition-all duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/assets/almosthack_graphic.png';
                    }}
                  />
                </div>
                <p className="text-[#56423f] font-body-md text-sm leading-relaxed">
                  A decentralized platform for collective intelligence gathering. Built with modern stack, broken twice, shipped once.
                </p>
              </div>

              <div className="mt-6 flex justify-between items-center pt-4 border-t-2 border-[#241918]">
                <span className="font-label-caps text-[11px] bg-[#615e59] text-[#ffffff] px-2.5 py-1">
                  WEB3
                </span>
                <button 
                  onClick={() => {
                    playClick();
                    onNavigate?.('projects');
                  }}
                  className="font-annotation text-sm text-[#9e4037] hover:italic flex items-center gap-1 font-bold cursor-pointer"
                >
                  <span>View Details</span>
                  <ExternalLink size={14} />
                </button>
              </div>
            </div>

            {/* Project Card 2: Data Viz Tools */}
            <div className="bg-[#FFF9F2] p-6 border-2 border-[#8f4a48] hard-shadow tilt-right flex flex-col h-full relative group hover:-translate-y-2 transition-all md:mt-6">
              <div className="absolute -top-3 -right-2 text-[#241918] rotate-45 pointer-events-none">
                <Paperclip size={28} />
              </div>

              <div className="border-b-2 border-dashed border-[#89726f] pb-4 mb-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-headline-lg-mobile text-2xl text-[#241918] uppercase">
                    Data Viz Tools
                  </h3>
                  <span className="font-label-caps text-[10px] bg-[#ba1a1a] text-[#ffffff] px-2 py-0.5 border border-[#241918]">
                    BREAKING
                  </span>
                </div>
                <p className="font-annotation text-sm text-[#615e59] mt-1">Status: Stress-testing limits</p>
              </div>

              <div className="flex-grow">
                <div className="w-full h-44 bg-[#ffe9e8] mb-4 border border-[#89726f] relative overflow-hidden group-hover:border-[#9e4037] transition-colors">
                  <img 
                    src="/assets/stitch/project_dataviz.png" 
                    alt="Data Viz Graphic Experiments" 
                    className="w-full h-full object-cover grayscale mix-blend-multiply opacity-85 group-hover:grayscale-0 transition-all duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/assets/whiteboard_designer_lab.png';
                    }}
                  />
                </div>
                <p className="text-[#56423f] font-body-md text-sm leading-relaxed">
                  Making complex data accessible without dumbing it down. Heavy focus on performance and raw analog aesthetic.
                </p>
              </div>

              <div className="mt-6 flex justify-between items-center pt-4 border-t-2 border-[#241918]">
                <span className="font-label-caps text-[11px] bg-[#615e59] text-[#ffffff] px-2.5 py-1">
                  DATA
                </span>
                <button 
                  onClick={() => {
                    playClick();
                    onNavigate?.('projects');
                  }}
                  className="font-annotation text-sm text-[#9e4037] hover:italic flex items-center gap-1 font-bold cursor-pointer"
                >
                  <span>View Details</span>
                  <ExternalLink size={14} />
                </button>
              </div>
            </div>

            {/* Project Card 3: Got an Idea? Submit PR */}
            <div className="bg-[#f4dddd] p-8 border-2 border-[#241918] border-dashed flex flex-col h-full relative justify-center items-center text-center tilt-left hover:bg-[#fae3e2] transition-colors">
              <PlusSquare size={54} className="text-[#615e59] mb-4" />
              <h3 className="font-headline-lg text-3xl text-[#241918] uppercase mb-2">
                Got an Idea?
              </h3>
              <p className="font-annotation text-base text-[#56423f] mb-6 max-w-xs">
                Stop talking about it in meetings. Start building and breaking it with us.
              </p>
              <button 
                onClick={() => {
                  playClick();
                  onNavigate?.('join');
                }}
                className="font-label-caps text-xs uppercase bg-[#241918] text-[#fff8f7] px-6 py-3.5 hard-shadow-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all cursor-pointer"
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
