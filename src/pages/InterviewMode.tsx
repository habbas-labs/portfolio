import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  MonitorPlay, 
  Layers, 
  AlertOctagon, 
  Code2, 
  HelpCircle, 
  Radio, 
  GitBranch, 
  Building2, 
  Brain, 
  Bot 
} from 'lucide-react';
import { interviewTopicDetails, profile } from '../data/content';
import { useReducedMotion } from '../hooks/useAnimations';

type DepthLevel = '30s' | '2m' | '10m';

export function InterviewMode() {
  const [selectedTopicId, setSelectedTopicId] = useState(interviewTopicDetails[0].id);
  const [depth, setDepth] = useState<DepthLevel>('2m');
  const [showQuestions, setShowQuestions] = useState(false);
  const reduced = useReducedMotion();

  const selectedTopic = interviewTopicDetails.find(t => t.id === selectedTopicId) || interviewTopicDetails[0];

  const getTopicIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code': return <Code2 size={18} />;
      case 'Radio': return <Radio size={18} />;
      case 'GitBranch': return <GitBranch size={18} />;
      case 'Building2': return <Building2 size={18} />;
      case 'Brain': return <Brain size={18} />;
      case 'Bot': return <Bot size={18} />;
      default: return <Layers size={18} />;
    }
  };

  return (
    <div className="min-h-screen bg-[var(--color-surface-0)] text-[var(--color-text-primary)] flex flex-col pt-16 transition-colors duration-300">
      {/* Presentation Control Header — docked cleanly under global Nav */}
      <header className="sticky top-16 z-30 bg-[var(--color-surface-1)]/95 backdrop-blur-md border-b border-[var(--color-border)] px-4 sm:px-6 py-3 shadow-sm transition-colors duration-300">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4">
          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              to="/"
              className="text-xs font-semibold text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--color-surface-2)] border border-[var(--color-border)] hover:bg-[var(--color-surface-3)] shrink-0"
            >
              <ArrowLeft size={14} />
              Back to Site
            </Link>

            <div className="h-4 w-px bg-[var(--color-border)] hidden sm:block" />

            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded-md bg-[var(--color-accent-subtle)] text-[var(--color-accent)] shrink-0">
                <MonitorPlay size={16} />
              </div>
              <div className="min-w-0">
                <h1 className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[var(--color-text-primary)] truncate">
                  Interview Control Center
                </h1>
                <span className="text-[10px] text-[var(--color-text-tertiary)] font-mono block truncate">
                  {profile.name} · {profile.yearsExperience}+ YOE Senior Backend / AI
                </span>
              </div>
            </div>
          </div>

          {/* Depth Mode Switcher */}
          <div className="flex items-center gap-1 bg-[var(--color-surface-2)] p-1 rounded-xl border border-[var(--color-border)] overflow-x-auto max-w-full">
            <span className="text-[10px] uppercase font-mono text-[var(--color-text-muted)] px-2 hidden lg:inline whitespace-nowrap">
              Technical Depth:
            </span>
            <button
              onClick={() => setDepth('30s')}
              className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                depth === '30s'
                  ? 'bg-[var(--color-accent)] text-white shadow-sm'
                  : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-3)]'
              }`}
            >
              <span className="sm:hidden">30s</span>
              <span className="hidden sm:inline">30s Recruiter View</span>
            </button>
            <button
              onClick={() => setDepth('2m')}
              className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                depth === '2m'
                  ? 'bg-[var(--color-accent)] text-white shadow-sm'
                  : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-3)]'
              }`}
            >
              <span className="sm:hidden">2m Tech</span>
              <span className="hidden sm:inline">2m Tech Overview</span>
            </button>
            <button
              onClick={() => setDepth('10m')}
              className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                depth === '10m'
                  ? 'bg-amber-500 text-white dark:text-zinc-950 shadow-sm'
                  : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-3)]'
              }`}
            >
              <span className="sm:hidden">10m Deep</span>
              <span className="hidden sm:inline">10m Deep Dive (Trade-offs)</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Control Center Body */}
      <div className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 grid lg:grid-cols-12 gap-6">
        {/* Left Topic Sidebar (Control Deck) */}
        <div className="lg:col-span-4 flex flex-col gap-2">
          <span className="text-[10px] uppercase font-mono tracking-wider text-[var(--color-text-muted)] px-2 mb-1">
            Interview Topics ({interviewTopicDetails.length})
          </span>

          <div className="flex lg:flex-col gap-1.5 overflow-x-auto lg:overflow-y-auto max-h-none lg:max-h-[calc(100vh-200px)] pb-2 lg:pb-0 pr-1">
            {interviewTopicDetails.map((topic) => {
              const isSelected = selectedTopicId === topic.id;
              return (
                <button
                  key={topic.id}
                  onClick={() => setSelectedTopicId(topic.id)}
                  className={`shrink-0 lg:shrink w-auto lg:w-full text-left p-2.5 sm:p-3.5 rounded-xl border transition-all flex items-center lg:items-start gap-2 sm:gap-3 group ${

                    isSelected
                      ? 'bg-[var(--color-surface-2)] border-[var(--color-accent)] shadow-md'
                      : 'bg-[var(--color-surface-1)] border-[var(--color-border)] hover:border-[var(--color-border-hover)] hover:bg-[var(--color-surface-2)]/60'
                  }`}
                >
                  <div className={`p-2 rounded-lg mt-0.5 transition-colors shrink-0 ${
                    isSelected
                      ? 'bg-[var(--color-accent-subtle)] text-[var(--color-accent)]'
                      : 'bg-[var(--color-surface-2)] text-[var(--color-text-tertiary)] group-hover:text-[var(--color-text-primary)]'
                  }`}>
                    {getTopicIcon(topic.icon)}
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className={`text-xs font-bold leading-snug transition-colors ${
                      isSelected ? 'text-[var(--color-text-primary)]' : 'text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)]'
                    }`}>
                      {topic.title}
                    </p>
                    <div className="flex flex-wrap gap-1 mt-1.5">
                      {topic.tags.slice(0, 3).map(tag => (
                        <span 
                          key={tag} 
                          className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-[var(--color-surface-2)] text-[var(--color-text-tertiary)] border border-[var(--color-border)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Dynamic Presentation Stage */}
        <div className="lg:col-span-8 flex flex-col">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedTopic.id}-${depth}`}
              initial={reduced ? {} : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? {} : { opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="bg-[var(--color-surface-1)] border border-[var(--color-border)] rounded-2xl p-6 sm:p-8 flex flex-col flex-1 shadow-lg transition-colors duration-300"
            >
              {/* Header with Topic and Current Depth Tag */}
              <div className="pb-6 border-b border-[var(--color-border)] flex flex-wrap items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[var(--color-accent)] uppercase tracking-wider mb-1">
                    {getTopicIcon(selectedTopic.icon)}
                    <span>{selectedTopic.category.toUpperCase()} DOMAIN</span>
                  </div>
                  <h2 className="text-2xl font-bold text-[var(--color-text-primary)] tracking-tight">
                    {selectedTopic.title}
                  </h2>
                </div>

                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold ${
                    depth === '30s'
                      ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20'
                      : depth === '2m'
                        ? 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20'
                        : 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20'
                  }`}>
                    {depth === '30s' && '30s Elevator Pitch'}
                    {depth === '2m' && '2m Architecture Overview'}
                    {depth === '10m' && '10m Architecture & Trade-Offs'}
                  </span>
                </div>
              </div>

              {/* Dynamic Content Presentation */}
              <div className="py-6 flex-1 space-y-6">
                {depth === '30s' && (
                  <div className="p-6 rounded-xl bg-[var(--color-accent-subtle)] border border-[var(--color-border-accent)] text-[var(--color-text-primary)] leading-relaxed text-base">
                    <p className="font-sans leading-relaxed">{selectedTopic.depth.thirtySecond}</p>
                  </div>
                )}

                {depth === '2m' && (
                  <div className="space-y-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]">
                      Key Architectural Foundations & Flow
                    </h4>
                    <div className="grid gap-3">
                      {selectedTopic.depth.twoMinute.map((point, idx) => (
                        <div
                          key={idx}
                          className="p-4 rounded-xl bg-[var(--color-surface-2)] border border-[var(--color-border)] flex items-start gap-3"
                        >
                          <span className="w-5 h-5 rounded-full bg-[var(--color-accent-subtle)] text-[var(--color-accent)] text-xs font-mono flex items-center justify-center shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {depth === '10m' && (
                  <div className="space-y-6">
                    {/* Deep Architecture */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)] mb-2 flex items-center gap-2">
                        <Layers size={14} className="text-amber-500" />
                        In-Depth System Topology & Execution
                      </h4>
                      <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed bg-[var(--color-surface-2)] p-4 rounded-xl border border-[var(--color-border)]">
                        {selectedTopic.depth.tenMinute.architecture}
                      </p>
                    </div>

                    {/* Trade-offs Matrix */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)] mb-2 flex items-center gap-2">
                        <AlertOctagon size={14} className="text-amber-500" />
                        Hard Trade-Offs & Decisions
                      </h4>
                      <div className="space-y-2">
                        {selectedTopic.depth.tenMinute.tradeoffs.map((t, idx) => (
                          <div
                            key={idx}
                            className="p-3.5 rounded-lg bg-amber-500/10 border-l-4 border-amber-500 text-xs text-[var(--color-text-secondary)] leading-relaxed"
                          >
                            {t}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Scaling & Failure Handling */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-[var(--color-surface-2)] border border-[var(--color-border)]">
                        <span className="text-[10px] font-mono uppercase text-emerald-600 dark:text-emerald-400 block mb-1 font-bold">
                          Scaling Strategy
                        </span>
                        <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                          {selectedTopic.depth.tenMinute.scaling}
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-[var(--color-surface-2)] border border-[var(--color-border)]">
                        <span className="text-[10px] font-mono uppercase text-rose-600 dark:text-rose-400 block mb-1 font-bold">
                          Failure Handling & Resiliency
                        </span>
                        <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                          {selectedTopic.depth.tenMinute.failureHandling}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Sample Interviewer Questions Toggle */}
              <div className="pt-4 border-t border-[var(--color-border)]">
                <button
                  onClick={() => setShowQuestions(!showQuestions)}
                  className="flex items-center justify-between w-full p-3 rounded-xl bg-[var(--color-surface-2)] hover:bg-[var(--color-surface-3)] border border-[var(--color-border)] transition-colors text-xs font-semibold text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                >
                  <span className="flex items-center gap-2">
                    <HelpCircle size={15} className="text-[var(--color-accent)]" />
                    Likely Interviewer Probes & Discussion Prompts
                  </span>
                  <span className="font-mono text-[10px] text-[var(--color-text-tertiary)]">
                    {showQuestions ? 'Hide' : `Show (${selectedTopic.depth.sampleQuestions.length})`}
                  </span>
                </button>

                {showQuestions && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-3 space-y-2"
                  >
                    {selectedTopic.depth.sampleQuestions.map((q, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-lg bg-[var(--color-surface-2)] border border-[var(--color-border)] text-xs text-[var(--color-text-secondary)] flex items-start gap-2"
                      >
                        <span className="text-[var(--color-accent)] font-mono font-bold shrink-0">Q{idx + 1}:</span>
                        <span>{q}</span>
                      </div>
                    ))}
                  </motion.div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
