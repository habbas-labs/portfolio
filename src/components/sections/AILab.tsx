import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Bot, Sparkles, AlertCircle, ArrowRight, Code, X } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { ScrollReveal } from '../ui/ScrollReveal';
import { Badge } from '../ui/Badge';
import { aiLevels, aiConceptNodes } from '../../data/content';
import { useReducedMotion } from '../../hooks/useAnimations';

const aiJourney = ['LLM', 'Prompting', 'Structured Output', 'RAG', 'Tools', 'Agents', 'Multi-Agent', 'MCP / A2A'];
const aiTechPlatforms = ['Spring AI', 'Ollama', 'OpenAI', 'Gemini', 'Claude'];
const aiTechPatterns = ['RAG', 'Vector DB', 'Embeddings', 'Tool Calling', 'MCP', 'A2A', 'AI Agents', 'Multi-Agent', 'AI Coding Agents'];
const levelColors = ['#3b82f6', '#06b6d4', '#f59e0b', '#f43f5e'];

export function AILab() {
  const [activeLevel, setActiveLevel] = useState(0);
  const [selectedConceptId, setSelectedConceptId] = useState<string | null>(aiConceptNodes[1].id); // default RAG
  const reduced = useReducedMotion();
  const level = aiLevels[activeLevel];

  const selectedConcept = aiConceptNodes.find(c => c.id === selectedConceptId);

  return (
    <section id="ai-lab" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Intelligent Systems"
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
                      ? 'text-white border-transparent'
                      : 'bg-[var(--color-surface-1)] text-[var(--color-text-secondary)] border-[var(--color-border)] hover:border-[var(--color-border-hover)]'
                  }`}
                  style={activeLevel === i ? { backgroundColor: levelColors[i] } : {}}
                >
                  <span className="text-xs font-mono">L{l.level}</span>
                  <span className="hidden sm:inline">{l.title}</span>
                </button>
              ))}\
            </div>

            {/* Graph view */}
            <div className="bg-[var(--color-surface-1)] border border-[var(--color-border)] rounded-2xl p-6 min-h-[300px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeLevel}
                  initial={reduced ? {} : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduced ? {} : { opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg viewBox="0 0 100 100" className="w-full" style={{ maxHeight: '280px' }}>
                    {/* Connection lines */}
                    {level.connections.map((conn, i) => {
                      const from = level.nodes.find(n => n.id === conn.from);
                      const to = level.nodes.find(n => n.id === conn.to);
                      if (!from || !to) return null;
                      return (
                        <line
                          key={i}
                          x1={from.x} y1={from.y}
                          x2={to.x} y2={to.y}
                          stroke={levelColors[activeLevel]}
                          strokeWidth={0.4}
                          strokeDasharray="2 1"
                          opacity={0.5}
                        >
                          {!reduced && (
                            <animate attributeName="stroke-dashoffset" from="0" to="-6" dur="2s" repeatCount="indefinite" />
                          )}
                        </line>
                      );
                    })}

                    {/* Nodes */}
                    {level.nodes.map(node => (
                      <g key={node.id}>
                        <rect
                          x={node.x - 10}
                          y={node.y - 4}
                          width={20}
                          height={8}
                          rx={2}
                          fill="var(--color-surface-2)"
                          stroke={levelColors[activeLevel]}
                          strokeWidth={0.4}
                        />
                        <text
                          x={node.x}
                          y={node.y + 1.2}
                          textAnchor="middle"
                          fill="var(--color-text-secondary)"
                          fontSize={2.2}
                          fontFamily="var(--font-sans)"
                          fontWeight={500}
                        >
                          {node.label}
                        </text>
                      </g>
                    ))}
                  </svg>

                  <div className="mt-4 text-center">
                    <h4 className="text-base font-semibold text-[var(--color-text-primary)]">{level.title}</h4>
                    <p className="mt-1 text-sm text-[var(--color-text-secondary)] max-w-lg mx-auto">{level.description}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </ScrollReveal>

        {/* Interactive AI Knowledge Map (Master Prompt Section 29) */}
        <ScrollReveal>
          <div className="mt-20">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-[var(--color-text-primary)] flex items-center gap-2">
                  <Brain className="text-[var(--color-accent)]" size={20} />
                  Interactive AI Knowledge Map
                </h3>
                <p className="text-xs text-[var(--color-text-muted)] mt-1">
                  Click any concept below to inspect definition, architecture, enterprise applicability, and limitations.
                </p>
              </div>
            </div>

            {/* Concept Node Cloud */}
            <div className="flex flex-wrap gap-2.5 p-6 rounded-2xl bg-[var(--color-surface-1)] border border-[var(--color-border)]">
              {aiConceptNodes.map((concept) => {
                const isSelected = selectedConceptId === concept.id;
                return (
                  <button
                    key={concept.id}
                    onClick={() => setSelectedConceptId(concept.id)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-2 ${
                      isSelected
                        ? 'bg-[var(--color-accent)] text-white shadow-lg shadow-blue-500/20 ring-2 ring-blue-400/30'
                        : 'bg-[var(--color-surface-2)] text-[var(--color-text-secondary)] hover:text-white border border-[var(--color-border)] hover:border-[var(--color-border-hover)]'
                    }`}
                  >
                    <span>{concept.name}</span>
                    <ArrowRight size={12} className={isSelected ? 'text-white' : 'text-zinc-600'} />
                  </button>
                );
              })}
            </div>

            {/* Selected Concept Deep Dive Modal/Drawer */}
            <AnimatePresence mode="wait">
              {selectedConcept && (
                <motion.div
                  key={selectedConcept.id}
                  initial={reduced ? {} : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduced ? {} : { opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="mt-6 p-6 sm:p-8 rounded-2xl bg-[var(--color-surface-1)] border border-[var(--color-border)] shadow-xl"
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
                ))}
              </div>
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
