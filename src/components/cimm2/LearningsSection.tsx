import { GraduationCap, ArrowRight, Layers, Sparkles, CheckCircle2 } from 'lucide-react';
import { cimm2Learnings } from '../../data/cimm2Content';
import { SectionHeader } from '../ui/SectionHeader';
import { Link } from 'react-router-dom';

export function LearningsSection() {
  return (
    <section id="cimm2-learnings" className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="Engineering Evolution"
          title="Architectural Foundation & Career Impact"
          description="How hands-on enterprise Java, ERP integration adapters, and faceted search mastery established the bedrock for subsequent distributed systems and microservices."
        />

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {cimm2Learnings.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[var(--color-surface-1)] border border-[var(--color-border)] shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[var(--color-accent)]/10 text-[var(--color-accent)] flex items-center justify-center font-mono text-xs font-bold">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-[var(--color-text-primary)]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Subsequent Career Continuity Banner */}
        <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-[var(--color-surface-1)] to-[var(--color-surface-2)] border border-[var(--color-border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-accent)] block mb-1">
              Engineering Continuum
            </span>
            <h4 className="text-base font-bold text-[var(--color-text-primary)]">
              From Modular Enterprise Java to Distributed Microservices & AI
            </h4>
            <p className="text-xs text-[var(--color-text-secondary)] mt-1 max-w-2xl">
              The integration discipline, contract isolation, and transactional rigor honed on CIMM2 directly fueled subsequent architectural leadership on Avis Budget Group, T-Mobile OSR, and SS&C DomaniRx claims adjudication.
            </p>
          </div>

          <Link
            to="/#experience"
            className="px-4 py-2 rounded-lg bg-[var(--color-surface-3)] hover:bg-[var(--color-accent)] text-[var(--color-text-primary)] hover:text-white text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 border border-[var(--color-border)]"
          >
            <span>Explore Enterprise Modernization</span>
            <ArrowRight size={14} />
          </Link>
        </div>

      </div>
    </section>
  );
}
