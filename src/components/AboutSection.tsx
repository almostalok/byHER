'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="relative w-[92vw] sm:w-[88vw] lg:w-[980px] xl:w-[1100px] h-full flex-shrink-0 bg-[#dfdac3] border-r-2 border-dashed border-[#be3519]/40 flex flex-col justify-center py-6 px-4 sm:px-8 lg:px-10 overflow-y-auto lg:overflow-visible select-none">
      <div className="w-full space-y-6 lg:space-y-8 my-auto">
        
        {/* Section Header */}
        <div className="flex items-center justify-between border-b-2 border-dashed border-[#be3519]/40 pb-3">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display font-black text-2xl sm:text-4xl text-[#be3519] uppercase tracking-wider"
          >
            ABOUT US
          </motion.h2>
          <span className="font-script text-lg sm:text-xl text-[#522a25] font-bold hidden sm:inline">
            led by her, built for all
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Collage Container (Cols 1-5) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative flex flex-col items-center justify-center py-6 min-h-[440px]"
          >
            {/* Red Halftone Camera Graphic */}
            <div className="absolute top-0 left-2 z-20 w-28 h-24 pointer-events-none drop-shadow-md">
              <img 
                src="/assets/camera_graphic.png" 
                alt="Retro Tech Camera" 
                className="w-full h-full object-contain"
              />
            </div>

            {/* Oval Portrait Photo */}
            <div className="relative w-[280px] h-[360px] sm:w-[320px] sm:h-[400px] rounded-[50%] overflow-hidden border-4 border-[#be3519] shadow-2xl z-10 my-4 bg-[#dfdac3]">
              <img 
                src="/assets/about_portrait.png" 
                alt="byHER Collective Makers" 
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Speech Bubble 1 */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute -left-2 sm:-left-6 top-24 z-30 bg-[#dfdac3] border-2 border-dashed border-[#be3519] rounded-full px-5 py-2.5 shadow-lg max-w-[220px] text-center"
            >
              <p className="font-script text-base sm:text-lg text-[#be3519] leading-snug font-bold">
                building 0 to 1 products together
              </p>
            </motion.div>

            {/* Speech Bubble 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -left-4 sm:-left-8 bottom-6 z-30 bg-[#dfdac3] border-2 border-dashed border-[#be3519] rounded-full px-5 py-2.5 shadow-lg max-w-[240px] text-center"
            >
              <p className="font-script text-sm sm:text-base text-[#be3519] leading-snug font-bold">
                breadboards to production code & networks
              </p>
            </motion.div>

            {/* Red Halftone Lips Graphic */}
            <div className="absolute right-4 bottom-2 z-30 w-16 h-12 pointer-events-none drop-shadow-md">
              <img 
                src="/assets/lips_graphic.png" 
                alt="byHER Graphic" 
                className="w-full h-full object-contain"
              />
            </div>

          </motion.div>

          {/* Right Text & Projects Columns (Cols 6-12) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 space-y-6 lg:pl-6"
          >
            {/* Statement Header */}
            <h3 className="font-display font-black text-2xl sm:text-4xl text-[#be3519] uppercase leading-tight tracking-wide">
              BUILDING SOFTWARE AND HARDWARE SOLUTIONS FROM ZERO TO ONE.
            </h3>

            {/* Paragraph Bio */}
            <p className="font-display font-semibold text-base sm:text-lg text-[#522a25] uppercase leading-relaxed tracking-wider">
              WE ARE A HANDS-ON COMMUNITY FOR WOMEN IN TECH WHO DON'T JUST TALK ABOUT BUILDING — WE PROTOTYPE, SOLDER, CODE, AND SHIP. LEARN HARD SKILLS, ACCELERATE YOUR TECHNICAL MASTERY, AND GROW AN UNBEATABLE NETWORK.
            </p>

            {/* Two Projects Columns (changed from Work Ex) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6 border-t-2 border-dashed border-[#be3519]/40">
              
              {/* Project 1: Hardware Solutions */}
              <div className="space-y-2.5 bg-[#dfdac3]/50 p-4 rounded-xl border border-[#be3519]/20">
                <div className="flex items-center justify-between">
                  <h4 className="font-display font-black text-lg text-[#be3519] uppercase tracking-wider underline underline-offset-4">
                    PROJECTS: HARDWARE
                  </h4>
                  <span className="text-[10px] bg-[#be3519] text-[#ebdcc4] font-bold px-2 py-0.5 rounded uppercase">0 ➔ 1</span>
                </div>
                <div className="text-[#522a25]">
                  <p className="font-display font-bold text-sm uppercase">EMBEDDED SYSTEMS & PROTOTYPES</p>
                  <p className="font-display font-semibold text-xs text-[#be3519] uppercase">@byHER HARDWARE LAB</p>
                </div>
                <ul className="text-xs text-[#522a25] space-y-1.5 uppercase leading-snug font-semibold pt-1">
                  <li>• Custom PCB schematics & circuit design</li>
                  <li>• Microcontroller firmware (ESP32, STM32, Arduino)</li>
                  <li>• IoT telemetry, robotics, and hardware testing</li>
                </ul>
              </div>

              {/* Project 2: Software Solutions */}
              <div className="space-y-2.5 bg-[#dfdac3]/50 p-4 rounded-xl border border-[#be3519]/20">
                <div className="flex items-center justify-between">
                  <h4 className="font-display font-black text-lg text-[#be3519] uppercase tracking-wider underline underline-offset-4">
                    PROJECTS: SOFTWARE
                  </h4>
                  <span className="text-[10px] bg-[#be3519] text-[#ebdcc4] font-bold px-2 py-0.5 rounded uppercase">PRODUCTION</span>
                </div>
                <div className="text-[#522a25]">
                  <p className="font-display font-bold text-sm uppercase">FULL-STACK & AI SYSTEMS</p>
                  <p className="font-display font-semibold text-xs text-[#be3519] uppercase">@byHER DEV COLLECTIVE</p>
                </div>
                <ul className="text-xs text-[#522a25] space-y-1.5 uppercase leading-snug font-semibold pt-1">
                  <li>• End-to-end fullstack platforms & APIs</li>
                  <li>• AI agent workflows, Python backend architectures</li>
                  <li>• Open-source developer tools and collaboration</li>
                </ul>
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}


