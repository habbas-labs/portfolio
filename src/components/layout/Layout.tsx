import { Outlet } from 'react-router-dom';
import { Nav } from './Nav';
import { Footer } from './Footer';
import { ModalProvider, useModals } from '../../context/ModalContext';
import { RecruiterModal } from '../ui/RecruiterModal';
import { ClientModal } from '../ui/ClientModal';
import { ProjectInquiryModal } from '../ui/ProjectInquiryModal';
import { CommandPalette } from '../ui/CommandPalette';
import { ResumeModal } from '../ui/ResumeModal';

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
    isResumeOpen,
    openResume,
    closeResume,
  } = useModals();

  return (
    <>
      <RecruiterModal isOpen={isRecruiterOpen} onClose={closeRecruiter} onOpenResume={openResume} />
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
        onOpenResume={openResume}
      />
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={closeResume}
      />
    </>
  );
}

export function Layout() {
  return (
    <ModalProvider>
      <div className="min-h-screen flex flex-col w-full max-w-full overflow-x-hidden">
        <Nav />
        <main className="flex-1 w-full max-w-full min-w-0 overflow-x-hidden">
          <Outlet />
        </main>
        <Footer />
        <ModalContainer />
      </div>
    </ModalProvider>
  );
}
