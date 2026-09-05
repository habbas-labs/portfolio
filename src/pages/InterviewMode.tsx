import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowRight,
  ChevronDown,
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

  const currentTopicIndex = interviewTopicDetails.findIndex(t => t.id === selectedTopicId);
  const selectedTopic = interviewTopicDetails[currentTopicIndex >= 0 ? currentTopicIndex : 0];

  const getTopicIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code': return <Code2 size={16} />;
      case 'Radio': return <Radio size={16} />;
      case 'GitBranch': return <GitBranch size={16} />;
      case 'Building2': return <Building2 size={16} />;
      case 'Brain': return <Brain size={16} />;
      case 'Bot': return <Bot size={16} />;
      default: return <Layers size={16} />;
    }
  };

  return (
    <div className="min-h-screen bg-[var(--color-surface-0)] text-[var(--color-text-primary)] flex flex-col pt-16 sm:pt-20 transition-colors duration-300 w-full max-w-full overflow-x-hidden">
      {/* Presentation Control Header — relative on mobile so it never collides/clips under fixed Nav, sticky on desktop */}
      <header className="relative md:sticky md:top-16 z-30 bg-[var(--color-surface-1)]/95 backdrop-blur-md border-b border-[var(--color-border)] px-3 sm:px-6 py-2.5 sm:py-3 shadow-sm transition-colors duration-300 w-full max-w-full overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-2.5 sm:gap-4 w-full min-w-0">
          {/* Header Row 1: Back Button & Title */}
          <div className="flex items-center justify-between md:justify-start gap-2 sm:gap-4 w-full md:w-auto min-w-0">
            <Link
              to="/"
              className="text-xs font-semibold text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[var(--color-surface-2)] border border-[var(--color-border)] hover:bg-[var(--color-surface-3)] shrink-0"
            >
              <ArrowLeft size={14} />
              <span>Back</span>
            </Link>

            <div className="h-4 w-px bg-[var(--color-border)] hidden sm:block shrink-0" />

            <div className="flex items-center gap-2 min-w-0 flex-1">
              <div className="p-1.5 rounded-md bg-[var(--color-accent-subtle)] text-[var(--color-accent)] shrink-0">
                <MonitorPlay size={15} />
              </div>
              <div className="min-w-0 flex-1">
                <h1 className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[var(--color-text-primary)] truncate">
                  Interview Control Center
                </h1>
                <span className="text-[10px] text-[var(--color-text-tertiary)] font-mono block truncate hidden sm:block">
                  {profile.name} · {profile.yearsExperience}+ YOE Senior Backend / AI
                </span>
              </div>
            </div>

            <span className="text-[10px] font-mono text-[var(--color-accent)] px-2 py-0.5 rounded bg-[var(--color-accent-subtle)] border border-[var(--color-border-accent)] shrink-0">
              {profile.yearsExperience}+ YOE
            </span>
          </div>

          {/* Header Row 2 / Desktop Right: Depth Mode Segmented Switcher */}
          <div className="w-full md:w-auto min-w-0">
            <div className="grid grid-cols-3 md:flex items-center gap-1 bg-[var(--color-surface-2)] p-1 rounded-xl border border-[var(--color-border)] w-full">
              <button
                onClick={() => setDepth('30s')}
                className={`py-1.5 px-1.5 sm:px-3 rounded-lg text-xs font-semibold text-center whitespace-nowrap transition-all ${
                  depth === '30s'
                    ? 'bg-[var(--color-accent)] text-white shadow-sm'
                    : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-3)]'
                }`}
              >
                <span className="sm:hidden">30s Fast</span>
                <span className="hidden sm:inline">30s Recruiter View</span>
              </button>
              <button
                onClick={() => setDepth('2m')}
                className={`py-1.5 px-1.5 sm:px-3 rounded-lg text-xs font-semibold text-center whitespace-nowrap transition-all ${
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
                className={`py-1.5 px-1.5 sm:px-3 rounded-lg text-xs font-bold text-center whitespace-nowrap transition-all ${
                  depth === '10m'
                    ? 'bg-amber-500 text-white dark:text-zinc-950 shadow-sm'
                    : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-3)]'
                }`}
              >
                <span className="sm:hidden">10m Deep</span>
                <span className="hidden sm:inline">10m Deep Dive</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Control Center Body */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-3 sm:px-6 py-4 sm:py-6 grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 min-w-0 max-w-full overflow-hidden">
        {/* Mobile Topic Navigation (Dropdown + Horizontal Quick-Pills) */}
        <div className="lg:hidden flex flex-col gap-2 w-full max-w-full min-w-0">
          <div className="relative w-full min-w-0">
            <select
              value={selectedTopicId}
              onChange={(e) => setSelectedTopicId(e.target.value)}
              aria-label="Select interview topic"
              className="w-full appearance-none px-3.5 py-2.5 pr-9 rounded-xl bg-[var(--color-surface-1)] border border-[var(--color-border)] text-xs font-bold text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-accent)] transition-colors shadow-sm cursor-pointer truncate"
            >
              {interviewTopicDetails.map((topic, i) => (
                <option key={topic.id} value={topic.id}>
                  Topic {i + 1}: {topic.title}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[var(--color-text-muted)]">
              <ChevronDown size={15} />
            </div>
          </div>

          {/* Fast Tap Pills — contained overflow */}
          <div className="w-full max-w-full overflow-x-auto pb-1 scrollbar-none min-w-0">
            <div className="inline-flex items-center gap-1.5 whitespace-nowrap py-0.5">
              {interviewTopicDetails.map((topic, i) => {
                const isSelected = selectedTopicId === topic.id;
                return (
                  <button
                    key={topic.id}
                    onClick={() => setSelectedTopicId(topic.id)}
                    className={`shrink-0 flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                      isSelected
                        ? 'bg-[var(--color-accent)] text-white border-[var(--color-accent)] shadow-sm'
                        : 'bg-[var(--color-surface-1)] text-[var(--color-text-secondary)] border-[var(--color-border)] hover:bg-[var(--color-surface-2)]'
                    }`}
                  >
                    <span className="font-mono text-[10px] opacity-80">{i + 1}.</span>
                    <span>{topic.title.split(/(&|\()/)[0].trim()}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Desktop Left Topic Sidebar (Control Deck) */}
        <div className="hidden lg:flex lg:col-span-4 flex-col gap-2 min-w-0">
          <span className="text-[10px] uppercase font-mono tracking-wider text-[var(--color-text-muted)] px-2 mb-1">
            Interview Topics ({interviewTopicDetails.length})
          </span>

          <div className="space-y-1.5 overflow-y-auto max-h-[calc(100vh-220px)] pr-1">
            {interviewTopicDetails.map((topic) => {
              const isSelected = selectedTopicId === topic.id;
              return (
                <button
                  key={topic.id}
                  onClick={() => setSelectedTopicId(topic.id)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-start gap-3 group ${
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

        {/* Dynamic Presentation Stage */}
        <div className="lg:col-span-8 flex flex-col min-w-0 w-full max-w-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedTopic.id}-${depth}`}
              initial={reduced ? {} : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? {} : { opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="bg-[var(--color-surface-1)] border border-[var(--color-border)] rounded-2xl p-4 sm:p-6 lg:p-8 flex flex-col flex-1 shadow-lg transition-colors duration-300 w-full max-w-full min-w-0 overflow-hidden"
            >
              {/* Header with Topic and Current Depth Tag */}
              <div className="pb-4 sm:pb-6 border-b border-[var(--color-border)] flex flex-col sm:flex-row sm:items-center justify-between gap-3 w-full min-w-0">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[var(--color-accent)] uppercase tracking-wider mb-1">
                    {getTopicIcon(selectedTopic.icon)}
                    <span className="truncate">{selectedTopic.category.toUpperCase()} DOMAIN</span>
                  </div>
                  <h2 className="text-lg sm:text-2xl font-bold text-[var(--color-text-primary)] tracking-tight leading-snug break-words">
                    {selectedTopic.title}
                  </h2>

                  {/* Topic tags on mobile/tablet */}
                  <div className="flex flex-wrap gap-1.5 mt-2 lg:hidden">
                    {selectedTopic.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--color-surface-2)] text-[var(--color-text-secondary)] border border-[var(--color-border)] break-all"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
                  <span className={`px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-mono font-bold ${
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
              <div className="py-4 sm:py-6 flex-1 space-y-4 sm:space-y-6 min-w-0 w-full">
                {depth === '30s' && (
                  <div className="p-4 sm:p-6 rounded-xl bg-[var(--color-accent-subtle)] border border-[var(--color-border-accent)] text-[var(--color-text-primary)] leading-relaxed text-sm sm:text-base break-words">
                    <p className="font-sans leading-relaxed">{selectedTopic.depth.thirtySecond}</p>
                  </div>
                )}

                {depth === '2m' && (
                  <div className="space-y-3 sm:space-y-4 min-w-0 w-full">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]">
                      Key Architectural Foundations & Flow
                    </h4>
                    <div className="grid gap-2.5 sm:gap-3 min-w-0 w-full">
                      {selectedTopic.depth.twoMinute.map((point, idx) => (
                        <div
                          key={idx}
                          className="p-3.5 sm:p-4 rounded-xl bg-[var(--color-surface-2)] border border-[var(--color-border)] flex items-start gap-2.5 sm:gap-3 min-w-0"
                        >
                          <span className="w-5 h-5 rounded-full bg-[var(--color-accent-subtle)] text-[var(--color-accent)] text-xs font-mono flex items-center justify-center shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed break-words flex-1 min-w-0">
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {depth === '10m' && (
                  <div className="space-y-4 sm:space-y-6 min-w-0 w-full">
                    {/* Deep Architecture */}
                    <div className="min-w-0 w-full">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)] mb-2 flex items-center gap-2">
                        <Layers size={14} className="text-amber-500 shrink-0" />
                        <span>In-Depth System Topology & Execution</span>
                      </h4>
                      <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed bg-[var(--color-surface-2)] p-3.5 sm:p-4 rounded-xl border border-[var(--color-border)] break-words">
                        {selectedTopic.depth.tenMinute.architecture}
                      </p>
                    </div>

                    {/* Trade-offs Matrix */}
                    <div className="min-w-0 w-full">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)] mb-2 flex items-center gap-2">
                        <AlertOctagon size={14} className="text-amber-500 shrink-0" />
                        <span>Hard Trade-Offs & Decisions</span>
                      </h4>
                      <div className="space-y-2 min-w-0 w-full">
                        {selectedTopic.depth.tenMinute.tradeoffs.map((t, idx) => (
                          <div
                            key={idx}
                            className="p-3 sm:p-3.5 rounded-lg bg-amber-500/10 border-l-4 border-amber-500 text-xs text-[var(--color-text-secondary)] leading-relaxed break-words"
                          >
                            {t}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Scaling & Failure Handling */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 min-w-0 w-full">
                      <div className="p-3.5 sm:p-4 rounded-xl bg-[var(--color-surface-2)] border border-[var(--color-border)] min-w-0">
                        <span className="text-[10px] font-mono uppercase text-emerald-600 dark:text-emerald-400 block mb-1 font-bold">
                          Scaling Strategy
                        </span>
                        <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed break-words">
                          {selectedTopic.depth.tenMinute.scaling}
                        </p>
                      </div>

                      <div className="p-3.5 sm:p-4 rounded-xl bg-[var(--color-surface-2)] border border-[var(--color-border)] min-w-0">
                        <span className="text-[10px] font-mono uppercase text-rose-600 dark:text-rose-400 block mb-1 font-bold">
                          Failure Handling & Resiliency
                        </span>
                        <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed break-words">
                          {selectedTopic.depth.tenMinute.failureHandling}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Sample Interviewer Questions Toggle */}
              <div className="pt-4 border-t border-[var(--color-border)] min-w-0 w-full">
                <button
                  onClick={() => setShowQuestions(!showQuestions)}
                  className="flex items-center justify-between w-full p-3 rounded-xl bg-[var(--color-surface-2)] hover:bg-[var(--color-surface-3)] border border-[var(--color-border)] transition-colors text-xs font-semibold text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] gap-2"
                >
                  <span className="flex items-center gap-2 text-left min-w-0">
                    <HelpCircle size={15} className="text-[var(--color-accent)] shrink-0" />
                    <span className="truncate sm:whitespace-normal">Likely Interviewer Probes & Questions</span>
                  </span>
                  <span className="font-mono text-[10px] text-[var(--color-text-tertiary)] shrink-0 px-2 py-0.5 rounded bg-[var(--color-surface-1)] border border-[var(--color-border)]">
                    {showQuestions ? 'Hide' : `Show (${selectedTopic.depth.sampleQuestions.length})`}
                  </span>
                </button>

                {showQuestions && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-3 space-y-2 min-w-0 w-full"
                  >
                    {selectedTopic.depth.sampleQuestions.map((q, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-lg bg-[var(--color-surface-2)] border border-[var(--color-border)] text-xs text-[var(--color-text-secondary)] flex items-start gap-2 min-w-0"
                      >
                        <span className="text-[var(--color-accent)] font-mono font-bold shrink-0">Q{idx + 1}:</span>
                        <span className="leading-relaxed break-words flex-1 min-w-0">{q}</span>
                      </div>
                    ))}
                  </motion.div>
                )}
              </div>

              {/* Prev / Next Topic Navigation Footer */}
              <div className="mt-6 pt-4 border-t border-[var(--color-border)] flex items-center justify-between gap-2 min-w-0 w-full">
                <button
                  disabled={currentTopicIndex === 0}
                  onClick={() => setSelectedTopicId(interviewTopicDetails[currentTopicIndex - 1].id)}
                  className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border transition-all ${
                    currentTopicIndex === 0
                      ? 'opacity-40 cursor-not-allowed border-[var(--color-border)] text-[var(--color-text-muted)]'
                      : 'border-[var(--color-border)] bg-[var(--color-surface-2)] text-[var(--color-text-primary)] hover:bg-[var(--color-surface-3)] active:scale-95'
                  }`}
                >
                  <ArrowLeft size={13} />
                  <span>Prev</span>
                </button>

                <span className="text-[11px] font-mono text-[var(--color-text-muted)]">
                  {currentTopicIndex + 1} / {interviewTopicDetails.length}
                </span>

                <button
                  disabled={currentTopicIndex === interviewTopicDetails.length - 1}
                  onClick={() => setSelectedTopicId(interviewTopicDetails[currentTopicIndex + 1].id)}
                  className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border transition-all ${
                    currentTopicIndex === interviewTopicDetails.length - 1
                      ? 'opacity-40 cursor-not-allowed border-[var(--color-border)] text-[var(--color-text-muted)]'
                      : 'border-[var(--color-border)] bg-[var(--color-surface-2)] text-[var(--color-text-primary)] hover:bg-[var(--color-surface-3)] active:scale-95'
                  }`}
                >
                  <span>Next</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
