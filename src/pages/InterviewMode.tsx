import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, MonitorPlay, Layers, Cpu, Database, Server, GitBranch, Network, Code, Workflow, Terminal, Bot } from 'lucide-react';
import { useReducedMotion } from '../hooks/useAnimations';
import { interviewTopics } from '../data/content';

// Simple icon mapper matching the ones in data/content.ts
const getIcon = (iconName: string, className: string = "w-6 h-6") => {
  const icons: Record<string, React.ReactNode> = {
    'route': <GitBranch className={className} />,
    'cpu': <Cpu className={className} />,
    'layers': <Layers className={className} />,
    'server': <Server className={className} />,
    'network': <Network className={className} />,
    'database': <Database className={className} />,
    'briefcase': <Layers className={className} />,
    'bot': <Bot className={className} />,
    'workflow': <Workflow className={className} />,
    'code': <Code className={className} />,
    'terminal': <Terminal className={className} />
  };
  return icons[iconName] || <Layers className={className} />;
};

export const InterviewMode: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.4, staggerChildren: 0.05 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  const coreTopics = interviewTopics.filter(t => 
    !['ai-lab', 'agentic-ai', 'decisions', 'code'].includes(t.route.replace('/#', ''))
  );
  
  const aiTopics = interviewTopics.filter(t => 
    ['ai-lab', 'agentic-ai', 'decisions', 'code'].includes(t.route.replace('/#', ''))
  );

  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-blue-500/30 selection:text-blue-200">
      {/* Top Bar */}
      <header className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link to="/" className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
            <div className="h-4 w-px bg-zinc-800 hidden sm:block"></div>
            <div className="flex items-center gap-3">
              <MonitorPlay className="w-5 h-5 text-blue-500" />
              <h1 className="text-lg font-bold tracking-widest text-zinc-100">INTERVIEW MODE</h1>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
            <span className="text-xs font-medium text-blue-400">Optimized for Screen Sharing</span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Core Engineering Section */}
          <div className="mb-16">
            <motion.h2 variants={itemVariants} className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-8 flex items-center gap-4">
              Core Engineering
              <div className="h-px bg-zinc-800 flex-1"></div>
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreTopics.map((topic) => (
                <motion.div key={topic.title} variants={itemVariants}>
                  <Link 
                    to={topic.route}
                    className="block h-full p-6 bg-zinc-900/50 border border-zinc-800/50 rounded-xl hover:bg-zinc-800/80 hover:border-blue-500/50 transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-zinc-950 rounded-lg text-zinc-400 group-hover:text-blue-400 group-hover:bg-blue-500/10 transition-colors">
                        {getIcon(topic.icon)}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-zinc-100 group-hover:text-white transition-colors">{topic.title}</h3>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {topic.subtopics.map(sub => (
                        <span key={sub} className="px-2 py-1 text-xs font-medium bg-zinc-800 text-zinc-300 rounded group-hover:bg-zinc-700 transition-colors">
                          {sub}
                        </span>
                      ))}
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* AI & Strategy Section */}
          <div>
            <motion.h2 variants={itemVariants} className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-8 flex items-center gap-4">
              AI & Strategy
              <div className="h-px bg-zinc-800 flex-1"></div>
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aiTopics.map((topic) => (
                <motion.div key={topic.title} variants={itemVariants}>
                  <Link 
                    to={topic.route}
                    className="block h-full p-6 bg-zinc-900/50 border border-zinc-800/50 rounded-xl hover:bg-zinc-800/80 hover:border-amber-500/50 transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg hover:shadow-amber-500/10"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-zinc-950 rounded-lg text-zinc-400 group-hover:text-amber-400 group-hover:bg-amber-500/10 transition-colors">
                        {getIcon(topic.icon)}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-zinc-100 group-hover:text-white transition-colors">{topic.title}</h3>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {topic.subtopics.map(sub => (
                        <span key={sub} className="px-2 py-1 text-xs font-medium bg-zinc-800 text-zinc-300 rounded group-hover:bg-zinc-700 transition-colors">
                          {sub}
                        </span>
                      ))}
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

        </motion.div>
      </main>
    </div>
  );
};
