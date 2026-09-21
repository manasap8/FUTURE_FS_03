import React, { useState } from 'react';
import { gymInfo, programs } from '../data/gymData.ts';
import { X, CheckCircle, ShieldCheck, Ticket, Dumbbell, Sparkles } from 'lucide-react';

interface FreePassModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedPlan?: string;
  preselectedProgram?: string;
}

export const FreePassModal: React.FC<FreePassModalProps> = ({
  isOpen,
  onClose,
  preselectedPlan,
  preselectedProgram,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedDiscipline, setSelectedDiscipline] = useState(
    preselectedProgram || 'Strength & Hypertrophy'
  );
  const [passCode, setPassCode] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !phone.trim()) {
      setError('Please provide your name, email, and phone number.');
      return;
    }

    setError('');
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const randomCode = 'IF-BLR-' + Math.floor(1000 + Math.random() * 9000);
      setPassCode(randomCode);
    }, 500);
  };

  const handleReset = () => {
    setPassCode(null);
    setName('');
    setEmail('');
    setPhone('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#141414] border border-[#2B2B2B] rounded-2xl overflow-hidden shadow-2xl">
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-[#FF4433] to-[#FF5E50] p-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Ticket className="w-5 h-5" />
            <span className="font-heading text-xl uppercase tracking-wider">
              Exclusive 1-Day VIP Pass
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-white/80 hover:text-white hover:bg-black/20 transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8">
          {passCode ? (
            <div className="text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-[#25D366]/20 text-[#25D366] flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="font-heading text-3xl text-white uppercase tracking-wide">
                You're In, {name}!
              </h3>
              <p className="text-xs text-gray-300 mt-1 max-w-sm">
                Present this VIP digital pass at the front desk when you arrive.
              </p>

              {/* Digital Pass Ticket Badge */}
              <div className="my-6 w-full p-5 rounded-xl bg-[#1C1C1C] border-2 border-dashed border-[#FF4433] text-left">
                <div className="flex justify-between items-center border-b border-[#2E2E2E] pb-3 mb-3">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-gray-400">Pass Code</span>
                    <p className="font-mono text-xl font-black text-[#FF4433] tracking-widest">
                      {passCode}
                    </p>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#FF4433]/20 text-[#FF4433] uppercase">
                    Active VIP
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs text-gray-300">
                  <div>
                    <span className="text-gray-500 block text-[10px] uppercase">Guest</span>
                    <span className="font-semibold text-white">{name}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block text-[10px] uppercase">Focus</span>
                    <span className="font-semibold text-white">{selectedDiscipline}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block text-[10px] uppercase">Location</span>
                    <span className="text-white">Indiranagar, Bengaluru</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block text-[10px] uppercase">Includes</span>
                    <span className="text-[#FF5E50]">Cold Plunge & Sauna</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <a
                  href={`https://wa.me/${gymInfo.whatsappRaw}?text=Hi!%20I%20have%20pass%20${passCode}%20under%20${encodeURIComponent(name)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 rounded-lg bg-[#25D366] hover:bg-[#22bf5b] text-white text-xs font-bold uppercase tracking-wider transition text-center"
                >
                  Confirm Arrival via WhatsApp
                </a>
                <button
                  onClick={handleReset}
                  className="px-5 py-3 rounded-lg bg-[#242424] hover:bg-[#2F2F2F] text-white text-xs font-bold uppercase tracking-wider transition"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="mb-2">
                <h3 className="font-heading text-2xl text-white uppercase tracking-wide">
                  Experience The IronForge Standard
                </h3>
                <p className="text-xs text-gray-400 mt-0.5">
                  Test-drive our lifting platforms, group MetCon sessions, and thermal recovery suite for free.
                </p>
              </div>

              {error && (
                <div className="p-3 rounded-lg bg-[#FF4433]/15 border border-[#FF4433]/40 text-xs text-[#FF5E50]">
                  {error}
                </div>
              )}

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-300 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Jordan Hayes"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#1C1C1C] border border-[#2B2B2B] text-white text-sm focus:border-[#FF4433] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jordan@example.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#1C1C1C] border border-[#2B2B2B] text-white text-sm focus:border-[#FF4433] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-300 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(512) 555-0144"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#1C1C1C] border border-[#2B2B2B] text-white text-sm focus:border-[#FF4433] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-300 mb-1">
                  What Do You Want To Train?
                </label>
                <select
                  value={selectedDiscipline}
                  onChange={(e) => setSelectedDiscipline(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#1C1C1C] border border-[#2B2B2B] text-white text-sm focus:border-[#FF4433] focus:outline-none"
                >
                  <option value="Strength & Hypertrophy">Strength & Hypertrophy Lifting</option>
                  <option value="Cardio & MetCon HIIT">Cardio & MetCon HIIT Class</option>
                  <option value="CrossFit & Functional Fitness">CrossFit & Functional Fitness WOD</option>
                  <option value="Contrast Recovery & Sauna">Thermal Recovery (Cold Plunge & Sauna)</option>
                  <option value="Open Gym Facility Exploration">Open Gym Facility Exploration</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-[#FF4433] hover:bg-[#FF5E50] text-white font-heading text-xl uppercase tracking-wider transition shadow-lg shadow-[#FF4433]/30 cursor-pointer"
                >
                  {isSubmitting ? 'Generating VIP Pass...' : 'Generate My 1-Day Pass Now'}
                </button>
              </div>

              <p className="text-[10px] text-gray-500 text-center">
                Valid for local Austin residents & visitors. No credit card required.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
