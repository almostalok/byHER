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
      
      {/* Top Dashed Divider Line */}
      <div className="w-full px-4 sm:px-8 opacity-40 my-1">
        <div className="w-full border-b-2 border-dashed border-[#be3519]" />
      </div>

      {/* Hero Header & Mascot (Centered in Opening Frame) */}
      <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex-1 flex flex-col items-center justify-center">
        
        {/* Floating Pink Rubber Duck Mascot */}
        <motion.div 
          initial={{ y: 0, rotate: -5 }}
          animate={{ y: [-6, 6, -6], rotate: [-6, 4, -6] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-2 sm:left-8 top-0 sm:top-2 z-20 w-14 h-14 sm:w-20 sm:h-20 pointer-events-none drop-shadow-lg"
        >
          <img 
            src="/assets/mascot_duck.png" 
            alt="Mascot Rubber Duck" 
            className="w-full h-full object-contain"
          />
        </motion.div>

        {/* Speech Bubble Left: Tagline */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:block absolute left-6 lg:left-12 top-6 z-20 bg-[#dfdac3] border-2 border-dashed border-[#be3519] rounded-full px-5 py-2 shadow-md transform -rotate-6"
        >
          <p className="font-script text-2xl lg:text-3xl text-[#be3519] font-bold leading-tight">
            led by her, built for all.
          </p>
        </motion.div>

        {/* Speech Bubble Right: Mission */}
        <motion.div
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="hidden md:block absolute right-6 lg:right-12 top-4 z-20 bg-[#dfdac3] border-2 border-dashed border-[#be3519] rounded-full px-5 py-2 shadow-md transform rotate-6 max-w-[220px] text-center"
        >
          <p className="font-script text-xl lg:text-2xl text-[#be3519] font-bold leading-snug">
            software & hardware from 0 to 1 ➔
          </p>
        </motion.div>

        {/* Floating Cream byHER Logo Mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, y: [-4, 4, -4], rotate: [4, -4, 4] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
          className="hidden lg:block absolute right-16 top-24 z-10 w-20 h-20 opacity-80 pointer-events-none drop-shadow-sm"
        >
          <img 
            src="/assets/byher_logo_cream.png" 
            alt="byHER Logo Mark" 
            className="w-full h-full object-contain"
          />
        </motion.div>

        {/* Main "byHER" Giant Text */}
        <div className="relative w-full flex flex-col items-center justify-center pt-2 sm:pt-4 pb-1">
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="font-display font-black text-[22vw] sm:text-[18vw] lg:text-[190px] leading-none tracking-tighter text-[#ebdcc4] select-none text-center uppercase drop-shadow-sm"
          >
            byHER
          </motion.h1>

          {/* Subtitle Mission Description */}
          <div className="max-w-2xl mx-auto text-center pt-1 pb-2 px-4 z-10">
            <div className="inline-block bg-[#dfdac3] border-2 border-dashed border-[#be3519] rounded-full px-4 py-1.5 shadow-sm mb-2 md:hidden">
              <p className="font-script text-xl text-[#be3519] font-bold">
                led by her, built for all.
              </p>
            </div>
            
            <p className="font-display font-bold text-xs sm:text-sm text-[#522a25] uppercase tracking-widest leading-relaxed">
              AN ORGANIZATION FOR WOMEN BUILDING SOFTWARE AND HARDWARE PRODUCTS FROM ZERO TO ONE WHILE LEARNING SKILLS AND NETWORKING.
            </p>
          </div>

        </div>

      </div>

      {/* Bottom Part of Hero: Optimized Infinite Cutout Carousel with White Sticker Outline */}
      <div className="relative w-full overflow-hidden pt-2 pb-0 z-20">
        
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
              <div className="mt-1 bg-[#dfdac3] border border-dashed border-[#be3519] px-2.5 py-0.5 shadow-sm transform -rotate-1 group-hover:rotate-0 transition-transform">
                <span className="font-script text-sm sm:text-base text-[#be3519] font-bold whitespace-nowrap">
                  {member.name} • {member.role}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Bottom Dashed Border separating from About Us */}
      <div className="w-full px-4 sm:px-8 opacity-40 mt-2">
        <div className="w-full border-b-2 border-dashed border-[#be3519]" />
      </div>

    </section>
  );
}
