import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Layers, ArrowUpRight, MonitorPlay } from 'lucide-react';
import { Cimm2Hero } from '../components/cimm2/Cimm2Hero';
import { BusinessStory } from '../components/cimm2/BusinessStory';
import { InteractiveArchitecture } from '../components/cimm2/InteractiveArchitecture';
import { InteractiveFlows } from '../components/cimm2/InteractiveFlows';
import { MultiCustomerSection } from '../components/cimm2/MultiCustomerSection';
import { TechnologyMap } from '../components/cimm2/TechnologyMap';
import { ArchitectureDecisions } from '../components/cimm2/ArchitectureDecisions';
import { LearningsSection } from '../components/cimm2/LearningsSection';

export function Cimm2CaseStudyPage() {
  const [activeAnchor, setActiveAnchor] = useState<string>('cimm2-hero');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#cimm2-hero' },
    { label: 'Problem & Solution', href: '#cimm2-problem' },
    { label: 'Architecture', href: '#cimm2-architecture' },
    { label: 'Interactive Flows', href: '#cimm2-flows' },
    { label: 'Enterprise Clients', href: '#cimm2-customers' },
    { label: 'Tech Map', href: '#cimm2-tech' },
    { label: 'Decisions (ADRs)', href: '#cimm2-decisions' },
    { label: 'Learnings', href: '#cimm2-learnings' },
  ];

  const handleScroll = (href: string) => {
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveAnchor(id);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--color-surface-0)] text-[var(--color-text-primary)] flex flex-col pt-16 transition-colors duration-300 w-full max-w-full overflow-x-hidden">
      
      {/* Sub-Header Navigation Bar */}
      <header className="sticky top-16 z-30 bg-[var(--color-surface-1)]/95 backdrop-blur-md border-b border-[var(--color-border)] px-4 sm:px-6 py-2.5 shadow-sm">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
          {/* Back link & breadcrumb */}
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[var(--color-surface-2)] hover:bg-[var(--color-surface-3)] text-[var(--color-text-secondary)] hover:text-white text-xs font-semibold transition-colors border border-[var(--color-border)]"
            >
              <ArrowLeft size={13} />
              <span>Back to Portfolio</span>
            </Link>
            <span className="text-[var(--color-text-muted)] text-xs">/</span>
            <span className="text-xs font-semibold text-[var(--color-text-primary)] truncate">
              Unilog CIMM2 Enterprise Case Study
            </span>
          </div>

          {/* Quick jump anchor menu */}
          <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none py-0.5">
            {navLinks.map(link => (
              <button
                key={link.href}
                onClick={() => handleScroll(link.href)}
                className="px-2.5 py-1 rounded-md text-[11px] font-medium whitespace-nowrap text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-2)] transition-colors"
              >
                {link.label}
              </button>
            ))}
            <Link
              to="/interview"
              className="ml-2 inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[var(--color-accent-subtle)] text-[var(--color-accent)] border border-[var(--color-border-accent)] text-[11px] font-semibold whitespace-nowrap hover:bg-[var(--color-accent)] hover:text-white transition-colors"
            >
              <MonitorPlay size={12} />
              <span>Interview Mode</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content Sections */}
      <main className="flex-1 w-full max-w-full">
        <Cimm2Hero />
        <BusinessStory />
        <InteractiveArchitecture />
        <InteractiveFlows />
        <MultiCustomerSection />
        <TechnologyMap />
        <ArchitectureDecisions />
        <LearningsSection />
      </main>

    </div>
  );
}
