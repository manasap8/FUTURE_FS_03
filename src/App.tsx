/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { About } from './components/About.tsx';
import { Programs } from './components/Programs.tsx';
import { Trainers } from './components/Trainers.tsx';
import { Pricing } from './components/Pricing.tsx';
import { Gallery } from './components/Gallery.tsx';
import { Testimonials } from './components/Testimonials.tsx';
import { Contact } from './components/Contact.tsx';
import { Footer } from './components/Footer.tsx';
import { WhatsAppFloat } from './components/WhatsAppFloat.tsx';
import { FreePassModal } from './components/FreePassModal.tsx';
import { ScrollProgressBar } from './components/ScrollProgressBar.tsx';

export default function App() {
  const [isPassModalOpen, setIsPassModalOpen] = useState(false);
  const [selectedPlanForContact, setSelectedPlanForContact] = useState<string | undefined>(undefined);
  const [selectedProgramForContact, setSelectedProgramForContact] = useState<string | undefined>(undefined);

  const handleOpenJoinModal = (plan?: string) => {
    if (plan) {
      setSelectedPlanForContact(plan);
    }
    setIsPassModalOpen(true);
  };

  const handleSelectPlan = (planName: string) => {
    setSelectedPlanForContact(planName);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const navOffset = 80;
      const pos = contactSection.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  const handleSelectProgramForTrial = (programTitle: string) => {
    setSelectedProgramForContact(programTitle);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const navOffset = 80;
      const pos = contactSection.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-gray-100 flex flex-col font-sans selection:bg-[#FF4433] selection:text-white">
      {/* Slim Fixed Top Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Sticky Header Navigation */}
      <Navbar onOpenJoinModal={() => handleOpenJoinModal()} />

      {/* Main Single Page Content */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenJoinModal={() => handleOpenJoinModal()} />

        {/* 2. About & Philosophy with Animated Counters */}
        <About />

        {/* 3. Training Programs & Deep Dive Modal */}
        <Programs onSelectProgramForTrial={handleSelectProgramForTrial} />

        {/* 4. Certified Coaches & Bios */}
        <Trainers />

        {/* 5. Memberships & Pricing */}
        <Pricing onSelectPlan={handleSelectPlan} />

        {/* 6. Gym Floor & Recovery Gallery with Lightbox */}
        <Gallery />

        {/* 7. Member Transformations & Testimonials */}
        <Testimonials />

        {/* 8. Contact Form, Google Map & Direct Hours */}
        <Contact 
          initialPlan={selectedPlanForContact} 
          initialProgram={selectedProgramForContact} 
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Fixed Floating WhatsApp Deep Link */}
      <WhatsAppFloat />

      {/* Free 1-Day Pass Modal */}
      <FreePassModal
        isOpen={isPassModalOpen}
        onClose={() => setIsPassModalOpen(false)}
        preselectedPlan={selectedPlanForContact}
        preselectedProgram={selectedProgramForContact}
      />
    </div>
  );
}
