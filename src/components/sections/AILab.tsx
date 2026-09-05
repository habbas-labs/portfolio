import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Bot, Sparkles, AlertCircle, ArrowRight, Code, X, Layers, CheckCircle2, Workflow } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { ScrollReveal } from '../ui/ScrollReveal';
import { Badge } from '../ui/Badge';
import { aiLevels, aiConceptNodes, aiExistingSoftwareFlow, aiSolutionCatalog } from '../../data/content';
import { isConsultantEnabled } from '../../config/portfolioConfig';
import { useReducedMotion } from '../../hooks/useAnimations';

const aiJourney = ['LLM', 'Prompting', 'Structured Output', 'RAG', 'Tools', 'Agents', 'Multi-Agent', 'MCP / A2A'];
const aiTechPlatforms = ['Spring AI', 'Ollama', 'OpenAI', 'Gemini', 'Claude'];
const aiTechPatterns = ['RAG', 'Vector DB', 'Embeddings', 'Tool Calling', 'MCP', 'A2A', 'AI Agents', 'Multi-Agent', 'AI Coding Agents'];
const levelColors = ['#3b82f6', '#06b6d4', '#f59e0b', '#f43f5e'];

export function AILab() {
  const [activeLevel, setActiveLevel] = useState(0);
  const [selectedConceptId, setSelectedConceptId] = useState<string | null>(aiConceptNodes[1].id); // default RAG
  const [activePatternTab, setActivePatternTab] = useState(0);
  const reduced = useReducedMotion();
  const level = aiLevels[activeLevel];

  const selectedConcept = aiConceptNodes.find(c => c.id === selectedConceptId);
  const activePattern = aiSolutionCatalog[activePatternTab];
  const showConsultant = isConsultantEnabled();

  return (
    <section id="ai-lab" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="Intelligent Systems & AI Architecture"
          title="AI Engineering Lab"
          description="Extending 13+ years of robust backend engineering into AI-powered enterprise systems — RAG, tool calling, MCP, and multi-agent orchestration."
        />

        {/* AI Journey progression */}
        <ScrollReveal>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
            {aiJourney.map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <span
                  className={`px-3 py-1.5 text-xs font-medium rounded-md border transition-all ${
                    i <= 3
                      ? 'bg-[var(--color-accent-subtle)] text-[var(--color-accent)] border-[var(--color-border-accent)]'
                      : i <= 5
                        ? 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                        : 'bg-rose-500/10 text-rose-400 border-rose-500/20'
                  }`}
                >
                  {step}
                </span>
                {i < aiJourney.length - 1 && (
                  <span className="text-[var(--color-text-muted)]">→</span>
                )}
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* 4-Level Architecture Viewer */}
        <ScrollReveal>
          <div className="mt-16">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)] mb-4">
              Interactive AI Architecture — 4 Levels of Sophistication
            </h3>

            {/* Level selector */}
            <div className="flex flex-wrap gap-2 mb-6">
              {aiLevels.map((l, i) => (
                <button
                  key={i}
                  onClick={() => setActiveLevel(i)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium border transition-all ${
                    activeLevel === i
                      ? 'bg-[var(--color-surface-2)] text-[var(--color-text-primary)] border-[var(--color-border-hover)] shadow-sm'
                      : 'border-transparent text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-1)]'
                  }`}
                >
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: levelColors[i] }}
                  />
                  <span>Level {l.level}: {l.title.split('—')[0].trim()}</span>
                </button>
              ))}
            </div>

            {/* Level detail card */}
            <div className="p-4 sm:p-6 rounded-2xl bg-[var(--color-surface-1)] border border-[var(--color-border)]">
              <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="px-2 py-0.5 text-xs font-mono rounded"
                      style={{
                        backgroundColor: `${levelColors[activeLevel]}15`,
                        color: levelColors[activeLevel],
                      }}
                    >
                      LEVEL {level.level}
                    </span>
                    <span className="text-xs text-[var(--color-text-muted)]">
                      {activeLevel === 0 && 'Basic API call'}
                      {activeLevel === 1 && 'Context injection via vectors'}
                      {activeLevel === 2 && 'Autonomous tool selection'}
                      {activeLevel === 3 && 'Distributed agent network'}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-[var(--color-text-primary)]">
                    {level.title}
                  </h4>
                </div>
                <Badge type="USER-PROVIDED" />
              </div>

              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-6">
                {level.description}
              </p>

              {/* Node diagram */}
              <div className="overflow-x-auto rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-0)]">
                <div className="relative min-w-[380px] sm:min-w-0 h-48 sm:h-52 overflow-hidden">
                {/* SVG Connections */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  {level.connections.map((conn, i) => {
                    const fromNode = level.nodes.find(n => n.id === conn.from);
                    const toNode = level.nodes.find(n => n.id === conn.to);
                    if (!fromNode || !toNode) return null;
                    return (
                      <line
                        key={i}
                        x1={`${fromNode.x}%`}
                        y1={`${fromNode.y}%`}
                        x2={`${toNode.x}%`}
                        y2={`${toNode.y}%`}
                        stroke="var(--color-border-hover)"
                        strokeWidth="2"
                        strokeDasharray="4 4"
                      />
                    );
                  })}
                </svg>

                {/* Nodes */}
                {level.nodes.map(node => (
                  <motion.div
                    key={node.id}
                    className="absolute -translate-x-1/2 -translate-y-1/2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-[11px] sm:text-xs font-medium border shadow-sm whitespace-nowrap"
                    style={{
                      left: `${node.x}%`,
                      top: `${node.y}%`,
                      backgroundColor: 'var(--color-surface-2)',
                      borderColor: 'var(--color-border-hover)',
                      color: 'var(--color-text-primary)',
                    }}
                    animate={reduced ? {} : { scale: [1, 1.03, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    {node.label}
                  </motion.div>
                ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ═══════════════════════════════════════════
            MASTER PROMPT V4 — SECTION 33: AI FOR EXISTING SOFTWARE
            ═══════════════════════════════════════════ */}
        {showConsultant && (
        <>
        <ScrollReveal>
          <div className="mt-20 p-4 sm:p-8 rounded-2xl bg-[var(--color-surface-1)] border border-[var(--color-border)] space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-[var(--color-accent)] uppercase tracking-wider">
                  Master Prompt V4 Section 33
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-text-primary)] mt-1">
                  AI for Existing Software Systems
                </h3>
              </div>
              <p className="text-xs text-[var(--color-text-tertiary)] max-w-md">
                How to integrate AI into working enterprise software without risky full-system rewrites.
              </p>
            </div>

            {/* 6-Step Integration Pipeline */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {aiExistingSoftwareFlow.map((step) => (
                <div
                  key={step.step}
                  className="p-4 rounded-xl bg-[var(--color-surface-2)] border border-[var(--color-border)] space-y-2 relative"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[var(--color-accent)] bg-[var(--color-accent-subtle)] px-2 py-0.5 rounded">
                      Step {step.step}
                    </span>
                    <Sparkles size={14} className="text-[var(--color-accent)]" />
                  </div>
                  <h4 className="font-bold text-sm text-[var(--color-text-primary)]">
                    {step.title}
                  </h4>
                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* ═══════════════════════════════════════════
            MASTER PROMPT V4 — SECTION 34: AI SOLUTION CATALOG PATTERNS
            ═══════════════════════════════════════════ */}
        <ScrollReveal>
          <div className="mt-20 space-y-6">
            <div>
              <span className="text-xs font-bold text-[var(--color-accent)] uppercase tracking-wider">
                Enterprise Architectures
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-text-primary)] mt-1">
                AI Solution Catalog & Patterns
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] mt-1">
                Three proven enterprise architectures ready for production deployment.
              </p>
            </div>

            {/* Pattern Tabs */}
            <div className="flex flex-wrap gap-2 border-b border-[var(--color-border)] pb-4">
              {aiSolutionCatalog.map((pattern, idx) => (
                <button
                  key={pattern.id}
                  onClick={() => setActivePatternTab(idx)}
                  className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                    activePatternTab === idx
                      ? 'bg-[var(--color-accent)] text-white shadow-sm'
                      : 'text-[var(--color-text-secondary)] hover:text-white hover:bg-[var(--color-surface-2)]'
                  }`}
                >
                  {pattern.title}
                </button>
              ))}
            </div>

            {/* Active Pattern Card */}
            <div className="p-4 sm:p-8 rounded-2xl bg-[var(--color-surface-1)] border border-[var(--color-border-hover)] space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-mono text-[var(--color-accent)] uppercase tracking-wider">
                    {activePattern.category}
                  </span>
                  <h4 className="text-xl font-bold text-[var(--color-text-primary)] mt-1">
                    {activePattern.title}
                  </h4>
                </div>
                <Badge type={activePattern.status} />
              </div>

              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                {activePattern.summary}
              </p>

              {/* Data / Request Flow */}
              <div className="p-5 rounded-xl bg-[var(--color-surface-2)] border border-[var(--color-border)] space-y-3">
                <span className="text-xs font-bold text-[var(--color-accent)] uppercase tracking-wider flex items-center gap-1.5">
                  <Workflow size={14} /> Architectural Request Flow
                </span>
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  {activePattern.flow.map((node, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="px-3 py-1.5 rounded-lg bg-[var(--color-surface-3)] text-[var(--color-text-primary)] font-mono border border-[var(--color-border)]">
                        {node}
                      </span>
                      {i < activePattern.flow.length - 1 && (
                        <span className="text-[var(--color-accent)] font-bold">→</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Use Case & Tech */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-[var(--color-surface-2)] border border-[var(--color-border)]">
                  <span className="font-bold text-[var(--color-text-primary)] block mb-1">
                    Ideal Enterprise Use Case:
                  </span>
                  <p className="text-[var(--color-text-secondary)]">{activePattern.useCase}</p>
                </div>

                <div className="p-4 rounded-xl bg-[var(--color-surface-2)] border border-[var(--color-border)]">
                  <span className="font-bold text-[var(--color-text-primary)] block mb-1">
                    Technologies Involved:
                  </span>
                  <div className="flex flex-wrap gap-1.5 mt-1.5">
                    {activePattern.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded bg-[var(--color-surface-3)] text-[var(--color-text-secondary)] border border-[var(--color-border)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
        </>
        )}

        {/* ═══════════════════════════════════════════
            Interactive AI Concept Explorer
            ═══════════════════════════════════════════ */}
        <ScrollReveal>
          <div className="mt-20">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                AI Concept Explorer — Click to Deep Dive
              </h3>
              <span className="text-xs text-[var(--color-text-tertiary)]">
                {aiConceptNodes.length} architectural concepts
              </span>
            </div>

            {/* Concept Node Pills */}
            <div className="flex flex-wrap gap-2 mb-6">
              {aiConceptNodes.map(node => (
                <button
                  key={node.id}
                  onClick={() => setSelectedConceptId(node.id)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-medium border transition-all ${
                    selectedConceptId === node.id
                      ? 'bg-[var(--color-accent)] text-white border-[var(--color-accent)] shadow-sm'
                      : 'bg-[var(--color-surface-1)] text-[var(--color-text-secondary)] border-[var(--color-border)] hover:border-[var(--color-border-hover)]'
                  }`}
                >
                  {node.name}
                </button>
              ))}
            </div>

            {/* Active Concept Card */}
            <AnimatePresence mode="wait">
              {selectedConcept && (
                <motion.div
                  key={selectedConcept.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="p-6 rounded-2xl bg-[var(--color-surface-1)] border border-[var(--color-border)]"
                >
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-4 pb-4 border-b border-[var(--color-border)]">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--color-accent)]">
                        Enterprise AI Architecture Concept
                      </span>
                      <h4 className="text-2xl font-bold text-[var(--color-text-primary)] mt-1">
                        {selectedConcept.name}
                      </h4>
                    </div>
                    <span className="text-xs font-mono text-[var(--color-text-tertiary)] bg-[var(--color-surface-2)] px-3 py-1.5 rounded-full border border-[var(--color-border)]">
                      Relationship: {selectedConcept.relationship}
                    </span>
                  </div>

                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-6">
                    {selectedConcept.definition}
                  </p>

                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="p-4 rounded-xl bg-[var(--color-surface-2)] border border-[var(--color-border)]">
                      <h5 className="text-xs font-bold uppercase tracking-wider text-[var(--color-accent)] mb-2">
                        Core Purpose
                      </h5>
                      <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                        {selectedConcept.purpose}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[var(--color-surface-2)] border border-[var(--color-border)]">
                      <h5 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
                        When To Use
                      </h5>
                      <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                        {selectedConcept.whenToUse}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[var(--color-surface-2)] border border-[var(--color-border)]">
                      <h5 className="text-xs font-bold uppercase tracking-wider text-rose-400 mb-2">
                        Limitations & Guardrails
                      </h5>
                      <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                        {selectedConcept.limitations}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[var(--color-surface-0)] border border-[var(--color-border)]">
                    <span className="text-[10px] font-mono text-[var(--color-text-muted)] uppercase block mb-1">
                      Enterprise Implementation Snippet:
                    </span>
                    <code className="text-xs font-mono text-blue-300 block overflow-x-auto">
                      {selectedConcept.example}
                    </code>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </ScrollReveal>

        {/* AI Technologies */}
        <ScrollReveal>
          <div className="mt-16 grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)] mb-4">
                Platforms & Frameworks
              </h4>
              <div className="flex flex-wrap gap-2">
                {aiTechPlatforms.map(tech => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs font-medium rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20"
                  >
                    {tech}
                  </span>
                ))}\n              </div>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)] mb-4">
                Patterns & Protocols
              </h4>
              <div className="flex flex-wrap gap-2">
                {aiTechPatterns.map(tech => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs font-medium rounded-md bg-orange-500/10 text-orange-400 border border-orange-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between flex-wrap gap-4 pt-4 border-t border-[var(--color-border)]">
            <p className="text-xs text-[var(--color-text-muted)] italic">
              Hands-on enterprise exploration — verified against actual prototype codebases.
            </p>
            <Badge type="USER-PROVIDED" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
