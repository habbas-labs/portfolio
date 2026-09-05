import React from 'react';
import { motion } from 'framer-motion';
import { architectureDecisions } from '../../data/content';
import { useInView } from '../../hooks/useAnimations';
import { Badge } from '../ui/Badge';
import { Accordion, AccordionItem } from '../ui/Accordion';
import { Check, X } from 'lucide-react';

export function Decisions() {
  const { ref, inView } = useInView();

  return (
    <section id="decisions" className="py-24 border-t border-[var(--color-border)]" ref={ref}>
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="mb-12">
          <p className="text-sm font-semibold tracking-wider text-[var(--color-accent)] uppercase mb-2">Architecture Decision Records</p>
          <h2 className="text-3xl font-bold text-[var(--color-text-primary)]">Engineering Decisions</h2>
        </div>

        <div className="space-y-6">
          {architectureDecisions.map((decision, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel rounded-xl overflow-hidden"
            >
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem 
                  value={`adr-${index}`} 
                  title={
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-left">
                      <span className="font-bold text-lg text-[var(--color-text-primary)]">{decision.title}</span>
                      <Badge variant="secondary" className="w-fit">{decision.status}</Badge>
                    </div>
                  }
                  className="border-none"
                >
                  <div className="space-y-8 mt-4">
                    {/* Problem */}
                    <div>
                      <h4 className="text-sm font-semibold tracking-wider text-[var(--color-text-tertiary)] uppercase mb-2">Context & Problem</h4>
                      <p className="text-[var(--color-text-secondary)]">{decision.problem}</p>
                    </div>
                    
                    {/* Options */}
                    <div>
                      <h4 className="text-sm font-semibold tracking-wider text-[var(--color-text-tertiary)] uppercase mb-4">Considered Options</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {decision.options.map((option, optIdx) => (
                          <div 
                            key={optIdx} 
                            className={`p-4 rounded-lg border ${
                              option.name === decision.decision 
                                ? 'border-[var(--color-accent)] bg-[var(--color-accent)]/5' 
                                : 'border-[var(--color-border)] bg-[var(--color-surface-1)]'
                            }`}
                          >
                            <div className="flex items-center justify-between mb-3">
                              <h5 className="font-medium text-[var(--color-text-primary)]">{option.name}</h5>
                              {option.name === decision.decision && (
                                <span className="text-xs bg-[var(--color-accent)] text-white px-2 py-0.5 rounded-full">Selected</span>
                              )}
                            </div>
                            
                            <div className="space-y-2">
                              <div className="space-y-1">
                                {option.pros.map((pro, i) => (
                                  <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--color-text-secondary)]">
                                    <Check size={14} className="text-green-500 shrink-0 mt-0.5" />
                                    <span>{pro}</span>
                                  </div>
                                ))}
                              </div>
                              <div className="space-y-1 mt-2">
                                {option.cons.map((con, i) => (
                                  <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--color-text-secondary)]">
                                    <X size={14} className="text-rose-500 shrink-0 mt-0.5" />
                                    <span>{con}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Decision & Reason */}
                    <div className="bg-[var(--color-surface-2)] p-5 rounded-lg border-l-4 border-[var(--color-accent)]">
                      <h4 className="text-sm font-semibold tracking-wider text-[var(--color-text-tertiary)] uppercase mb-2">Decision Rationale</h4>
                      <p className="text-[var(--color-text-primary)] font-medium mb-2">{decision.decision}</p>
                      <p className="text-sm text-[var(--color-text-secondary)]">{decision.reason}</p>
                    </div>
                    
                    {/* Trade-offs */}
                    <div>
                      <h4 className="text-sm font-semibold tracking-wider text-[var(--color-text-tertiary)] uppercase mb-2">Accepted Trade-offs</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-[var(--color-text-secondary)]">
                        {decision.tradeoffs.map((tradeoff, tIdx) => (
                          <li key={tIdx}>{tradeoff}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </AccordionItem>
              </Accordion>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
