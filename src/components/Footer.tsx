import { ArrowUpRight, Mail, Phone, Globe, ArrowUp, MessageCircle } from 'lucide-react';
import { Logo } from './Logo';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const agencyEmail = 'Thothcell26@gmail.com';
  const agencyPhoneClean = '+917980526391';
  const whatsappUrl = `https://wa.me/917980526391?text=${encodeURIComponent('Hello THOTH CELL team, I would like to discuss a project.')}`;

  return (
    <footer id="main-footer" className="bg-[#08090a] text-[#ededed] pt-20 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Massive Brand Wordmark */}
        <div className="pb-16 border-b border-white/10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Logo size="md" />
                <span className="font-mono text-xs text-[#ff5500] tracking-widest uppercase font-semibold">
                  [ SOCIAL MEDIA ENGINE ]
                </span>
              </div>
              <h2 className="font-display font-black text-5xl sm:text-7xl md:text-8xl tracking-tight text-white uppercase">
                THOTH CELL
              </h2>
              <p className="font-display text-xl sm:text-2xl text-[#b2b7c4] mt-2 font-medium tracking-wide">
                Think. Make. Move. Keep Going.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 font-mono text-xs">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[#717684] block mb-1">DIRECT INQUIRIES</span>
                <a
                  href={`mailto:${agencyEmail}`}
                  className="text-white hover:text-[#ff5500] font-bold transition-colors"
                >
                  {agencyEmail}
                </a>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-between gap-2.5 min-w-[220px]">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[#717684] block text-[11px] uppercase tracking-wider">DIRECT LINE & WHATSAPP</span>
                  <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    ACTIVE
                  </span>
                </div>

                <div className="flex items-center gap-2 pt-0.5">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500 text-emerald-400 hover:text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 group"
                    title="Open WhatsApp chat"
                  >
                    <MessageCircle className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                    <span>Chat</span>
                  </a>
                  <a
                    href={`tel:${agencyPhoneClean}`}
                    className="flex-1 px-3 py-1.5 rounded-lg bg-[#ff5500]/10 hover:bg-[#ff5500] text-[#ff5500] hover:text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 group"
                    title="Call directly"
                  >
                    <Phone className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                    <span>Call</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Capabilities Taxonomy */}
          <div className="pt-8 border-t border-white/5 flex flex-wrap items-center gap-y-2 gap-x-4 font-mono text-xs text-[#8e929d]">
            <span className="text-[#ff5500] font-semibold">DISCIPLINES:</span>
            <span>Strategic Thinking</span>
            <span>·</span>
            <span>Creative</span>
            <span>·</span>
            <span>Social Media</span>
            <span>·</span>
            <span>Paid Media</span>
            <span>·</span>
            <span>Lead Generation</span>
          </div>
        </div>

        {/* Links, Socials, and Copyright */}
        <div className="pt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Social Channels */}
          <div className="flex flex-wrap items-center gap-6 font-mono text-xs">
            <span className="text-[#717684] uppercase tracking-wider">CONNECT:</span>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c7ccd8] hover:text-[#ff5500] transition-colors inline-flex items-center gap-1"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c7ccd8] hover:text-[#ff5500] transition-colors inline-flex items-center gap-1"
            >
              <span>Instagram</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <a
              href={`mailto:${agencyEmail}`}
              className="text-[#c7ccd8] hover:text-[#ff5500] transition-colors inline-flex items-center gap-1"
            >
              <span>Email</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          {/* Copyright & Scroll To Top */}
          <div className="flex items-center gap-6 font-mono text-xs text-[#717684]">
            <span>© 2026 THOTH CELL. ALL RIGHTS RESERVED.</span>

            <button
              type="button"
              id="back-to-top-btn"
              onClick={scrollToTop}
              className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors flex items-center gap-1.5"
              title="Return to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">TOP</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
