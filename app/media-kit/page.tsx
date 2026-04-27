import Link from 'next/link'
import type { Metadata } from 'next'
import CopyBioButton from '@/components/CopyBioButton'

export const metadata: Metadata = {
  title: 'Media Kit',
  description:
    'Media kit for Shubhalok Ghosh — speaker bio, headshots, podcast details, and booking information for media, podcasts, and speaking engagements.',
}

const speakingTopics = [
  {
    title: 'The Human Advantage in the Age of AI',
    desc: 'Why the businesses that win in an AI-saturated market will be those that double down on empathy, creativity, and human connection.',
    format: 'Keynote / Panel',
  },
  {
    title: 'Fractional Leadership: The Future of the C-Suite',
    desc: 'How the rise of fractional executives is democratizing access to senior talent and what it means for the future of work.',
    format: 'Keynote / Workshop',
  },
  {
    title: 'CX Transformation That Actually Works',
    desc: 'The difference between companies that talk about customer experience and those that build it into their DNA — and how to become the latter.',
    format: 'Keynote / Workshop',
  },
  {
    title: 'MarTech Without the Madness',
    desc: 'How to build a marketing technology stack that enables rather than overwhelms — and how to get your team to actually use it.',
    format: 'Workshop / Panel',
  },
  {
    title: 'Building Marketing That Scales',
    desc: 'A framework for growing businesses moving from founder-led marketing to scalable, strategic marketing infrastructure.',
    format: 'Keynote / Workshop',
  },
  {
    title: 'Global Marketing Leadership',
    desc: 'Lessons from leading marketing teams across the US, India, and EU — navigating culture, complexity, and change at scale.',
    format: 'Keynote / Panel',
  },
]

const fastFacts = [
  { label: 'Current Role', value: 'Fractional CMO, Amorbis.com' },
  { label: 'Previous Title', value: 'Chief Experience Officer, TCS' },
  { label: 'Experience', value: '25+ years in marketing & CX' },
  { label: 'Geography', value: 'US, India, EU — global perspective' },
  { label: 'Podcast', value: 'HUMANity in the Age of AI' },
  { label: 'Industries', value: 'Life Sciences, Retail, Auto, B2B Tech' },
]

const pressBio = `Shubhalok Ghosh is a global marketing and customer experience leader with over 25 years of experience at the intersection of strategy, technology, and human connection.

As Chief Experience Officer at Tata Consultancy Services (TCS), Shubhalok led CX and marketing transformation programs for Fortune 500 clients across three continents — the US, India, and the EU. His industry depth spans life sciences, healthcare, retail, automotive (including Jaguar Land Rover), and B2B technology.

Today, Shubhalok serves as Fractional CMO at Amorbis.com, helping businesses under $25M access senior marketing leadership that drives measurable B2B growth. He also hosts the podcast "HUMANity in the Age of AI," which explores how leaders, marketers, and organizations can leverage technology while preserving the irreplaceable human elements of great business.

Shubhalok speaks and advises on customer experience transformation, MarTech strategy, fractional leadership, and the human future of AI-driven marketing.`

export default function MediaKitPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-navy pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-brand-orange font-medium text-sm tracking-widest uppercase mb-4">
              Media Kit
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
              Speaker. Podcast Host.<br />
              <span className="text-brand-orange">CX Thought Leader.</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Everything you need to book Shubhalok for your podcast, stage, or media feature.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="btn-primary text-center"
              >
                Download Full Media Kit
              </a>
              <Link href="/contact" className="btn-outline text-center">
                Book Shubhalok
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick facts + headshot */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-14 items-start">
            {/* Headshot area */}
            <div>
              <div className="grid grid-cols-2 gap-4">
                {/* Primary headshot */}
                <div className="col-span-2 aspect-[16/9] bg-gradient-to-br from-brand-navy to-brand-navy-light rounded-xl flex items-center justify-center shadow-lg">
                  <div className="text-center text-white p-6">
                    <div className="text-5xl mb-3">👤</div>
                    <p className="text-sm text-gray-300 italic">Primary Headshot</p>
                    <p className="text-xs text-gray-400 mt-1">[Replace with hi-res headshot]</p>
                  </div>
                </div>
                {/* Secondary headshots */}
                <div className="aspect-square bg-brand-navy/10 rounded-lg flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="text-3xl mb-2">👤</div>
                    <p className="text-xs text-gray-400">Headshot 2</p>
                  </div>
                </div>
                <div className="aspect-square bg-brand-navy/10 rounded-lg flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="text-3xl mb-2">🎙️</div>
                    <p className="text-xs text-gray-400">Podcast / Speaking</p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-400 mt-3 text-center">
                High-resolution images available via download or on request.
              </p>
              <div className="text-center mt-4">
                <a
                  href="#"
                  className="text-brand-orange text-sm font-medium hover:underline"
                >
                  Download All Headshots (ZIP)
                </a>
              </div>
            </div>

            {/* Fast facts + short bio */}
            <div>
              <div className="accent-bar" />
              <h2 className="section-heading">Fast Facts</h2>
              <div className="space-y-3 mb-8">
                {fastFacts.map((f) => (
                  <div key={f.label} className="flex gap-4 items-baseline">
                    <span className="text-xs font-bold uppercase tracking-wide text-brand-orange w-32 flex-shrink-0">
                      {f.label}
                    </span>
                    <span className="text-gray-700 text-sm">{f.value}</span>
                  </div>
                ))}
              </div>

              <div className="bg-brand-navy/5 rounded-xl p-5">
                <h3 className="text-sm font-bold uppercase tracking-widest text-brand-navy mb-3">
                  One-Line Bio
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed italic">
                  &ldquo;Former TCS Chief Experience Officer, Fractional CMO, and host of
                  &lsquo;HUMANity in the Age of AI&rsquo; — helping businesses and leaders
                  grow through human-centered marketing and CX strategy.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full bio */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="accent-bar mx-auto" />
            <h2 className="section-heading mx-auto">Press Biography</h2>
          </div>
          <div className="card">
            <div className="flex justify-between items-center mb-5">
              <h3 className="text-sm font-bold uppercase tracking-widest text-brand-navy">
                Full Bio (Press Use)
              </h3>
              <CopyBioButton text={pressBio} />
            </div>
            <div className="prose prose-sm text-gray-600 space-y-3 leading-relaxed">
              {pressBio.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Speaking topics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="accent-bar mx-auto" />
            <h2 className="section-heading mx-auto">Speaking Topics</h2>
            <p className="section-subheading mx-auto text-center">
              Available for keynotes, panels, workshops, and podcast guest appearances.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {speakingTopics.map((topic) => (
              <div key={topic.title} className="card">
                <span className="inline-block text-xs font-bold uppercase tracking-wide text-brand-orange bg-brand-orange/10 px-2.5 py-1 rounded-full mb-4">
                  {topic.format}
                </span>
                <h3 className="font-bold text-brand-navy text-base mb-2 leading-snug">
                  {topic.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{topic.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Podcast for guest pitching */}
      <section className="py-20 bg-brand-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold text-white mb-4">
                Podcast: HUMANity in the Age of AI
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                A weekly show exploring human-centered leadership, marketing, and CX
                at the intersection of AI and business. Targeting executives, marketers,
                and business leaders.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-brand-orange">▶</span> Weekly release cadence
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-brand-orange">▶</span> 30–60 minute episodes
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-brand-orange">▶</span> Available on all major platforms
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-brand-orange">▶</span> B2B executive audience
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="bg-white/10 border border-white/20 rounded-2xl p-8">
                <div className="text-4xl mb-4">🎙️</div>
                <h3 className="text-white font-bold text-lg mb-2">Pitch as a Guest</h3>
                <p className="text-gray-300 text-sm mb-6">
                  Are you an executive, marketer, or CX leader with a compelling story?
                  We&apos;d love to talk.
                </p>
                <Link
                  href="/contact"
                  className="bg-brand-orange text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-brand-orange-light transition-colors duration-150 text-sm inline-block"
                >
                  Pitch Your Story
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="accent-bar mx-auto" />
          <h2 className="section-heading mx-auto">Book Shubhalok</h2>
          <p className="section-subheading mx-auto text-center mb-8">
            Available for keynotes, panel discussions, podcast appearances, and media interviews.
            Get in touch to check availability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Booking Inquiry
            </Link>
            <a
              href="#"
              className="btn-outline"
            >
              Download Media Kit PDF
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
