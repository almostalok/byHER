'use client';

import { Pin, Terminal, Coffee, Lightbulb, Gavel, Edit3, Users } from 'lucide-react';
import { useRetroAudio } from '@/lib/useRetroAudio';

const CORE_MEMBERS = [
  {
    id: 'parul',
    name: 'Parul',
    role: 'Full-Stack & Hardware / Core Hacker',
    tag: 'Maker #01',
    note: 'builds IoT rigs at 3AM',
    image: '/assets/hero_portrait_1.png',
    tilt: 'rotate-[-1.5deg]',
    noteBg: 'bg-[#FEF3C7]',
    border: 'border-[#9e4037]',
  },
  {
    id: 'kritika',
    name: 'Kritika',
    role: 'Systems & Backend / Protocol Engineer',
    tag: 'Maker #02',
    note: 'recursively breaks things',
    image: '/assets/hero_portrait_2.png',
    tilt: 'rotate-[2deg]',
    noteBg: 'bg-[#fae3e2]',
    border: 'border-[#8f4a48]',
  },
  {
    id: 'prachi',
    name: 'Prachi',
    role: 'Frontend Architect & Creative Tech',
    tag: 'Maker #03',
    note: 'pixel-perfect shader enthusiast',
    image: '/assets/hero_portrait_3.png',
    tilt: 'rotate-[-2deg]',
    noteBg: 'bg-[#FEF3C7]',
    border: 'border-[#241918]',
  },
  {
    id: 'anu',
    name: 'Anu',
    role: 'Embedded Systems & Firmware',
    tag: 'Maker #04',
    note: 'solders faster than she types',
    image: '/assets/hero_portrait_4.png',
    tilt: 'rotate-[1.5deg]',
    noteBg: 'bg-[#e7e2db]',
    border: 'border-[#9e4037]',
  },
  {
    id: 'nidhi',
    name: 'Nidhi',
    role: 'AI & Data Tools / Research',
    tag: 'Maker #05',
    note: 'training local models on laptops',
    image: '/assets/hero_portrait_5.png',
    tilt: 'rotate-[-2.5deg]',
    noteBg: 'bg-[#FEF3C7]',
    border: 'border-[#8f4a48]',
  },
  {
    id: 'madhuri',
    name: 'Madhuri',
    role: 'Product Strategy & Distributed Systems',
    tag: 'Maker #06',
    note: 'shipping zero to one',
    image: '/assets/hero_portrait_6.png',
    tilt: 'rotate-[1.8deg]',
    noteBg: 'bg-[#fae3e2]',
    border: 'border-[#241918]',
  },
  {
    id: 'nikita',
    name: 'Nikita',
    role: 'Web3 & Decentralized Mesh Networks',
    tag: 'Maker #07',
    note: 'runs nodes on solar power',
    image: '/assets/hero_portrait_7.png',
    tilt: 'rotate-[-1.2deg]',
    noteBg: 'bg-[#FEF3C7]',
    border: 'border-[#9e4037]',
  },
];

interface WrappedSectionProps {
  onSelectImage?: (imgUrl: string, title: string) => void;
}

export default function WrappedSection({ onSelectImage }: WrappedSectionProps) {
  const { playClick } = useRetroAudio();

  return (
    <div className="w-full flex-grow p-4 sm:p-6 md:p-10 flex flex-col gap-16 md:gap-24 max-w-[1400px] mx-auto select-none">
      
      {/* =========================================================================
          COMMUNITY WALL HEADER
          ========================================================================= */}
      <header className="relative z-10 border-b-4 border-[#241918] pb-6 mb-4 mt-4 md:mt-8">
        <h2 className="font-display-xl text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-[#241918] tracking-tighter uppercase leading-none mix-blend-multiply">
          Community<br />Wall
        </h2>
        
        {/* Floating Post-It Note */}
        <div className="handwritten-note absolute top-0 right-0 md:right-8 p-3 md:p-4 rotate-3 z-20 max-w-[220px] shadow-md border border-[#241918]/20">
          <div className="absolute -top-3 -left-3 text-[#8f4a48]">
            <Pin size={20} className="fill-[#8f4a48] text-[#241918]" />
          </div>
          <p className="font-annotation text-xs sm:text-sm text-[#56423f] italic leading-tight">
            &ldquo;A collective of builders, breakers, and thinkers.&rdquo;
          </p>
        </div>
      </header>

      {/* =========================================================================
          CORE 7 MEMBERS GRID (CUTOUT PHOTOS & HANDWRITTEN ZINE NOTES)
          ========================================================================= */}
      <section className="relative">
        <div className="flex items-center gap-3 mb-8 border-b-2 border-dashed border-[#8f4a48] pb-3">
          <Users size={28} className="text-[#9e4037]" />
          <h3 className="font-headline-lg text-2xl sm:text-3xl text-[#241918] uppercase">
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
              {/* Image Frame with Cutout & Border */}
              <div className={`relative z-10 transition-all duration-300 transform group-hover:scale-105 group-hover:rotate-0 ${member.tilt}`}>
                <div className={`w-full h-80 bg-[#e7e2db] cutout-image border-2 ${member.border} overflow-hidden hard-shadow-sm`}>
                  <img 
                    src={member.image} 
                    alt={`${member.name} portrait`}
                    className="w-full h-full object-cover object-top filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/assets/about_portrait.png';
                    }}
                  />
                </div>

                {/* Handwritten Sticky Tag */}
                <div className={`handwritten-note absolute -bottom-5 -right-3 p-3 z-20 w-48 sm:w-52 border-2 border-[#241918] shadow-md ${member.noteBg} transform rotate-2`}>
                  <div className="flex items-center justify-between">
                    <p className="font-annotation text-base sm:text-lg text-[#9e4037] font-bold leading-tight">
                      {member.name}
                    </p>
                    <span className="font-label-caps text-[9px] bg-[#241918] text-[#ffffff] px-1.5 py-0.5 uppercase">
                      {member.tag}
                    </span>
                  </div>
                  <p className="font-label-caps text-[11px] text-[#241918] mt-1 font-bold">
                    {member.role}
                  </p>
                  <p className="font-annotation text-xs text-[#56423f] mt-1 italic leading-tight">
                    &ldquo;{member.note}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION: THE VIBE
          ========================================================================= */}
      <section className="mt-8 pt-12 border-t-[6px] md:border-t-[8px] border-[#8f4a48] relative">
        <h3 className="font-display-xl text-3xl sm:text-4xl md:text-5xl text-[#8f4a48] tracking-tighter uppercase absolute -top-[24px] md:-top-[28px] bg-[#fff8f7] px-4">
          The Vibe
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          
          {/* Vibe 1: Debugging */}
          <div className="paper-card p-4 relative rotate-1 bg-[#FFF9F2] border-2 border-[#8f4a48] hard-shadow">
            <div className="absolute top-2 right-2 text-[#56423f] opacity-60">
              <Terminal size={20} />
            </div>
            <div className="w-full h-48 mb-3 border-2 border-[#241918] overflow-hidden bg-black/10">
              <img 
                src="/assets/stitch/vibe_debugging.png" 
                alt="Mechanical keyboard in dark room" 
                className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/assets/camera_graphic.png';
                }}
              />
            </div>
            <p className="font-label-caps text-xs uppercase text-[#241918] font-bold">
              01. Debugging
            </p>
            <p className="font-annotation text-sm italic text-[#56423f] mt-1">
              &ldquo;Why is it undefined?&rdquo;
            </p>
          </div>

          {/* Vibe 2: Fuel */}
          <div className="paper-card p-4 relative -rotate-1 mt-2 md:mt-10 bg-[#fae3e2] border-2 border-[#241918] hard-shadow">
            <div className="absolute top-2 right-2 text-[#56423f] opacity-60">
              <Coffee size={20} />
            </div>
            <div className="w-full h-48 mb-3 border-2 border-[#241918] overflow-hidden bg-black/10">
              <img 
                src="/assets/stitch/vibe_fuel.png" 
                alt="Pouring dark coffee into mug" 
                className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/assets/content_work_bench.png';
                }}
              />
            </div>
            <p className="font-label-caps text-xs uppercase text-[#241918] font-bold">
              02. Fuel
            </p>
            <p className="font-annotation text-sm italic text-[#56423f] mt-1">
              Ritualistic consumption.
            </p>
          </div>

          {/* Vibe 3: The Spark */}
          <div className="paper-card p-4 relative rotate-2 mt-2 md:mt-4 bg-[#FFF9F2] border-2 border-[#8f4a48] hard-shadow">
            <div className="absolute top-2 right-2 text-[#56423f] opacity-60">
              <Lightbulb size={20} />
            </div>
            <div className="w-full h-48 mb-3 border-2 border-[#241918] overflow-hidden bg-black/10">
              <img 
                src="/assets/stitch/vibe_spark.png" 
                alt="Mid-sentence revelation halftone portrait" 
                className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/assets/megaphone_graphic.png';
                }}
              />
            </div>
            <p className="font-label-caps text-xs uppercase text-[#241918] font-bold">
              03. The Spark
            </p>
            <p className="font-annotation text-sm italic text-[#56423f] mt-1">
              &ldquo;Wait... I have an idea.&rdquo;
            </p>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION: THE RULES
          ========================================================================= */}
      <section className="mt-8 p-6 md:p-12 paper-card relative max-w-4xl mx-auto w-full rotate-[-0.5deg] bg-[#FFF9F2] border-2 border-[#8f4a48] hard-shadow">
        
        {/* Gavel Badge */}
        <div className="absolute -top-5 -left-4 w-11 h-11 bg-[#8f4a48] shadow-[3px_3px_0px_0px_rgba(36,25,24,1)] flex items-center justify-center rotate-6 border-2 border-[#241918] text-[#ffffff]">
          <Gavel size={22} />
        </div>

        <h3 className="font-display-xl text-4xl sm:text-5xl text-[#241918] tracking-tighter uppercase border-b-4 border-[#241918] pb-3 mb-6">
          The Rules
        </h3>

        <ol className="space-y-4 font-annotation text-base sm:text-lg md:text-xl text-[#241918]">
          <li className="pl-3 border-l-4 border-[#9e4037] ml-1 p-1 hover:bg-[#fae3e2] transition-colors">
            1. Don&apos;t be an asshole. Seriously.
          </li>
          <li className="pl-3 border-l-4 border-[#9e4037] ml-1 p-1 hover:bg-[#fae3e2] transition-colors">
            2. Ask stupid questions. They often lead to smart answers.
          </li>
          <li className="pl-3 border-l-4 border-[#9e4037] ml-1 p-1 hover:bg-[#fae3e2] transition-colors">
            3. Share your broken code, not just your wins.
          </li>
          <li className="pl-3 border-l-4 border-[#9e4037] ml-1 p-1 hover:bg-[#fae3e2] transition-colors">
            4. Credit ideas aggressively.
          </li>
          <li className="pl-3 border-l-4 border-[#9e4037] ml-1 p-1 hover:bg-[#fae3e2] transition-colors">
            5. Touch grass occasionally.
          </li>
          <li className="pl-3 border-l-4 border-[#dcc0bc] ml-1 p-1 relative text-[#56423f] line-through">
            6. Maintain a rigid sleep schedule.
            
            <div className="handwritten-note absolute -top-8 -right-2 md:right-8 p-3 rotate-3 z-20 w-48 border border-[#8f4a48] shadow-md bg-[#FEF3C7] not-italic">
              <Edit3 size={14} className="text-[#8f4a48] absolute top-1 right-1" />
              <p className="font-annotation text-xs text-[#8f4a48] italic leading-tight block mt-1">
                &ldquo;we&apos;re still working on #6... deployment night ruined this.&rdquo;
              </p>
            </div>
          </li>
        </ol>

      </section>

    </div>
  );
}
