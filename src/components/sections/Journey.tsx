import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { journeyEras } from '../../data/content';
import { useInView, useReducedMotion } from '../../hooks/useAnimations';
import { SectionHeader } from '../ui/SectionHeader';
import { Badge } from '../ui/Badge';
import { ScrollReveal } from '../ui/ScrollReveal';

const eraGradients = [
  'from-blue-500/10 to-blue-600/5',
  'from-cyan-500/10 to-cyan-600/5',
  'from-purple-500/10 to-purple-600/5',
  'from-violet-500/10 to-amber-600/5',
  'from-amber-500/10 to-orange-600/5',
];

const eraAccents = ['#3b82f6', '#06b6d4', '#a855f7', '#8b5cf6', '#f59e0b'];

export function Journey() {
  const [activeEra, setActiveEra] = useState<string | null>(null);
  const { ref } = useInView();
  const reduced = useReducedMotion();

  const renderEraDetails = (era: (typeof journeyEras)[number], i: number) => (
    <div className="p-4 sm:p-6 rounded-xl bg-[var(--color-surface-1)] border border-[var(--color-border)] shadow-md text-left">
      <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)] mb-2.5">
            Technologies
          </h4>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {era.technologies.map(tech => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs rounded-md border border-[var(--color-border)] bg-[var(--color-surface-2)]"
                style={{ color: eraAccents[i] }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)] mb-2.5">
            Highlights
          </h4>
          <ul className="space-y-1.5">
            {era.highlights.map(h => (
              <li key={h} className="flex items-start gap-2 text-xs sm:text-sm text-[var(--color-text-secondary)]">
                <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: eraAccents[i] }} />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mt-4 text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed pt-3 border-t border-[var(--color-border)]">
        {era.description}
      </p>
    </div>
  );

  return (
    <section id="journey" className="py-24" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="Evolution"
          title="Engineering Journey"
          description="A natural progression from enterprise Java through distributed systems to intelligent AI-powered applications."
        />

        <div className="mt-12 md:mt-16">
          {/* Progress line (Desktop only) */}
          <div className="hidden md:block relative mb-8">
            <div className="h-px bg-[var(--color-border)] w-full" />
            <div className="flex justify-between absolute -top-1.5 inset-x-0">
              {journeyEras.map((era, i) => (
                <button
                  key={era.id}
                  onClick={() => setActiveEra(activeEra === era.id ? null : era.id)}
                  className="group relative"
                >
                  <div
                    className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                      activeEra === era.id
                        ? 'scale-150'
                        : 'hover:scale-125'
                    }`}
                    style={{
                      borderColor: eraAccents[i],
                      backgroundColor: activeEra === era.id ? eraAccents[i] : 'var(--color-surface-0)',
                    }}
                  />
                  <span className="absolute top-5 left-1/2 -translate-x-1/2 text-[10px] text-[var(--color-text-muted)] whitespace-nowrap">
                    {era.period}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Era cards */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-6 md:mt-16">
            {journeyEras.map((era, i) => {
              const isActive = activeEra === era.id;
              return (
                <ScrollReveal key={era.id} delay={i * 0.1}>
                  <motion.button
                    onClick={() => setActiveEra(isActive ? null : era.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-300 bg-gradient-to-br ${eraGradients[i]} ${
                      isActive
                        ? 'border-[var(--color-border-hover)] shadow-lg'
                        : 'border-[var(--color-border)] hover:border-[var(--color-border-hover)]'
                    }`}
                    whileHover={reduced ? {} : { y: -2 }}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <span
                        className="text-xs font-mono font-medium"
                        style={{ color: eraAccents[i] }}
                      >
                        {era.period}
                      </span>
                      <Badge type={era.status} />
                    </div>
                    <h3 className="text-sm font-semibold text-[var(--color-text-primary)] mb-1">
                      {era.title}
                    </h3>
                    <p className="text-xs text-[var(--color-text-tertiary)] line-clamp-2">
                      {era.description}
                    </p>

                    <div className="mt-3 flex items-center gap-1 text-xs text-[var(--color-text-muted)]">
                      <ChevronRight
                        size={12}
                        className={`transition-transform ${isActive ? 'rotate-90' : ''}`}
                      />
                      {isActive ? 'Collapse' : 'Details'}
                    </div>
                  </motion.button>

                  {/* Mobile inline details: opens immediately below the clicked box in mobile view */}
                  <div className="md:hidden">
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden mt-3"
                        >
                          {renderEraDetails(era, i)}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Desktop expanded details: opens below the horizontal row on desktop */}
          <div className="hidden md:block">
            <AnimatePresence mode="wait">
              {activeEra && (() => {
                const era = journeyEras.find(e => e.id === activeEra);
                const i = journeyEras.findIndex(e => e.id === activeEra);
                if (!era) return null;
                return (
                  <motion.div
                    key={era.id}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden mt-6"
                  >
                    {renderEraDetails(era, i)}
                  </motion.div>
                );
              })()}
            </AnimatePresence>
          </div>

          {/* Progression arrow */}
          <div className="mt-8 flex justify-center">
            <div className="flex items-center gap-2 text-xs text-[var(--color-text-muted)]">
              <span>Enterprise Engineering</span>
              <ChevronRight size={12} />
              <span>Distributed Systems</span>
              <ChevronRight size={12} />
              <span className="gradient-text-warm font-medium">Intelligent Systems</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
