'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText, CheckCircle2, ShieldCheck, Bookmark } from 'lucide-react';

interface HowWeBuildModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HowWeBuildModal({ isOpen, onClose }: HowWeBuildModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          onWheel={(e) => e.stopPropagation()}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-[#522a25]/65 backdrop-blur-md"
        >
          {/* Backdrop Click Overlay */}
          <div className="fixed inset-0" onClick={onClose} />

          {/* Document Sheet Card Container */}
          <motion.div
            onWheel={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl h-[85vh] bg-[#f9f6ef] border-4 border-[#be3519] rounded-2xl shadow-2xl z-10 flex flex-col my-auto overflow-hidden"
            style={{
              backgroundImage: 'radial-gradient(#be3519 0.4px, transparent 0.4px)',
              backgroundSize: '16px 16px',
              backgroundColor: '#fbf9f4',
            }}
          >
            {/* Top Fixed Window Header */}
            <div className="bg-[#be3519] text-[#ebdcc4] px-5 py-3 flex items-center justify-between border-b-2 border-[#522a25] flex-shrink-0 z-20">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold bg-[#522a25] text-[#ebdcc4] px-2.5 py-0.5 rounded uppercase tracking-widest">
                  DOCUMENT SPECIFICATION
                </span>
                <span className="font-mono text-xs font-bold text-[#ebdcc4]">
                  DOC-ID: BYHER-0-TO-1-HANDBOOK
                </span>
              </div>

              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-[#522a25] text-[#ebdcc4] hover:bg-[#ebdcc4] hover:text-[#be3519] transition-colors flex items-center justify-center font-bold text-sm cursor-pointer"
                aria-label="Close document"
              >
                <X size={18} />
              </button>
            </div>

            {/* REAL PAPER DOCUMENT CANVAS — FORCED SCROLL VIEWPORT WITH INVISIBLE SCROLLBAR */}
            <div 
              onWheel={(e) => e.stopPropagation()}
              className="p-4 sm:p-8 md:p-10 overflow-y-scroll flex-1 space-y-8 touch-pan-y modal-scroll-area no-scrollbar"
              style={{
                WebkitOverflowScrolling: 'touch',
                msOverflowStyle: 'none',
                scrollbarWidth: 'none',
              }}
            >
              <div className="bg-[#fffdf9] border-2 border-[#522a25]/30 rounded-xl p-6 sm:p-10 shadow-lg space-y-8 relative">
                
                {/* Retro Official Watermark Stamp */}
                <div className="absolute top-8 right-8 pointer-events-none opacity-20 transform rotate-12 select-none">
                  <div className="border-4 border-dashed border-[#be3519] p-3 rounded-xl text-center">
                    <span className="font-display font-black text-2xl text-[#be3519] uppercase tracking-widest block">
                      APPROVED SPEC
                    </span>
                    <span className="font-mono text-[10px] font-bold text-[#be3519] block">
                      byHER LABS OFFICIAL
                    </span>
                  </div>
                </div>

                {/* Document Header Section */}
                <div className="border-b-2 border-[#be3519] pb-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#be3519] text-[#ebdcc4] flex items-center justify-center font-bold flex-shrink-0">
                      <FileText size={22} />
                    </div>
                    <div>
                      <span className="font-mono text-xs font-bold text-[#be3519] uppercase tracking-widest">
                        OFFICIAL METHODOLOGY HANDBOOK
                      </span>
                      <h1 className="font-display font-black text-2xl sm:text-4xl text-[#be3519] uppercase tracking-tight leading-none">
                        byHER 0-TO-1 BUILD PROCESS & SPECIFICATIONS
                      </h1>
                    </div>
                  </div>

                  {/* Metadata Grid Table */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#f5f0e6] p-3 rounded-lg border border-[#be3519]/30 font-mono text-xs">
                    <div>
                      <span className="text-[#be3519] font-bold block text-[10px]">AUTHOR</span>
                      <span className="font-bold text-[#522a25]">byHER Collective</span>
                    </div>
                    <div>
                      <span className="text-[#be3519] font-bold block text-[10px]">CLASSIFICATION</span>
                      <span className="font-bold text-[#522a25]">Public Engineering Spec</span>
                    </div>
                    <div>
                      <span className="text-[#be3519] font-bold block text-[10px]">VERSION</span>
                      <span className="font-bold text-[#522a25]">v2.4 (2025 Edition)</span>
                    </div>
                    <div>
                      <span className="text-[#be3519] font-bold block text-[10px]">STATUS</span>
                      <span className="font-bold text-[#be3519] flex items-center gap-1">
                        <ShieldCheck size={12} /> VERIFIED
                      </span>
                    </div>
                  </div>
                </div>

                {/* EXECUTIVE SUMMARY / MANIFESTO PREAMBLE */}
                <div className="space-y-3 bg-[#fdfbf7] p-4 rounded-xl border-l-4 border-[#be3519]">
                  <h3 className="font-display font-black text-base text-[#be3519] uppercase tracking-wider flex items-center gap-2">
                    <Bookmark size={16} /> EXECUTIVE SUMMARY & MANIFESTO
                  </h3>
                  <p className="font-serif text-sm text-[#4a2e2b] leading-relaxed italic">
                    "byHER is an organization dedicated to women building software and hardware products from zero to one. We bridge the gap between raw hardware components and production software code through collaborative build pods, rapid prototyping, and real-world deployment."
                  </p>
                </div>

                {/* SECTION 1: DETAILED 4-PHASE BUILD FLOWCHART */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-[#be3519]/30 pb-2">
                    <h3 className="font-display font-black text-lg text-[#be3519] uppercase tracking-wider">
                      SECTION 1: THE 0-TO-1 ENGINEERING PIPELINE
                    </h3>
                    <span className="font-mono text-xs text-[#be3519] font-bold">4 STAGES</span>
                  </div>

                  {/* VISUAL FLOWCHART GRAPH */}
                  <div className="bg-[#be3519] text-[#ebdcc4] p-5 rounded-xl space-y-4 shadow-md">
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#f49799] block text-center">
                      COMPLETE SYSTEM EXECUTION FLOWCHART
                    </span>

                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-center">
                      {/* Node 1 */}
                      <div className="bg-[#f9f6ef] text-[#522a25] p-3 rounded-lg border border-[#ebdcc4]">
                        <span className="font-mono text-[10px] font-bold text-[#be3519] block">STAGE 01</span>
                        <span className="font-display font-black text-xs uppercase block">IDEATE & SCOPE</span>
                        <span className="font-serif text-[10px] text-[#4a2e2b] block mt-1">BOM & Feasibility</span>
                      </div>

                      {/* Node 2 */}
                      <div className="bg-[#f9f6ef] text-[#522a25] p-3 rounded-lg border border-[#ebdcc4]">
                        <span className="font-mono text-[10px] font-bold text-[#be3519] block">STAGE 02</span>
                        <span className="font-display font-black text-xs uppercase block">PROTOTYPE & WIRE</span>
                        <span className="font-serif text-[10px] text-[#4a2e2b] block mt-1">Breadboards & UI</span>
                      </div>

                      {/* Node 3 */}
                      <div className="bg-[#f9f6ef] text-[#522a25] p-3 rounded-lg border border-[#ebdcc4]">
                        <span className="font-mono text-[10px] font-bold text-[#be3519] block">STAGE 03</span>
                        <span className="font-display font-black text-xs uppercase block">SOLDER & INTEGRATE</span>
                        <span className="font-serif text-[10px] text-[#4a2e2b] block mt-1">PCBs & WebSockets</span>
                      </div>

                      {/* Node 4 */}
                      <div className="bg-[#f9f6ef] text-[#522a25] p-3 rounded-lg border border-[#ebdcc4]">
                        <span className="font-mono text-[10px] font-bold text-[#be3519] block">STAGE 04</span>
                        <span className="font-display font-black text-xs uppercase block">SHIP & NETWORK</span>
                        <span className="font-serif text-[10px] text-[#4a2e2b] block mt-1">Demo Day & GitHub</span>
                      </div>
                    </div>
                  </div>

                  {/* DETAILED PHASE DESCRIPTIONS */}
                  <div className="space-y-6 pt-2">
                    
                    {/* Phase 1 */}
                    <div className="border border-[#be3519]/40 p-4 rounded-xl space-y-3 bg-[#fdfbf7]">
                      <div className="flex items-center justify-between border-b border-[#be3519]/20 pb-2">
                        <h4 className="font-display font-black text-base text-[#be3519] uppercase">
                          1.0 PHASE 01 — IDEATION & PROBLEM SCOPING
                        </h4>
                        <span className="font-mono text-xs text-[#be3519] font-bold">WEEK 1</span>
                      </div>
                      <p className="font-serif text-sm text-[#4a2e2b] leading-relaxed">
                        Every project starts with defining a specific physical or digital friction point. Engineering leads and makers select microcontrollers (ESP32, STM32, Raspberry Pi), list required sensors/actuators, and establish the system architecture document.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                        <div className="flex items-center gap-1.5 text-[#522a25]">
                          <CheckCircle2 size={14} className="text-[#be3519]" /> Component Bill of Materials (BOM)
                        </div>
                        <div className="flex items-center gap-1.5 text-[#522a25]">
                          <CheckCircle2 size={14} className="text-[#be3519]" /> Hardware vs. Software Split
                        </div>
                      </div>
                    </div>

                    {/* Phase 2 */}
                    <div className="border border-[#be3519]/40 p-4 rounded-xl space-y-3 bg-[#fdfbf7]">
                      <div className="flex items-center justify-between border-b border-[#be3519]/20 pb-2">
                        <h4 className="font-display font-black text-base text-[#be3519] uppercase">
                          2.0 PHASE 02 — RAPID BREADBOARDING & UI WIREFRAMING
                        </h4>
                        <span className="font-mono text-xs text-[#be3519] font-bold">WEEKS 2 - 3</span>
                      </div>
                      <p className="font-serif text-sm text-[#4a2e2b] leading-relaxed">
                        Before manufacturing PCBs, circuit designs are validated on physical breadboards using MicroPython/C++. Simultaneously, software developers build Next.js frontend wireframes and CAD designers model physical enclosures.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                        <div className="flex items-center gap-1.5 text-[#522a25]">
                          <CheckCircle2 size={14} className="text-[#be3519]" /> Breadboard Serial Telemetry Test
                        </div>
                        <div className="flex items-center gap-1.5 text-[#522a25]">
                          <CheckCircle2 size={14} className="text-[#be3519]" /> Figma UI Wireframes & CAD Files
                        </div>
                      </div>
                    </div>

                    {/* Phase 3 */}
                    <div className="border border-[#be3519]/40 p-4 rounded-xl space-y-3 bg-[#fdfbf7]">
                      <div className="flex items-center justify-between border-b border-[#be3519]/20 pb-2">
                        <h4 className="font-display font-black text-base text-[#be3519] uppercase">
                          3.0 PHASE 03 — PCB SOLDERING & FULLSTACK INTEGRATION
                        </h4>
                        <span className="font-mono text-xs text-[#be3519] font-bold">WEEKS 4 - 5</span>
                      </div>
                      <p className="font-serif text-sm text-[#4a2e2b] leading-relaxed">
                        Custom PCB circuit boards are soldered in the lab. Real-time telemetry is streamed over WebSockets to fullstack web dashboards, and 3D printed enclosures are fitted to house internal electronics safely.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                        <div className="flex items-center gap-1.5 text-[#522a25]">
                          <CheckCircle2 size={14} className="text-[#be3519]" /> SMD/THT Soldering & Continuity Test
                        </div>
                        <div className="flex items-center gap-1.5 text-[#522a25]">
                          <CheckCircle2 size={14} className="text-[#be3519]" /> Real-time WebSocket Telemetry APIs
                        </div>
                      </div>
                    </div>

                    {/* Phase 4 */}
                    <div className="border border-[#be3519]/40 p-4 rounded-xl space-y-3 bg-[#fdfbf7]">
                      <div className="flex items-center justify-between border-b border-[#be3519]/20 pb-2">
                        <h4 className="font-display font-black text-base text-[#be3519] uppercase">
                          4.0 PHASE 04 — SHIP, DEMO DAY & RECRUITER PLACEMENT
                        </h4>
                        <span className="font-mono text-xs text-[#be3519] font-bold">WEEK 6</span>
                      </div>
                      <p className="font-serif text-sm text-[#4a2e2b] leading-relaxed">
                        Projects are demonstrated live at byHER Demo Day, deployed to campus pilots, published under open-source GitHub repositories, and presented to top tech hiring partners.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                        <div className="flex items-center gap-1.5 text-[#522a25]">
                          <CheckCircle2 size={14} className="text-[#be3519]" /> Live Demo Day Pitch Presentation
                        </div>
                        <div className="flex items-center gap-1.5 text-[#522a25]">
                          <CheckCircle2 size={14} className="text-[#be3519]" /> Open Source GitHub Repository Release
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                {/* SECTION 2: STANDARDS & CODE CONVENTIONS */}
                <div className="space-y-4 pt-4 border-t border-[#be3519]/30">
                  <h3 className="font-display font-black text-lg text-[#be3519] uppercase tracking-wider">
                    SECTION 2: HARDWARE & SOFTWARE COMPLIANCE STANDARDS
                  </h3>

                  <div className="bg-[#f5f0e6] p-4 rounded-xl space-y-2 text-xs font-mono border border-[#be3519]/20">
                    <div className="flex items-start gap-2">
                      <span className="text-[#be3519] font-bold">STD-01:</span>
                      <span>All microcontrollers must include failsafe hardware watchdog timers.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#be3519] font-bold">STD-02:</span>
                      <span>Frontend applications must maintain 60FPS UI rendering and full offline fallback caching.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#be3519] font-bold">STD-03:</span>
                      <span>All open-source repositories must include complete wiring schematics and pinout diagrams.</span>
                    </div>
                  </div>
                </div>

                {/* OFFICIAL SIGNATURE BLOCK */}
                <div className="pt-6 border-t-2 border-[#be3519] flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="space-y-1 text-center sm:text-left">
                    <span className="font-mono text-[10px] font-bold text-[#be3519] uppercase tracking-widest block">
                      DOCUMENT RATIFICATION
                    </span>
                    <p className="font-script text-2xl text-[#be3519] font-bold">
                      byHER Founders & Engineering Collective
                    </p>
                    <p className="font-mono text-xs text-[#522a25]">
                      Est. 2025 • Hardware & Software Zero to One
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
