import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { thinkingStages } from '../../data/content';

const DynamicIcon = ({ name, ...props }: { name: string } & Icons.LucideProps) => {
  const Icon = (Icons as any)[name];
  return Icon ? <Icon {...props} /> : null;
};

export const HowIThink: React.FC = () => {
  const [activeStage, setActiveStage] = useState<string>(thinkingStages[0]?.id || '');

  return (
    <section id="how-i-think" className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16 text-center lg:text-left">
          <span className="text-accent text-sm font-bold tracking-wider uppercase mb-2 block">
            Engineering Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-4">
            How I Think
          </h2>
          <p className="text-xl text-[var(--color-text-secondary)]">
            I don't start with implementation. I start with purpose.
          </p>
        </div>

        <div className="relative border-l border-[var(--color-border)] ml-6 md:ml-8 pl-8 md:pl-12 space-y-12">
          {thinkingStages.map((stage, index) => {
            const isActive = activeStage === stage.id;

            return (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group cursor-pointer"
                onClick={() => setActiveStage(stage.id)}
              >
                {/* Timeline dot/icon */}
                <div className={`absolute -left-[49px] md:-left-[65px] top-1 w-10 h-10 rounded-full border-2 flex items-center justify-center bg-[var(--color-surface-0)] transition-colors duration-300 ${
                  isActive 
                    ? 'border-accent text-accent shadow-[0_0_15px_rgba(59,130,246,0.5)]' 
                    : 'border-[var(--color-border)] text-[var(--color-text-tertiary)] group-hover:border-[var(--color-text-secondary)] group-hover:text-[var(--color-text-secondary)]'
                }`}>
                  <DynamicIcon name={stage.icon || 'Brain'} size={18} />
                </div>

                {/* Content */}
                <div>
                  <h3 className={`text-xl font-bold transition-colors duration-300 ${
                    isActive ? 'text-accent' : 'text-[var(--color-text-primary)] group-hover:text-[var(--color-text-primary)]'
                  }`}>
                    {stage.title}
                  </h3>
                  
                  <motion.div
                    initial={false}
                    animate={{ height: isActive ? 'auto' : 0, opacity: isActive ? 1 : 0 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 pb-2 space-y-4">
                      <p className="text-[var(--color-text-secondary)] leading-relaxed">
                        {stage.description}
                      </p>
                      {stage.guidingQuestion && (
                        <div className="bg-[var(--color-surface-1)] border border-[var(--color-border)] rounded-md p-4 font-mono text-sm text-[var(--color-text-primary)]">
                          <span className="text-accent-hover mr-2">?</span>
                          {stage.guidingQuestion}
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
