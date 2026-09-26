import { ArrowDown, ArrowUpRight, CheckCircle2, TrendingUp, Users, Zap } from 'lucide-react';

interface HeroProps {
  onOpenInquiry: () => void;
}

export function Hero({ onOpenInquiry }: HeroProps) {
  const pillars = [
    { num: '01', title: 'THINK', tag: 'Strategy & Insight', href: '#think', desc: 'Before we create, we look.' },
    { num: '02', title: 'MAKE', tag: 'Creative & Content', href: '#make', desc: 'Turn insight into something people notice.' },
    { num: '03', title: 'MOVE', tag: 'Growth & Distribution', href: '#move', desc: 'Good ideas deserve to travel.' },
    { num: '04', title: 'KEEP GOING', tag: 'Sustained Momentum', href: '#keep-going', desc: 'The boost isn\'t the business.' },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-32 pb-20 flex flex-col justify-between overflow-hidden border-b border-white/10 bg-grid-pattern"
    >
      {/* Subtle atmospheric ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#ff5500]/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
        {/* Top Tagline / Meta Marker */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#ff5500] font-mono text-xs font-semibold tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5500] animate-ping" />
            <span>STARTUP SOCIAL MEDIA STUDIO</span>
          </div>
          <span className="text-xs font-mono text-[#717684]">
            [ EST. 2026 // GLOBAL EXECUTION ]
          </span>
        </div>

        {/* Massive Agency Headline */}
        <div className="space-y-4 mb-8">
          <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] text-white">
            THINK. MAKE.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-[#8e929d]">
              MOVE.{' '}
            </span>
            <span className="text-[#ff5500]">KEEP GOING.</span>
          </h1>

          <p className="max-w-3xl text-lg sm:text-xl md:text-2xl text-[#c1c6d4] font-normal leading-relaxed pt-2">
            <strong className="text-white font-semibold">THOTH CELL</strong> builds social media into a continuous engine for visibility, engagement and business development.
          </p>
        </div>

        {/* Primary Action Row */}
        <div className="flex flex-wrap items-center gap-4 pt-2 mb-16">
          <button
            type="button"
            id="hero-start-conversation-btn"
            onClick={onOpenInquiry}
            className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#ff5500] hover:bg-[#ff6a1f] text-white font-mono text-xs sm:text-sm font-bold tracking-wider uppercase rounded-lg transition-all duration-200 shadow-lg shadow-[#ff5500]/20 group active:scale-95"
          >
            <span>START A CONVERSATION</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>

          <a
            href="#think"
            id="hero-explore-method-btn"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/5 hover:bg-white/10 text-white font-mono text-xs sm:text-sm font-medium tracking-wider uppercase rounded-lg border border-white/15 transition-all duration-200"
          >
            <span>Explore The System</span>
            <ArrowDown className="w-4 h-4 text-[#8e929d]" />
          </a>

          <div className="flex items-center gap-4 ml-auto sm:ml-4 text-xs font-mono text-[#8e929d] border-l border-white/10 pl-4 py-1">
            <span>Direct: Thothcell26@gmail.com</span>
          </div>
        </div>

        {/* 4 Interactive Process Anchor Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-6 border-t border-white/10">
          {pillars.map((p) => (
            <a
              key={p.num}
              href={p.href}
              id={`hero-pillar-${p.num}`}
              className="group p-5 rounded-xl bg-[#121417]/70 hover:bg-[#181a1f] border border-white/10 hover:border-[#ff5500]/40 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs text-[#ff5500] font-bold">{p.num}</span>
                  <span className="font-mono text-[10px] text-[#717684] uppercase tracking-wider">{p.tag}</span>
                </div>
                <h3 className="font-display font-bold text-xl text-white group-hover:text-[#ff5500] transition-colors">
                  {p.title}
                </h3>
                <p className="text-xs text-[#a0a5b3] mt-2 line-clamp-2">
                  {p.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#717684] group-hover:text-white transition-colors">
                <span>View Phase</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Ticker tape banner */}
      <div className="relative mt-12 py-3 bg-[#111317] border-y border-white/10 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee gap-8 items-center text-xs font-mono tracking-widest text-[#8e929d]">
          <span className="flex items-center gap-2 text-white font-semibold">
            <Zap className="w-3.5 h-3.5 text-[#ff5500]" /> CONTINUOUS SOCIAL MEDIA ENGINE
          </span>
          <span>·</span>
          <span>MARKET RESEARCH</span>
          <span>·</span>
          <span>AUDIENCE IDENTIFICATION</span>
          <span>·</span>
          <span>CREATIVE CAMPAIGNS</span>
          <span>·</span>
          <span>PAID SOCIAL AMPLIFICATION</span>
          <span>·</span>
          <span>LEAD GENERATION</span>
          <span>·</span>
          <span>SUSTAINED ATTENTION</span>
          <span>·</span>
          <span className="text-[#ff5500]">THOTH CELL 2026</span>
          <span>·</span>
          <span>NOT A CALENDAR OF POSTS — A LIVING CONVERSATION</span>
        </div>
      </div>
    </section>
  );
}
