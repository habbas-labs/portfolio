import type { ContentStatus } from '../../types';

type BadgeType = string; // Accept any proficiency or ContentStatus string

interface BadgeProps {
  type: BadgeType;
  label?: string;
  className?: string;
}

const colorMap: Record<string, string> = {
  Expert: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  Strong: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  Comfortable: 'bg-green-500/10 text-green-400 border-green-500/20',
  Working: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  Learning: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  VERIFIED: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  'USER-PROVIDED': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  'PUBLIC-CONTEXT': 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  PROVISIONAL: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  PLACEHOLDER: 'bg-zinc-500/10 text-zinc-400 border-zinc-500/20',
};

export function Badge({ type, label, className = '' }: BadgeProps) {
  const colors = colorMap[type] || 'bg-[var(--color-surface-2)] text-[var(--color-text-secondary)] border-[var(--color-border)]';
  const displayLabel = label || type;

  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium border ${colors} ${className}`}>
      {displayLabel}
    </span>
  );
}
