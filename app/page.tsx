import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Shubhalok Ghosh | Strategic Advisor & Fractional CMO',
}

const trustedBy = [
  'Johnson & Johnson',
  'Pfizer',
  'Eli Lilly',
  'Bayer',
  'Jaguar Land Rover',
  'H&M',
  'Marks & Spencer',
  'Cigna',
  'Humana',
]

const differentiators = [
  {
    number: '01',
    title: '25 Years. Two Sides of the Table.',
    desc: '25 years of enterprise and startup leadership across MedTech, life sciences, healthcare, and retail — from Merck vaccine strategy to co-founding a biotech to building a global practice at TCS.',
  },
  {
    number: '02',
    title: 'Founder DNA.',
    desc: 'Built and co-founded companies. Led a startup through venture fundraising, another through a major acquisition, and ran business development across Asia-Pacific. Not advising from the sidelines.',
  },
  {
    number: '03',
    title: 'Human-First. Always.',
    desc: 'Rooted in a family legacy of service, education, and purpose going back to Mahatma Gandhi\'s independence movement. Business, at its core, is human — and that conviction shapes everything.',
  },
]

const services = [
  {
    title: 'Fractional CMO',
    desc: 'For growth-stage companies ($2M–$25M). Go-to-market strategy, brand positioning, sales enablement, and operational execution. Engagements typically 6–12 months.',
    href: '/services#fractional-cmo',
    icon: '📊',
  },
  {
    title: 'Strategic Advisory',
    desc: 'For early-stage founders (pre-seed through Series A). Positioning, product-market fit, brand strategy, and go-to-market planning. Equity + fee structures available.',
    href: '/services#advisory',
    icon: '🧭',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-brand-navy overflow-hidden min-h-screen flex items-center">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, #E86C1A 0%, transparent 50%),
                              radial-gradient(circle at 80% 20%, #1A7A3C 0%, transparent 40%)`,
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-block text-brand-orange font-medium text-xs tracking-widest uppercase border border-brand-orange/40 px-3 py-1 rounded-full">
                Top 100 Global CXO 2024
              </span>
              <span className="inline-block text-gray-300 font-medium text-xs tracking-widest uppercase border border-white/20 px-3 py-1 rounded-full">
                TCS · J&amp;J · Merck
              </span>
              <span className="inline-block text-gray-300 font-medium text-xs tracking-widest uppercase border border-white/20 px-3 py-1 rounded-full">
                Boston University MBA
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight mb-6">
              The Human<br />
              <span className="text-brand-orange">Advantage</span>
            </h1>
            <p className="text-gray-300 text-xl leading-relaxed mb-10 max-w-2xl">
              Strategic advisor to early-stage founders. Fractional CMO for growth-stage companies.
              Host of{' '}
              <span className="text-white font-semibold italic">
                HUMANity in the Age of AI
              </span>
              .
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services" className="btn-primary text-center">
                Work With Me
              </Link>
              <Link href="/work-podcast" className="btn-outline text-center">
                Listen to the Podcast
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="bg-white border-b border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-gray-400 mb-8">
            Trusted by world-class organizations
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-5">
            {trustedBy.map((name) => (
              <span
                key={name}
                className="text-gray-400 font-semibold text-sm tracking-wide hover:text-gray-600 transition-colors duration-150 whitespace-nowrap"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why Shubhalok */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="accent-bar mx-auto" />
            <h2 className="section-heading mx-auto">Why Shubhalok</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {differentiators.map((d) => (
              <div key={d.number} className="card border-t-4 border-t-brand-orange">
                <div className="text-brand-orange font-serif text-4xl font-bold mb-3">
                  {d.number}
                </div>
                <h3 className="text-lg font-bold text-brand-navy mb-3">{d.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro / Credibility */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-brand-navy to-brand-navy-light rounded-2xl overflow-hidden flex items-end justify-center shadow-2xl">
                <div className="text-center p-8 text-white">
                  <div className="text-6xl mb-4">👤</div>
                  <p className="text-gray-300 text-sm italic">
                    [Replace with professional headshot]
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-brand-orange text-white rounded-xl p-5 shadow-lg max-w-[220px]">
                <p className="font-serif text-lg font-bold leading-tight">
                  Strategic Advisor
                </p>
                <p className="text-orange-100 text-xs mt-1">&amp; Fractional CMO</p>
              </div>
            </div>

            <div>
              <div className="accent-bar" />
              <h2 className="section-heading">
                Enterprise experience.<br />
                <span className="text-brand-orange">Built for your stage.</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                I spent 25+ years building at the highest levels — GM at Merck, VP at Johnson
                &amp; Johnson, Chief Experience Officer at TCS — serving global enterprise clients
                across life sciences, healthcare, retail, and automotive.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                I also know what it means to build from scratch. I co-founded a dermatology biotech,
                led a company through a landmark acquisition, and ran business development across Asia-Pacific.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Today, through{' '}
                <a
                  href="https://tintaaladvisory.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-orange font-medium hover:underline"
                >
                  Tin Taal Advisory
                </a>
                , I bring that same strategic discipline to founders and growth-stage companies
                ready to build something that lasts.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/about" className="btn-primary">
                  My Full Story
                </Link>
                <Link href="/services" className="btn-outline">
                  How I Can Help
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services — Two Lanes */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="accent-bar mx-auto" />
            <h2 className="section-heading mx-auto">How I Work With You</h2>
            <p className="section-subheading mx-auto text-center">
              Two ways to engage — built around where you are in the journey.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="card group border-t-4 border-t-brand-green"
              >
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="text-xl font-bold text-brand-navy mb-3 group-hover:text-brand-orange transition-colors">
                  {s.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{s.desc}</p>
                <span className="inline-block text-brand-orange text-sm font-semibold group-hover:translate-x-1 transition-transform duration-150">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Podcast CTA */}
      <section className="py-20 bg-brand-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-brand-orange/20 border border-brand-orange/40 rounded-full px-4 py-1.5 text-brand-orange text-sm font-medium mb-6">
            🎙️ Podcast
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-3">
            HUMANity in the Age of AI
          </h2>
          <p className="text-brand-orange font-medium text-lg mb-5 italic">
            &ldquo;People are the future. Technology is the tool.&rdquo;
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            A podcast exploring what it means to lead, build, and stay human in a world being
            transformed by artificial intelligence. Guests include founders, executives, and
            community leaders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/work-podcast" className="btn-primary">
              Explore the Podcast
            </Link>
            <Link
              href="/contact"
              className="inline-block border-2 border-white text-white font-semibold px-7 py-3 rounded-lg hover:bg-white hover:text-brand-navy transition-colors duration-200"
            >
              Be a Guest
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="accent-bar mx-auto" />
          <h2 className="section-heading mx-auto">
            Ready to build something that lasts?
          </h2>
          <p className="section-subheading mx-auto text-center mb-8">
            Whether you need a fractional CMO, a strategic advisor, or a thought partner —
            let&apos;s talk.
          </p>
          <Link href="/contact" className="btn-primary text-lg px-10 py-4">
            Start the Conversation
          </Link>
        </div>
      </section>
    </>
  )
}
