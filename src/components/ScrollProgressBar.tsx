import React, { useEffect, useState } from 'react';

export const ScrollProgressBar: React.FC = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      if (documentHeight > 0) {
        const percentage = Math.min(100, Math.max(0, (scrollY / documentHeight) * 100));
        setScrollPercentage(percentage);
      } else {
        setScrollPercentage(0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    // Initial run
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div
      id="scroll-progress-container"
      className="fixed top-0 left-0 right-0 h-[3px] z-[100] pointer-events-none bg-black/20"
      aria-hidden="true"
    >
      <div
        id="scroll-progress-bar"
        className="h-full bg-gradient-to-r from-[#FF5E50] via-[#FF4433] to-[#FF220C] shadow-[0_0_8px_rgba(255,68,51,0.8)] transition-[width] duration-75 ease-out will-change-[width]"
        style={{ width: `${scrollPercentage}%` }}
      />
    </div>
  );
};
