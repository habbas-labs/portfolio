import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Layers, 
  Code2, 
  Network, 
  Search, 
  Database, 
  Terminal, 
  ChevronDown, 
  Clock, 
  CheckCircle2,
  Calendar
} from 'lucide-react';
import { cimm2TechTaxonomy } from '../../data/cimm2Content';
import { SectionHeader } from '../ui/SectionHeader';

export function TechnologyMap() {
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({
    'Application & Frameworks': true,
    'Integration & Protocols': true,
    'Search & Database': true,
    'Frontend & Build System': true,
  });

  const toggleCategory = (cat: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [cat]: !prev[cat]
    }));
  };

  const timelineEvents = [
    {
      period: 'Oct 2015',
      title: 'Joined CIMM2 Development Team',
      subtitle: 'Unilog Content Solutions (Mysore)',
      description: 'Onboarded to the core e-commerce engineering team developing CIMM2 web store platform for distributor enterprises.',
    },
    {
      period: 'During Project',
      title: 'ERP Adapter & Integration Layer',
      subtitle: 'Epicor & Infor SX Systems',
      description: 'Architected and implemented XML-based adapter layers decoupling the web store from underlying proprietary ERP systems.',
    },
    {
      period: 'During Project',
      title: 'Apache Solr Search Integration',
      subtitle: 'Catalog Discovery Engine',
      description: 'Engineered faceted search, auto-suggest, and part-number tokenization over large distributor inventory catalogs.',
    },
    {
      period: 'During Project',
      title: 'B2B & B2C Commerce Engine',
      subtitle: 'Customer-Specific Business Rules',
      description: 'Developed Spring service and DAO components handling contract pricing matrices, user roles, and branch warehouse fulfillment.',
    },
    {
      period: 'During Project',
      title: 'Carrier Shipping Integrations',
      subtitle: 'UPS Developer Kit & FedEx Web Services',
      description: 'Integrated live freight rating and tracking services for parcel and LTL freight shipping calculation.',
    },
    {
      period: 'Through Apr 2018',
      title: 'Enterprise Customer Implementations',
      subtitle: 'PSC Distribution, Bearings & Drives, Turner Supply',
      description: 'Delivered tailored production customizations, resolving integration defects and ensuring high-availability operations.',
    },
  ];

  return (
    <section id="cimm2-tech" className="py-16 sm:py-20 border-b border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="Engineering Stack & Timeline"
          title="Technology Map & Contribution Progression"
          description="A structured breakdown of the enterprise Java ecosystem and technical milestones delivered across the CIMM2 lifecycle."
        />

        {/* Two Column Layout: Timeline (Left) + Expandable Tech Taxonomy (Right) */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Timeline (Left Column: 5 Cols) */}
          <div className="lg:col-span-5 bg-[var(--color-surface-1)] border border-[var(--color-border)] rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-2 pb-4 mb-6 border-b border-[var(--color-border)]">
              <Clock size={16} className="text-[var(--color-accent)]" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--color-text-primary)]">
                Contribution Timeline
              </h3>
            </div>

            <div className="relative pl-6 space-y-6 before:content-[''] before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[2px] before:bg-[var(--color-border)]">
              {timelineEvents.map((evt, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline dot */}
                  <div className="absolute -left-[27px] top-1 w-3 h-3 rounded-full bg-[var(--color-surface-1)] border-2 border-[var(--color-accent)] group-hover:scale-125 transition-transform" />

                  <span className="text-[10px] font-mono font-semibold text-[var(--color-accent)] uppercase tracking-wider block">
                    {evt.period}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-[var(--color-text-primary)] mt-0.5">
                    {evt.title}
                  </h4>
                  <span className="text-[11px] text-[var(--color-text-muted)] block mb-1">
                    {evt.subtitle}
                  </span>
                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                    {evt.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Taxonomy (Right Column: 7 Cols) */}
          <div className="lg:col-span-7 space-y-4">
            {cimm2TechTaxonomy.map(tax => {
              const isExpanded = !!expandedCategories[tax.category];
              return (
                <div
                  key={tax.category}
                  className="rounded-xl bg-[var(--color-surface-1)] border border-[var(--color-border)] overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => toggleCategory(tax.category)}
                    className="w-full p-4 flex items-center justify-between text-left hover:bg-[var(--color-surface-2)] transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-6 h-6 rounded-md bg-[var(--color-accent)]/10 text-[var(--color-accent)] flex items-center justify-center">
                        <Code2 size={13} />
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-[var(--color-text-primary)]">
                        {tax.category}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] text-[var(--color-text-muted)] font-mono">
                        {tax.items.length} components
                      </span>
                      <ChevronDown
                        size={16}
                        className={`text-[var(--color-text-muted)] transition-transform duration-200 ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="px-4 pb-4 pt-1 border-t border-[var(--color-border)]"
                      >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                          {tax.items.map(item => (
                            <div
                              key={item.name}
                              className="p-2.5 rounded-lg bg-[var(--color-surface-2)] border border-[var(--color-border)]"
                            >
                              <div className="text-xs font-semibold text-[var(--color-text-primary)] font-mono mb-1">
                                {item.name}
                              </div>
                              <div className="text-[11px] text-[var(--color-text-secondary)] leading-relaxed">
                                {item.role}
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
