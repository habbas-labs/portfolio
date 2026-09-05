import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { capabilities } from '../../data/content';

const DynamicIcon = ({ name, ...props }: { name: string } & Icons.LucideProps) => {
  const Icon = (Icons as any)[name];
  return Icon ? <Icon {...props} /> : null;
};

export const Capabilities: React.FC = () => {
  const backendCapabilities = capabilities.slice(0, 5);
  const aiCapabilities = capabilities.slice(5);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const renderCard = (capability: any) => (
    <motion.div
      variants={cardVariants}
      key={capability.id}
      className="bg-[var(--color-surface-1)] border border-[var(--color-border)] rounded-xl p-6 hover:border-accent/50 hover:bg-[var(--color-surface-2)] transition-all duration-300 group flex flex-col h-full"
    >
      <div className="w-12 h-12 rounded-lg bg-[var(--color-surface-2)] border border-[var(--color-border)] flex items-center justify-center mb-6 group-hover:bg-accent/10 group-hover:border-accent/30 transition-colors">
        <DynamicIcon name={capability.icon || 'Code'} className="w-6 h-6 text-accent" />
      </div>
      <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-3">{capability.title}</h3>
      <p className="text-[var(--color-text-secondary)] text-sm mb-6 flex-grow leading-relaxed">
        {capability.description}
      </p>
      {capability.technologies && (
        <div className="flex flex-wrap gap-2 mt-auto">
          {capability.technologies.map((tech: string, i: number) => (
            <span key={i} className="text-xs font-mono text-[var(--color-text-tertiary)] bg-[var(--color-surface-0)] px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );

  return (
    <section id="capabilities" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <span className="text-accent text-sm font-bold tracking-wider uppercase mb-2 block">
            Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-4">
            What I Can Build
          </h2>
        </div>

        <div className="space-y-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-8 border-b border-[var(--color-border)] pb-4">
              Backend & Enterprise
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {backendCapabilities.map(renderCard)}
            </div>
          </motion.div>

          {aiCapabilities.length > 0 && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            >
              <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-8 border-b border-[var(--color-border)] pb-4">
                AI & Intelligent Systems
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {aiCapabilities.map(renderCard)}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};
