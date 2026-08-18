'use client';

import { Mail, Send, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { useRetroAudio } from '@/lib/useRetroAudio';
import confetti from 'canvas-confetti';

export default function ContactFooter() {
  const { playClick, playQuack } = useRetroAudio();

  const handleDuckClick = () => {
    playQuack();
    confetti({
      particleCount: 30,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#be3519', '#ebdcc4', '#f49799'],
    });
  };

  const handleScrollTop = () => {
    playClick();
    const heroEl = document.getElementById('hero');
    if (heroEl) {
      heroEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="relative w-screen min-w-[100vw] h-full flex-shrink-0 snap-start snap-always bg-[#f49799] flex flex-col justify-between pt-8 pb-3 px-4 sm:px-8 lg:px-16 overflow-y-auto select-none border-r-2 border-dashed border-[#be3519]/40">
      
      {/* Top Teletype Section Header */}
      <div className="max-w-7xl mx-auto w-full pt-2">
        <div className="flex items-center justify-between border-b-2 border-dashed border-[#be3519]/40 pb-3">
          <div className="flex items-center gap-2">
            <span className="bg-[#be3519] text-[#ebdcc4] font-display font-black text-[10px] sm:text-xs px-2.5 sm:px-3 py-1 rounded-full uppercase tracking-widest shadow-sm flex items-center gap-1.5">
              <Send size={12} /> 06 / TELEGRAM & POSTAL
            </span>
            <span className="font-mono text-[10px] sm:text-xs font-bold text-[#522a25] uppercase tracking-wider hidden sm:inline-block">
              EST. 2025 • CONNECT WITH byHER
            </span>
          </div>

          {/* Back to Top Rocket Button */}
          <button
            onClick={handleScrollTop}
            className="bg-[#dfdac3] text-[#be3519] border-2 border-[#be3519] hover:bg-[#be3519] hover:text-[#ebdcc4] px-3 sm:px-3.5 py-1 rounded-full font-mono text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1 cursor-pointer shadow-sm"
          >
            TOP <ArrowUp size={14} />
          </button>
        </div>
      </div>

      {/* Main Contact Links Container */}
      <div className="max-w-7xl mx-auto w-full my-auto space-y-8 py-6">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 relative z-10">
          
          {/* Social Links List */}
          <div className="space-y-5 sm:space-y-6 text-left w-full lg:w-auto">
            
            {/* Instagram Link */}
            <motion.a 
              onClick={playClick}
              whileHover={{ x: 8 }}
              href="https://www.instagram.com/byher.build" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-3 sm:space-x-4 group cursor-pointer"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-2xl bg-[#522a25] group-hover:bg-[#be3519] transition-colors p-2 shadow-lg shrink-0">
                <img 
                  src="/assets/icon_insta.png" 
                  alt="Instagram" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-script text-2xl sm:text-4xl text-[#522a25] group-hover:text-[#be3519] font-bold underline underline-offset-4 transition-colors">
                @byher.build
              </span>
            </motion.a>

            {/* LinkedIn Link */}
            <motion.a 
              onClick={playClick}
              whileHover={{ x: 8 }}
              href="https://linkedin.com/company/byher-collective" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-3 sm:space-x-4 group cursor-pointer"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-2xl bg-[#522a25] group-hover:bg-[#be3519] transition-colors p-2 shadow-lg shrink-0">
                <img 
                  src="/assets/icon_linkedin.png" 
                  alt="LinkedIn" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-script text-2xl sm:text-4xl text-[#522a25] group-hover:text-[#be3519] font-bold underline underline-offset-4 transition-colors">
                byHER Collective
              </span>
            </motion.a>

            {/* Email Link */}
            <motion.a 
              onClick={playClick}
              whileHover={{ x: 8 }}
              href="mailto:hello@byher.org" 
              className="flex items-center space-x-3 sm:space-x-4 group cursor-pointer"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-2xl bg-[#522a25] text-[#ebdcc4] group-hover:bg-[#be3519] transition-colors p-2 shadow-lg shrink-0">
                <Mail size={22} />
              </div>
              <span className="font-script text-xl sm:text-3xl text-[#522a25] group-hover:text-[#be3519] font-bold underline underline-offset-4 transition-colors break-all sm:break-normal">
                hello@byher.org
              </span>
            </motion.a>

          </div>

          {/* Right Side: Mascot and Tagline badge */}
          <div className="flex flex-col items-center space-y-3 sm:space-y-4">
            <motion.div 
              onClick={handleDuckClick}
              animate={{ y: [-6, 6, -6], rotate: [-4, 4, -4] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-28 h-28 sm:w-44 sm:h-44 drop-shadow-2xl cursor-pointer group"
            >
              <img 
                src="/assets/mascot_duck.png" 
                alt="Mascot Duck Footer" 
                className="w-full h-full object-contain transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300"
              />
            </motion.div>

            <div className="bg-[#dfdac3] border-2 border-dashed border-[#be3519] rounded-full px-5 sm:px-6 py-1.5 sm:py-2 shadow-md">
              <p className="font-script text-lg sm:text-xl text-[#be3519] font-bold">
                led by her, built for all.
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* Dark Bottom Bar */}
      <div className="bg-[#0d1b2a] py-3.5 px-4 sm:px-6 sm:pr-44 text-white text-xs font-semibold tracking-wider flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 rounded-2xl border-2 border-[#be3519] mb-12 sm:mb-14 shadow-xl z-20">
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:space-x-6 font-mono text-[10px] sm:text-[11px]">
          <a href="#" className="hover:text-[#f49799] transition-colors">Manifesto & Code of Conduct</a>
          <span>|</span>
          <a href="#" className="hover:text-[#f49799] transition-colors">Privacy Policy</a>
        </div>
        <div className="flex items-center space-x-2 text-gray-400 font-mono text-[10px] sm:text-[11px]">
          <img 
            src="/assets/byher_logo_cream.png" 
            alt="byHER icon" 
            className="h-4 sm:h-5 w-auto object-contain opacity-90"
          />
          <span>Built with pride by <span className="text-[#f49799] font-bold">byHER</span></span>
        </div>
      </div>

    </footer>
  );
}
