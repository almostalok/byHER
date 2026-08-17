'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, CheckCircle, GraduationCap, Trophy, Cpu } from 'lucide-react';
import AlmostHackModal from '@/components/AlmostHackModal';
import KloaModal from '@/components/KloaModal';
import { useRetroAudio } from '@/lib/useRetroAudio';
import confetti from 'canvas-confetti';

interface WorkExProps {
  onSelectImage?: (imgUrl: string, title: string) => void;
}

export default function WorkExSection({ onSelectImage }: WorkExProps) {
  const [activeTab, setActiveTab] = useState<'both' | 'almosthack' | 'kloa'>('both');
  const [isAlmostHackModalOpen, setIsAlmostHackModalOpen] = useState(false);
  const [isKloaModalOpen, setIsKloaModalOpen] = useState(false);
  const { playClick, playSuccess } = useRetroAudio();

  // Forms state
  const [almostHackEmail, setAlmostHackEmail] = useState('');
  const [isAlmostHackSubmitted, setIsAlmostHackSubmitted] = useState(false);

  const [kloaEmail, setKloaEmail] = useState('');
  const [isKloaSubmitted, setIsKloaSubmitted] = useState(false);

  const handleAlmostHackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (almostHackEmail.trim()) {
      setIsAlmostHackSubmitted(true);
      playSuccess();
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#be3519', '#ebdcc4', '#f49799'],
      });
    }
  };

  const handleKloaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (kloaEmail.trim()) {
      setIsKloaSubmitted(true);
      playSuccess();
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#be3519', '#ebdcc4', '#522a25'],
      });
    }
  };

  return (
    <section id="projects" className="relative w-screen min-w-[100vw] h-full flex-shrink-0 snap-start snap-always bg-[#dfdac3] border-r-2 border-dashed border-[#be3519]/40 flex flex-col justify-between py-6 px-6 sm:px-12 lg:px-16 overflow-y-auto select-none">
      <div className="max-w-7xl mx-auto w-full space-y-6 lg:space-y-8 my-auto">
        
        {/* Section Header Bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-b-2 border-dashed border-[#be3519] pb-3 gap-3">
          <div className="flex items-center gap-3">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-display font-black text-2xl sm:text-4xl text-[#be3519] uppercase tracking-wider"
            >
              FEATURED PROJECTS
            </motion.h2>

            <span className="hidden sm:inline-block bg-[#be3519] text-[#ebdcc4] text-[10px] sm:text-xs font-display font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              2 FLAGSHIP PLATFORMS
            </span>
          </div>

          {/* Interactive Project Switcher Tabs */}
          <div className="flex items-center gap-1.5 bg-[#dfdac3] border-2 border-dashed border-[#be3519] p-1 rounded-full text-xs font-bold">
            <button
              onClick={() => {
                playClick();
                setActiveTab('both');
              }}
              className={`px-3 py-1 rounded-full transition-all cursor-pointer uppercase tracking-wider text-[11px] ${
                activeTab === 'both'
                  ? 'bg-[#be3519] text-[#ebdcc4] shadow-sm'
                  : 'text-[#522a25] hover:bg-[#be3519]/10'
              }`}
            >
              VIEW BOTH
            </button>

            <button
              onClick={() => {
                playClick();
                setActiveTab('almosthack');
              }}
              className={`px-3 py-1 rounded-full transition-all cursor-pointer uppercase tracking-wider text-[11px] flex items-center gap-1 ${
                activeTab === 'almosthack'
                  ? 'bg-[#be3519] text-[#ebdcc4] shadow-sm'
                  : 'text-[#be3519] hover:bg-[#be3519]/10'
              }`}
            >
              01. ALMOSTHACK ⚡
            </button>

            <button
              onClick={() => {
                playClick();
                setActiveTab('kloa');
              }}
              className={`px-3 py-1 rounded-full transition-all cursor-pointer uppercase tracking-wider text-[11px] flex items-center gap-1 ${
                activeTab === 'kloa'
                  ? 'bg-[#be3519] text-[#ebdcc4] shadow-sm'
                  : 'text-[#be3519] hover:bg-[#be3519]/10'
              }`}
            >
              02. KLOA 🎓
            </button>
          </div>
        </div>

        {/* 2-SECTION FEATURED PROJECTS CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* PROJECT 01: almosthack (Hackathon Hosting Platform) */}
          {(activeTab === 'both' || activeTab === 'almosthack') && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`${
                activeTab === 'both' ? 'lg:col-span-6' : 'lg:col-span-12'
              } bg-[#dfdac3] border-3 border-[#be3519] rounded-3xl p-5 sm:p-6 shadow-xl flex flex-col justify-between space-y-4`}
            >
              {/* Top Card Tag */}
              <div className="flex items-center justify-between border-b border-dashed border-[#be3519]/40 pb-2">
                <span className="font-mono text-xs font-bold text-[#be3519] uppercase tracking-widest flex items-center gap-1.5">
                  <Trophy size={14} /> PROJECT 01 • FLAGSHIP PLATFORM
                </span>
                <span className="bg-[#be3519] text-[#ebdcc4] font-display font-black text-[10px] px-3 py-0.5 rounded-full uppercase tracking-wider">
                  HACKATHON HOSTING
                </span>
              </div>

              {/* Graphic & Title Header */}
              <div className="flex flex-col sm:flex-row items-center gap-4 bg-[#ebdcc4]/40 border-2 border-dashed border-[#be3519] p-4 rounded-2xl">
                {/* Generated Retro Graphic Sticker */}
                <div className="w-28 h-24 flex-shrink-0 drop-shadow-lg">
                  <img 
                    src="/assets/almosthack_graphic.png" 
                    alt="almosthack graphic logo" 
                    className="w-full h-full object-contain transform hover:rotate-3 transition-transform duration-300"
                  />
                </div>

                <div className="space-y-1 text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <h3 className="font-display font-black text-2xl sm:text-3xl text-[#be3519] uppercase tracking-tight">
                      almosthack
                    </h3>
                    <span className="text-xs font-bold bg-[#be3519] text-[#ebdcc4] px-2 py-0.5 rounded-md font-mono">
                      HOSTING HUB
                    </span>
                  </div>

                  <p className="font-script text-xl text-[#be3519] font-bold leading-tight">
                    "Where hackathons are built, hosted, judged, and scaled."
                  </p>

                  <p className="font-display font-bold text-xs text-[#522a25] uppercase tracking-wider">
                    FULL-FLEDGED HACKATHON HOSTING PLATFORM FOR ORGANIZERS & BUILDERS.
                  </p>
                </div>
              </div>

              {/* Feature Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <div className="bg-[#dfdac3] border border-dashed border-[#be3519] p-2 rounded-xl text-center">
                  <span className="font-mono text-[10px] font-bold text-[#be3519] uppercase block">MODULE 01</span>
                  <span className="font-display font-bold text-xs text-[#522a25] uppercase">Live Submissions</span>
                </div>
                <div className="bg-[#dfdac3] border border-dashed border-[#be3519] p-2 rounded-xl text-center">
                  <span className="font-mono text-[10px] font-bold text-[#be3519] uppercase block">MODULE 02</span>
                  <span className="font-display font-bold text-xs text-[#522a25] uppercase">Judging Rubrics</span>
                </div>
                <div className="bg-[#dfdac3] border border-dashed border-[#be3519] p-2 rounded-xl text-center">
                  <span className="font-mono text-[10px] font-bold text-[#be3519] uppercase block">MODULE 03</span>
                  <span className="font-display font-bold text-xs text-[#522a25] uppercase">Hardware Checkouts</span>
                </div>
                <div className="bg-[#dfdac3] border border-dashed border-[#be3519] p-2 rounded-xl text-center">
                  <span className="font-mono text-[10px] font-bold text-[#be3519] uppercase block">MODULE 04</span>
                  <span className="font-display font-bold text-xs text-[#522a25] uppercase">Leaderboards</span>
                </div>
              </div>

              {/* Interactive Waitlist Form */}
              <div className="bg-[#f49799] border-2 border-[#be3519] rounded-2xl p-3 sm:p-4">
                {isAlmostHackSubmitted ? (
                  <div className="bg-[#dfdac3] text-[#be3519] p-2.5 rounded-xl font-display font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 border border-[#be3519]">
                    <CheckCircle size={16} /> REGISTERED FOR ALMOSTHACK HOSTING ACCESS! ⚡
                  </div>
                ) : (
                  <form onSubmit={handleAlmostHackSubmit} className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="email"
                      required
                      placeholder="Enter organizer email..."
                      value={almostHackEmail}
                      onChange={(e) => setAlmostHackEmail(e.target.value)}
                      className="flex-1 bg-[#dfdac3] text-[#522a25] placeholder:text-[#522a25]/60 px-3.5 py-2 rounded-xl font-mono text-xs font-bold border border-[#be3519] focus:outline-none focus:ring-2 focus:ring-[#be3519]"
                    />
                    <button
                      type="submit"
                      className="bg-[#be3519] hover:bg-[#522a25] text-[#ebdcc4] px-4 py-2 rounded-xl font-display font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1 cursor-pointer whitespace-nowrap"
                    >
                      JOIN WAITLIST <ArrowRight size={14} />
                    </button>
                  </form>
                )}
              </div>

              {/* Action Trigger Modal Button */}
              <button
                onClick={() => {
                  playClick();
                  setIsAlmostHackModalOpen(true);
                }}
                className="w-full bg-[#be3519] hover:bg-[#522a25] text-[#ebdcc4] py-2.5 px-4 rounded-xl font-display font-black text-xs sm:text-sm uppercase tracking-widest shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Cpu size={16} /> PREVIEW ALMOSTHACK HOSTING SPECS ➔
              </button>
            </motion.div>
          )}


          {/* PROJECT 02: kloa (Campus Student Performance Tracking Platform) */}
          {(activeTab === 'both' || activeTab === 'kloa') && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`${
                activeTab === 'both' ? 'lg:col-span-6' : 'lg:col-span-12'
              } bg-[#dfdac3] border-3 border-[#be3519] rounded-3xl p-5 sm:p-6 shadow-xl flex flex-col justify-between space-y-4`}
            >
              {/* Top Card Tag */}
              <div className="flex items-center justify-between border-b border-dashed border-[#be3519]/40 pb-2">
                <span className="font-mono text-xs font-bold text-[#be3519] uppercase tracking-widest flex items-center gap-1.5">
                  <GraduationCap size={14} /> PROJECT 02 • CAMPUS PLATFORM
                </span>
                <span className="bg-[#f49799] text-[#be3519] font-display font-black text-[10px] px-3 py-0.5 rounded-full uppercase tracking-wider border border-[#be3519]">
                  STUDENT TRACKING
                </span>
              </div>

              {/* Graphic & Title Header */}
              <div className="flex flex-col sm:flex-row items-center gap-4 bg-[#ebdcc4]/40 border-2 border-dashed border-[#be3519] p-4 rounded-2xl">
                {/* Generated Retro Graphic Sticker */}
                <div className="w-28 h-24 flex-shrink-0 drop-shadow-lg">
                  <img 
                    src="/assets/kloa_graphic.png" 
                    alt="kloa graphic logo" 
                    className="w-full h-full object-contain transform hover:-rotate-3 transition-transform duration-300"
                  />
                </div>

                <div className="space-y-1 text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <h3 className="font-display font-black text-2xl sm:text-3xl text-[#be3519] uppercase tracking-tight">
                      kloa
                    </h3>
                    <span className="text-xs font-bold bg-[#be3519] text-[#ebdcc4] px-2 py-0.5 rounded-md font-mono">
                      CAMPUS HUD
                    </span>
                  </div>

                  <p className="font-script text-xl text-[#be3519] font-bold leading-tight">
                    "Empowering campuses to track & elevate student growth."
                  </p>

                  <p className="font-display font-bold text-xs text-[#522a25] uppercase tracking-wider">
                    CAMPUS ANALYTICS PLATFORM TO TRACK EVERY STUDENT PERFORMANCE.
                  </p>
                </div>
              </div>

              {/* Feature Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <div className="bg-[#dfdac3] border border-dashed border-[#be3519] p-2 rounded-xl text-center">
                  <span className="font-mono text-[10px] font-bold text-[#be3519] uppercase block">MODULE 01</span>
                  <span className="font-display font-bold text-xs text-[#522a25] uppercase">360° Analytics</span>
                </div>
                <div className="bg-[#dfdac3] border border-dashed border-[#be3519] p-2 rounded-xl text-center">
                  <span className="font-mono text-[10px] font-bold text-[#be3519] uppercase block">MODULE 02</span>
                  <span className="font-display font-bold text-xs text-[#522a25] uppercase">Faculty HUD</span>
                </div>
                <div className="bg-[#dfdac3] border border-dashed border-[#be3519] p-2 rounded-xl text-center">
                  <span className="font-mono text-[10px] font-bold text-[#be3519] uppercase block">MODULE 03</span>
                  <span className="font-display font-bold text-xs text-[#522a25] uppercase">Skill Matrix</span>
                </div>
                <div className="bg-[#dfdac3] border border-dashed border-[#be3519] p-2 rounded-xl text-center">
                  <span className="font-mono text-[10px] font-bold text-[#be3519] uppercase block">MODULE 04</span>
                  <span className="font-display font-bold text-xs text-[#522a25] uppercase">Career Matching</span>
                </div>
              </div>

              {/* Interactive Demo Request Form */}
              <div className="bg-[#ebdcc4] border-2 border-[#be3519] rounded-2xl p-3 sm:p-4">
                {isKloaSubmitted ? (
                  <div className="bg-[#dfdac3] text-[#be3519] p-2.5 rounded-xl font-display font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 border border-[#be3519]">
                    <CheckCircle size={16} /> CAMPUS DEMO REQUEST RECEIVED! 🎓
                  </div>
                ) : (
                  <form onSubmit={handleKloaSubmit} className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="email"
                      required
                      placeholder="Enter campus / college email..."
                      value={kloaEmail}
                      onChange={(e) => setKloaEmail(e.target.value)}
                      className="flex-1 bg-[#dfdac3] text-[#522a25] placeholder:text-[#522a25]/60 px-3.5 py-2 rounded-xl font-mono text-xs font-bold border border-[#be3519] focus:outline-none focus:ring-2 focus:ring-[#be3519]"
                    />
                    <button
                      type="submit"
                      className="bg-[#be3519] hover:bg-[#522a25] text-[#ebdcc4] px-4 py-2 rounded-xl font-display font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1 cursor-pointer whitespace-nowrap"
                    >
                      REQUEST DEMO <ArrowRight size={14} />
                    </button>
                  </form>
                )}
              </div>

              {/* Action Trigger Modal Button */}
              <button
                onClick={() => {
                  playClick();
                  setIsKloaModalOpen(true);
                }}
                className="w-full bg-[#be3519] hover:bg-[#522a25] text-[#ebdcc4] py-2.5 px-4 rounded-xl font-display font-black text-xs sm:text-sm uppercase tracking-widest shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <GraduationCap size={16} /> PREVIEW KLOA CAMPUS SPECS ➔
              </button>
            </motion.div>
          )}

        </div>

      </div>

      {/* AlmostHack Full Details Modal */}
      <AlmostHackModal
        isOpen={isAlmostHackModalOpen}
        onClose={() => setIsAlmostHackModalOpen(false)}
      />

      {/* Kloa Full Details Modal */}
      <KloaModal
        isOpen={isKloaModalOpen}
        onClose={() => setIsKloaModalOpen(false)}
      />
    </section>
  );
}
