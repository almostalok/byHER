'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Keyboard, Sparkles, Volume2, Monitor, Gamepad2 } from 'lucide-react';

interface KeyboardShortcutsProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function KeyboardShortcutsModal({ isOpen, onClose }: KeyboardShortcutsProps) {
  const shortcuts = [
    { key: '1 - 7', desc: 'Jump directly to Sections 1 through 7' },
    { key: 'Q', desc: 'Mascot Rubber Duck Quack Synth Note' },
    { key: 'C', desc: 'Celebratory Confetti Blast' },
    { key: 'M', desc: 'Toggle 8-Bit Retro Sound FX On/Off' },
    { key: 'R', desc: 'Toggle 90s CRT Monitor Scanline Filter' },
    { key: '← / →', desc: 'Smooth Horizontal Page Navigation' },
    { key: '?', desc: 'Toggle Keyboard Cheat Sheet Window' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#522a25]/60 backdrop-blur-md select-none overflow-hidden">
          {/* Backdrop Click */}
          <div className="fixed inset-0" onClick={onClose} />

          {/* Arcade Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-[#dfdac3] border-4 border-[#be3519] rounded-3xl p-6 shadow-2xl z-10 text-[#522a25] space-y-5 my-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b-2 border-dashed border-[#be3519] pb-3">
              <div className="flex items-center gap-2">
                <Gamepad2 size={22} className="text-[#be3519]" />
                <h3 className="font-display font-black text-xl text-[#be3519] uppercase tracking-wider">
                  RETRO CHEAT CODES & SHORTCUTS
                </h3>
              </div>

              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-[#be3519] text-[#ebdcc4] hover:bg-[#522a25] transition-colors flex items-center justify-center font-bold text-sm cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* List */}
            <div className="space-y-2.5 font-mono text-xs">
              {shortcuts.map((item) => (
                <div
                  key={item.key}
                  className="flex items-center justify-between bg-[#ebdcc4]/60 border border-[#be3519]/40 p-2.5 rounded-xl"
                >
                  <span className="bg-[#be3519] text-[#ebdcc4] font-bold px-2.5 py-1 rounded-md text-xs shadow-sm">
                    {item.key}
                  </span>
                  <span className="font-bold text-[#522a25] text-right font-display uppercase tracking-wide">
                    {item.desc}
                  </span>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="bg-[#be3519] text-[#ebdcc4] p-3 rounded-2xl text-center font-script text-lg font-bold">
              "Built for women makers, designed for everyone."
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
