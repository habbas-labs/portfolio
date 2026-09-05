import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Download, 
  Printer, 
  MapPin, 
  Phone, 
  Mail, 
  Linkedin, 
  Github, 
  Briefcase, 
  GraduationCap, 
  Sparkles, 
  CheckCircle2, 
  Code2, 
  Layers,
  FileText
} from 'lucide-react';
import { resumeData, profile } from '../../data/content';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl bg-[var(--color-surface-1)] border border-[var(--color-border-accent)] shadow-2xl overflow-hidden z-10 text-[var(--color-text-primary)]"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-[var(--color-border)] bg-[var(--color-surface-2)] gap-3">
            <div className="flex items-center gap-2.5 min-w-0">
              <FileText size={18} className="text-[var(--color-accent)] shrink-0" />
              <h2 className="text-sm sm:text-base font-bold text-[var(--color-text-primary)] truncate">
                Resume Preview — {profile.name}
              </h2>
              <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono font-medium whitespace-nowrap shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                14+ Years Experience
              </span>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              {/* Print Button */}
              <button
                onClick={handlePrint}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-[var(--color-border)] bg-[var(--color-surface-3)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
                title="Print or Save as PDF"
              >
                <Printer size={14} />
                <span>Print</span>
              </button>

              {/* Download DOCX Button */}
              <a
                href={profile.resumeUrl}
                download="Haider_Abbas_Resume.docx"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] transition-colors shadow-sm"
                title="Download original Microsoft Word DOCX"
              >
                <Download size={14} />
                <span>Download DOCX</span>
              </a>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-3)] transition-colors"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Scrollable Resume Body */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 bg-[var(--color-surface-0)] font-sans">
            
            {/* Resume Header */}
            <div className="border-b border-[var(--color-border)] pb-6">
              <div className="text-center sm:text-left">
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--color-text-primary)]">
                  {resumeData.name}
                </h1>
                <div className="mt-1 text-xs sm:text-sm font-semibold text-[var(--color-accent)] uppercase tracking-wider">
                  {resumeData.title}
                </div>

                {/* Contact pills */}
                <div className="mt-4 flex flex-wrap gap-y-2 gap-x-4 text-xs text-[var(--color-text-secondary)]">
                  <div className="flex items-center gap-1.5">
                    <MapPin size={13} className="text-[var(--color-text-muted)]" />
                    <span>{resumeData.contact.location}</span>
                  </div>
                  {resumeData.contact.phone && (
                    <div className="flex items-center gap-1.5">
                      <Phone size={13} className="text-[var(--color-text-muted)]" />
                      <a href={`tel:${resumeData.contact.phone}`} className="hover:text-[var(--color-accent)]">
                        {resumeData.contact.phone}
                      </a>
                    </div>
                  )}
                  <div className="flex items-center gap-1.5">
                    <Mail size={13} className="text-[var(--color-text-muted)]" />
                    <a href={`mailto:${resumeData.contact.email}`} className="hover:text-[var(--color-accent)] underline underline-offset-2">
                      {resumeData.contact.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Linkedin size={13} className="text-[var(--color-text-muted)]" />
                    <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-accent)]">
                      LinkedIn
                    </a>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Github size={13} className="text-[var(--color-text-muted)]" />
                    <a href={resumeData.contact.github} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-accent)]">
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Summary */}
            <section className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--color-accent)]">
                <FileText size={14} />
                <span>Professional Summary</span>
              </div>
              <div className="space-y-2 text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">
                {resumeData.summary.map((para, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mt-2 shrink-0" />
                    <span>{para}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Core Technical Skills */}
            <section className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--color-accent)]">
                <Code2 size={14} />
                <span>Core Technical Skills</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                {resumeData.skills.map((skill, i) => (
                  <div key={i} className="p-3 rounded-lg bg-[var(--color-surface-1)] border border-[var(--color-border)] text-xs">
                    <div className="font-bold text-[var(--color-text-primary)] mb-1">
                      {skill.category}
                    </div>
                    <div className="text-[var(--color-text-secondary)] leading-normal">
                      {skill.items}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Professional Experience */}
            <section className="space-y-6">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--color-accent)]">
                <Briefcase size={14} />
                <span>Professional Experience</span>
              </div>

              <div className="space-y-6 border-l-2 border-[var(--color-border)] pl-4 sm:pl-6 ml-2">
                {resumeData.experience.map((exp, i) => (
                  <div key={i} className="relative space-y-2">
                    {/* Timeline Node Dot */}
                    <div className="absolute -left-[23px] sm:-left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-[var(--color-surface-1)] border-2 border-[var(--color-accent)]" />

                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <h3 className="text-sm sm:text-base font-bold text-[var(--color-text-primary)]">
                        {exp.role} <span className="text-[var(--color-accent)] font-semibold">| {exp.company}</span>
                      </h3>
                      <span className="text-xs font-mono text-[var(--color-text-tertiary)] bg-[var(--color-surface-2)] px-2 py-0.5 rounded border border-[var(--color-border)] w-fit">
                        {exp.period}
                      </span>
                    </div>

                    {(exp.project || exp.client || exp.team) && (
                      <div className="text-xs text-[var(--color-text-tertiary)] font-mono">
                        {exp.project && <span>Project: {exp.project}</span>}
                        {exp.client && <span>Client: {exp.client}</span>}
                        {exp.team && <span className="ml-2">| Team: {exp.team}</span>}
                      </div>
                    )}

                    <ul className="mt-2 space-y-1.5 text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">
                      {exp.highlights.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2">
                          <span className="text-[var(--color-accent)] font-bold select-none shrink-0">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* AI / Agentic AI Projects */}
            <section className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--color-accent)]">
                <Sparkles size={14} />
                <span>AI / Agentic AI Projects</span>
              </div>

              <div className="space-y-3">
                {resumeData.projects.map((proj, i) => (
                  <div key={i} className="p-4 rounded-xl bg-[var(--color-surface-1)] border border-[var(--color-border)] space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <h4 className="text-sm font-bold text-[var(--color-text-primary)]">
                        {proj.title}
                      </h4>
                      <span className="text-xs text-[var(--color-accent)] font-mono">
                        {proj.subtitle}
                      </span>
                    </div>
                    <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                      {proj.description}
                    </p>
                    <ul className="mt-2 space-y-1 text-xs text-[var(--color-text-secondary)]">
                      {proj.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2">
                          <CheckCircle2 size={13} className="text-emerald-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--color-accent)]">
                <GraduationCap size={14} />
                <span>Education</span>
              </div>
              <div className="space-y-2">
                {resumeData.education.map((edu, i) => (
                  <div key={i} className="flex flex-col sm:flex-row sm:items-baseline justify-between p-3 rounded-lg bg-[var(--color-surface-1)] border border-[var(--color-border)] text-xs">
                    <div>
                      <div className="font-bold text-[var(--color-text-primary)]">{edu.degree}</div>
                      <div className="text-[var(--color-text-secondary)] mt-0.5">{edu.institution}</div>
                    </div>
                    <div className="font-mono text-[var(--color-text-tertiary)] mt-1 sm:mt-0">{edu.year}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Additional Information */}
            <section className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--color-accent)]">
                <Layers size={14} />
                <span>Additional Information</span>
              </div>
              <div className="p-4 rounded-xl bg-[var(--color-surface-1)] border border-[var(--color-border)] text-xs text-[var(--color-text-secondary)] space-y-1.5">
                {resumeData.additionalInfo.map((info, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-[var(--color-accent)] shrink-0">•</span>
                    <span>{info}</span>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Footer Bar */}
          <div className="flex items-center justify-between px-6 py-3 border-t border-[var(--color-border)] bg-[var(--color-surface-2)]">
            <span className="text-xs text-[var(--color-text-muted)]">
              Source file: <span className="font-mono text-[var(--color-text-secondary)]">resume.docx</span>
            </span>

            <div className="flex items-center gap-3">
              <button
                onClick={onClose}
                className="px-4 py-1.5 rounded-lg text-xs font-medium border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-3)] transition-colors"
              >
                Close
              </button>

              <a
                href={profile.resumeUrl}
                download="Haider_Abbas_Resume.docx"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-semibold bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] transition-colors shadow-sm"
              >
                <Download size={14} />
                Download Resume (.docx)
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
