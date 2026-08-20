'use client';

import { useState } from 'react';
import { Terminal, Paperclip, ArrowRight, Link as LinkIcon, CheckCircle2, Sparkles, Skull, RefreshCw, Pin } from 'lucide-react';
import { useRetroAudio } from '@/lib/useRetroAudio';
import confetti from 'canvas-confetti';

interface JoinSectionProps {
  onNavigate?: (sectionId: string) => void;
}

export default function JoinSection({ onNavigate }: JoinSectionProps) {
  const { playClick, playQuack } = useRetroAudio();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    building: '',
    learning: '',
    showus: '',
    whyjoin: '',
    portfolio: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playQuack();
    confetti({
      particleCount: 100,
      spread: 75,
      origin: { y: 0.6 },
      colors: ['#ea580c', '#ec4899', '#3b82f6', '#eab308', '#22c55e'],
    });
    setIsSubmitted(true);
  };

  const handleReset = () => {
    playClick();
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      building: '',
      learning: '',
      showus: '',
      whyjoin: '',
      portfolio: '',
    });
  };

  return (
    <div className="w-full flex-grow p-4 sm:p-6 md:p-10 max-w-[1440px] mx-auto select-none overflow-hidden">
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 relative mt-2 md:mt-6">
        
        {/* =======================================================================
            LEFT COLUMN: EDITORIAL & SOLDER ENGINEER IMAGERY
            ======================================================================= */}
        <div className="col-span-1 md:col-span-5 flex flex-col gap-5 sm:gap-6 items-start relative z-10">
          
          <div className="relative">
            {/* Bright Highlight Tape */}
            <div className="absolute -left-2 -top-1.5 w-24 sm:w-28 h-7 sm:h-8 bg-[#ea580c] rotate-[-4deg] opacity-85 z-0 pointer-events-none rounded-xs"></div>
            <h1 className="font-display-xl text-4xl sm:text-7xl md:text-8xl text-[#1c1917] uppercase relative z-10 break-words leading-[0.85] drop-shadow-xs">
              Admiss-<br />ion<br />Form
            </h1>
          </div>

          <p className="font-annotation text-sm sm:text-base md:text-lg text-[#1c1917] max-w-sm border-l-4 border-[#ea580c] pl-3 sm:pl-4 leading-relaxed font-bold">
            We are looking for builders, breakers, and creators. Fill this out like you mean it. No corporate speak allowed.
          </p>

          {/* Physical Cutout Image Component */}
          <div className="relative mt-2 sm:mt-4 transform -rotate-1 sm:-rotate-2 hover:rotate-0 transition-transform duration-500 w-full max-w-[280px] sm:max-w-[320px]">
            {/* Shadow Layer */}
            <div className="absolute inset-0 bg-[#1c1917] translate-x-[6px] translate-y-[6px] sm:translate-x-[8px] sm:translate-y-[8px] cutout-edge z-0"></div>
            
            {/* Image Layer */}
            <div className="relative w-full h-[250px] sm:h-[320px] bg-cover bg-center cutout-edge border-4 border-[#ffffff] z-10 grayscale contrast-[1.2] overflow-hidden bg-[#fed7aa]">
              <img 
                src="/assets/stitch/join_engineer.png" 
                alt="Female engineer soldering hardware sculpture" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/assets/about_portrait.png';
                }}
              />
            </div>

            {/* Handwritten Note on Image */}
            <div className="absolute -bottom-2 -right-3 sm:-bottom-3 sm:-right-6 bg-[#fef08a] px-3 sm:px-4 py-1 sm:py-1.5 shadow-[3px_3px_0px_0px_#1c1917] rotate-6 z-20 border-2 border-[#1c1917]">
              <span className="font-annotation text-xs sm:text-sm text-[#854d0e] leading-none block font-black">
                Required reading ↑
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2 mt-auto pt-6 text-[#ea580c]">
            <Terminal size={20} />
            <span className="font-label-caps text-xs uppercase font-black tracking-wider">
              System Ready // Terminal Live
            </span>
          </div>

        </div>

        {/* =======================================================================
            RIGHT COLUMN: THE APPLICATION FORM CARD
            ======================================================================= */}
        <div className="col-span-1 md:col-span-7 relative z-20 mt-4 md:mt-0">
          
          {/* Floating Sticky Note */}
          <div className="absolute -top-6 sm:-top-10 right-2 sm:right-6 md:right-10 bg-[#fef08a] shadow-[3px_3px_0px_0px_#1c1917] sm:shadow-[4px_4px_0px_0px_#1c1917] p-2.5 sm:p-4 rotate-3 z-30 max-w-[170px] sm:max-w-[200px] border-2 border-[#1c1917]">
            <div className="absolute -top-2.5 left-3 text-[#dc2626]">
              <Pin size={16} className="fill-[#dc2626] text-[#1c1917]" />
            </div>
            <p className="font-annotation text-xs sm:text-sm text-[#854d0e] leading-tight text-center font-black">
              Be honest.<br />We can smell BS.
            </p>
          </div>

          {/* Paper Card Form Container */}
          <div className="bg-[#ffffff] border-3 border-[#1c1917] shadow-[6px_6px_0px_0px_#1c1917] sm:shadow-[8px_8px_0px_0px_#1c1917] relative transform rotate-[0.2deg] w-full">
            
            {/* Paperclip */}
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 text-[#ea580c] opacity-80 transform rotate-45 pointer-events-none">
              <Paperclip size={26} />
            </div>

            {/* Form Header */}
            <div className="border-b-3 border-[#1c1917] p-5 sm:p-8 pt-8 sm:pt-14 bg-[#fff7ed] flex justify-between items-end">
              <div>
                <span className="font-label-caps text-[11px] sm:text-xs text-[#ea580c] uppercase block mb-0.5 sm:mb-1 font-black">
                  Doc Ref: 001-B
                </span>
                <h2 className="font-headline-lg text-xl sm:text-4xl text-[#1c1917] uppercase font-black">
                  Application
                </h2>
              </div>
              
              <div className="w-11 h-11 sm:w-14 sm:h-14 border-2 border-[#ea580c] border-dashed flex items-center justify-center bg-[#ffedd5]">
                <span className="font-annotation text-[10px] sm:text-xs text-[#ea580c] font-black">STAMP</span>
              </div>
            </div>

            {/* Form Body / Success State */}
            <div className="p-4 sm:p-8 relative bg-[#ffffff]">
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-6">
                  
                  {/* Row 1: Name & Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div className="flex flex-col relative group">
                      <label className="font-label-caps text-xs text-[#ea580c] uppercase mb-1 font-black" htmlFor="name">
                        Full Name / Alias *
                      </label>
                      <input 
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ada Lovelace"
                        className="bg-[#fffaf5] border-2 border-[#1c1917] focus:border-[#ea580c] px-3 py-2.5 font-body-md text-[#1c1917] w-full outline-none transition-colors rounded-none placeholder-[#78716c] text-base sm:text-sm font-semibold shadow-xs"
                      />
                    </div>

                    <div className="flex flex-col relative group">
                      <label className="font-label-caps text-xs text-[#ea580c] uppercase mb-1 font-black" htmlFor="email">
                        Comms (Email) *
                      </label>
                      <input 
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="signal@domain.com"
                        className="bg-[#fffaf5] border-2 border-[#1c1917] focus:border-[#ea580c] px-3 py-2.5 font-body-md text-[#1c1917] w-full outline-none transition-colors rounded-none placeholder-[#78716c] text-base sm:text-sm font-semibold shadow-xs"
                      />
                    </div>
                  </div>

                  {/* Row 2: What do you like building? */}
                  <div className="flex flex-col relative group">
                    <label className="font-label-caps text-xs text-[#ea580c] uppercase mb-1 font-black" htmlFor="building">
                      What do you like building? *
                    </label>
                    <textarea 
                      id="building"
                      required
                      rows={2}
                      value={formData.building}
                      onChange={(e) => setFormData({ ...formData, building: e.target.value })}
                      placeholder="Hardware synths, chaotic software, offline meshes, local LLM tooling..."
                      className="bg-[#fffaf5] border-2 border-[#1c1917] focus:border-[#ea580c] p-3 font-body-md text-[#1c1917] w-full outline-none transition-colors rounded-none resize-none shadow-[2px_2px_0px_0px_#1c1917] text-base sm:text-sm font-semibold"
                    />
                  </div>

                  {/* Row 3: What are you currently learning? */}
                  <div className="flex flex-col relative group">
                    <label className="font-label-caps text-xs text-[#ea580c] uppercase mb-1 font-black" htmlFor="learning">
                      What are you currently learning? *
                    </label>
                    <textarea 
                      id="learning"
                      required
                      rows={2}
                      value={formData.learning}
                      onChange={(e) => setFormData({ ...formData, learning: e.target.value })}
                      placeholder="Rust, electronics schematics, custom shader math, WebRTC..."
                      className="bg-[#fffaf5] border-2 border-[#1c1917] focus:border-[#ea580c] p-3 font-body-md text-[#1c1917] w-full outline-none transition-colors rounded-none resize-none shadow-[2px_2px_0px_0px_#1c1917] text-base sm:text-sm font-semibold"
                    />
                  </div>

                  {/* Row 4: Show us something you've made */}
                  <div className="flex flex-col relative group">
                    <label className="font-label-caps text-xs text-[#ea580c] uppercase mb-1 flex justify-between items-center font-black" htmlFor="showus">
                      <span>Show us something you&apos;ve made (URL) *</span>
                      <LinkIcon size={14} />
                    </label>
                    <input 
                      type="url"
                      id="showus"
                      required
                      value={formData.showus}
                      onChange={(e) => setFormData({ ...formData, showus: e.target.value })}
                      placeholder="https://github.com/... or https://..."
                      className="bg-[#fffaf5] border-2 border-[#1c1917] focus:border-[#ea580c] px-3 py-2.5 font-body-md text-[#1c1917] w-full outline-none transition-colors rounded-none placeholder-[#78716c] text-base sm:text-sm font-semibold shadow-xs"
                    />
                  </div>

                  {/* Row 5: Why join? */}
                  <div className="flex flex-col relative group">
                    <label className="font-label-caps text-xs text-[#ea580c] uppercase mb-1 flex items-center gap-2 font-black" htmlFor="whyjoin">
                      <span>Why join?</span>
                      <span className="text-[#78716c] normal-case font-body-md text-xs italic">(Keep it real)</span>
                    </label>
                    <textarea 
                      id="whyjoin"
                      required
                      rows={2}
                      value={formData.whyjoin}
                      onChange={(e) => setFormData({ ...formData, whyjoin: e.target.value })}
                      placeholder="Tired of talking about tech without building it. Want to build and break things alongside other makers."
                      className="bg-[#fffaf5] border-2 border-[#1c1917] focus:border-[#ea580c] p-3 font-body-md text-[#1c1917] w-full outline-none transition-colors rounded-none resize-none shadow-[2px_2px_0px_0px_#1c1917] text-base sm:text-sm font-semibold"
                    />
                  </div>

                  {/* Row 6: GitHub / Portfolio */}
                  <div className="flex flex-col relative group">
                    <label className="font-label-caps text-xs text-[#ea580c] uppercase mb-1 font-black" htmlFor="portfolio">
                      GitHub / Portfolio URL
                    </label>
                    <input 
                      type="url"
                      id="portfolio"
                      value={formData.portfolio}
                      onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                      placeholder="https://github.com/..."
                      className="bg-[#fffaf5] border-2 border-[#1c1917] focus:border-[#ea580c] px-3 py-2.5 font-body-md text-[#1c1917] w-full outline-none transition-colors rounded-none placeholder-[#78716c] text-base sm:text-sm font-semibold shadow-xs"
                    />
                  </div>

                  {/* Submit CTA Button */}
                  <button 
                    type="submit"
                    className="mt-2 bg-[#ea580c] hover:bg-[#c2410c] text-[#ffffff] font-headline-lg text-xl sm:text-3xl px-5 py-3.5 sm:px-6 sm:py-4 border-3 border-[#1c1917] shadow-[3px_3px_0px_0px_#1c1917] sm:shadow-[4px_4px_0px_0px_#1c1917] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-75 w-full uppercase text-center cursor-pointer flex items-center justify-center gap-2.5 group font-black"
                  >
                    <span>I&apos;M IN</span>
                    <ArrowRight size={22} className="transition-transform group-hover:translate-x-2" />
                  </button>

                </form>
              ) : (
                /* Success State */
                <div className="flex flex-col items-center justify-center min-h-[320px] sm:min-h-[380px] text-center gap-3 sm:gap-4 py-6 sm:py-8">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border-3 border-[#1c1917] flex items-center justify-center bg-[#ea580c] text-[#ffffff] shadow-[3px_3px_0px_0px_#1c1917]">
                    <Skull size={34} />
                  </div>
                  
                  <h2 className="font-display-xl text-2xl sm:text-5xl text-[#1c1917] uppercase leading-none mt-2 font-black">
                    welcome to the chaos.
                  </h2>
                  
                  <p className="font-annotation text-sm sm:text-lg text-[#1c1917] max-w-sm font-bold">
                    Signal received for <strong className="text-[#ea580c] bg-[#ffedd5] px-1 rounded">{formData.name || 'Maker'}</strong>. Our collective will review and ping you shortly.
                  </p>
                  
                  <button 
                    onClick={handleReset}
                    className="font-label-caps text-xs uppercase border-b-2 border-[#1c1917] hover:text-[#ea580c] hover:border-[#ea580c] transition-colors mt-4 sm:mt-6 flex items-center gap-1.5 cursor-pointer font-black"
                  >
                    <RefreshCw size={14} />
                    <span>Reset Terminal</span>
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
