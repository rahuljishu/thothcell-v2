import { Check, ShieldCheck, Zap, Sparkles, Brain, Compass, MessageSquareCode } from 'lucide-react';

export function SectionUs() {
  const beliefs = [
    {
      num: '01',
      title: 'GOOD COMMUNICATION STARTS WITH GOOD THINKING.',
      desc: 'Before producing words or pixels, we interrogate the core premise. Shallow thinking leads to empty content; rigorous thinking creates commanding brand authority.',
    },
    {
      num: '02',
      title: 'GOOD IDEAS NEED A PURPOSE.',
      desc: 'Creativity severed from business utility is indulgence. Every visual hook, post angle, and campaign theme serves a definitive commercial and cultural objective.',
    },
    {
      num: '03',
      title: 'GOOD SOCIAL MEDIA NEEDS SOMETHING TO SAY.',
      desc: 'Audiences tune out repetitive corporate announcements. We provide your brand with distinct perspectives, original stories, and arguments worth remembering.',
    },
    {
      num: '04',
      title: 'GOOD MOMENTUM NEEDS A NEXT MOVE.',
      desc: 'Spikes fade without structured follow-through. We engineer continuous continuity, transforming initial interest into sustained customer loyalty and pipeline.',
    },
  ];

  const cellElements = [
    { title: 'STRATEGIC THINKING', desc: 'Market research, category positioning, and audience psychology.' },
    { title: 'CREATIVE IDEAS', desc: 'Campaign concepts, distinctive art direction, and verbal tone.' },
    { title: 'SOCIAL MEDIA', desc: 'Daily execution, community dialogue, and native format mastery.' },
    { title: 'DIGITAL GROWTH', desc: 'Paid acceleration, pipeline lead generation, and performance optimization.' },
  ];

  return (
    <section id="us" className="py-24 sm:py-32 border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#ff5500] tracking-widest uppercase mb-3">
              <span className="w-2 h-2 rounded-full bg-[#ff5500]"></span>
              <span>[SECTION 05]</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl tracking-tight text-white uppercase">
              US
            </h2>
            <p className="font-display text-xl sm:text-2xl text-[#ff5500] mt-2 font-medium tracking-wide">
              We are a cell.
            </p>
          </div>

          <div className="max-w-xl">
            <p className="text-base sm:text-lg text-[#b2b7c4] leading-relaxed">
              <strong className="text-white">THOTH CELL</strong> brings together strategic thinking, creative ideas, social media and digital growth to help businesses communicate better and create meaningful momentum.
            </p>
          </div>
        </div>

        {/* The Cell Concept Grid */}
        <div className="mt-14 mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-mono text-xs tracking-widest text-[#717684] uppercase">
              // THE ANATOMY OF A CELL
            </h3>
            <span className="font-mono text-xs text-[#8e929d]">
              Zero bloated agency bureaucracy
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {cellElements.map((elem, idx) => (
              <div
                key={elem.title}
                id={`cell-element-${idx}`}
                className="p-6 rounded-xl bg-[#121417] border border-white/10 hover:border-[#ff5500]/40 transition-all group"
              >
                <div className="w-2 h-2 rounded-full bg-[#ff5500] mb-4 group-hover:scale-125 transition-transform" />
                <span className="font-mono text-xs text-[#717684] uppercase tracking-wider block mb-1">
                  COMPONENT 0{idx + 1}
                </span>
                <h4 className="font-display font-bold text-base text-white group-hover:text-[#ff5500] transition-colors mb-2">
                  {elem.title}
                </h4>
                <p className="text-xs text-[#9095a5] leading-relaxed">
                  {elem.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* WE BELIEVE: 4 Core Tenets */}
        <div className="pt-12 border-t border-white/10">
          <div className="mb-10">
            <span className="font-mono text-xs text-[#ff5500] uppercase tracking-widest block mb-1">
              THE DOCTRINE
            </span>
            <h3 className="font-display font-black text-3xl sm:text-4xl text-white uppercase tracking-tight">
              WE BELIEVE
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {beliefs.map((b) => (
              <div
                key={b.num}
                id={`belief-card-${b.num}`}
                className="p-8 rounded-2xl bg-[#111317] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between space-y-4"
              >
                <div>
                  <span className="font-mono text-xs text-[#ff5500] font-bold block mb-3">
                    // TENET {b.num}
                  </span>
                  <h4 className="font-display font-extrabold text-lg sm:text-xl text-white tracking-tight leading-snug">
                    {b.title}
                  </h4>
                </div>
                <p className="text-sm text-[#a3a8b7] leading-relaxed">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Callout Quote: Not a calendar of posts */}
        <div className="mt-16 p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-[#14161b] via-[#171920] to-[#14161b] border border-[#ff5500]/30 text-center max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#ff5500]/10 rounded-full blur-3xl pointer-events-none" />
          <span className="font-mono text-xs text-[#ff5500] uppercase tracking-widest block mb-4">
            OUR CORE DIFFERENTIATOR
          </span>
          <p className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-white leading-tight">
            "We don't see social media as a calendar of posts. We see it as a{' '}
            <span className="text-[#ff5500]">living conversation</span> between a business and the people it wants to reach."
          </p>
        </div>
      </div>
    </section>
  );
}
