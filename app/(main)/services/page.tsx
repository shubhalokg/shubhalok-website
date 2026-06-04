import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Fractional CMO and Strategic Advisory from Shubhalok Ghosh — go-to-market strategy, brand positioning, and operational execution for growth-stage and early-stage companies.',
}

const process = [
  {
    step: '01',
    title: 'Discovery Call',
    desc: 'A 30-minute conversation to understand your challenges, goals, and whether we\'re the right fit for each other.',
  },
  {
    step: '02',
    title: 'Diagnostic & Proposal',
    desc: 'I assess your current situation and propose a tailored engagement model, timeline, and structure.',
  },
  {
    step: '03',
    title: 'Kickoff & Alignment',
    desc: 'We align on goals, milestones, and working cadence. I get embedded in your world quickly.',
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
    a: 'Fractional means part-time but fully committed. You get a senior CMO for a defined number of days per month — at a fraction of the cost of a full-time hire. You get the strategy and leadership; you don\'t pay the full-time salary and benefits.',
  },
  {
    q: 'What size companies do you work with?',
    a: 'For Fractional CMO engagements, the sweet spot is growth-stage companies in the $2M–$25M range that have outgrown founder-led marketing. For Strategic Advisory, I work with early-stage founders from pre-seed through Series A.',
  },
  {
    q: 'How long are typical engagements?',
    a: 'Fractional CMO engagements typically run 6–12 months, as meaningful strategic transformation takes time. Advisory engagements can be structured as ongoing retainers or milestone-based projects. We find the right structure for your situation.',
  },
  {
    q: 'Do you work with companies outside the US?',
    a: 'Absolutely. I\'ve led global teams across the US, India, and EU throughout my career and am comfortable working across time zones and cultures.',
  },
  {
    q: 'Are equity structures available?',
    a: 'Yes — for Strategic Advisory engagements with early-stage founders, equity plus fee structures are available and often make sense. We discuss what works for both sides during the discovery process.',
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
              Strategy and execution.<br />
              <span className="text-brand-orange">Built for your stage.</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Two engagement models — designed around where you are in the journey
              and what you actually need to move forward.
            </p>
          </div>
        </div>
      </section>

      {/* Lane 1: Fractional CMO */}
      <section id="fractional-cmo" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-14 items-start">
            <div>
              <div className="inline-flex items-center gap-2 bg-brand-orange/10 text-brand-orange text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
                Lane 1
              </div>
              <div className="accent-bar" />
              <h2 className="section-heading">Fractional CMO</h2>
              <p className="text-brand-orange font-semibold text-lg mb-4 italic">
                Senior marketing leadership. Fractional cost.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                You need a CMO. You need strategy, execution, and accountability. But you&apos;re
                not ready for — or don&apos;t need — a full-time hire. That&apos;s exactly where
                I come in.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                I embed in your business as a strategic and operational partner — helping you build
                the go-to-market engine, clarify your brand positioning, enable your sales team,
                and execute the work that moves the needle.
              </p>
              <div className="bg-brand-navy/5 rounded-xl p-5 mb-6">
                <p className="text-xs font-bold uppercase tracking-widest text-brand-navy mb-3">
                  Ideal For
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Growth-stage companies ($2M–$25M) that have outgrown founder-led marketing
                  but aren&apos;t yet at the scale where a full-time CMO makes financial sense.
                  Engagements typically run 6–12 months.
                </p>
              </div>
              <Link href="/contact" className="btn-primary">
                Start the Conversation
              </Link>
            </div>

            <div className="card border-t-4 border-t-brand-orange">
              <h3 className="text-sm font-bold uppercase tracking-widest text-brand-navy mb-5">
                What&apos;s Included
              </h3>
              <ul className="space-y-3">
                {[
                  'Go-to-market strategy development and execution',
                  'Brand positioning and messaging architecture',
                  'Sales enablement — materials, process, and alignment',
                  'Marketing team hiring and management',
                  'MarTech stack assessment and optimization',
                  'KPI framework design and reporting cadence',
                  'Board and investor-level marketing narrative',
                  'Quarterly planning and OKR alignment',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700 text-sm">
                    <span className="w-5 h-5 rounded-full bg-brand-green flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Lane 2: Strategic Advisory */}
      <section id="advisory" className="py-24 bg-gray-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-14 items-start">
            <div className="md:order-2">
              <div className="inline-flex items-center gap-2 bg-brand-green/10 text-brand-green text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
                Lane 2
              </div>
              <div className="accent-bar" />
              <h2 className="section-heading">Strategic Advisory</h2>
              <p className="text-brand-orange font-semibold text-lg mb-4 italic">
                Founder thinking. Enterprise perspective.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                For early-stage founders who need more than a consultant — they need a thought
                partner who has been in the room, built the pitch, and knows the difference
                between a strategy that sounds good and one that actually works.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                I work with founders on the foundational questions: positioning, product-market
                fit, brand strategy, and go-to-market planning. The work is direct, specific,
                and built around your actual business — not a framework.
              </p>
              <div className="bg-brand-navy/5 rounded-xl p-5 mb-6">
                <p className="text-xs font-bold uppercase tracking-widest text-brand-navy mb-3">
                  Ideal For
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Early-stage founders from pre-seed through Series A who need strategic clarity
                  and an experienced partner to pressure-test their thinking. Equity plus fee
                  structures available.
                </p>
              </div>
              <Link href="/contact" className="btn-primary">
                Start the Conversation
              </Link>
            </div>

            <div className="card border-t-4 border-t-brand-green md:order-1">
              <h3 className="text-sm font-bold uppercase tracking-widest text-brand-navy mb-5">
                What We Work On
              </h3>
              <ul className="space-y-3">
                {[
                  'Company and product positioning',
                  'Product-market fit validation and messaging',
                  'Brand strategy and visual identity direction',
                  'Go-to-market planning and channel strategy',
                  'Investor narrative and pitch positioning',
                  'Founding team marketing capability development',
                  'Early customer acquisition and retention strategy',
                  'Equity + fee structure engagements for pre-revenue founders',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700 text-sm">
                    <span className="w-5 h-5 rounded-full bg-brand-orange flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

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
