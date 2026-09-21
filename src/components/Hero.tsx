import React from 'react';
import { ArrowRight, ChevronDown, ShieldCheck, Flame, Users, Sparkles } from 'lucide-react';
import { gymInfo } from '../data/gymData.ts';

interface HeroProps {
  onOpenJoinModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenJoinModal }) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16"
    >
      {/* Background image with dramatic dark gradient overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000&auto=format&fit=crop"
          alt="Athletes lifting heavy weights at IronForge Fitness"
          className="w-full h-full object-cover object-center scale-105 animate-pulse duration-1000"
          style={{ animationDuration: '10s' }}
        />
        {/* Layered gradients: top dark, radial vignette, bottom dark */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/75 to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#0D0D0D]/60 to-[#0D0D0D]" />
        {/* Subtle accent glow in background */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#FF4433]/15 blur-[140px] pointer-events-none rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Top Tagline Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A1A1A]/80 border border-[#333] backdrop-blur-md mb-6 shadow-inner">
          <span className="w-2 h-2 rounded-full bg-[#FF4433] animate-ping" />
          <span className="text-xs font-bold uppercase tracking-widest text-gray-200">
            Bengaluru’s Premier Strength & Conditioning Facility
          </span>
          <span className="hidden sm:inline text-gray-500">•</span>
          <span className="hidden sm:inline text-xs text-[#FF4433] font-semibold">
            Zero Gimmicks. Pure Performance.
          </span>
        </div>

        {/* Massive Bold Headline */}
        <h1 className="font-heading text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white tracking-wider leading-[0.9] max-w-5xl uppercase drop-shadow-2xl">
          Transform Your Body.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4433] via-[#FF5E50] to-[#FF8162]">
            Transform Your Life.
          </span>
        </h1>

        {/* Benefit-Driven One-Line Subheadline */}
        <p className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl font-light leading-relaxed">
          The high-performance training ground engineered for dedicated lifters, functional athletes, 
          and anyone relentless enough to build their strongest physical and mental self.
        </p>

        {/* Action Buttons */}
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md sm:max-w-none">
          <button
            onClick={onOpenJoinModal}
            className="w-full sm:w-auto px-8 py-4 rounded-lg bg-[#FF4433] hover:bg-[#FF5E50] text-white font-heading text-2xl tracking-wider uppercase transition-all duration-200 shadow-xl shadow-[#FF4433]/30 hover:shadow-[#FF4433]/50 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-3 cursor-pointer"
            id="hero-join-btn"
          >
            <span>Claim Free 1-Day Pass</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <button
            onClick={() => scrollToSection('programs')}
            className="w-full sm:w-auto px-8 py-4 rounded-lg bg-white/5 hover:bg-white/10 text-white font-heading text-2xl tracking-wider uppercase border border-white/20 hover:border-white/50 backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer"
            id="hero-explore-btn"
          >
            <span>Explore Programs</span>
          </button>
        </div>

        {/* Trust Badges */}
        <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 w-full max-w-4xl text-left">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-md bg-[#1F1F1F] text-[#FF4433] border border-[#2E2E2E]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-wider">Olympic Grade</p>
              <p className="text-xs text-gray-400">Eleiko & Rogue Rigging</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2 rounded-md bg-[#1F1F1F] text-[#FF4433] border border-[#2E2E2E]">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-wider">Master Coaches</p>
              <p className="text-xs text-gray-400">100% CSCS & Olympians</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2 rounded-md bg-[#1F1F1F] text-[#FF4433] border border-[#2E2E2E]">
              <Flame className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-wider">Contrast Recovery</p>
              <p className="text-xs text-gray-400">42°F Plunge & Infrared</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2 rounded-md bg-[#1F1F1F] text-[#FF4433] border border-[#2E2E2E]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-wider">No Contracts</p>
              <p className="text-xs text-gray-400">Cancel anytime policy</p>
            </div>
          </div>
        </div>

        {/* Animated Scroll Down Indicator */}
        <button
          onClick={() => scrollToSection('about')}
          className="mt-12 text-gray-400 hover:text-white transition flex flex-col items-center gap-1 group focus:outline-none cursor-pointer"
          aria-label="Scroll down to About section"
          id="hero-scroll-indicator"
        >
          <span className="text-[11px] uppercase tracking-widest font-semibold text-gray-400 group-hover:text-white">
            Discover IronForge
          </span>
          <div className="w-6 h-10 rounded-full border-2 border-gray-500 group-hover:border-[#FF4433] flex justify-center p-1.5 transition-colors">
            <div className="w-1.5 h-2.5 bg-[#FF4433] rounded-full animate-bounce" />
          </div>
        </button>
      </div>
    </section>
  );
};
