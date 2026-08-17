'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, GraduationCap, BarChart3, Users, Award, CheckCircle, ArrowRight } from 'lucide-react';

interface KloaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function KloaModal({ isOpen, onClose }: KloaModalProps) {
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
                  FEATURED PLATFORM • CAMPUS ANALYTICS
                </span>
                <span className="hidden sm:inline-block text-[#ebdcc4] font-mono text-xs">◆</span>
                <span className="hidden sm:inline-block font-script text-lg text-[#ebdcc4] font-bold">
                  byHER Labs Platform
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
                      src="/assets/kloa_graphic.png"
                      alt="kloa graphic logo"
                      className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Right Column Title & Tagline (Cols 5-12) */}
                <div className="md:col-span-8 space-y-3 text-center md:text-left">
                  <div className="inline-flex items-center gap-2 bg-[#f49799] border border-[#be3519] px-3 py-0.5 rounded-full text-xs font-bold text-[#be3519] uppercase tracking-wider">
                    <GraduationCap size={14} /> Campus Student Performance & Growth Intelligence
                  </div>

                  <h2 className="font-display font-black text-3xl sm:text-5xl text-[#be3519] uppercase tracking-tight leading-none">
                    kloa
                  </h2>

                  <p className="font-script text-2xl text-[#be3519] font-bold">
                    "Empowering campuses to track, analyze, and elevate every student's growth."
                  </p>

                  <p className="font-display font-bold text-xs sm:text-sm text-[#522a25] uppercase tracking-wider leading-relaxed">
                    A centralized institutional analytics engine giving universities, engineering colleges, and coding bootcamps total visibility into student project builds, academic milestones, skill mastery, and career readiness.
                  </p>
                </div>
              </div>

              {/* Section Breakdown: 3 Core Pillars */}
              <div className="space-y-4 mb-8">
                <h3 className="font-display font-black text-xl text-[#be3519] uppercase tracking-wider border-b border-dashed border-[#be3519]/40 pb-2">
                  KLOA PLATFORM MODULES
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Module 1 */}
                  <div className="bg-[#dfdac3] border-2 border-dashed border-[#be3519] p-4 rounded-2xl space-y-2 hover:border-solid transition-all">
                    <div className="w-10 h-10 rounded-xl bg-[#be3519] text-[#ebdcc4] flex items-center justify-center">
                      <BarChart3 size={20} />
                    </div>
                    <h4 className="font-display font-black text-sm text-[#be3519] uppercase tracking-wide">
                      1. 360° STUDENT DASHBOARD
                    </h4>
                    <p className="text-xs font-bold text-[#522a25] leading-normal">
                      Track real-time GPA, project shipping velocity, GitHub activity, lab attendance, and assignment completion rates.
                    </p>
                  </div>

                  {/* Module 2 */}
                  <div className="bg-[#dfdac3] border-2 border-dashed border-[#be3519] p-4 rounded-2xl space-y-2 hover:border-solid transition-all">
                    <div className="w-10 h-10 rounded-xl bg-[#be3519] text-[#ebdcc4] flex items-center justify-center">
                      <Users size={20} />
                    </div>
                    <h4 className="font-display font-black text-sm text-[#be3519] uppercase tracking-wide">
                      2. FACULTY & MENTOR HUD
                    </h4>
                    <p className="text-xs font-bold text-[#522a25] leading-normal">
                      AI-powered early warning signals for struggling students, cohort comparisons, and personalized intervention workflows.
                    </p>
                  </div>

                  {/* Module 3 */}
                  <div className="bg-[#dfdac3] border-2 border-dashed border-[#be3519] p-4 rounded-2xl space-y-2 hover:border-solid transition-all">
                    <div className="w-10 h-10 rounded-xl bg-[#be3519] text-[#ebdcc4] flex items-center justify-center">
                      <Award size={20} />
                    </div>
                    <h4 className="font-display font-black text-sm text-[#be3519] uppercase tracking-wide">
                      3. SKILL MATRIX & RECRUITING
                    </h4>
                    <p className="text-xs font-bold text-[#522a25] leading-normal">
                      Verified skill badges, verified project portfolios, and direct automated matching with top tier campus tech recruiters.
                    </p>
                  </div>
                </div>
              </div>

              {/* Platform Features & Campus Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Features */}
                <div className="bg-[#f49799]/30 border-2 border-[#be3519] rounded-2xl p-5 space-y-3">
                  <h4 className="font-display font-black text-lg text-[#be3519] uppercase tracking-wider flex items-center gap-2">
                    <span>📊</span> KEY KLOA FEATURES
                  </h4>
                  <ul className="space-y-2 text-xs font-bold text-[#522a25] font-mono">
                    <li className="flex items-start gap-2">
                      <span className="text-[#be3519]">◆</span>
                      <span>Real-time GitHub & Figma submission syncing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#be3519]">◆</span>
                      <span>Automated plagiarism & project authenticity checks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#be3519]">◆</span>
                      <span>Custom rubrics for hackathons, labs, and term projects</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#be3519]">◆</span>
                      <span>Multi-campus cohort leaderboard & peer recognition</span>
                    </li>
                  </ul>
                </div>

                {/* Campus Benefits */}
                <div className="bg-[#ebdcc4]/50 border-2 border-[#be3519] rounded-2xl p-5 space-y-3">
                  <h4 className="font-display font-black text-lg text-[#be3519] uppercase tracking-wider flex items-center gap-2">
                    <Sparkles size={18} /> INSTITUTIONAL VALUE
                  </h4>
                  <ul className="space-y-2 text-xs font-bold text-[#522a25]">
                    <li className="flex items-center gap-2">
                      <span className="text-[#be3519]">✦</span> 40% Increase in On-Time Student Project Submissions
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#be3519]">✦</span> Unified Faculty & Student Communication Loop
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#be3519]">✦</span> Exportable Verified Student Transcripts & Portfolios
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#be3519]">✦</span> Turnkey Integration with Canvas, Moodle & Google Classroom
                    </li>
                  </ul>
                </div>
              </div>

              {/* Campus Demo Request Form inside Modal */}
              <div className="bg-[#be3519] text-[#ebdcc4] rounded-2xl p-6 shadow-lg border-2 border-[#522a25]">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-center sm:text-left space-y-1">
                    <h4 className="font-display font-black text-xl uppercase tracking-wider text-[#ebdcc4]">
                      REQUEST KLOA FOR YOUR CAMPUS
                    </h4>
                    <p className="font-script text-lg text-[#f49799]">
                      Get an institutional pilot setup for your university or lab.
                    </p>
                  </div>

                  {isSubmitted ? (
                    <div className="bg-[#dfdac3] text-[#be3519] px-6 py-3 rounded-full font-display font-bold text-sm uppercase tracking-wider flex items-center gap-2 shadow-inner">
                      <CheckCircle size={18} /> DEMO REQUEST RECEIVED! 🎓
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                      <input
                        type="email"
                        required
                        placeholder="Enter campus / work email..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-[#dfdac3] text-[#522a25] placeholder:text-[#522a25]/60 px-4 py-2.5 rounded-full font-mono text-xs font-bold border-2 border-[#522a25] focus:outline-none focus:ring-2 focus:ring-[#ebdcc4]"
                      />
                      <button
                        type="submit"
                        className="bg-[#ebdcc4] text-[#be3519] hover:bg-[#dfdac3] px-6 py-2.5 rounded-full font-display font-black text-xs uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
                      >
                        REQUEST DEMO <ArrowRight size={14} />
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
