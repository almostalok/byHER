'use client';

import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  imgUrl: string;
  title: string;
  onClose: () => void;
}

export default function ImageModal({ isOpen, imgUrl, title, onClose }: ModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-sm">
        
        {/* Backdrop click */}
        <div className="absolute inset-0" onClick={onClose} />

        {/* Modal Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative z-10 max-w-5xl w-full bg-[#dfdac3] border-4 border-[#be3519] rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
        >
          
          {/* Modal Header */}
          <div className="bg-[#be3519] px-6 py-4 flex items-center justify-between">
            <h3 className="font-display font-black text-lg sm:text-xl text-[#ebdcc4] uppercase tracking-wider">
              {title}
            </h3>
            <button 
              onClick={onClose}
              className="p-1 rounded-full text-[#ebdcc4] hover:bg-[#522a25] transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Modal Image Body */}
          <div className="p-4 sm:p-6 overflow-auto flex-1 flex items-center justify-center bg-[#1a1a1a]">
            <img 
              src={imgUrl} 
              alt={title} 
              className="w-full max-h-[75vh] object-contain rounded-lg shadow-lg"
            />
          </div>

          {/* Modal Footer */}
          <div className="bg-[#dfdac3] px-6 py-3 border-t border-[#be3519]/30 text-center">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-[#be3519] text-[#ebdcc4] font-display font-bold text-xs uppercase tracking-widest rounded-full hover:bg-[#522a25] transition-colors"
            >
              Close Preview
            </button>
          </div>

        </motion.div>

      </div>
    </AnimatePresence>
  );
}
