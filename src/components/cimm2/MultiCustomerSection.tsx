import { Building2, CheckCircle2, Layers, Wrench, ShieldCheck } from 'lucide-react';
import { cimm2Customers } from '../../data/cimm2Content';
import { SectionHeader } from '../ui/SectionHeader';

export function MultiCustomerSection() {
  return (
    <section id="cimm2-customers" className="py-14 sm:py-20 border-b border-[var(--color-border)] scroll-mt-24 md:scroll-mt-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="Enterprise Client Portfolio"
          title="One Platform — Multiple Enterprise Implementations"
          description="Customizing and extending core CIMM2 capabilities across diverse industrial distribution verticals with client-specific ERP and shipping integrations."
        />

        {/* Conceptual Architecture Diagram */}
        <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-[var(--color-surface-1)] border border-[var(--color-border)] text-center mb-10 shadow-sm">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--color-accent-subtle)] border border-[var(--color-border-accent)] text-xs sm:text-sm font-bold text-[var(--color-accent)] mb-4">
            <Layers size={16} /> CIMM2 Core E-Commerce Platform & Service Framework
          </div>
          <div className="text-[11px] text-[var(--color-text-muted)] max-w-lg mx-auto mb-4">
            Unified codebase supporting dynamic tenant configuration, customizable ERP adapter bindings, and specialized business rule decorators.
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="p-3 rounded-lg bg-[var(--color-surface-2)] border border-[var(--color-border)] text-xs font-semibold text-[var(--color-text-primary)]">
              ↓ Tenant Config & ERP Binding
            </div>
            <div className="p-3 rounded-lg bg-[var(--color-surface-2)] border border-[var(--color-border)] text-xs font-semibold text-[var(--color-text-primary)]">
              ↓ Solr Tokenizer & Facet Customization
            </div>
            <div className="p-3 rounded-lg bg-[var(--color-surface-2)] border border-[var(--color-border)] text-xs font-semibold text-[var(--color-text-primary)]">
              ↓ B2B/B2C Mode & Carrier APIs
            </div>
          </div>
        </div>

        {/* Customer Implementation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cimm2Customers.map(customer => (
            <div
              key={customer.name}
              className="p-6 rounded-2xl bg-[var(--color-surface-1)] border border-[var(--color-border)] hover:border-[var(--color-border-accent)] transition-all flex flex-col justify-between shadow-md"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[var(--color-accent)]/10 text-[var(--color-accent)] flex items-center justify-center">
                    <Building2 size={16} />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-[var(--color-text-primary)]">
                      {customer.name}
                    </h3>
                    <span className="text-[11px] text-[var(--color-accent)] font-medium">
                      {customer.industry}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed mb-4">
                  {customer.scope}
                </p>

                <div className="space-y-2 pt-3 border-t border-[var(--color-border)]">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--color-text-muted)] block mb-1">
                    Client Customizations:
                  </span>
                  {customer.customizations.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[var(--color-text-secondary)]">
                      <CheckCircle2 size={13} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-[var(--color-border)] flex items-center justify-between text-[11px] text-[var(--color-text-muted)]">
                <span className="flex items-center gap-1">
                  <Wrench size={12} /> Custom Java Adapter
                </span>
                <span className="font-mono">Oct 2015 – Apr 2018</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
