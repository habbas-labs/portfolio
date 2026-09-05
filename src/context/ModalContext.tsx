import React, { createContext, useContext, useState, useEffect } from 'react';

interface ModalContextType {
  isRecruiterOpen: boolean;
  openRecruiter: () => void;
  closeRecruiter: () => void;

  isClientOpen: boolean;
  openClient: () => void;
  closeClient: () => void;

  isInquiryOpen: boolean;
  inquiryDefaultService: string | undefined;
  openInquiry: (serviceTitle?: string) => void;
  closeInquiry: () => void;

  isCommandPaletteOpen: boolean;
  openCommandPalette: () => void;
  closeCommandPalette: () => void;
  toggleCommandPalette: () => void;

  isResumeOpen: boolean;
  openResume: () => void;
  closeResume: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isRecruiterOpen, setIsRecruiterOpen] = useState(false);
  const [isClientOpen, setIsClientOpen] = useState(false);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [inquiryDefaultService, setInquiryDefaultService] = useState<string | undefined>(undefined);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const openRecruiter = () => setIsRecruiterOpen(true);
  const closeRecruiter = () => setIsRecruiterOpen(false);

  const openClient = () => setIsClientOpen(true);
  const closeClient = () => setIsClientOpen(false);

  const openInquiry = (serviceTitle?: string) => {
    setInquiryDefaultService(serviceTitle);
    setIsInquiryOpen(true);
  };
  const closeInquiry = () => {
    setIsInquiryOpen(false);
    setInquiryDefaultService(undefined);
  };

  const openCommandPalette = () => setIsCommandPaletteOpen(true);
  const closeCommandPalette = () => setIsCommandPaletteOpen(false);
  const toggleCommandPalette = () => setIsCommandPaletteOpen(prev => !prev);

  const openResume = () => setIsResumeOpen(true);
  const closeResume = () => setIsResumeOpen(false);

  // Global ⌘K / Ctrl+K listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        toggleCommandPalette();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <ModalContext.Provider
      value={{
        isRecruiterOpen,
        openRecruiter,
        closeRecruiter,
        isClientOpen,
        openClient,
        closeClient,
        isInquiryOpen,
        inquiryDefaultService,
        openInquiry,
        closeInquiry,
        isCommandPaletteOpen,
        openCommandPalette,
        closeCommandPalette,
        toggleCommandPalette,
        isResumeOpen,
        openResume,
        closeResume,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModals() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModals must be used within a ModalProvider');
  }
  return context;
}
