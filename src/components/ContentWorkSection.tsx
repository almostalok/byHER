'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const READ_DOC_URL = 'https://docs.google.com/document/d/15-QOa-XTIeh0FHPbKWlyB_-RjzsE-NUJkjcHn3QO_qs/edit?usp=sharing';

export default function ContentWorkSection() {
  return (
    <section id="content-work" className="relative w-screen min-w-[100vw] h-full flex-shrink-0 snap-start snap-always bg-[#dfdac3] border-r-2 border-dashed border-[#be3519]/40 flex flex-col justify-between pt-6 pb-4 px-6 sm:px-12 lg:px-16 overflow-y-auto select-none">
      <div className="max-w-7xl mx-auto w-full space-y-6 my-auto">
        
        {/* Top Grid: Bench Photo vs Read Manifesto Computer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Bench Photo & Collective Builders (Cols 1-7) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-4"
          >
            <div className="flex items-center justify-between border-b-2 border-dashed border-[#be3519]/40 pb-2">
              <h2 className="font-display font-black text-2xl sm:text-4xl text-[#be3519] uppercase tracking-wider">
                HOW WE BUILD
              </h2>
              <span className="bg-[#be3519] text-[#ebdcc4] text-[10px] sm:text-xs font-display font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                0 ➔ 1 FRAMEWORK
              </span>
            </div>

            {/* Bench Cutout Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-[#be3519] bg-[#dfdac3] max-h-[260px] sm:max-h-[300px]">
              <img 
                src="/assets/content_work_bench.png" 
                alt="byHER Collective in the Lab" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right Column: Read Manifesto Link (Cols 8-12) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col items-center text-center space-y-4 bg-[#dfdac3] p-6 rounded-2xl border-2 border-dashed border-[#be3519]/40 shadow-sm"
          >
            <h3 className="font-display font-black text-2xl sm:text-3xl text-[#be3519] uppercase tracking-wider">
              OUR MANIFESTO
            </h3>

            {/* Retro 90s Computer Halftone Graphic */}
            <div className="w-40 h-32 relative my-1 drop-shadow-md">
              <img 
                src="/assets/computer_90s_graphic.png" 
                alt="Retro 90s Computer Terminal" 
                className="w-full h-full object-contain"
              />
            </div>

            {/* Oval Clickable Link Button */}
            <a
              href={READ_DOC_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center bg-[#dfdac3] border-3 border-[#be3519] rounded-full px-8 py-3 shadow-xl hover:bg-[#be3519] transition-all duration-300 hover:scale-105"
            >
              <span className="font-script text-2xl text-[#be3519] group-hover:text-[#ebdcc4] font-bold tracking-wide flex items-center gap-2">
                Manifesto <ExternalLink size={20} />
              </span>
            </a>

            <p className="text-[10px] sm:text-xs font-bold text-[#522a25] uppercase tracking-widest">
              Read the byHER Zero-to-One Handbook
            </p>
          </motion.div>

        </div>

      </div>

      {/* Bottom Coral Pink Banner: 0-TO-1 BUILD PROCESS */}
      <div className="w-full bg-[#f49799] py-4 px-4 rounded-xl border-2 border-[#be3519] mt-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Title with Push Pin */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 transform -rotate-12 drop-shadow-md">
              <img 
                src="/assets/pushpin_graphic.png" 
                alt="Pushpin Graphic" 
                className="w-full h-full object-contain"
              />
            </div>

            <h3 className="font-display font-black text-lg sm:text-2xl text-[#be3519] uppercase tracking-wider">
              BUILD PROCESS
            </h3>
          </div>

          {/* Interactive Step Flow Diagram */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-center">
            
            {/* Step 1: research */}
            <div className="flex items-center space-x-2">
              <span className="font-script text-lg sm:text-2xl text-[#522a25] font-bold italic">
                ideate
              </span>
              <span className="text-lg text-[#be3519] font-bold">➔</span>
            </div>

            {/* Step 2: prototype */}
            <div className="flex items-center space-x-2">
              <span className="font-script text-lg sm:text-2xl text-[#be3519] font-bold italic">
                prototype
              </span>
              <span className="text-lg text-[#522a25] font-bold">➔</span>
            </div>

            {/* Step 3: build */}
            <div className="flex items-center space-x-2">
              <span className="font-script text-lg sm:text-2xl text-[#522a25] font-bold italic">
                build & solder
              </span>
              <span className="text-lg text-[#be3519] font-bold">➔</span>
            </div>

            {/* Step 4: ship */}
            <div className="flex items-center">
              <span className="font-script text-lg sm:text-2xl text-[#be3519] font-bold italic">
                ship & network
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}


