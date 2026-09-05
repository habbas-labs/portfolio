import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { ScrollReveal } from '../ui/ScrollReveal';
import { Badge } from '../ui/Badge';
import { aiLevels } from '../../data/content';
import { useReducedMotion } from '../../hooks/useAnimations';

const aiJourney = ['LLM', 'Prompting', 'Structured Output', 'RAG', 'Tools', 'Agents', 'Multi-Agent', 'MCP / A2A'];

const aiTechPlatforms = ['Spring AI', 'Ollama', 'OpenAI', 'Gemini', 'Claude'];
const aiTechPatterns = ['RAG', 'Vector DB', 'Embeddings', 'Tool Calling', 'MCP', 'A2A', 'AI Agents', 'Multi-Agent', 'AI Coding Agents'];

const levelColors = ['#3b82f6', '#06b6d4', '#f59e0b', '#f43f5e'];

export function AILab() {
  const [activeLevel, setActiveLevel] = useState(0);
  const reduced = useReducedMotion();
  const level = aiLevels[activeLevel];

  return (
    <section id="ai-lab" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Intelligent Systems"
          title="AI Engineering Lab"
          description="Extending years of backend engineering expertise into AI-powered enterprise systems."
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
              Interactive AI Architecture — 4 Levels
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
              ))}
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

        {/* AI Technologies */}
        <ScrollReveal>
          <div className="mt-16 grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)] mb-4">
                Platforms
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

          <p className="mt-6 text-xs text-[var(--color-text-muted)] italic">
            Hands-on experience — not claimed as production deployment unless verified.
          </p>
          <div className="mt-2">
            <Badge type="PROVISIONAL" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
