import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { techNodes } from '../../data/content';
import { SectionHeader } from '../ui/SectionHeader';
import { ScrollReveal } from '../ui/ScrollReveal';
import { useReducedMotion } from '../../hooks/useAnimations';

const categoryColors: Record<string, string> = {
  core: '#3b82f6',
  framework: '#06b6d4',
  data: '#22c55e',
  messaging: '#f59e0b',
  architecture: '#a855f7',
  ai: '#f97316',
  'ai-advanced': '#f43f5e',
};

const categoryLabels: Record<string, string> = {
  core: 'Core Engineering',
  framework: 'Frameworks',
  data: 'Data & Infrastructure',
  messaging: 'Messaging',
  architecture: 'Architecture',
  ai: 'AI Engineering',
  'ai-advanced': 'Advanced AI',
};

export function KnowledgeMap() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [selected, setSelected] = useState<string | null>(null);
  const reduced = useReducedMotion();

  const getConnections = useCallback(() => {
    const lines: { from: typeof techNodes[0]; to: typeof techNodes[0]; active: boolean }[] = [];
    const seen = new Set<string>();
    techNodes.forEach(node => {
      node.connections.forEach(targetId => {
        const key = [node.id, targetId].sort().join('-');
        if (seen.has(key)) return;
        seen.add(key);
        const target = techNodes.find(n => n.id === targetId);
        if (target) {
          const active = hovered === node.id || hovered === target.id;
          lines.push({ from: node, to: target, active });
        }
      });
    });
    return lines;
  }, [hovered]);

  const activeNode = selected ? techNodes.find(n => n.id === selected) : null;

  return (
    <section id="knowledge-map" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Technology Landscape"
          title="Engineering Knowledge Map"
          description="An interconnected map of technologies, patterns, and architectures — explore the relationships."
        />

        {/* Desktop: SVG Graph */}
        <ScrollReveal>
          <div className="mt-12 hidden md:block">
            <div className="relative bg-[var(--color-surface-1)] border border-[var(--color-border)] rounded-2xl p-8">
              {/* Legend */}
              <div className="flex flex-wrap gap-4 mb-6">
                {Object.entries(categoryLabels).map(([key, label]) => (
                  <div key={key} className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: categoryColors[key] }} />
                    <span className="text-xs text-[var(--color-text-muted)]">{label}</span>
                  </div>
                ))}
              </div>

              <svg viewBox="0 0 100 105" className="w-full" style={{ minHeight: '400px' }}>
                {/* Connections */}
                {getConnections().map((conn, i) => {
                  const mx = (conn.from.x + conn.to.x) / 2;
                  const my = (conn.from.y + conn.to.y) / 2 - 5;
                  return (
                    <path
                      key={i}
                      d={`M${conn.from.x},${conn.from.y} Q${mx},${my} ${conn.to.x},${conn.to.y}`}
                      fill="none"
                      stroke={conn.active ? '#3b82f6' : 'rgba(59,130,246,0.12)'}
                      strokeWidth={conn.active ? 0.4 : 0.2}
                      style={{ transition: 'all 0.3s ease' }}
                    />
                  );
                })}

                {/* Nodes */}
                {techNodes.map(node => {
                  const isHovered = hovered === node.id;
                  const isConnected = hovered
                    ? techNodes.find(n => n.id === hovered)?.connections.includes(node.id) || false
                    : false;
                  const isSelected = selected === node.id;
                  const color = categoryColors[node.category];
                  const opacity = hovered ? (isHovered || isConnected ? 1 : 0.3) : 0.9;

                  return (
                    <g
                      key={node.id}
                      onMouseEnter={() => setHovered(node.id)}
                      onMouseLeave={() => setHovered(null)}
                      onClick={() => setSelected(selected === node.id ? null : node.id)}
                      style={{ cursor: 'pointer' }}
                      opacity={opacity}
                    >
                      {/* Outer ring for selected */}
                      {isSelected && (
                        <circle cx={node.x} cy={node.y} r={5} fill="none" stroke={color} strokeWidth={0.3} strokeDasharray="1 1" />
                      )}
                      <rect
                        x={node.x - 8}
                        y={node.y - 3}
                        width={16}
                        height={6}
                        rx={1.5}
                        fill={isHovered || isSelected ? color : 'var(--color-surface-3)'}
                        stroke={color}
                        strokeWidth={0.3}
                        style={{ transition: 'all 0.3s ease' }}
                        opacity={isHovered || isSelected ? 1 : 0.8}
                      />
                      <text
                        x={node.x}
                        y={node.y + 1}
                        textAnchor="middle"
                        fill={isHovered || isSelected ? '#ffffff' : 'var(--color-text-secondary)'}
                        fontSize={2}
                        fontFamily="var(--font-sans)"
                        fontWeight={isHovered ? 600 : 400}
                        style={{ transition: 'fill 0.3s ease' }}
                      >
                        {node.label}
                      </text>
                    </g>
                  );
                })}
              </svg>

              {/* Detail panel */}
              {activeNode && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 rounded-lg bg-[var(--color-surface-2)] border border-[var(--color-border)]"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: categoryColors[activeNode.category] }} />
                    <h4 className="text-sm font-semibold text-[var(--color-text-primary)]">{activeNode.label}</h4>
                    <span className="text-xs text-[var(--color-text-muted)]">
                      {categoryLabels[activeNode.category]}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--color-text-secondary)]">{activeNode.description}</p>
                  <div className="mt-2 flex gap-2">
                    <span className="text-xs text-[var(--color-text-muted)]">Connected to:</span>
                    {activeNode.connections.map(c => (
                      <span key={c} className="text-xs text-[var(--color-accent)]">
                        {techNodes.find(n => n.id === c)?.label}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </ScrollReveal>

        {/* Mobile: Grouped list */}
        <div className="mt-12 md:hidden space-y-6">
          {Object.entries(categoryLabels).map(([key, label]) => {
            const nodes = techNodes.filter(n => n.category === key);
            if (nodes.length === 0) return null;
            return (
              <div key={key}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: categoryColors[key] }} />
                  <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">{label}</span>
                </div>
                <div className="space-y-2">
                  {nodes.map(node => (
                    <button
                      key={node.id}
                      onClick={() => setSelected(selected === node.id ? null : node.id)}
                      className={`w-full text-left p-3 rounded-lg border transition-all ${
                        selected === node.id
                          ? 'bg-[var(--color-accent-subtle)] border-[var(--color-border-accent)]'
                          : 'bg-[var(--color-surface-1)] border-[var(--color-border)] hover:border-[var(--color-border-hover)]'
                      }`}
                    >
                      <span className="text-sm font-medium text-[var(--color-text-primary)]">{node.label}</span>
                      {selected === node.id && (
                        <p className="mt-1 text-xs text-[var(--color-text-secondary)]">{node.description}</p>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
