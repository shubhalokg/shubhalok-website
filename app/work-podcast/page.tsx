import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Work & Podcast',
  description:
    'Explore Shubhalok Ghosh\'s work, client results, and the HUMANity in the Age of AI podcast — exploring human-centered leadership in an AI-driven world.',
}

const featuredEpisodes = [
  {
    number: 'EP 42',
    title: 'Why Empathy Is Your Most Scalable Growth Strategy',
    guest: 'Solo Episode',
    duration: '32 min',
    topics: ['CX Strategy', 'Empathy', 'Growth'],
  },
  {
    number: 'EP 41',
    title: 'Rebuilding Your Marketing Stack Without Losing the Human Touch',
    guest: 'Guest: MarTech Leader',
    duration: '45 min',
    topics: ['MarTech', 'Automation', 'AI'],
  },
  {
    number: 'EP 40',
    title: 'The Fractional CMO Revolution: What Growing Businesses Need Now',
    guest: 'Solo Episode',
    duration: '28 min',
    topics: ['Fractional CMO', 'Leadership', 'SMB'],
  },
  {
    number: 'EP 39',
    title: 'Customer Experience in Life Sciences: High Stakes, Higher Standards',
    guest: 'Guest: Healthcare CXO',
    duration: '52 min',
    topics: ['Healthcare', 'CX', 'Compliance'],
  },
  {
    number: 'EP 38',
    title: 'From Agency to Enterprise: What the Jump Taught Me About Marketing',
    guest: 'Solo Episode',
    duration: '38 min',
    topics: ['Career', 'Marketing', 'Enterprise'],
  },
  {
    number: 'EP 37',
    title: 'Building a Brand Narrative That Outlasts Trends',
    guest: 'Guest: Brand Strategist',
    duration: '41 min',
    topics: ['Brand', 'Storytelling', 'Strategy'],
  },
]

const caseStudies = [
  {
    label: 'Life Sciences',
    title: 'CX Transformation for a Global Pharma Leader',
    outcome: '40% improvement in customer satisfaction scores across 12 markets',
    tags: ['CX Strategy', 'Journey Mapping', 'Change Management'],
  },
  {
    label: 'Automotive',
    title: 'Premium Brand Experience at Jaguar Land Rover',
    outcome: 'Redefined dealership experience touchpoints across UK and North America',
    tags: ['Brand Experience', 'Retail CX', 'Premium Positioning'],
  },
  {
    label: 'B2B Technology',
    title: 'MarTech Stack Modernization for Enterprise SaaS',
    outcome: '3x pipeline growth through integrated demand generation redesign',
    tags: ['MarTech', 'Demand Gen', 'ABM'],
  },
  {
    label: 'SMB Growth',
    title: 'Fractional CMO Engagement — B2B Services Firm',
    outcome: 'Built marketing function from 0 to full-stack in 90 days; 60% lead increase',
    tags: ['Fractional CMO', 'Lead Gen', 'Marketing Build-Out'],
  },
]

const platforms = [
  { name: 'Spotify', icon: '🎵', href: '#' },
  { name: 'Apple Podcasts', icon: '🎙️', href: '#' },
  { name: 'Google Podcasts', icon: '🎧', href: '#' },
  { name: 'Amazon Music', icon: '🎶', href: '#' },
  { name: 'YouTube', icon: '▶️', href: '#' },
]

export default function WorkPodcastPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-navy pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-brand-orange font-medium text-sm tracking-widest uppercase mb-4">
              Work & Podcast
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
              Results that speak.<br />
              <span className="text-brand-orange">Conversations that matter.</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              A look at the client work that has shaped businesses and the podcast that explores
              the human heart of leadership in an AI-accelerated world.
            </p>
          </div>
        </div>
      </section>

      {/* Podcast feature */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            {/* Podcast art placeholder */}
            <div className="aspect-square max-w-md mx-auto w-full bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-green rounded-3xl shadow-2xl flex flex-col items-center justify-center p-10 text-center">
              <div className="w-16 h-16 rounded-full bg-brand-orange flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <h3 className="text-white font-serif text-2xl font-bold mb-2">
                HUMANity in the Age of AI
              </h3>
              <p className="text-gray-300 text-sm">Hosted by Shubhalok Ghosh</p>
              <div className="mt-6 flex gap-2 flex-wrap justify-center">
                {['Leadership', 'Marketing', 'CX', 'AI', 'Human'].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-white/20 text-white px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-gray-400 text-xs mt-6 italic">
                [Replace with podcast cover art]
              </p>
            </div>

            {/* Podcast info */}
            <div>
              <div className="accent-bar" />
              <h2 className="section-heading">
                HUMANity in the<br />
                <span className="text-brand-orange">Age of AI</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                As AI reshapes every aspect of business — from marketing automation to customer
                service to decision-making — the leaders who thrive will be those who double down
                on what makes us irreducibly human.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Each episode dives deep into the intersection of technology and humanity, featuring
                conversations with executives, marketers, and CX pioneers who are navigating this
                transformation with empathy, creativity, and hard-won wisdom.
              </p>

              {/* Listen on platforms */}
              <div className="mb-8">
                <p className="text-sm font-semibold text-brand-navy mb-3 uppercase tracking-wide">
                  Listen on
                </p>
                <div className="flex flex-wrap gap-2">
                  {platforms.map((p) => (
                    <a
                      key={p.name}
                      href={p.href}
                      className="flex items-center gap-2 bg-gray-100 hover:bg-brand-navy hover:text-white text-gray-700 text-sm font-medium px-3 py-2 rounded-lg transition-colors duration-150"
                    >
                      <span>{p.icon}</span>
                      {p.name}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className="btn-primary">
                  Be a Guest
                </Link>
                <Link href="/services#podcast" className="btn-outline">
                  Launch Your Podcast
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured episodes */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="accent-bar mx-auto" />
            <h2 className="section-heading mx-auto">Featured Episodes</h2>
            <p className="section-subheading mx-auto text-center">
              Conversations and insights exploring human-centered business leadership.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredEpisodes.map((ep) => (
              <div key={ep.number} className="card group cursor-pointer">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-brand-orange tracking-wider uppercase">
                    {ep.number}
                  </span>
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    🕐 {ep.duration}
                  </span>
                </div>
                <h3 className="font-bold text-brand-navy text-base leading-snug mb-2 group-hover:text-brand-orange transition-colors">
                  {ep.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4">{ep.guest}</p>
                <div className="flex flex-wrap gap-1.5">
                  {ep.topics.map((t) => (
                    <span
                      key={t}
                      className="text-xs bg-brand-navy/8 text-brand-navy px-2.5 py-1 rounded-full font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="#"
              className="btn-navy inline-block"
            >
              Browse All Episodes
            </a>
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="accent-bar mx-auto" />
            <h2 className="section-heading mx-auto">Selected Client Work</h2>
            <p className="section-subheading mx-auto text-center">
              A sample of transformations from over 25 years of global marketing and CX leadership.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {caseStudies.map((cs) => (
              <div key={cs.title} className="card border-l-4 border-l-brand-orange">
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-green mb-3">
                  {cs.label}
                </span>
                <h3 className="text-lg font-bold text-brand-navy mb-3">{cs.title}</h3>
                <div className="flex items-start gap-2 bg-brand-orange/8 rounded-lg p-3 mb-4">
                  <span className="text-brand-orange text-lg flex-shrink-0">📊</span>
                  <p className="text-brand-navy text-sm font-medium leading-snug">{cs.outcome}</p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cs.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/contact" className="btn-primary">
              Discuss Your Challenge
            </Link>
          </div>
        </div>
      </section>

      {/* Guest CTA */}
      <section className="py-20 bg-brand-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-white mb-5">
            Want to be a podcast guest?
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            I&apos;m always looking for executives, marketers, and CX leaders with compelling
            perspectives on the human future of business. Let&apos;s have a conversation.
          </p>
          <Link href="/contact" className="btn-primary text-lg px-10 py-4">
            Apply to Be a Guest
          </Link>
        </div>
      </section>
    </>
  )
}
