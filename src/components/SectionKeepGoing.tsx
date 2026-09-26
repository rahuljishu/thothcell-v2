import { useState, useEffect } from 'react';
import { RotateCw, RefreshCcw, Eye, BookOpen, BrainCircuit, Sparkles, Megaphone, HeartHandshake, ArrowRight, Play, Pause } from 'lucide-react';

export function SectionKeepGoing() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const loopSteps = [
    {
      step: 1,
      label: 'OBSERVE',
      desc: 'We watch what people respond to. Real-time monitoring of engagement patterns, comment sentiment, and drop-off points.',
      icon: Eye,
    },
    {
      step: 2,
      label: 'LEARN',
      desc: 'We learn what creates genuine interest. Distinguishing between temporary algorithmic anomalies and enduring customer desire.',
      icon: BookOpen,
    },
    {
      step: 3,
      label: 'RETHINK',
      desc: 'We pivot and sharpen based on empirical data. Questioning assumptions to find fresher angles and deeper emotional hooks.',
      icon: BrainCircuit,
    },
    {
      step: 4,
      label: 'CREATE',
      desc: 'Then we create again. Producing refined, high-caliber social assets armed with proven insights rather than creative guesswork.',
      icon: Sparkles,
    },
    {
      step: 5,
      label: 'AMPLIFY',
      desc: 'Distributing winning creative with precise paid acceleration and strategic targeting to maximize reach and conversion.',
      icon: Megaphone,
    },
    {
      step: 6,
      label: 'ENGAGE',
      desc: 'Fostering two-way dialogue in comments, DMs, and community spaces to build authentic brand loyalty and inbound pipeline.',
      icon: HeartHandshake,
    },
    {
      step: 7,
      label: 'REPEAT',
      desc: 'The engine never stagnates. Every cycle makes the next move smarter, compounding brand equity and commercial momentum.',
      icon: RefreshCcw,
    },
  ];

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % loopSteps.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [isPlaying, loopSteps.length]);

  return (
    <section id="keep-going" className="py-24 sm:py-32 border-b border-white/10 relative overflow-hidden bg-[#0a0b0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#ff5500] tracking-widest uppercase mb-3">
              <span className="w-2 h-2 rounded-full bg-[#ff5500]"></span>
              <span>[SECTION 04]</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl tracking-tight text-white uppercase">
              KEEP GOING
            </h2>
            <p className="font-display text-xl sm:text-2xl text-[#ff5500] mt-2 font-medium tracking-wide">
              The boost isn't the business.
            </p>
          </div>

          <div className="max-w-md">
            <span className="font-mono text-xs text-[#717684] uppercase tracking-wider block mb-2">
              CORE PHILOSOPHY
            </span>
            <p className="text-base text-[#b2b7c4] leading-relaxed">
              Sustainable momentum outlasts temporary hype. We build systems that compound over quarters and years.
            </p>
          </div>
        </div>

        {/* The Manifesto: What happens after the spike? */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: The Reality of Spikes */}
          <div className="lg:col-span-5 p-8 rounded-2xl bg-[#121417] border border-white/10 space-y-6">
            <div className="space-y-3 font-mono text-xs text-[#8e929d] border-b border-white/10 pb-6">
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-white/40"></span>
                <span>A campaign can create a spike.</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-white/40"></span>
                <span>An ad can generate leads.</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-white/40"></span>
                <span>A promotion can create footfall.</span>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
                But what happens after the spike?
              </h3>
              <div className="p-4 rounded-xl bg-[#ff5500]/10 border border-[#ff5500]/30">
                <span className="font-display font-extrabold text-2xl sm:text-3xl text-[#ff5500] tracking-wider block">
                  WE KEEP GOING.
                </span>
              </div>
            </div>

            <div className="space-y-2 text-sm text-[#c4c8d5]">
              <p className="flex items-center gap-2">
                <span className="text-[#ff5500] font-mono font-bold">→</span> We watch what people respond to.
              </p>
              <p className="flex items-center gap-2">
                <span className="text-[#ff5500] font-mono font-bold">→</span> We learn what creates interest.
              </p>
              <p className="flex items-center gap-2">
                <span className="text-[#ff5500] font-mono font-bold">→</span> We identify what could work next.
              </p>
              <p className="flex items-center gap-2">
                <span className="text-[#ff5500] font-mono font-bold">→</span> Then we create again.
              </p>
            </div>
          </div>

          {/* Right: The Interactive Cycle Engine */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-2xl bg-[#14161b] border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-2 font-mono text-xs text-[#ff5500] uppercase tracking-wider">
                  <RotateCw className="w-3.5 h-3.5 animate-spin" />
                  <span>THE CONTINUOUS SOCIAL ENGINE</span>
                </div>

                <button
                  type="button"
                  id="toggle-loop-play-btn"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 text-xs font-mono text-[#8e929d] hover:text-white transition-colors"
                >
                  {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                  <span>{isPlaying ? 'PAUSE CYCLE' : 'PLAY CYCLE'}</span>
                </button>
              </div>

              {/* Formula breadcrumb */}
              <div className="py-6 overflow-x-auto scrollbar-none">
                <div className="flex items-center gap-2 min-w-max pb-2">
                  {loopSteps.map((step, idx) => {
                    const isActive = activeStep === idx;
                    return (
                      <div key={step.label} className="flex items-center gap-2">
                        <button
                          type="button"
                          id={`loop-step-btn-${step.label.toLowerCase()}`}
                          onClick={() => {
                            setActiveStep(idx);
                            setIsPlaying(false);
                          }}
                          className={`px-3 py-1.5 rounded-md font-mono text-xs font-bold transition-all ${
                            isActive
                              ? 'bg-[#ff5500] text-white shadow-md shadow-[#ff5500]/20 scale-105'
                              : 'bg-white/5 text-[#8e929d] hover:text-white hover:bg-white/10'
                          }`}
                        >
                          {step.label}
                        </button>
                        {idx < loopSteps.length - 1 && (
                          <span className="text-[#494e5c] text-xs font-mono">→</span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Active Step Details Box */}
              <div className="p-6 rounded-xl bg-[#0b0c0e] border border-white/10 relative overflow-hidden">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs text-[#ff5500] font-bold">
                    CYCLE STAGE 0{loopSteps[activeStep].step} OF 07
                  </span>
                  <span className="font-mono text-[10px] text-[#717684] uppercase">
                    Compounding Loop
                  </span>
                </div>

                <h4 className="font-display font-black text-2xl text-white mb-2 tracking-tight">
                  {loopSteps[activeStep].label}
                </h4>

                <p className="text-sm text-[#b2b7c4] leading-relaxed">
                  {loopSteps[activeStep].desc}
                </p>
              </div>
            </div>

            {/* Closing statement */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <blockquote className="font-display text-base sm:text-lg text-[#e6e8ee] font-medium leading-relaxed italic border-l-2 border-[#ff5500] pl-4">
                "Because sustained attention doesn't come from saying the same thing louder. It comes from having something new to say."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
