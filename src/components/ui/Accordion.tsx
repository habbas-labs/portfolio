import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useReducedMotion } from '../../hooks/useAnimations';

export interface AccordionProps {
  title?: string | React.ReactNode;
  children: React.ReactNode;
  defaultExpanded?: boolean;
  type?: 'single' | 'multiple' | string;
  collapsible?: boolean;
  className?: string;
}

export interface AccordionItemProps {
  value?: string;
  title: string | React.ReactNode;
  children: React.ReactNode;
  defaultExpanded?: boolean;
  className?: string;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  children,
  defaultExpanded = false,
  className = '',
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className={`border border-[var(--color-border)] rounded-lg overflow-hidden bg-[var(--color-surface-1)] mb-4 ${className}`}>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-4 bg-[var(--color-surface-2)] hover:bg-[var(--color-surface-3)] transition-colors focus:outline-none"
        aria-expanded={isExpanded}
      >
        <span className="font-medium text-[var(--color-text-primary)] text-left flex-1">{title}</span>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.2 }}
          className="text-[var(--color-text-secondary)] flex-shrink-0 ml-4"
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>
      
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={prefersReducedMotion ? { height: 0, opacity: 0 } : { height: 0, opacity: 0 }}
            animate={prefersReducedMotion ? { height: 'auto', opacity: 1 } : { height: 'auto', opacity: 1 }}
            exit={prefersReducedMotion ? { height: 0, opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="p-4 bg-[var(--color-surface-1)]">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
  defaultExpanded = false,
  className = '',
}) => {
  // If title is provided, render as single accordion unit
  if (title) {
    return (
      <AccordionItem
        title={title}
        defaultExpanded={defaultExpanded}
        className={className}
      >
        {children}
      </AccordionItem>
    );
  }

  // Otherwise act as a wrapper/container for AccordionItems
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default Accordion;
