import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MonitorPlay } from 'lucide-react';
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

  // Smooth offset-aware anchor navigation
  const handleScroll = (href: string) => {
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      const isDesktop = window.innerWidth >= 768;
      // Offset accounts for fixed top Nav (64px) + sub-header on desktop (~58px)
      const headerOffset = isDesktop ? 128 : 72;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveAnchor(id);
    }
  };

  // Scroll spy to highlight active section pill
  useEffect(() => {
    const sectionIds = navLinks.map(l => l.href.replace('#', ''));
    const handleScrollSpy = () => {
      const isDesktop = window.innerWidth >= 768;
      const scrollY = window.pageYOffset + (isDesktop ? 160 : 100);

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) {
          setActiveAnchor(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, [navLinks]);

  return (
    <div className="min-h-screen bg-[var(--color-surface-0)] text-[var(--color-text-primary)] flex flex-col pt-16 sm:pt-20 transition-colors duration-300 w-full max-w-full">
      
      {/* Sub-Header Navigation Bar — relative on mobile to prevent clipping under fixed Nav, sticky on desktop */}
      <header className="relative md:sticky md:top-16 z-30 bg-[var(--color-surface-1)]/95 backdrop-blur-md border-b border-[var(--color-border)] px-4 sm:px-6 py-2.5 sm:py-3 shadow-xs">
        <div className="max-w-6xl mx-auto flex flex-col gap-2.5">
          {/* Row 1: Back Button, Title Badge & Interview Mode Link */}
          <div className="flex items-center justify-between gap-3 w-full">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[var(--color-surface-2)] hover:bg-[var(--color-surface-3)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] text-xs font-semibold transition-colors border border-[var(--color-border)] shrink-0"
              title="Return to Portfolio Home"
            >
              <ArrowLeft size={13} />
              <span>Back to Portfolio</span>
            </Link>

            <div className="flex items-center gap-2 min-w-0">
              <span className="text-xs sm:text-sm font-bold text-[var(--color-text-primary)] truncate">
                Unilog CIMM2 Case Study
              </span>
              <span className="hidden sm:inline-flex px-2 py-0.5 rounded text-[10px] font-mono font-semibold uppercase bg-[var(--color-accent-subtle)] text-[var(--color-accent)] border border-[var(--color-border-accent)] shrink-0">
                B2B / B2C
              </span>
            </div>

            <Link
              to="/interview"
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[var(--color-accent-subtle)] hover:bg-[var(--color-accent)] text-[var(--color-accent)] hover:text-white border border-[var(--color-border-accent)] text-xs font-semibold transition-colors shrink-0"
            >
              <MonitorPlay size={13} />
              <span className="hidden sm:inline">Interview Mode</span>
              <span className="sm:hidden">Interview</span>
            </Link>
          </div>

          {/* Row 2: Smooth Horizontal Scrolling Pill Navigation */}
          <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none py-1 -mx-4 px-4 sm:mx-0 sm:px-0 touch-pan-x">
            {navLinks.map(link => {
              const isActive = activeAnchor === link.href.replace('#', '');
              return (
                <button
                  key={link.href}
                  onClick={() => handleScroll(link.href)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-[var(--color-accent)] text-white shadow-xs'
                      : 'bg-[var(--color-surface-2)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-3)] border border-[var(--color-border)]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
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
