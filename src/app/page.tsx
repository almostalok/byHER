'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
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
  const [activeSectionIdx, setActiveSectionIdx] = useState(0);
  const [isCrtOn, setIsCrtOn] = useState(false);
  const [isCheatsOpen, setIsCheatsOpen] = useState(false);
  const { toggleMute, playClick, playQuack } = useRetroAudio();

  const isTransitioningRef = useRef(false);
  const activeIdxRef = useRef(0);

  const [modalState, setModalState] = useState({
    isOpen: false,
    imgUrl: '',
    title: '',
  });

  // Smooth Section-by-Section Slide Navigation (Always snaps to full section)
  const scrollToSectionIndex = useCallback((targetIndex: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const clampedIdx = Math.max(0, Math.min(SECTION_IDS.length - 1, targetIndex));
    activeIdxRef.current = clampedIdx;
    setActiveSectionIdx(clampedIdx);

    const targetElement = document.getElementById(SECTION_IDS[clampedIdx]);
    if (targetElement) {
      container.scrollTo({
        left: targetElement.offsetLeft,
        behavior: 'smooth',
      });
    }
  }, []);

  // React Wheel Handler for instant gesture capture
  const handleReactWheel = useCallback((e: React.WheelEvent<HTMLElement>) => {
    const target = e.target as HTMLElement | null;
    if (target && target.closest('[role="dialog"], .modal-scroll-area')) {
      return;
    }

    if (isTransitioningRef.current) return;

    const delta = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;

    if (delta > 20) {
      isTransitioningRef.current = true;
      scrollToSectionIndex(activeIdxRef.current + 1);
      setTimeout(() => {
        isTransitioningRef.current = false;
      }, 450);
    } else if (delta < -20) {
      isTransitioningRef.current = true;
      scrollToSectionIndex(activeIdxRef.current - 1);
      setTimeout(() => {
        isTransitioningRef.current = false;
      }, 450);
    }
  }, [scrollToSectionIndex]);

  // Native Wheel, Touch & Key Event Listeners
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // 1. Native Wheel Listener with non-passive preventDefault
    const handleNativeWheel = (e: WheelEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && target.closest('[role="dialog"], .modal-scroll-area')) {
        return;
      }

      const delta = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;

      if (Math.abs(delta) > 15) {
        e.preventDefault();

        if (isTransitioningRef.current) return;

        if (delta > 15) {
          isTransitioningRef.current = true;
          scrollToSectionIndex(activeIdxRef.current + 1);
          setTimeout(() => {
            isTransitioningRef.current = false;
          }, 450);
        } else if (delta < -15) {
          isTransitioningRef.current = true;
          scrollToSectionIndex(activeIdxRef.current - 1);
          setTimeout(() => {
            isTransitioningRef.current = false;
          }, 450);
        }
      }
    };

    // 2. Touch Swipes: Any swipe movement advances by 1 section
    let touchStartY = 0;
    let touchStartX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        touchStartY = e.touches[0].clientY;
        touchStartX = e.touches[0].clientX;
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && target.closest('[role="dialog"], .modal-scroll-area')) {
        return;
      }

      if (e.changedTouches.length > 0) {
        const touchEndY = e.changedTouches[0].clientY;
        const touchEndX = e.changedTouches[0].clientX;
        const deltaY = touchStartY - touchEndY;
        const deltaX = touchStartX - touchEndX;
        const primaryDelta = Math.abs(deltaY) > Math.abs(deltaX) ? deltaY : deltaX;

        if (primaryDelta > 35) {
          // Swipe up / left -> next section
          scrollToSectionIndex(activeIdxRef.current + 1);
        } else if (primaryDelta < -35) {
          // Swipe down / right -> prev section
          scrollToSectionIndex(activeIdxRef.current - 1);
        }
      }
    };

    // 3. Keyboard Navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeEl = document.activeElement;
      if (activeEl && (activeEl.tagName === 'INPUT' || activeEl.tagName === 'TEXTAREA')) {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        scrollToSectionIndex(activeIdxRef.current + 1);
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        scrollToSectionIndex(activeIdxRef.current - 1);
      } else if (e.key >= '1' && e.key <= '7') {
        const idx = parseInt(e.key) - 1;
        scrollToSectionIndex(idx);
        playClick();
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

    container.addEventListener('wheel', handleNativeWheel, { passive: false });
    window.addEventListener('wheel', handleNativeWheel, { passive: false });
    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchend', handleTouchEnd, { passive: true });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      container.removeEventListener('wheel', handleNativeWheel);
      window.removeEventListener('wheel', handleNativeWheel);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [playClick, playQuack, toggleMute, scrollToSectionIndex]);

  // Keep index synchronized with container scroll position
  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollLeft = container.scrollLeft;
    const viewWidth = window.innerWidth || 1;
    const computedIdx = Math.round(scrollLeft / viewWidth);
    if (computedIdx >= 0 && computedIdx < SECTION_IDS.length && computedIdx !== activeIdxRef.current) {
      activeIdxRef.current = computedIdx;
      setActiveSectionIdx(computedIdx);
    }
  };

  // Smooth Navigation to Section by ID (Header clicks)
  const handleNavigate = (sectionId: string) => {
    const idx = SECTION_IDS.indexOf(sectionId);
    if (idx !== -1) {
      scrollToSectionIndex(idx);
    }
  };

  const handleScrollPrev = () => {
    playClick();
    scrollToSectionIndex(activeIdxRef.current - 1);
  };

  const handleScrollNext = () => {
    playClick();
    scrollToSectionIndex(activeIdxRef.current + 1);
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

  const scrollProgress = Math.round((activeSectionIdx / (SECTION_IDS.length - 1)) * 100);

  return (
    <div className="h-screen w-screen bg-[#dfdac3] flex flex-col overflow-hidden font-display selection:bg-[#be3519] selection:text-[#ebdcc4] relative">
      
      {/* 90s CRT Scanline & Filter Overlay */}
      <CrtScanlineOverlay isEnabled={isCrtOn} />

      {/* Retro Horizontal Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-40 h-1.5 bg-[#be3519]/20 pointer-events-none">
        <div 
          className="h-full bg-[#be3519] transition-all duration-300 ease-out"
          style={{ width: `${Math.max(5, scrollProgress)}%` }}
        />
      </div>

      {/* Main Viewport: Full Section-Locked Snapping Gallery */}
      <main
        ref={scrollContainerRef}
        onWheel={handleReactWheel}
        onScroll={handleScroll}
        className="horizontal-scroll-container flex-1 w-full h-full flex flex-row flex-nowrap overflow-x-auto overflow-y-hidden select-none snap-x snap-mandatory"
        style={{
          scrollBehavior: 'smooth',
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
          disabled={activeSectionIdx <= 0}
          className="flex items-center gap-1 bg-[#dfdac3] hover:bg-[#be3519] text-[#be3519] hover:text-[#ebdcc4] disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-[#be3519] px-2.5 sm:px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer disabled:cursor-not-allowed"
          aria-label="Previous Section"
        >
          <ChevronLeft size={16} />
          <span className="hidden sm:inline">PREV</span>
        </button>

        <span className="text-[10px] sm:text-[11px] font-mono font-bold text-[#522a25] px-1 sm:px-1.5">
          {activeSectionIdx + 1} / {SECTION_IDS.length}
        </span>

        <button
          onClick={handleScrollNext}
          disabled={activeSectionIdx >= SECTION_IDS.length - 1}
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
