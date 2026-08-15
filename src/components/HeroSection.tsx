'use client';

import { motion } from 'framer-motion';

const HERO_MEMBERS = [
  { id: '1', name: 'Anshika', role: 'hardware & 0➔1', tilt: '-rotate-2' },
  { id: '2', name: 'Maya', role: 'embedded & IoT', tilt: 'rotate-3' },
  { id: '3', name: 'Rhea', role: 'fullstack & systems', tilt: '-rotate-1' },
  { id: '4', name: 'Tara', role: 'robotics & AI', tilt: 'rotate-2' },
  { id: '5', name: 'Pooja', role: 'PCB & circuits', tilt: '-rotate-3' },
  { id: '6', name: 'Elena', role: 'rapid prototyping', tilt: 'rotate-1' },
  { id: '7', name: 'Kavya', role: 'sensors & telemetry', tilt: '-rotate-2' },
  { id: '8', name: 'Aditi', role: 'microcontrollers', tilt: 'rotate-3' },
];

export default function HeroSection() {
  // Seamless loop by duplicating the member list
  const loopMembers = [...HERO_MEMBERS, ...HERO_MEMBERS];

  return (
    <section className="relative w-full bg-[#f49799] overflow-hidden min-h-[calc(100vh-5rem)] lg:h-[calc(100vh-5rem)] flex flex-col justify-between pt-2 sm:pt-3 pb-0 select-none">
      
      {/* Top Retro Ledger Banner / Ticker Header */}
      <div className="w-full px-4 sm:px-8 z-20">
        <div className="relative flex items-center justify-between border-y-2 border-dashed border-[#be3519]/50 py-1.5 px-2 sm:px-4">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#be3519] animate-pulse" />
            <span className="font-display font-black text-[10px] sm:text-xs text-[#522a25] tracking-[0.2em] uppercase">
              0 TO 1 MAKERS COLLECTIVE
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-3">
            <span className="bg-[#dfdac3] border border-dashed border-[#be3519] text-[#be3519] font-script text-sm font-bold px-3 py-0.5 rounded-full shadow-sm transform -rotate-1">
              hardware × software
            </span>
            <span className="text-[#be3519]/60 font-mono text-xs">◆</span>
            <span className="font-display font-bold text-[10px] text-[#522a25] tracking-widest uppercase">
              EST. 2025
            </span>
          </div>

          <div className="flex items-center gap-1 text-[#be3519]">
            <span className="font-script text-base sm:text-lg font-bold">
              Led by Her
            </span>
            <span className="font-display font-bold text-xs uppercase tracking-wider text-[#522a25]">
              • Built for All
            </span>
          </div>
        </div>
      </div>

      {/* Hero Header & Mascot (Centered in Opening Frame) */}
      <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex-1 flex flex-col items-center justify-center my-auto">
        
        {/* Floating Pink Rubber Duck Mascot with Interactive Quack Note */}
        <motion.div 
          initial={{ y: 0, rotate: -5 }}
          animate={{ y: [-6, 6, -6], rotate: [-6, 4, -6] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-2 sm:left-6 lg:left-8 top-1 sm:top-2 z-20 w-16 h-16 sm:w-24 sm:h-24 pointer-events-auto cursor-pointer drop-shadow-xl group"
        >
          <img 
            src="/assets/mascot_duck.png" 
            alt="Mascot Rubber Duck" 
            className="w-full h-full object-contain transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300"
          />
          {/* Micro Quack Bubble */}
          <div className="absolute -top-3 -right-6 bg-[#dfdac3] border border-[#be3519] rounded-full px-2 py-0.5 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            <span className="font-script text-xs text-[#be3519] font-bold whitespace-nowrap">quack! ⚡</span>
          </div>
        </motion.div>

        {/* Speech Bubble Left: Tagline with Pushpin */}
        <motion.div
          initial={{ opacity: 0, x: -20, rotate: -8 }}
          animate={{ opacity: 1, x: 0, rotate: -6 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden md:block absolute left-8 lg:left-14 top-6 z-20 group"
        >
          <div className="relative bg-[#dfdac3] border-2 border-dashed border-[#be3519] rounded-2xl px-5 py-2.5 shadow-md hover:shadow-lg transition-shadow transform hover:rotate-0 transition-transform">
            {/* Red Pushpin Graphic */}
            <div className="absolute -top-3.5 left-4 w-6 h-6 pointer-events-none drop-shadow-sm">
              <img src="/assets/pushpin_graphic.png" alt="Pushpin" className="w-full h-full object-contain" />
            </div>
            <p className="font-script text-2xl lg:text-3xl text-[#be3519] font-bold leading-tight pt-1">
              led by her, built for all.
            </p>
          </div>
        </motion.div>

        {/* Speech Bubble Right: Mission with Retro Stamp Accent */}
        <motion.div
          initial={{ opacity: 0, x: 20, rotate: 8 }}
          animate={{ opacity: 1, x: 0, rotate: 5 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="hidden md:block absolute right-8 lg:right-14 top-4 z-20 group"
        >
          <div className="relative bg-[#dfdac3] border-2 border-dashed border-[#be3519] rounded-2xl px-5 py-2.5 shadow-md hover:shadow-lg transition-shadow transform hover:rotate-0 transition-transform max-w-[240px] text-center">
            {/* Corner Decorative Star */}
            <span className="absolute -top-2 -right-2 text-[#be3519] text-base font-bold select-none">✦</span>
            <p className="font-script text-xl lg:text-2xl text-[#be3519] font-bold leading-snug">
              software & hardware from 0 to 1 ➔
            </p>
          </div>
        </motion.div>

        {/* Floating Cream byHER Logo Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, y: [-4, 4, -4], rotate: [4, -4, 4] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
          className="hidden lg:block absolute right-16 top-28 z-10 w-20 h-20 opacity-85 pointer-events-none drop-shadow-md"
        >
          <img 
            src="/assets/byher_logo_cream.png" 
            alt="byHER Logo Mark" 
            className="w-full h-full object-contain"
          />
        </motion.div>

        {/* Main "byHER" Giant Display Title */}
        <div className="relative w-full flex flex-col items-center justify-center pt-2 sm:pt-4 pb-1">
          
          <div className="relative">
            {/* Layered Giant Title with Bebas Neue Condensed Lettering */}
            <motion.h1 
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="font-condensed font-normal text-[28vw] sm:text-[23vw] lg:text-[220px] leading-[0.85] tracking-tight text-[#ebdcc4] select-none text-center uppercase drop-shadow-[0_4px_12px_rgba(82,42,37,0.15)]"
            >
              byHER
            </motion.h1>

            {/* Subtle Overlay Outline for Extra Punch */}
            <h1 
              aria-hidden="true"
              className="font-condensed font-normal text-[28vw] sm:text-[23vw] lg:text-[220px] leading-[0.85] tracking-tight text-transparent -webkit-text-stroke-[1.5px] sm:-webkit-text-stroke-[2px] -webkit-text-stroke-[#ebdcc4]/60 select-none text-center uppercase absolute inset-0 pointer-events-none"
              style={{
                WebkitTextStroke: '1.5px rgba(235, 220, 196, 0.5)',
              }}
            >
              byHER
            </h1>
          </div>

          {/* Subtitle Mission Description with Scrapbook Pill */}
          <div className="max-w-2xl mx-auto text-center pt-2 pb-2 px-4 z-10">
            <div className="inline-block bg-[#dfdac3] border-2 border-dashed border-[#be3519] rounded-full px-4 py-1 shadow-sm mb-2 md:hidden">
              <p className="font-script text-xl text-[#be3519] font-bold">
                led by her, built for all.
              </p>
            </div>
            
            <p className="font-display font-bold text-xs sm:text-sm text-[#522a25] uppercase tracking-[0.2em] leading-relaxed">
              AN ORGANIZATION FOR WOMEN BUILDING SOFTWARE AND HARDWARE PRODUCTS FROM ZERO TO ONE WHILE LEARNING SKILLS AND NETWORKING.
            </p>
          </div>

        </div>

      </div>

      {/* Bottom Part of Hero: Infinite Cutout Carousel with White Sticker Outline */}
      <div className="relative w-full overflow-hidden pt-1 pb-0 z-20">
        
        {/* Subtle Horizontal Edge Blurs */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-[#f49799] to-transparent z-30" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-[#f49799] to-transparent z-30" />

        {/* Marquee Track */}
        <div className="animate-marquee flex items-end gap-5 sm:gap-8 px-4">
          {loopMembers.map((member, idx) => (
            <div
              key={`${member.id}-${idx}`}
              className={`group relative flex-shrink-0 flex flex-col items-center cursor-pointer transition-transform duration-300 transform hover:-translate-y-3 hover:scale-105 ${member.tilt}`}
            >
              {/* Cutout Portrait with White Shadow / Outline */}
              <div className="relative w-[120px] sm:w-[160px] lg:w-[180px] h-[140px] sm:h-[185px] lg:h-[210px] flex items-end justify-center">
                <img
                  src="/assets/hero_portrait.png"
                  alt={`${member.name} - byHER Maker`}
                  className="w-full h-full object-contain object-bottom sticker-white-cutout select-none"
                  draggable={false}
                />
              </div>

              {/* Scrapbook Tape Tag Label */}
              <div className="mt-1 bg-[#dfdac3] border border-dashed border-[#be3519] px-3 py-0.5 shadow-sm transform -rotate-1 group-hover:rotate-0 transition-transform">
                <span className="font-script text-base sm:text-lg text-[#be3519] font-bold whitespace-nowrap">
                  {member.name} • {member.role}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Bottom Dashed Border separating from About Us */}
      <div className="w-full px-4 sm:px-8 opacity-50 mt-2">
        <div className="w-full border-b-2 border-dashed border-[#be3519]" />
      </div>

    </section>
  );
}
