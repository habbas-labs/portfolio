import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Clock, MonitorPlay } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { profile } from '../../data/content';
import { RecruiterModal } from '../ui/RecruiterModal';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Java Deep Dive', href: '/#java-deep-dive' },
  { label: 'Microservices Lab', href: '/#microservices-lab' },
  { label: 'Kafka Lab', href: '/#kafka-lab' },
  { label: 'Enterprise Experience', href: '/#experience' },
  { label: 'AI Lab', href: '/#ai-lab' },
  { label: 'Interview Control', href: '/interview' },
];

export function Nav() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [recruiterOpen, setRecruiterOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith('/#')) {
      const id = href.slice(2);
      if (location.pathname === '/') {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'glass-panel shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-md bg-[var(--color-accent)] flex items-center justify-center text-white font-bold text-sm">
              HA
            </div>
            <div className="hidden sm:block">
              <div className="text-sm font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                {profile.name}
              </div>
              <div className="text-xs text-[var(--color-text-tertiary)]">
                {profile.tagline.split('·')[0].trim()}
              </div>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => (
              <Link
                key={link.label}
                to={link.href.startsWith('/#') ? '/' : link.href}
                onClick={() => handleNavClick(link.href)}
                className={`px-3 py-1.5 text-xs rounded-md font-medium transition-colors ${
                  (link.href === '/' && location.pathname === '/' && !location.hash) ||
                  (link.href === '/interview' && location.pathname === '/interview')
                    ? 'text-[var(--color-accent)] bg-[var(--color-accent-subtle)]'
                    : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-2)]'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Recruiter 30s Fast Path Button */}
            <button
              onClick={() => setRecruiterOpen(true)}
              className="ml-2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 hover:bg-blue-500 hover:text-white transition-all shadow-sm"
              title="30-Second Fast Path"
            >
              <Clock size={13} />
              Recruiter 30s
            </button>

            <button
              onClick={toggleTheme}
              className="ml-2 p-2 rounded-md text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-2)] transition-colors"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setRecruiterOpen(true)}
              className="px-2.5 py-1 rounded-md text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20"
            >
              30s
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)]"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-md text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Recruiter Fast-Path Modal */}
      <RecruiterModal isOpen={recruiterOpen} onClose={() => setRecruiterOpen(false)} />

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 glass-panel border-b border-[var(--color-border)] lg:hidden shadow-xl"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map(link => (
                <Link
                  key={link.label}
                  to={link.href.startsWith('/#') ? '/' : link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="px-3 py-2.5 text-sm rounded-md text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-2)] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 border-t border-[var(--color-border)] mt-2">
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    setRecruiterOpen(true);
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold rounded-lg bg-[var(--color-accent)] text-white"
                >
                  <Clock size={14} />
                  Open Recruiter 30s View
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
