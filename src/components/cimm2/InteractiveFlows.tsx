import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Cpu, 
  UserCheck, 
  ShoppingCart, 
  Truck, 
  Database, 
  Sliders, 
  ArrowRight, 
  CheckCircle2, 
  FileCode2, 
  ChevronRight,
  Sparkles,
  RefreshCw,
  Info
} from 'lucide-react';
import { 
  productDiscoverySteps, 
  erpIntegrationSteps, 
  b2bJourneySteps, 
  b2cJourneySteps, 
  shippingFlowSteps, 
  catalogPipelineSteps, 
  type Cimm2FlowStep 
} from '../../data/cimm2Content';
import { SectionHeader } from '../ui/SectionHeader';
import { useReducedMotion } from '../../hooks/useAnimations';

type FlowKey = 'discovery' | 'erp' | 'b2b-b2c' | 'shipping' | 'catalog' | 'rules';

export function InteractiveFlows() {
  const [activeFlow, setActiveFlow] = useState<FlowKey>('erp');
  const [b2bMode, setB2bMode] = useState<'b2b' | 'b2c'>('b2b');
  const [selectedStepIndex, setSelectedStepIndex] = useState<number>(0);
  const reduced = useReducedMotion();

  const flowTabs = [
    { id: 'discovery', label: '1. Product Discovery (Solr)', icon: Search },
    { id: 'erp', label: '2. ERP Integration (XML)', icon: Cpu },
    { id: 'b2b-b2c', label: '3 & 4. B2B vs B2C Journey', icon: UserCheck },
    { id: 'shipping', label: '5. Carrier Freight (UPS/FedEx)', icon: Truck },
    { id: 'catalog', label: '6. Product Catalog Pipeline', icon: Database },
    { id: 'rules', label: '7. Customer Business Rules', icon: Sliders },
  ];

  // Determine active steps
  const getCurrentSteps = (): Cimm2FlowStep[] => {
    switch (activeFlow) {
      case 'discovery':
        return productDiscoverySteps;
      case 'erp':
        return erpIntegrationSteps;
      case 'b2b-b2c':
        return b2bMode === 'b2b' ? b2bJourneySteps : b2cJourneySteps;
      case 'shipping':
        return shippingFlowSteps;
      case 'catalog':
        return catalogPipelineSteps;
      case 'rules':
        return [
          {
            id: 'rule-1',
            step: 1,
            label: 'Customer Identification',
            sublabel: 'Account & Branch Context',
            description: 'Customer logs into CIMM2; system identifies tenant company, branch hierarchy, and credit classification.',
            technicalDetails: 'User credentials validated against enterprise account tables; security context holds company ID and branch codes.',
          },
          {
            id: 'rule-2',
            step: 2,
            label: 'Entitlement Rules Evaluation',
            sublabel: 'Catalog & Category Filtering',
            description: 'Business rules filter out non-entitled categories or restricted product lines based on contract agreements.',
            technicalDetails: 'Filter queries applied dynamically to Solr query handlers to prevent unauthorized SKU discovery.',
          },
          {
            id: 'rule-3',
            step: 3,
            label: 'Contract Pricing Resolution',
            sublabel: 'Custom Tier & Matrix Engine',
            description: 'Custom pricing matrix is applied: cost-plus, column discount, or fixed customer contract pricing.',
            technicalDetails: 'Pricing engine checks cached price matrix or invokes ERP XML adapter for live contractual quote.',
          },
          {
            id: 'rule-4',
            step: 4,
            label: 'Branch Warehouse Allocation',
            sublabel: 'Inventory Fulfillment Rules',
            description: 'Stock availability rules direct order lines to the closest stocking regional distribution center.',
            technicalDetails: 'Inventory lookup checks primary branch stock, followed by secondary transfer depots and vendor drop-ship rules.',
          },
          {
            id: 'rule-5',
            step: 5,
            label: 'Commerce Experience Output',
            sublabel: 'Tailored B2B Purchasing',
            description: 'Buyer experiences a storefront completely tailored to their specific enterprise contract terms and purchasing limits.',
            technicalDetails: 'Checkout workflows enforce purchase order (PO) format validation and credit line balance checks.',
          },
        ];
      default:
        return erpIntegrationSteps;
    }
  };

  const steps = getCurrentSteps();
  const safeStepIndex = selectedStepIndex < steps.length ? selectedStepIndex : 0;
  const currentStep = steps[safeStepIndex];

  const handleFlowSwitch = (key: FlowKey) => {
    setActiveFlow(key);
    setSelectedStepIndex(0);
  };

  return (
    <section id="cimm2-flows" className="py-16 sm:py-20 border-b border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="Technical Workflows"
          title="Interactive System Flows & Integrations"
          description="Detailed execution sequences illustrating data movement across Solr search, XML ERP adapters, customer pricing matrices, and logistics carrier APIs."
        />

        {/* Flow Selector Tabs */}
        <div className="mt-8 flex flex-wrap gap-2 pb-2 overflow-x-auto scrollbar-none">
          {flowTabs.map(tab => {
            const Icon = tab.icon;
            const isActive = activeFlow === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleFlowSwitch(tab.id as FlowKey)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 border ${
                  isActive
                    ? 'bg-[var(--color-accent)] text-white border-[var(--color-accent)] shadow-sm'
                    : 'bg-[var(--color-surface-1)] text-[var(--color-text-secondary)] border-[var(--color-border)] hover:bg-[var(--color-surface-2)] hover:text-white'
                }`}
              >
                <Icon size={14} className={isActive ? 'text-white' : 'text-[var(--color-accent)]'} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* B2B / B2C Dual Toggle (Shown only for flow 3 & 4) */}
        {activeFlow === 'b2b-b2c' && (
          <div className="mt-4 flex items-center justify-between p-3 rounded-xl bg-[var(--color-surface-2)] border border-[var(--color-border)]">
            <div className="flex items-center gap-2 text-xs text-[var(--color-text-secondary)]">
              <Info size={14} className="text-[var(--color-accent)]" />
              <span>Toggle customer persona to inspect contrasting enterprise workflows:</span>
            </div>
            <div className="flex gap-1 p-0.5 rounded-lg bg-[var(--color-surface-1)] border border-[var(--color-border)]">
              <button
                onClick={() => { setB2bMode('b2b'); setSelectedStepIndex(0); }}
                className={`px-3 py-1 rounded text-xs font-bold uppercase tracking-wider transition-all ${
                  b2bMode === 'b2b'
                    ? 'bg-[var(--color-accent)] text-white shadow-sm'
                    : 'text-[var(--color-text-secondary)] hover:text-white'
                }`}
              >
                B2B Enterprise Flow
              </button>
              <button
                onClick={() => { setB2bMode('b2c'); setSelectedStepIndex(0); }}
                className={`px-3 py-1 rounded text-xs font-bold uppercase tracking-wider transition-all ${
                  b2bMode === 'b2c'
                    ? 'bg-amber-500 text-white shadow-sm'
                    : 'text-[var(--color-text-secondary)] hover:text-white'
                }`}
              >
                B2C Retail Flow
              </button>
            </div>
          </div>
        )}

        {/* Flow Visualizer Box */}
        <div className="mt-6 bg-[var(--color-surface-1)] border border-[var(--color-border)] rounded-2xl p-5 sm:p-8 shadow-xl">
          
          {/* Header Info */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 mb-6 border-b border-[var(--color-border)]">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--color-accent)]">
                Workflow Visualizer
              </span>
              <h3 className="text-base sm:text-xl font-bold text-[var(--color-text-primary)]">
                {activeFlow === 'discovery' && 'Customer Product Discovery Flow (Apache Solr)'}
                {activeFlow === 'erp' && 'ERP Request/Response Integration Flow (XML Adapter)'}
                {activeFlow === 'b2b-b2c' && (b2bMode === 'b2b' ? 'B2B Enterprise Customer Journey' : 'B2C Retail Consumer Journey')}
                {activeFlow === 'shipping' && 'Shipping & Multi-Carrier Freight Integration (UPS & FedEx)'}
                {activeFlow === 'catalog' && 'Product Catalog & Search Index Pipeline'}
                {activeFlow === 'rules' && 'Customer-Specific Business Rules Architecture'}
              </h3>
            </div>
            <div className="text-xs text-[var(--color-text-muted)] font-mono">
              Step {safeStepIndex + 1} of {steps.length}
            </div>
          </div>

          {/* Stepper Progression Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-8">
            {steps.map((s, idx) => {
              const isCurrent = idx === safeStepIndex;
              const isPast = idx < safeStepIndex;
              return (
                <button
                  key={s.id}
                  onClick={() => setSelectedStepIndex(idx)}
                  className={`p-2.5 rounded-xl border text-left transition-all relative ${
                    isCurrent
                      ? 'border-[var(--color-accent)] bg-[var(--color-surface-2)] ring-2 ring-[var(--color-accent)]/20'
                      : isPast
                      ? 'border-[var(--color-border)] bg-[var(--color-surface-2)]/40 hover:bg-[var(--color-surface-2)]'
                      : 'border-[var(--color-border)] bg-[var(--color-surface-1)] opacity-70 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-[10px] font-mono font-bold ${isCurrent ? 'text-[var(--color-accent)]' : 'text-[var(--color-text-muted)]'}`}>
                      Step 0{s.step}
                    </span>
                    {isPast && <CheckCircle2 size={12} className="text-emerald-400" />}
                  </div>
                  <div className="text-xs font-semibold text-[var(--color-text-primary)] truncate">
                    {s.label}
                  </div>
                  <div className="text-[10px] text-[var(--color-text-muted)] truncate">
                    {s.sublabel}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Step Deep Dive Detail Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeFlow}-${b2bMode}-${currentStep.id}`}
              initial={reduced ? {} : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="p-5 sm:p-6 rounded-xl bg-[var(--color-surface-2)] border border-[var(--color-border)]"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-[var(--color-accent)]/10 text-[var(--color-accent)] flex items-center justify-center font-bold text-xs">
                    0{currentStep.step}
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-[var(--color-text-primary)]">
                      {currentStep.label}
                    </h4>
                    <span className="text-xs text-[var(--color-accent)] font-medium">
                      {currentStep.sublabel}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    disabled={safeStepIndex === 0}
                    onClick={() => setSelectedStepIndex(Math.max(0, safeStepIndex - 1))}
                    className="px-2.5 py-1 text-xs rounded border border-[var(--color-border)] disabled:opacity-30 hover:bg-[var(--color-surface-3)] text-[var(--color-text-secondary)]"
                  >
                    Previous
                  </button>
                  <button
                    disabled={safeStepIndex === steps.length - 1}
                    onClick={() => setSelectedStepIndex(Math.min(steps.length - 1, safeStepIndex + 1))}
                    className="px-2.5 py-1 text-xs rounded bg-[var(--color-accent)] text-white disabled:opacity-30 hover:bg-[var(--color-accent-hover)] font-medium"
                  >
                    Next Step
                  </button>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed mt-2">
                {currentStep.description}
              </p>

              {/* Technical Implementation Note */}
              <div className="mt-4 pt-3 border-t border-[var(--color-border)] flex items-start gap-2 text-xs">
                <FileCode2 size={15} className="text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[var(--color-text-primary)] block mb-0.5">
                    Engineering Implementation Detail:
                  </span>
                  <span className="font-mono text-[11px] text-[var(--color-text-secondary)]">
                    {currentStep.technicalDetails}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* XML Packet Simulation for ERP Integration */}
          {activeFlow === 'erp' && (
            <div className="mt-6 p-4 rounded-xl bg-[var(--color-surface-0)] border border-[var(--color-border)] font-mono text-[11px] overflow-x-auto">
              <div className="flex items-center justify-between text-[var(--color-text-muted)] mb-2 border-b border-[var(--color-border)] pb-1.5">
                <span className="flex items-center gap-1.5 text-xs text-[var(--color-accent)] font-semibold">
                  <FileCode2 size={13} /> Sanitized XML Request / Response Simulation
                </span>
                <span className="text-[10px]">ERP Integration Adaptor</span>
              </div>
              <pre className="text-emerald-400 leading-tight">
{`<!-- Outgoing Adapter XML Request to Epicor / Infor SX -->
<ERPPriceRequest tenant="PSC-Distribution">
  <CustomerAccount ID="CUST-40918" Branch="BR-04" />
  <LineItems>
    <Item PartNumber="PEX-PIPE-100FT" Qty="50" UOM="ROLL" />
    <Item PartNumber="BALL-VALVE-BRASS-3-4" Qty="200" UOM="EA" />
  </LineItems>
</ERPPriceRequest>

<!-- Incoming ERP XML Response Normalized by Adapter -->
<ERPPriceResponse status="SUCCESS" authorizationCode="AUTH-99214">
  <LineItem PartNumber="PEX-PIPE-100FT" UnitPrice="42.50" AvailableQty="180" Warehouse="DC-EAST" />
  <LineItem PartNumber="BALL-VALVE-BRASS-3-4" UnitPrice="6.85" AvailableQty="540" Warehouse="DC-EAST" />
</ERPPriceResponse>`}
              </pre>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
