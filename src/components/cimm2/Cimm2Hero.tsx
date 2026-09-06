import { motion } from 'framer-motion';
import { 
  Building2, 
  Calendar, 
  Users, 
  MapPin, 
  Layers, 
  ArrowRight, 
  Code2, 
  ShieldCheck,
  ExternalLink
} from 'lucide-react';
import { cimm2Meta } from '../../data/cimm2Content';
import { Badge } from '../ui/Badge';
import { useReducedMotion } from '../../hooks/useAnimations';

export function Cimm2Hero() {
  const reduced = useReducedMotion();

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const isDesktop = window.innerWidth >= 768;
      const offset = isDesktop ? 128 : 72;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="cimm2-hero" className="relative pt-8 sm:pt-12 pb-14 sm:pb-20 border-b border-[var(--color-border)] overflow-hidden scroll-mt-24 md:scroll-mt-32">
      {/* Subtle background ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[var(--color-accent)]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Eyebrow & Badges */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-accent-subtle)] border border-[var(--color-border-accent)] text-[var(--color-accent)] text-xs font-semibold uppercase tracking-wider">
            <Layers size={13} /> Enterprise Case Study
          </div>
          <Badge type="VERIFIED" />
          <span className="text-xs text-[var(--color-text-muted)] font-mono">
            {cimm2Meta.duration}
          </span>
        </div>

        {/* Project Title & Subtitle */}
        <motion.h1 
          initial={reduced ? {} : { opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-3xl sm:text-5xl font-extrabold text-[var(--color-text-primary)] tracking-tight"
        >
          {cimm2Meta.projectTitle}
        </motion.h1>

        <motion.p 
          initial={reduced ? {} : { opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.05 }}
          className="text-lg sm:text-2xl font-medium text-[var(--color-accent)] mt-2"
        >
          {cimm2Meta.projectSubtitle}
        </motion.p>

        <motion.p 
          initial={reduced ? {} : { opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="text-base sm:text-lg text-[var(--color-text-secondary)] mt-3 max-w-3xl leading-relaxed"
        >
          {cimm2Meta.tagline}
        </motion.p>

        {/* Project Metadata Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8 p-4 sm:p-5 rounded-xl bg-[var(--color-surface-1)] border border-[var(--color-border)] shadow-sm">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-text-muted)] block mb-1">
              Role
            </span>
            <div className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[var(--color-text-primary)]">
              <Code2 size={14} className="text-[var(--color-accent)] flex-shrink-0" />
              <span>{cimm2Meta.role}</span>
            </div>
          </div>

          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-text-muted)] block mb-1">
              Organization
            </span>
            <div className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[var(--color-text-primary)]">
              <Building2 size={14} className="text-[var(--color-accent)] flex-shrink-0" />
              <span className="truncate">{cimm2Meta.organization}</span>
            </div>
          </div>

          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-text-muted)] block mb-1">
              Location & Team
            </span>
            <div className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[var(--color-text-primary)]">
              <MapPin size={14} className="text-[var(--color-accent)] flex-shrink-0" />
              <span>{cimm2Meta.location} ({cimm2Meta.teamSize})</span>
            </div>
          </div>

          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-text-muted)] block mb-1">
              Domain
            </span>
            <div className="text-xs sm:text-sm font-medium text-[var(--color-text-primary)] truncate">
              B2B / B2C Commerce & ERP
            </div>
          </div>
        </div>

        {/* Technology Pills */}
        <div className="mt-6 flex flex-wrap items-center gap-1.5 sm:gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)] mr-1">
            Stack:
          </span>
          {cimm2Meta.technologies.map(tech => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs rounded-md bg-[var(--color-surface-2)] border border-[var(--color-border)] text-[var(--color-text-secondary)] font-mono"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-8">
          <button
            onClick={() => scrollToSection('cimm2-architecture')}
            className="px-5 py-2.5 rounded-lg bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white text-xs sm:text-sm font-semibold transition-all shadow-md flex items-center gap-2"
          >
            <span>Explore Architecture</span>
            <ArrowRight size={14} />
          </button>
          <button
            onClick={() => scrollToSection('cimm2-flows')}
            className="px-5 py-2.5 rounded-lg bg-[var(--color-surface-2)] hover:bg-[var(--color-surface-3)] text-[var(--color-text-primary)] border border-[var(--color-border)] text-xs sm:text-sm font-semibold transition-all flex items-center gap-2"
          >
            <span>View Engineering Contributions</span>
          </button>
        </div>
      </div>
    </section>
  );
}
