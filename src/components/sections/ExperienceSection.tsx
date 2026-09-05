import { SectionHeader } from '../ui/SectionHeader';
import { ScrollReveal } from '../ui/ScrollReveal';
import { Badge } from '../ui/Badge';
import { Accordion } from '../ui/Accordion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Case Study"
          title="Enterprise Experience"
          description="Building healthcare claims processing systems at enterprise scale."
        />

        <ScrollReveal>
          <div className="mt-8 bg-[var(--color-surface-1)] border border-[var(--color-border)] rounded-2xl overflow-hidden">
            {/* Header */}
            <div className="p-8 border-b border-[var(--color-border)]">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-[var(--color-text-primary)]">SS&C DomaniRx Adjudication</h3>
                  <p className="text-lg text-[var(--color-accent)] mt-1">Senior Software Developer → Technical Lead</p>
                </div>
                <Badge type="USER-PROVIDED" />
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-[var(--color-text-secondary)]">
                <div className="flex items-center gap-1.5"><Briefcase size={16} /> ~12 Engineers</div>
                <div className="flex items-center gap-1.5"><Calendar size={16} /> May 2023 – August 2026</div>
                <div className="flex items-center gap-1.5"><MapPin size={16} /> Healthcare Claims Processing</div>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 md:p-6 space-y-2">
              <Accordion title="Domain Overview">
                <div className="text-sm text-[var(--color-text-secondary)] space-y-3">
                  <p>Processing healthcare claims from hospitals and pharmacies, supporting Medicare/Medicaid-related processing based on applicable CMS (Centers for Medicare & Medicaid Services) requirements.</p>
                  <p>DomaniRx is a modern adjudication platform designed to handle real-time claim processing with strict regulatory compliance and accuracy.</p>
                </div>
              </Accordion>

              <Accordion title="Technology Stack">
                <div className="flex flex-wrap gap-2">
                  {['Java 21', 'Spring Boot', 'Microservices', 'Kafka', 'PostgreSQL', 'DB2', 'REST APIs'].map(tech => (
                    <span key={tech} className="px-3 py-1 rounded-md bg-[var(--color-surface-3)] text-sm text-[var(--color-text-primary)] border border-[var(--color-border)]">
                      {tech}
                    </span>
                  ))}
                </div>
              </Accordion>

              <Accordion title="Claim Transactions (B1 / B2 / B3)">
                <div className="text-sm text-[var(--color-text-secondary)] space-y-4">
                  <div className="grid sm:grid-cols-3 gap-3 mb-4">
                    <div className="p-3 rounded-lg bg-[var(--color-surface-2)] border border-[var(--color-border)]">
                      <span className="text-xs font-mono text-[var(--color-accent)]">B1</span>
                      <p className="text-sm mt-1">New claim processing</p>
                    </div>
                    <div className="p-3 rounded-lg bg-[var(--color-surface-2)] border border-[var(--color-border)]">
                      <span className="text-xs font-mono text-amber-400">B2</span>
                      <p className="text-sm mt-1">Reversal of existing claim</p>
                    </div>
                    <div className="p-3 rounded-lg bg-[var(--color-surface-2)] border border-[var(--color-border)]">
                      <span className="text-xs font-mono text-purple-400">B3</span>
                      <p className="text-sm mt-1">Reversal + new claim</p>
                    </div>
                  </div>

                  {/* Flow diagram */}
                  <div className="p-4 bg-[var(--color-surface-0)] rounded-xl border border-[var(--color-border)] overflow-x-auto">
                    <div className="flex items-center min-w-max gap-2 text-xs font-mono">
                      {[
                        { label: 'Provider', color: 'blue' },
                        { label: 'Claim Request', color: '' },
                        { label: 'Processing', color: 'purple' },
                        { label: 'Adjudication', color: 'green' },
                        { label: 'Accumulator', color: 'amber' },
                        { label: 'Eligibility / Pricing', color: 'rose' },
                        { label: 'Result', color: 'cyan' },
                      ].map((step, i, arr) => (
                        <div key={step.label} className="flex items-center gap-2">
                          <div className={`p-2.5 rounded border ${
                            step.color
                              ? `bg-${step.color}-500/10 border-${step.color}-500/30 text-${step.color}-400`
                              : 'bg-[var(--color-surface-2)] border-[var(--color-border)] text-[var(--color-text-primary)]'
                          }`}>
                            {step.label}
                          </div>
                          {i < arr.length - 1 && (
                            <span className="text-[var(--color-text-muted)]">→</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Accordion>

              <Accordion title="My Contribution">
                <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mt-2 shrink-0" />
                    Modernization of legacy COBOL functionality into Java microservices
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mt-2 shrink-0" />
                    Enhancement of existing business logic and backend API development
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mt-2 shrink-0" />
                    Implementation of IRA 2025-related changes affecting accumulator processing
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mt-2 shrink-0" />
                    Claim processing, adjudication, accumulator, eligibility, and pricing development
                  </li>
                </ul>
              </Accordion>

              <Accordion title="Legacy Modernization (COBOL → Java)">
                <div className="text-sm text-[var(--color-text-secondary)] space-y-3">
                  <p>Migrating legacy COBOL mainframe functionality to modern Java/Spring Boot microservices while preserving business rule integrity.</p>
                  <p>Focus areas: understanding legacy behavior, preserving business rules, testing for data compatibility, and managing regulatory changes during migration.</p>
                </div>
              </Accordion>

              <Accordion title="Engineering Challenges">
                <ul className="space-y-3 text-sm text-[var(--color-text-secondary)]">
                  <li className="p-3 rounded-lg bg-[var(--color-surface-2)] border-l-2 border-amber-500">
                    <strong className="text-[var(--color-text-primary)]">Regulatory Changes:</strong> Adapting the system for IRA 2025 (Inflation Reduction Act) requirements which affected accumulator and pricing logic.
                  </li>
                  <li className="p-3 rounded-lg bg-[var(--color-surface-2)] border-l-2 border-amber-500">
                    <strong className="text-[var(--color-text-primary)]">Legacy Compatibility:</strong> Ensuring business rule preservation during COBOL to Java migration with zero data discrepancy.
                  </li>
                  <li className="p-3 rounded-lg bg-[var(--color-surface-2)] border-l-2 border-amber-500">
                    <strong className="text-[var(--color-text-primary)]">Enterprise Complexity:</strong> Managing cross-service data consistency in a complex claims processing domain.
                  </li>
                </ul>
              </Accordion>
            </div>

            {/* Confidentiality footer */}
            <div className="p-4 bg-[var(--color-surface-2)] border-t border-[var(--color-border)] text-xs text-[var(--color-text-muted)] text-center">
              * Presented at a non-confidential level. No proprietary source code, internal architecture, or customer information exposed.
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
