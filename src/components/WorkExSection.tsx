'use client';

import { motion } from 'framer-motion';

interface WorkExProps {
  onSelectImage?: (imgUrl: string, title: string) => void;
}

export default function WorkExSection({ onSelectImage }: WorkExProps) {
  return (
    <section id="projects" className="relative w-[92vw] sm:w-[88vw] lg:w-[980px] xl:w-[1100px] h-full flex-shrink-0 bg-[#dfdac3] border-r-2 border-dashed border-[#be3519]/40 flex flex-col justify-center py-6 px-4 sm:px-8 lg:px-10 overflow-y-auto lg:overflow-visible select-none">
      <div className="w-full space-y-6 lg:space-y-8 my-auto">
        
        {/* Section Header Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b-2 border-dashed border-[#be3519] pb-3 gap-2">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-display font-black text-2xl sm:text-4xl text-[#be3519] uppercase tracking-wider"
          >
            FEATURED PROJECTS
          </motion.h2>

          <div className="flex items-center space-x-3 text-xs sm:text-sm font-bold text-[#522a25] uppercase tracking-widest">
            <span>0 ➔ 1 HARDWARE & SOFTWARE</span>
            <span className="text-[#be3519]">|</span>
            <span>byHER LABS</span>
          </div>
        </div>

        {/* Content Layout: Left Challenge/Solution vs Right Campaign Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Megaphone & Solution Statement (Cols 1-5) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col items-center text-center space-y-8"
          >
            {/* Halftone Megaphone Illustration */}
            <div className="w-48 h-40 relative drop-shadow-lg">
              <img 
                src="/assets/megaphone_graphic.png" 
                alt="Megaphone Graphic" 
                className="w-full h-full object-contain"
              />
            </div>

            {/* Speech Bubble */}
            <div className="relative bg-[#dfdac3] border-2 border-dashed border-[#be3519] rounded-full px-8 py-5 shadow-xl max-w-sm">
              <p className="font-script text-2xl text-[#be3519] font-bold leading-tight">
                The challenge: Bridging hardware & software.
              </p>
            </div>

            {/* Solution Header */}
            <div className="pt-2">
              <h3 className="font-display font-black text-2xl sm:text-3xl text-[#be3519] uppercase tracking-wide leading-snug">
                SOLUTION:<br />COLLABORATIVE 0 ➔ 1 BUILD PIPELINES.
              </h3>
            </div>

          </motion.div>

          {/* Right Column: Campaign Grid Showcase (Cols 6-12) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 relative group rounded-2xl overflow-hidden shadow-2xl border-4 border-[#be3519] bg-[#1a1a1a]"
          >
            {/* Grid Container */}
            <div 
              onClick={() => onSelectImage?.('/assets/pngs_2x/Section_1_2598.png', 'byHER Zero-to-One Builds & Projects Showcase')}
              className="cursor-pointer overflow-hidden relative"
            >
              <img 
                src="/assets/pngs_2x/Section_1_2598.png" 
                alt="byHER Projects Grid" 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
              />

              {/* Hover Badge Overlay */}
              <div className="absolute inset-0 bg-[#522a25]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="bg-[#be3519] text-[#ebdcc4] font-display font-bold text-sm uppercase tracking-widest px-6 py-3 rounded-full shadow-lg">
                  Click to View Full Project Details
                </span>
              </div>
            </div>

            {/* Bottom Overlay Label */}
            <div className="bg-[#be3519] py-3.5 px-6 text-center">
              <p className="font-display font-black text-base sm:text-lg text-[#ebdcc4] uppercase tracking-widest">
                WHAT OUR ZERO-TO-ONE BUILDS & SHIPMENTS LOOK LIKE
              </p>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}


