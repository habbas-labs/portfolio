import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Server, 
  Radio, 
  Cpu, 
  Brain, 
  Bot, 
  Compass, 
  Sparkles,
  Layers,
  Clock,
  ChevronRight,
  Send
} from 'lucide-react';
import { 
  consultingServices, 
  problemsSolved, 
  engagementModels, 
  clientJourneySteps 
} from '../../data/content';

interface ConsultingSectionProps {
  onOpenInquiry: (serviceTitle?: string) => void;
}

export function ConsultingSection({ onOpenInquiry }: ConsultingSectionProps) {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(consultingServices[0].id);
  const [selectedProblemId, setSelectedProblemId] = useState<string>(problemsSolved[0].id);

  const activeService = consultingServices.find((s) => s.id === selectedServiceId) || consultingServices[0];
  const activeProblem = problemsSolved.find((p) => p.id === selectedProblemId) || problemsSolved[0];

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck size={20} />;
      case 'Server': return <Server size={20} />;
      case 'Radio': return <Radio size={20} />;
      case 'Cpu': return <Cpu size={20} />;
      case 'Brain': return <Brain size={20} />;
      case 'Bot': return <Bot size={20} />;
      case 'Compass': return <Compass size={20} />;
      default: return <Briefcase size={20} />;
    }
  };

  return (
    <section id="consulting" className="py-24 relative overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-indigo-500/5 via-violet-500/5 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-accent-subtle)] text-[var(--color-accent)] text-xs font-semibold uppercase tracking-wider">
            <Briefcase size={14} /> Technology Consulting & Engineering
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--color-text-primary)] tracking-tight">
            Independent Engineering Services
          </h2>
          <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
            I help technology companies and engineering leaders architect resilient distributed backends, eliminate Kafka bottlenecks, safely modernize legacy systems, and integrate production-grade AI.
          </p>
        </div>

        {/* ═══════════════════════════════════════════
            PART 1: PROBLEMS I HELP SOLVE (Section 11)
            ═══════════════════════════════════════════ */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-[var(--color-accent)] uppercase tracking-wider">
                Problem → Approach → Result
              </span>
              <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mt-1">
                Common Challenges I Solve
              </h3>
            </div>
            <p className="text-xs text-[var(--color-text-tertiary)] max-w-md">
              Real-world engineering challenges solved with architectural discipline rather than temporary patches.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Problem Navigation Tabs */}
            <div className="lg:col-span-4 space-y-2">
              {problemsSolved.map((p) => {
                const isActive = p.id === selectedProblemId;
                return (
                  <button
                    key={p.id}
                    onClick={() => setSelectedProblemId(p.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-all text-sm flex items-center justify-between group ${
                      isActive
                        ? 'bg-[var(--color-surface-2)] border-[var(--color-accent)] text-[var(--color-text-primary)] shadow-md'
                        : 'bg-[var(--color-surface-1)] border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-border-hover)]'
                    }`}
                  >
                    <div>
                      <span className="text-[10px] font-semibold text-[var(--color-accent)] uppercase tracking-wider block mb-1">
                        {p.tag}
                      </span>
                      <span className="font-semibold text-xs sm:text-sm block">
                        {p.title}
                      </span>
                    </div>
                    <ChevronRight
                      size={16}
                      className={`transition-transform shrink-0 ${
                        isActive ? 'text-[var(--color-accent)] translate-x-1' : 'text-[var(--color-text-muted)] group-hover:translate-x-0.5'
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Problem Active Deep-Dive Card */}
            <div className="lg:col-span-8 p-6 sm:p-8 rounded-2xl bg-[var(--color-surface-2)] border border-[var(--color-border-hover)] space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono text-[var(--color-accent)] uppercase tracking-wider">
                  {activeProblem.tag}
                </span>
                <h4 className="text-xl font-bold text-[var(--color-text-primary)]">
                  {activeProblem.title}
                </h4>
              </div>

              {/* Problem Breakdown */}
              <div className="p-4 rounded-xl bg-[var(--color-surface-3)] border border-[var(--color-border)]">
                <span className="text-xs font-bold text-rose-400 uppercase tracking-wider block mb-1.5">
                  The Problem
                </span>
                <p className="text-xs sm:text-sm text-[var(--color-text-primary)] leading-relaxed">
                  {activeProblem.problem}
                </p>
              </div>

              {/* My Approach */}
              <div className="space-y-3">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                  My Engineering Approach
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeProblem.approach.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-[var(--color-surface-1)] border border-[var(--color-border)] text-xs text-[var(--color-text-secondary)] flex items-start gap-2.5"
                    >
                      <span className="w-5 h-5 rounded-full bg-[var(--color-surface-3)] text-[var(--color-accent)] font-mono text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="leading-snug">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* The Result */}
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-start gap-3">
                <CheckCircle2 size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-1">
                    Expected Business & Technical Result
                  </span>
                  <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
                    {activeProblem.result}
                  </p>
                </div>
              </div>

              {/* Technologies Involved & CTA */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--color-border)]">
                <div className="flex flex-wrap gap-1.5">
                  {activeProblem.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-[var(--color-surface-1)] text-[var(--color-text-tertiary)] border border-[var(--color-border)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => onOpenInquiry(activeProblem.title)}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--color-accent)] hover:text-white transition-colors"
                >
                  Discuss this with me <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            PART 2: CONSULTING SERVICES (Section 12)
            ═══════════════════════════════════════════ */}
        <div className="space-y-6 pt-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-[var(--color-accent)] uppercase tracking-wider">
              Specialized Offerings
            </span>
            <h3 className="text-2xl font-bold text-[var(--color-text-primary)]">
              Consulting Services & Deliverables
            </h3>
            <p className="text-xs text-[var(--color-text-secondary)]">
              Discrete, outcome-oriented consulting packages with concrete engineering deliverables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {consultingServices.map((service) => (
              <div
                key={service.id}
                className="p-6 rounded-2xl bg-[var(--color-surface-1)] border border-[var(--color-border)] hover:border-[var(--color-border-hover)] transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-accent-subtle)] text-[var(--color-accent)] flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getServiceIcon(service.icon)}
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-[var(--color-text-primary)] leading-snug">
                      {service.title}
                    </h4>
                    <p className="text-xs text-[var(--color-accent)] font-medium mt-1">
                      {service.tagline}
                    </p>
                  </div>

                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                    {service.description}
                  </p>

                  {/* Deliverables List */}
                  <div className="pt-2 space-y-2 border-t border-[var(--color-border)]">
                    <span className="text-[11px] font-bold text-[var(--color-text-tertiary)] uppercase tracking-wider block">
                      Concrete Deliverables
                    </span>
                    <ul className="space-y-1.5">
                      {service.deliverables.map((deliv, idx) => (
                        <li key={idx} className="text-xs text-[var(--color-text-secondary)] flex items-start gap-2">
                          <CheckCircle2 size={13} className="text-[var(--color-accent)] shrink-0 mt-0.5" />
                          <span>{deliv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[var(--color-border)] flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {service.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[10px] bg-[var(--color-surface-2)] text-[var(--color-text-muted)] border border-[var(--color-border)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => onOpenInquiry(service.title)}
                    className="p-2 rounded-lg text-[var(--color-text-muted)] hover:text-white hover:bg-[var(--color-surface-3)] transition-colors"
                    title="Inquire about this service"
                    aria-label={`Inquire about ${service.title}`}
                  >
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            PART 3: ENGAGEMENT MODELS (Section 13)
            ═══════════════════════════════════════════ */}
        <div className="space-y-6 pt-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-[var(--color-accent)] uppercase tracking-wider">
                Engagement Structures
              </span>
              <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mt-1">
                Flexible Ways to Work Together
              </h3>
            </div>
            <p className="text-xs text-[var(--color-text-tertiary)] max-w-md">
              From fast 2-week architectural assessments to hands-on critical path engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {engagementModels.map((model) => (
              <div
                key={model.id}
                className="p-6 rounded-2xl bg-[var(--color-surface-2)] border border-[var(--color-border)] flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-[var(--color-accent)] bg-[var(--color-accent-subtle)] px-2.5 py-1 rounded-md font-semibold">
                      {model.duration}
                    </span>
                    <Clock size={16} className="text-[var(--color-text-tertiary)]" />
                  </div>

                  <h4 className="text-base font-bold text-[var(--color-text-primary)]">
                    {model.title}
                  </h4>

                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                    {model.description}
                  </p>

                  <div className="p-3 rounded-lg bg-[var(--color-surface-3)] text-xs text-[var(--color-text-secondary)]">
                    <span className="font-semibold text-[var(--color-text-primary)] block mb-1">
                      Ideal For:
                    </span>
                    {model.idealFor}
                  </div>
                </div>

                <div className="pt-3 border-t border-[var(--color-border)]">
                  <span className="text-[11px] font-bold text-[var(--color-text-tertiary)] uppercase tracking-wider block mb-1.5">
                    Primary Deliverables
                  </span>
                  <div className="space-y-1">
                    {model.deliverables.map((item, idx) => (
                      <div key={idx} className="text-xs text-[var(--color-text-secondary)] flex items-center gap-2">
                        <CheckCircle2 size={12} className="text-emerald-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            PART 4: CLIENT JOURNEY (Section 14)
            ═══════════════════════════════════════════ */}
        <div className="space-y-8 pt-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-[var(--color-accent)] uppercase tracking-wider">
              Structured Workflow
            </span>
            <h3 className="text-2xl font-bold text-[var(--color-text-primary)]">
              The 8-Step Client Journey
            </h3>
            <p className="text-xs text-[var(--color-text-secondary)]">
              A predictable, transparent engagement process with zero surprises from discovery to knowledge transfer.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {clientJourneySteps.map((step) => (
              <div
                key={step.step}
                className="p-5 rounded-xl bg-[var(--color-surface-1)] border border-[var(--color-border)] hover:border-[var(--color-border-hover)] transition-all space-y-3 relative group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xl font-mono font-black text-[var(--color-accent)]">
                    {step.step}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-[var(--color-accent)]/40 group-hover:scale-150 transition-transform" />
                </div>

                <div>
                  <h4 className="font-bold text-sm text-[var(--color-text-primary)]">
                    {step.title}
                  </h4>
                  <p className="text-xs text-[var(--color-text-secondary)] mt-1 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-[var(--color-border)] text-[11px] text-[var(--color-text-tertiary)]">
                  <span className="font-semibold text-[var(--color-text-primary)]">Deliverable: </span>
                  {step.deliverable}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            PART 5: CONSULTING CALL TO ACTION
            ═══════════════════════════════════════════ */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[var(--color-surface-2)] via-[var(--color-surface-1)] to-[var(--color-surface-2)] border border-[var(--color-border-hover)] text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-accent-subtle)] text-[var(--color-accent)] text-xs font-semibold uppercase tracking-wider">
              <Sparkles size={14} /> Ready to Collaborate?
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--color-text-primary)]">
              Let's Discuss Your Architecture or System Challenge
            </h3>
            <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">
              Whether you need an architecture review before a major migration, hands-on Kafka troubleshooting, or help adding AI to your working software, I'm ready to help.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenInquiry()}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white text-sm font-semibold shadow-xl shadow-[var(--color-accent)]/20 transition-all hover:scale-105 active:scale-95"
            >
              <Send size={16} />
              Start a Project Inquiry
            </button>

            <a
              href="mailto:haiderabbas@example.com"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-2)] hover:bg-[var(--color-surface-3)] text-sm font-semibold text-[var(--color-text-primary)] transition-all"
            >
              Direct Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
