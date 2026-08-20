'use client';

import React from 'react';

/**
 * Hand-drawn Doodle Underline SVG
 */
export function DoodleUnderline({ className = 'text-[#be3519]', width = 120 }: { className?: string; width?: number | string }) {
  return (
    <svg 
      viewBox="0 0 120 16" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block select-none pointer-events-none ${className}`}
      style={{ width: typeof width === 'number' ? `${width}px` : width, height: 'auto' }}
    >
      <path 
        d="M2 9.5C24.5 4 68.5 3 118 12.5M12 14.5C36 10 74 8.5 106 13" 
        stroke="currentColor" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </svg>
  );
}

/**
 * Hand-drawn Curly / Curved Doodle Arrow SVG
 */
export function DoodleArrow({ 
  direction = 'right', 
  className = 'text-[#be3519]', 
  width = 60 
}: { 
  direction?: 'right' | 'left' | 'down' | 'curved-down' | 'curved-up'; 
  className?: string; 
  width?: number | string;
}) {
  return (
    <svg 
      viewBox="0 0 80 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block select-none pointer-events-none ${className}`}
      style={{ width: typeof width === 'number' ? `${width}px` : width, height: 'auto' }}
    >
      {direction === 'curved-down' && (
        <g stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 10C24 4 56 6 62 26" />
          <path d="M50 24L63 28L68 16" />
        </g>
      )}
      {direction === 'curved-up' && (
        <g stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 30C24 36 56 34 62 14" />
          <path d="M50 16L63 12L68 24" />
        </g>
      )}
      {direction === 'right' && (
        <g stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 20C26 17 52 23 72 20" />
          <path d="M58 10L74 20L58 30" />
        </g>
      )}
      {direction === 'left' && (
        <g stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M76 20C54 17 28 23 8 20" />
          <path d="M22 10L6 20L22 30" />
        </g>
      )}
      {direction === 'down' && (
        <g stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M40 4C38 16 42 28 40 36" />
          <path d="M28 24L40 37L52 24" />
        </g>
      )}
    </svg>
  );
}

/**
 * Hand-drawn Scribble Loop / Circle Highlighter SVG
 */
export function DoodleCircle({ className = 'text-[#be3519]', size = 50 }: { className?: string; size?: number | string }) {
  return (
    <svg 
      viewBox="0 0 100 60" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block select-none pointer-events-none ${className}`}
      style={{ width: typeof size === 'number' ? `${size}px` : size, height: 'auto' }}
    >
      <path 
        d="M20 28C14 12 42 5 72 8C94 11 96 32 84 46C70 60 22 56 12 42C2 28 22 12 52 14C78 16 90 28 88 38" 
        stroke="currentColor" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </svg>
  );
}

/**
 * Hand-drawn Star Doodle SVG
 */
export function DoodleStar({ className = 'text-[#be3519]', size = 24 }: { className?: string; size?: number }) {
  return (
    <svg 
      viewBox="0 0 32 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block select-none pointer-events-none ${className}`}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <path 
        d="M16 2L19.5 11.5L29 12.5L21.5 18.5L24 28L16 22.5L8 28L10.5 18.5L3 12.5L12.5 11.5L16 2Z" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity="0.15"
      />
    </svg>
  );
}

/**
 * Hand-drawn Scribble Squiggle / Zig-zag
 */
export function DoodleSquiggle({ className = 'text-[#be3519]', width = 80 }: { className?: string; width?: number | string }) {
  return (
    <svg 
      viewBox="0 0 80 18" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block select-none pointer-events-none ${className}`}
      style={{ width: typeof width === 'number' ? `${width}px` : width, height: 'auto' }}
    >
      <path 
        d="M3 13C8 4 13 4 18 13C23 4 28 4 33 13C38 4 43 4 48 13C53 4 58 4 63 13C68 4 73 4 77 12" 
        stroke="currentColor" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </svg>
  );
}

/**
 * Hand-drawn Cross / Scribble X Mark
 */
export function DoodleCross({ className = 'text-[#be3519]', size = 20 }: { className?: string; size?: number }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block select-none pointer-events-none ${className}`}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <path d="M4 5L19 20M20 4L5 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

/**
 * Notebook Binder Holes along paper border
 */
export function BinderHoles({ count = 5, className = '' }: { count?: number; className?: string }) {
  return (
    <div className={`flex flex-col justify-around py-3 h-full pointer-events-none select-none ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="flex items-center gap-1">
          {/* Punch Hole */}
          <div className="w-3 h-3 rounded-full bg-[#522a25] shadow-inner border border-[#dfdac3]/60 relative">
            <div className="absolute inset-0.5 rounded-full bg-[#361a17]" />
          </div>
          {/* Wire ring snippet */}
          <div className="w-2.5 h-1 bg-gradient-to-r from-[#be3519] to-[#522a25] rounded-full transform -rotate-12 opacity-80" />
        </div>
      ))}
    </div>
  );
}

/**
 * Washi Tape Component with jagged serrated tape edges
 */
export function TapeStrip({ 
  className = '', 
  tilt = '-rotate-2', 
  color = 'pink',
  width = 'w-24'
}: { 
  className?: string; 
  tilt?: string; 
  color?: 'pink' | 'tan' | 'crimson' | 'cream';
  width?: string;
}) {
  const bgStyles = {
    pink: 'bg-[#f49799]/85 border-[#522a25]/30',
    tan: 'bg-[#dfdac3]/90 border-[#522a25]/30',
    crimson: 'bg-[#be3519]/80 border-[#522a25]/40 text-[#ebdcc4]',
    cream: 'bg-[#ebdcc4]/90 border-[#be3519]/40',
  }[color];

  return (
    <div 
      className={`absolute h-5 ${width} ${bgStyles} ${tilt} border-y border-dashed shadow-sm z-25 pointer-events-none select-none backdrop-blur-[1px] flex items-center justify-center overflow-hidden ${className}`}
      style={{
        clipPath: 'polygon(0% 15%, 3% 0%, 6% 15%, 9% 0%, 12% 15%, 15% 0%, 95% 0%, 100% 15%, 97% 30%, 100% 45%, 97% 60%, 100% 75%, 97% 90%, 95% 100%, 12% 100%, 9% 85%, 6% 100%, 3% 85%, 0% 100%)',
      }}
    />
  );
}

/**
 * Rubber Stamp Badge
 */
export function ScrapbookStamp({ 
  text, 
  subtext,
  rotate = '-rotate-6',
  className = ''
}: { 
  text: string; 
  subtext?: string;
  rotate?: string;
  className?: string;
}) {
  return (
    <div className={`inline-flex flex-col items-center justify-center p-1.5 sm:p-2 border-2 border-dashed border-[#be3519] rounded-md ${rotate} text-[#be3519] font-mono select-none pointer-events-none bg-[#dfdac3]/20 shadow-xs ${className}`}>
      <span className="text-[9px] sm:text-[10px] font-black tracking-widest uppercase">{text}</span>
      {subtext && <span className="text-[7px] sm:text-[8px] font-bold tracking-tighter opacity-80">{subtext}</span>}
    </div>
  );
}

/**
 * Paperclip graphic
 */
export function PaperClip({ className = '', tilt = 'rotate-12' }: { className?: string; tilt?: string }) {
  return (
    <svg 
      viewBox="0 0 24 48" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`w-4 sm:w-6 h-8 sm:h-12 pointer-events-none select-none drop-shadow-sm ${tilt} ${className}`}
    >
      <path 
        d="M6 16V36C6 40.5 9.5 44 14 44C18.5 44 22 40.5 22 36V10C22 5.5 18.5 2 14 2C9.5 2 6 5.5 6 10V32C6 34.5 8 36.5 10.5 36.5C13 36.5 15 34.5 15 32V14" 
        stroke="#522a25" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </svg>
  );
}

/**
 * Hand-drawn Scratch / Strikethrough for crossing out fake buzzwords
 */
export function StrikethroughScribble({ className = 'text-[#be3519]', width = '100%' }: { className?: string; width?: string | number }) {
  return (
    <svg 
      viewBox="0 0 200 20" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute inset-0 m-auto select-none pointer-events-none ${className}`}
      style={{ width: typeof width === 'number' ? `${width}px` : width, height: '100%' }}
    >
      <path 
        d="M4 11C40 6 110 5 196 9M12 14C60 10 130 9 184 13" 
        stroke="currentColor" 
        strokeWidth="3.5" 
        strokeLinecap="round" 
      />
    </svg>
  );
}

/**
 * Interactive Folded Dog-Ear Page Corner for Flipping
 */
export function DogEarCorner({ 
  direction = 'next', 
  onClick,
  className = ''
}: { 
  direction?: 'next' | 'prev'; 
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`absolute bottom-0 ${direction === 'next' ? 'right-0' : 'left-0'} z-40 w-12 sm:w-16 h-12 sm:h-16 group cursor-pointer select-none focus:outline-none ${className}`}
      title={direction === 'next' ? 'Flip to next scrapbook page' : 'Flip to previous scrapbook page'}
      aria-label={direction === 'next' ? 'Next page' : 'Previous page'}
    >
      {/* Corner triangle fold */}
      <div 
        className={`w-full h-full bg-[#dfdac3] hover:bg-[#be3519] border-t-2 ${direction === 'next' ? 'border-l-2' : 'border-r-2'} border-[#522a25] shadow-lg transition-colors duration-200 flex items-end ${direction === 'next' ? 'justify-end pr-1.5 pb-1' : 'justify-start pl-1.5 pb-1'}`}
        style={{
          clipPath: direction === 'next' 
            ? 'polygon(100% 0, 0 100%, 100% 100%)' 
            : 'polygon(0 0, 0 100%, 100% 100%)',
        }}
      >
        <span className="font-mono text-[9px] sm:text-[10px] font-black text-[#522a25] group-hover:text-[#ebdcc4] transition-colors uppercase">
          {direction === 'next' ? 'FLIP ➔' : '⮌ BACK'}
        </span>
      </div>
    </button>
  );
}

