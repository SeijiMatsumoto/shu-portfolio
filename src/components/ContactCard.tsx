import React, { useRef, useState, useEffect } from 'react';
import { ScrollReveal } from './ScrollReveal';

interface ConfettiParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  rotation: number;
  rotationSpeed: number;
}

export const ContactCard: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [canSubmit, setCanSubmit] = useState(true);
  const [timeRemainingMessage, setTimeRemainingMessage] = useState<string | null>(null);
  
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<ConfettiParticle[]>([]);
  const animationFrameRef = useRef<number | null>(null);

  const emailAddress = "shu96wang@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(emailAddress).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const triggerConfetti = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Generate particles
    const colors = [
      '#c084fc', // Lavender
      '#a78bfa', // Electric Purple
      '#818cf8', // Indigo Indigo
      '#f472b6', // Coral Pink
      '#38bdf8', // Light Blue
      '#fbbf24'  // Gold
    ];

    const particles: ConfettiParticle[] = [];
    for (let i = 0; i < 150; i++) {
      particles.push({
        x: canvas.width / 2 + (Math.random() - 0.5) * 50,
        y: canvas.height + 20,
        vx: (Math.random() - 0.5) * 15,
        vy: -Math.random() * 18 - 8,
        size: Math.random() * 8 + 6,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 10
      });
    }
    
    particlesRef.current = particles;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      let active = false;
      
      particlesRef.current.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.35; // Gravity
        p.vx *= 0.98; // Friction
        p.rotation += p.rotationSpeed;

        // Draw particle
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();

        if (p.y < canvas.height + 50) {
          active = true;
        }
      });

      if (active) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    };

    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    animate();
  };

  useEffect(() => {
    const checkSubmissionLimit = () => {
      const lastSent = localStorage.getItem('last_message_sent');
      if (lastSent) {
        const lastSentTime = parseInt(lastSent, 10);
        const oneWeekMs = 7 * 24 * 60 * 60 * 1000;
        const timePassed = Date.now() - lastSentTime;

        if (timePassed < oneWeekMs) {
          setCanSubmit(false);
          const remainingMs = oneWeekMs - timePassed;
          const remainingDays = Math.ceil(remainingMs / (24 * 60 * 60 * 1000));
          setTimeRemainingMessage(`Limit reached. Next message available in ${remainingDays} day${remainingDays > 1 ? 's' : ''}.`);
        } else {
          setCanSubmit(true);
          setTimeRemainingMessage(null);
        }
      }
    };

    checkSubmissionLimit();
    const interval = setInterval(checkSubmissionLimit, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) {
      setErrorMessage('You have already sent a message this week.');
      return;
    }
    setSubmitStatus('sending');
    setErrorMessage(null);

    try {
      const formData = new FormData();
      formData.append('access_key', '8d59fe2c-b358-42b3-928d-0a6d2c5c6dab');
      formData.append('name', formState.name);
      formData.append('email', formState.email);
      formData.append('subject', `[Portfolio Contact] ${formState.subject}`);
      formData.append('message', formState.message);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.message || 'Failed to send message.');
      }

      if (!import.meta.env.DEV) {
        localStorage.setItem('last_message_sent', Date.now().toString());
        setCanSubmit(false);
        setTimeRemainingMessage('Limit reached. Next message available in 7 days.');
      }

      setSubmitStatus('success');
      triggerConfetti();
    } catch (err) {
      setSubmitStatus('idle');
      const message = err instanceof Error ? err.message : 'Something went wrong. Please try again.';
      setErrorMessage(message);
    }
  };

  return (
    <>
      <canvas ref={canvasRef} id="confetti-canvas" />

      <section id="contact" className="contact-section">
        <div className="container">
          <ScrollReveal>
            <div className="contact-card">
              
              {/* Left Column info */}
              <div className="contact-info">
                <h2 className="contact-title">Let's talk <span>growth</span>.</h2>
                <p className="contact-tagline">I am always open to discussing new high-impact strategies, team leadership opportunities, and growth-focused challenges.</p>
                
                <div className="contact-methods">
                  
                  <a href={`mailto:${emailAddress}`} className="contact-method-item">
                    <div className="contact-icon-wrapper">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 400 }}>Email Me Direct</div>
                      <div>{emailAddress}</div>
                    </div>
                  </a>
                  <button className={`copy-btn ${copied ? 'tooltip show' : ''}`} onClick={handleCopy}>
                    {copied ? (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        Copied
                      </>
                    ) : (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                        Copy Address
                      </>
                    )}
                  </button>

                  <a href="https://www.linkedin.com/in/shu-wang11/" target="_blank" rel="noopener noreferrer" className="contact-method-item">
                    <div className="contact-icon-wrapper">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 400 }}>Connect on LinkedIn</div>
                      <div>linkedin.com/in/shu-wang11</div>
                    </div>
                  </a>

                </div>
              </div>

              {/* Form panel */}
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="form-input" 
                      placeholder="Alex Rivers" 
                      required 
                      autoComplete="name"
                      value={formState.name}
                      onChange={handleInputChange}
                      disabled={submitStatus !== 'idle' || !canSubmit}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="form-input" 
                      placeholder="alex@company.com" 
                      required 
                      autoComplete="email"
                      value={formState.email}
                      onChange={handleInputChange}
                      disabled={submitStatus !== 'idle' || !canSubmit}
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="form-input" 
                    placeholder="Opportunities, projects, or strategy talk" 
                    required
                    value={formState.subject}
                    onChange={handleInputChange}
                    disabled={submitStatus !== 'idle' || !canSubmit}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Your Message</label>
                  <textarea 
                    id="message" 
                    className="form-input" 
                    placeholder="Briefly, what would you like to achieve?" 
                    required
                    value={formState.message}
                    onChange={handleInputChange}
                    disabled={submitStatus !== 'idle' || !canSubmit}
                  />
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary" 
                  style={{ 
                    alignSelf: 'flex-start', 
                    marginTop: '0.5rem', 
                    width: '100%',
                    background: submitStatus === 'success' ? 'linear-gradient(135deg, hsl(150, 80%, 40%) 0%, hsl(160, 80%, 30%) 100%)' : '',
                    color: submitStatus === 'success' ? '#ffffff' : ''
                  }}
                  disabled={submitStatus !== 'idle' || !canSubmit}
                >
                  {submitStatus === 'idle' && (canSubmit ? 'Send Direct Message 🚀' : 'Submission Limit Active 🔒')}
                  {submitStatus === 'sending' && 'Sending message...'}
                  {submitStatus === 'success' && 'Message Sent! Boom. 💥'}
                </button>
                {errorMessage && (
                  <div style={{ color: 'var(--secondary)', fontSize: '0.9rem', fontWeight: 700, marginTop: '0.75rem', textAlign: 'center' }}>
                    {errorMessage}
                  </div>
                )}
                {timeRemainingMessage && (
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 700, marginTop: '0.75rem', textAlign: 'center' }}>
                    {timeRemainingMessage}
                  </div>
                )}
              </form>

            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};
