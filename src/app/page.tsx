'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import WorkExSection from '@/components/WorkExSection';
import WrappedSection from '@/components/WrappedSection';
import ContentWorkSection from '@/components/ContentWorkSection';
import NotesSkillPillsSection from '@/components/NotesSkillPillsSection';
import ContactFooter from '@/components/ContactFooter';
import ImageModal from '@/components/ImageModal';

export default function Home() {
  const [modalState, setModalState] = useState({
    isOpen: false,
    imgUrl: '',
    title: '',
  });

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
    <main className="min-h-screen bg-[#dfdac3] flex flex-col font-sans selection:bg-[#be3519] selection:text-[#ebdcc4]">
      {/* Navigation Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* About Me Section */}
      <AboutSection />

      {/* Work Ex 1 Campaign Section */}
      <WorkExSection onSelectImage={handleSelectImage} />

      {/* 2025 Wrapped Section */}
      <WrappedSection onSelectImage={handleSelectImage} />

      {/* Content Work & Process Section */}
      <ContentWorkSection />

      {/* Notes & Skill Pills Section */}
      <NotesSkillPillsSection onSelectImage={handleSelectImage} />

      {/* Contact & Footer Section */}
      <ContactFooter />

      {/* Lightbox Image Preview Modal */}
      <ImageModal 
        isOpen={modalState.isOpen}
        imgUrl={modalState.imgUrl}
        title={modalState.title}
        onClose={handleCloseModal}
      />
    </main>
  );
}
