import { useState, useEffect } from 'react';
import { X, ArrowUpRight, Check, Mail, Phone, Sparkles } from 'lucide-react';
import { NeedCategory } from '../types';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialNeed?: string;
}

export function InquiryModal({ isOpen, onClose, initialNeed }: InquiryModalProps) {
  const [selectedNeed, setSelectedNeed] = useState<string>(
    initialNeed || 'A brand to rethink'
  );
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialNeed) {
      setSelectedNeed(initialNeed);
    }
  }, [initialNeed]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const agencyEmail = 'Thothcell26@gmail.com';
  const agencyPhone = '+91 79805 26391';
  const agencyPhoneClean = '+917980526391';

  const needsList: NeedCategory[] = [
    'A brand to rethink',
    'A story to tell',
    'A social presence to transform',
    'A campaign to move',
    'A business opportunity waiting to be explored',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[THOTH CELL Inquiry] ${selectedNeed} — ${company || name || 'New Partner'}`);
    const bodyText = encodeURIComponent(
      `Hello THOTH CELL Team,\n\nI would like to start a conversation regarding: ${selectedNeed}\n\nName: ${name || 'N/A'}\nCompany/Brand: ${company || 'N/A'}\nEmail: ${email || 'N/A'}\nPhone: ${phone || 'N/A'}\n\nProject Notes:\n${message || 'Looking forward to discussing our brand trajectory.'}\n\nSent from thothcell.com inquiry brief`
    );

    window.location.href = `mailto:${agencyEmail}?subject=${subject}&body=${bodyText}`;
    setSubmitted(true);
  };

  return (
    <div
      id="inquiry-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity"
      onClick={onClose}
    >
      <div
        id="inquiry-modal-container"
        className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#111317] border border-white/15 p-6 sm:p-8 text-white shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          id="close-modal-btn"
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-[#8e929d] hover:text-white transition-colors"
          aria-label="Close inquiry dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <div className="flex items-center gap-2 font-mono text-xs text-[#ff5500] uppercase tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-[#ff5500]"></span>
            <span>START A CONVERSATION // THOTH CELL</span>
          </div>
          <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">
            Got something worth building?
          </h3>
          <p className="text-xs font-mono text-[#8e929d] mt-1">
            Fill out your brief or reach us directly at{' '}
            <a href={`mailto:${agencyEmail}`} className="text-[#ff5500] hover:underline">
              {agencyEmail}
            </a>
          </p>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#ff5500]/20 text-[#ff5500] flex items-center justify-center mx-auto">
              <Check className="w-6 h-6" />
            </div>
            <h4 className="font-display font-bold text-xl text-white">
              Transmission Prepared!
            </h4>
            <p className="text-sm text-[#a0a5b4] max-w-md mx-auto">
              Your message was prepared for <span className="text-white font-mono">{agencyEmail}</span>. If your email client didn't open automatically, you can also reach us directly:
            </p>
            <div className="p-4 rounded-xl bg-white/5 font-mono text-xs text-white flex flex-col gap-2">
              <div>Email: {agencyEmail}</div>
              <div>Phone: {agencyPhone}</div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 rounded-lg bg-[#ff5500] text-white font-mono text-xs font-bold uppercase tracking-wider"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block font-mono text-xs text-[#8e929d] uppercase mb-2">
                What are you looking to create?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {needsList.map((need) => {
                  const isSelected = selectedNeed === need;
                  return (
                    <button
                      key={need}
                      type="button"
                      onClick={() => setSelectedNeed(need)}
                      className={`p-3 rounded-lg border text-left text-xs font-mono transition-all flex items-center justify-between ${
                        isSelected
                          ? 'bg-[#ff5500]/15 border-[#ff5500] text-white font-bold'
                          : 'bg-white/5 border-white/10 text-[#8e929d] hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <span>{need}</span>
                      {isSelected && <Check className="w-3.5 h-3.5 text-[#ff5500]" />}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-mono text-xs text-[#8e929d] uppercase mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  className="w-full px-3 py-2.5 rounded-lg bg-black/40 border border-white/15 text-white text-xs placeholder:text-[#525764] focus:outline-none focus:border-[#ff5500]"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-[#8e929d] uppercase mb-1">
                  Brand or Company
                </label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Brand / Company"
                  className="w-full px-3 py-2.5 rounded-lg bg-black/40 border border-white/15 text-white text-xs placeholder:text-[#525764] focus:outline-none focus:border-[#ff5500]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-mono text-xs text-[#8e929d] uppercase mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email@company.com"
                  className="w-full px-3 py-2.5 rounded-lg bg-black/40 border border-white/15 text-white text-xs placeholder:text-[#525764] focus:outline-none focus:border-[#ff5500]"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-[#8e929d] uppercase mb-1">
                  Phone / WhatsApp
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 / International"
                  className="w-full px-3 py-2.5 rounded-lg bg-black/40 border border-white/15 text-white text-xs placeholder:text-[#525764] focus:outline-none focus:border-[#ff5500]"
                />
              </div>
            </div>

            <div>
              <label className="block font-mono text-xs text-[#8e929d] uppercase mb-1">
                Project Notes
              </label>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Give us a brief overview of your current social state, goals, and timeline..."
                className="w-full px-3 py-2.5 rounded-lg bg-black/40 border border-white/15 text-white text-xs placeholder:text-[#525764] focus:outline-none focus:border-[#ff5500] resize-none"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 bg-[#ff5500] hover:bg-[#ff691e] text-white font-mono text-xs font-bold uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 group transition-all"
              >
                <span>Send Brief Directly</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <div className="flex items-center gap-4 text-xs font-mono text-[#8e929d]">
                <a href={`tel:${agencyPhoneClean}`} className="hover:text-white flex items-center gap-1">
                  <Phone className="w-3 h-3 text-[#ff5500]" /> Call Direct
                </a>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
