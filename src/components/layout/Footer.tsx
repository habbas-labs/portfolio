import React from 'react';
import { profile } from '../../data/content';
import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface-1)] py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[var(--color-text-primary)]">{profile.name}</h3>
            <p className="text-[var(--color-text-secondary)] text-sm max-w-xs">
              Architecture Before Implementation. Building scalable, robust systems.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-text-tertiary)]">Connect</h4>
            <div className="flex gap-4">
              <a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href={profile.contact.github} target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors">
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </a>
              <a href={`mailto:${profile.contact.email}`} className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors">
                <Mail size={20} />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-text-tertiary)]">Built With</h4>
            <p className="text-sm text-[var(--color-text-secondary)]">
              React 18, TypeScript, Tailwind CSS, Framer Motion.
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-[var(--color-border)] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[var(--color-text-tertiary)]">
            &copy; {currentYear} {profile.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
