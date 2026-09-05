import { useState } from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { ScrollReveal } from '../ui/ScrollReveal';
import { Badge } from '../ui/Badge';
import { Accordion } from '../ui/Accordion';
import { Briefcase, Calendar, MapPin, ArrowRight, CheckCircle2, ShieldAlert, Cpu } from 'lucide-react';

export function ExperienceSection() {
  const [activeStageIndex, setActiveStageIndex] = useState(2);

  const modernizationStages = [
    {
      title: 'COBOL Mainframe',
      tech: 'Legacy Copybooks & Batch Jobs',
      description: 'Decades of accumulated pharmacy adjudication rules embedded in COBOL routines with monolithic batch cycles.',
      detail: 'Analyzed thousands of lines of procedural COBOL rules controlling accumulator thresholds and patient copays.',
    },
    {
      title: 'Business Rule Extraction',
      tech: 'Domain Analysis & Golden Masters',
      description: 'Extracted implicit rules, edge-case math, and historical CMS compliance overrides into executable specifications.',
      detail: 'Built automated test harness feeding historical production claims through both legacy and prototype engines.',
    },
    {
      title: 'Java 21 Domain Engine',
      tech: 'Clean Architecture & Records',
      description: 'Rewrote business logic into pure, immutable Java 21 domain entities completely decoupled from frameworks.',
      detail: 'Leveraged records and sealed interfaces for transparent, deterministic adjudication calculations.',
    },
    {
      title: 'Spring Boot Microservices',
      tech: 'Independent Service Decomposition',
      description: 'Packaged logic into containerized microservices: Claim Intake, Adjudication, Accumulator, and Pricing.',
      detail: 'Configured HikariCP, Redis caching, and health actuators for high-throughput sub-second response times.',
    },
    {
      title: 'Kafka Event Spine',
      tech: 'Partitioned Event Streaming',
      description: 'Replaced batch file transfers with real-time Kafka event streaming with member-level FIFO guarantees.',
      detail: 'Implemented non-blocking retry topics and dead-letter parking to preserve real-time pharmacy counter SLAs.',
    },
  ];

  return (
    <section id="experience" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Flagship Case Study"
          title="Enterprise Experience"
          description="High-throughput healthcare claims processing & large-scale legacy modernization at enterprise scale."
        />

        <ScrollReveal>
          <div className="mt-8 bg-[var(--color-surface-1)] border border-[var(--color-border)] rounded-2xl overflow-hidden shadow-xl">
            {/* Header */}
            <div className="p-8 border-b border-[var(--color-border)] bg-gradient-to-r from-[var(--color-surface-1)] to-[var(--color-surface-2)]">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-[var(--color-text-primary)]">SS&C DomaniRx Adjudication</h3>
                  <p className="text-lg text-[var(--color-accent)] mt-1 font-medium">Senior Software Developer → Technical Lead</p>
                </div>
                <Badge type="USER-PROVIDED" />
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-[var(--color-text-secondary)]">
                <div className="flex items-center gap-1.5"><Briefcase size={16} /> ~12 Engineers</div>
                <div className="flex items-center gap-1.5"><Calendar size={16} /> May 2023 – August 2026</div>
                <div className="flex items-center gap-1.5"><MapPin size={16} /> Healthcare Claims Processing</div>
              </div>
            </div>

            {/* Interactive Legacy Modernization Pipeline (Master Prompt Section 21) */}
            <div className="p-6 md:p-8 border-b border-[var(--color-border)] bg-[var(--color-surface-2)]/40">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)] flex items-center gap-2">
                  <Cpu size={16} className="text-[var(--color-accent)]" />
                  Legacy Modernization Architecture (COBOL → Microservices)
                </h4>
                <span className="text-xs font-mono text-[var(--color-accent)]">Click Step to Inspect</span>
              </div>

              {/* Step indicator bar */}
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5">
                {modernizationStages.map((stage, idx) => {
                  const isActive = activeStageIndex === idx;
                  return (
                    <button
                      key={stage.title}
                      onClick={() => setActiveStageIndex(idx)}
                      className={`p-3.5 rounded-xl text-left border transition-all duration-300 flex flex-col justify-between ${
                        isActive
                          ? 'bg-[var(--color-accent)] text-white shadow-lg shadow-blue-500/20 ring-2 ring-blue-400/30'
                          : 'bg-[var(--color-surface-1)] border-[var(--color-border)] hover:border-[var(--color-border-hover)] text-[var(--color-text-secondary)]'
                      }`}
                    >
                      <span className={`text-[10px] font-mono uppercase ${isActive ? 'text-blue-100' : 'text-[var(--color-text-muted)]'}`}>
                        Phase 0{idx + 1}
                      </span>
                      <p className={`text-xs font-bold mt-1.5 ${isActive ? 'text-white' : 'text-[var(--color-text-primary)]'}`}>
                        {stage.title}
                      </p>
                      <span className={`text-[10px] truncate mt-1 ${isActive ? 'text-blue-100' : 'text-[var(--color-text-tertiary)]'}`}>
                        {stage.tech}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Detailed view of active phase */}
              <div className="mt-4 p-5 rounded-xl bg-[var(--color-surface-1)] border border-[var(--color-border)]">
                <div className="flex items-center gap-2 text-xs font-bold text-[var(--color-accent)] uppercase mb-1">
                  <CheckCircle2 size={14} />
                  <span>Phase 0{activeStageIndex + 1}: {modernizationStages[activeStageIndex].title}</span>
                </div>
                <p className="text-sm font-semibold text-[var(--color-text-primary)] mb-1">
                  {modernizationStages[activeStageIndex].description}
                </p>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                  {modernizationStages[activeStageIndex].detail}
                </p>
              </div>
            </div>

            {/* Content Accordions */}
            <div className="p-4 md:p-6 space-y-2">
              <Accordion title="Domain Overview & CMS Compliance">
                <div className="text-sm text-[var(--color-text-secondary)] space-y-3">
                  <p>Processing healthcare claims from hospitals and pharmacies, supporting Medicare/Medicaid-related processing based on applicable CMS (Centers for Medicare & Medicaid Services) requirements.</p>
                  <p>DomaniRx is a modern adjudication platform designed to handle real-time claim processing with strict regulatory compliance, sub-second SLAs, and zero financial discrepancy.</p>
                </div>
              </Accordion>

              <Accordion title="Technology Stack">
                <div className="flex flex-wrap gap-2">
                  {['Java 21', 'Spring Boot 3', 'Microservices', 'Apache Kafka', 'PostgreSQL', 'DB2', 'Docker', 'Kubernetes', 'REST APIs', 'OpenTelemetry'].map(tech => (
                    <span key={tech} className="px-3 py-1 rounded-md bg-[var(--color-surface-3)] text-sm text-[var(--color-text-primary)] border border-[var(--color-border)]">
                      {tech}
                    </span>
                  ))}
                </div>
              </Accordion>

              <Accordion title="Claim Transactions (B1 / B2 / B3 Lifecycle)">
                <div className="text-sm text-[var(--color-text-secondary)] space-y-4">
                  <div className="grid sm:grid-cols-3 gap-3 mb-4">
                    <div className="p-3.5 rounded-lg bg-[var(--color-surface-2)] border border-[var(--color-border)]">
                      <span className="text-xs font-mono font-bold text-[var(--color-accent)]">B1 Transaction</span>
                      <p className="text-sm font-semibold text-[var(--color-text-primary)] mt-1">New Claim Submission</p>
                      <p className="text-xs text-[var(--color-text-secondary)] mt-1">Real-time validation, benefit eligibility, drug pricing, and patient accumulator deduction.</p>
                    </div>
                    <div className="p-3.5 rounded-lg bg-[var(--color-surface-2)] border border-[var(--color-border)]">
                      <span className="text-xs font-mono font-bold text-amber-400">B2 Transaction</span>
                      <p className="text-sm font-semibold text-[var(--color-text-primary)] mt-1">Claim Reversal</p>
                      <p className="text-xs text-[var(--color-text-secondary)] mt-1">Reversal of existing adjudicated claim with compensating accumulator restoration.</p>
                    </div>
                    <div className="p-3.5 rounded-lg bg-[var(--color-surface-2)] border border-[var(--color-border)]">
                      <span className="text-xs font-mono font-bold text-purple-400">B3 Transaction</span>
                      <p className="text-sm font-semibold text-[var(--color-text-primary)] mt-1">Reversal & Resubmit</p>
                      <p className="text-xs text-[var(--color-text-secondary)] mt-1">Atomic reversal followed immediately by updated claim adjudication in a single workflow.</p>
                    </div>
                  </div>

                  {/* Flow diagram */}
                  <div className="p-4 bg-[var(--color-surface-0)] rounded-xl border border-[var(--color-border)] overflow-x-auto">
                    <div className="flex items-center min-w-max gap-2 text-xs font-mono">
                      {[
                        { label: 'Provider Portal', color: 'blue' },
                        { label: 'Claim Request', color: '' },
                        { label: 'Intake Gateway', color: 'cyan' },
                        { label: 'Adjudication Engine', color: 'purple' },
                        { label: 'Accumulator Service', color: 'amber' },
                        { label: 'Eligibility / Pricing', color: 'rose' },
                        { label: 'Audit / Response', color: 'emerald' },
                      ].map((step, i, arr) => (
                        <div key={step.label} className="flex items-center gap-2">
                          <div className={`p-2.5 rounded border ${
                            step.color
                              ? `bg-${step.color}-500/10 border-${step.color}-500/30 text-${step.color}-400 font-medium`
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

              <Accordion title="Technical Leadership & Key Contributions">
                <ul className="space-y-2.5 text-sm text-[var(--color-text-secondary)]">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mt-2 shrink-0" />
                    Led architectural decomposition and migration of legacy COBOL business functionality into Java 21 microservices.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mt-2 shrink-0" />
                    Implemented IRA 2025 (Inflation Reduction Act) regulatory mandates, modifying patient accumulator thresholds and Part D benefit phases.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mt-2 shrink-0" />
                    Mentored junior and mid-level engineers in clean code, distributed concurrency, and automated testing disciplines.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mt-2 shrink-0" />
                    Designed resilient Kafka pipelines with retry topics, dead-letter topics (DLT), and idempotent database operations.
                  </li>
                </ul>
              </Accordion>

              <Accordion title="Engineering Challenges & Solutions">
                <ul className="space-y-3 text-sm text-[var(--color-text-secondary)]">
                  <li className="p-4 rounded-xl bg-[var(--color-surface-2)] border-l-2 border-amber-500">
                    <strong className="text-[var(--color-text-primary)] block mb-1">IRA 2025 Legislative Overhaul:</strong>
                    Adapting complex accumulator math to comply with the federal $2,000 out-of-pocket prescription cap while maintaining backward compatibility with legacy benefit years.
                  </li>
                  <li className="p-4 rounded-xl bg-[var(--color-surface-2)] border-l-2 border-blue-500">
                    <strong className="text-[var(--color-text-primary)] block mb-1">Zero Discrepancy Parity:</strong>
                    Achieving 100.00% numerical parity between legacy COBOL calculation routines and the Java 21 rewrite using extensive automated parallel-run verification.
                  </li>
                  <li className="p-4 rounded-xl bg-[var(--color-surface-2)] border-l-2 border-emerald-500">
                    <strong className="text-[var(--color-text-primary)] block mb-1">Sub-Second Adjudication Latency:</strong>
                    Optimizing multi-service network hops and database lock contention to deliver real-time claim responses while customers are at the pharmacy counter.
                  </li>
                </ul>
              </Accordion>
            </div>

            {/* Confidentiality notice */}
            <div className="p-4 bg-[var(--color-surface-2)] border-t border-[var(--color-border)] text-xs text-[var(--color-text-muted)] text-center">
              * Non-confidential technical overview. No proprietary customer data, internal keys, or proprietary source code exposed.
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
