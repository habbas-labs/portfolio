import { useState } from 'react';
import { motion } from 'framer-motion';
import { systemDesigns } from '../../data/content';
import { SectionHeader } from '../ui/SectionHeader';
import { ScrollReveal } from '../ui/ScrollReveal';
import { Badge } from '../ui/Badge';
import { Accordion } from '../ui/Accordion';
import { CheckCircle2, AlertCircle } from 'lucide-react';

export function SystemDesignLab() {
  const [activeDesign, setActiveDesign] = useState(0);
  const design = systemDesigns[activeDesign];

  return (
    <section id="system-design" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Architecture"
          title="System Design Lab"
          description="Explore architecture patterns — from distributed claims processing to AI-powered multi-agent systems."
        />

        {/* Design selector tabs */}
        <div className="mt-12 flex flex-wrap gap-2 border-b border-[var(--color-border)] pb-4">
          {systemDesigns.map((d, i) => (
            <button
              key={d.id}
              onClick={() => setActiveDesign(i)}
              className={`px-4 py-2 text-sm rounded-lg font-medium transition-all ${
                activeDesign === i
                  ? 'bg-[var(--color-accent)] text-white'
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
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-2xl font-bold text-[var(--color-text-primary)]">{design.title}</h3>
                <p className="mt-2 text-[var(--color-text-secondary)] leading-relaxed">{design.problem}</p>
              </div>
              <Badge type={design.status} />
            </div>

            {/* Requirements */}
            <div className="p-6 rounded-xl bg-[var(--color-surface-1)] border border-[var(--color-border)]">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)] mb-4">Requirements</h4>
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
            <Accordion title="Architecture Overview">
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                {design.architectureDescription}
              </p>
            </Accordion>

            <Accordion title="Scaling Strategy">
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                {design.scalingStrategy}
              </p>
            </Accordion>

            <Accordion title="Failure Handling">
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                {design.failureHandling}
              </p>
            </Accordion>

            <Accordion title="Trade-offs">
              <ul className="space-y-2">
                {design.tradeoffs.map((t, i) => (
                  <li key={i} className="flex items-start gap-2 p-3 rounded-lg bg-[var(--color-surface-2)] border-l-2 border-amber-500">
                    <AlertCircle size={16} className="text-amber-400 mt-0.5 shrink-0" />
                    <span className="text-sm text-[var(--color-text-secondary)]">{t}</span>
                  </li>
                ))}
              </ul>
            </Accordion>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
