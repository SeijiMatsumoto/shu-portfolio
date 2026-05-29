import React, { useEffect, useRef, useState } from 'react';

export const BackgroundAura: React.FC = () => {
  const glowRef = useRef<HTMLDivElement>(null);
  const [isMobileOrMotionReduced, setIsMobileOrMotionReduced] = useState(false);

  useEffect(() => {
    // Check if user prefers reduced motion or is on mobile
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const mobileQuery = window.matchMedia('(max-width: 768px)');
    
    const checkRestrictions = () => {
      setIsMobileOrMotionReduced(motionQuery.matches || mobileQuery.matches);
    };

    checkRestrictions();
    motionQuery.addEventListener('change', checkRestrictions);
    mobileQuery.addEventListener('change', checkRestrictions);

    if (motionQuery.matches || mobileQuery.matches) return;

    let mouseX = 0;
    let mouseY = 0;
    let glowX = 0;
    let glowY = 0;
    let isMoving = false;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY + window.scrollY;
      
      if (!isMoving && glowRef.current) {
        glowRef.current.style.opacity = '1';
        isMoving = true;
      }
    };

    const handleMouseLeave = () => {
      if (glowRef.current) {
        glowRef.current.style.opacity = '0';
      }
      isMoving = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    let animationFrameId: number;

    const animate = () => {
      if (isMoving && glowRef.current) {
        glowX += (mouseX - glowX) * 0.08;
        glowY += (mouseY - glowY) * 0.08;
        glowRef.current.style.left = `${glowX}px`;
        glowRef.current.style.top = `${glowY}px`;
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
      motionQuery.removeEventListener('change', checkRestrictions);
      mobileQuery.removeEventListener('change', checkRestrictions);
    };
  }, []);

  return (
    <div id="bg-glow-container" aria-hidden="true">
      <div className="glow-blob glow-blob-1"></div>
      <div className="glow-blob glow-blob-2"></div>
      {!isMobileOrMotionReduced && (
        <div ref={glowRef} className="glow-blob glow-blob-cursor" />
      )}
    </div>
  );
};
