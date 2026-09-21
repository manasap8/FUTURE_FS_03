import React from 'react';
import { gymInfo } from '../data/gymData.ts';
import { 
  Dumbbell, 
  Instagram, 
  Facebook, 
  Youtube, 
  Music, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowUp 
} from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

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

  return (
    <footer className="bg-[#080808] border-t border-[#1C1C1C] text-gray-400 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#1E1E1E]">
          {/* Brand Col */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-lg bg-[#FF4433] flex items-center justify-center text-white shadow-lg shadow-[#FF4433]/30">
                <Dumbbell className="w-5 h-5" />
              </div>
              <span className="font-heading text-3xl text-white tracking-wider">
                IRON<span className="text-[#FF4433]">FORGE</span>
              </span>
            </div>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed max-w-sm font-light">
              Bengaluru’s premier high-performance strength, conditioning, and thermal recovery facility. 
              Built for those who refuse to settle for average.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href={gymInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#141414] border border-[#2B2B2B] hover:border-[#FF4433] text-gray-300 hover:text-[#FF4433] flex items-center justify-center transition"
                aria-label="Follow on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#141414] border border-[#2B2B2B] hover:border-[#FF4433] text-gray-300 hover:text-[#FF4433] flex items-center justify-center transition"
                aria-label="Subscribe on YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#141414] border border-[#2B2B2B] hover:border-[#FF4433] text-gray-300 hover:text-[#FF4433] flex items-center justify-center transition"
                aria-label="Like on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://spotify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#141414] border border-[#2B2B2B] hover:border-[#FF4433] text-gray-300 hover:text-[#FF4433] flex items-center justify-center transition"
                aria-label="Listen to IronForge Spotify Training Playlist"
                title="IronForge Workout Beats"
              >
                <Music className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3">
            <h4 className="font-heading text-xl text-white tracking-wider uppercase mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-[#FF4433] transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#FF4433] text-xs">›</span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="lg:col-span-2">
            <h4 className="font-heading text-xl text-white tracking-wider uppercase mb-4">
              Pillars
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li className="hover:text-[#FF4433] transition cursor-pointer">Strength & Power</li>
              <li className="hover:text-[#FF4433] transition cursor-pointer">Cardio & MetCon</li>
              <li className="hover:text-[#FF4433] transition cursor-pointer">Functional WODs</li>
              <li className="hover:text-[#FF4433] transition cursor-pointer">Cold Plunge & Sauna</li>
              <li className="hover:text-[#FF4433] transition cursor-pointer">1-on-1 Coaching</li>
            </ul>
          </div>

          {/* Direct Contact Summary */}
          <div className="lg:col-span-3">
            <h4 className="font-heading text-xl text-white tracking-wider uppercase mb-4">
              Headquarters
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FF4433] shrink-0 mt-1" />
                <span>
                  {gymInfo.address}, <br />
                  {gymInfo.cityStateZip}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FF4433] shrink-0" />
                <a href={`tel:${gymInfo.phoneRaw}`} className="hover:text-white transition">
                  {gymInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#FF4433] shrink-0" />
                <a href={`mailto:${gymInfo.email}`} className="hover:text-white transition">
                  {gymInfo.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <div>
            © {new Date().getFullYear()} {gymInfo.name}. All Rights Reserved. Built with uncompromising strength.
          </div>

          <div className="flex items-center gap-6">
            <a href="#home" className="hover:text-gray-300 transition">Privacy Policy</a>
            <a href="#home" className="hover:text-gray-300 transition">Terms of Service</a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#141414] border border-[#2B2B2B] text-gray-300 hover:text-white hover:border-[#FF4433] transition flex items-center gap-1 cursor-pointer"
              title="Back to Top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
