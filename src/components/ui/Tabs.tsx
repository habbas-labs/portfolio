import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useAnimations';

export interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  defaultTabId?: string;
}

export const Tabs: React.FC<TabsProps> = ({ tabs, defaultTabId }) => {
  const [activeTab, setActiveTab] = useState(defaultTabId || tabs[0]?.id);
  const prefersReducedMotion = useReducedMotion();

  const activeContent = tabs.find((t) => t.id === activeTab)?.content;

  return (
    <div className="w-full">
      <div className="flex space-x-1 border-b border-[var(--color-border)] overflow-x-auto hide-scrollbar">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors focus:outline-none ${
              activeTab === tab.id ? 'text-[var(--color-text-primary)]' : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <motion.div
                layoutId="activeTabIndicator"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--color-accent)]"
                initial={false}
                transition={prefersReducedMotion ? { duration: 0 } : { type: 'spring', stiffness: 500, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>
      <div className="py-6 relative min-h-[200px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
            animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="w-full"
          >
            {activeContent}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Tabs;
