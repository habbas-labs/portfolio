import { Hero } from '../components/sections/Hero';
import { HowIThink } from '../components/sections/HowIThink';
import { Journey } from '../components/sections/Journey';
import { Capabilities } from '../components/sections/Capabilities';
import { ConsultingSection } from '../components/sections/ConsultingSection';
import { Projects } from '../components/sections/Projects';
import { KnowledgeMap } from '../components/sections/KnowledgeMap';
import { TechExpertise } from '../components/sections/TechExpertise';
import { JavaDeepDive } from '../components/sections/JavaDeepDive';
import { SpringMicroservicesLab } from '../components/sections/SpringMicroservicesLab';
import { KafkaLab } from '../components/sections/KafkaLab';
import { ExperienceSection } from '../components/sections/ExperienceSection';
import { SystemDesignLab } from '../components/sections/SystemDesignLab';
import { AILab } from '../components/sections/AILab';
import { Decisions } from '../components/sections/Decisions';
import { CodeShowcase } from '../components/sections/CodeShowcase';
import { Contact } from '../components/sections/Contact';
import { useModals } from '../context/ModalContext';
import { isConsultantEnabled } from '../config/portfolioConfig';

const SectionDivider = () => (
  <div className="section-divider mx-auto max-w-4xl" />
);

export function HomePage() {
  const { openInquiry } = useModals();
  const showConsultant = isConsultantEnabled();

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

      {/* Master Prompt V4: Consulting & Independent Engineering Services */}
      {showConsultant && (
        <>
          <ConsultingSection onOpenInquiry={openInquiry} />
          <SectionDivider />
        </>
      )}

      {/* Master Prompt V3/V4: Projects Workbench & Enterprise Systems */}
      {showConsultant && (
        <>
          <Projects />
          <SectionDivider />
        </>
      )}

      <KnowledgeMap />
      <SectionDivider />

      <TechExpertise />
      <SectionDivider />

      <JavaDeepDive />
      <SectionDivider />

      <SpringMicroservicesLab />
      <SectionDivider />

      <KafkaLab />
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
