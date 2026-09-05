import { Hero } from '../components/sections/Hero';
import { HowIThink } from '../components/sections/HowIThink';
import { Journey } from '../components/sections/Journey';
import { Capabilities } from '../components/sections/Capabilities';
import { KnowledgeMap } from '../components/sections/KnowledgeMap';
import { TechExpertise } from '../components/sections/TechExpertise';
import { ExperienceSection } from '../components/sections/ExperienceSection';
import { SystemDesignLab } from '../components/sections/SystemDesignLab';
import { AILab } from '../components/sections/AILab';
import { Decisions } from '../components/sections/Decisions';
import { CodeShowcase } from '../components/sections/CodeShowcase';
import { Contact } from '../components/sections/Contact';

const SectionDivider = () => (
  <div className="section-divider mx-auto max-w-4xl" />
);

export function HomePage() {
  return (
    <div className="bg-[var(--color-surface-0)] min-h-screen">
      <Hero />
      <SectionDivider />

      <HowIThink />
      <SectionDivider />

      <Journey />
      <SectionDivider />

      <Capabilities />
      <SectionDivider />

      <KnowledgeMap />
      <SectionDivider />

      <TechExpertise />
      <SectionDivider />

      <ExperienceSection />
      <SectionDivider />

      <SystemDesignLab />
      <SectionDivider />

      <AILab />
      <SectionDivider />

      <Decisions />
      <SectionDivider />

      <CodeShowcase />
      <SectionDivider />

      <Contact />
    </div>
  );
}
