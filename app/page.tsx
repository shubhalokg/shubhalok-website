import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Shubhalok Ghosh | Fractional CMO & CX Leader',
}

const stats = [
  { value: '$300M+', label: 'Global Practice Built at TCS' },
  { value: '$500M+', label: 'Pipeline Generated' },
  { value: '25+', label: 'Years Across Pharma, Tech & CX' },
  { value: '4', label: 'Global Awards Won in 2024' },
]

const services = [
  {
    icon: '📊',
    title: 'Fractional CMO',
    description:
      'Senior marketing leadership without the full-time cost. Drive strategy, build your team, and deliver measurable B2B growth.',
    href: '/services#fractional-cmo',
  },
  {
    icon: '🎯',
    title: 'Marketing Services',
    description:
      'End-to-end MarTech transformation, demand generation, and brand positioning for businesses ready to scale.',
    href: '/services#marketing',
  },
  {
    icon: '🎙️',
    title: 'Podcast Production',
    description:
      'Launch or grow your thought-leadership podcast. From concept to distribution — strategy, production, and audience building.',
    href: '/services#podcast',
  },
  {
    icon: '🧭',
    title: 'Executive Coaching',
    description:
      'One-on-one coaching for marketing leaders and founders navigating growth, change, and the human side of business.',
    href: '/services#coaching',
  },
]

const industries = [
  'Life Sciences & Healthcare',
  'Retail & Consumer',
  'Automotive (Jaguar Land Rover)',
  'B2B Technology',
  'Financial Services',
  'Professional Services',
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-brand-navy overflow-hidden min-h-screen flex items-center">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-10"
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
              I built a $300M<br />
              global practice.<br />
              <span className="text-brand-orange">Now I build yours.</span>
            </h1>
            <p className="text-gray-300 text-xl leading-relaxed mb-10 max-w-2xl">
              Former TCS CXO. J&amp;J VP. Merck GM. Award-winning growth leader with
              25+ years across pharma, life sciences, and digital transformation.
              Now working with founders and growing businesses as Fractional CMO.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary text-center">
                Book a Discovery Call
              </Link>
              <Link href="/about" className="btn-outline text-center">
                Learn My Story
              </Link>
            </div>

            {/* Podcast pill */}
            <div className="mt-10 flex items-center gap-3 text-gray-300">
              <span className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm">
                <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
                Now listening:{' '}
                <span className="text-white font-medium italic">
                  HUMANity in the Age of AI
                </span>
              </span>
              <Link
                href="/work-podcast"
                className="text-brand-orange text-sm hover:underline font-medium"
              >
                Tune in →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-brand-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl md:text-4xl font-serif font-bold text-white mb-1">
                  {s.value}
                </div>
                <div className="text-green-100 text-sm font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro / Credibility */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            {/* Left: headshot placeholder */}
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-brand-navy to-brand-navy-light rounded-2xl overflow-hidden flex items-end justify-center shadow-2xl">
                <div className="text-center p-8 text-white">
                  <div className="text-6xl mb-4">👤</div>
                  <p className="text-gray-300 text-sm italic">
                    [Replace with professional headshot]
                  </p>
                </div>
              </div>
              {/* Accent card */}
              <div className="absolute -bottom-6 -right-6 bg-brand-orange text-white rounded-xl p-5 shadow-lg max-w-[200px]">
                <p className="font-serif text-lg font-bold leading-tight">
                  Fractional CMO
                </p>
                <p className="text-orange-100 text-xs mt-1">@ Amorbis.com</p>
              </div>
            </div>

            {/* Right: bio intro */}
            <div>
              <div className="accent-bar" />
              <h2 className="section-heading">
                Enterprise firepower.<br />
                <span className="text-brand-orange">Now at your scale.</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                I spent 25+ years building at the highest levels — GM at Merck, VP at Johnson
                &amp; Johnson, CXO at TCS — where I led a $300M+ global practice, generated
                $500M+ in pipeline, and drove landmark deals including a $100M J&amp;J platform
                transformation and a $35M Jaguar Land Rover GTM program.
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
                , I work with founder-led businesses to build AI-assisted GTM systems that
                scale revenue — the same strategic discipline, now applied where it can make
                the biggest difference.
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

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="accent-bar mx-auto" />
            <h2 className="section-heading mx-auto">How I Work With You</h2>
            <p className="section-subheading mx-auto text-center">
              Four ways I bring enterprise-grade marketing leadership to your business.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <Link key={s.title} href={s.href} className="card group">
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="text-lg font-bold text-brand-navy mb-2 group-hover:text-brand-orange transition-colors">
                  {s.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.description}</p>
                <span className="inline-block mt-4 text-brand-orange text-sm font-semibold group-hover:translate-x-1 transition-transform duration-150">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="accent-bar mx-auto" />
            <h2 className="section-heading mx-auto">Industries I Know Deeply</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((ind) => (
              <span
                key={ind}
                className="px-5 py-2.5 bg-brand-navy/5 border border-brand-navy/15 text-brand-navy font-medium rounded-full text-sm hover:bg-brand-navy hover:text-white transition-colors duration-200 cursor-default"
              >
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Podcast CTA */}
      <section className="py-20 bg-brand-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-brand-orange/20 border border-brand-orange/40 rounded-full px-4 py-1.5 text-brand-orange text-sm font-medium mb-6">
            🎙️ Featured Podcast
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-5">
            HUMANity in the Age of AI
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            A podcast exploring the essential human elements of leadership, marketing, and
            customer experience in an AI-driven world. New episodes weekly.
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
            Ready to grow your business?
          </h2>
          <p className="section-subheading mx-auto text-center mb-8">
            Whether you need a fractional CMO, a podcast strategy, or a thought partner for
            your marketing challenges — let&apos;s talk.
          </p>
          <Link href="/contact" className="btn-primary text-lg px-10 py-4">
            Start the Conversation
          </Link>
        </div>
      </section>
    </>
  )
}
