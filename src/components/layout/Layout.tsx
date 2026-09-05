import { Outlet } from 'react-router-dom';
import { Nav } from './Nav';
import { Footer } from './Footer';
import { ModalProvider, useModals } from '../../context/ModalContext';
import { RecruiterModal } from '../ui/RecruiterModal';
import { ClientModal } from '../ui/ClientModal';
import { ProjectInquiryModal } from '../ui/ProjectInquiryModal';
import { CommandPalette } from '../ui/CommandPalette';

function ModalContainer() {
  const {
    isRecruiterOpen,
    closeRecruiter,
    isClientOpen,
    closeClient,
    isInquiryOpen,
    inquiryDefaultService,
    closeInquiry,
    openInquiry,
    openClient,
    openRecruiter,
    isCommandPaletteOpen,
    closeCommandPalette,
  } = useModals();

  return (
    <>
      <RecruiterModal isOpen={isRecruiterOpen} onClose={closeRecruiter} />
      <ClientModal 
        isOpen={isClientOpen} 
        onClose={closeClient} 
        onOpenInquiry={openInquiry} 
      />
      <ProjectInquiryModal
        isOpen={isInquiryOpen}
        onClose={closeInquiry}
        defaultService={inquiryDefaultService}
      />
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={closeCommandPalette}
        onOpenInquiry={openInquiry}
        onOpenClientModal={openClient}
        onOpenRecruiterModal={openRecruiter}
      />
    </>
  );
}

export function Layout() {
  return (
    <ModalProvider>
      <div className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <ModalContainer />
      </div>
    </ModalProvider>
  );
}
