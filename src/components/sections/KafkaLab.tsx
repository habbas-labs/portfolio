import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Radio, RefreshCw, AlertOctagon, CheckCircle2, ShieldCheck, Copy, Check } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { ScrollReveal } from '../ui/ScrollReveal';
import { kafkaLabTopics } from '../../data/content';
import { useReducedMotion } from '../../hooks/useAnimations';

export function KafkaLab() {
  const [activeTopicId, setActiveTopicId] = useState(kafkaLabTopics[0].id);
  const [copied, setCopied] = useState(false);
  const reduced = useReducedMotion();

  const activeTopic = kafkaLabTopics.find(t => t.id === activeTopicId) || kafkaLabTopics[0];

  const handleCopyCode = () => {
    if (activeTopic.codeSnippet) {
      navigator.clipboard.writeText(activeTopic.codeSnippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="kafka-lab" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="Distributed Streaming"
          title="Kafka Architecture Lab"
          description="High-throughput event streaming — exploring partition ordering, consumer group rebalances, non-blocking DLT retries, and idempotent processing."
        />

        {/* Visual Architecture Schematic */}
        <ScrollReveal>
          <div className="mt-12 bg-[var(--color-surface-1)] border border-[var(--color-border)] rounded-2xl p-4 sm:p-8 shadow-xl">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)] mb-6">
              Live Kafka Topology Simulation
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
              {/* Producer */}
              <div className="p-4 rounded-xl bg-[var(--color-surface-2)] border border-[var(--color-border)] text-center">
                <span className="text-[10px] font-mono text-[var(--color-accent)] uppercase">Event Producer</span>
                <p className="text-sm font-bold text-[var(--color-text-primary)] mt-1">Claim Intake Service</p>
                <div className="mt-3 text-[11px] font-mono text-[var(--color-text-muted)] bg-[var(--color-surface-3)] py-1 px-2 rounded">
                  Key: claim.memberId
                </div>
              </div>

              {/* Kafka Topic & Partitions */}
              <div className="p-4 rounded-xl bg-[var(--color-surface-3)] border border-blue-500/30 shadow-inner md:col-span-2">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-blue-400 font-mono">Topic: claims.submitted</span>
                  <span className="text-[10px] font-mono text-zinc-400">3 Partitions (Murmur2 Hash)</span>
                </div>

                <div className="space-y-2">
                  {['Partition 0 [Offset: 14,920]', 'Partition 1 [Offset: 14,882]', 'Partition 2 [Offset: 14,905]'].map((p, i) => (
                    <div
                      key={p}
                      className="p-2 rounded bg-[var(--color-surface-1)] border border-[var(--color-border)] flex items-center justify-between text-xs font-mono"
                    >
                      <span className="text-[var(--color-text-secondary)]">{p}</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Consumer Group */}
              <div className="p-4 rounded-xl bg-[var(--color-surface-2)] border border-[var(--color-border)] text-center">
                <span className="text-[10px] font-mono text-amber-400 uppercase">Consumer Group</span>
                <p className="text-sm font-bold text-[var(--color-text-primary)] mt-1">adjudication-group</p>
                <div className="mt-3 text-[11px] font-mono text-zinc-400 bg-[var(--color-surface-3)] py-1 px-2 rounded">
                  3 Consumers (1:1 Partition)
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Kafka Topics Selector */}
        <div className="mt-12 flex flex-wrap gap-2 border-b border-[var(--color-border)] pb-4">
          {kafkaLabTopics.map((topic) => {
            const isSelected = activeTopicId === topic.id;
            return (
              <button
                key={topic.id}
                onClick={() => setActiveTopicId(topic.id)}
                className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                  isSelected
                    ? 'bg-amber-500 text-black font-semibold shadow-lg shadow-amber-500/20'
                    : 'bg-[var(--color-surface-1)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-2)] border border-[var(--color-border)]'
                }`}
              >
                <Radio size={16} />
                <span>{topic.title.split('&')[0].trim()}</span>
              </button>
            );
          })}
        </div>

        {/* Detailed Topic Explorer Panel */}
        <ScrollReveal key={activeTopic.id}>
          <div className="mt-8 bg-[var(--color-surface-1)] border border-[var(--color-border)] rounded-2xl overflow-hidden shadow-xl">
            <div className="p-4 sm:p-8 border-b border-[var(--color-border)] bg-gradient-to-r from-[var(--color-surface-1)] to-[var(--color-surface-2)]">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <h3 className="text-2xl font-bold text-[var(--color-text-primary)]">
                  {activeTopic.title}
                </h3>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-mono">
                  <ShieldCheck size={14} />
                  <span>Enterprise Resiliency</span>
                </div>
              </div>
              <p className="mt-3 text-[var(--color-text-secondary)] text-base leading-relaxed max-w-3xl">
                {activeTopic.summary}
              </p>
            </div>

            <div className="p-4 sm:p-8 grid lg:grid-cols-12 gap-6 sm:gap-8">
              {/* Deep Dive & Key Trade-off */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)] mb-3">
                    Architectural Mechanics
                  </h4>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed bg-[var(--color-surface-2)]/60 p-5 rounded-xl border border-[var(--color-border)]">
                    {activeTopic.deepDive}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
                  <div className="flex items-start gap-3">
                    <AlertOctagon size={18} className="text-amber-400 mt-0.5 shrink-0" />
                    <div>
                      <h5 className="text-xs font-bold uppercase tracking-wider text-amber-300">
                        Architectural Trade-Off & Risk
                      </h5>
                      <p className="text-sm text-[var(--color-text-primary)] mt-1">
                        {activeTopic.keyTradeoff}
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
                      KafkaConfiguration.java
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
