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
    desc: 'Why the businesses that win in an AI-saturated market will be those that double down on empathy, creativity, and human connection — and what it takes to build that culture.',
    format: 'Keynote / Panel',
  },
  {
    title: 'Fractional Leadership: The Future of the C-Suite',
    desc: 'How the rise of fractional executives is democratizing access to senior talent and what it means for founders, growth-stage companies, and the future of work.',
    format: 'Keynote / Workshop',
  },
  {
    title: 'Go-to-Market Strategy for Founders',
    desc: 'From positioning to pipeline — the strategic decisions early-stage founders must get right before they can scale, and the most common mistakes that slow them down.',
    format: 'Workshop / Keynote',
  },
  {
    title: 'Brand Positioning That Actually Works',
    desc: 'How to find and hold a distinctive position in a crowded market — lessons from 25 years of brand work across life sciences, healthcare, retail, and automotive.',
    format: 'Workshop / Panel',
  },
  {
    title: 'A Legacy of Purpose: Leading from the Inside Out',
    desc: 'Drawing on a family legacy rooted in Gandhi\'s independence movement, Shubhalok explores what it means to lead with conviction, service, and a human-first worldview.',
    format: 'Keynote',
  },
  {
    title: 'Global Marketing Leadership',
    desc: 'Lessons from leading teams across the US, India, and EU — navigating culture, complexity, and change at scale while keeping the human at the center.',
    format: 'Keynote / Panel',
  },
]

const fastFacts = [
  { label: 'Current Role', value: 'Fractional CGO & Strategic Advisor, Amorbis' },
  { label: 'Previous Title', value: 'Chief Commercial Officer, TCS' },
  { label: 'Experience', value: '25+ years across enterprise and startups' },
  { label: 'Industries', value: 'Life Sciences, Healthcare, Retail, B2B Tech' },
  { label: 'Geography', value: 'US, India, EU — global perspective' },
  { label: 'Podcast', value: 'HUMANity in the Age of AI™' },
]

const pressBio = `Shubhalok Ghosh is a fractional Chief Growth Officer, strategic advisor, and human-first leader at the intersection of business, technology, and purpose. With 25+ years of enterprise and startup leadership, he helps founder-led companies accelerate revenue through go-to-market strategy, revenue architecture, and cross-functional growth execution.

As Chief Commercial Officer at Tata Consultancy Services (TCS), Shubhalok built the eXperience Transformation Group into a $300M+ global practice serving enterprise clients including Johnson & Johnson, Eli Lilly, Bayer, Pfizer, Humana, Cigna, Jaguar Land Rover, H&M, and Marks & Spencer. His career spans senior commercial roles at Johnson & Johnson and Merck, co-founding a dermatology biotech, and leading a company through a $1.3B acquisition.

Today, through Amorbis, Shubhalok serves as a Fractional Chief Growth Officer for growth-stage companies and strategic advisor to early-stage founders. He also hosts HUMANity in the Age of AI™, a podcast exploring what it means to lead, build, and stay human in a world being transformed by technology.

His commitment to human-centered leadership is rooted in an extraordinary family legacy: his grandparents were among Mahatma Gandhi's closest collaborators in India's independence movement, designing the national education system for independent India. That legacy of service, education, and purpose shapes everything he does.`

const pressFeatures = [
  {
    publication: 'MMM Magazine (Medical Marketing & Media)',
    feature: '"Agency 100" Annual Feature — Top 10 Design',
    years: '2020–2024 (annual)',
    note: 'Read the MM+M Agency 100 interview with Shubhalok',
    link: 'https://www.mmm-online.com/agency-100/tcs-interactive-life-sciences-agency-100-2024/',
  },
  {
    publication: 'HotTopics',
    feature: 'Global Top 100 Chief Experience Officers',
    years: '2024',
    note: '',
  },
]

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
              Fractional CGO. Podcast Host.<br />
              <span className="text-brand-orange">Human-First Leader.</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Everything you need to book Shubhalok for your podcast, stage, or media feature.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#" className="btn-primary text-center">
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
                <div className="col-span-2 aspect-[16/9] bg-gradient-to-br from-brand-navy to-brand-navy-light rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="/shubhalok-headshot.jpg"
                    alt="Shubhalok Ghosh"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
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
                <a href="#" className="text-brand-orange text-sm font-medium hover:underline">
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
                    <span className="text-xs font-bold uppercase tracking-wide text-brand-orange w-36 flex-shrink-0">
                      {f.label}
                    </span>
                    <span className="text-gray-700 text-sm">{f.value}</span>
                  </div>
                ))}
              </div>

              <div className="bg-brand-navy/5 rounded-xl p-5">
                <h3 className="text-sm font-bold uppercase tracking-widest text-brand-navy mb-3">
                  One-Line Positioning
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed italic">
                  &ldquo;Fractional Chief Growth Officer. Strategic Advisor. Human-first leader at
                  the intersection of business, technology, and purpose.&rdquo;
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

      {/* Press Features */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="accent-bar mx-auto" />
            <h2 className="section-heading mx-auto">Press &amp; Recognition</h2>
          </div>
          <div className="space-y-4">
            {pressFeatures.map((item) => (
              <div
                key={item.feature}
                className="card border-l-4 border-l-brand-orange"
              >
                <div className="flex flex-wrap items-start gap-3">
                  <div className="flex-1">
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">
                      {item.years}
                    </span>
                    <h3 className="font-bold text-brand-navy text-base mt-0.5">
                      {item.publication}
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">{item.feature}</p>
                    {item.note && (
                      item.link ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-brand-orange text-xs mt-1 italic hover:underline"
                        >
                          {item.note}
                        </a>
                      ) : (
                        <p className="text-gray-400 text-xs mt-1 italic">{item.note}</p>
                      )
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speaking topics */}
      <section className="py-20 bg-gray-50">
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
              <p className="text-gray-300 leading-relaxed mb-2 italic font-medium">
                &ldquo;People are the future. Technology is the tool.&rdquo;
              </p>
              <p className="text-gray-300 leading-relaxed mb-5">
                A show exploring what it means to lead, build, and stay human in a world
                transformed by AI. Guests include founders, executives, and community leaders.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-brand-orange">▶</span> 30–60 minute episodes
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-brand-orange">▶</span> Available on all major platforms
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-brand-orange">▶</span> Founder and executive audience
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="bg-white/10 border border-white/20 rounded-2xl p-8">
                <div className="text-4xl mb-4">🎙️</div>
                <h3 className="text-white font-bold text-lg mb-2">Pitch as a Guest</h3>
                <p className="text-gray-300 text-sm mb-6">
                  Founders, executives, and community leaders with a compelling story
                  about leading through change — let&apos;s talk.
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
            <a href="#" className="btn-outline">
              Download Media Kit PDF
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
