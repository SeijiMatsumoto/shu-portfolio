import React from 'react';
import { ScrollReveal } from './ScrollReveal';

interface SkillCategoryProps {
  title: string;
  icon: React.ReactNode;
  tags: string[];
  delay?: string;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, icon, tags, delay }) => {
  return (
    <ScrollReveal className="skills-category-card" delay={delay}>
      <h3 className="skills-category-title">
        {icon}
        {title}
      </h3>
      <div className="skills-tag-list">
        {tags.map((tag, idx) => (
          <span key={idx} className="skill-tag">
            {tag}
          </span>
        ))}
      </div>
    </ScrollReveal>
  );
};

export const SkillsGrid: React.FC = () => {
  const skillCategories = [
    {
      title: 'Paid Media Platforms',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      ),
      tags: ['Meta Ads', 'TikTok Ads', 'Snapchat Ads', 'Pinterest Ads', 'Reddit Ads', 'Google Ads', 'DV360', 'Amazon Ads', 'Criteo', 'Impact Radius'],
      delay: '0s'
    },
    {
      title: 'Analytics & Data',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10"></line>
          <line x1="12" y1="20" x2="12" y2="4"></line>
          <line x1="6" y1="20" x2="6" y2="14"></line>
        </svg>
      ),
      tags: ['GA4', 'Adobe Experience Cloud', 'SQL', 'Snowflake', 'Tableau', 'seoClarity', 'Excel Analytics'],
      delay: '0.1s'
    },
    {
      title: 'Measurement & Testing',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
        </svg>
      ),
      tags: ['A/B Testing', 'Marketing Mix Modeling', 'Incrementality Lifts', 'Budget Forecasting', 'Performance Attribution', 'Target CPA/ROAS Bidding'],
      delay: '0.2s'
    },
    {
      title: 'Strategy & Leadership',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      tags: ['Cross-Channel Planning', 'Budget Allocation', 'Agency Management', 'People Management', 'Stakeholder Alignment', 'Creative Direction Setting', 'AI Workflows'],
      delay: '0.3s'
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title">Core Competencies</h2>
        </ScrollReveal>
        <div className="skills-grid" id="stagger-list">
          {skillCategories.map((cat, idx) => (
            <SkillCategory key={idx} {...cat} />
          ))}
        </div>
      </div>
    </section>
  );
};
