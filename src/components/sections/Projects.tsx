import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Layers, 
  CheckCircle2, 
  AlertTriangle, 
  X, 
  ArrowRight,
  ShieldAlert,
  Activity,
  Cpu,
  Workflow,
  Sparkles
} from 'lucide-react';
import { projects } from '../../data/content';
import type { Project } from '../../types';

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'enterprise' | 'ai' | 'system-design'>('all');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter((p) => p.category === selectedCategory);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'enterprise', label: 'Enterprise Systems' },
    { id: 'ai', label: 'AI Systems & Labs' },
    { id: 'system-design', label: 'Distributed Systems' },
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-accent-subtle)] text-[var(--color-accent)] text-xs font-semibold uppercase tracking-wider mb-2">
              <FolderGit2 size={14} /> Proof of Work & Systems
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--color-text-primary)] tracking-tight">
              Engineering Workbench & Projects
            </h2>
            <p className="text-sm text-[var(--color-text-secondary)] mt-1 max-w-2xl">
              Architectural case studies, distributed event pipelines, and AI systems presented with deep technical specifications.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-[var(--color-surface-2)] border border-[var(--color-border)] self-start sm:self-auto">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCategory(c.id as any)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === c.id
                    ? 'bg-[var(--color-accent)] text-white font-semibold shadow-sm'
                    : 'text-[var(--color-text-secondary)] hover:text-white hover:bg-[var(--color-surface-3)]'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="p-6 rounded-2xl bg-[var(--color-surface-1)] border border-[var(--color-border)] hover:border-[var(--color-border-hover)] transition-all flex flex-col justify-between group space-y-4 cursor-pointer hover:shadow-xl"
              onClick={() => setActiveProject(project)}
            >
              <div className="space-y-3">
                {/* Top Badge Row */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-[var(--color-surface-2)] text-[var(--color-text-tertiary)] border border-[var(--color-border)]">
                    {project.category}
                  </span>

                  {project.status === 'PROVISIONAL' ? (
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                      <AlertTriangle size={11} /> Concept Template
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      <CheckCircle2 size={11} /> Verified Production
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors leading-snug">
                  {project.title}
                </h3>

                <p className="text-xs text-[var(--color-text-secondary)] line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {project.businessProblem && (
                  <div className="p-3 rounded-lg bg-[var(--color-surface-2)] border border-[var(--color-border)] text-xs text-[var(--color-text-tertiary)]">
                    <span className="font-semibold text-[var(--color-text-secondary)] block mb-1">
                      Business Challenge:
                    </span>
                    <p className="line-clamp-2">{project.businessProblem}</p>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-[var(--color-border)] flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[10px] bg-[var(--color-surface-2)] text-[var(--color-text-muted)] border border-[var(--color-border)]"
                    >
                      {t}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-1.5 py-0.5 text-[10px] text-[var(--color-text-tertiary)]">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <span className="text-xs font-semibold text-[var(--color-accent)] inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  View Spec <ArrowRight size={13} />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Deep-Dive Project Modal */}
        <AnimatePresence>
          {activeProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveProject(null)}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.2 }}
                className="relative w-full max-w-3xl bg-[var(--color-surface-1)] border border-[var(--color-border-hover)] rounded-2xl shadow-2xl overflow-hidden z-10 my-8 flex flex-col max-h-[90vh]"
              >
                {/* Header */}
                <div className="p-6 border-b border-[var(--color-border)] flex items-center justify-between bg-[var(--color-surface-2)]">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-[var(--color-surface-3)] text-[var(--color-accent)]">
                        {activeProject.category}
                      </span>
                      {activeProject.status === 'PROVISIONAL' ? (
                        <span className="text-[10px] font-semibold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                          Template / Concept
                        </span>
                      ) : (
                        <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                          Production System
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[var(--color-text-primary)]">
                      {activeProject.title}
                    </h3>
                  </div>

                  <button
                    onClick={() => setActiveProject(null)}
                    className="p-2 rounded-lg text-[var(--color-text-muted)] hover:text-white hover:bg-[var(--color-surface-3)] transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Modal Body */}
                <div className="p-6 overflow-y-auto space-y-6 text-sm">
                  {/* Provisional Notice */}
                  {activeProject.status === 'PROVISIONAL' && (
                    <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-3">
                      <AlertTriangle size={18} className="text-amber-400 shrink-0 mt-0.5" />
                      <p className="text-xs text-amber-200 leading-relaxed">
                        <strong>Concept Template:</strong> This entry is structured as an architectural blueprint per Master Prompt specifications. Replace with verified client project details before public release.
                      </p>
                    </div>
                  )}

                  {/* Summary */}
                  <div>
                    <span className="text-xs font-bold text-[var(--color-text-tertiary)] uppercase tracking-wider block mb-1">
                      Executive Overview
                    </span>
                    <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">
                      {activeProject.description}
                    </p>
                  </div>

                  {/* 1. Business Problem */}
                  {activeProject.businessProblem && (
                    <div className="p-4 rounded-xl bg-[var(--color-surface-2)] border border-[var(--color-border)] space-y-1.5">
                      <span className="text-xs font-bold text-rose-400 uppercase tracking-wider block">
                        1. Business Problem & Regulatory Context
                      </span>
                      <p className="text-xs sm:text-sm text-[var(--color-text-primary)] leading-relaxed">
                        {activeProject.businessProblem}
                      </p>
                    </div>
                  )}

                  {/* 2. Architecture & Data Flow */}
                  {activeProject.architecture && (
                    <div className="space-y-2">
                      <span className="text-xs font-bold text-[var(--color-accent)] uppercase tracking-wider block">
                        2. Recommended Architecture
                      </span>
                      <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">
                        {activeProject.architecture}
                      </p>
                    </div>
                  )}

                  {activeProject.dataFlow && (
                    <div className="p-4 rounded-xl bg-[var(--color-surface-2)] border border-[var(--color-border)] space-y-1.5">
                      <span className="text-xs font-bold text-sky-400 uppercase tracking-wider flex items-center gap-1.5">
                        <Workflow size={14} /> End-to-End Data Flow
                      </span>
                      <p className="text-xs font-mono text-[var(--color-text-secondary)] leading-relaxed bg-[var(--color-surface-3)] p-3 rounded-lg border border-[var(--color-border)]">
                        {activeProject.dataFlow}
                      </p>
                    </div>
                  )}

                  {/* 3. Challenges & Decisions */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {activeProject.challenges && activeProject.challenges.length > 0 && (
                      <div className="p-4 rounded-xl bg-[var(--color-surface-2)] border border-[var(--color-border)] space-y-2">
                        <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                          Key Engineering Challenges
                        </span>
                        <ul className="space-y-1.5">
                          {activeProject.challenges.map((c, idx) => (
                            <li key={idx} className="text-xs text-[var(--color-text-secondary)] flex items-start gap-2">
                              <span className="text-amber-400 font-bold">•</span>
                              <span>{c}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {activeProject.decisions && activeProject.decisions.length > 0 && (
                      <div className="p-4 rounded-xl bg-[var(--color-surface-2)] border border-[var(--color-border)] space-y-2">
                        <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">
                          Architectural Decisions & Trade-offs
                        </span>
                        <ul className="space-y-1.5">
                          {activeProject.decisions.map((d, idx) => (
                            <li key={idx} className="text-xs text-[var(--color-text-secondary)] flex items-start gap-2">
                              <CheckCircle2 size={13} className="text-emerald-400 shrink-0 mt-0.5" />
                              <span>{d}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* 4. Non-Functional Pillars: Scalability, Reliability, Testing, Observability */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeProject.scalability && (
                      <div className="p-3.5 rounded-lg bg-[var(--color-surface-2)] border border-[var(--color-border)]">
                        <span className="text-[11px] font-bold text-[var(--color-text-tertiary)] uppercase tracking-wider block mb-1">
                          Scalability Strategy
                        </span>
                        <p className="text-xs text-[var(--color-text-secondary)]">{activeProject.scalability}</p>
                      </div>
                    )}

                    {activeProject.reliability && (
                      <div className="p-3.5 rounded-lg bg-[var(--color-surface-2)] border border-[var(--color-border)]">
                        <span className="text-[11px] font-bold text-[var(--color-text-tertiary)] uppercase tracking-wider block mb-1">
                          Fault Tolerance & Reliability
                        </span>
                        <p className="text-xs text-[var(--color-text-secondary)]">{activeProject.reliability}</p>
                      </div>
                    )}

                    {activeProject.testing && (
                      <div className="p-3.5 rounded-lg bg-[var(--color-surface-2)] border border-[var(--color-border)]">
                        <span className="text-[11px] font-bold text-[var(--color-text-tertiary)] uppercase tracking-wider block mb-1">
                          Automated Testing & Parity
                        </span>
                        <p className="text-xs text-[var(--color-text-secondary)]">{activeProject.testing}</p>
                      </div>
                    )}

                    {activeProject.observability && (
                      <div className="p-3.5 rounded-lg bg-[var(--color-surface-2)] border border-[var(--color-border)]">
                        <span className="text-[11px] font-bold text-[var(--color-text-tertiary)] uppercase tracking-wider block mb-1">
                          Observability & Tracing
                        </span>
                        <p className="text-xs text-[var(--color-text-secondary)]">{activeProject.observability}</p>
                      </div>
                    )}
                  </div>

                  {/* 5. Lessons Learned */}
                  {activeProject.lessonsLearned && activeProject.lessonsLearned.length > 0 && (
                    <div className="space-y-2">
                      <span className="text-xs font-bold text-[var(--color-accent)] uppercase tracking-wider block">
                        Lessons Learned & Post-Mortem Insights
                      </span>
                      <div className="space-y-1.5">
                        {activeProject.lessonsLearned.map((l, idx) => (
                          <div key={idx} className="p-3 rounded-lg bg-[var(--color-surface-2)] border border-[var(--color-border)] text-xs text-[var(--color-text-secondary)] flex items-start gap-2">
                            <Sparkles size={13} className="text-[var(--color-accent)] shrink-0 mt-0.5" />
                            <span>{l}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Technology Tags */}
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-[var(--color-text-tertiary)] uppercase tracking-wider block">
                      Technologies Used
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {activeProject.technologies.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-md text-xs bg-[var(--color-surface-2)] border border-[var(--color-border)] text-[var(--color-text-secondary)]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-[var(--color-border)] bg-[var(--color-surface-2)] flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span className="text-xs text-[var(--color-text-tertiary)] font-mono">
                    ID: {activeProject.id}
                  </span>

                  <div className="flex flex-wrap items-center gap-2">
                    {activeProject.caseStudyUrl && (
                      <Link
                        to={activeProject.caseStudyUrl}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white text-xs font-semibold transition-colors shadow-sm"
                      >
                        <span>Open Interactive Case Study</span>
                        <ArrowRight size={14} />
                      </Link>
                    )}

                    {activeProject.repoUrl && (
                      <a
                        href={activeProject.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--color-surface-3)] hover:bg-[var(--color-surface-1)] border border-[var(--color-border)] text-xs font-semibold text-[var(--color-text-primary)] transition-colors"
                      >
                        <Github size={14} /> View Repository <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
