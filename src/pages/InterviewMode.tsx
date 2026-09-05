import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  MonitorPlay, 
  Clock, 
  Layers, 
  AlertOctagon, 
  ShieldCheck, 
  Code2, 
  HelpCircle, 
  CheckCircle2, 
  Cpu, 
  Radio, 
  GitBranch, 
  Building2, 
  Brain, 
  Bot, 
  ExternalLink 
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
    <div className="min-h-screen bg-[#070709] text-zinc-100 flex flex-col selection:bg-blue-500/30 selection:text-blue-200">
      {/* Presentation Control Header */}
      <header className="sticky top-0 z-40 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/80 px-6 py-3.5">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="text-xs font-semibold text-zinc-400 hover:text-white transition-colors flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800"
            >
              <ArrowLeft size={14} />
              Back to Site
            </Link>

            <div className="h-4 w-px bg-zinc-800" />

            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded-md bg-blue-500/20 text-blue-400">
                <MonitorPlay size={16} />
              </div>
              <div>
                <h1 className="text-sm font-bold tracking-wider uppercase text-zinc-100">
                  Interview Control Center
                </h1>
                <span className="text-[10px] text-zinc-400 font-mono">
                  {profile.name} · {profile.yearsExperience}+ YOE Senior Backend / AI
                </span>
              </div>
            </div>
          </div>

          {/* Depth Mode Switcher */}
          <div className="flex items-center gap-2 bg-zinc-900/90 p-1 rounded-xl border border-zinc-800">
            <span className="text-[10px] uppercase font-mono text-zinc-500 px-2 hidden sm:inline">
              Technical Depth:
            </span>
            <button
              onClick={() => setDepth('30s')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                depth === '30s'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              30s Recruiter View
            </button>
            <button
              onClick={() => setDepth('2m')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                depth === '2m'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              2m Tech Overview
            </button>
            <button
              onClick={() => setDepth('10m')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                depth === '10m'
                  ? 'bg-amber-500 text-black font-bold shadow-md'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              10m Deep Dive (Trade-offs)
            </button>
          </div>
        </div>
      </header>

      {/* Main Control Center Body */}
      <div className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 grid lg:grid-cols-12 gap-6">
        {/* Left Topic Sidebar (Control Deck) */}
        <div className="lg:col-span-4 flex flex-col gap-2">
          <span className="text-[10px] uppercase font-mono tracking-wider text-zinc-500 px-2 mb-1">
            Interview Topics ({interviewTopicDetails.length})
          </span>

          <div className="space-y-1.5 overflow-y-auto max-h-[calc(100vh-140px)] pr-1">
            {interviewTopicDetails.map((topic) => {
              const isSelected = selectedTopicId === topic.id;
              return (
                <button
                  key={topic.id}
                  onClick={() => setSelectedTopicId(topic.id)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-start gap-3 group ${
                    isSelected
                      ? 'bg-zinc-800/90 border-blue-500/50 shadow-lg shadow-blue-500/10'
                      : 'bg-zinc-900/50 border-zinc-800/60 hover:bg-zinc-800/40 hover:border-zinc-700'
                  }`}
                >
                  <div className={`p-2 rounded-lg mt-0.5 transition-colors ${
                    isSelected
                      ? 'bg-blue-500/20 text-blue-400'
                      : 'bg-zinc-950 text-zinc-400 group-hover:text-zinc-200'
                  }`}>
                    {getTopicIcon(topic.icon)}
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className={`text-xs font-bold leading-snug transition-colors ${
                      isSelected ? 'text-white' : 'text-zinc-300 group-hover:text-white'
                    }`}>
                      {topic.title}
                    </p>
                    <div className="flex flex-wrap gap-1 mt-1.5">
                      {topic.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-zinc-950 text-zinc-400">
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
              className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 sm:p-8 flex flex-col flex-1 shadow-2xl"
            >
              {/* Header with Topic and Current Depth Tag */}
              <div className="pb-6 border-b border-zinc-800/80 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-semibold text-blue-400 uppercase tracking-wider mb-1">
                    {getTopicIcon(selectedTopic.icon)}
                    <span>{selectedTopic.category.toUpperCase()} DOMAIN</span>
                  </div>
                  <h2 className="text-2xl font-bold text-white tracking-tight">
                    {selectedTopic.title}
                  </h2>
                </div>

                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold ${
                    depth === '30s'
                      ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                      : depth === '2m'
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                        : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
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
                  <div className="p-6 rounded-xl bg-blue-950/20 border border-blue-500/30 text-zinc-200 leading-relaxed text-base">
                    <p className="font-sans">{selectedTopic.depth.thirtySecond}</p>
                  </div>
                )}

                {depth === '2m' && (
                  <div className="space-y-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                      Key Architectural Foundations & Flow
                    </h4>
                    <div className="grid gap-3">
                      {selectedTopic.depth.twoMinute.map((point, idx) => (
                        <div
                          key={idx}
                          className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800 flex items-start gap-3"
                        >
                          <span className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 text-xs font-mono flex items-center justify-center shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          <p className="text-sm text-zinc-200 leading-relaxed">
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
                      <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2 flex items-center gap-2">
                        <Layers size={14} className="text-amber-400" />
                        In-Depth System Topology & Execution
                      </h4>
                      <p className="text-sm text-zinc-300 leading-relaxed bg-zinc-950/70 p-4 rounded-xl border border-zinc-800">
                        {selectedTopic.depth.tenMinute.architecture}
                      </p>
                    </div>

                    {/* Trade-offs Matrix */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2 flex items-center gap-2">
                        <AlertOctagon size={14} className="text-amber-400" />
                        Hard Trade-Offs & Decisions
                      </h4>
                      <div className="space-y-2">
                        {selectedTopic.depth.tenMinute.tradeoffs.map((t, idx) => (
                          <div
                            key={idx}
                            className="p-3.5 rounded-lg bg-amber-500/5 border-l-2 border-amber-500 text-xs text-zinc-300 leading-relaxed"
                          >
                            {t}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Scaling & Failure Handling */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800">
                        <span className="text-[10px] font-mono uppercase text-emerald-400 block mb-1">
                          Scaling Strategy
                        </span>
                        <p className="text-xs text-zinc-300 leading-relaxed">
                          {selectedTopic.depth.tenMinute.scaling}
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800">
                        <span className="text-[10px] font-mono uppercase text-rose-400 block mb-1">
                          Failure Handling & Resiliency
                        </span>
                        <p className="text-xs text-zinc-300 leading-relaxed">
                          {selectedTopic.depth.tenMinute.failureHandling}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Sample Interviewer Questions Toggle */}
              <div className="pt-4 border-t border-zinc-800/80">
                <button
                  onClick={() => setShowQuestions(!showQuestions)}
                  className="flex items-center justify-between w-full p-3 rounded-xl bg-zinc-950 hover:bg-zinc-800/50 border border-zinc-800 transition-colors text-xs font-semibold text-zinc-300"
                >
                  <span className="flex items-center gap-2">
                    <HelpCircle size={15} className="text-blue-400" />
                    Likely Interviewer Probes & Discussion Prompts
                  </span>
                  <span className="font-mono text-[10px] text-zinc-500">
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
                        className="p-3 rounded-lg bg-zinc-900 border border-zinc-800/80 text-xs text-zinc-300 flex items-start gap-2"
                      >
                        <span className="text-blue-400 font-mono font-bold">Q{idx + 1}:</span>
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
