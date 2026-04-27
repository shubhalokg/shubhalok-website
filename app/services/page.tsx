import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Fractional CMO, Marketing Services, Podcast Production, and Executive Coaching from Shubhalok Ghosh — enterprise marketing leadership for growing businesses.',
}

const services = [
  {
    id: 'fractional-cmo',
    icon: '📊',
    color: 'brand-orange',
    title: 'Fractional CMO',
    tagline: 'Senior marketing leadership. Fractional cost.',
    description:
      'You need a CMO. You need strategy, execution, and accountability. But you\'re not ready for — or don\'t need — a full-time hire. That\'s exactly where I come in.',
    details: [
      'Monthly strategic advisory retainer (typically 2–3 days/week)',
      'Marketing strategy development and quarterly planning',
      'Hiring and managing marketing talent and agencies',
      'MarTech stack assessment and optimization',
      'KPI framework design and reporting cadence',
      'Board and investor-level marketing narrative',
      'Demand generation and pipeline strategy',
    ],
    ideal: 'B2B companies under $25M who have outgrown founder-led marketing but aren\'t ready for a full-time CMO.',
    cta: 'Explore Fractional CMO',
  },
  {
    id: 'marketing',
    icon: '🎯',
    color: 'brand-green',
    title: 'Marketing Services',
    tagline: 'Strategy to execution — no fluff, just results.',
    description:
      'Beyond fractional leadership, I work with teams on targeted engagements to solve specific marketing challenges — from brand strategy to demand generation to MarTech transformation.',
    details: [
      'Brand positioning and messaging architecture',
      'B2B demand generation programs',
      'Account-Based Marketing (ABM) strategy',
      'Content marketing strategy and editorial planning',
      'MarTech stack design, selection, and implementation',
      'Customer journey mapping and CX audit',
      'Marketing analytics and attribution setup',
    ],
    ideal: 'Companies needing expert firepower on specific initiatives without ongoing retainer commitment.',
    cta: 'Explore Marketing Services',
  },
  {
    id: 'podcast',
    icon: '🎙️',
    color: 'brand-navy',
    title: 'Podcast Production',
    tagline: 'Your thought leadership. Amplified.',
    description:
      'Podcasting is one of the most powerful tools for B2B thought leadership, brand building, and community. I help executives and businesses launch and grow podcasts that attract the right audience.',
    details: [
      'Podcast concept development and positioning',
      'Format, cadence, and audience strategy',
      'Guest booking and outreach strategy',
      'Production workflow and tooling setup',
      'Show notes, transcripts, and content repurposing',
      'Launch strategy and distribution',
      'Ongoing coaching and episode consulting',
    ],
    ideal: 'Executives, consultants, and businesses ready to build a thought-leadership platform through audio content.',
    cta: 'Launch Your Podcast',
  },
  {
    id: 'coaching',
    icon: '🧭',
    color: 'brand-orange',
    title: 'Executive Coaching',
    tagline: 'Navigate change. Lead with clarity.',
    description:
      'One-on-one coaching for senior marketing leaders and founders who are navigating critical transitions, building their leadership presence, or scaling themselves as fast as their business.',
    details: [
      'Monthly 1:1 coaching sessions (60–90 minutes)',
      'Leadership presence and communication coaching',
      'Career navigation for marketing executives',
      'Navigating organizational change and transformation',
      'Building and leading high-performance marketing teams',
      'Personal brand and thought leadership development',
      'Accountability framework and goal-setting',
    ],
    ideal: 'CMOs, VPs of Marketing, and founders who want a trusted thought partner with real enterprise and SMB experience.',
    cta: 'Explore Executive Coaching',
  },
]

const process = [
  {
    step: '01',
    title: 'Discovery Call',
    desc: 'A 30-minute conversation to understand your challenges, goals, and whether we\'re the right fit for each other.',
  },
  {
    step: '02',
    title: 'Diagnostic & Proposal',
    desc: 'I assess your current marketing situation and propose a tailored engagement model, timeline, and investment.',
  },
  {
    step: '03',
    title: 'Kickoff & Alignment',
    desc: 'We align on goals, KPIs, and working cadence. I get embedded in your world quickly.',
  },
  {
    step: '04',
    title: 'Execute & Iterate',
    desc: 'Strategy meets execution. We work, measure, and continuously improve together.',
  },
]

const faqs = [
  {
    q: 'What does "fractional" mean exactly?',
    a: 'Fractional means part-time but fully committed. You get a senior-level CMO for a defined number of days per month — typically 2–3 days/week — at a fraction of the cost of a full-time hire. You get the strategy and leadership; you don\'t pay the full-time salary and benefits.',
  },
  {
    q: 'What size companies do you work with?',
    a: 'My sweet spot is B2B businesses under $25M in revenue that have outgrown founder-led marketing but aren\'t yet at the scale where a full-time CMO makes financial sense. That said, I also work with larger organizations on specific project engagements.',
  },
  {
    q: 'How long are typical engagements?',
    a: 'Fractional CMO engagements typically run 6–12 months minimum, as meaningful marketing transformation takes time. Project engagements (brand strategy, MarTech, etc.) are typically 60–90 days. Executive coaching is monthly, ongoing.',
  },
  {
    q: 'Do you work with companies outside the US?',
    a: 'Absolutely. I\'ve led global teams across the US, India, and EU throughout my career and am comfortable working across time zones and cultures.',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-navy pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-brand-orange font-medium text-sm tracking-widest uppercase mb-4">
              Services
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
              Enterprise-grade marketing.<br />
              <span className="text-brand-orange">Built for your scale.</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Four ways I help growing businesses build marketing that works — from fractional
              leadership to podcast production to one-on-one executive coaching.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      {services.map((service, i) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-20 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'} scroll-mt-20`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid md:grid-cols-2 gap-14 items-start ${i % 2 === 1 ? 'md:grid-flow-col' : ''}`}>
              {/* Left/Right content */}
              <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                <div className="inline-flex items-center gap-3 mb-5">
                  <span className="text-5xl">{service.icon}</span>
                  <div>
                    <div className="accent-bar mb-0" />
                  </div>
                </div>
                <h2 className="section-heading mt-4">{service.title}</h2>
                <p className="text-brand-orange font-semibold text-lg mb-4 italic">
                  {service.tagline}
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>

                <div className="bg-brand-navy/5 rounded-xl p-5 mb-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-navy mb-3">
                    Ideal For
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed">{service.ideal}</p>
                </div>

                <Link href="/contact" className="btn-primary">
                  {service.cta}
                </Link>
              </div>

              {/* Deliverables list */}
              <div className={`${i % 2 === 1 ? 'md:order-1' : ''} card border-t-4 border-t-brand-orange`}>
                <h3 className="text-sm font-bold uppercase tracking-widest text-brand-navy mb-5">
                  What&apos;s Included
                </h3>
                <ul className="space-y-3">
                  {service.details.map((d) => (
                    <li key={d} className="flex items-start gap-3 text-gray-700 text-sm">
                      <span className="w-5 h-5 rounded-full bg-brand-green flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Process */}
      <section className="py-20 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              How We Get Started
            </h2>
            <p className="text-gray-300 text-lg">
              A simple, transparent process from first conversation to real results.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p) => (
              <div key={p.step} className="bg-white/10 border border-white/20 rounded-xl p-6">
                <div className="text-brand-orange font-serif text-4xl font-bold mb-3">
                  {p.step}
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{p.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="accent-bar mx-auto" />
            <h2 className="section-heading mx-auto">Common Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="card">
                <h3 className="font-bold text-brand-navy mb-3 text-base">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="accent-bar mx-auto" />
          <h2 className="section-heading mx-auto">Ready to get started?</h2>
          <p className="section-subheading mx-auto text-center mb-8">
            Book a free 30-minute discovery call and let&apos;s find the right way to work together.
          </p>
          <Link href="/contact" className="btn-primary text-lg px-10 py-4">
            Book Your Discovery Call
          </Link>
        </div>
      </section>
    </>
  )
}
