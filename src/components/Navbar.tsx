import React, { useState, useEffect } from 'react';
import { Menu, X, Dumbbell, Phone, ArrowRight } from 'lucide-react';
import { gymInfo } from '../data/gymData.ts';

interface NavbarProps {
  onOpenJoinModal: (plan?: string) => void;
}

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Programs', href: '#programs' },
  { name: 'Trainers', href: '#trainers' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Reviews', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenJoinModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Detect active section
      const sections = navLinks.map(l => l.href.substring(1));
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0D0D0D]/95 backdrop-blur-md border-b border-[#262626] py-3.5 shadow-2xl'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-2.5 group focus:outline-none"
          id="nav-logo"
        >
          <div className="w-10 h-10 rounded-lg bg-[#FF4433] flex items-center justify-center text-white shadow-lg shadow-[#FF4433]/30 group-hover:scale-105 transition-transform">
            <Dumbbell className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-2xl md:text-3xl text-white tracking-wider leading-none">
              IRON<span className="text-[#FF4433]">FORGE</span>
            </span>
            <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400 -mt-0.5">
              Fitness Bengaluru
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3.5 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-white bg-[#1F1F1F] font-semibold border border-[#333]'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={`tel:${gymInfo.phoneRaw}`}
            className="hidden xl:flex items-center gap-2 text-xs font-semibold text-gray-300 hover:text-white px-3 py-2 rounded-lg border border-transparent hover:border-[#262626] transition"
            id="nav-phone-link"
          >
            <Phone className="w-3.5 h-3.5 text-[#FF4433]" />
            <span>{gymInfo.phone}</span>
          </a>

          <button
            onClick={() => onOpenJoinModal()}
            className="relative group overflow-hidden px-5 py-2.5 rounded-md bg-[#FF4433] hover:bg-[#FF5E50] text-white font-semibold text-sm tracking-wide uppercase transition-all duration-200 shadow-lg shadow-[#FF4433]/25 hover:shadow-[#FF4433]/40 active:scale-95 flex items-center gap-1.5"
            id="nav-join-btn"
          >
            <span>Join Now</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 sm:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 focus:outline-none"
            aria-label="Toggle Navigation Menu"
            id="nav-mobile-toggle"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer"
          className="fixed inset-0 top-[68px] z-40 bg-[#0D0D0D]/95 backdrop-blur-xl border-b border-[#262626] flex flex-col p-6 sm:hidden overflow-y-auto animate-in fade-in duration-200"
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-3 rounded-lg text-lg font-medium transition ${
                    isActive
                      ? 'text-white bg-[#1F1F1F] border-l-4 border-[#FF4433] pl-5'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          <div className="mt-8 pt-6 border-t border-[#262626] flex flex-col gap-4">
            <div className="text-xs text-gray-400 flex flex-col gap-1">
              <span className="font-semibold text-gray-200">HOURS:</span>
              <span>{gymInfo.hoursWeekday}</span>
              <span>{gymInfo.hoursWeekend}</span>
            </div>

            <a
              href={`tel:${gymInfo.phoneRaw}`}
              className="flex items-center gap-2 text-sm text-gray-300 hover:text-white"
            >
              <Phone className="w-4 h-4 text-[#FF4433]" />
              <span>{gymInfo.phone}</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenJoinModal();
              }}
              className="w-full py-3.5 rounded-lg bg-[#FF4433] hover:bg-[#FF5E50] text-white font-bold text-base tracking-wider uppercase shadow-xl shadow-[#FF4433]/30 transition text-center"
              id="mobile-nav-join-btn"
            >
              Claim Free 1-Day Pass
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
