import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { profile } from '../../data/content';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Experience', href: '/#experience' },
  { label: 'System Design', href: '/#system-design' },
  { label: 'AI Lab', href: '/#ai-lab' },
  { label: 'Interview', href: '/interview' },
  { label: 'Contact', href: '/#contact' },
];

export function Nav() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
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
              {profile.name.charAt(0) === '[' ? 'E' : profile.name.charAt(0)}
            </div>
            <div className="hidden sm:block">
              <div className="text-sm font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                {profile.name === '[NAME]' ? 'Engineering Portfolio' : profile.name}
              </div>
              <div className="text-xs text-[var(--color-text-tertiary)]">
                {profile.tagline}
              </div>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <Link
                key={link.label}
                to={link.href.startsWith('/#') ? '/' : link.href}
                onClick={() => handleNavClick(link.href)}
                className={`px-3 py-2 text-sm rounded-md transition-colors ${
                  (link.href === '/' && location.pathname === '/' && !location.hash) ||
                  (link.href === '/interview' && location.pathname === '/interview')
                    ? 'text-[var(--color-accent)] bg-[var(--color-accent-subtle)]'
                    : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-accent-subtle)]'
                }`}
              >
                {link.label}
              </Link>
            ))}

            <button
              onClick={toggleTheme}
              className="ml-2 p-2 rounded-md text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-accent-subtle)] transition-colors"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>

          {/* Mobile toggle */}
          <div className="flex md:hidden items-center gap-2">
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

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 glass-panel border-b border-[var(--color-border)] md:hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map(link => (
                <Link
                  key={link.label}
                  to={link.href.startsWith('/#') ? '/' : link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="px-3 py-2.5 text-sm rounded-md text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-accent-subtle)] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
