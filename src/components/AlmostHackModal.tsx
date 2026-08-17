'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Cpu, Code2, Wrench, Trophy, CheckCircle, ArrowRight } from 'lucide-react';

interface AlmostHackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AlmostHackModal({ isOpen, onClose }: AlmostHackModalProps) {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubmitted(true);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          onWheel={(e) => e.stopPropagation()}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#522a25]/60 backdrop-blur-md"
        >
          {/* Backdrop Blur Overlay */}
          <div className="fixed inset-0" onClick={onClose} />

          {/* Modal Card Container */}
          <motion.div
            onWheel={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl h-[85vh] bg-[#dfdac3] border-4 border-[#be3519] rounded-3xl shadow-2xl z-10 flex flex-col my-auto overflow-hidden text-[#522a25]"
          >
            {/* Top Fixed Header */}
            <div className="bg-[#be3519] px-6 py-4 flex items-center justify-between border-b-2 border-[#522a25] flex-shrink-0 z-20">
              <div className="flex items-center gap-2">
                <span className="bg-[#522a25] text-[#ebdcc4] text-[10px] sm:text-xs font-display font-black px-3 py-1 rounded-full uppercase tracking-wider">
                  FEATURED PLATFORM • HACKATHON HOSTING
                </span>
                <span className="hidden sm:inline-block text-[#ebdcc4] font-mono text-xs">◆</span>
                <span className="hidden sm:inline-block font-script text-lg text-[#ebdcc4] font-bold">
                  byHER Labs Flagship
                </span>
              </div>

              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-[#522a25] text-[#ebdcc4] hover:bg-[#ebdcc4] hover:text-[#be3519] transition-colors flex items-center justify-center font-bold text-sm cursor-pointer"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* Scrollable Document Body */}
            <div
              onWheel={(e) => e.stopPropagation()}
              className="p-6 sm:p-8 overflow-y-auto flex-1 modal-scroll-area space-y-6 scrollbar-thin scrollbar-thumb-[#be3519] scrollbar-track-[#dfdac3]"
              style={{
                WebkitOverflowScrolling: 'touch',
              }}
            >
              {/* Modal Body Header */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center mb-8 border-b-2 border-dashed border-[#be3519] pb-6">
                {/* Left Column Graphic (Cols 1-4) */}
                <div className="md:col-span-4 flex flex-col items-center justify-center">
                  <div className="relative w-48 h-44 drop-shadow-xl">
                    <img
                      src="/assets/almosthack_graphic.png"
                      alt="almosthack graphic logo"
                      className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Right Column Title & Tagline (Cols 5-12) */}
                <div className="md:col-span-8 space-y-3 text-center md:text-left">
                  <div className="inline-flex items-center gap-2 bg-[#f49799] border border-[#be3519] px-3 py-0.5 rounded-full text-xs font-bold text-[#be3519] uppercase tracking-wider">
                    <Sparkles size={14} /> Full-Fledged Hackathon Hosting & Management
                  </div>

                  <h2 className="font-display font-black text-3xl sm:text-5xl text-[#be3519] uppercase tracking-tight leading-none">
                    almosthack
                  </h2>

                  <p className="font-script text-2xl text-[#be3519] font-bold">
                    "Where hackathons are built, hosted, judged, and scaled."
                  </p>

                  <p className="font-display font-bold text-xs sm:text-sm text-[#522a25] uppercase tracking-wider leading-relaxed">
                    An end-to-end hackathon hosting ecosystem empowering tech organizers to run live submissions, automated judging rubrics, hardware kit checkouts, multi-stage scoring, and real-time leaderboards.
                  </p>
                </div>
              </div>

              {/* Section Breakdown: 3 Build Tracks */}
              <div className="space-y-4 mb-8">
                <h3 className="font-display font-black text-xl text-[#be3519] uppercase tracking-wider border-b border-dashed border-[#be3519]/40 pb-2">
                  ALMOSTHACK PLATFORM MODULES
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Module 1 */}
                  <div className="bg-[#dfdac3] border-2 border-dashed border-[#be3519] p-4 rounded-2xl space-y-2 hover:border-solid transition-all">
                    <div className="w-10 h-10 rounded-xl bg-[#be3519] text-[#ebdcc4] flex items-center justify-center">
                      <Code2 size={20} />
                    </div>
                    <h4 className="font-display font-black text-sm text-[#be3519] uppercase tracking-wide">
                      1. LIVE SUBMISSION PORTAL
                    </h4>
                    <p className="text-xs font-bold text-[#522a25] leading-normal">
                      Seamless GitHub repo syncing, video demo embeds, circuit schematics uploads, and automated build verifications.
                    </p>
                  </div>

                  {/* Module 2 */}
                  <div className="bg-[#dfdac3] border-2 border-dashed border-[#be3519] p-4 rounded-2xl space-y-2 hover:border-solid transition-all">
                    <div className="w-10 h-10 rounded-xl bg-[#be3519] text-[#ebdcc4] flex items-center justify-center">
                      <Trophy size={20} />
                    </div>
                    <h4 className="font-display font-black text-sm text-[#be3519] uppercase tracking-wide">
                      2. MULTI-ROUND JUDGING
                    </h4>
                    <p className="text-xs font-bold text-[#522a25] leading-normal">
                      Custom rubric weights, blind peer evaluations, mentor feedback loops, and automated leaderboard rankings.
                    </p>
                  </div>

                  {/* Module 3 */}
                  <div className="bg-[#dfdac3] border-2 border-dashed border-[#be3519] p-4 rounded-2xl space-y-2 hover:border-solid transition-all">
                    <div className="w-10 h-10 rounded-xl bg-[#be3519] text-[#ebdcc4] flex items-center justify-center">
                      <Cpu size={20} />
                    </div>
                    <h4 className="font-display font-black text-sm text-[#be3519] uppercase tracking-wide">
                      3. HARDWARE LAB CHECKOUT
                    </h4>
                    <p className="text-xs font-bold text-[#522a25] leading-normal">
                      Real-time inventory tracking for microcontrollers, sensors, soldering stations, and 3D printing queues.
                    </p>
                  </div>
                </div>
              </div>

              {/* Event Timeline & Perks */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Features */}
                <div className="bg-[#f49799]/30 border-2 border-[#be3519] rounded-2xl p-5 space-y-3">
                  <h4 className="font-display font-black text-lg text-[#be3519] uppercase tracking-wider flex items-center gap-2">
                    <span>⚡</span> ORGANIZER CAPABILITIES
                  </h4>
                  <ul className="space-y-2 text-xs font-bold text-[#522a25] font-mono">
                    <li className="flex items-start gap-2">
                      <span className="text-[#be3519]">01</span>
                      <span>Custom event domain & landing page builder</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#be3519]">02</span>
                      <span>Team matchmaking & builder pod assembly</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#be3519]">03</span>
                      <span>Live broadcast & demo day streaming embed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#be3519]">04</span>
                      <span>Instant digital certificate & badge minting</span>
                    </li>
                  </ul>
                </div>

                {/* Perks */}
                <div className="bg-[#ebdcc4]/50 border-2 border-[#be3519] rounded-2xl p-5 space-y-3">
                  <h4 className="font-display font-black text-lg text-[#be3519] uppercase tracking-wider flex items-center gap-2">
                    <Wrench size={18} /> INCLUDED TOOLKITS
                  </h4>
                  <ul className="space-y-2 text-xs font-bold text-[#522a25]">
                    <li className="flex items-center gap-2">
                      <span className="text-[#be3519]">✦</span> Turnkey Hardware Inventory QR Code Tracking
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#be3519]">✦</span> Dedicated Mentor Office Hours Queue System
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#be3519]">✦</span> Automated Sponsor Analytics & Talent Matching
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#be3519]">✦</span> Native Discord & Slack Bot Integrations
                    </li>
                  </ul>
                </div>
              </div>

              {/* Waitlist Registration Form inside Modal */}
              <div className="bg-[#be3519] text-[#ebdcc4] rounded-2xl p-6 shadow-lg border-2 border-[#522a25]">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-center sm:text-left space-y-1">
                    <h4 className="font-display font-black text-xl uppercase tracking-wider text-[#ebdcc4]">
                      HOST YOUR HACKATHON ON ALMOSTHACK
                    </h4>
                    <p className="font-script text-lg text-[#f49799]">
                      Get priority platform access for your campus or community.
                    </p>
                  </div>

                  {isSubmitted ? (
                    <div className="bg-[#dfdac3] text-[#be3519] px-6 py-3 rounded-full font-display font-bold text-sm uppercase tracking-wider flex items-center gap-2 shadow-inner">
                      <CheckCircle size={18} /> YOU'RE ON THE HOSTING WAITLIST! ⚡
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                      <input
                        type="email"
                        required
                        placeholder="Enter organizer email..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-[#dfdac3] text-[#522a25] placeholder:text-[#522a25]/60 px-4 py-2.5 rounded-full font-mono text-xs font-bold border-2 border-[#522a25] focus:outline-none focus:ring-2 focus:ring-[#ebdcc4]"
                      />
                      <button
                        type="submit"
                        className="bg-[#ebdcc4] text-[#be3519] hover:bg-[#dfdac3] px-6 py-2.5 rounded-full font-display font-black text-xs uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
                      >
                        REQUEST HOSTING <ArrowRight size={14} />
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
