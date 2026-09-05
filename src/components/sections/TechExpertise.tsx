import { skills } from '../../data/content';
import { SectionHeader } from '../ui/SectionHeader';
import { ScrollReveal } from '../ui/ScrollReveal';
import { useState } from 'react';

const categories = [
  { key: 'core', label: 'Core' },
  { key: 'framework', label: 'Frameworks' },
  { key: 'data', label: 'Data' },
  { key: 'devops', label: 'DevOps' },
  { key: 'ai', label: 'AI' },
  { key: 'other', label: 'Other' },
];

const proficiencyLevels: Record<string, { level: number; color: string }> = {
  Expert: { level: 4, color: '#3b82f6' },
  Strong: { level: 3, color: '#06b6d4' },
  Comfortable: { level: 2, color: '#22c55e' },
  Working: { level: 1, color: '#f59e0b' },
  Learning: { level: 0.5, color: '#a855f7' },
};

function ProficiencyIndicator({ proficiency }: { proficiency: string }) {
  const info = proficiencyLevels[proficiency] || { level: 0, color: '#71717a' };
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex gap-0.5">
        {[1, 2, 3, 4].map(i => (
          <div
            key={i}
            className="w-1.5 h-5 rounded-sm transition-colors"
            style={{
              backgroundColor: i <= info.level
                ? info.color
                : i - 0.5 <= info.level
                  ? `${info.color}50`
                  : 'var(--color-surface-3)',
            }}
          />
        ))}
      </div>
      <span className="text-[10px] font-medium" style={{ color: info.color }}>
        {proficiency}
      </span>
    </div>
  );
}

export function TechExpertise() {
  const [activeCategory, setActiveCategory] = useState('core');
  const filtered = skills.filter(s => s.category === activeCategory);

  return (
    <section id="expertise" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Skills & Proficiency"
          title="Technical Expertise"
          description="Honest proficiency levels — not everything at 95%. Expert where it matters, learning where it's new."
        />

        {/* Category tabs */}
        <div className="mt-12 flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 text-sm rounded-lg font-medium transition-all ${
                activeCategory === cat.key
                  ? 'bg-[var(--color-accent)] text-white'
                  : 'bg-[var(--color-surface-2)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] border border-[var(--color-border)]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {filtered.map((skill, i) => (
            <ScrollReveal key={skill.name} delay={i * 0.05}>
              <div className="p-4 rounded-xl bg-[var(--color-surface-1)] border border-[var(--color-border)] card-hover">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-[var(--color-text-primary)]">
                    {skill.name}
                  </h3>
                  <ProficiencyIndicator proficiency={skill.proficiency} />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Proficiency legend */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          {Object.entries(proficiencyLevels).map(([name, info]) => (
            <div key={name} className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: info.color }} />
              <span className="text-xs text-[var(--color-text-muted)]">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
