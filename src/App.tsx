import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SectionThink } from './components/SectionThink';
import { SectionMake } from './components/SectionMake';
import { SectionMove } from './components/SectionMove';
import { SectionKeepGoing } from './components/SectionKeepGoing';
import { SectionUs } from './components/SectionUs';
import { SectionContact } from './components/SectionContact';
import { Footer } from './components/Footer';
import { InquiryModal } from './components/InquiryModal';
import { Mail, Phone } from 'lucide-react';

export default function App() {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [selectedInitialNeed, setSelectedInitialNeed] = useState<string | undefined>(undefined);

  const handleOpenInquiry = (initialNeed?: string) => {
    setSelectedInitialNeed(initialNeed);
    setInquiryModalOpen(true);
  };

  const agencyPhoneClean = '+917980526391';
  const agencyEmail = 'Thothcell26@gmail.com';

  return (
    <div className="min-h-screen bg-[#0c0d0f] text-[#ededed] font-sans relative selection:bg-[#ff5500] selection:text-white">
      {/* Top Fixed Header */}
      <Navbar onOpenInquiry={handleOpenInquiry} />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero onOpenInquiry={() => handleOpenInquiry()} />
        <SectionThink />
        <SectionMake />
        <SectionMove />
        <SectionKeepGoing />
        <SectionUs />
        <SectionContact initialNeed={selectedInitialNeed} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Global Inquiry Modal */}
      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        initialNeed={selectedInitialNeed}
      />

      {/* Floating Quick Action Widget on Mobile & Tablet */}
      <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2">
        <a
          href={`tel:${agencyPhoneClean}`}
          id="floating-call-btn"
          className="p-3 bg-[#16181d] border border-white/20 text-white hover:text-[#ff5500] rounded-full shadow-2xl backdrop-blur-md transition-all active:scale-95"
          title="Call THOTH CELL"
        >
          <Phone className="w-4 h-4" />
        </a>
        <a
          href={`mailto:${agencyEmail}`}
          id="floating-mail-btn"
          className="p-3 bg-[#16181d] border border-white/20 text-white hover:text-[#ff5500] rounded-full shadow-2xl backdrop-blur-md transition-all active:scale-95"
          title="Email THOTH CELL"
        >
          <Mail className="w-4 h-4" />
        </a>
        <button
          type="button"
          id="floating-talk-btn"
          onClick={() => handleOpenInquiry()}
          className="px-4 py-2.5 bg-[#ff5500] hover:bg-[#ff691e] text-white font-mono text-xs font-bold uppercase tracking-wider rounded-full shadow-2xl shadow-[#ff5500]/30 transition-all active:scale-95 flex items-center gap-1.5"
        >
          <span>TALK</span>
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
        </button>
      </div>
    </div>
  );
}
