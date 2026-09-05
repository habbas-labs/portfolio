import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Cpu, Database, CheckCircle2, Copy, Check } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { ScrollReveal } from '../ui/ScrollReveal';
import { javaTopics } from '../../data/content';
import { useReducedMotion } from '../../hooks/useAnimations';

export function JavaDeepDive() {
  const [activeTopicId, setActiveTopicId] = useState(javaTopics[0].id);
  const [copied, setCopied] = useState(false);
  const reduced = useReducedMotion();

  const activeTopic = javaTopics.find(t => t.id === activeTopicId) || javaTopics[0];

  const handleCopyCode = () => {
    if (activeTopic.codeSnippet) {
      navigator.clipboard.writeText(activeTopic.codeSnippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="java-deep-dive" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="Core Competency"
          title="Java Engineering Deep Dive"
          description="13+ years of mastery beyond surface syntax — concurrency, JVM memory architecture, internals, and clean domain design."
        />

        {/* Topic Selector Tabs */}
        <div className="mt-12 flex flex-wrap gap-2 border-b border-[var(--color-border)] pb-4">
          {javaTopics.map((topic) => {
            const isSelected = activeTopicId === topic.id;
            return (
              <button
                key={topic.id}
                onClick={() => setActiveTopicId(topic.id)}
                className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                  isSelected
                    ? 'bg-[var(--color-accent)] text-white shadow-lg shadow-blue-500/20'
                    : 'bg-[var(--color-surface-1)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-2)] border border-[var(--color-border)]'
                }`}
              >
                <Code2 size={16} />
                <span>{topic.title.split('&')[0].trim()}</span>
              </button>
            );
          })}
        </div>

        {/* Active Topic Presentation Panel */}
        <ScrollReveal key={activeTopic.id}>
          <div className="mt-8 bg-[var(--color-surface-1)] border border-[var(--color-border)] rounded-2xl overflow-hidden shadow-xl">
            {/* Header info */}
            <div className="p-4 sm:p-8 border-b border-[var(--color-border)] bg-gradient-to-r from-[var(--color-surface-1)] to-[var(--color-surface-2)]">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono font-semibold tracking-wider text-[var(--color-accent)] uppercase">
                    {activeTopic.category}
                  </span>
                  <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mt-1">
                    {activeTopic.title}
                  </h3>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-surface-3)] text-xs text-[var(--color-text-tertiary)] border border-[var(--color-border)]">
                  <Cpu size={14} className="text-[var(--color-accent)]" />
                  <span>Production Tested</span>
                </div>
              </div>

              <p className="mt-4 text-[var(--color-text-secondary)] text-base leading-relaxed max-w-3xl">
                {activeTopic.description}
              </p>
            </div>

            {/* Deep Dive & Code Body */}
            <div className="p-4 sm:p-8 grid lg:grid-cols-12 gap-6 sm:gap-8">
              {/* Architecture & Engineering Analysis */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)] mb-3">
                    Architectural & Runtime Analysis
                  </h4>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed bg-[var(--color-surface-2)]/60 p-5 rounded-xl border border-[var(--color-border)]">
                    {activeTopic.deepDive}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-blue-400 mt-0.5 shrink-0" />
                    <div>
                      <h5 className="text-xs font-bold uppercase tracking-wider text-blue-300">
                        Architectural Takeaway
                      </h5>
                      <p className="text-sm text-[var(--color-text-primary)] mt-1">
                        {activeTopic.keyTakeaway}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Code Snippet */}
              <div className="lg:col-span-6 flex flex-col">
                <div className="flex items-center justify-between px-4 py-2.5 bg-[var(--color-surface-3)] rounded-t-xl border-t border-x border-[var(--color-border)]">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                    <span className="ml-2 text-xs font-mono text-[var(--color-text-muted)]">
                      ProductionImplementation.java
                    </span>
                  </div>

                  {activeTopic.codeSnippet && (
                    <button
                      onClick={handleCopyCode}
                      className="flex items-center gap-1.5 text-xs text-[var(--color-text-tertiary)] hover:text-white transition-colors"
                      title="Copy snippet"
                    >
                      {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                      <span>{copied ? 'Copied' : 'Copy'}</span>
                    </button>
                  )}
                </div>

                <div className="flex-1 bg-[var(--color-surface-0)] border border-[var(--color-border)] rounded-b-xl p-4 font-mono text-xs overflow-x-auto leading-relaxed text-zinc-300">
                  <pre>
                    <code>{activeTopic.codeSnippet}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
