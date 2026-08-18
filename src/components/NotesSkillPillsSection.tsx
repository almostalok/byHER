'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Pin, Plus, ExternalLink, Palette } from 'lucide-react';

interface NotesProps {
  onSelectImage?: (imgUrl: string, title: string) => void;
}

interface StickyIdea {
  id: number;
  text: string;
  author: string;
  color: string;
  rotate: string;
}

export default function NotesSkillPillsSection({ onSelectImage }: NotesProps) {
  const [ideas, setIdeas] = useState<StickyIdea[]>([
    {
      id: 1,
      text: 'What if ESP32 microcontrollers ran autonomous AI agents over LoRa radios? ⚡',
      author: 'Maya • Embedded Lead',
      color: 'bg-[#ebdcc4] text-[#522a25] border-[#be3519]',
      rotate: '-rotate-2',
    },
    {
      id: 2,
      text: 'almosthack trophy: 3D printed PCB medal + custom circuit badge 🏆',
      author: 'Tara • Design Lead',
      color: 'bg-[#f49799] text-[#be3519] border-[#be3519]',
      rotate: 'rotate-3',
    },
    {
      id: 3,
      text: 'kloa campus HUD needs pixel art skill badges & dark mode theme 👾',
      author: 'Rhea • Fullstack Lead',
      color: 'bg-[#dfdac3] text-[#522a25] border-[#be3519]',
      rotate: '-rotate-1',
    },
    {
      id: 4,
      text: 'Hardware soldering + frontend WebSockets = zero-to-one magic ✨',
      author: 'Anshika • 0➔1 Maker',
      color: 'bg-[#be3519] text-[#ebdcc4] border-[#522a25]',
      rotate: 'rotate-2',
    },
  ]);

  const [newIdeaText, setNewIdeaText] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [isAddingNote, setIsAddingNote] = useState(false);

  const pillImages = [
    { name: 'VS Code', src: '/assets/pill_vscode.png' },
    { name: 'Claude', src: '/assets/pill_claude.png' },
    { name: 'Google Docs', src: '/assets/pill_gdocs.png' },
    { name: 'Canva', src: '/assets/pill_canva.png' },
    { name: 'Edits', src: '/assets/pill_edits.png' },
  ];

  const handleAddIdea = (e: React.FormEvent) => {
    e.preventDefault();
    if (newIdeaText.trim()) {
      const colors = [
        'bg-[#ebdcc4] text-[#522a25] border-[#be3519]',
        'bg-[#f49799] text-[#be3519] border-[#be3519]',
        'bg-[#dfdac3] text-[#522a25] border-[#be3519]',
      ];
      const tilts = ['-rotate-3', 'rotate-2', '-rotate-1', 'rotate-3'];
      
      const newIdea: StickyIdea = {
        id: Date.now(),
        text: newIdeaText.trim(),
        author: newAuthor.trim() || 'Anonymous Maker ✦',
        color: colors[Math.floor(Math.random() * colors.length)],
        rotate: tilts[Math.floor(Math.random() * tilts.length)],
      };

      setIdeas([newIdea, ...ideas]);
      setNewIdeaText('');
      setNewAuthor('');
      setIsAddingNote(false);
    }
  };

  return (
    <section id="notes" className="relative w-screen min-w-[100vw] h-full flex-shrink-0 snap-start snap-always bg-[#dfdac3] border-r-2 border-dashed border-[#be3519]/40 flex flex-col justify-between py-6 px-4 sm:px-8 lg:px-16 overflow-y-auto select-none">
      <div className="max-w-7xl mx-auto w-full space-y-6 my-auto">
        
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b-2 border-dashed border-[#be3519] pb-3 gap-2">
          <div className="flex items-center gap-2 sm:gap-3">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-display font-black text-2xl sm:text-4xl text-[#be3519] uppercase tracking-wider"
            >
              THE CREATIVE LAB
            </motion.h2>
            <span className="bg-[#be3519] text-[#ebdcc4] text-[9px] sm:text-xs font-display font-bold px-2.5 sm:px-3 py-1 rounded-full uppercase tracking-wider">
              WHITEBOARD & IDEAS
            </span>
          </div>

          <div className="flex items-center space-x-3 text-xs sm:text-sm font-bold text-[#522a25] uppercase tracking-widest">
            <span className="font-script text-base sm:text-lg text-[#be3519] font-bold">3am Brainstorms</span>
            <span className="text-[#be3519]">|</span>
            <span className="font-mono text-xs">byHER STUDIO</span>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* Left Column: Generated Whiteboard Photo Canvas (Cols 1-7) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 relative group rounded-3xl overflow-hidden shadow-2xl border-4 border-[#be3519] bg-[#1a1a1a] flex flex-col justify-between"
          >
            {/* Corner Decorative Pushpins */}
            <div className="absolute top-3 left-3 z-20 w-6 h-6 sm:w-7 sm:h-7 drop-shadow-md pointer-events-none">
              <img src="/assets/pushpin_graphic.png" alt="Pushpin" className="w-full h-full object-contain" />
            </div>
            <div className="absolute top-3 right-3 z-20 w-6 h-6 sm:w-7 sm:h-7 drop-shadow-md pointer-events-none transform rotate-45">
              <img src="/assets/pushpin_graphic.png" alt="Pushpin" className="w-full h-full object-contain" />
            </div>

            {/* Clickable Whiteboard Graphic Container */}
            <div 
              onClick={() => onSelectImage?.('/assets/whiteboard_designer_lab.png', 'byHER Creative Whiteboard & Schematics')}
              className="cursor-pointer overflow-hidden relative flex-1 min-h-[220px] sm:min-h-[260px] flex items-center justify-center bg-[#dfdac3]"
            >
              <img 
                src="/assets/whiteboard_designer_lab.png" 
                alt="byHER Creative Whiteboard Canvas with schematics and ideas" 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500 max-h-[340px]"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#522a25]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="bg-[#be3519] text-[#ebdcc4] font-display font-bold text-xs uppercase tracking-widest px-5 py-2.5 rounded-full shadow-lg flex items-center gap-1.5">
                  Click to Expand Whiteboard <ExternalLink size={14} />
                </span>
              </div>
            </div>

            {/* Bottom Whiteboard Label */}
            <div className="bg-[#be3519] py-2 px-4 sm:px-6 text-center border-t-2 border-[#522a25]">
              <p className="font-display font-black text-[11px] sm:text-sm text-[#ebdcc4] uppercase tracking-widest flex items-center justify-center gap-2">
                <Palette size={16} /> CIRCUIT SCHEMATICS • UI WIREFRAMES • RANDOM IDEAS
              </p>
            </div>
          </motion.div>

          {/* Right Column: Interactive Post-it Sticky Notes & Designer Tools (Cols 8-12) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-4"
          >
            {/* Top Subheader with Add Note Button */}
            <div className="flex items-center justify-between border-b border-dashed border-[#be3519]/40 pb-2">
              <span className="font-script text-xl sm:text-2xl text-[#be3519] font-bold">
                Pinned Lab Post-Its 📌
              </span>

              <button
                onClick={() => setIsAddingNote(!isAddingNote)}
                className="bg-[#be3519] hover:bg-[#522a25] text-[#ebdcc4] px-3 py-1 rounded-full text-xs font-display font-bold uppercase tracking-wider transition-colors flex items-center gap-1 cursor-pointer"
              >
                <Plus size={14} /> {isAddingNote ? 'CANCEL' : 'PIN IDEA'}
              </button>
            </div>

            {/* ADD NEW IDEA FORM */}
            <AnimatePresence>
              {isAddingNote && (
                <motion.form
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  onSubmit={handleAddIdea}
                  className="bg-[#ebdcc4] border-2 border-[#be3519] p-3.5 sm:p-4 rounded-2xl space-y-3 shadow-md"
                >
                  <span className="font-display font-black text-xs text-[#be3519] uppercase tracking-wider block">
                    PIN A RANDOM IDEA TO THE BOARD 📌
                  </span>

                  <textarea
                    required
                    rows={2}
                    placeholder="Write your 3am hardware or software idea..."
                    value={newIdeaText}
                    onChange={(e) => setNewIdeaText(e.target.value)}
                    className="w-full bg-[#dfdac3] text-[#522a25] placeholder:text-[#522a25]/60 p-2.5 rounded-xl font-script text-base sm:text-lg font-bold border border-[#be3519] focus:outline-none focus:ring-2 focus:ring-[#be3519] resize-none"
                  />

                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      placeholder="Your Maker Name / Role..."
                      value={newAuthor}
                      onChange={(e) => setNewAuthor(e.target.value)}
                      className="flex-1 bg-[#dfdac3] text-[#522a25] placeholder:text-[#522a25]/60 px-3 py-1.5 rounded-xl font-mono text-xs font-bold border border-[#be3519] focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="bg-[#be3519] text-[#ebdcc4] hover:bg-[#522a25] px-4 py-1.5 rounded-xl font-display font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      PIN NOTE
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>

            {/* PINNED STICKY NOTES GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[280px] overflow-y-auto no-scrollbar pr-1">
              {ideas.map((idea) => (
                <motion.div
                  key={idea.id}
                  layout
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  whileHover={{ scale: 1.04, rotate: 0 }}
                  className={`p-3 sm:p-3.5 rounded-2xl border-2 shadow-md flex flex-col justify-between space-y-2 transform transition-transform cursor-pointer ${idea.color} ${idea.rotate}`}
                >
                  {/* Pin Graphic Icon */}
                  <div className="flex items-center justify-between">
                    <Pin size={14} className="opacity-80" />
                    <span className="font-mono text-[9px] uppercase font-bold tracking-wider opacity-75">
                      STICKY NOTE
                    </span>
                  </div>

                  {/* Note Text */}
                  <p className="font-script text-sm sm:text-base font-bold leading-tight">
                    "{idea.text}"
                  </p>

                  {/* Author Tag */}
                  <div className="border-t border-current/20 pt-1 text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider text-right opacity-90">
                    — {idea.author}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* DESIGNER TOOL PILLS */}
            <div className="bg-[#f49799]/40 border-2 border-dashed border-[#be3519] p-3 rounded-2xl space-y-2">
              <span className="font-mono text-[9px] sm:text-[10px] font-bold text-[#be3519] uppercase tracking-widest block text-center">
                LAB STACK & DESIGNER TOOLKIT PILLS
              </span>

              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                {pillImages.map((pill, idx) => (
                  <motion.div
                    key={pill.name}
                    whileHover={{ scale: 1.15, rotate: idx % 2 === 0 ? 6 : -6 }}
                    transition={{ duration: 0.2 }}
                    className="cursor-pointer drop-shadow-md"
                  >
                    <img 
                      src={pill.src} 
                      alt={pill.name} 
                      className="h-7 sm:h-9 w-auto object-contain select-none"
                    />
                  </motion.div>
                ))}
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
