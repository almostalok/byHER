'use client';

import { useState, useRef, useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import WorkExSection from '@/components/WorkExSection';
import WrappedSection from '@/components/WrappedSection';
import ContentWorkSection from '@/components/ContentWorkSection';
import NotesSkillPillsSection from '@/components/NotesSkillPillsSection';
import ContactFooter from '@/components/ContactFooter';
import ImageModal from '@/components/ImageModal';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [modalState, setModalState] = useState({
    isOpen: false,
    imgUrl: '',
    title: '',
  });

  const [activeSection, setActiveSection] = useState('hero');

  // Handle Wheel Event: translate vertical wheel (deltaY) into horizontal scroll (scrollLeft)
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      // If user scrolls vertically with mouse wheel, translate to horizontal scroll
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX) && !e.shiftKey) {
        e.preventDefault();
        container.scrollLeft += e.deltaY * 1.3;
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        container.scrollBy({ left: 450, behavior: 'smooth' });
      } else if (e.key === 'ArrowLeft') {
        container.scrollBy({ left: -450, behavior: 'smooth' });
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      container.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Update horizontal scroll progress & active section
  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const maxScroll = container.scrollWidth - container.clientWidth;
    if (maxScroll > 0) {
      const current = Math.min(100, Math.max(0, (container.scrollLeft / maxScroll) * 100));
      setScrollProgress(current);
    }

    const sectionIds = ['hero', 'about', 'projects', 'community', 'content-work', 'notes', 'contact'];
    const viewportCenter = container.scrollLeft + container.clientWidth / 3; // biased slightly left for early transition
    let closestSection = 'hero';
    let minDistance = Infinity;

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) {
        const elCenter = el.offsetLeft + el.offsetWidth / 3;
        const distance = Math.abs(viewportCenter - elCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closestSection = id;
        }
      }
    }

    setActiveSection(closestSection);
  };

  // Smooth Horizontal Navigation to Sections
  const handleNavigate = (sectionId: string) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      const targetOffset = targetElement.offsetLeft;
      container.scrollTo({ left: targetOffset, behavior: 'smooth' });
    }
  };

  const handleScrollPrev = () => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollBy({ left: -Math.min(window.innerWidth * 0.8, 800), behavior: 'smooth' });
    }
  };

  const handleScrollNext = () => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollBy({ left: Math.min(window.innerWidth * 0.8, 800), behavior: 'smooth' });
    }
  };

  const handleSelectImage = (imgUrl: string, title: string) => {
    setModalState({
      isOpen: true,
      imgUrl,
      title,
    });
  };

  const handleCloseModal = () => {
    setModalState(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="h-screen w-screen bg-[#dfdac3] flex flex-col overflow-hidden font-display selection:bg-[#be3519] selection:text-[#ebdcc4]">
      
      {/* Retro Horizontal Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-40 h-1.5 bg-[#be3519]/20">
        <div 
          className="h-full bg-[#be3519] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Main Horizontal Scrolling Viewport with Fullscreen Snap */}
      <main
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="horizontal-scroll-container flex-1 w-full h-screen flex flex-row flex-nowrap overflow-x-auto overflow-y-hidden select-none snap-x snap-mandatory"
        style={{
          scrollBehavior: 'smooth',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {/* 1. Hero Section with Embedded Header */}
        <HeroSection onNavigate={handleNavigate} />

        {/* 2. About Me Section */}
        <AboutSection />

        {/* 3. Work Ex & Projects Section */}
        <WorkExSection onSelectImage={handleSelectImage} />

        {/* 4. 2025 Wrapped / Community Section */}
        <WrappedSection onSelectImage={handleSelectImage} />

        {/* 5. How We Build / Process Section */}
        <ContentWorkSection />

        {/* 6. Notes & Skill Pills Section */}
        <NotesSkillPillsSection onSelectImage={handleSelectImage} />

        {/* 7. Contact & Footer Section */}
        <ContactFooter />
      </main>

      {/* Floating Retro Horizontal Navigation Controls */}
      <div className="fixed bottom-4 right-4 z-40 flex items-center gap-2 bg-[#dfdac3]/90 backdrop-blur-sm border-2 border-dashed border-[#be3519] rounded-full p-1.5 shadow-xl">
        <button
          onClick={handleScrollPrev}
          disabled={scrollProgress <= 1}
          className="flex items-center gap-1 bg-[#dfdac3] hover:bg-[#be3519] text-[#be3519] hover:text-[#ebdcc4] disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-[#be3519] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer disabled:cursor-not-allowed"
          aria-label="Previous Section"
        >
          <ChevronLeft size={16} />
          <span className="hidden sm:inline">PREV</span>
        </button>

        <span className="text-[11px] font-mono font-bold text-[#522a25] px-1">
          {Math.round(scrollProgress)}%
        </span>

        <button
          onClick={handleScrollNext}
          disabled={scrollProgress >= 99}
          className="flex items-center gap-1 bg-[#be3519] hover:bg-[#522a25] text-[#ebdcc4] disabled:opacity-30 disabled:hover:bg-[#be3519] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer disabled:cursor-not-allowed shadow-sm"
          aria-label="Next Section"
        >
          <span className="hidden sm:inline">NEXT</span>
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Lightbox Image Preview Modal */}
      <ImageModal 
        isOpen={modalState.isOpen}
        imgUrl={modalState.imgUrl}
        title={modalState.title}
        onClose={handleCloseModal}
      />
    </div>
  );
}
