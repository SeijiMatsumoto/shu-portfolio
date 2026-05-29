import React, { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';

interface BudgetAllocation {
  social: number;
  search: number;
  affiliate: number;
  programmatic: number;
  commentary: string;
}

const BUDGET_TIERS: { [key: number]: BudgetAllocation } = {
  100000: {
    social: 60,
    search: 30,
    affiliate: 0,
    programmatic: 10,
    commentary: "A tight test budget! We focus strictly on bottom-funnel conversion. Paid Search captures direct high-intent queries, while Meta Paid Social drives prospect acquisition. We skip Affiliate for now - we need to prove value first."
  },
  500000: {
    social: 50,
    search: 25,
    affiliate: 15,
    programmatic: 10,
    commentary: "Now we scale. We introduce Affiliate platforms (like Impact) to acquire customers on a risk-free cost-per-sale basis. Paid Social is expanded to dynamic TikTok tests, and Search is refined with negative keywords."
  },
  2000000: {
    social: 45,
    search: 30,
    affiliate: 15,
    programmatic: 10,
    commentary: "Strategic cross-channel territory. We allocate a solid chunk to Google Performance Max (PMax) search pipelines. Display retargeting recaptures drop-offs, and dynamic catalog feeds are deployed across programmatic channels."
  },
  10000000: {
    social: 40,
    search: 30,
    affiliate: 20,
    programmatic: 10,
    commentary: "A massive, full-funnel expansion budget. We establish evergreen Joint Business Plans (JBP) with major fintech and cashback portals. We structure awareness display campaigns on DV360 to lift search capture volumes."
  },
  40000000: {
    social: 40,
    search: 30,
    affiliate: 20,
    programmatic: 10,
    commentary: "DoorDash Canada level! This is my actual playground. Managing $40M means driving DashPass subscriptions, expanding regional vertices, and reactivating churned users. And the best part? I brought this entirely in-house, saving $2M in fees!"
  }
};

export const BudgetSimulator: React.FC = () => {
  const [budgetValue, setBudgetValue] = useState(2000000); // Default to $2M

  // Map slider value (0-4) to budget tiers
  const tierKeys = [100000, 500000, 2000000, 10000000, 40000000];
  const activeIndex = tierKeys.indexOf(budgetValue) !== -1 ? tierKeys.indexOf(budgetValue) : 2;

  const currentAllocation = BUDGET_TIERS[budgetValue] || BUDGET_TIERS[2000000];

  const formatBudget = (val: number) => {
    if (val >= 1000000) {
      return `$${val / 1000000}M`;
    }
    return `$${val / 1000}K`;
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const idx = parseInt(e.target.value);
    setBudgetValue(tierKeys[idx]);
  };

  return (
    <section id="allocator" className="allocator-section">
      <div className="container">
        
        <ScrollReveal>
          <h2 className="section-title">Canada Media Budget Allocator</h2>
          <p className="section-subtitle">
            Want to see how I allocate a growth budget? Slide the calculator to simulate different annual media spend targets, and see how my strategy adjusts instantly.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="allocator-card">
            
            {/* Left Column - Slider and Bars */}
            <div className="allocator-controls">
              
              <div className="slider-group">
                <div className="slider-label-row">
                  <span className="slider-title">Annual Canada Budget Goal</span>
                  <span className="slider-value">{formatBudget(budgetValue)}</span>
                </div>
                
                <input
                  type="range"
                  min="0"
                  max="4"
                  value={activeIndex}
                  onChange={handleSliderChange}
                  className="custom-range-slider"
                  aria-label="Annual Budget Allocator Slider"
                />
                
                <div className="slider-helper-ticks">
                  <span className="tick-mark" onClick={() => setBudgetValue(100000)}>$100K</span>
                  <span className="tick-mark" onClick={() => setBudgetValue(500000)}>$500K</span>
                  <span className="tick-mark" onClick={() => setBudgetValue(2000000)}>$2M</span>
                  <span className="tick-mark" onClick={() => setBudgetValue(10000000)}>$10M</span>
                  <span className="tick-mark" onClick={() => setBudgetValue(40000000)}>$40M</span>
                </div>
              </div>

              <h3 className="panel-column-title" style={{ marginTop: '1rem', marginBottom: '1.25rem' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                Tactical Spend Split (%)
              </h3>

              <div className="bars-container">
                
                {/* Social Bar */}
                <div className="allocation-bar-row">
                  <div className="bar-label-info">
                    <span className="bar-label">Paid Social (Meta, TikTok, Snap)</span>
                    <span className="bar-percentage-val">{currentAllocation.social}%</span>
                  </div>
                  <div className="bar-track">
                    <div className="bar-fill social" style={{ width: `${currentAllocation.social}%` }} />
                  </div>
                </div>

                {/* Search Bar */}
                <div className="allocation-bar-row">
                  <div className="bar-label-info">
                    <span className="bar-label">Paid Search (Google Ads, Bing)</span>
                    <span className="bar-percentage-val">{currentAllocation.search}%</span>
                  </div>
                  <div className="bar-track">
                    <div className="bar-fill search" style={{ width: `${currentAllocation.search}%` }} />
                  </div>
                </div>

                {/* Affiliate Bar */}
                <div className="allocation-bar-row">
                  <div className="bar-label-info">
                    <span className="bar-label">Affiliate & Partner Networks</span>
                    <span className="bar-percentage-val">{currentAllocation.affiliate}%</span>
                  </div>
                  <div className="bar-track">
                    <div className="bar-fill affiliate" style={{ width: `${currentAllocation.affiliate}%` }} />
                  </div>
                </div>

                {/* Programmatic Bar */}
                <div className="allocation-bar-row">
                  <div className="bar-label-info">
                    <span className="bar-label">Programmatic Display (DV360, DSPs)</span>
                    <span className="bar-percentage-val">{currentAllocation.programmatic}%</span>
                  </div>
                  <div className="bar-track">
                    <div className="bar-fill programmatic" style={{ width: `${currentAllocation.programmatic}%` }} />
                  </div>
                </div>

              </div>

            </div>

            {/* Right Column - Chat bubble comment */}
            <div className="allocator-sidebar">
              <div className="speech-bubble-container">
                <div className="speech-bubble-header">
                  <img src="/shu-headshot.jpeg" alt="Shu Wang Mini Avatar" className="mini-avatar" />
                  <div>
                    <div className="mini-avatar-name">Shu Wang</div>
                    <div className="mini-avatar-title">Growth Strategy Lead</div>
                  </div>
                </div>
                <div className="speech-text">
                  "{currentAllocation.commentary}"
                </div>
              </div>
            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
