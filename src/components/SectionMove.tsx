import { useState } from 'react';
import { Share2, Zap, Target, Filter, Sliders, ArrowRight, CheckCircle2, DollarSign, UserCheck, BarChart3 } from 'lucide-react';

export function SectionMove() {
  const [activePillar, setActivePillar] = useState(0);

  const movePillars = [
    {
      id: 'social-media',
      title: 'SOCIAL MEDIA',
      subtitle: 'Building and managing your everyday digital presence.',
      desc: 'Consistent execution, proactive community engagement, cultural newsjacking, and narrative continuity across your brand’s daily feeds. We handle the publishing rhythms, comment management, and real-time responsiveness that keeps your brand alive and authoritative.',
      metrics: 'Daily Cadence & Active Community',
      icon: Share2,
      tactics: ['Editorial Calendar Scheduling', 'Community Response Management', 'Platform Algorithm Alignment', 'Real-Time Story Updates'],
    },
    {
      id: 'paid-social',
      title: 'PAID SOCIAL',
      subtitle: 'Targeted campaigns designed around specific objectives.',
      desc: 'Paid media is an accelerator, not a crutch. We deploy disciplined ad spend on Meta, LinkedIn, YouTube, and TikTok to scale winning organic angles, capture high-intent segments, and lower customer acquisition costs with scientific precision.',
      metrics: 'Controlled CAC & Scalable Reach',
      icon: Zap,
      tactics: ['High-Intent Ad Creative', 'Iterative Creative Testing', 'Bid & Budget Optimization', 'Cross-Platform Retargeting'],
    },
    {
      id: 'lead-generation',
      title: 'LEAD GENERATION',
      subtitle: 'Turning attention into enquiries and prospects.',
      desc: 'Eyeballs don’t pay the bills; pipeline does. We construct frictionless lead capture funnels, direct message automation sequences, webinar/resource gates, and landing page touchpoints that convert casual scrollers into sales-qualified meetings.',
      metrics: 'Pipeline Volume & Sales Enquiries',
      icon: UserCheck,
      tactics: ['Direct Message Lead Funnels', 'High-Converting Offer Angles', 'CRM & Pipeline Integration', 'Lead Qualification Workflows'],
    },
    {
      id: 'audience-targeting',
      title: 'AUDIENCE TARGETING',
      subtitle: 'Finding the people most relevant to your business.',
      desc: 'Zero wasted spend. We pinpoint exact decision makers, high-net-worth buyers, niche category enthusiasts, and B2B stakeholders through custom audience modeling, lookalikes, and behavioral interest clusters.',
      metrics: 'Precision Relevance & Zero Waste',
      icon: Target,
      tactics: ['Custom Match Lists', 'Behavioral Lookalikes', 'Job Title & Firmographic Filters', 'Intent-Signal Retargeting'],
    },
    {
      id: 'optimisation',
      title: 'OPTIMISATION',
      subtitle: 'Using performance insights to make every next move smarter.',
      desc: 'Marketing without feedback is gambling. We dissect click-through rates, hook drop-off curves, conversion velocities, and qualitative feedback loops to refine creative and media targeting every single week.',
      metrics: 'Compounding ROAS & Higher Conversion',
      icon: Sliders,
      tactics: ['Hook Drop-off Analysis', 'Creative Fatigue Monitoring', 'Weekly Performance Reviews', 'Iterative Variant Deployment'],
    },
  ];

  const current = movePillars[activePillar];

  return (
    <section id="move" className="py-24 sm:py-32 border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#ff5500] tracking-widest uppercase mb-3">
              <span className="w-2 h-2 rounded-full bg-[#ff5500]"></span>
              <span>[SECTION 03]</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl tracking-tight text-white uppercase">
              MOVE
            </h2>
            <p className="font-display text-xl sm:text-2xl text-[#ff5500] mt-2 font-medium tracking-wide">
              Good ideas deserve to travel.
            </p>
          </div>

          <div className="max-w-xl">
            <p className="text-base sm:text-lg text-[#b2b7c4] leading-relaxed">
              The right idea needs the right audience. We combine social media management with paid campaigns and lead generation to put your brand in front of the people who matter.
            </p>
          </div>
        </div>

        {/* Distribution Pipeline Architecture */}
        <div className="mt-14">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-mono text-xs tracking-widest text-[#717684] uppercase">
              // WE MOVE: 5 GROWTH PILLARS
            </h3>
            <span className="font-mono text-xs text-[#8e929d]">
              Audience acquisition engine
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Pillar Navigator */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              {movePillars.map((pillar, idx) => {
                const isSelected = activePillar === idx;
                const Icon = pillar.icon;
                return (
                  <button
                    key={pillar.id}
                    type="button"
                    id={`move-pillar-${pillar.id}`}
                    onClick={() => setActivePillar(idx)}
                    className={`p-5 rounded-xl border text-left transition-all duration-200 flex items-start gap-4 ${
                      isSelected
                        ? 'bg-[#181a1f] border-[#ff5500] shadow-md shadow-[#ff5500]/5'
                        : 'bg-[#111316] border-white/10 hover:border-white/20 hover:bg-[#14161a]'
                    }`}
                  >
                    <div
                      className={`p-2 rounded-lg mt-0.5 ${
                        isSelected ? 'bg-[#ff5500] text-white' : 'bg-white/5 text-[#8e929d]'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs text-[#8e929d] tracking-wider uppercase">
                          0{idx + 1}
                        </span>
                        {isSelected && (
                          <span className="font-mono text-[10px] text-[#ff5500] uppercase font-bold">
                            Active Lens
                          </span>
                        )}
                      </div>
                      <h4 className="font-display font-bold text-lg sm:text-xl text-white mt-1">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-[#9aa0b0] mt-1 line-clamp-1">
                        {pillar.subtitle}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Deep Dive Panel */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-[#131519] to-[#0c0d10] border border-white/15 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-6 border-b border-white/10">
                    <span className="font-mono text-xs text-[#ff5500] uppercase tracking-wider">
                      PROPULSION SYSTEM // {current.title}
                    </span>
                    <span className="font-mono text-xs text-[#8e929d]">
                      TARGETED DISTRIBUTION
                    </span>
                  </div>

                  <div className="py-6 space-y-4">
                    <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                      {current.title}
                    </h3>
                    <p className="font-display text-lg text-[#ff5500] font-semibold">
                      {current.subtitle}
                    </p>
                    <p className="text-base text-[#c3c8d5] leading-relaxed">
                      {current.desc}
                    </p>
                  </div>

                  <div className="pt-4 space-y-3">
                    <span className="font-mono text-xs text-[#717684] uppercase tracking-wider block">
                      TACTICAL EXECUTION PLAYBOOK
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {current.tactics.map((tactic) => (
                        <div
                          key={tactic}
                          className="flex items-center gap-2.5 p-3 rounded-lg bg-white/5 border border-white/5 text-xs text-[#e1e4ed]"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#ff5500] shrink-0" />
                          <span>{tactic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="font-mono text-[10px] text-[#717684] uppercase tracking-wider block">
                      MEASURABLE OUTCOME
                    </span>
                    <span className="font-mono text-sm text-white font-bold">
                      {current.metrics}
                    </span>
                  </div>
                  <div className="font-mono text-xs text-[#ff5500] flex items-center gap-1.5">
                    <span>Engine Velocity Active</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
