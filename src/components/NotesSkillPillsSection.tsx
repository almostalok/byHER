'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Pin, Plus, ExternalLink, Palette, Sparkles } from 'lucide-react';
import { useRetroAudio } from '@/lib/useRetroAudio';
import { 
  DoodleUnderline, 
  DoodleArrow, 
  DoodleStar, 
  DoodleSquiggle,
  TapeStrip, 
  BinderHoles, 
  ScrapbookStamp,
  PaperClip
} from '@/components/scrapbook/Scribbles';

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
  const { playClick, playPaper } = useRetroAudio();

  const [ideas, setIdeas] = useState<StickyIdea[]>([
    {
      id: 1,
      text: 'What if we build a plant waterer that roasts you on Twitter if you forget it? 🌿⚡',
      author: 'Maya • Hardware Maker',
      color: 'bg-[#ebdcc4] text-[#3d1e1a] border-[#be3519]',
      rotate: '-rotate-2',
    },
    {
      id: 2,
      text: 'almosthack trophy: 3D printed PCB medal that doubles as a USB drive 🏆',
      author: 'Tara • Design Lead',
      color: 'bg-[#f49799] text-[#3d1e1a] border-[#be3519]',
      rotate: 'rotate-3',
    },
    {
      id: 3,
      text: 'whoever took the wire strippers from bench 2 please return them ASAP 😭',
      author: 'Anshika • 0➔1 Builder',
      color: 'bg-[#dfdac3] text-[#3d1e1a] border-[#be3519]',
      rotate: '-rotate-1',
    },
    {
      id: 4,
      text: 'Hardware soldering + Next.js WebSockets = actual 3 AM magic ✨',
      author: 'Rhea • Fullstack Lead',
      color: 'bg-[#be3519] text-[#ebdcc4] border-[#3d1e1a]',
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
      playPaper();
      const colors = [
        'bg-[#ebdcc4] text-[#3d1e1a] border-[#be3519]',
        'bg-[#f49799] text-[#3d1e1a] border-[#be3519]',
        'bg-[#dfdac3] text-[#3d1e1a] border-[#be3519]',
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
    <section id="notes" className="relative w-screen min-w-[100vw] h-full flex-shrink-0 snap-start snap-always bg-[#dfdac3] border-r-2 border-dashed border-[#be3519]/60 flex flex-col justify-start md:justify-center py-3 sm:py-5 px-3 sm:px-8 lg:px-12 overflow-y-auto select-none">
      
      {/* Notebook Binder Spiral Spine */}
      <div className="absolute left-1 top-0 bottom-0 z-30 hidden md:block">
        <BinderHoles count={9} />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 my-0 md:my-auto pb-16 md:pb-2 md:pl-6">
        
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b-2 border-dashed border-[#be3519]/50 pb-2 sm:pb-3 gap-2">
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <ScrapbookStamp text="PAGE 05" subtext="3AM NAPKINS" rotate="-rotate-2" />
            
            <div className="relative">
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="font-display font-black text-2xl sm:text-4xl text-[#be3519] uppercase tracking-wider flex items-center gap-2"
              >
                THE 3 AM SCRATCHPAD
              </motion.h2>
              <div className="absolute -bottom-2 left-0 w-full">
                <DoodleUnderline className="text-[#be3519]" width="100%" />
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-3 text-xs sm:text-sm font-bold text-[#3d1e1a] uppercase tracking-widest">
            <span className="font-script text-base sm:text-xl text-[#be3519] font-bold">Unfiltered Maker Ideas</span>
            <span className="text-[#be3519]">|</span>
            <span className="font-mono text-xs bg-[#ebdcc4] px-2 py-0.5 rounded-xs border border-[#3d1e1a]">LAB CORKBOARD</span>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-stretch mt-3 sm:mt-5">
          
          {/* Left Column: Whiteboard Graphic Canvas (Cols 1-7) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 relative group rounded-2xl overflow-hidden shadow-2xl border-3 border-[#3d1e1a] bg-[#ebdcc4] flex flex-col justify-between p-2.5 sm:p-4"
          >
            {/* Washi Tape */}
            <TapeStrip tilt="-rotate-6" color="pink" width="w-24" className="-top-2 left-6" />
            <TapeStrip tilt="rotate-4" color="tan" width="w-24" className="-top-2 right-6" />

            <div className="absolute top-1 right-2 z-20">
              <PaperClip tilt="-rotate-12" />
            </div>

            {/* Clickable Whiteboard Graphic */}
            <div 
              onClick={() => {
                playClick();
                onSelectImage?.('/assets/whiteboard_designer_lab.png', 'byHER Creative Whiteboard & Schematics');
              }}
              className="cursor-pointer overflow-hidden relative flex-1 min-h-[160px] sm:min-h-[230px] flex items-center justify-center bg-[#dfdac3] rounded-xl border-2 border-[#3d1e1a]"
            >
              <img 
                src="/assets/whiteboard_designer_lab.png" 
                alt="byHER Creative Whiteboard Canvas with schematics and ideas" 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500 max-h-[250px]"
              />

              <div className="absolute inset-0 bg-[#3d1e1a]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="bg-[#be3519] text-[#ebdcc4] font-display font-bold text-xs uppercase tracking-widest px-4 py-2 rounded-full shadow-lg flex items-center gap-1.5 border border-[#ebdcc4]">
                  Expand Full Canvas <ExternalLink size={13} />
                </span>
              </div>
            </div>

            {/* Bottom Whiteboard Label */}
            <div className="mt-2 bg-[#be3519] py-1.5 px-3 rounded-lg text-center border border-[#3d1e1a]">
              <p className="font-display font-black text-[9px] sm:text-xs text-[#ebdcc4] uppercase tracking-widest flex items-center justify-center gap-1.5">
                <Palette size={13} /> ACTUAL SCHEMATICS • UI WIREFRAMES • UNHINGED IDEAS
              </p>
            </div>
          </motion.div>

          {/* Right Column: Interactive Sticky Notes & Designer Toolkit (Cols 8-12) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-2.5 sm:space-y-3"
          >
            {/* Subheader */}
            <div className="flex items-center justify-between border-b border-dashed border-[#be3519]/40 pb-1.5">
              <span className="font-script text-base sm:text-xl text-[#be3519] font-bold">
                Pinned Lab Scraps 📌
              </span>

              <button
                onClick={() => {
                  playClick();
                  setIsAddingNote(!isAddingNote);
                }}
                className="bg-[#be3519] hover:bg-[#3d1e1a] text-[#ebdcc4] px-2.5 py-1 rounded-md text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider transition-colors flex items-center gap-1 cursor-pointer border border-[#3d1e1a] shadow-xs"
              >
                <Plus size={12} /> {isAddingNote ? 'CANCEL' : 'PIN SCRAP'}
              </button>
            </div>

            {/* ADD NOTE FORM */}
            <AnimatePresence>
              {isAddingNote && (
                <motion.form
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  onSubmit={handleAddIdea}
                  className="bg-[#ebdcc4] border-2 border-[#3d1e1a] border-rough p-2.5 rounded-xl space-y-2 shadow-md"
                >
                  <span className="font-mono font-black text-[9px] text-[#be3519] uppercase tracking-wider block">
                    TEAR OFF A NOTE & PIN YOUR 3 AM IDEA 📌
                  </span>

                  <textarea
                    required
                    rows={2}
                    placeholder="Write a fun hardware/software idea..."
                    value={newIdeaText}
                    onChange={(e) => setNewIdeaText(e.target.value)}
                    className="w-full bg-[#dfdac3] text-[#3d1e1a] placeholder:text-[#3d1e1a]/60 p-2 rounded-md font-script text-sm sm:text-base font-bold border border-[#3d1e1a] focus:outline-none resize-none"
                  />

                  <div className="flex items-center gap-1.5">
                    <input
                      type="text"
                      placeholder="Your Name / Role..."
                      value={newAuthor}
                      onChange={(e) => setNewAuthor(e.target.value)}
                      className="flex-1 bg-[#dfdac3] text-[#3d1e1a] placeholder:text-[#3d1e1a]/60 px-2 py-1 rounded-md font-mono text-xs font-bold border border-[#3d1e1a] focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="bg-[#be3519] text-[#ebdcc4] hover:bg-[#3d1e1a] px-3 py-1 rounded-md font-display font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      PIN NOTE
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>

            {/* PINNED NOTES GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-[190px] sm:max-h-[230px] overflow-y-auto no-scrollbar pr-1">
              {ideas.map((idea) => (
                <motion.div
                  key={idea.id}
                  layout
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  whileHover={{ scale: 1.04, rotate: 0 }}
                  className={`p-2.5 rounded-xl border-2 shadow-md flex flex-col justify-between space-y-1.5 transform transition-transform cursor-pointer relative ${idea.color} ${idea.rotate}`}
                >
                  <TapeStrip tilt="-rotate-6" color="cream" width="w-12" className="-top-2 left-3" />
                  
                  <div className="flex items-center justify-between">
                    <Pin size={12} className="opacity-80 text-[#be3519]" />
                    <span className="font-mono text-[8px] uppercase font-bold tracking-wider opacity-75">
                      LAB SCRAP
                    </span>
                  </div>

                  <p className="font-script text-xs sm:text-sm font-bold leading-tight">
                    "{idea.text}"
                  </p>

                  <div className="border-t border-current/20 pt-1 text-[8px] sm:text-[9px] font-mono font-bold uppercase tracking-wider text-right opacity-90">
                    — {idea.author}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* TOOL PILLS */}
            <div className="bg-[#ebdcc4] border-2 border-dashed border-[#3d1e1a] p-2 rounded-xl space-y-1">
              <span className="font-mono text-[8px] sm:text-[9px] font-bold text-[#be3519] uppercase tracking-widest block text-center">
                LAB STACK & DESIGNER TOOLKIT PILLS
              </span>

              <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
                {pillImages.map((pill, idx) => (
                  <motion.div
                    key={pill.name}
                    whileHover={{ scale: 1.15, rotate: idx % 2 === 0 ? 6 : -6 }}
                    transition={{ duration: 0.2 }}
                    className="cursor-pointer drop-shadow-sm"
                  >
                    <img 
                      src={pill.src} 
                      alt={pill.name} 
                      className="h-6 sm:h-8 w-auto object-contain select-none"
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
