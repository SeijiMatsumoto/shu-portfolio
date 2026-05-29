import React, { useEffect, useRef, useState } from 'react';
import { ScrollReveal } from './ScrollReveal';

interface StatItemProps {
  target: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ target, label }) => {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!triggered) return;

    const isPercent = target.includes('%');
    const isRange = target.includes('-') && target.includes('M');
    const isMillion = !target.includes('-') && target.includes('M');
    
    let targetNum = 0;

    if (isPercent) {
      targetNum = parseInt(target.replace('%', ''));
    } else if (isRange) {
      targetNum = parseFloat(target.split('-')[1].replace('M', ''));
    } else if (isMillion) {
      targetNum = parseFloat(target.replace('M', '').replace('$', ''));
    } else {
      targetNum = parseFloat(target);
    }

    const duration = 1500;
    const startTime = performance.now();
    let animationFrameId: number;

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = progress * (2 - progress);
      const currentVal = Math.round(easeProgress * targetNum);

      setValue(currentVal);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [triggered, target]);

  const renderDisplay = () => {
    if (!triggered) {
      if (target.startsWith('$')) return '$0M';
      if (target.includes('-')) return target.split('-')[0] + '-0M';
      if (target.includes('%')) return '0%';
      return '0';
    }
    const isPercent = target.includes('%');
    const isRange = target.includes('-') && target.includes('M');
    const isMillion = !target.includes('-') && target.includes('M');

    if (isPercent) return `${value}%`;
    if (isRange) return `${target.split('-')[0]}-${value}M`;
    if (isMillion) return `${target.startsWith('$') ? '$' : ''}${value}M`;
    return `${value}`;
  };

  return (
    <div ref={ref} className="stat-card">
      <span className="stat-number">{renderDisplay()}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
};

export const StatsDashboard: React.FC = () => {
  return (
    <section className="stats-section">
      <div className="container">
        <ScrollReveal>
          <div className="stats-grid">
            <StatItem target="$40M" label="Annual Paid Media Budget Managed" />
            <StatItem target="25%" label="DoorDash Canada MAU YoY Growth" />
            <StatItem target="35%" label="The Home Depot Affiliate Rev. Growth" />
            <StatItem target="2-3M" label="Annual Agency Fees Saved by In-Sourcing" />
            <StatItem target="10%" label="CPA Reduction in YoY Campaigns" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
