import { useState } from 'react';
import { Mail, Phone, ArrowUpRight, Copy, Check, Send, Sparkles, MessageSquare } from 'lucide-react';
import { NeedCategory } from '../types';

interface SectionContactProps {
  initialNeed?: string;
}

export function SectionContact({ initialNeed }: SectionContactProps) {
  const [selectedNeed, setSelectedNeed] = useState<string>(
    initialNeed || 'A brand to rethink'
  );
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

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

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(agencyEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(agencyPhone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email && !phone) {
      setStatusMessage('Please provide your email or phone number so we can reach you.');
      return;
    }

    const subject = encodeURIComponent(`[THOTH CELL Inquiry] ${selectedNeed} — ${company || name || 'New Partner'}`);
    const bodyText = encodeURIComponent(
      `Hello THOTH CELL Team,\n\nI would like to start a conversation regarding: ${selectedNeed}\n\nName: ${name || 'N/A'}\nCompany/Brand: ${company || 'N/A'}\nEmail: ${email || 'N/A'}\nPhone: ${phone || 'N/A'}\n\nProject Details:\n${message || 'Looking forward to discussing social media strategy and execution.'}\n\nSent from thothcell.com`
    );

    // open mailto
    window.location.href = `mailto:${agencyEmail}?subject=${subject}&body=${bodyText}`;

    setStatusMessage('Thank you! Opening your email client to dispatch the brief directly to Thothcell26@gmail.com.');
  };

  return (
    <section id="contact" className="py-24 sm:py-32 border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#ff5500] tracking-widest uppercase mb-3">
              <span className="w-2 h-2 rounded-full bg-[#ff5500]"></span>
              <span>[SECTION 06]</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl tracking-tight text-white uppercase">
              LET'S TALK
            </h2>
            <p className="font-display text-xl sm:text-2xl text-[#ff5500] mt-2 font-medium tracking-wide">
              Got something worth building?
            </p>
          </div>

          <div className="max-w-md">
            <p className="text-base text-[#b2b7c4] leading-relaxed">
              Whether you are an ambitious startup or an established brand ready to command attention, we are ready to move.
            </p>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: What are you looking to build? */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="font-mono text-xs text-[#717684] uppercase tracking-wider block mb-3">
                SELECT YOUR OBJECTIVE
              </span>
              <div className="flex flex-col gap-2.5">
                {needsList.map((need) => {
                  const isSelected = selectedNeed === need;
                  return (
                    <button
                      key={need}
                      type="button"
                      id={`need-option-${need.toLowerCase().replace(/\s+/g, '-')}`}
                      onClick={() => setSelectedNeed(need)}
                      className={`p-4 rounded-xl border text-left transition-all duration-200 flex items-center justify-between group ${
                        isSelected
                          ? 'bg-[#1a1c22] border-[#ff5500] text-white shadow-md shadow-[#ff5500]/10'
                          : 'bg-[#121417] border-white/10 text-[#a2a7b6] hover:bg-[#16181d] hover:text-white hover:border-white/20'
                      }`}
                    >
                      <span className="font-display font-semibold text-base sm:text-lg">
                        {need}.
                      </span>
                      <div
                        className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                          isSelected
                            ? 'border-[#ff5500] bg-[#ff5500] text-white'
                            : 'border-white/20 group-hover:border-white/40'
                        }`}
                      >
                        {isSelected && <Check className="w-3 h-3" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Direct Contact Cards */}
            <div className="pt-6 border-t border-white/10 space-y-3">
              <span className="font-mono text-xs text-[#717684] uppercase tracking-wider block">
                DIRECT CHANNELS
              </span>

              {/* Email Card */}
              <div className="p-4 rounded-xl bg-[#121417] border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-white/5 text-[#ff5500]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-[#717684] uppercase block">
                      OFFICIAL EMAIL
                    </span>
                    <a
                      href={`mailto:${agencyEmail}`}
                      id="contact-direct-email-link"
                      className="font-mono text-sm text-white hover:text-[#ff5500] transition-colors"
                    >
                      {agencyEmail}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  id="copy-email-btn"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-[#8e929d] hover:text-white transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-xl bg-[#121417] border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-white/5 text-[#ff5500]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-[#717684] uppercase block">
                      PHONE & WHATSAPP
                    </span>
                    <a
                      href={`tel:${agencyPhoneClean}`}
                      id="contact-direct-phone-link"
                      className="font-mono text-sm text-white hover:text-[#ff5500] transition-colors"
                    >
                      {agencyPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    id="copy-phone-btn"
                    onClick={handleCopyPhone}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-[#8e929d] hover:text-white transition-colors"
                    title="Copy phone number"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <a
                    href={`tel:${agencyPhoneClean}`}
                    id="call-phone-link"
                    className="p-2 rounded-lg bg-[#ff5500]/10 text-[#ff5500] hover:bg-[#ff5500] hover:text-white transition-colors text-xs font-mono font-bold"
                  >
                    Call
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Interactive Project Brief Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              id="start-conversation-form"
              className="p-8 sm:p-10 rounded-2xl bg-[#121418] border border-white/15 space-y-6 shadow-xl relative"
            >
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div>
                  <h3 className="font-display font-bold text-2xl text-white">
                    Start A Conversation
                  </h3>
                  <p className="text-xs font-mono text-[#8e929d] mt-1">
                    Selected Focus: <span className="text-[#ff5500] font-semibold">{selectedNeed}</span>
                  </p>
                </div>
                <div className="font-mono text-[11px] px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[#8e929d]">
                  STEP 01 OF 01
                </div>
              </div>

              {statusMessage && (
                <div className="p-4 rounded-xl bg-[#ff5500]/10 border border-[#ff5500]/30 text-xs font-mono text-white">
                  {statusMessage}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="input-name" className="block font-mono text-xs text-[#8e929d] uppercase mb-2">
                    Your Name
                  </label>
                  <input
                    id="input-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Alex Vance"
                    className="w-full px-4 py-3 rounded-xl bg-[#0a0b0d] border border-white/10 text-white placeholder:text-[#555a68] focus:outline-none focus:border-[#ff5500] text-sm transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="input-company" className="block font-mono text-xs text-[#8e929d] uppercase mb-2">
                    Brand or Company
                  </label>
                  <input
                    id="input-company"
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="e.g. Acme Studio"
                    className="w-full px-4 py-3 rounded-xl bg-[#0a0b0d] border border-white/10 text-white placeholder:text-[#555a68] focus:outline-none focus:border-[#ff5500] text-sm transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="input-email" className="block font-mono text-xs text-[#8e929d] uppercase mb-2">
                    Email Address *
                  </label>
                  <input
                    id="input-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#0a0b0d] border border-white/10 text-white placeholder:text-[#555a68] focus:outline-none focus:border-[#ff5500] text-sm transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="input-phone" className="block font-mono text-xs text-[#8e929d] uppercase mb-2">
                    Phone / WhatsApp
                  </label>
                  <input
                    id="input-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-3 rounded-xl bg-[#0a0b0d] border border-white/10 text-white placeholder:text-[#555a68] focus:outline-none focus:border-[#ff5500] text-sm transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="input-message" className="block font-mono text-xs text-[#8e929d] uppercase mb-2">
                  Tell Us About The Opportunity
                </label>
                <textarea
                  id="input-message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Where is your brand right now, and what needs to move? (Target audience, current hurdles, timeline, goals...)"
                  className="w-full px-4 py-3 rounded-xl bg-[#0a0b0d] border border-white/10 text-white placeholder:text-[#555a68] focus:outline-none focus:border-[#ff5500] text-sm transition-colors resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="submit"
                  id="submit-brief-btn"
                  className="w-full sm:w-auto px-8 py-4 bg-[#ff5500] hover:bg-[#ff6a1f] text-white font-mono text-xs sm:text-sm font-bold tracking-wider uppercase rounded-xl transition-all duration-200 flex items-center justify-center gap-3 group active:scale-95 shadow-lg shadow-[#ff5500]/20"
                >
                  <span>START A CONVERSATION</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>

                <span className="font-mono text-xs text-[#717684]">
                  Direct transmission to Thothcell26@gmail.com
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
