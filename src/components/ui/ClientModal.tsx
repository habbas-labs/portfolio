import { motion, AnimatePresence } from 'framer-motion';
import { X, Briefcase, CheckCircle2, ShieldCheck, ArrowRight, Sparkles, Server, Radio, Cpu, Brain, Mail } from 'lucide-react';
import { profile, consultingServices, problemsSolved } from '../../data/content';

interface ClientModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenInquiry: (serviceTitle?: string) => void;
}

export function ClientModal({ isOpen, onClose, onOpenInquiry }: ClientModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-3xl bg-[var(--color-surface-1)] border border-[var(--color-border-hover)] rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="p-4 sm:p-6 border-b border-[var(--color-border)] flex items-center justify-between bg-[var(--color-surface-2)]">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-[var(--color-accent-subtle)] text-[var(--color-accent)]">
                <Briefcase size={20} />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[var(--color-text-primary)]">
                  Client & Engineering Leader Fast-Path (60-Second Overview)
                </h3>
                <p className="text-xs text-[var(--color-text-tertiary)]">
                  Senior Backend & Distributed Systems Consultant · Systems Modernization & AI
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-lg text-[var(--color-text-muted)] hover:text-white hover:bg-[var(--color-surface-3)] transition-colors"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>

          {/* Body Content */}
          <div className="p-4 sm:p-6 overflow-y-auto space-y-4 sm:space-y-6 text-sm">
            {/* Value Proposition */}
            <div className="p-4 rounded-xl bg-[var(--color-surface-2)] border border-[var(--color-border)] space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-[var(--color-accent)] uppercase tracking-wider">
                <Sparkles size={14} /> Core Value Proposition
              </div>
              <h4 className="text-base font-bold text-[var(--color-text-primary)]">
                Architecting resilient systems before writing code.
              </h4>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                I help companies solve complex backend scalability bottlenecks, tame Kafka event streams, safely modernize high-risk legacy routines (COBOL to Java), and build grounded enterprise AI systems that deliver production value without hallucinations.
              </p>
            </div>

            {/* Signature Capabilities */}
            <div>
              <h4 className="text-xs font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider mb-3">
                Core Consulting Capabilities
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-lg bg-[var(--color-surface-2)] border border-[var(--color-border)] flex items-start gap-3">
                  <div className="p-1.5 rounded-md bg-[var(--color-accent-subtle)] text-[var(--color-accent)] mt-0.5">
                    <Server size={16} />
                  </div>
                  <div>
                    <h5 className="font-semibold text-xs text-[var(--color-text-primary)]">High-Throughput Backend Architecture</h5>
                    <p className="text-[11px] text-[var(--color-text-tertiary)] mt-0.5">Java 21, Spring Boot 3, Clean Hexagonal Architecture, sub-50ms latency SLAs.</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-[var(--color-surface-2)] border border-[var(--color-border)] flex items-start gap-3">
                  <div className="p-1.5 rounded-md bg-[var(--color-accent-subtle)] text-[var(--color-accent)] mt-0.5">
                    <Radio size={16} />
                  </div>
                  <div>
                    <h5 className="font-semibold text-xs text-[var(--color-text-primary)]">Kafka & Event Streaming</h5>
                    <p className="text-[11px] text-[var(--color-text-tertiary)] mt-0.5">Zero message loss, non-blocking retries, DLT parking, consumer lag elimination.</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-[var(--color-surface-2)] border border-[var(--color-border)] flex items-start gap-3">
                  <div className="p-1.5 rounded-md bg-[var(--color-accent-subtle)] text-[var(--color-accent)] mt-0.5">
                    <Cpu size={16} />
                  </div>
                  <div>
                    <h5 className="font-semibold text-xs text-[var(--color-text-primary)]">Zero-Downtime Legacy Modernization</h5>
                    <p className="text-[11px] text-[var(--color-text-tertiary)] mt-0.5">COBOL/Monolith to Java 21 with 100% byte-for-byte golden-master validation.</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-[var(--color-surface-2)] border border-[var(--color-border)] flex items-start gap-3">
                  <div className="p-1.5 rounded-md bg-[var(--color-accent-subtle)] text-[var(--color-accent)] mt-0.5">
                    <Brain size={16} />
                  </div>
                  <div>
                    <h5 className="font-semibold text-xs text-[var(--color-text-primary)]">AI for Existing Software Systems</h5>
                    <p className="text-[11px] text-[var(--color-text-tertiary)] mt-0.5">Spring AI RAG pipelines, MCP tool calling, and deterministic multi-agent flows.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* How We Work Together */}
            <div>
              <h4 className="text-xs font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider mb-3">
                Engagement Models
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-[var(--color-surface-2)] border border-[var(--color-border)]">
                  <div className="font-bold text-[var(--color-text-primary)]">Architecture Review</div>
                  <div className="text-[10px] text-[var(--color-accent)] font-mono mt-0.5">1 – 2 Weeks</div>
                  <p className="text-[11px] text-[var(--color-text-secondary)] mt-1.5">Deep inspection of bottlenecks, scalability risks, and concrete ADR roadmap.</p>
                </div>
                <div className="p-3 rounded-lg bg-[var(--color-surface-2)] border border-[var(--color-border)]">
                  <div className="font-bold text-[var(--color-text-primary)]">Targeted Project</div>
                  <div className="text-[10px] text-[var(--color-accent)] font-mono mt-0.5">4 – 12 Weeks</div>
                  <p className="text-[11px] text-[var(--color-text-secondary)] mt-1.5">Ownership and implementation of high-complexity backend or AI capabilities.</p>
                </div>
                <div className="p-3 rounded-lg bg-[var(--color-surface-2)] border border-[var(--color-border)]">
                  <div className="font-bold text-[var(--color-text-primary)]">Technical Advisory</div>
                  <div className="text-[10px] text-[var(--color-accent)] font-mono mt-0.5">Monthly Retainer</div>
                  <p className="text-[11px] text-[var(--color-text-secondary)] mt-1.5">Weekly architecture reviews, design critiques, and engineering mentorship.</p>
                </div>
              </div>
            </div>

            {/* Guarantees */}
            <div className="p-4 rounded-xl bg-[var(--color-surface-2)] border border-[var(--color-border)] space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-[var(--color-text-primary)]">
                <ShieldCheck size={16} className="text-emerald-400" /> Engineering Delivery Standards
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[var(--color-text-secondary)]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                  <span>Documented trade-offs & ADRs before coding</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                  <span>Sub-second P99 latency SLA targets</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                  <span>Automated parity tests & zero data loss</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                  <span>Clean domain isolation & runbook handoff</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-4 sm:p-6 border-t border-[var(--color-border)] bg-[var(--color-surface-2)] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 text-xs text-[var(--color-text-secondary)] hover:text-white transition-colors"
            >
              <Mail size={14} />
              {profile.email}
            </a>

            <button
              onClick={() => {
                onClose();
                onOpenInquiry();
              }}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white text-xs font-semibold shadow-lg shadow-[var(--color-accent)]/20 transition-all hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto text-center"
            >
              <span>Start a Project / Inquiry</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
