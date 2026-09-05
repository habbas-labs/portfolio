import { Mail, Linkedin, Github, MapPin, FileText, Download } from 'lucide-react';
import { profile } from '../../data/content';
import { SectionHeader } from '../ui/SectionHeader';
import { ScrollReveal } from '../ui/ScrollReveal';
import { useModals } from '../../context/ModalContext';

const contactLinks = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: Linkedin, label: 'LinkedIn', value: profile.linkedin, href: profile.linkedin },
  { icon: Github, label: 'GitHub', value: profile.github, href: profile.github },
  { icon: MapPin, label: 'Location', value: profile.location, href: undefined },
];

export function Contact() {
  const { openResume } = useModals();

  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
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
              <p className="text-[var(--color-text-secondary)] leading-relaxed mt-4">
                Whether you're hiring for a critical backend role, exploring high-throughput architecture consultation, or want to discuss modernizing legacy systems, let's connect.
              </p>

              {/* What happens next */}
              <div className="mt-8 p-4 rounded-xl bg-[var(--color-surface-1)] border border-[var(--color-border)]">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-tertiary)] mb-2">
                  What Happens Next
                </h4>
                <ul className="text-sm text-[var(--color-text-secondary)] space-y-1">
                  <li>• Initial response within 24 hours</li>
                  <li>• Technical alignment conversation (30 min)</li>
                  <li>• Deep dive into architecture & problem space</li>
                </ul>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Details & Resume */}
          <ScrollReveal delay={0.2}>
            <div className="space-y-4">
              {contactLinks.map(item => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 p-4 rounded-xl bg-[var(--color-surface-1)] border border-[var(--color-border)]"
                >
                  <div className="w-10 h-10 rounded-lg bg-[var(--color-surface-2)] flex items-center justify-center text-[var(--color-accent)] shrink-0">
                    <item.icon size={18} />
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('mailto:') ? undefined : '_blank'}
                      rel={item.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                      className="text-sm text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors min-w-0 flex-1 break-all"
                    >
                      <span className="text-xs text-[var(--color-text-muted)] block">{item.label}</span>
                      {item.value}
                    </a>
                  ) : (
                    <div className="min-w-0 flex-1 break-all">
                      <span className="text-xs text-[var(--color-text-muted)] block">{item.label}</span>
                      <p className="text-sm text-[var(--color-text-primary)]">{item.value}</p>
                    </div>
                  )}
                </div>
              ))}

              {/* Resume buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <button
                  onClick={openResume}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--color-accent)] text-white text-sm font-medium hover:bg-[var(--color-accent-hover)] transition-colors cursor-pointer shadow-sm w-full sm:w-auto text-center"
                >
                  <FileText size={15} />
                  View Resume
                </button>
                <a
                  href={profile.resumeUrl}
                  download="Haider_Abbas_Resume.docx"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-[var(--color-border-hover)] text-[var(--color-text-secondary)] text-sm font-medium hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors w-full sm:w-auto text-center"
                >
                  <Download size={15} />
                  Download Resume
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
