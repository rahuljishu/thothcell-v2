import { useState } from 'react';
import { Compass, Search, Target, Users, Sparkles, TrendingUp, HelpCircle, ArrowRight, CheckCircle } from 'lucide-react';

export function SectionThink() {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);

  const strategicQuestions = [
    {
      id: 'market',
      title: 'THE MARKET',
      question: 'What is changing?',
      detail:
        'Algorithms mutate, culture accelerates, and customer behavior shifts in real time. We map macroeconomic trends, platform algorithm updates, and shifting category benchmarks so your brand is never caught reacting to yesterday’s dynamics.',
      focus: 'Category Dynamics & Emerging Formats',
      icon: TrendingUp,
    },
    {
      id: 'audience',
      title: 'THE AUDIENCE',
      question: 'What makes them care?',
      detail:
        'Audiences don’t care about corporate announcements. They care about their own problems, status, entertainment, and ambitions. We unmask the underlying psychological triggers and conversation hotspots that make people stop scrolling.',
      focus: 'Desire, Skepticism & Attention Hotspots',
      icon: Users,
    },
    {
      id: 'competition',
      title: 'THE COMPETITION',
      question: 'Where is everyone saying the same thing?',
      detail:
        'Most industries devolve into identical corporate platitudes and visual clichés. We audit your competitive space to pinpoint the echo chamber so we know exactly what NOT to do.',
      focus: 'Identifying Clichés & Commodity Noise',
      icon: Search,
    },
    {
      id: 'opportunity',
      title: 'THE OPPORTUNITY',
      question: 'Where can your brand stand apart?',
      detail:
        'Where audience unmet need overlaps with competitor neglect and your authentic superpower. That is the wedge where your social content commands disproportionate share of voice.',
      focus: 'Uncontested White Space & Distinct Angles',
      icon: Compass,
    },
    {
      id: 'business',
      title: 'THE BUSINESS',
      question: 'What needs to move?',
      detail:
        'Likes without business outcomes are vanity. We establish the clear commercially meaningful lever: qualified inbound demo leads, customer acquisition cost reduction, brand equity, or retail velocity.',
      focus: 'Commercial Objectives & Measurable Levers',
      icon: Target,
    },
  ];

  const deliverables = [
    {
      title: 'Market Research',
      desc: 'In-depth category landscape mapping, competitor auditing, cultural trend evaluation, and whitespace detection.',
    },
    {
      title: 'Audience & Prospect Identification',
      desc: 'Defining core customer archetypes, behavioral motivations, high-intent buyer personas, and active digital habits.',
    },
    {
      title: 'Social Strategy',
      desc: 'Channel ecosystem prioritization, cadence architecture, positioning narratives, and community engagement playbook.',
    },
    {
      title: 'Content Strategy',
      desc: 'Editorial pillars, signature series concepts, format hierarchies (short-form video, thought leadership, carousels).',
    },
    {
      title: 'Brand & Communication Thinking',
      desc: 'Distinct tone of voice, visual aesthetic rules, point-of-view statements, and messaging matrix designed to endure.',
    },
  ];

  const activeQuestion = strategicQuestions[activeQuestionIndex];

  return (
    <section id="think" className="py-24 sm:py-32 border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#ff5500] tracking-widest uppercase mb-3">
              <span className="w-2 h-2 rounded-full bg-[#ff5500]"></span>
              <span>[SECTION 01]</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl tracking-tight text-white uppercase">
              THINK
            </h2>
            <p className="font-display text-xl sm:text-2xl text-[#ff5500] mt-2 font-medium tracking-wide">
              Before we create, we look.
            </p>
          </div>

          <div className="max-w-xl">
            <p className="text-base sm:text-lg text-[#b2b7c4] leading-relaxed">
              Good ideas begin with understanding. We study your market, audience, competition and business goals to find where your brand can create relevance and opportunity.
            </p>
          </div>
        </div>

        {/* Strategic Inquiries: The 5 Questions */}
        <div className="mt-14">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <h3 className="font-mono text-xs tracking-widest text-[#717684] uppercase">
              // THE 5 STRATEGIC INQUIRIES
            </h3>
            <span className="font-mono text-xs text-[#8e929d]">
              Interactive audit framework
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Question Selector List */}
            <div className="lg:col-span-6 flex flex-col gap-2.5">
              {strategicQuestions.map((q, idx) => {
                const isSelected = activeQuestionIndex === idx;
                const IconComponent = q.icon;
                return (
                  <button
                    key={q.id}
                    type="button"
                    id={`think-q-${q.id}`}
                    onClick={() => setActiveQuestionIndex(idx)}
                    className={`text-left p-5 rounded-xl border transition-all duration-200 flex items-start justify-between group ${
                      isSelected
                        ? 'bg-[#181a1f] border-[#ff5500] shadow-md shadow-[#ff5500]/5'
                        : 'bg-[#111316] border-white/10 hover:border-white/20 hover:bg-[#14161a]'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`mt-1 p-2 rounded-lg ${
                          isSelected
                            ? 'bg-[#ff5500] text-white'
                            : 'bg-white/5 text-[#8e929d] group-hover:text-white'
                        } transition-colors`}
                      >
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-mono text-xs tracking-wider uppercase text-[#8e929d] block mb-1">
                          {q.title}
                        </span>
                        <h4
                          className={`font-display font-bold text-lg sm:text-xl transition-colors ${
                            isSelected ? 'text-white' : 'text-[#d8dbe4] group-hover:text-white'
                          }`}
                        >
                          {q.question}
                        </h4>
                      </div>
                    </div>

                    <ArrowRight
                      className={`w-4 h-4 mt-2 transition-all ${
                        isSelected
                          ? 'text-[#ff5500] translate-x-1'
                          : 'text-white/20 group-hover:text-white/50'
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* In-depth Insight Card */}
            <div className="lg:col-span-6">
              <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-[#16181d] to-[#0e1013] border border-white/15 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff5500]/5 rounded-full blur-3xl pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between pb-6 border-b border-white/10">
                    <div className="font-mono text-xs text-[#ff5500] uppercase tracking-wider">
                      INVESTIGATION // {activeQuestion.title}
                    </div>
                    <div className="font-mono text-xs text-[#717684]">
                      PHASE 01.{activeQuestionIndex + 1}
                    </div>
                  </div>

                  <div className="py-6">
                    <span className="font-mono text-xs text-[#8e929d] uppercase tracking-wider">
                      PRIMARY INQUIRY
                    </span>
                    <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mt-1 mb-4">
                      {activeQuestion.question}
                    </h3>
                    <p className="text-base sm:text-lg text-[#c3c8d5] leading-relaxed">
                      {activeQuestion.detail}
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="font-mono text-[11px] text-[#717684] uppercase tracking-wider block">
                      STRATEGIC FOCUS
                    </span>
                    <span className="font-mono text-xs text-white font-medium">
                      {activeQuestion.focus}
                    </span>
                  </div>
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-[#ff5500]">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Rigorous Discovery</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Deliverables Section: FROM INSIGHT TO DIRECTION */}
        <div className="mt-20 pt-16 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="font-mono text-xs text-[#ff5500] uppercase tracking-widest">
                SYNTHESIS
              </span>
              <h3 className="font-display font-black text-2xl sm:text-4xl text-white uppercase tracking-tight mt-1">
                FROM INSIGHT TO DIRECTION.
              </h3>
            </div>
            <p className="text-sm font-mono text-[#8e929d] max-w-md">
              We translate observations into an actionable, repeatable roadmap ready for execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {deliverables.map((item, idx) => (
              <div
                key={item.title}
                id={`deliverable-item-${idx}`}
                className="p-5 rounded-xl bg-[#121418] border border-white/10 hover:border-[#ff5500]/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <span className="font-mono text-xs text-[#ff5500] font-bold block mb-3">
                    0{idx + 1}
                  </span>
                  <h4 className="font-display font-bold text-base text-white group-hover:text-[#ff5500] transition-colors leading-snug mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#8e929d] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 font-mono text-[10px] text-[#717684] uppercase tracking-wider">
                  Direction Ready
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
