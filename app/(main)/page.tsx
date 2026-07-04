import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Shubhalok Ghosh | Growth Executive & Commercial Leader',
}

const trustedBy = [
  'Johnson & Johnson',
  'Eli Lilly',
  'Jaguar Land Rover',
  'H&M',
  'Cigna',
]

const stats = [
  { value: '$500M+', label: 'Pipeline Built' },
  { value: '$300M+', label: 'Practice & Agency Scaled' },
  { value: '$1.3B',  label: 'Exit — Executive Team' },
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
    desc: "Rooted in a family legacy of service, education, and purpose going back to Mahatma Gandhi's independence movement. Business, at its core, is human — and that conviction shapes everything.",
  },
]

const services = [
  {
    title: 'Fractional Chief Growth Officer',
    desc: 'For growth-stage companies ($2M-$25M). Go-to-market strategy, revenue architecture, sales enablement, and cross-functional growth execution.',
    href: '/services#fractional-cmo',
    icon: '📊',
  },
  {
    title: 'Strategic Advisory',
    desc: 'For founders from seed through Series A. Commercialization strategy, positioning, product-market fit, and go-to-market architecture, including investor readiness and introductions.',
    href: '/services#advisory',
    icon: '🧭',
  },
]

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative bg-brand-navy overflow-hidden lg:min-h-screen">
        {/* background gradient */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, #E86C1A 0%, transparent 50%),
                              radial-gradient(circle at 80% 20%, #1A7A3C 0%, transparent 40%)`,
          }}
        />

        {/* flex-col on mobile, two-column grid on desktop */}
        <div className="relative flex flex-col lg:grid lg:grid-cols-2 lg:min-h-screen">

          {/* Photo — order 1 on mobile (shows above text), order 2 on desktop (right column) */}
          <div className="order-1 lg:order-2 relative h-[300px] sm:h-[360px] lg:h-auto mt-20 lg:mt-0 flex-shrink-0">
            <Image
              src="/shubhalok-headshot.jpg"
              alt="Shubhalok Ghosh"
              fill
              className="object-cover object-top lg:object-contain lg:object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Text — order 2 on mobile (below photo), order 1 on desktop (left column) */}
          <div className="order-2 lg:order-1 flex items-center px-6 sm:px-10 lg:px-16 xl:px-20 py-12 lg:py-24">
            <div className="max-w-xl">

              {/* Credential badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="inline-block text-brand-orange font-medium text-xs tracking-widest uppercase border border-brand-orange/40 px-3 py-1 rounded-full">
                  Top 100 Global CXO 2024
                </span>
                <span className="inline-block text-gray-300 font-medium text-xs tracking-widest uppercase border border-white/20 px-3 py-1 rounded-full">
                  TCS · J&amp;J · Merck · NAYAderm · Therakos
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6">
                I build the commercial engines that{' '}
                <span className="text-brand-orange">scale companies.</span>
              </h1>

              {/* Subheadline */}
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10">
                Growth Executive&nbsp;|&nbsp;Company Builder&nbsp;|&nbsp;Global Commercial Leader
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

        </div>
      </section>

      {/* ── Stats Bar ────────────────────────────────────────────────── */}
      <section className="bg-brand-navy border-t border-white/10 py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-serif font-bold text-brand-orange">
                  {stat.value}
                </div>
                <div className="text-gray-300 text-xs md:text-sm mt-1 uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Signature Client Work ─────────────────────────────────────── */}
      <section className="bg-white border-b border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-gray-400 mb-8">
            Signature Client Work
          </p>
          <div className="flex flex-wrap justify-center items-center gap-3">
            {trustedBy.map((name) => (
              <span
                key={name}
                className="inline-block px-5 py-2 rounded-full border border-gray-200 bg-gray-50 text-gray-500 font-semibold text-sm tracking-wide whitespace-nowrap hover:border-gray-300 hover:text-gray-700 transition-colors duration-150"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Shubhalok ────────────────────────────────────────────── */}
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

      {/* ── Who I Am ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="accent-bar" />
            <h2 className="section-heading">
              Enterprise experience.<br />
              <span className="text-brand-orange">Built for your stage.</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
                Executive growth leader with 25+ years building and scaling go-to-market engines
                across global organizations and founder-led businesses. Former CCO at TCS,
                commercial leader at J&amp;J and Merck. Now working with founder-led companies to
                build the commercial architecture that attracts customers and investors.
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
      </section>

      {/* ── Services — Two Lanes ─────────────────────────────────────── */}
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

      {/* ── Podcast CTA ──────────────────────────────────────────────── */}
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
              Nominate a Guest
            </Link>
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="accent-bar mx-auto" />
          <h2 className="section-heading mx-auto">
            Ready to build something that lasts?
          </h2>
          <p className="section-subheading mx-auto text-center mb-8">
            Whether you&apos;re building something new or scaling something that works —
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