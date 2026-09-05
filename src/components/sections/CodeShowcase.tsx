import React from 'react';
import { motion } from 'framer-motion';
import { codeExamples } from '../../data/content';
import { useInView } from '../../hooks/useAnimations';
import { Badge } from '../ui/Badge';
import { Accordion, AccordionItem } from '../ui/Accordion';

// Simple manual syntax highlighting for Java snippets
const highlightCode = (code: string) => {
  const keywords = ['public', 'private', 'protected', 'class', 'interface', 'return', 'if', 'else', 'for', 'while', 'new', 'static', 'final', 'void', 'try', 'catch', 'throw', 'throws'];
  const annotations = ['@Override', '@Autowired', '@Component', '@Service', '@RestController', '@RequestMapping', '@GetMapping', '@PostMapping'];
  
  let highlighted = code;
  
  // Escape HTML
  highlighted = highlighted.replace(/</g, '&lt;').replace(/>/g, '&gt;');
  
  // Highlight keywords
  keywords.forEach(keyword => {
    const regex = new RegExp(`\\b${keyword}\\b`, 'g');
    highlighted = highlighted.replace(regex, `<span class="text-purple-400">${keyword}</span>`);
  });
  
  // Highlight annotations
  annotations.forEach(annotation => {
    const regex = new RegExp(`${annotation}\\b`, 'g');
    highlighted = highlighted.replace(regex, `<span class="text-amber-300">${annotation}</span>`);
  });
  
  // Highlight strings
  highlighted = highlighted.replace(/(["'])(?:(?=(\\?))\2.)*?\1/g, match => `<span class="text-green-400">${match}</span>`);
  
  return highlighted;
};

export function CodeShowcase() {
  const { ref, inView } = useInView();

  return (
    <section id="code" className="py-24 border-t border-[var(--color-border)]" ref={ref}>
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="mb-12">
          <p className="text-sm font-semibold tracking-wider text-[var(--color-accent)] uppercase mb-2">Selected Examples</p>
          <h2 className="text-3xl font-bold text-[var(--color-text-primary)]">Code Showcase</h2>
        </div>

        <div className="space-y-12">
          {codeExamples.map((example, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-panel rounded-2xl overflow-hidden"
            >
              <div className="p-6 border-b border-[var(--color-border)] flex justify-between items-center bg-[var(--color-surface-1)]">
                <h3 className="text-xl font-bold text-[var(--color-text-primary)]">{example.title}</h3>
                <Badge variant="outline">{example.language}</Badge>
              </div>
              
              <div className="relative bg-[#0d1117] overflow-x-auto">
                <pre className="p-6 text-sm font-mono text-gray-300">
                  <code dangerouslySetInnerHTML={{ __html: highlightCode(example.code) }} />
                </pre>
              </div>
              
              <div className="p-4 md:p-6 bg-[var(--color-surface-0)]">
                <Accordion type="multiple" className="w-full">
                  <AccordionItem value="why" title="Why It Matters">
                    <p className="text-[var(--color-text-secondary)]">{example.whyItMatters}</p>
                  </AccordionItem>
                  <AccordionItem value="design" title="Design Consideration">
                    <p className="text-[var(--color-text-secondary)]">{example.designConsideration}</p>
                  </AccordionItem>
                  <AccordionItem value="interview" title="Interview Discussion">
                    <p className="text-[var(--color-text-secondary)]">{example.interviewDiscussion}</p>
                  </AccordionItem>
                </Accordion>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
