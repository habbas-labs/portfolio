import { ScrollReveal } from './ScrollReveal';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  heading?: string; // alias for title
  description?: string;
}

export function SectionHeader({ eyebrow, title, heading, description }: SectionHeaderProps) {
  const displayTitle = title || heading || '';

  return (
    <div className="mb-12 max-w-3xl">
      {eyebrow && (
        <ScrollReveal direction="up">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-3">
            {eyebrow}
          </span>
        </ScrollReveal>
      )}

      <ScrollReveal direction="up" delay={0.1}>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-[var(--color-text-primary)]">
          {displayTitle}
        </h2>
      </ScrollReveal>

      {description && (
        <ScrollReveal direction="up" delay={0.2}>
          <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
            {description}
          </p>
        </ScrollReveal>
      )}
    </div>
  );
}
