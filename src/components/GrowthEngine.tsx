import React, { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';

type TabId = 'tab-social' | 'tab-search' | 'tab-affiliate' | 'tab-programmatic' | 'tab-dashpass' | 'tab-verticals' | 'tab-regional';

export const GrowthEngine: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabId>('tab-social');

  const handleTabChange = (tabId: TabId) => {
    setActiveTab(tabId);
  };

  return (
    <section id="engine" className="engine-section">
      <div className="container">
        
        <ScrollReveal className="engine-intro">
          <h2 className="section-title">The Growth Engine</h2>
          <p>My dual edge: high-level marketing strategy backed by deep hands-on execution. Toggle through my paid channels and growth priorities below to see how I drive bottom-line impact.</p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="engine-widget">
            
            {/* TAB SELECTOR */}
            <div className="engine-tabs">
              <span className="engine-tab-title">By Channel</span>
              
              <button 
                className={`tab-btn ${activeTab === 'tab-social' ? 'active' : ''}`} 
                onClick={() => handleTabChange('tab-social')}
              >
                Paid Social
                <span className="badge">Platform</span>
              </button>
              <button 
                className={`tab-btn ${activeTab === 'tab-search' ? 'active' : ''}`} 
                onClick={() => handleTabChange('tab-search')}
              >
                Paid Search
                <span className="badge">Platform</span>
              </button>
              <button 
                className={`tab-btn ${activeTab === 'tab-affiliate' ? 'active' : ''}`} 
                onClick={() => handleTabChange('tab-affiliate')}
              >
                Affiliate Marketing
                <span className="badge">Scale</span>
              </button>
              <button 
                className={`tab-btn ${activeTab === 'tab-programmatic' ? 'active' : ''}`} 
                onClick={() => handleTabChange('tab-programmatic')}
              >
                Programmatic & Display
                <span className="badge">AdTech</span>
              </button>

              <span className="engine-tab-title" style={{ marginTop: '1.5rem' }}>By Growth Area</span>
              
              <button 
                className={`tab-btn ${activeTab === 'tab-dashpass' ? 'active' : ''}`} 
                onClick={() => handleTabChange('tab-dashpass')}
              >
                DashPass Growth
                <span className="badge">LTV</span>
              </button>
              <button 
                className={`tab-btn ${activeTab === 'tab-verticals' ? 'active' : ''}`} 
                onClick={() => handleTabChange('tab-verticals')}
              >
                New Verticals
                <span className="badge">Niche</span>
              </button>
              <button 
                className={`tab-btn ${activeTab === 'tab-regional' ? 'active' : ''}`} 
                onClick={() => handleTabChange('tab-regional')}
              >
                Regional Expansion
                <span className="badge">Local</span>
              </button>
            </div>

            {/* TAB CONTENT DISPLAY */}
            <div className="engine-content">
              
              {/* PAID SOCIAL PANEL */}
              <div className={`tab-panel ${activeTab === 'tab-social' ? 'active' : ''}`}>
                <div className="panel-header">
                  <h3 className="panel-title">Paid Social Strategy</h3>
                  <div className="panel-meta">
                    <span className="panel-meta-item">Scope: <strong>Global Scale</strong></span>
                    <span className="panel-meta-item">Annual Spend: <strong>$15M+</strong></span>
                  </div>
                </div>
                <div className="panel-body-grid">
                  <div>
                    <h4 className="panel-column-title">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                      Strategic Ownership & Delegation
                    </h4>
                    <ul className="panel-list">
                      <li>Define cross-platform Social strategy across Meta, TikTok, and Snapchat to ladder up to Canada Growth goals.</li>
                      <li>Delegate day-to-day campaign setup and creative curation to direct reports and creative partners.</li>
                      <li>Align with cross-functional Brand and Partnership teams for coordinated evergreen and launch campaigns.</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="panel-column-title">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                      Hands-on Platforms & Tools
                    </h4>
                    <div className="platform-tags" style={{ marginBottom: '1.5rem' }}>
                      <span className="platform-tag">Meta Ads Manager</span>
                      <span className="platform-tag">TikTok Ads</span>
                      <span className="platform-tag">Snapchat Ads</span>
                      <span className="platform-tag">Pinterest Ads</span>
                      <span className="platform-tag">Reddit Ads</span>
                    </div>
                    <h4 className="panel-column-title" style={{ marginBottom: '0.75rem' }}>Key Performance Metrics</h4>
                    <ul className="panel-list">
                      <li>Drove 32% Paid Social revenue growth and +10% ROAS YoY at The Home Depot.</li>
                      <li>Lowered acquisition Social CPA by 10% through advanced Meta ASC targeting tests.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* PAID SEARCH PANEL */}
              <div className={`tab-panel ${activeTab === 'tab-search' ? 'active' : ''}`}>
                <div className="panel-header">
                  <h3 className="panel-title">Paid Search Leadership</h3>
                  <div className="panel-meta">
                    <span className="panel-meta-item">Focus: <strong>Intent Capture</strong></span>
                    <span className="panel-meta-item">Priority: <strong>Efficiency & Volume</strong></span>
                  </div>
                </div>
                <div className="panel-body-grid">
                  <div>
                    <h4 className="panel-column-title">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                      Strategic Ownership & Delegation
                    </h4>
                    <ul className="panel-list">
                      <li>Steer structural Paid Search strategy across high-intent queries to expand acquisition footprint.</li>
                      <li>Guide external channel agencies on bidding strategies, budget reallocations, and keyword matrices.</li>
                      <li>Oversee keyword inventory health, ad copy iteration, and quality score improvements.</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="panel-column-title">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                      Hands-on Platforms & Tools
                    </h4>
                    <div className="platform-tags" style={{ marginBottom: '1.5rem' }}>
                      <span className="platform-tag">Google Ads</span>
                      <span className="platform-tag">Bing Search</span>
                      <span className="platform-tag">GA4</span>
                      <span className="platform-tag">Tableau</span>
                      <span className="platform-tag">Snowflake</span>
                    </div>
                    <h4 className="panel-column-title" style={{ marginBottom: '0.75rem' }}>Key Performance Metrics</h4>
                    <ul className="panel-list">
                      <li>Led dual search strategy boosting efficiency under strict CPA constraints.</li>
                      <li>Pioneered Performance Max testing, lifting target conversion volume by 15%.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* AFFILIATE MARKETING PANEL */}
              <div className={`tab-panel ${activeTab === 'tab-affiliate' ? 'active' : ''}`}>
                <div className="panel-header">
                  <h3 className="panel-title">Partnership & Affiliate Scaling</h3>
                  <div className="panel-meta">
                    <span className="panel-meta-item">Focus: <strong>ROAS & LTV</strong></span>
                    <span className="panel-meta-item">Channels: <strong>Sub-networks & FinTech</strong></span>
                  </div>
                </div>
                <div className="panel-body-grid">
                  <div>
                    <h4 className="panel-column-title">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                      Strategic Ownership & Delegation
                    </h4>
                    <ul className="panel-list">
                      <li>Manage high-impact affiliate partners, finance platforms, cashback portals, and loyalty programs.</li>
                      <li>Delegate campaign deployment workflows while defining placement criteria and ROI thresholds.</li>
                      <li>Align evergreen Joint Business Plans (JBP) with key regional retail partners.</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="panel-column-title">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                      Hands-on Platforms & Tools
                    </h4>
                    <div className="platform-tags" style={{ marginBottom: '1.5rem' }}>
                      <span className="platform-tag">Impact Radius</span>
                      <span className="platform-tag">Rakuten LinkShare</span>
                      <span className="platform-tag">Commission Junction</span>
                      <span className="platform-tag">A/B Testing</span>
                    </div>
                    <h4 className="panel-column-title" style={{ marginBottom: '0.75rem' }}>Key Performance Metrics</h4>
                    <ul className="panel-list">
                      <li>Boosted affiliate revenue by 35% and ROAS by 7% at The Home Depot.</li>
                      <li>Scaled affiliate channel to represent a primary efficient pillar for DoorDash Canada growth.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* PROGRAMMATIC PANEL */}
              <div className={`tab-panel ${activeTab === 'tab-programmatic' ? 'active' : ''}`}>
                <div className="panel-header">
                  <h3 className="panel-title">Programmatic & Display Systems</h3>
                  <div className="panel-meta">
                    <span className="panel-meta-item">Focus: <strong>Mid-Funnel Capture</strong></span>
                    <span className="panel-meta-item">Scale: <strong>Broad Reach</strong></span>
                  </div>
                </div>
                <div className="panel-body-grid">
                  <div>
                    <h4 className="panel-column-title">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                      Strategic Ownership & Delegation
                    </h4>
                    <ul className="panel-list">
                      <li>Drive mid-funnel Display and Programmatic strategies to fuel retargeting and customer reactivation.</li>
                      <li>Guide agency programmatic specialists on audience segmentation, inventory bids, and placement blacklists.</li>
                      <li>Partner with visual designers to coordinate and test dynamic, highly personalized lifestyle creative.</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="panel-column-title">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                      Hands-on Platforms & Tools
                    </h4>
                    <div className="platform-tags" style={{ marginBottom: '1.5rem' }}>
                      <span className="platform-tag">DV360</span>
                      <span className="platform-tag">Amazon DSP</span>
                      <span className="platform-tag">Criteo</span>
                      <span className="platform-tag">Google Display Network</span>
                    </div>
                    <h4 className="panel-column-title" style={{ marginBottom: '0.75rem' }}>Key Performance Metrics</h4>
                    <ul className="panel-list">
                      <li>Executed multi-million dollar display plans, improving post-view conversion rate by 15%.</li>
                      <li>Integrated cross-funnel measurement using MMM modeling data to justify display attribution.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* DASHPASS PANEL */}
              <div className={`tab-panel ${activeTab === 'tab-dashpass' ? 'active' : ''}`}>
                <div className="panel-header">
                  <h3 className="panel-title">DashPass Membership Growth</h3>
                  <div className="panel-meta">
                    <span className="panel-meta-item">Focus: <strong>LTV Enhancement</strong></span>
                    <span className="panel-meta-item">Ownership: <strong>Strategy & Campaign</strong></span>
                  </div>
                </div>
                <div className="panel-body-grid">
                  <div>
                    <h4 className="panel-column-title">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                      Strategic Ownership & Delegation
                    </h4>
                    <ul className="panel-list">
                      <li>Pioneered DashPass strategy across Canada, shifting scope to prioritize high-LTV memberships.</li>
                      <li>Designed structured A/B creative and audience targeting tests specifically for membership conversion.</li>
                      <li>Delegated day-to-day activation across channels while maintaining direct control of weekly budget pacing.</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="panel-column-title">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                      Hands-on Platforms & Tools
                    </h4>
                    <div className="platform-tags" style={{ marginBottom: '1.5rem' }}>
                      <span className="platform-tag">Cross-Channel Paid Social</span>
                      <span className="platform-tag">Google Ads PMax</span>
                      <span className="platform-tag">Marketing Mix Modeling (MMM)</span>
                    </div>
                    <h4 className="panel-column-title" style={{ marginBottom: '0.75rem' }}>Key Performance Metrics</h4>
                    <ul className="panel-list">
                      <li>Successfully grew active monthly DashPass members by 25% YoY.</li>
                      <li>Optimized trial CPA by 10%, maximizing long-term customer profitability.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* NEW VERTICALS PANEL */}
              <div className={`tab-panel ${activeTab === 'tab-verticals' ? 'active' : ''}`}>
                <div className="panel-header">
                  <h3 className="panel-title">New Verticals Expansion</h3>
                  <div className="panel-meta">
                    <span className="panel-meta-item">Sectors: <strong>Grocery, Alcohol, Retail</strong></span>
                    <span className="panel-meta-item">Phase: <strong>Early Growth Scaling</strong></span>
                  </div>
                </div>
                <div className="panel-body-grid">
                  <div>
                    <h4 className="panel-column-title">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                      Strategic Ownership & Delegation
                    </h4>
                    <ul className="panel-list">
                      <li>Lead full-funnel paid programs to expand beyond food delivery into grocery, convenience, and alcohol.</li>
                      <li>Guide agency and content partners to structure dynamic, localized catalogs and product feeds.</li>
                      <li>Interface with cross-functional Merchant/Mx partners to build co-branded evergreen paid channels.</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="panel-column-title">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                      Hands-on Platforms & Tools
                    </h4>
                    <div className="platform-tags" style={{ marginBottom: '1.5rem' }}>
                      <span className="platform-tag">Dynamic Product Ads</span>
                      <span className="platform-tag">Criteo API</span>
                      <span className="platform-tag">Snowflake SQL</span>
                    </div>
                    <h4 className="panel-column-title" style={{ marginBottom: '0.75rem' }}>Key Performance Metrics</h4>
                    <ul className="panel-list">
                      <li>Launched 5 new lines of business in digital media campaigns.</li>
                      <li>Sustained high user retention metrics for newly penetrated vertical buyers.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* REGIONAL PANEL */}
              <div className={`tab-panel ${activeTab === 'tab-regional' ? 'active' : ''}`}>
                <div className="panel-header">
                  <h3 className="panel-title">Regional Expansion</h3>
                  <div className="panel-meta">
                    <span className="panel-meta-item">Scale: <strong>Hyperlocal Focus</strong></span>
                    <span className="panel-meta-item">Priority: <strong>Densification</strong></span>
                  </div>
                </div>
                <div className="panel-body-grid">
                  <div>
                    <h4 className="panel-column-title">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                      Strategic Ownership & Delegation
                    </h4>
                    <ul className="panel-list">
                      <li>Drive localized strategies, customizing ad delivery to local supply availability and market priorities.</li>
                      <li>Delegate regional creative assets and regional supply targeting scripts to channel teams.</li>
                      <li>Troubleshoot geofencing issues, supply constraints, and local customer acquisition challenges.</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="panel-column-title">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                      Hands-on Platforms & Tools
                    </h4>
                    <div className="platform-tags" style={{ marginBottom: '1.5rem' }}>
                      <span className="platform-tag">Geofencing Ads</span>
                      <span className="platform-tag">Meta Local Targeting</span>
                      <span className="platform-tag">Tableau Analytics</span>
                    </div>
                    <h4 className="panel-column-title" style={{ marginBottom: '0.75rem' }}>Key Performance Metrics</h4>
                    <ul className="panel-list">
                      <li>Grew customer density by 18% in high-priority regional corridors.</li>
                      <li>Synchronized real-time supply availability to regional display budget adjustments.</li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
