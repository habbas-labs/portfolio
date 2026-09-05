import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Server, Network, ShieldCheck, Database, Layers, Activity, AlertTriangle, ArrowRight } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { ScrollReveal } from '../ui/ScrollReveal';
import { springArchitectureSteps } from '../../data/content';
import { useReducedMotion } from '../../hooks/useAnimations';

export function SpringMicroservicesLab() {
  const [selectedStepId, setSelectedStepId] = useState(springArchitectureSteps[1].id);
  const [viewMode, setViewMode] = useState<'layered' | 'distributed'>('distributed');
  const reduced = useReducedMotion();

  const selectedStep = springArchitectureSteps.find(s => s.id === selectedStepId) || springArchitectureSteps[0];

  const layeredSteps = [
    { label: 'HTTP Client', sub: 'REST / JSON Payload', color: 'blue' },
    { label: 'Spring Cloud Gateway', sub: 'JWT Auth & Rate Limit', color: 'cyan' },
    { label: 'RestController', sub: 'DTO Validation & OpenAPI', color: 'indigo' },
    { label: 'Domain Service', sub: 'Business Rules & Hexagonal Port', color: 'purple' },
    { label: 'Spring Data JPA', sub: 'Repository & Hibernate L2', color: 'amber' },
    { label: 'Database (Postgres / DB2)', sub: 'ACID & Read Replicas', color: 'emerald' },
  ];

  return (
    <section id="microservices-lab" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="Interactive Architecture"
          title="Spring & Microservices Lab"
          description="Decomposing monoliths into resilient, observable, event-driven microservices with strict bounded contexts."
        />

        {/* View Mode Toggle */}
        <div className="mt-12 flex justify-center">
          <div className="p-1 bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-xl flex flex-col sm:flex-row gap-1 w-full sm:w-auto max-w-md sm:max-w-none">
            <button
              onClick={() => setViewMode('distributed')}
              className={`px-4 sm:px-5 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all text-center ${
                viewMode === 'distributed'
                  ? 'bg-[var(--color-accent)] text-white shadow-md'
                  : 'text-[var(--color-text-secondary)] hover:text-white'
              }`}
            >
              <span className="sm:hidden">Distributed (Event-Driven)</span>
              <span className="hidden sm:inline">Distributed Architecture (Event-Driven)</span>
            </button>
            <button
              onClick={() => setViewMode('layered')}
              className={`px-4 sm:px-5 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all text-center ${
                viewMode === 'layered'
                  ? 'bg-[var(--color-accent)] text-white shadow-md'
                  : 'text-[var(--color-text-secondary)] hover:text-white'
              }`}
            >
              Service Layered Flow
            </button>
          </div>
        </div>

        {/* Interactive Architecture Flow Diagram */}
        <ScrollReveal>
          <div className="mt-8 bg-[var(--color-surface-1)] border border-[var(--color-border)] rounded-2xl p-4 sm:p-8 shadow-xl">
            {viewMode === 'distributed' ? (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]">
                    Interactive Pipeline — Click Any Component to Inspect
                  </h4>
                  <span className="text-xs text-[var(--color-accent)] font-mono">
                    Spring Boot 3.x · Kafka · Docker
                  </span>
                </div>

                {/* Pipeline nodes */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                  {springArchitectureSteps.map((step, idx) => {
                    const isSelected = selectedStepId === step.id;
                    return (
                      <button
                        key={step.id}
                        onClick={() => setSelectedStepId(step.id)}
                        className={`p-4 rounded-xl text-left border transition-all duration-300 relative group flex flex-col justify-between h-36 ${
                          isSelected
                            ? 'bg-[var(--color-surface-3)] border-[var(--color-accent)] ring-2 ring-blue-500/20 shadow-lg'
                            : 'bg-[var(--color-surface-2)] border-[var(--color-border)] hover:border-[var(--color-border-hover)]'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono text-[var(--color-text-muted)]">
                            0{idx + 1}
                          </span>
                          <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-[var(--color-accent)] animate-pulse' : 'bg-zinc-700'}`} />
                        </div>

                        <div>
                          <p className="text-xs font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                            {step.name}
                          </p>
                          <p className="text-[10px] text-[var(--color-text-tertiary)] uppercase mt-1 font-mono">
                            {step.type}
                          </p>
                        </div>

                        <div className="text-[10px] text-[var(--color-accent)] flex items-center gap-1 font-mono">
                          Inspect <ArrowRight size={10} />
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Step Detail Drawer */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedStep.id}
                    initial={reduced ? {} : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduced ? {} : { opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="mt-8 p-6 rounded-xl bg-[var(--color-surface-2)] border border-[var(--color-border)]"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-[var(--color-accent-subtle)] text-[var(--color-accent)]">
                          <Server size={20} />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-[var(--color-text-primary)]">
                            {selectedStep.name}
                          </h4>
                          <span className="text-xs text-[var(--color-text-tertiary)] font-mono">
                            Role: {selectedStep.type.toUpperCase()}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-6">
                      {selectedStep.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="p-4 rounded-lg bg-[var(--color-surface-1)] border border-[var(--color-border)]">
                        <div className="flex items-center gap-2 mb-3 text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]">
                          <ShieldCheck size={16} className="text-emerald-400" />
                          <span>Core Responsibilities</span>
                        </div>
                        <ul className="space-y-1.5 text-xs text-[var(--color-text-secondary)]">
                          {selectedStep.responsibilities.map((r, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                              {r}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-4 rounded-lg bg-[var(--color-surface-1)] border border-[var(--color-border)]">
                        <div className="flex items-center gap-2 mb-3 text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]">
                          <AlertTriangle size={16} className="text-amber-400" />
                          <span>Failure Mode & Mitigation</span>
                        </div>
                        <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                          {selectedStep.failureMode}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            ) : (
              /* Layered flow */
              <div className="space-y-4">
                <p className="text-xs font-mono text-[var(--color-text-muted)] mb-4">
                  Request Execution Path inside Spring Boot Clean Architecture:
                </p>
                <div className="flex flex-col gap-3">
                  {layeredSteps.map((layer, i) => (
                    <div
                      key={layer.label}
                      className="p-4 rounded-xl bg-[var(--color-surface-2)] border border-[var(--color-border)] flex items-center justify-between"
                    >
                      <div className="flex items-center gap-4">
                        <span className="w-6 h-6 rounded-full bg-[var(--color-surface-3)] text-xs font-mono flex items-center justify-center text-[var(--color-text-muted)]">
                          {i + 1}
                        </span>
                        <div>
                          <p className="text-sm font-bold text-[var(--color-text-primary)]">
                            {layer.label}
                          </p>
                          <p className="text-xs text-[var(--color-text-tertiary)]">
                            {layer.sub}
                          </p>
                        </div>
                      </div>
                      <span className="text-xs font-mono text-[var(--color-accent)] hidden sm:inline">
                        Bound to Interface
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
