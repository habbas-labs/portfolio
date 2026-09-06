import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building, 
  ShoppingCart, 
  ArrowRight, 
  CheckCircle2, 
  XCircle, 
  Layers, 
  Search, 
  Database, 
  DollarSign, 
  Truck,
  Sparkles
} from 'lucide-react';
import { cimm2BusinessProblem } from '../../data/cimm2Content';
import { SectionHeader } from '../ui/SectionHeader';
import { useReducedMotion } from '../../hooks/useAnimations';

export function BusinessStory() {
  const [activeTab, setActiveTab] = useState<'before' | 'after'>('after');
  const reduced = useReducedMotion();

  return (
    <section id="cimm2-problem" className="py-14 sm:py-20 border-b border-[var(--color-border)] scroll-mt-24 md:scroll-mt-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="Business Context"
          title="The E-Commerce Transformation Challenge"
          description="Transforming traditional distributor sales operations into 24/7 digital commerce channels on top of legacy ERP backbones."
        />

        {/* View Toggle */}
        <div className="mt-8 flex justify-center w-full">
          <div className="p-1 bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-xl grid grid-cols-2 sm:flex gap-1 w-full sm:w-auto">
            <button
              onClick={() => setActiveTab('before')}
              className={`px-4 sm:px-5 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-2 ${
                activeTab === 'before'
                  ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30 shadow-sm'
                  : 'text-[var(--color-text-secondary)] hover:text-white'
              }`}
            >
              <XCircle size={14} className="text-amber-400" />
              <span className="hidden sm:inline">Before CIMM2 (Traditional Distribution)</span><span className="sm:hidden">Before CIMM2</span>
            </button>
            <button
              onClick={() => setActiveTab('after')}
              className={`px-4 sm:px-5 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-2 ${
                activeTab === 'after'
                  ? 'bg-[var(--color-accent)] text-white shadow-sm'
                  : 'text-[var(--color-text-secondary)] hover:text-white'
              }`}
            >
              <Sparkles size={14} />
              <span className="hidden sm:inline">After CIMM2 (Digital Architecture)</span><span className="sm:hidden">After CIMM2</span>
            </button>
          </div>
        </div>

        {/* Animated Model View */}
        <div className="mt-8">
          <AnimatePresence mode="wait">
            {activeTab === 'before' ? (
              <motion.div
                key="before-view"
                initial={reduced ? {} : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="p-6 sm:p-8 rounded-2xl bg-[var(--color-surface-1)] border border-amber-500/30 shadow-md"
              >
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-6 mb-6 border-b border-[var(--color-border)]">
                  <div>
                    <h3 className="text-lg font-bold text-[var(--color-text-primary)] flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                      {cimm2BusinessProblem.before.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] mt-1">
                      Distributor sales relied strictly on manual desk orders and phone/fax queues.
                    </p>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-mono font-medium">
                    Manual & Disconnected
                  </div>
                </div>

                {/* Before Diagram */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 py-6 px-4 bg-[var(--color-surface-2)]/60 rounded-xl border border-[var(--color-border)]">
                  <div className="p-4 rounded-lg bg-[var(--color-surface-1)] border border-[var(--color-border)] text-center min-w-[140px]">
                    <Building size={24} className="mx-auto text-[var(--color-text-muted)] mb-1" />
                    <span className="text-xs font-semibold text-[var(--color-text-primary)] block">Business Buyer</span>
                    <span className="text-[10px] text-[var(--color-text-muted)]">Distributor Customer</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <span className="text-[10px] text-amber-400 font-mono">Phone / Fax / Desk</span>
                    <ArrowRight size={18} className="text-amber-400 rotate-90 sm:rotate-0 my-1 sm:my-0" />
                  </div>

                  <div className="p-4 rounded-lg bg-[var(--color-surface-1)] border border-[var(--color-border)] text-center min-w-[140px]">
                    <ShoppingCart size={24} className="mx-auto text-[var(--color-text-muted)] mb-1" />
                    <span className="text-xs font-semibold text-[var(--color-text-primary)] block">Traditional Sales Rep</span>
                    <span className="text-[10px] text-[var(--color-text-muted)]">Manual Catalog Lookups</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <span className="text-[10px] text-amber-400 font-mono">Manual ERP Entry</span>
                    <ArrowRight size={18} className="text-amber-400 rotate-90 sm:rotate-0 my-1 sm:my-0" />
                  </div>

                  <div className="p-4 rounded-lg bg-[var(--color-surface-1)] border border-[var(--color-border)] text-center min-w-[140px]">
                    <Database size={24} className="mx-auto text-[var(--color-text-muted)] mb-1" />
                    <span className="text-xs font-semibold text-[var(--color-text-primary)] block">ERP System</span>
                    <span className="text-[10px] text-[var(--color-text-muted)]">Epicor / Infor SX</span>
                  </div>
                </div>

                {/* Challenges list */}
                <div className="mt-6">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-3">
                    Core Operational Friction:
                  </h4>
                  <ul className="grid sm:grid-cols-2 gap-2.5">
                    {cimm2BusinessProblem.before.challenges.map((c, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[var(--color-text-secondary)]">
                        <XCircle size={14} className="text-amber-400 flex-shrink-0 mt-0.5" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="after-view"
                initial={reduced ? {} : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="p-6 sm:p-8 rounded-2xl bg-[var(--color-surface-1)] border border-[var(--color-accent)]/40 shadow-xl"
              >
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-6 mb-6 border-b border-[var(--color-border)]">
                  <div>
                    <h3 className="text-lg font-bold text-[var(--color-text-primary)] flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-accent)]" />
                      {cimm2BusinessProblem.after.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] mt-1">
                      High-availability digital storefront integrating directly into existing ERP and carrier backends.
                    </p>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-[var(--color-accent-subtle)] text-[var(--color-accent)] text-xs font-mono font-medium">
                    Integrated & Automated
                  </div>
                </div>

                {/* After Diagram */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-3 sm:gap-4 py-6 px-4 bg-[var(--color-surface-2)]/60 rounded-xl border border-[var(--color-border)]">
                  <div className="p-3.5 rounded-lg bg-[var(--color-surface-1)] border border-[var(--color-border)] text-center min-w-[120px]">
                    <Building size={22} className="mx-auto text-[var(--color-accent)] mb-1" />
                    <span className="text-xs font-semibold text-[var(--color-text-primary)] block">Customer</span>
                    <span className="text-[10px] text-[var(--color-text-muted)]">B2B & B2C Buyers</span>
                  </div>

                  <ArrowRight size={16} className="text-[var(--color-accent)] rotate-90 md:rotate-0" />

                  <div className="p-4 rounded-xl bg-gradient-to-br from-[var(--color-accent)]/15 to-transparent border border-[var(--color-border-accent)] text-center flex-1 max-w-md">
                    <span className="text-xs font-bold text-[var(--color-accent)] block mb-2">
                      CIMM2 E-Commerce Platform
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 text-[11px]">
                      <span className="px-2 py-1 rounded bg-[var(--color-surface-1)] border border-[var(--color-border)] text-[var(--color-text-primary)]">
                        Product Catalog
                      </span>
                      <span className="px-2 py-1 rounded bg-[var(--color-surface-1)] border border-[var(--color-border)] text-[var(--color-text-primary)]">
                        Apache Solr Search
                      </span>
                      <span className="px-2 py-1 rounded bg-[var(--color-surface-1)] border border-[var(--color-border)] text-[var(--color-text-primary)]">
                        Contract Pricing
                      </span>
                      <span className="px-2 py-1 rounded bg-[var(--color-surface-1)] border border-[var(--color-border)] text-[var(--color-text-primary)]">
                        Branch Stock
                      </span>
                      <span className="px-2 py-1 rounded bg-[var(--color-surface-1)] border border-[var(--color-border)] text-[var(--color-text-primary)]">
                        User Roles
                      </span>
                      <span className="px-2 py-1 rounded bg-[var(--color-surface-1)] border border-[var(--color-border)] text-[var(--color-text-primary)]">
                        Self-Service Checkout
                      </span>
                    </div>
                  </div>

                  <ArrowRight size={16} className="text-[var(--color-accent)] rotate-90 md:rotate-0" />

                  <div className="flex flex-col gap-2">
                    <div className="px-3 py-2 rounded-lg bg-[var(--color-surface-1)] border border-[var(--color-border)] text-center text-xs font-medium text-[var(--color-text-primary)] flex items-center gap-2">
                      <Database size={14} className="text-cyan-400" />
                      <span>ERP (Epicor / Infor SX)</span>
                    </div>
                    <div className="px-3 py-2 rounded-lg bg-[var(--color-surface-1)] border border-[var(--color-border)] text-center text-xs font-medium text-[var(--color-text-primary)] flex items-center gap-2">
                      <Truck size={14} className="text-amber-400" />
                      <span>Shipping (UPS / FedEx)</span>
                    </div>
                  </div>
                </div>

                {/* Solutions list */}
                <div className="mt-6">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)] mb-3">
                    Architectural & Business Capabilities Delivered:
                  </h4>
                  <ul className="grid sm:grid-cols-2 gap-2.5">
                    {cimm2BusinessProblem.after.solutions.map((s, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[var(--color-text-secondary)]">
                        <CheckCircle2 size={14} className="text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
