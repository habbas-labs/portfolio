import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useReducedMotion } from '../../hooks/useAnimations';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  className?: string;
}

export function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  duration = 0.5,
  className = '',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const prefersReduced = useReducedMotion();

  if (prefersReduced || direction === 'none') {
    return <div className={className}>{children}</div>;
  }

  const offsets = {
    up: { opacity: 0, y: 30 },
    down: { opacity: 0, y: -30 },
    left: { opacity: 0, x: 30 },
    right: { opacity: 0, x: -30 },
  };

  return (
    <motion.div
      ref={ref}
      initial={offsets[direction]}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : offsets[direction]}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default ScrollReveal;
