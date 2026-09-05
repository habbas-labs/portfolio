import React from 'react';
import { LucideIcon } from 'lucide-react';

interface CardProps {
  children: React.ReactNode;
  title?: string;
  icon?: LucideIcon;
  onClick?: () => void;
  className?: string;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  title,
  icon: Icon,
  onClick,
  className = '',
  hoverEffect = true,
}) => {
  const Component = onClick ? 'button' : 'div';
  const interactiveProps = onClick ? { onClick, type: 'button' as const } : {};

  return (
    <Component
      {...interactiveProps}
      className={`block w-full text-left rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-2)] p-6 transition-all duration-300 ${
        hoverEffect ? 'hover:bg-[var(--color-surface-3)] hover:border-[var(--color-accent)]/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-[var(--color-accent)]/5' : ''
      } ${onClick ? 'cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-opacity-50' : ''} ${className}`}
    >
      {(title || Icon) && (
        <div className="flex items-center gap-3 mb-4">
          {Icon && (
            <div className="p-2 rounded-lg bg-[var(--color-surface-3)] text-[var(--color-accent)]">
              <Icon size={20} />
            </div>
          )}
          {title && (
            <h3 className="text-lg font-semibold text-[var(--color-text-primary)] tracking-tight">
              {title}
            </h3>
          )}
        </div>
      )}
      <div className="text-[var(--color-text-secondary)]">
        {children}
      </div>
    </Component>
  );
};

export default Card;
