import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Copy, Check, Sparkles, Building, Mail, User, Clock, Code2 } from 'lucide-react';
import { profile } from '../../data/content';

interface ProjectInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export function ProjectInquiryModal({ isOpen, onClose, defaultService }: ProjectInquiryModalProps) {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState(defaultService || 'Architecture Review & Assessment');
  const [timeline, setTimeline] = useState('Immediate (Next 2-4 weeks)');
  const [currentTech, setCurrentTech] = useState('');
  const [description, setDescription] = useState('');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const projectTypes = [
    'Architecture Review & Assessment',
    'High-Throughput Backend Engineering',
    'Kafka & Event-Driven Architecture',
    'Legacy Modernization (COBOL/Monolith → Java)',
    'AI Integration for Existing Software (RAG)',
    'Agentic AI & Multi-Agent Architecture',
    'Part-Time Technical Advisory / Fractional Lead',
  ];

  const timelines = [
    'Immediate (Next 1-2 weeks)',
    'Next 1 month',
    'Next quarter',
    'Exploratory / Advisory',
  ];

  const emailSubject = encodeURIComponent(`Consulting Inquiry: ${projectType} — ${company || name || 'Project'}`);
  const emailBody = encodeURIComponent(`Hi Haider,

I would like to discuss an engineering consulting project with you.

--- INQUIRY DETAILS ---
Name: ${name || '[Your Name]'}
Company: ${company || '[Your Company]'}
Email: ${email || '[Your Email]'}
Project Type: ${projectType}
Timeline: ${timeline}
Current Tech Stack: ${currentTech || 'N/A'}

--- PROBLEM / GOAL ---
${description || '[Describe your technical challenge or architectural goal here]'}

Looking forward to hearing from you.

Best regards,
${name || '[Your Name]'}`);

  const mailtoUrl = `mailto:${profile.email}?subject=${emailSubject}&body=${emailBody}`;

  const handleCopy = () => {
    const rawText = `CONSULTING INQUIRY FOR HAIDER ABBAS
Name: ${name || 'N/A'}
Company: ${company || 'N/A'}
Email: ${email || 'N/A'}
Project Type: ${projectType}
Timeline: ${timeline}
Current Tech Stack: ${currentTech || 'N/A'}
Problem / Scope:
${description || 'N/A'}`;

    navigator.clipboard.writeText(rawText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-2xl bg-[var(--color-surface-1)] border border-[var(--color-border-hover)] rounded-2xl shadow-2xl overflow-hidden z-10 my-8 flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="p-6 border-b border-[var(--color-border)] flex items-center justify-between bg-[var(--color-surface-2)]">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-[var(--color-accent-subtle)] text-[var(--color-accent)]">
                <Sparkles size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[var(--color-text-primary)]">
                  Start a Project / Inquiry
                </h3>
                <p className="text-xs text-[var(--color-text-tertiary)]">
                  Share your architecture, scaling, or modernization challenge directly
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

          {/* Form Content */}
          <div className="p-6 overflow-y-auto space-y-5 text-sm">
            {/* Contact Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[var(--color-text-secondary)] mb-1.5 flex items-center gap-1.5">
                  <User size={14} /> Your Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Jane Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[var(--color-surface-2)] border border-[var(--color-border)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-accent)] transition-colors text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[var(--color-text-secondary)] mb-1.5 flex items-center gap-1.5">
                  <Building size={14} /> Company / Organization
                </label>
                <input
                  type="text"
                  placeholder="e.g. Acme Health or Fintech Corp"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[var(--color-surface-2)] border border-[var(--color-border)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-accent)] transition-colors text-sm"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-semibold text-[var(--color-text-secondary)] mb-1.5 flex items-center gap-1.5">
                <Mail size={14} /> Work Email
              </label>
              <input
                type="email"
                placeholder="jane@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[var(--color-surface-2)] border border-[var(--color-border)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-accent)] transition-colors text-sm"
              />
            </div>

            {/* Project Type */}
            <div>
              <label className="block text-xs font-semibold text-[var(--color-text-secondary)] mb-1.5">
                Project Type / Engagement Need
              </label>
              <select
                value={projectType}
                onChange={(e) => setProjectType(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[var(--color-surface-2)] border border-[var(--color-border)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-accent)] transition-colors text-sm"
              >
                {projectTypes.map((type) => (
                  <option key={type} value={type} className="bg-[var(--color-surface-1)]">
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Timeline */}
            <div>
              <label className="block text-xs font-semibold text-[var(--color-text-secondary)] mb-1.5 flex items-center gap-1.5">
                <Clock size={14} /> Desired Timeline
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {timelines.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTimeline(t)}
                    className={`px-3 py-2 rounded-lg text-xs font-medium border text-center transition-all ${
                      timeline === t
                        ? 'border-[var(--color-accent)] bg-[var(--color-accent-subtle)] text-[var(--color-accent)] font-semibold'
                        : 'border-[var(--color-border)] bg-[var(--color-surface-2)] text-[var(--color-text-tertiary)] hover:border-[var(--color-border-hover)]'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Current Tech Stack */}
            <div>
              <label className="block text-xs font-semibold text-[var(--color-text-secondary)] mb-1.5 flex items-center gap-1.5">
                <Code2 size={14} /> Current Technology Stack (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. Java 17, Spring Boot, Kafka, PostgreSQL, AWS"
                value={currentTech}
                onChange={(e) => setCurrentTech(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[var(--color-surface-2)] border border-[var(--color-border)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-accent)] transition-colors text-sm"
              />
            </div>

            {/* Problem Description */}
            <div>
              <label className="block text-xs font-semibold text-[var(--color-text-secondary)] mb-1.5">
                What is the challenge, bottleneck, or system you want to build/fix?
              </label>
              <textarea
                rows={4}
                placeholder="Briefly describe what your system does today, what bottleneck or feature you are trying to solve, and what a successful outcome looks like..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[var(--color-surface-2)] border border-[var(--color-border)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-accent)] transition-colors text-sm resize-none"
              />
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-6 border-t border-[var(--color-border)] bg-[var(--color-surface-2)] flex flex-wrap items-center justify-between gap-3">
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-3)] text-xs font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-border-hover)] transition-colors"
            >
              {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
              {copied ? 'Copied to Clipboard!' : 'Copy Inquiry Draft'}
            </button>

            <a
              href={mailtoUrl}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white text-xs font-semibold shadow-lg shadow-[var(--color-accent)]/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Send size={14} />
              Open in Mail Client & Send
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
