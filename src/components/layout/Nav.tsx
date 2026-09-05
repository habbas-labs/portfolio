import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Clock, Briefcase, Search } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { profile } from '../../data/content';
import { useModals } from '../../context/ModalContext';
import { isRecruiterEnabled, isConsultantEnabled } from '../../config/portfolioConfig';

export function Nav() {
  const { theme, toggleTheme } = useTheme();
  const { openRecruiter, openClient, openCommandPalette } = useModals();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const showRecruiter = isRecruiterEnabled();
  const showConsultant = isConsultantEnabled();

  // Mode-aware navigation links
  const navLinks = [
    { label: 'Home', href: '/' },
    ...(showConsultant ? [{ label: 'Consulting', href: '/#consulting' }] : []),
    ...(showConsultant ? [{ label: 'Projects', href: '/#projects' }] : []),
    { label: 'Java Deep Dive', href: '/#java-deep-dive' },
    { label: 'Microservices Lab', href: '/#microservices-lab' },
    { label: 'Kafka Lab', href: '/#kafka-lab' },
    { label: 'Enterprise', href: '/#experience' },
    { label: 'AI Lab', href: '/#ai-lab' },
    ...(showRecruiter ? [{ label: 'Interview', href: '/interview' }] : []),
  ];

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

  const isSolid = scrolled || location.pathname !== '/';

  const brandSubtitle = showRecruiter && showConsultant
    ? 'Backend & AI Consultant'
    : showConsultant
      ? 'Technology Consultant'
      : 'Senior Backend Engineer';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSolid
          ? 'glass-panel shadow-sm border-b border-[var(--color-border)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-md bg-[var(--color-accent)] flex items-center justify-center text-white font-bold text-sm shadow-sm">
            HA
          </div>
          <div className="hidden sm:block">
            <div className="text-sm font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors">
              {profile.name}
            </div>
            <div className="text-xs text-[var(--color-text-tertiary)] truncate max-w-[220px]">
              {brandSubtitle}
            </div>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden xl:flex items-center gap-1">
          {navLinks.map(link => (
            <Link
              key={link.label}
              to={link.href.startsWith('/#') ? '/' : link.href}
              onClick={() => handleNavClick(link.href)}
              className={`px-2.5 py-1.5 text-xs rounded-md font-medium transition-colors ${
                (link.href === '/' && location.pathname === '/' && !location.hash) ||
                (link.href === '/interview' && location.pathname === '/interview')
                  ? 'text-[var(--color-accent)] bg-[var(--color-accent-subtle)]'
                  : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-2)]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Action Controls & Fast Paths */}
        <div className="hidden sm:flex items-center gap-2">
          {/* Command Palette Search Trigger */}
          <button
            onClick={openCommandPalette}
            className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs bg-[var(--color-surface-2)] hover:bg-[var(--color-surface-3)] text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] border border-[var(--color-border)] transition-colors font-mono"
            title="Search command palette (⌘K)"
          >
            <Search size={13} />
            <span className="hidden md:inline font-sans">Search</span>
            <span className="text-[10px] px-1 py-0.2 rounded bg-[var(--color-surface-3)] border border-[var(--color-border)]">⌘K</span>
          </button>

          {/* Client 60s Fast Path Button (Consultant Mode) */}
          {showConsultant && (
            <button
              onClick={openClient}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500 hover:text-white transition-all shadow-sm"
              title="60-Second Client & Engineering Leader Overview"
            >
              <Briefcase size={13} />
              <span>Client 60s</span>
            </button>
          )}

          {/* Recruiter 30s Fast Path Button (Recruiter Mode) */}
          {showRecruiter && (
            <button
              onClick={openRecruiter}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 hover:bg-blue-500 hover:text-white transition-all shadow-sm"
              title="30-Second Fast Path for Recruiters"
            >
              <Clock size={13} />
              <span>Recruiter 30s</span>
            </button>
          )}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-2)] transition-colors"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
          </button>
        </div>

        {/* Mobile Hamburger & Quick Actions */}
        <div className="flex sm:hidden items-center gap-1.5">
          <button
            onClick={openCommandPalette}
            className="p-2 rounded-md text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)]"
            aria-label="Search"
          >
            <Search size={16} />
          </button>

          {showConsultant && (
            <button
              onClick={openClient}
              className="px-2 py-1 rounded text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
            >
              Client
            </button>
          )}

          {showRecruiter && (
            <button
              onClick={openRecruiter}
              className="px-2 py-1 rounded text-[11px] font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20"
            >
              30s
            </button>
          )}

          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-md text-[var(--color-text-tertiary)]"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-1.5 rounded-md text-[var(--color-text-secondary)]"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
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
                  className="px-3 py-2 text-sm rounded-md text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-2)] transition-colors"
                >
                  {link.label}
                </Link>
              ))}

              <div className="pt-3 border-t border-[var(--color-border)] mt-2 space-y-2">
                {showConsultant && (
                  <button
                    onClick={() => {
                      setMobileOpen(false);
                      openClient();
                    }}
                    className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold rounded-lg bg-emerald-600 text-white"
                  >
                    <Briefcase size={14} />
                    Open Client 60s View
                  </button>
                )}
                {showRecruiter && (
                  <button
                    onClick={() => {
                      setMobileOpen(false);
                      openRecruiter();
                    }}
                    className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold rounded-lg bg-blue-600 text-white"
                  >
                    <Clock size={14} />
                    Open Recruiter 30s View
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
