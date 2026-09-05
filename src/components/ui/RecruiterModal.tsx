import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, Briefcase, CheckCircle2, FileText, Mail, Linkedin, Github, ExternalLink } from 'lucide-react';
import { profile } from '../../data/content';

interface RecruiterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RecruiterModal({ isOpen, onClose }: RecruiterModalProps) {
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
          className="relative w-full max-w-2xl bg-[var(--color-surface-1)] border border-[var(--color-border-hover)] rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="p-6 border-b border-[var(--color-border)] flex items-center justify-between bg-[var(--color-surface-2)]">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-[var(--color-accent-subtle)] text-[var(--color-accent)]">
                <Clock size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[var(--color-text-primary)]">
                  Recruiter Fast-Path (30-Second Overview)
                </h3>
                <p className="text-xs text-[var(--color-text-tertiary)]">
                  Quick summary of qualifications, domain expertise & contact links
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
          <div className="p-6 overflow-y-auto space-y-6">
            {/* 1. Positioning & Experience */}
            <div className="p-4 rounded-xl bg-[var(--color-surface-2)] border border-[var(--color-border)]">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-base font-bold text-[var(--color-text-primary)]">
                    {profile.name}
                  </h4>
                  <p className="text-xs text-[var(--color-accent)] font-medium">
                    {profile.tagline}
                  </p>
                </div>
                <div className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-mono font-bold">
                  {profile.yearsExperience}+ Years Exp.
                </div>
              </div>

              <p className="text-xs text-[var(--color-text-secondary)] mt-3 leading-relaxed">
                Senior Backend Engineer & Technical Lead specializing in resilient distributed systems, modern Java 21, Spring Boot microservices, Kafka event streaming, and enterprise AI engineering (Spring AI / RAG / Agents).
              </p>
            </div>

            {/* 2. Core Tech Stack */}
            <div>
              <h5 className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)] mb-2">
                Core Production Stack
              </h5>
              <div className="flex flex-wrap gap-2">
                {['Java 21', 'Spring Boot 3', 'Kafka', 'Microservices', 'PostgreSQL', 'DB2', 'Docker / K8s', 'Spring AI', 'RAG'].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs rounded-md bg-[var(--color-surface-3)] text-[var(--color-text-primary)] border border-[var(--color-border)] font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* 3. Flagship Enterprise Experience */}
            <div className="p-4 rounded-xl bg-[var(--color-surface-2)] border border-[var(--color-border)]">
              <div className="flex items-center gap-2 mb-2">
                <Briefcase size={16} className="text-amber-400" />
                <h5 className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-primary)]">
                  Primary Enterprise Experience
                </h5>
              </div>
              <p className="text-sm font-semibold text-[var(--color-text-primary)]">
                SS&C DomaniRx — Senior Developer → Technical Lead
              </p>
              <ul className="mt-2 space-y-1 text-xs text-[var(--color-text-secondary)]">
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 size={13} className="text-emerald-400 mt-0.5 shrink-0" />
                  Modernized core healthcare claims adjudication from legacy COBOL to Java 21 microservices.
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 size={13} className="text-emerald-400 mt-0.5 shrink-0" />
                  Engineered real-time B1/B2/B3 transaction workflows with CMS and IRA 2025 compliance.
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 size={13} className="text-emerald-400 mt-0.5 shrink-0" />
                  Designed high-throughput Kafka pipelines with non-blocking retries and zero data loss.
                </li>
              </ul>
            </div>

            {/* 4. AI Trajectory */}
            <div className="p-4 rounded-xl bg-[var(--color-surface-2)] border border-[var(--color-border)]">
              <h5 className="text-xs font-bold uppercase tracking-wider text-[var(--color-accent)] mb-1">
                AI Trajectory
              </h5>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Extending enterprise backend rigor to AI: Spring AI integration, RAG pipelines with Pgvector, tool-calling agents, and Model Context Protocol (MCP) implementations for autonomous enterprise tooling.
              </p>
            </div>
          </div>

          {/* Footer CTAs */}
          <div className="p-6 border-t border-[var(--color-border)] bg-[var(--color-surface-2)] flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                download="Haider_Abbas_Resume.docx"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[var(--color-accent)] text-white text-xs font-semibold hover:bg-[var(--color-accent-hover)] transition-colors"
              >
                <FileText size={14} />
                View Full Resume
              </a>

              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-[var(--color-border-hover)] text-xs text-[var(--color-text-secondary)] hover:text-white hover:bg-[var(--color-surface-3)] transition-colors"
              >
                <Mail size={14} />
                Email
              </a>
            </div>

            <div className="flex items-center gap-2 text-xs text-[var(--color-text-muted)]">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:text-[var(--color-accent)] transition-colors"
                title="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:text-[var(--color-accent)] transition-colors"
                title="GitHub"
              >
                <Github size={16} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
