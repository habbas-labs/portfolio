import { useState } from 'react';
import { motion } from 'framer-motion';
import { systemDesigns } from '../../data/content';
import { SectionHeader } from '../ui/SectionHeader';
import { ScrollReveal } from '../ui/ScrollReveal';
import { Badge } from '../ui/Badge';
import { Accordion } from '../ui/Accordion';
import { CheckCircle2, AlertCircle, Workflow, Sparkles } from 'lucide-react';

export function SystemDesignLab() {
  const [activeDesign, setActiveDesign] = useState(0);
  const design = systemDesigns[activeDesign];

  return (
    <section id="system-design" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Architecture & Distributed Systems"
          title="System Design Lab"
          description="Explore complete system designs — from high-throughput distributed claims processing to standalone AI agents and multi-agent coordination."
        />

        {/* Design selector tabs */}
        <div className="mt-12 flex flex-wrap gap-2 border-b border-[var(--color-border)] pb-4">
          {systemDesigns.map((d, i) => (
            <button
              key={d.id}
              onClick={() => setActiveDesign(i)}
              className={`px-4 py-2 text-sm rounded-lg font-medium transition-all ${
                activeDesign === i
                  ? 'bg-[var(--color-accent)] text-white shadow-sm'
                  : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-2)]'
              }`}
            >
              {d.title}
            </button>
          ))}
        </div>

        {/* Active design content */}
        <ScrollReveal key={design.id}>
          <div className="mt-8 space-y-6">
            {/* Header */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold text-[var(--color-text-primary)]">{design.title}</h3>
                <p className="mt-2 text-[var(--color-text-secondary)] leading-relaxed">{design.problem}</p>
              </div>
              <Badge type={design.status} />
            </div>

            {/* Requirements */}
            <div className="p-6 rounded-xl bg-[var(--color-surface-1)] border border-[var(--color-border)]">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)] mb-4">Functional & Technical Requirements</h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {design.requirements.map((req, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-[var(--color-success)] mt-0.5 shrink-0" />
                    <span className="text-sm text-[var(--color-text-secondary)]">{req}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Detailed sections */}
            <Accordion title="1. High-Level Architecture Overview">
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                {design.architectureDescription}
              </p>
            </Accordion>

            {design.dataFlow && (
              <Accordion title="2. End-to-End Data Flow & Lifecycle">
                <div className="p-4 rounded-lg bg-[var(--color-surface-2)] border border-[var(--color-border)] font-mono text-xs text-[var(--color-text-secondary)] leading-relaxed">
                  <div className="flex items-center gap-2 text-[var(--color-accent)] font-semibold mb-2 font-sans">
                    <Workflow size={14} /> Pipeline Sequence
                  </div>
                  {design.dataFlow}
                </div>
              </Accordion>
            )}

            <Accordion title="3. Scalability & Partitioning Strategy">
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                {design.scalingStrategy}
              </p>
            </Accordion>

            <Accordion title="4. Failure Handling, Retries & Dead-Letter Parking">
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                {design.failureHandling}
              </p>
            </Accordion>

            <Accordion title="5. Architectural Trade-offs & Consistency Models">
              <ul className="space-y-2">
                {design.tradeoffs.map((t, i) => (
                  <li key={i} className="flex items-start gap-2 p-3 rounded-lg bg-[var(--color-surface-2)] border-l-2 border-amber-500">
                    <AlertCircle size={16} className="text-amber-400 mt-0.5 shrink-0" />
                    <span className="text-sm text-[var(--color-text-secondary)]">{t}</span>
                  </li>
                ))}
              </ul>
            </Accordion>

            {design.finalDesign && (
              <Accordion title="6. Final Production Architecture Design">
                <div className="p-4 rounded-lg bg-[var(--color-accent-subtle)] border border-[var(--color-accent)]/30 text-sm text-[var(--color-text-primary)] leading-relaxed flex items-start gap-3">
                  <Sparkles size={18} className="text-[var(--color-accent)] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-xs text-[var(--color-accent)] uppercase tracking-wider block mb-1">Target Production Blueprint</span>
                    <p>{design.finalDesign}</p>
                  </div>
                </div>
              </Accordion>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
