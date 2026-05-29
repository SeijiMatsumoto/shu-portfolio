import React, { useEffect, useState } from 'react';

export const FloatingPomeranian: React.FC = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      const contactSection = document.getElementById('contact');

      const heroVisible = heroSection
        ? heroSection.getBoundingClientRect().bottom > window.innerHeight * 0.3
        : false;

      const contactVisible = contactSection
        ? contactSection.getBoundingClientRect().top < window.innerHeight * 0.85
        : false;

      setVisible(!heroVisible && !contactVisible);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className={`floating-dog-container ${visible ? 'visible' : 'hidden'}`} 
      onClick={handleScrollToContact}
      title="Scroll to Contact"
      aria-label="Scroll to Contact"
    >
      <div className="dog-speech-bubble">Let's Connect! 🐾</div>
      <img 
        src="/cute-pomeranian-flat-no-bg.png" 
        className="pomeranian-img" 
        alt="Cute Fluffy White Pomeranian"
        width="80"
        height="80"
      />
    </div>
  );
};
