'use client';

import { Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactFooter() {
  return (
    <footer id="contact" className="relative w-screen min-w-[100vw] h-full flex-shrink-0 snap-start snap-always bg-[#f49799] flex flex-col justify-between pt-8 pb-3 px-6 sm:px-12 lg:px-16 overflow-y-auto select-none border-r-2 border-dashed border-[#be3519]/40">
      
      {/* Main Contact Links Container */}
      <div className="max-w-7xl mx-auto w-full my-auto space-y-8">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
          
          {/* Social Links List */}
          <div className="space-y-6 text-left w-full lg:w-auto">
            
            {/* Instagram Link */}
            <motion.a 
              whileHover={{ x: 8 }}
              href="https://www.instagram.com/byher.build" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-4 group"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-[#522a25] group-hover:bg-[#be3519] transition-colors p-2 shadow-lg">
                <img 
                  src="/assets/icon_insta.png" 
                  alt="Instagram" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-script text-3xl sm:text-4xl text-[#522a25] group-hover:text-[#be3519] font-bold underline underline-offset-4 transition-colors">
                @byher.build
              </span>
            </motion.a>

            {/* LinkedIn Link */}
            <motion.a 
              whileHover={{ x: 8 }}
              href="https://linkedin.com/company/byher-collective" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-4 group"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-[#522a25] group-hover:bg-[#be3519] transition-colors p-2 shadow-lg">
                <img 
                  src="/assets/icon_linkedin.png" 
                  alt="LinkedIn" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-script text-3xl sm:text-4xl text-[#522a25] group-hover:text-[#be3519] font-bold underline underline-offset-4 transition-colors">
                byHER Collective
              </span>
            </motion.a>

            {/* Email Link */}
            <motion.a 
              whileHover={{ x: 8 }}
              href="mailto:hello@byher.org" 
              className="flex items-center space-x-4 group"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-[#522a25] text-[#ebdcc4] group-hover:bg-[#be3519] transition-colors p-2 shadow-lg">
                <Mail size={24} />
              </div>
              <span className="font-script text-2xl sm:text-3xl text-[#522a25] group-hover:text-[#be3519] font-bold underline underline-offset-4 transition-colors break-all sm:break-normal">
                hello@byher.org
              </span>
            </motion.a>

          </div>

          {/* Right Side: Mascot and Tagline badge */}
          <div className="flex flex-col items-center space-y-4">
            <motion.div 
              animate={{ y: [-6, 6, -6], rotate: [-4, 4, -4] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-36 h-36 sm:w-44 sm:h-44 drop-shadow-2xl"
            >
              <img 
                src="/assets/mascot_duck.png" 
                alt="Mascot Duck Footer" 
                className="w-full h-full object-contain"
              />
            </motion.div>

            <div className="bg-[#dfdac3] border-2 border-dashed border-[#be3519] rounded-full px-6 py-2 shadow-md">
              <p className="font-script text-xl text-[#be3519] font-bold">
                led by her, built for all.
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* Dark Bottom Bar */}
      <div className="bg-[#0d1b2a] py-4 px-6 text-white text-xs font-semibold tracking-wider flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-6">
          <a href="#" className="hover:text-[#f49799] transition-colors">Manifesto & Code of Conduct</a>
          <span>|</span>
          <a href="#" className="hover:text-[#f49799] transition-colors">Privacy Policy</a>
        </div>
        <div className="flex items-center space-x-2 text-gray-400">
          <img 
            src="/assets/byher_logo_cream.png" 
            alt="byHER icon" 
            className="h-5 w-auto object-contain opacity-90"
          />
          <span>Built with pride by the <span className="text-[#f49799] font-bold">byHER</span> Collective</span>
        </div>
      </div>

    </footer>
  );
}
