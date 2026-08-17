'use client';

import { motion } from 'framer-motion';

interface WrappedProps {
  onSelectImage?: (imgUrl: string, title: string) => void;
}

export default function WrappedSection({ onSelectImage }: WrappedProps) {
  return (
    <section id="community" className="relative w-[92vw] sm:w-[88vw] lg:w-[980px] xl:w-[1100px] h-full flex-shrink-0 bg-[#dfdac3] border-r-2 border-dashed border-[#be3519]/40 flex flex-col justify-center py-6 px-4 sm:px-8 lg:px-10 overflow-y-auto lg:overflow-visible select-none">
      <div className="w-full space-y-6 lg:space-y-8 my-auto">
        
        {/* Layout Grid: Left Header & Megaphone vs Right Tilted Wrapped Collage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Title & Megaphone "What's trending??" (Cols 1-5) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col items-start space-y-8"
          >
            {/* Megaphone Graphic */}
            <div className="w-44 h-36 relative drop-shadow-lg">
              <img 
                src="/assets/megaphone_graphic.png" 
                alt="Megaphone Graphic" 
                className="w-full h-full object-contain"
              />
            </div>

            {/* Speech Bubble */}
            <div className="relative bg-[#dfdac3] border-2 border-dashed border-[#be3519] rounded-full px-8 py-4 shadow-lg">
              <p className="font-script text-2xl text-[#be3519] font-bold">
                What's trending??
              </p>
            </div>

            {/* Main Section Header */}
            <h2 className="font-display font-black text-3xl sm:text-5xl text-[#be3519] uppercase tracking-wider leading-tight">
              byHER COMMUNITY<br />IMPACT & WRAPPED
            </h2>
            
            <p className="font-display text-sm font-bold text-[#522a25] uppercase tracking-wider">
              From first breadboard hookup to full production deployment, see what our collective of women makers shipped this year.
            </p>
          </motion.div>

          {/* Right Side: Interactive Wrapped Collage (Cols 6-12) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 relative group rounded-2xl overflow-hidden shadow-2xl border-4 border-[#be3519]"
          >
            <div 
              onClick={() => onSelectImage?.('/assets/pngs_2x/Section_1_2666.png', 'byHER Community Milestone Cards')}
              className="cursor-pointer overflow-hidden relative bg-[#1b263b]"
            >
              <img 
                src="/assets/pngs_2x/Section_1_2666.png" 
                alt="byHER Impact Report Cards" 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#522a25]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="bg-[#be3519] text-[#ebdcc4] font-display font-bold text-sm uppercase tracking-widest px-6 py-3 rounded-full shadow-lg">
                  Click to Expand Community Cards
                </span>
              </div>
            </div>

            {/* Interactive Stats Callout Cards Grid below image */}
            <div className="bg-[#1b263b] p-6 text-white grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Stat Card 1 */}
              <div className="bg-[#0d1b2a] p-4 rounded-xl border border-[#be3519]/40 space-y-1">
                <p className="font-display font-bold text-xs text-[#be3519] uppercase">COLLECTIVE BUILD STATS</p>
                <p className="font-display font-black text-lg text-[#ebdcc4]">48+ PROTOTYPES SHIPPED</p>
                <p className="text-xs text-gray-300">1,500+ Women Upskilled in 0 ➔ 1</p>
              </div>

              {/* Stat Card 2 */}
              <div className="bg-[#0d1b2a] p-4 rounded-xl border border-[#be3519]/40 space-y-1">
                <p className="font-display font-bold text-xs text-[#be3519] uppercase">COMMUNITY MOOD</p>
                <p className="font-display font-black text-lg text-[#ebdcc4]">"Led by Her, Built for All"</p>
                <p className="text-xs text-gray-300">Genre: Relentless Maker Energy</p>
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}


