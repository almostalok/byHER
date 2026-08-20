'use client';

import { Pin, Terminal, Coffee, Lightbulb, Gavel, Edit3, Users, Sparkles, Heart } from 'lucide-react';
import { useRetroAudio } from '@/lib/useRetroAudio';

const CORE_MEMBERS = [
  {
    id: 'nikita',
    name: 'Nikita',
    role: 'Web3 & Decentralized Mesh Networks',
    tag: 'Maker #01',
    note: 'runs nodes on solar power',
    image: '/assets/hero_portrait_7.png',
    tilt: 'rotate-[-1.2deg]',
    cardBg: 'bg-[#fdf2f8]',
    tagBg: 'bg-[#fed7e2] text-[#9d174d]',
    borderColor: 'border-[#db2777]',
    textColor: 'text-[#9d174d]',
  },
  {
    id: 'parul',
    name: 'Parul',
    role: 'Full-Stack & Hardware / Core Hacker',
    tag: 'Maker #02',
    note: 'builds IoT rigs at 3AM',
    image: '/assets/hero_portrait_1.png',
    tilt: 'rotate-[1.5deg]',
    cardBg: 'bg-[#fffbeb]',
    tagBg: 'bg-[#fef08a] text-[#854d0e]',
    borderColor: 'border-[#ca8a04]',
    textColor: 'text-[#854d0e]',
  },
  {
    id: 'kritika',
    name: 'Kritika',
    role: 'Systems & Backend / Protocol Engineer',
    tag: 'Maker #03',
    note: 'recursively breaks things',
    image: '/assets/hero_portrait_2.png',
    tilt: 'rotate-[-2deg]',
    cardBg: 'bg-[#f0f9ff]',
    tagBg: 'bg-[#bae6fd] text-[#0369a1]',
    borderColor: 'border-[#0284c7]',
    textColor: 'text-[#0369a1]',
  },
  {
    id: 'prachi',
    name: 'Prachi',
    role: 'Frontend Architect & Creative Tech',
    tag: 'Maker #04',
    note: 'pixel-perfect shader enthusiast',
    image: '/assets/hero_portrait_3.png',
    tilt: 'rotate-[1.8deg]',
    cardBg: 'bg-[#f0fdf4]',
    tagBg: 'bg-[#bbf7d0] text-[#15803d]',
    borderColor: 'border-[#16a34a]',
    textColor: 'text-[#15803d]',
  },
  {
    id: 'anu',
    name: 'Anu',
    role: 'Embedded Systems & Firmware',
    tag: 'Maker #05',
    note: 'solders faster than she types',
    image: '/assets/hero_portrait_4.png',
    tilt: 'rotate-[-1.5deg]',
    cardBg: 'bg-[#fff7ed]',
    tagBg: 'bg-[#fed7aa] text-[#9a3412]',
    borderColor: 'border-[#ea580c]',
    textColor: 'text-[#9a3412]',
  },
  {
    id: 'nidhi',
    name: 'Nidhi',
    role: 'AI & Data Tools / Research',
    tag: 'Maker #06',
    note: 'training local models on laptops',
    image: '/assets/hero_portrait_5.png',
    tilt: 'rotate-[2deg]',
    cardBg: 'bg-[#fff1f2]',
    tagBg: 'bg-[#fecdd3] text-[#be123c]',
    borderColor: 'border-[#e11d48]',
    textColor: 'text-[#be123c]',
  },
  {
    id: 'madhuri',
    name: 'Madhuri',
    role: 'Product Strategy & Distributed Systems',
    tag: 'Maker #07',
    note: 'shipping zero to one',
    image: '/assets/hero_portrait_6.png',
    tilt: 'rotate-[-1.8deg]',
    cardBg: 'bg-[#f5f3ff]',
    tagBg: 'bg-[#ddd6fe] text-[#6d28d9]',
    borderColor: 'border-[#7c3aed]',
    textColor: 'text-[#6d28d9]',
  },
];

interface WrappedSectionProps {
  onSelectImage?: (imgUrl: string, title: string) => void;
}

export default function WrappedSection({ onSelectImage }: WrappedSectionProps) {
  const { playClick } = useRetroAudio();

  return (
    <div className="w-full flex-grow p-4 sm:p-6 md:p-10 flex flex-col gap-12 sm:gap-16 md:gap-24 max-w-[1400px] mx-auto select-none overflow-hidden">
      
      {/* =========================================================================
          COMMUNITY WALL HEADER (NON-OVERLAPPING FLEX LAYOUT)
          ========================================================================= */}
      <header className="relative z-10 border-b-4 border-[#1c1917] pb-4 sm:pb-6 mb-4 mt-2 md:mt-6 flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
        <div>
          <h2 className="font-display-xl text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-[#1c1917] tracking-tighter uppercase leading-none mix-blend-multiply">
            Community<br />Wall
          </h2>
        </div>
        
        {/* Floating Post-It Note (Cleanly position beside header, no overlap) */}
        <div className="handwritten-note p-3 sm:p-4 rotate-2 z-20 max-w-[240px] bg-[#fef08a] border-2 border-[#1c1917] hard-shadow-xs relative self-start md:self-auto mb-1">
          <div className="absolute -top-2.5 -left-2.5 sm:-top-3 sm:-left-3 text-[#1c1917]">
            <Pin size={18} className="fill-[#dc2626] text-[#1c1917]" />
          </div>
          <p className="font-annotation text-xs sm:text-sm text-[#854d0e] italic leading-tight font-black">
            &ldquo;A collective of builders, breakers, and thinkers.&rdquo;
          </p>
        </div>
      </header>

      {/* =========================================================================
          CORE 7 MEMBERS GRID (NIKITA AS MAKER #01)
          ========================================================================= */}
      <section className="relative">
        <div className="flex items-center gap-2.5 sm:gap-3 mb-6 sm:mb-8 border-b-3 border-dashed border-[#ea580c] pb-2.5 sm:pb-3">
          <Users size={26} className="text-[#ea580c]" />
          <h3 className="font-headline-lg text-xl sm:text-3xl text-[#1c1917] uppercase font-black">
            The Makers Collective ({CORE_MEMBERS.length})
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10">
          {CORE_MEMBERS.map((member) => (
            <div 
              key={member.id}
              className="relative group flex flex-col cursor-pointer"
              onClick={() => {
                playClick();
                onSelectImage?.(member.image, `${member.name} - ${member.role}`);
              }}
            >
              {/* Image Frame with Cutout & Multi-color Borders */}
              <div className={`relative z-10 transition-all duration-300 transform group-hover:scale-105 group-hover:rotate-0 ${member.tilt}`}>
                <div className={`w-full h-72 sm:h-80 ${member.cardBg} cutout-image border-3 border-[#1c1917] overflow-hidden hard-shadow`}>
                  <img 
                    src={member.image} 
                    alt={`${member.name} portrait`}
                    className="w-full h-full object-cover object-top filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/assets/about_portrait.png';
                    }}
                  />
                </div>

                {/* Handwritten Sticky Tag with Unique Accent Colors */}
                <div className={`handwritten-note absolute -bottom-4 sm:-bottom-5 -right-2 sm:-right-3 p-3 sm:p-3.5 z-20 w-44 sm:w-54 border-2 border-[#1c1917] hard-shadow-xs ${member.tagBg} transform rotate-2`}>
                  <div className="flex items-center justify-between">
                    <p className={`font-annotation text-base sm:text-xl font-black leading-tight ${member.textColor}`}>
                      {member.name}
                    </p>
                    <span className="font-label-caps text-[8px] sm:text-[9px] bg-[#1c1917] text-[#ffffff] px-1.5 py-0.5 uppercase font-black">
                      {member.tag}
                    </span>
                  </div>
                  <p className="font-label-caps text-[10px] sm:text-[11px] text-[#1c1917] mt-0.5 sm:mt-1 font-bold">
                    {member.role}
                  </p>
                  <p className="font-annotation text-[11px] sm:text-xs text-[#44403c] mt-0.5 sm:mt-1 italic leading-tight font-semibold">
                    &ldquo;{member.note}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION: THE VIBE (COLORFUL THEMED CARDS)
          ========================================================================= */}
      <section className="mt-4 sm:mt-8 pt-8 sm:pt-12 border-t-4 border-[#1c1917] relative">
        <h3 className="font-display-xl text-2xl sm:text-4xl md:text-5xl text-[#ea580c] tracking-tighter uppercase absolute -top-[18px] sm:-top-[24px] md:-top-[28px] bg-[#fffaf5] px-3 sm:px-4 font-black">
          The Vibe
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mt-4 sm:mt-6">
          
          {/* Vibe 1: Debugging */}
          <div className="paper-card p-4 sm:p-5 relative rotate-1 bg-[#f0f9ff] border-3 border-[#1c1917] hard-shadow">
            <div className="absolute top-3 right-3 text-[#0284c7]">
              <Terminal size={20} />
            </div>
            <div className="w-full h-40 sm:h-48 mb-3 border-2 border-[#1c1917] overflow-hidden bg-[#e0f2fe]">
              <img 
                src="/assets/stitch/vibe_debugging.png" 
                alt="Mechanical keyboard in dark room" 
                className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/assets/camera_graphic.png';
                }}
              />
            </div>
            <p className="font-label-caps text-xs uppercase text-[#0369a1] font-black">
              01. Debugging
            </p>
            <p className="font-annotation text-xs sm:text-sm italic text-[#334155] mt-1 font-bold">
              &ldquo;Why is it undefined?&rdquo;
            </p>
          </div>

          {/* Vibe 2: Fuel */}
          <div className="paper-card p-4 sm:p-5 relative -rotate-1 mt-1 sm:mt-2 md:mt-10 bg-[#fffbeb] border-3 border-[#1c1917] hard-shadow">
            <div className="absolute top-3 right-3 text-[#d97706]">
              <Coffee size={20} />
            </div>
            <div className="w-full h-40 sm:h-48 mb-3 border-2 border-[#1c1917] overflow-hidden bg-[#fef3c7]">
              <img 
                src="/assets/stitch/vibe_fuel.png" 
                alt="Pouring dark coffee into mug" 
                className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/assets/content_work_bench.png';
                }}
              />
            </div>
            <p className="font-label-caps text-xs uppercase text-[#b45309] font-black">
              02. Fuel
            </p>
            <p className="font-annotation text-xs sm:text-sm italic text-[#78350f] mt-1 font-bold">
              Ritualistic consumption.
            </p>
          </div>

          {/* Vibe 3: The Spark */}
          <div className="paper-card p-4 sm:p-5 relative rotate-2 mt-1 sm:mt-2 md:mt-4 bg-[#fefce8] border-3 border-[#1c1917] hard-shadow">
            <div className="absolute top-3 right-3 text-[#ca8a04]">
              <Lightbulb size={20} />
            </div>
            <div className="w-full h-40 sm:h-48 mb-3 border-2 border-[#1c1917] overflow-hidden bg-[#fef08a]/50">
              <img 
                src="/assets/stitch/vibe_spark.png" 
                alt="Mid-sentence revelation halftone portrait" 
                className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/assets/megaphone_graphic.png';
                }}
              />
            </div>
            <p className="font-label-caps text-xs uppercase text-[#854d0e] font-black">
              03. The Spark
            </p>
            <p className="font-annotation text-xs sm:text-sm italic text-[#713f12] mt-1 font-bold">
              &ldquo;Wait... I have an idea.&rdquo;
            </p>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION: THE RULES
          ========================================================================= */}
      <section className="mt-6 sm:mt-8 p-4 sm:p-8 md:p-12 paper-card relative max-w-4xl mx-auto w-full rotate-[-0.5deg] bg-[#ffffff] border-3 border-[#1c1917] hard-shadow">
        
        {/* Gavel Badge */}
        <div className="absolute -top-4 -left-3 sm:-top-5 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 bg-[#ea580c] shadow-[2px_2px_0px_0px_#1c1917] sm:shadow-[3px_3px_0px_0px_#1c1917] flex items-center justify-center rotate-6 border-2 border-[#1c1917] text-[#ffffff]">
          <Gavel size={20} />
        </div>

        <h3 className="font-display-xl text-3xl sm:text-5xl text-[#1c1917] tracking-tighter uppercase border-b-4 border-[#1c1917] pb-2 sm:pb-3 mb-4 sm:mb-6 font-black">
          The Rules
        </h3>

        <ol className="space-y-3 sm:space-y-4 font-annotation text-sm sm:text-lg md:text-xl text-[#1c1917]">
          <li className="pl-2 sm:pl-3 border-l-4 sm:border-l-5 border-[#ea580c] ml-1 p-1.5 sm:p-2 bg-[#ffedd5] font-bold">
            1. Don&apos;t be an asshole. Seriously.
          </li>
          <li className="pl-2 sm:pl-3 border-l-4 sm:border-l-5 border-[#0284c7] ml-1 p-1.5 sm:p-2 bg-[#e0f2fe] font-bold">
            2. Ask stupid questions. They often lead to smart answers.
          </li>
          <li className="pl-2 sm:pl-3 border-l-4 sm:border-l-5 border-[#16a34a] ml-1 p-1.5 sm:p-2 bg-[#dcfce7] font-bold">
            3. Share your broken code, not just your wins.
          </li>
          <li className="pl-2 sm:pl-3 border-l-4 sm:border-l-5 border-[#7c3aed] ml-1 p-1.5 sm:p-2 bg-[#ede9fe] font-bold">
            4. Credit ideas aggressively.
          </li>
          <li className="pl-2 sm:pl-3 border-l-4 sm:border-l-5 border-[#ca8a04] ml-1 p-1.5 sm:p-2 bg-[#fef9c3] font-bold">
            5. Touch grass occasionally.
          </li>
          <li className="pl-2 sm:pl-3 border-l-4 sm:border-l-5 border-[#94a3b8] ml-1 p-1.5 sm:p-2 relative text-[#64748b] line-through bg-[#f1f5f9]">
            6. Maintain a rigid sleep schedule.
            
            <div className="handwritten-note absolute -top-7 -right-1 sm:-top-8 sm:right-8 p-2 sm:p-3 rotate-3 z-20 w-40 sm:w-48 border-2 border-[#1c1917] shadow-md bg-[#fef08a] not-italic text-[#854d0e]">
              <Edit3 size={12} className="text-[#ea580c] absolute top-1 right-1" />
              <p className="font-annotation text-[10px] sm:text-xs italic leading-tight block mt-0.5 sm:mt-1 font-bold">
                &ldquo;we&apos;re still working on #6... deployment night ruined this.&rdquo;
              </p>
            </div>
          </li>
        </ol>

      </section>

    </div>
  );
}
