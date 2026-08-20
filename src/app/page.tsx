'use client';

import { useState, useEffect, useCallback } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import WorkExSection from '@/components/WorkExSection';
import WrappedSection from '@/components/WrappedSection';
import JoinSection from '@/components/JoinSection';
import ContactFooter from '@/components/ContactFooter';
import ImageModal from '@/components/ImageModal';
import CrtScanlineOverlay from '@/components/CrtScanlineOverlay';
import KeyboardShortcutsModal from '@/components/KeyboardShortcutsModal';
import { useRetroAudio } from '@/lib/useRetroAudio';
import confetti from 'canvas-confetti';

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isCrtOn, setIsCrtOn] = useState(false);
  const [isCheatsOpen, setIsCheatsOpen] = useState(false);
  const { toggleMute, playClick, playQuack, playPaper } = useRetroAudio();

  const [modalState, setModalState] = useState({
    isOpen: false,
    imgUrl: '',
    title: '',
  });

  const scrollToSection = useCallback((sectionId: string) => {
    playPaper();
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [playPaper]);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'community', 'join'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard Shortcuts (1-5 to jump to sections, etc.)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeEl = document.activeElement;
      if (activeEl && (activeEl.tagName === 'INPUT' || activeEl.tagName === 'TEXTAREA')) {
        return;
      }

      if (e.key === '1') scrollToSection('hero');
      else if (e.key === '2') scrollToSection('about');
      else if (e.key === '3') scrollToSection('projects');
      else if (e.key === '4') scrollToSection('community');
      else if (e.key === '5') scrollToSection('join');
      else if (e.key.toLowerCase() === 'q') {
        playQuack();
        confetti({ particleCount: 40, spread: 60, origin: { x: 0.2, y: 0.4 } });
      } else if (e.key.toLowerCase() === 'c') {
        confetti({ particleCount: 70, spread: 90, origin: { y: 0.5 } });
      } else if (e.key.toLowerCase() === 'm') {
        toggleMute();
      } else if (e.key.toLowerCase() === 'r') {
        setIsCrtOn((prev) => !prev);
      } else if (e.key === '?' || e.key.toLowerCase() === 'h') {
        setIsCheatsOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [scrollToSection, playQuack, toggleMute]);

  const handleSelectImage = (imgUrl: string, title: string) => {
    playClick();
    setModalState({
      isOpen: true,
      imgUrl,
      title,
    });
  };

  return (
    <div className="min-h-screen bg-[#fff8f7] text-[#241918] bg-noise flex flex-col font-body-md antialiased overflow-x-hidden selection:bg-[#9e4037] selection:text-[#ffffff] relative">
      
      {/* 90s CRT Scanline & Filter Overlay */}
      <CrtScanlineOverlay isEnabled={isCrtOn} />

      {/* Global Noise Overlay */}
      <div className="noise-overlay" />

      {/* Unified Top Navigation Bar */}
      <Header
        currentTab={activeSection}
        onNavigate={scrollToSection}
        onToggleCrt={() => setIsCrtOn((prev) => !prev)}
        isCrtOn={isCrtOn}
        onOpenCheats={() => setIsCheatsOpen(true)}
      />

      {/* Continuous Scrollable Website Body */}
      <main className="w-full flex-grow flex flex-col pt-14 sm:pt-16">
        
        {/* Section 1: Hero */}
        <section id="hero" className="w-full">
          <HeroSection
            onNavigate={scrollToSection}
          />
        </section>

        {/* Section 2: About */}
        <section id="about" className="w-full py-16 md:py-24 border-b-2 border-[#241918] bg-[#fff8f7]">
          <AboutSection
            onNavigate={scrollToSection}
          />
        </section>

        {/* Section 3: Projects */}
        <section id="projects" className="w-full py-16 md:py-24 border-b-2 border-[#241918] bg-[#fff0ef]/60 dotted-bg">
          <WorkExSection
            onSelectImage={handleSelectImage}
            onNavigate={scrollToSection}
          />
        </section>

        {/* Section 4: Community */}
        <section id="community" className="w-full py-16 md:py-24 border-b-2 border-[#241918] bg-[#fff8f7]">
          <WrappedSection
            onSelectImage={handleSelectImage}
          />
        </section>

        {/* Section 5: Join */}
        <section id="join" className="w-full py-16 md:py-24 bg-[#fff0ef]/80 bg-grid-pattern">
          <JoinSection
            onNavigate={scrollToSection}
          />
        </section>

        {/* Unified Footer */}
        <ContactFooter hasSideNav={false} />
      </main>

      {/* Lightbox Image Preview Modal */}
      <ImageModal 
        isOpen={modalState.isOpen}
        imgUrl={modalState.imgUrl}
        title={modalState.title}
        onClose={() => setModalState((prev) => ({ ...prev, isOpen: false }))}
      />

      {/* Keybindings Modal */}
      <KeyboardShortcutsModal
        isOpen={isCheatsOpen}
        onClose={() => setIsCheatsOpen(false)}
      />

    </div>
  );
}
