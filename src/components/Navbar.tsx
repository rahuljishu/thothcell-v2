import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { Logo } from './Logo';

interface NavbarProps {
  onOpenInquiry: (initialNeed?: string) => void;
}

export function Navbar({ onOpenInquiry }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // detect active section
      const sections = ['think', 'make', 'move', 'keep-going', 'us', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#think', label: 'THINK', id: 'think' },
    { href: '#make', label: 'MAKE', id: 'make' },
    { href: '#move', label: 'MOVE', id: 'move' },
    { href: '#keep-going', label: 'KEEP GOING', id: 'keep-going' },
    { href: '#us', label: 'US', id: 'us' },
  ];

  return (
    <header
      id="main-nav-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0c0d0f]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          id="brand-logo-link"
          className="flex items-center gap-2.5 group text-white tracking-tight"
        >
          <Logo size="sm" />
          <div className="flex flex-col">
            <span className="font-display font-extrabold text-base tracking-wider text-white">
              THOTH CELL
            </span>
            <span className="font-mono text-[9px] tracking-widest text-[#8e929d] uppercase -mt-0.5">
              Social Media Engine
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#131519]/80 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                id={`nav-link-${link.id}`}
                className={`px-3 py-1.5 text-xs font-mono font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-[#ff5500] bg-white/10'
                    : 'text-[#a1a7b5] hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Quick Action */}
        <div className="hidden sm:flex items-center gap-4">
          <div className="hidden xl:flex items-center gap-2 text-xs font-mono text-[#8e929d]">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>AVAILABLE 2026</span>
          </div>

          <button
            type="button"
            id="nav-cta-btn"
            onClick={() => onOpenInquiry()}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black hover:bg-[#ff5500] hover:text-white font-mono text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-200 group active:scale-95 shadow-sm"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            id="mobile-nav-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/15 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden bg-[#0c0d0f]/98 border-b border-white/10 px-6 py-6 transition-all"
        >
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-mono text-sm tracking-wider text-[#ced3de] hover:text-[#ff5500] py-2 border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-xs font-mono text-[#8e929d]">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>AVAILABLE FOR CLIENT COLLABORATION</span>
              </div>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry();
                }}
                className="w-full py-3 bg-[#ff5500] text-white text-center font-mono text-xs font-bold uppercase tracking-wider rounded-lg"
              >
                Start A Conversation →
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
