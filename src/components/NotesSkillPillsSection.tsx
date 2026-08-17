'use client';

import { motion } from 'framer-motion';

interface NotesProps {
  onSelectImage?: (imgUrl: string, title: string) => void;
}

export default function NotesSkillPillsSection({ onSelectImage }: NotesProps) {
  const pillImages = [
    { name: 'VS Code', src: '/assets/pill_vscode.png' },
    { name: 'Claude', src: '/assets/pill_claude.png' },
    { name: 'Google Docs', src: '/assets/pill_gdocs.png' },
    { name: 'Canva', src: '/assets/pill_canva.png' },
    { name: 'Edits', src: '/assets/pill_edits.png' },
  ];

  return (
    <section id="notes" className="relative w-screen min-w-[100vw] h-full flex-shrink-0 snap-start snap-always bg-[#dfdac3] border-r-2 border-dashed border-[#be3519]/40 flex flex-col justify-center py-6 px-6 sm:px-12 lg:px-16 overflow-y-auto select-none">
      <div className="max-w-7xl mx-auto w-full space-y-6 my-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Notes From Lab & Terminal (Cols 1-6) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="border-b-2 border-dashed border-[#be3519] pb-3 flex items-center justify-between">
              <h3 className="font-serif italic font-bold text-2xl sm:text-3xl text-[#522a25] tracking-tight">
                notes from the lab & terminal
              </h3>
              <span className="font-mono text-xs text-[#be3519] uppercase tracking-widest font-bold">
                0 ➔ 1 LOGS
              </span>
            </div>

            {/* Grid Moodboard Image */}
            <div 
              onClick={() => onSelectImage?.('/assets/notes_polaroid_1.png', 'byHER Lab Notes & Schematics')}
              className="relative group rounded-2xl overflow-hidden shadow-2xl border-4 border-[#be3519] cursor-pointer bg-[#dfdac3]"
            >
              <div className="grid grid-cols-2 gap-2 p-2">
                <img 
                  src="/assets/notes_polaroid_1.png" 
                  alt="Notes Moodboard Part 1" 
                  className="w-full h-auto object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-500"
                />
                <img 
                  src="/assets/notes_polaroid_2.png" 
                  alt="Notes Moodboard Part 2" 
                  className="w-full h-auto object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Hover Badge */}
              <div className="absolute inset-0 bg-[#522a25]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="bg-[#be3519] text-[#ebdcc4] font-display font-bold text-sm uppercase tracking-widest px-6 py-3 rounded-full shadow-lg">
                  Click to Expand Lab Notes & Blueprints
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Skill Pills Illustration & Interactive Badges (Cols 7-12) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 relative flex flex-col items-center justify-center min-h-[440px] pt-4"
          >
            {/* Halftone Skill Pills Bottle Graphic */}
            <div className="relative w-full max-w-sm h-64 flex items-center justify-center drop-shadow-xl">
              <img 
                src="/assets/skill_pills_bottle.png" 
                alt="Skill Pills Bottle" 
                className="w-full h-full object-contain"
              />
            </div>

            {/* Interactive Spilled Pills Badges with Exact Figma Graphics */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-6 max-w-md">
              {pillImages.map((pill, idx) => (
                <motion.div
                  key={pill.name}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  whileHover={{ scale: 1.15, rotate: idx % 2 === 0 ? 6 : -6 }}
                  transition={{ delay: 0.08 * idx, duration: 0.4 }}
                  className="cursor-pointer drop-shadow-lg"
                >
                  <img 
                    src={pill.src} 
                    alt={pill.name} 
                    className="h-10 sm:h-12 w-auto object-contain"
                  />
                </motion.div>
              ))}
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}


