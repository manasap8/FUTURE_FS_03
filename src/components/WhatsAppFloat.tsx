import React, { useState } from 'react';
import { gymInfo } from '../data/gymData.ts';
import { MessageCircle, X } from 'lucide-react';

export const WhatsAppFloat: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const greeting = encodeURIComponent("Hi IronForge Gym! I'd like to claim my free 1-day trial pass.");
  const waUrl = `https://wa.me/${gymInfo.whatsappRaw}?text=${greeting}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Tooltip notice */}
      {showTooltip && (
        <div className="mb-3 relative bg-[#141414] border border-[#2B2B2B] text-white p-3 rounded-xl shadow-2xl max-w-xs flex items-center justify-between gap-3 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#25D366]">
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping" />
              <span>Coach On Duty Now</span>
            </div>
            <p className="text-[11px] text-gray-300 mt-0.5">
              Questions or claiming a pass? Chat directly on WhatsApp.
            </p>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-gray-400 hover:text-white p-1"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-2xl shadow-[#25D366]/40 hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none"
        aria-label="Chat with IronForge on WhatsApp"
        id="floating-whatsapp-btn"
      >
        <MessageCircle className="w-7 h-7 fill-white text-transparent group-hover:scale-105 transition-transform" />
        
        {/* Subtle Pulse Ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />
      </a>
    </div>
  );
};
