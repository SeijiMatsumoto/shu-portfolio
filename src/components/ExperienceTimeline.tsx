import React from 'react';
import { ScrollReveal } from './ScrollReveal';

interface TimelineItemProps {
  role: string;
  company: string;
  date: string;
  location: string;
  summary: string;
  bullets: string[];
}

const TimelineItem: React.FC<TimelineItemProps> = ({ role, company, date, location, summary, bullets }) => {
  return (
    <ScrollReveal className="timeline-item">
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <div className="timeline-header">
          <div>
            <h3 className="timeline-role">{role}</h3>
            <div className="timeline-company">{company}</div>
          </div>
          <div className="timeline-meta">
            <span className="timeline-date">{date}</span>
            <div className="timeline-location">{location}</div>
          </div>
        </div>
        <p>{summary}</p>
        <ul className="timeline-bullets">
          {bullets.map((bullet, idx) => (
            <li key={idx} dangerouslySetInnerHTML={{ __html: bullet }} />
          ))}
        </ul>
      </div>
    </ScrollReveal>
  );
};

export const ExperienceTimeline: React.FC = () => {
  const experiences = [
    {
      role: 'Associate Manager, Growth Marketing (Canada Strategy Lead)',
      company: 'DoorDash',
      date: 'April 2025 – Present',
      location: 'New York, NY',
      summary: 'Own Canada paid media strategy across 5 paid channels (Paid Social, Paid Search, Affiliate, Programmatic, Display) and 5 growth priorities (New User Acquisition, DashPass, Retention, Regional, New Verticals), managing an annual budget of $30-40M.',
      bullets: [
        '<strong>Strategic Leadership & People Management:</strong> Manage 1 direct report (scaling to 2) and guide a team of 5-8 agency, channel, and creative partners, setting cross-channel planning and creative priorities.',
        '<strong>In-Sourcing Impact:</strong> Transitioned digital media responsibilities in-house from a 6-person external agency team, delivering strategy directly and saving $2-3M in annual agency fees.',
        '<strong>Cross-Functional Partnership:</strong> Partner with 6+ teams across Growth, Brand, Merchant, and Partnership Marketing to deploy evergreen programs and co-branded JBP commitments.',
        '<strong>Hands-on Troubleshooting:</strong> Act as the crucial bridge between planning and execution, using hands-on keyboard experience to troubleshoot setups, optimize bidding, and scale acquisition 25% YoY.'
      ]
    },
    {
      role: 'Senior Paid Media Analyst – Paid Social, Affiliate & Display',
      company: 'The Company Store (The Home Depot)',
      date: 'March 2023 – April 2025',
      location: 'New York, NY',
      summary: 'Directed digital strategy and partner execution for paid social, display, and affiliate platforms, owning budget planning, accruals, and target optimization for $5-6M in annual spend.',
      bullets: [
        '<strong>Channel Expansion:</strong> Grew Paid Social revenue by 32% (ROAS +10%) and Affiliate channel revenue by 35% (ROAS +7%) YoY.',
        '<strong>Structured Testing:</strong> Conducted 11+ structured A/B tests covering product clearance strategies, ASC lifts, lifestyle creative tests, and bid multipliers, growing automated shopping revenue share from 5% to 51%.',
        '<strong>Financial Alignment:</strong> Reallocated quarterly budget allocations to higher-performing placements, meeting efficiency goals and lifting site-wide conversion by 15%.'
      ]
    },
    {
      role: 'Digital Marketing Specialist, North America',
      company: 'Lacoste',
      date: 'Oct 2021 – March 2023',
      location: 'New York, NY',
      summary: 'Managed a $2-3M paid media budget across Meta, TikTok, and Snapchat, directing agencies to optimize seasonal North American conversion volumes.',
      bullets: [
        '<strong>Conversion Optimization:</strong> Lifted blended ROAS from 1.3 to 1.5 through targeted optimization across ad units and lookalike audiences.',
        '<strong>Creative Testing:</strong> Championed structured A/B testing on ad creatives and bidding structures to maximize seasonal campaign performance.'
      ]
    },
    {
      role: 'Programmatic Media & SEO Specialist',
      company: 'W.W. Grainger, Inc.',
      date: 'July 2019 – July 2021',
      location: 'Chicago, IL',
      summary: 'Drove B2B in-house paid social campaigns and organic optimization programs for a Fortune 500 industrial distributor.',
      bullets: [
        '<strong>Programmatic Scale:</strong> Owned in-house paid social strategy on LinkedIn, Meta, and Twitter to capture high-value enterprise accounts.',
        '<strong>Technical SEO:</strong> Managed organic visibility optimization for over 1.6 million product pages during a massive site migration.'
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title">Career Milestones</h2>
        </ScrollReveal>
        <div className="timeline">
          {experiences.map((exp, idx) => (
            <TimelineItem key={idx} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
};
