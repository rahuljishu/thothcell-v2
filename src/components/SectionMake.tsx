import { useState } from 'react';
import { Sparkles, Layers, MessageSquare, Palette, Eye, ArrowUpRight, Play, Check } from 'lucide-react';

export function SectionMake() {
  const [selectedMakeIndex, setSelectedMakeIndex] = useState(0);

  const makeItems = [
    {
      id: 'content',
      title: 'CONTENT',
      tagline: 'Posts, carousels, videos, stories and more.',
      details:
        'High-retention creative tailored to platform native psychology. We produce editorial-grade carousels, dynamic vertical short-form reels, sharp thought-leadership graphics, and interactive story loops designed for immediate dwell-time.',
      formats: ['Editorial Carousels', 'Short-Form Video & Reels', 'Interactive Stories', 'Infographic Systems'],
      metricFocus: 'High Save & Share Velocity',
      mockupType: 'content',
      icon: Layers,
    },
    {
      id: 'campaigns',
      title: 'CAMPAIGNS',
      tagline: 'Creative ideas built around a purpose.',
      details:
        'Not arbitrary promotional noise, but conceptually driven initiatives that rally an audience around a cultural tension, product milestone, or paradigm shift. Built with multi-phase teaser, launch, and sustainment architecture.',
      formats: ['Brand Launch Moments', 'Product Drop Activations', 'Cultural Stunts', 'Hero Narrative Series'],
      metricFocus: 'Disproportionate Mindshare & Buzz',
      mockupType: 'campaigns',
      icon: Sparkles,
    },
    {
      id: 'conversations',
      title: 'CONVERSATIONS',
      tagline: 'Content that invites people to engage.',
      details:
        'Monologues are forgotten; discussions are bookmarked. We craft provocative prompts, contrarian category takes, community polls, and comment-driving hooks that transform passive lurkers into active brand advocates.',
      formats: ['Contrarian Industry Takes', 'Community Debate Starters', 'User Story Amplification', 'Executive Q&A Playbooks'],
      metricFocus: 'Organic Comment Depth & Affinity',
      mockupType: 'conversations',
      icon: MessageSquare,
    },
    {
      id: 'identities',
      title: 'IDENTITIES',
      tagline: 'Visual and verbal systems people recognise.',
      details:
        'In an endless feed, distinctive memory structures win. We construct cohesive typography systems, art direction rules, color accents, layout grids, and verbal tone guidelines that make your brand identifiable in 0.2 seconds.',
      formats: ['Social Design Systems', 'Verbal Tone Guidelines', 'Feed Grid & Story Templates', 'Motion Graphics Presets'],
      metricFocus: 'Instant Feed Recognisability',
      mockupType: 'identities',
      icon: Palette,
    },
    {
      id: 'experiences',
      title: 'EXPERIENCES',
      tagline: 'New ways for audiences to discover and interact with your brand.',
      details:
        'From interactive AR filters and custom branded audio to live digital events and community challenges—we invent immersive touchpoints that make your audience active participants rather than spectators.',
      formats: ['Interactive Challenges', 'Live Digital Drops', 'Custom Sound & Audio Hooks', 'Collaborative Audience Co-Creation'],
      metricFocus: 'Deep Immersion & Retention',
      mockupType: 'experiences',
      icon: Eye,
    },
  ];

  const currentItem = makeItems[selectedMakeIndex];

  return (
    <section id="make" className="py-24 sm:py-32 border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#ff5500] tracking-widest uppercase mb-3">
              <span className="w-2 h-2 rounded-full bg-[#ff5500]"></span>
              <span>[SECTION 02]</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl tracking-tight text-white uppercase">
              MAKE
            </h2>
            <p className="font-display text-xl sm:text-2xl text-[#ff5500] mt-2 font-medium tracking-wide">
              Turn insight into something people notice.
            </p>
          </div>

          <div className="max-w-xl">
            <p className="text-base sm:text-lg text-[#b2b7c4] leading-relaxed">
              We create social content and campaigns that give your brand a distinct voice and your audience something worth paying attention to.
            </p>
          </div>
        </div>

        {/* WE MAKE Section */}
        <div className="mt-14">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-mono text-xs tracking-widest text-[#717684] uppercase">
              // WE MAKE: 5 PRODUCTION CAPABILITIES
            </h3>
            <span className="font-mono text-xs text-[#8e929d]">
              Click capability to inspect output
            </span>
          </div>

          {/* Tab Navigation for "WE MAKE" */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
            {makeItems.map((item, idx) => {
              const isSelected = selectedMakeIndex === idx;
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  type="button"
                  id={`make-tab-${item.id}`}
                  onClick={() => setSelectedMakeIndex(idx)}
                  className={`p-4 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#1a1c22] border-[#ff5500] text-white shadow-lg shadow-[#ff5500]/10'
                      : 'bg-[#111316] border-white/10 text-[#8e929d] hover:bg-[#15171c] hover:text-white hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3 w-full">
                    <span className={`font-mono text-xs font-bold ${isSelected ? 'text-[#ff5500]' : 'text-[#717684]'}`}>
                      0{idx + 1}
                    </span>
                    <Icon className={`w-4 h-4 ${isSelected ? 'text-[#ff5500]' : 'text-[#717684]'}`} />
                  </div>
                  <span className="font-display font-bold text-sm tracking-wider uppercase">
                    {item.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Interactive Feature Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 rounded-2xl bg-[#121418] border border-white/10">
            {/* Left Detail Column */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-xs text-[#ff5500] uppercase tracking-wider mb-4">
                  <span>DISCIPLINE // {currentItem.title}</span>
                </div>

                <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight mb-2">
                  {currentItem.title}
                </h3>
                <p className="font-display text-lg text-[#ff5500] font-semibold mb-6">
                  {currentItem.tagline}
                </p>

                <p className="text-sm sm:text-base text-[#b2b7c4] leading-relaxed mb-6">
                  {currentItem.details}
                </p>

                <div className="space-y-3">
                  <span className="font-mono text-xs text-[#717684] uppercase tracking-wider block">
                    CORE DELIVERABLES & FORMATS
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {currentItem.formats.map((fmt) => (
                      <div
                        key={fmt}
                        className="flex items-center gap-2 p-2.5 rounded-lg bg-white/5 border border-white/5 text-xs text-[#e1e4ed]"
                      >
                        <Check className="w-3.5 h-3.5 text-[#ff5500] shrink-0" />
                        <span>{fmt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="font-mono text-[10px] text-[#717684] uppercase tracking-wider block">
                    NORTH STAR METRIC
                  </span>
                  <span className="font-mono text-xs text-white font-semibold">
                    {currentItem.metricFocus}
                  </span>
                </div>
                <div className="font-mono text-xs text-[#8e929d]">
                  Engine Ready Output
                </div>
              </div>
            </div>

            {/* Right Visual Simulator Column */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="w-full rounded-xl bg-[#090a0c] border border-white/15 p-6 relative overflow-hidden">
                {/* Visual indicator of what makes THOTH CELL content distinct */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5500]" />
                    <span className="font-mono text-xs text-[#e1e4ed] font-medium">THOTH CELL CREATIVE LAB</span>
                  </div>
                  <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-white/10 text-[#8e929d]">
                    LIVE ASSET SPEC
                  </span>
                </div>

                <div className="my-6 space-y-4">
                  {/* Visual card mimicking high-impact creative output */}
                  <div className="p-6 rounded-lg bg-[#15171c] border border-white/10 space-y-4">
                    <div className="flex items-center justify-between text-xs font-mono text-[#8e929d]">
                      <span>FORMAT: {currentItem.title}</span>
                      <span className="text-[#ff5500]">RETENTION DESIGNED</span>
                    </div>

                    <div className="space-y-2 py-2">
                      <div className="text-xs font-mono text-[#717684] uppercase">
                        [ HOOK ARCHITECTURE ]
                      </div>
                      <p className="font-display font-bold text-xl sm:text-2xl text-white">
                        "{currentItem.tagline}"
                      </p>
                    </div>

                    <div className="grid grid-cols-3 gap-2 pt-2 text-center">
                      <div className="p-2.5 rounded bg-white/5 border border-white/5">
                        <span className="block font-mono text-[10px] text-[#717684]">STOP-RATE</span>
                        <span className="font-mono text-sm text-white font-bold">Top 3%</span>
                      </div>
                      <div className="p-2.5 rounded bg-white/5 border border-white/5">
                        <span className="block font-mono text-[10px] text-[#717684]">CLARITY</span>
                        <span className="font-mono text-sm text-[#ff5500] font-bold">Singular</span>
                      </div>
                      <div className="p-2.5 rounded bg-white/5 border border-white/5">
                        <span className="block font-mono text-[10px] text-[#717684]">VOICE</span>
                        <span className="font-mono text-sm text-white font-bold">Distinct</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-[#8e929d] font-mono leading-relaxed">
                    Designed to break category blindness and build lasting brand recall across Instagram, LinkedIn, TikTok, and YouTube.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
