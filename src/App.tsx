import React from 'react';
import { BackgroundAura } from './components/BackgroundAura';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsDashboard } from './components/StatsDashboard';
import { GrowthEngine } from './components/GrowthEngine';
import { BudgetSimulator } from './components/BudgetSimulator';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { SkillsGrid } from './components/SkillsGrid';
import { ContactCard } from './components/ContactCard';
import { Footer } from './components/Footer';
import { FloatingPomeranian } from './components/FloatingPomeranian';

const isVisible = import.meta.env.VITE_IS_VISIBLE !== 'false';

const App: React.FC = () => {
  if (!isVisible) return null;

  return (
    <>
      <BackgroundAura />
      <Navbar />
      <main>
        <Hero />
        <StatsDashboard />
        <GrowthEngine />
        <BudgetSimulator />
        <ExperienceTimeline />
        <SkillsGrid />
        <ContactCard />
      </main>
      <Footer />
      <FloatingPomeranian />
    </>
  );
};

export default App;
