import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Monitor } from 'lucide-react';
import { Link } from 'react-router-dom';
import { profile, techNodes } from '../../data/content';
import { useReducedMotion } from '../../hooks/useAnimations';

const heroTechBadges = ['Java', 'Spring Boot', 'Kafka', 'Microservices', 'AI'];

const ecosystemNodes = techNodes.slice(0, 10);

const categoryColors: Record<string, string> = {
  core: '#3b82f6',
  framework: '#06b6d4',
  data: '#22c55e',
  messaging: '#f59e0b',
  architecture: '#a855f7',
  ai: '#f97316',
  'ai-advanced': '#f43f5e',
};

function EcosystemGraph() {
  const [hovered, setHovered] = useState<string | null>(null);
  const reduced = useReducedMotion();

  const getConnections = useCallback(() => {
    const lines: { x1: number; y1: number; x2: number; y2: number; active: boolean }[] = [];
    ecosystemNodes.forEach(node => {
      node.connections.forEach(targetId => {
        const target = ecosystemNodes.find(n => n.id === targetId);
        if (target) {
          const active = hovered === node.id || hovered === target.id;
          lines.push({ x1: node.x, y1: node.y, x2: target.x, y2: target.y, active });
        }
      });
    });
    return lines;
  }, [hovered]);

  return (
    <div className="relative w-full h-full min-h-[400px]">
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        style={{ filter: 'drop-shadow(0 0 20px rgba(59,130,246,0.1))' }}
      >
        {/* Connection lines */}
        {getConnections().map((line, i) => (
          <line
            key={i}
            x1={line.x1} y1={line.y1}
            x2={line.x2} y2={line.y2}
            stroke={line.active ? '#3b82f6' : 'rgba(59,130,246,0.15)'}
            strokeWidth={line.active ? 0.4 : 0.2}
            strokeDasharray={line.active ? undefined : '1 1'}
            style={{ transition: 'all 0.3s ease' }}
          />
        ))}

        {/* Nodes */}
        {ecosystemNodes.map((node, i) => {
          const isActive = hovered === node.id;
          const isConnected = hovered
            ? ecosystemNodes.find(n => n.id === hovered)?.connections.includes(node.id)
            : false;
          const color = categoryColors[node.category] || '#3b82f6';
          const opacity = hovered ? (isActive || isConnected ? 1 : 0.3) : 0.8;

          return (
            <g
              key={node.id}
              onMouseEnter={() => setHovered(node.id)}
              onMouseLeave={() => setHovered(null)}
              style={{ cursor: 'pointer', transition: 'opacity 0.3s ease' }}
              opacity={opacity}
            >
              {/* Glow */}
              {isActive && (
                <circle cx={node.x} cy={node.y} r={5} fill={color} opacity={0.15}>
                  {!reduced && (
                    <animate attributeName="r" values="5;7;5" dur="2s" repeatCount="indefinite" />
                  )}
                </circle>
              )}
              {/* Node circle */}
              <circle
                cx={node.x} cy={node.y}
                r={isActive ? 3.5 : 2.8}
                fill={isActive ? color : 'var(--color-surface-3)'}
                stroke={color}
                strokeWidth={isActive ? 0.5 : 0.3}
                style={{ transition: 'all 0.3s ease' }}
              />
              {/* Label */}
              <text
                x={node.x}
                y={node.y + (node.y > 80 ? -5 : 6)}
                textAnchor="middle"
                fill={isActive ? '#fafafa' : 'var(--color-text-tertiary)'}
                fontSize={isActive ? 2.8 : 2.2}
                fontFamily="var(--font-sans)"
                fontWeight={isActive ? 600 : 400}
                style={{ transition: 'all 0.3s ease' }}
              >
                {node.label}
              </text>

              {/* Tooltip on hover */}
              {isActive && (
                <foreignObject
                  x={node.x - 18}
                  y={node.y > 50 ? node.y - 18 : node.y + 8}
                  width={36}
                  height={12}
                >
                  <div
                    className="text-center text-[6px] leading-tight text-[var(--color-text-secondary)] bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded px-1 py-0.5"
                    style={{ fontSize: '5px' }}
                  >
                    {node.description.split('.')[0]}
                  </div>
                </foreignObject>
              )}
            </g>
          );
        })}

        {/* Animated pulse dots on connections when not hovering */}
        {!hovered && !reduced && getConnections().slice(0, 4).map((line, i) => (
          <circle key={`pulse-${i}`} r={0.5} fill="#3b82f6" opacity={0.6}>
            <animateMotion
              dur={`${3 + i}s`}
              repeatCount="indefinite"
              path={`M${line.x1},${line.y1} L${line.x2},${line.y2}`}
            />
          </circle>
        ))}
      </svg>
    </div>
  );
}

export function Hero() {
  const reduced = useReducedMotion();
  const anim = reduced ? {} : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-surface-0)] to-[var(--color-surface-0)] opacity-60" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[var(--color-accent)] opacity-[0.03] blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Text */}
          <div>
            {/* Eyebrow */}
            <motion.div {...anim} transition={{ delay: 0.1 }}>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-[var(--color-accent-subtle)] text-[var(--color-accent)] border border-[var(--color-border-accent)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
                Senior Backend Engineer · AI Systems
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              {...anim}
              transition={{ delay: 0.2 }}
              className="mt-6 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.1] text-[var(--color-text-primary)]"
            >
              I Design Systems{' '}
              <br className="hidden sm:block" />
              <span className="gradient-text">Before I Write Code.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              {...anim}
              transition={{ delay: 0.3 }}
              className="mt-6 text-lg text-[var(--color-text-secondary)] max-w-xl leading-relaxed"
            >
              {profile.subheadline}
            </motion.p>

            {/* CTAs */}
            <motion.div {...anim} transition={{ delay: 0.4 }} className="mt-8 flex flex-wrap gap-4">
              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--color-accent)] text-white font-medium text-sm hover:bg-[var(--color-accent-hover)] transition-colors"
              >
                Explore My Work
                <ArrowRight size={16} />
              </a>
              <Link
                to="/interview"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[var(--color-border-hover)] text-[var(--color-text-secondary)] font-medium text-sm hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
              >
                <Monitor size={16} />
                Interview Mode
              </Link>
            </motion.div>

            {/* Tech badges */}
            <motion.div {...anim} transition={{ delay: 0.5 }} className="mt-8 flex flex-wrap gap-2">
              {heroTechBadges.map(tech => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-medium rounded-md bg-[var(--color-surface-2)] text-[var(--color-text-tertiary)] border border-[var(--color-border)]"
                >
                  {tech}
                </span>
              ))}
              <span className="px-2.5 py-1 text-xs text-[var(--color-text-muted)]">
                {profile.yearsExperience}+ years
              </span>
            </motion.div>
          </div>

          {/* Right — Interactive Ecosystem */}
          <motion.div
            initial={reduced ? {} : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-[var(--color-accent-glow)] to-transparent opacity-50" />
              <div className="relative bg-[var(--color-surface-1)] border border-[var(--color-border)] rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-error)] opacity-60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-warning)] opacity-60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-success)] opacity-60" />
                  <span className="ml-2 text-xs text-[var(--color-text-muted)] font-mono">
                    engineering-ecosystem.svg
                  </span>
                </div>
                <EcosystemGraph />
              </div>
            </div>
          </motion.div>

          {/* Mobile simplified tech display */}
          <motion.div
            {...anim}
            transition={{ delay: 0.5 }}
            className="lg:hidden bg-[var(--color-surface-1)] border border-[var(--color-border)] rounded-xl p-4"
          >
            <p className="text-xs text-[var(--color-text-muted)] font-mono mb-3">Technology Ecosystem</p>
            <div className="grid grid-cols-2 gap-2">
              {ecosystemNodes.map(node => (
                <div
                  key={node.id}
                  className="flex items-center gap-2 px-3 py-2 rounded-md bg-[var(--color-surface-2)] border border-[var(--color-border)]"
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: categoryColors[node.category] }}
                  />
                  <span className="text-xs text-[var(--color-text-secondary)]">{node.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
