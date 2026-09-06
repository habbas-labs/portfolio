import { CheckCircle2, AlertTriangle, Lightbulb, ShieldCheck, FileCheck } from 'lucide-react';
import { cimm2Decisions } from '../../data/cimm2Content';
import { SectionHeader } from '../ui/SectionHeader';

export function ArchitectureDecisions() {
  return (
    <section id="cimm2-decisions" className="py-14 sm:py-20 border-b border-[var(--color-border)] scroll-mt-24 md:scroll-mt-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="Engineering Trade-Offs"
          title="Key Architectural Decisions (ADRs)"
          description="Fundamental design choices that decoupled monolithic complexity, optimized catalog discovery, and enabled multi-tenant enterprise configurability."
        />

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {cimm2Decisions.map(dec => (
            <div
              key={dec.id}
              className="p-6 rounded-2xl bg-[var(--color-surface-1)] border border-[var(--color-border)] hover:border-[var(--color-border-accent)] transition-all flex flex-col justify-between shadow-md group"
            >
              <div>
                {/* Card Number and Title */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-[var(--color-accent-subtle)] text-[var(--color-accent)] border border-[var(--color-border-accent)]">
                    ADR-{dec.number}
                  </span>
                  <span className="text-[10px] text-[var(--color-text-muted)] uppercase tracking-wider font-semibold">
                    Production Decision
                  </span>
                </div>

                <h3 className="text-base font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors mb-4">
                  {dec.title}
                </h3>

                {/* The Problem */}
                <div className="mb-4">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-400 mb-1">
                    <AlertTriangle size={13} />
                    <span>Problem / Challenge</span>
                  </div>
                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                    {dec.problem}
                  </p>
                </div>

                {/* The Engineering Approach */}
                <div className="mb-4">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[var(--color-accent)] mb-1">
                    <Lightbulb size={13} />
                    <span>Architectural Approach</span>
                  </div>
                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                    {dec.approach}
                  </p>
                </div>

                {/* The Architectural Benefit */}
                <div className="pt-3 border-t border-[var(--color-border)]">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 mb-1">
                    <CheckCircle2 size={13} />
                    <span>System Benefit</span>
                  </div>
                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                    {dec.benefit}
                  </p>
                </div>
              </div>

              {/* Implementation Footer */}
              <div className="mt-5 pt-3 border-t border-[var(--color-border)] text-[10px] text-[var(--color-text-muted)] italic">
                {dec.implementationNote}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
