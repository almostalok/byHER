'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface Sticker {
  id: string;
  name: string;
  image: string;
  initialX: number;
  initialY: number;
  rotate: number;
}

export default function DraggableStickerCanvas() {
  const [stickers] = useState<Sticker[]>([
    { id: 'duck', name: 'Rubber Duck', image: '/assets/mascot_duck.png', initialX: 120, initialY: 80, rotate: -12 },
    { id: 'almost', name: 'AlmostHack Chip', image: '/assets/almosthack_graphic.png', initialX: 40, initialY: 340, rotate: 8 },
    { id: 'computer', name: '90s Terminal', image: '/assets/computer_90s_graphic.png', initialX: 200, initialY: 520, rotate: -6 },
  ]);

  return (
    <div className="fixed inset-0 pointer-events-none z-30 select-none overflow-hidden">
      {stickers.map((s) => (
        <motion.div
          key={s.id}
          drag
          dragMomentum={true}
          dragElastic={0.1}
          initial={{ x: s.initialX, y: s.initialY, rotate: s.rotate }}
          whileHover={{ scale: 1.15, cursor: 'grab' }}
          whileTap={{ scale: 0.95, cursor: 'grabbing' }}
          className="absolute pointer-events-auto w-16 h-16 sm:w-20 sm:h-20 drop-shadow-2xl group cursor-grab active:cursor-grabbing"
        >
          <img
            src={s.image}
            alt={s.name}
            className="w-full h-full object-contain sticker-white-cutout pointer-events-none"
            draggable={false}
          />
          {/* Micro Drag Hint */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#be3519] text-[#ebdcc4] text-[8px] font-mono font-bold px-1.5 py-0.2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow">
            DRAG ME
          </div>
        </motion.div>
      ))}
    </div>
  );
}
