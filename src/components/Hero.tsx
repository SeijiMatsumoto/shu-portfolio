import React from 'react';
import { ScrollReveal } from './ScrollReveal';

export const Hero: React.FC = () => {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-grid">
          
          <ScrollReveal className="hero-intro">
            <span className="hero-tagline">Open to new opportunities</span>
            <h1 className="hero-title">
              I scale <span>paid media</span> & drive strategic growth.
            </h1>
            <p className="hero-description">
              Hello! I’m Shu. I a <strong>Growth Marketing Manager</strong> with 7+ years of experience driving paid media and cross-channel strategies. Currently leading Canada Growth and Paid Media at <strong>DoorDash</strong>, managing <strong>$30-40M budgets</strong> and delivering razor-sharp performance.
            </p>
            <div className="hero-actions">
              <button onClick={() => handleScrollTo('engine')} className="btn btn-primary">
                View My Impact
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </button>
              <button onClick={() => handleScrollTo('contact')} className="btn btn-outline">Let's Connect</button>
            </div>
          </ScrollReveal>
          
          <ScrollReveal className="hero-visual" delay="0.15s">
            <div className="image-frame-container">
              <div className="image-frame-glow"></div>
              <div className="image-frame-border"></div>
              <img src="/shu-headshot.png" alt="Shu Wang Headshot" className="headshot-img" width="320" height="380" />
              <div className="dots-grid"></div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};
