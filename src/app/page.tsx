'use client';

import { useState, useRef, useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import WorkExSection from '@/components/WorkExSection';
import WrappedSection from '@/components/WrappedSection';
import ContentWorkSection from '@/components/ContentWorkSection';
import NotesSkillPillsSection from '@/components/NotesSkillPillsSection';
import ContactFooter from '@/components/ContactFooter';
import ImageModal from '@/components/ImageModal';
import CrtScanlineOverlay from '@/components/CrtScanlineOverlay';
import KeyboardShortcutsModal from '@/components/KeyboardShortcutsModal';
import { ChevronLeft, ChevronRight, Gamepad2 } from 'lucide-react';
import { useRetroAudio } from '@/lib/useRetroAudio';
import confetti from 'canvas-confetti';

const SECTION_IDS = ['hero', 'about', 'projects', 'community', 'content-work', 'notes', 'contact'];

export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isCrtOn, setIsCrtOn] = useState(false);
  const [isCheatsOpen, setIsCheatsOpen] = useState(false);
  const { toggleMute, playClick, playQuack } = useRetroAudio();

  const [modalState, setModalState] = useState({
    isOpen: false,
    imgUrl: '',
    title: '',
  });

  // Zero-Delay Direct Vertical-to-Horizontal Wheel & Touch Mapping
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // 1. Mouse wheel / Trackpad: Instant 0ms 1:1 translation of vertical wheel delta to horizontal scroll
    const handleWheel = (e: WheelEvent) => {
      // ONLY skip if user is scrolling inside an open modal popup (e.g. Handbook doc or Project spec modal)
      const target = e.target as HTMLElement | null;
      if (target && target.closest('[role="dialog"], .modal-scroll-area')) {
        return;
      }

      // If user is scrolling vertically, translate directly to horizontal scroll with ZERO latency
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX) && !e.shiftKey) {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      }
    };

    // 2. Touch Swipes: Direct 1:1 finger tracking with zero lag
    let touchStartY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        touchStartY = e.touches[0].clientY;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && target.closest('[role="dialog"], .modal-scroll-area')) {
        return;
      }

      if (e.touches.length > 0) {
        const currentY = e.touches[0].clientY;
        const deltaY = touchStartY - currentY;
        
        container.scrollLeft += deltaY * 1.3;
        touchStartY = currentY;
      }
    };

    // 3. Keyboard Navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeEl = document.activeElement;
      if (activeEl && (activeEl.tagName === 'INPUT' || activeEl.tagName === 'TEXTAREA')) {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === 'PageDown') {
        container.scrollBy({ left: 450, behavior: 'smooth' });
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'PageUp') {
        container.scrollBy({ left: -450, behavior: 'smooth' });
      } else if (e.key >= '1' && e.key <= '7') {
        const idx = parseInt(e.key) - 1;
        const targetId = SECTION_IDS[idx];
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          container.scrollTo({ left: targetElement.offsetLeft, behavior: 'smooth' });
          playClick();
        }
      } else if (e.key.toLowerCase() === 'q') {
        playQuack();
        confetti({ particleCount: 30, spread: 60, origin: { x: 0.2, y: 0.4 } });
      } else if (e.key.toLowerCase() === 'c') {
        confetti({ particleCount: 60, spread: 90, origin: { y: 0.5 } });
      } else if (e.key.toLowerCase() === 'm') {
        toggleMute();
      } else if (e.key.toLowerCase() === 'r') {
        setIsCrtOn((prev) => !prev);
      } else if (e.key === '?' || e.key.toLowerCase() === 'h') {
        setIsCheatsOpen((prev) => !prev);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [playClick, playQuack, toggleMute]);

  // Update horizontal scroll progress
  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const maxScroll = container.scrollWidth - container.clientWidth;
    if (maxScroll > 0) {
      const current = Math.min(100, Math.max(0, (container.scrollLeft / maxScroll) * 100));
      setScrollProgress(current);
    }
  };

  // Smooth Horizontal Navigation to Sections
  const handleNavigate = (sectionId: string) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      container.scrollTo({ left: targetElement.offsetLeft, behavior: 'smooth' });
    }
  };

  const handleScrollPrev = () => {
    playClick();
    const container = scrollContainerRef.current;
    if (!container) return;
    container.scrollBy({ left: -Math.min(window.innerWidth * 0.85, 800), behavior: 'smooth' });
  };

  const handleScrollNext = () => {
    playClick();
    const container = scrollContainerRef.current;
    if (!container) return;
    container.scrollBy({ left: Math.min(window.innerWidth * 0.85, 800), behavior: 'smooth' });
  };

  const handleSelectImage = (imgUrl: string, title: string) => {
    playClick();
    setModalState({
      isOpen: true,
      imgUrl,
      title,
    });
  };

  const handleCloseModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="h-screen w-screen bg-[#dfdac3] flex flex-col overflow-hidden font-display selection:bg-[#be3519] selection:text-[#ebdcc4] relative">
      
      {/* 90s CRT Scanline & Filter Overlay */}
      <CrtScanlineOverlay isEnabled={isCrtOn} />

      {/* Retro Horizontal Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-40 h-1.5 bg-[#be3519]/20 pointer-events-none">
        <div 
          className="h-full bg-[#be3519] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Main Viewport: Instant Direct Horizontal Scrolling */}
      <main
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="horizontal-scroll-container flex-1 w-full h-full flex flex-row flex-nowrap overflow-x-auto overflow-y-hidden select-none snap-x snap-proximity"
        style={{
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {/* 1. Hero Section with Embedded Header */}
        <HeroSection 
          onNavigate={handleNavigate} 
          onToggleCrt={() => setIsCrtOn((prev) => !prev)}
          isCrtOn={isCrtOn}
          onOpenCheats={() => setIsCheatsOpen(true)}
        />

        {/* 2. About Me Section */}
        <AboutSection />

        {/* 3. Work Ex & Projects Section */}
        <WorkExSection onSelectImage={handleSelectImage} />

        {/* 4. 2025 Wrapped / Community Section */}
        <WrappedSection onSelectImage={handleSelectImage} />

        {/* 5. How We Build / Process Section */}
        <ContentWorkSection />

        {/* 6. Creative Whiteboard & Designer Sandbox */}
        <NotesSkillPillsSection onSelectImage={handleSelectImage} />

        {/* 7. Contact & Footer Section */}
        <ContactFooter />
      </main>

      {/* Floating Retro Navigation Controls */}
      <div className="fixed bottom-3 right-3 sm:bottom-4 sm:right-4 z-40 flex items-center gap-1 sm:gap-2 bg-[#dfdac3]/95 backdrop-blur-md border-2 border-dashed border-[#be3519] rounded-full p-1 sm:p-1.5 shadow-xl select-none">
        <button
          onClick={handleScrollPrev}
          disabled={scrollProgress <= 1}
          className="flex items-center gap-1 bg-[#dfdac3] hover:bg-[#be3519] text-[#be3519] hover:text-[#ebdcc4] disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-[#be3519] px-2.5 sm:px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer disabled:cursor-not-allowed"
          aria-label="Previous Section"
        >
          <ChevronLeft size={16} />
          <span className="hidden sm:inline">PREV</span>
        </button>

        <span className="text-[10px] sm:text-[11px] font-mono font-bold text-[#522a25] px-0.5 sm:px-1">
          {Math.round(scrollProgress)}%
        </span>

        <button
          onClick={handleScrollNext}
          disabled={scrollProgress >= 99}
          className="flex items-center gap-1 bg-[#be3519] hover:bg-[#522a25] text-[#ebdcc4] disabled:opacity-30 disabled:hover:bg-[#be3519] px-2.5 sm:px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer disabled:cursor-not-allowed shadow-sm"
          aria-label="Next Section"
        >
          <span className="hidden sm:inline">NEXT</span>
          <ChevronRight size={16} />
        </button>

        {/* Quick Arcade Cheats Button */}
        <button
          onClick={() => {
            playClick();
            setIsCheatsOpen(true);
          }}
          className="bg-[#522a25] hover:bg-[#be3519] text-[#ebdcc4] p-1 sm:p-1.5 rounded-full text-xs transition-colors cursor-pointer shadow-sm ml-0.5"
          title="Open Retro Keybindings Cheat Sheet [Key: ?]"
        >
          <Gamepad2 size={15} />
        </button>
      </div>

      {/* Lightbox Image Preview Modal */}
      <ImageModal 
        isOpen={modalState.isOpen}
        imgUrl={modalState.imgUrl}
        title={modalState.title}
        onClose={handleCloseModal}
      />

      {/* Arcade Keybindings Cheat Sheet Modal */}
      <KeyboardShortcutsModal
        isOpen={isCheatsOpen}
        onClose={() => setIsCheatsOpen(false)}
      />
    </div>
  );
}
