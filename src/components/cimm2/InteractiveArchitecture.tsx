import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Server, 
  Search, 
  Cpu, 
  Truck, 
  Database, 
  ArrowDown, 
  ArrowRight, 
  CheckCircle2, 
  Code2, 
  Info, 
  ExternalLink,
  Layers
} from 'lucide-react';
import { cimm2ArchitectureNodes, type Cimm2SystemNode } from '../../data/cimm2Content';
import { SectionHeader } from '../ui/SectionHeader';
import { useReducedMotion } from '../../hooks/useAnimations';

export function InteractiveArchitecture() {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('erp-adapter');
  const reduced = useReducedMotion();

  const selectedNode = cimm2ArchitectureNodes.find(n => n.id === selectedNodeId) || cimm2ArchitectureNodes[0];

  const getNodeBorderColor = (id: string) => {
    if (selectedNodeId === id) return 'border-[var(--color-accent)] ring-2 ring-[var(--color-accent)]/30 bg-[var(--color-surface-2)]';
    return 'border-[var(--color-border)] hover:border-[var(--color-border-hover)] bg-[var(--color-surface-1)]';
  };

  return (
    <section id="cimm2-architecture" className="py-16 sm:py-20 border-b border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="System Blueprint"
          title="Interactive Enterprise Architecture"
          description="Deconstructed enterprise multi-tier architecture connecting commerce storefronts, search indexing, ERP adapters, and external logistics APIs."
        />

        {/* Disclaimer Callout */}
        <div className="mt-4 p-3 rounded-lg bg-[var(--color-surface-2)]/60 border border-[var(--color-border)] flex items-center justify-between gap-3 text-xs text-[var(--color-text-secondary)]">
          <div className="flex items-center gap-2">
            <Info size={14} className="text-[var(--color-accent)] flex-shrink-0" />
            <span><strong>Architecture Note:</strong> Simplified representation of multi-tier enterprise architecture based on project implementation.</span>
          </div>
          <span className="hidden sm:inline text-[11px] font-mono text-[var(--color-text-muted)]">Java • Spring • XML • Solr</span>
        </div>

        {/* Layout Grid: Architecture Diagram (Left/Top) + Interactive Node Inspector (Right/Bottom) */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Interactive Topology Graph */}
          <div className="lg:col-span-7 bg-[var(--color-surface-1)] border border-[var(--color-border)] rounded-2xl p-5 sm:p-6 shadow-lg space-y-4">
            
            {/* Top Level: Customer Layer */}
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-surface-2)] border border-[var(--color-border)] text-xs font-semibold text-[var(--color-text-secondary)]">
                <span>Distributor B2B Buyers & Retail B2C Consumers</span>
              </div>
              <div className="flex justify-center my-1.5">
                <ArrowDown size={16} className="text-[var(--color-text-muted)] animate-bounce" />
              </div>
            </div>

            {/* Core Layer: CIMM2 Platform Node */}
            <div 
              onClick={() => setSelectedNodeId('cimm2-core')}
              className={`p-4 rounded-xl border transition-all cursor-pointer ${getNodeBorderColor('cimm2-core')}`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center">
                    <Server size={16} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[var(--color-text-primary)]">CIMM2 Core Commerce Platform</h4>
                    <p className="text-[11px] text-[var(--color-text-muted)]">Enterprise Presentation & Service Engine</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--color-surface-3)] text-[var(--color-accent)]">
                  Click to inspect
                </span>
              </div>

              {/* Subsystems grid */}
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-1.5 pt-2 border-t border-[var(--color-border)] text-center text-[10px] text-[var(--color-text-secondary)]">
                <div className="p-1 rounded bg-[var(--color-surface-2)]">Catalog</div>
                <div className="p-1 rounded bg-[var(--color-surface-2)]">Users & Roles</div>
                <div className="p-1 rounded bg-[var(--color-surface-2)]">Pricing Rules</div>
                <div className="p-1 rounded bg-[var(--color-surface-2)]">Branch Stock</div>
                <div className="p-1 rounded bg-[var(--color-surface-2)]">Checkout</div>
              </div>
            </div>

            {/* Middle Connectors */}
            <div className="grid grid-cols-3 gap-3 text-center my-1">
              <div className="flex justify-center"><ArrowDown size={16} className="text-[var(--color-text-muted)]" /></div>
              <div className="flex justify-center"><ArrowDown size={16} className="text-[var(--color-accent)] font-bold" /></div>
              <div className="flex justify-center"><ArrowDown size={16} className="text-[var(--color-text-muted)]" /></div>
            </div>

            {/* Integration Tier: Search | ERP Adapter | Shipping */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              
              {/* Apache Solr Node */}
              <div
                onClick={() => setSelectedNodeId('solr-search')}
                className={`p-3.5 rounded-xl border transition-all cursor-pointer ${getNodeBorderColor('solr-search')}`}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-6 h-6 rounded-md bg-amber-500/10 text-amber-400 flex items-center justify-center">
                    <Search size={14} />
                  </div>
                  <span className="text-xs font-bold text-[var(--color-text-primary)]">Apache Solr</span>
                </div>
                <p className="text-[11px] text-[var(--color-text-secondary)] line-clamp-2">
                  Product discovery, faceted navigation, indexing.
                </p>
              </div>

              {/* ERP Adapter Node (Highlighted) */}
              <div
                onClick={() => setSelectedNodeId('erp-adapter')}
                className={`p-3.5 rounded-xl border transition-all cursor-pointer relative ${getNodeBorderColor('erp-adapter')}`}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-6 h-6 rounded-md bg-[var(--color-accent)]/10 text-[var(--color-accent)] flex items-center justify-center">
                    <Cpu size={14} />
                  </div>
                  <span className="text-xs font-bold text-[var(--color-text-primary)]">ERP Adapter</span>
                </div>
                <p className="text-[11px] text-[var(--color-text-secondary)] line-clamp-2">
                  XML protocol insulation & ERP abstraction layer.
                </p>
              </div>

              {/* Shipping APIs Node */}
              <div
                onClick={() => setSelectedNodeId('shipping-apis')}
                className={`p-3.5 rounded-xl border transition-all cursor-pointer ${getNodeBorderColor('shipping-apis')}`}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-6 h-6 rounded-md bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                    <Truck size={14} />
                  </div>
                  <span className="text-xs font-bold text-[var(--color-text-primary)]">Shipping APIs</span>
                </div>
                <p className="text-[11px] text-[var(--color-text-secondary)] line-clamp-2">
                  UPS & FedEx real-time rating and tracking.
                </p>
              </div>
            </div>

            {/* ERP Adapter downstream connector */}
            <div className="flex justify-center my-1">
              <ArrowDown size={16} className="text-[var(--color-accent)]" />
            </div>

            {/* Enterprise Backend Node: Epicor & Infor SX */}
            <div
              onClick={() => setSelectedNodeId('epicor-infor')}
              className={`p-4 rounded-xl border transition-all cursor-pointer ${getNodeBorderColor('epicor-infor')}`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                    <Database size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[var(--color-text-primary)]">
                      Customer ERP Backends (Epicor & Infor SX)
                    </h4>
                    <p className="text-[11px] text-[var(--color-text-muted)]">On-premise enterprise records & financial ledger</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-[var(--color-text-secondary)]">XML Requests</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-[var(--color-text-secondary)] pt-2 border-t border-[var(--color-border)]">
                <span className="px-2 py-0.5 rounded bg-[var(--color-surface-2)] font-mono">Epicor ERP</span>
                <span className="px-2 py-0.5 rounded bg-[var(--color-surface-2)] font-mono">Infor SX ERP</span>
                <span className="text-[var(--color-text-muted)] ml-auto">Transactional Source of Truth</span>
              </div>
            </div>

          </div>

          {/* Detailed Inspector Panel (Right) */}
          <div className="lg:col-span-5 bg-[var(--color-surface-1)] border border-[var(--color-border)] rounded-2xl p-5 sm:p-6 shadow-lg">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[var(--color-border)]">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--color-accent)]">
                  Subsystem Inspector
                </span>
                <h3 className="text-base sm:text-lg font-bold text-[var(--color-text-primary)]">
                  {selectedNode.name}
                </h3>
              </div>
              <div className="px-2.5 py-1 rounded-md bg-[var(--color-surface-2)] border border-[var(--color-border)] text-xs font-mono text-[var(--color-text-secondary)]">
                {selectedNode.subtitle}
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">
              {selectedNode.description}
            </p>

            {/* Core Responsibilities */}
            <div className="mt-5">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)] mb-3">
                Key Technical Responsibilities
              </h4>
              <ul className="space-y-2">
                {selectedNode.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[var(--color-text-secondary)]">
                    <CheckCircle2 size={14} className="text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technology Stack Tags */}
            <div className="mt-5 pt-4 border-t border-[var(--color-border)]">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)] mb-2">
                Implementation Stack
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedNode.techStack.map(tech => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded text-[11px] font-mono bg-[var(--color-surface-2)] text-[var(--color-text-primary)] border border-[var(--color-border)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
