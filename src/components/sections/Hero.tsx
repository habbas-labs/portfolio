import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Monitor, Clock, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import { profile, techNodes } from '../../data/content';
import { useReducedMotion } from '../../hooks/useAnimations';
import { useModals } from '../../context/ModalContext';
import { isRecruiterEnabled, isConsultantEnabled } from '../../config/portfolioConfig';

const heroTechBadges = ['Java 21', 'Spring Boot 3', 'Kafka', 'Microservices', 'Distributed Systems', 'Spring AI'];

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
  const activeNode = ecosystemNodes.find(n => n.id === hovered);
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
    <div className="flex flex-col">
      {/* Graph Visual Area */}
      <div className="relative w-full h-[420px] sm:h-[460px] lg:h-[490px]">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          style={{ filter: "drop-shadow(0 0 20px rgba(59,130,246,0.1))" }}
        >
          {/* Connection lines */}
          {getConnections().map((line, i) => (
            <line
              key={i}
              x1={line.x1} y1={line.y1}
              x2={line.x2} y2={line.y2}
              stroke={line.active ? "#3b82f6" : "rgba(59,130,246,0.15)"}
              strokeWidth={line.active ? 0.4 : 0.2}
              strokeDasharray={line.active ? undefined : "1 1"}
              style={{ transition: "all 0.3s ease" }}
            />
          ))}

          {/* Nodes */}
          {ecosystemNodes.map((node) => {
            const isActive = hovered === node.id;
            const isConnected = hovered
              ? ecosystemNodes.find(n => n.id === hovered)?.connections.includes(node.id)
              : false;
            const color = categoryColors[node.category] || "#3b82f6";
            const opacity = hovered ? (isActive || isConnected ? 1 : 0.25) : 0.8;

            return (
              <g
                key={node.id}
                onMouseEnter={() => setHovered(node.id)}
                onMouseLeave={() => setHovered(null)}
                style={{ cursor: "pointer", transition: "opacity 0.3s ease" }}
                opacity={opacity}
              >
                {/* Glow */}
                {isActive && (
                  <circle cx={node.x} cy={node.y} r={7} fill={color} opacity={0.22}>
                    {!reduced && (
                      <animate attributeName="r" values="6;8.5;6" dur="2s" repeatCount="indefinite" />
                    )}
                  </circle>
                )}
                {/* Node circle */}
                <circle
                  cx={node.x} cy={node.y}
                  r={isActive ? 4.2 : 3.2}
                  fill={isActive ? color : "var(--color-surface-3)"}
                  stroke={color}
                  strokeWidth={isActive ? 0.75 : 0.4}
                  style={{ transition: "all 0.3s ease" }}
                />
                {/* Label */}
                <text
                  x={node.x}
                  y={node.y + (node.y > 80 ? -5 : 6)}
                  textAnchor="middle"
                  fill={isActive ? "#fafafa" : "var(--color-text-tertiary)"}
                  fontSize={isActive ? 3.2 : 2.5}
                  fontFamily="var(--font-sans)"
                  fontWeight={isActive ? 600 : 400}
                  style={{ transition: "all 0.3s ease" }}
                >
                  {node.label}
                </text>
              </g>
            );
          })}

          {/* Animated pulse dots on connections when not hovering */}
          {!hovered && !reduced && getConnections().slice(0, 4).map((line, i) => (
            <circle key={`pulse-${i}`} r={0.7} fill="#3b82f6" opacity={0.75}>
              <animateMotion
                dur={`${3 + i}s`}
                repeatCount="indefinite"
                path={`M${line.x1},${line.y1} L${line.x2},${line.y2}`}
              />
            </circle>
          ))}
        </svg>
      </div>

      {/* Details Box placed at the bottom with clear distance from graph */}
      <div className="mt-4 min-h-[76px] rounded-xl border border-[var(--color-border-accent)] bg-[var(--color-surface-2)]/95 backdrop-blur-md p-4 transition-all shadow-lg">
        <AnimatePresence mode="wait">
          {activeNode ? (
            <motion.div
              key={activeNode.id}
              initial={{ opacity: 0, y: 3 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -3 }}
              transition={{ duration: 0.15 }}
              className="space-y-1"
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full shrink-0 shadow-sm"
                    style={{ backgroundColor: categoryColors[activeNode.category] || "#3b82f6" }}
                  />
                  <span className="text-xs font-bold text-[var(--color-text-primary)]">
                    {activeNode.label}
                  </span>
                  <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-[var(--color-surface-3)] text-[var(--color-text-tertiary)] border border-[var(--color-border)]">
                    {activeNode.category}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[var(--color-accent)] shrink-0">
                  {activeNode.connections.length} Connected Links
                </span>
              </div>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                {activeNode.description}
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="idle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="h-full flex items-center justify-center py-2 text-xs text-[var(--color-text-tertiary)] font-mono"
            >
              <span className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
                Hover over any node (Java, Kafka, Microservices...) to inspect architecture details
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export function Hero() {
  const { openRecruiter, openClient } = useModals();
  const showRecruiter = isRecruiterEnabled();
  const showConsultant = isConsultantEnabled();
  const reduced = useReducedMotion();
  const anim = reduced ? {} : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };

  const eyebrowText = showRecruiter && showConsultant
    ? 'Senior Backend Engineer · Technology Consultant · Distributed & AI Systems'
    : showConsultant
      ? 'Senior Backend Engineer · Technology Consultant · Distributed Systems'
      : 'Senior Backend Engineer · Distributed Systems · AI Systems';

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
                {eyebrowText}
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
            <motion.div {...anim} transition={{ delay: 0.4 }} className="mt-8 flex flex-wrap gap-3">
              {showConsultant && (
                <a
                  href="#consulting"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--color-accent)] text-white font-semibold text-sm hover:bg-[var(--color-accent-hover)] transition-all shadow-lg shadow-blue-500/20 hover:scale-105"
                >
                  Work With Me
                  <ArrowRight size={16} />
                </a>
              )}

              {showConsultant && (
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-2)] text-[var(--color-text-primary)] font-semibold text-sm hover:bg-[var(--color-surface-3)] transition-colors"
                >
                  Explore Projects
                </a>
              )}

              {!showConsultant && (
                <a
                  href="#experience"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--color-accent)] text-white font-semibold text-sm hover:bg-[var(--color-accent-hover)] transition-all shadow-lg shadow-blue-500/20 hover:scale-105"
                >
                  Explore My Work
                  <ArrowRight size={16} />
                </a>
              )}

              {showRecruiter && (
                <Link
                  to="/interview"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-[var(--color-border-hover)] text-[var(--color-text-secondary)] font-medium text-sm hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
                >
                  <Monitor size={16} />
                  Interview Mode
                </Link>
              )}

              {showConsultant && (
                <button
                  onClick={openClient}
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-medium text-sm hover:bg-emerald-500 hover:text-white transition-all"
                  title="Client & Founder Fast-Path"
                >
                  <Briefcase size={16} />
                  Client 60s
                </button>
              )}

              {showRecruiter && (
                <button
                  onClick={openRecruiter}
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400 font-medium text-sm hover:bg-blue-500 hover:text-white transition-all"
                  title="Recruiter Fast-Path"
                >
                  <Clock size={16} />
                  Recruiter 30s
                </button>
              )}
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
                {profile.yearsExperience}+ years enterprise experience
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
              <div className="relative rounded-2xl glass-panel p-6 sm:p-7 border border-[var(--color-border-accent)] shadow-2xl">
                <div className="text-xs font-mono text-[var(--color-text-tertiary)] mb-2 flex items-center justify-between">
                  <span>SYSTEM ECOSYSTEM GRAPH</span>
                  <span className="text-[var(--color-accent)] font-semibold">Hover to trace flows</span>
                </div>
                <EcosystemGraph />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
