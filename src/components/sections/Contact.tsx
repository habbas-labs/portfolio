import { Mail, Linkedin, Github, MapPin, FileText, ExternalLink } from 'lucide-react';
import { profile } from '../../data/content';
import { SectionHeader } from '../ui/SectionHeader';
import { ScrollReveal } from '../ui/ScrollReveal';

const contactLinks = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: Linkedin, label: 'LinkedIn', value: profile.linkedin, href: profile.linkedin },
  { icon: Github, label: 'GitHub', value: profile.github, href: profile.github },
  { icon: MapPin, label: 'Location', value: profile.location, href: undefined },
];

export function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Contact"
          title="Get In Touch"
          description="Open to opportunities in Senior Backend Engineering, Technical Leadership, and AI Engineering."
        />

        <div className="mt-12 grid md:grid-cols-2 gap-12">
          {/* Message */}
          <ScrollReveal>
            <div>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                I'm an experienced backend engineer looking for roles where I can apply architectural thinking,
                distributed systems expertise, and growing AI engineering capability to build meaningful enterprise systems.
              </p>
              <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed">
                If you're building complex backend systems, modernizing enterprise architectures, or integrating
                AI into production applications — I'd love to talk.
              </p>

              <div className="mt-8 text-sm text-[var(--color-text-muted)]">
                <p className="font-medium text-[var(--color-text-tertiary)] mb-2">Target roles:</p>
                <div className="flex flex-wrap gap-2">
                  {['Senior Backend Engineer', 'Technical Lead', 'Software Architect', 'AI Engineer'].map(role => (
                    <span
                      key={role}
                      className="px-2.5 py-1 rounded-md text-xs bg-[var(--color-surface-2)] text-[var(--color-text-secondary)] border border-[var(--color-border)]"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact links */}
          <ScrollReveal delay={0.2}>
            <div className="space-y-3">
              {contactLinks.map(item => (
                <div key={item.label}>
                  {item.href ? (
                    <a
                      href={item.href.startsWith('[') ? '#' : item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-xl bg-[var(--color-surface-1)] border border-[var(--color-border)] card-hover group"
                    >
                      <item.icon size={18} className="text-[var(--color-text-tertiary)] group-hover:text-[var(--color-accent)] transition-colors" />
                      <div className="flex-1">
                        <span className="text-xs text-[var(--color-text-muted)]">{item.label}</span>
                        <p className="text-sm text-[var(--color-text-primary)]">{item.value}</p>
                      </div>
                      <ExternalLink size={14} className="text-[var(--color-text-muted)] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-[var(--color-surface-1)] border border-[var(--color-border)]">
                      <item.icon size={18} className="text-[var(--color-text-tertiary)]" />
                      <div>
                        <span className="text-xs text-[var(--color-text-muted)]">{item.label}</span>
                        <p className="text-sm text-[var(--color-text-primary)]">{item.value}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Resume buttons */}
              <div className="flex gap-3 mt-6">
                <a
                  href={profile.resumeUrl.startsWith('[') ? '#' : profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Haider_Abbas_Resume.docx"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--color-accent)] text-white text-sm font-medium hover:bg-[var(--color-accent-hover)] transition-colors"
                >
                  <FileText size={14} />
                  View Resume
                </a>
                <a
                  href={profile.resumeUrl.startsWith('[') ? '#' : profile.resumeUrl}
                  download="Haider_Abbas_Resume.docx"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[var(--color-border-hover)] text-[var(--color-text-secondary)] text-sm font-medium hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
                >
                  <FileText size={14} />
                  Download
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
