'use client';

import { useState } from 'react';
import { Terminal, Paperclip, ArrowRight, Link as LinkIcon, CheckCircle2, Sparkles, Skull, RefreshCw } from 'lucide-react';
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
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#9e4037', '#8f4a48', '#ff8b7d', '#241918'],
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
    <div className="w-full flex-grow p-4 sm:p-6 md:p-10 max-w-[1440px] mx-auto select-none">
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 relative mt-4 md:mt-8">
        
        {/* =======================================================================
            LEFT COLUMN: EDITORIAL & SOLDER ENGINEER IMAGERY
            ======================================================================= */}
        <div className="col-span-1 md:col-span-5 flex flex-col gap-6 items-start relative z-10">
          
          <div className="relative">
            {/* Highlight Tape */}
            <div className="absolute -left-3 -top-2 w-24 h-7 bg-[#8f4a48] rotate-[-4deg] mix-blend-multiply opacity-80 z-0 pointer-events-none"></div>
            <h1 className="font-display-xl text-5xl sm:text-7xl md:text-8xl text-[#241918] uppercase relative z-10 break-words leading-[0.85]">
              Admiss-<br />ion<br />Form
            </h1>
          </div>

          <p className="font-annotation text-base sm:text-lg text-[#241918] max-w-sm border-l-4 border-[#241918] pl-4 leading-relaxed">
            We are looking for builders, breakers, and creators. Fill this out like you mean it. No corporate speak allowed.
          </p>

          {/* Physical Cutout Image Component */}
          <div className="relative mt-4 transform -rotate-2 hover:rotate-0 transition-transform duration-500 w-full max-w-[320px]">
            {/* Shadow Layer */}
            <div className="absolute inset-0 bg-[#241918] translate-x-[8px] translate-y-[8px] cutout-edge z-0"></div>
            
            {/* Image Layer */}
            <div className="relative w-full h-[300px] sm:h-[320px] bg-cover bg-center cutout-edge border-4 border-[#fff8f7] z-10 grayscale contrast-[1.2] overflow-hidden bg-[#e7e2db]">
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
            <div className="absolute -bottom-3 -right-6 bg-[#FEF3C7] px-3.5 py-1.5 shadow-[2px_2px_0px_0px_#241918] rotate-6 z-20 border border-[#241918]/20">
              <span className="font-annotation text-xs sm:text-sm text-[#241918] leading-none block font-bold">
                Required reading ↑
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2 mt-auto pt-6 text-[#8f4a48]">
            <Terminal size={18} />
            <span className="font-label-caps text-xs uppercase font-bold tracking-wider">
              System Ready // Terminal Live
            </span>
          </div>

        </div>

        {/* =======================================================================
            RIGHT COLUMN: THE APPLICATION FORM CARD
            ======================================================================= */}
        <div className="col-span-1 md:col-span-7 relative z-20">
          
          {/* Floating Sticky Note */}
          <div className="absolute -top-8 sm:-top-12 right-2 md:right-10 bg-[#FEF3C7] shadow-[4px_4px_0px_0px_#241918] p-3 md:p-4 rotate-3 z-30 max-w-[190px] border border-[#241918]/20">
            <div className="absolute top-1 left-1/2 -translate-x-1/2 w-8 h-2.5 bg-red-500/20 rotate-[-2deg]"></div>
            <p className="font-annotation text-xs sm:text-sm text-[#241918] leading-tight text-center font-bold">
              Be honest.<br />We can smell BS.
            </p>
          </div>

          {/* Paper Card Form Container */}
          <div className="bg-[#fff8f7] border-2 border-[#8f4a48] shadow-[8px_8px_0px_0px_#241918] relative transform rotate-[0.5deg] w-full">
            
            {/* Paperclip */}
            <div className="absolute top-4 left-4 text-[#615e59] opacity-50 transform rotate-45 pointer-events-none">
              <Paperclip size={28} />
            </div>

            {/* Form Header */}
            <div className="border-b-2 border-[#8f4a48] p-6 md:p-8 pt-10 md:pt-14 bg-[#fff0ef] flex justify-between items-end">
              <div>
                <span className="font-label-caps text-xs text-[#8f4a48] uppercase block mb-1 font-bold">
                  Doc Ref: 001-B
                </span>
                <h2 className="font-headline-lg text-2xl sm:text-4xl text-[#241918] uppercase">
                  Application
                </h2>
              </div>
              
              <div className="w-12 h-12 border-2 border-[#8f4a48] border-dashed flex items-center justify-center opacity-60">
                <span className="font-annotation text-[10px] text-[#8f4a48] font-bold">STAMP</span>
              </div>
            </div>

            {/* Form Body / Success State */}
            <div className="p-6 md:p-8 relative">
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  
                  {/* Row 1: Name & Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col relative group">
                      <label className="font-label-caps text-xs text-[#8f4a48] uppercase mb-1.5 font-bold" htmlFor="name">
                        Full Name / Alias *
                      </label>
                      <input 
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ada Lovelace"
                        className="bg-transparent border-0 border-b-[3px] border-[#241918] focus:border-[#9e4037] px-0 py-1.5 font-body-md text-[#241918] w-full outline-none transition-colors rounded-none placeholder-[#56423f]/40 text-sm"
                      />
                    </div>

                    <div className="flex flex-col relative group">
                      <label className="font-label-caps text-xs text-[#8f4a48] uppercase mb-1.5 font-bold" htmlFor="email">
                        Comms (Email) *
                      </label>
                      <input 
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="signal@domain.com"
                        className="bg-transparent border-0 border-b-[3px] border-[#241918] focus:border-[#9e4037] px-0 py-1.5 font-body-md text-[#241918] w-full outline-none transition-colors rounded-none placeholder-[#56423f]/40 text-sm"
                      />
                    </div>
                  </div>

                  {/* Row 2: What do you like building? */}
                  <div className="flex flex-col relative group">
                    <label className="font-label-caps text-xs text-[#8f4a48] uppercase mb-1.5 font-bold" htmlFor="building">
                      What do you like building? *
                    </label>
                    <textarea 
                      id="building"
                      required
                      rows={2}
                      value={formData.building}
                      onChange={(e) => setFormData({ ...formData, building: e.target.value })}
                      placeholder="Hardware synths, chaotic software, offline meshes, local LLM tooling..."
                      className="bg-[#ffffff] border-2 border-[#241918] focus:border-[#9e4037] p-2.5 font-body-md text-[#241918] w-full outline-none transition-colors rounded-none resize-none shadow-[2px_2px_0px_0px_#241918] text-sm"
                    />
                  </div>

                  {/* Row 3: What are you currently learning? */}
                  <div className="flex flex-col relative group">
                    <label className="font-label-caps text-xs text-[#8f4a48] uppercase mb-1.5 font-bold" htmlFor="learning">
                      What are you currently learning? *
                    </label>
                    <textarea 
                      id="learning"
                      required
                      rows={2}
                      value={formData.learning}
                      onChange={(e) => setFormData({ ...formData, learning: e.target.value })}
                      placeholder="Rust, electronics schematics, custom shader math, WebRTC..."
                      className="bg-[#ffffff] border-2 border-[#241918] focus:border-[#9e4037] p-2.5 font-body-md text-[#241918] w-full outline-none transition-colors rounded-none resize-none shadow-[2px_2px_0px_0px_#241918] text-sm"
                    />
                  </div>

                  {/* Row 4: Show us something you've made */}
                  <div className="flex flex-col relative group">
                    <label className="font-label-caps text-xs text-[#8f4a48] uppercase mb-1.5 flex justify-between items-center font-bold" htmlFor="showus">
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
                      className="bg-transparent border-0 border-b-[3px] border-[#241918] focus:border-[#9e4037] px-0 py-1.5 font-body-md text-[#241918] w-full outline-none transition-colors rounded-none placeholder-[#56423f]/40 text-sm"
                    />
                  </div>

                  {/* Row 5: Why join? */}
                  <div className="flex flex-col relative group">
                    <label className="font-label-caps text-xs text-[#8f4a48] uppercase mb-1.5 flex items-center gap-2 font-bold" htmlFor="whyjoin">
                      <span>Why join?</span>
                      <span className="text-[#56423f]/70 normal-case font-body-md text-xs italic">(Keep it real)</span>
                    </label>
                    <textarea 
                      id="whyjoin"
                      required
                      rows={2}
                      value={formData.whyjoin}
                      onChange={(e) => setFormData({ ...formData, whyjoin: e.target.value })}
                      placeholder="Tired of talking about tech without building it. Want to build and break things alongside other makers."
                      className="bg-[#ffffff] border-2 border-[#241918] focus:border-[#9e4037] p-2.5 font-body-md text-[#241918] w-full outline-none transition-colors rounded-none resize-none shadow-[2px_2px_0px_0px_#241918] text-sm"
                    />
                  </div>

                  {/* Row 6: GitHub / Portfolio */}
                  <div className="flex flex-col relative group">
                    <label className="font-label-caps text-xs text-[#8f4a48] uppercase mb-1.5 font-bold" htmlFor="portfolio">
                      GitHub / Portfolio URL
                    </label>
                    <input 
                      type="url"
                      id="portfolio"
                      value={formData.portfolio}
                      onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                      placeholder="https://github.com/..."
                      className="bg-transparent border-0 border-b-[3px] border-[#241918] focus:border-[#9e4037] px-0 py-1.5 font-body-md text-[#241918] w-full outline-none transition-colors rounded-none placeholder-[#56423f]/40 text-sm"
                    />
                  </div>

                  {/* Submit CTA Button */}
                  <button 
                    type="submit"
                    className="mt-2 bg-[#241918] text-[#fff8f7] font-headline-lg text-2xl sm:text-3xl px-6 py-4 border-2 border-[#241918] shadow-[4px_4px_0px_0px_#8f4a48] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-75 w-full uppercase text-center cursor-pointer flex items-center justify-center gap-3 group"
                  >
                    <span>I&apos;M IN</span>
                    <ArrowRight size={24} className="transition-transform group-hover:translate-x-2" />
                  </button>

                </form>
              ) : (
                /* Success State */
                <div className="flex flex-col items-center justify-center min-h-[380px] text-center gap-4 py-8">
                  <div className="w-20 h-20 rounded-full border-4 border-[#241918] flex items-center justify-center bg-[#8f4a48] text-[#ffffff] shadow-[4px_4px_0px_0px_#241918]">
                    <Skull size={38} />
                  </div>
                  
                  <h2 className="font-display-xl text-3xl sm:text-5xl text-[#241918] uppercase leading-none mt-2">
                    welcome to the chaos.
                  </h2>
                  
                  <p className="font-annotation text-base sm:text-lg text-[#241918] max-w-sm">
                    Signal received for <strong className="text-[#9e4037]">{formData.name || 'Maker'}</strong>. Our collective will review and ping you shortly.
                  </p>
                  
                  <button 
                    onClick={handleReset}
                    className="font-label-caps text-xs uppercase border-b-2 border-[#241918] hover:text-[#8f4a48] hover:border-[#8f4a48] transition-colors mt-6 flex items-center gap-1.5 cursor-pointer"
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
