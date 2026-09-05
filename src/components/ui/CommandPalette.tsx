import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  X, 
  ArrowRight, 
  Briefcase, 
  Code, 
  Network, 
  Brain, 
  Radio, 
  FileCode, 
  Layers, 
  Terminal, 
  HelpCircle,
  FolderGit2
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenInquiry?: () => void;
  onOpenClientModal?: () => void;
  onOpenRecruiterModal?: () => void;
}

interface CommandItem {
  id: string;
  title: string;
  category: 'Navigation' | 'Interview Mode' | 'Consulting & Services' | 'Labs & Deep Dives' | 'Actions';
  description: string;
  action: () => void;
  icon: any;
}

export function CommandPalette({ 
  isOpen, 
  onClose, 
  onOpenInquiry, 
  onOpenClientModal, 
  onOpenRecruiterModal 
}: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    onClose();
    if (path.startsWith('/#')) {
      navigate('/');
      setTimeout(() => {
        const id = path.replace('/#', '');
        const elem = document.getElementById(id);
        if (elem) elem.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      navigate(path);
    }
  };

  const commands: CommandItem[] = [
    // Fast Actions
    {
      id: 'action-inquiry',
      title: 'Start a Project Inquiry / Work With Me',
      category: 'Actions',
      description: 'Open consulting inquiry drawer to discuss a project',
      action: () => { onClose(); onOpenInquiry?.(); },
      icon: Briefcase,
    },
    {
      id: 'action-client',
      title: 'Client & Founder Fast-Path (60-Sec Overview)',
      category: 'Actions',
      description: 'Executive summary of consulting capabilities and engagement models',
      action: () => { onClose(); onOpenClientModal?.(); },
      icon: Briefcase,
    },
    {
      id: 'action-recruiter',
      title: 'Recruiter Fast-Path (30-Sec Overview)',
      category: 'Actions',
      description: 'Quick summary of 13+ years experience, stack, and contact links',
      action: () => { onClose(); onOpenRecruiterModal?.(); },
      icon: HelpCircle,
    },

    // Navigation Sections
    {
      id: 'nav-consulting',
      title: 'Consulting & Independent Engineering',
      category: 'Navigation',
      description: 'Problems I solve, consulting packages, engagement models & client journey',
      action: () => handleNavigate('/#consulting'),
      icon: Briefcase,
    },
    {
      id: 'nav-projects',
      title: 'Engineering Workbench & Projects',
      category: 'Navigation',
      description: 'Enterprise healthcare claims, Kafka event spine, and 7 AI concept templates',
      action: () => handleNavigate('/#projects'),
      icon: FolderGit2,
    },
    {
      id: 'nav-experience',
      title: 'Enterprise Experience (SS&C DomaniRx)',
      category: 'Navigation',
      description: 'Healthcare claims adjudication, CMS compliance, legacy COBOL modernization',
      action: () => handleNavigate('/#experience'),
      icon: Layers,
    },
    {
      id: 'nav-system-design',
      title: 'System Design Lab',
      category: 'Navigation',
      description: 'Interactive distributed systems designs (Claims, Orders, Notifications, RAG, Agents)',
      action: () => handleNavigate('/#system-design'),
      icon: Network,
    },
    {
      id: 'nav-ai-lab',
      title: 'AI Engineering Lab',
      category: 'Navigation',
      description: 'Spring AI, RAG architecture, Tool-calling agents, and Multi-Agent A2A',
      action: () => handleNavigate('/#ai-lab'),
      icon: Brain,
    },
    {
      id: 'nav-kafka-lab',
      title: 'Kafka Architecture Lab',
      category: 'Navigation',
      description: 'Interactive Kafka pipeline simulator, partitioning, rebalances, and retries',
      action: () => handleNavigate('/#kafka-lab'),
      icon: Radio,
    },
    {
      id: 'nav-java-deep-dive',
      title: 'Java 21 Deep Dive',
      category: 'Navigation',
      description: 'Virtual threads (Loom), ZGC ergonomics, memory model, clean architecture',
      action: () => handleNavigate('/#java-deep-dive'),
      icon: FileCode,
    },
    {
      id: 'nav-microservices-lab',
      title: 'Spring Boot & Microservices Lab',
      category: 'Navigation',
      description: 'Microservice boundaries, API gateways, database-per-service, Saga pattern',
      action: () => handleNavigate('/#microservices-lab'),
      icon: Code,
    },
    {
      id: 'nav-decisions',
      title: 'Architecture Decisions (ADRs)',
      category: 'Navigation',
      description: 'REST vs Kafka, Sync vs Async, RAG vs Direct LLM, Single vs Multi-Agent',
      action: () => handleNavigate('/#decisions'),
      icon: Layers,
    },
    {
      id: 'nav-code',
      title: 'Production Code Showcase',
      category: 'Navigation',
      description: 'Idempotent Kafka consumer, Spring AI RAG, clean REST controller',
      action: () => handleNavigate('/#code'),
      icon: Terminal,
    },

    // Interview Control
    {
      id: 'nav-interview-mode',
      title: 'Full Interview Control Center',
      category: 'Interview Mode',
      description: 'Structured technical interview prep with 30s, 2min, and 10min depth answers',
      action: () => handleNavigate('/interview'),
      icon: HelpCircle,
    },
  ];

  const filteredCommands = commands.filter((cmd) => {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    return (
      cmd.title.toLowerCase().includes(q) ||
      cmd.description.toLowerCase().includes(q) ||
      cmd.category.toLowerCase().includes(q)
    );
  });

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filteredCommands.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredCommands[selectedIndex]) {
        filteredCommands[selectedIndex].action();
      }
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Palette Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: -10 }}
          transition={{ duration: 0.15 }}
          className="relative w-full max-w-xl bg-[var(--color-surface-1)] border border-[var(--color-border-hover)] rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[75vh]"
          onKeyDown={handleKeyDown}
        >
          {/* Search Header */}
          <div className="p-4 border-b border-[var(--color-border)] flex items-center gap-3 bg-[var(--color-surface-2)]">
            <Search size={18} className="text-[var(--color-text-tertiary)] shrink-0" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search topics, labs, services, or press Esc to close..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-transparent border-none text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:outline-none text-sm"
            />
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[var(--color-text-muted)] hover:text-white hover:bg-[var(--color-surface-3)] transition-colors"
            >
              <X size={16} />
            </button>
          </div>

          {/* Results List */}
          <div className="p-2 overflow-y-auto space-y-1">
            {filteredCommands.length === 0 ? (
              <div className="p-8 text-center text-xs text-[var(--color-text-muted)]">
                No matching results found for "{query}".
              </div>
            ) : (
              filteredCommands.map((cmd, idx) => {
                const Icon = cmd.icon;
                const isSelected = idx === selectedIndex;
                return (
                  <button
                    key={cmd.id}
                    onClick={cmd.action}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs flex items-center justify-between transition-colors ${
                      isSelected
                        ? 'bg-[var(--color-accent)] text-white'
                        : 'text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-2)]'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className={`p-1.5 rounded-lg ${isSelected ? 'bg-white/20 text-white' : 'bg-[var(--color-surface-2)] text-[var(--color-accent)]'}`}>
                        <Icon size={14} />
                      </div>
                      <div className="truncate">
                        <div className="flex items-center gap-2">
                          <span className={`font-semibold ${isSelected ? 'text-white' : 'text-[var(--color-text-primary)]'}`}>
                            {cmd.title}
                          </span>
                          <span className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${isSelected ? 'bg-white/20 text-white' : 'bg-[var(--color-surface-3)] text-[var(--color-text-tertiary)]'}`}>
                            {cmd.category}
                          </span>
                        </div>
                        <p className={`text-[11px] truncate mt-0.5 ${isSelected ? 'text-white/80' : 'text-[var(--color-text-tertiary)]'}`}>
                          {cmd.description}
                        </p>
                      </div>
                    </div>

                    <ArrowRight size={14} className={`shrink-0 ml-2 ${isSelected ? 'text-white' : 'text-[var(--color-text-muted)]'}`} />
                  </button>
                );
              })
            )}
          </div>

          {/* Footer Shortcuts */}
          <div className="px-4 py-2.5 border-t border-[var(--color-border)] bg-[var(--color-surface-2)] flex items-center justify-between text-[11px] text-[var(--color-text-tertiary)] font-mono">
            <div className="flex items-center gap-2">
              <span>↑↓ Navigate</span>
              <span>•</span>
              <span>↵ Select</span>
              <span>•</span>
              <span>Esc Close</span>
            </div>
            <span>⌘K</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
