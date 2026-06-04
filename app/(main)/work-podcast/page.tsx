import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Podcast',
  description:
    'HUMANity in the Age of AI — Shubhalok Ghosh\'s podcast exploring what it means to lead, build, and stay human in a world being transformed by artificial intelligence.',
}

const upcomingEpisodes = [
  {
    label: 'Upcoming',
    guest: 'Steven Bonner',
    title: 'Leading Through Transformation',
    bio: 'CEO, skinio.com — Former CEO, Cancer Treatment Centers of America',
    topics: ['Healthcare', 'Leadership', 'Purpose'],
  },
  {
    label: 'Upcoming',
    guest: 'Gary Miller',
    title: 'High Performance at the Human Edge',
    bio: 'Owner, Human Charger US — US Olympic Ski & Snowboard Coach',
    topics: ['Performance', 'Human Optimization', 'Coaching'],
  },
  {
    label: 'Upcoming',
    guest: 'Dawn Hewitt',
    title: 'Founding with a Mission',
    bio: 'Founder & President, Re-Lieved',
    topics: ['Entrepreneurship', 'Health', 'Mission-Driven'],
  },
]

const caseStudies = [
  {
    label: 'Life Sciences',
    title: 'CX Transformation for a Global Pharma Leader',
    outcome: 'Redefined customer experience across 12 global markets — elevating patient and HCP touchpoints at scale.',
    tags: ['CX Strategy', 'Journey Mapping', 'Change Management'],
  },
  {
    label: 'Automotive',
    title: 'Premium Brand Experience at Jaguar Land Rover',
    outcome: 'Redefined dealership experience touchpoints across UK and North America — recognized with the 2024 TCS INNOVISTA Design Honor Award.',
    tags: ['Brand Experience', 'Retail CX', 'Premium Positioning'],
  },
  {
    label: 'Enterprise Technology',
    title: 'AI-Powered Marketing Transformation',
    outcome: 'Developed SYMPHONY — an AI-powered content transformation accelerator — deployed across enterprise marketing organizations.',
    tags: ['AI', 'MarTech', 'Content Strategy'],
  },
  {
    label: 'Growth-Stage',
    title: 'Go-to-Market Strategy — B2B Services',
    outcome: 'Built go-to-market foundation and brand positioning from the ground up, enabling a growth-stage company to engage a new category of enterprise buyers.',
    tags: ['Fractional CMO', 'Brand Positioning', 'GTM Strategy'],
  },
]

const platforms = [
  { name: 'Spotify', icon: '🎵', href: '#' },
  { name: 'Apple Podcasts', icon: '🎙️', href: '#' },
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
              Podcast &amp; Work
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
              People are the future.<br />
              <span className="text-brand-orange">Technology is the tool.</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              The podcast exploring what it means to lead, build, and stay human in a world
              being transformed by artificial intelligence — plus a look at the client work
              behind the thinking.
            </p>
          </div>
        </div>
      </section>

      {/* Podcast Feature */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            {/* Podcast art */}
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
                {['Leadership', 'Founders', 'AI', 'Purpose', 'Human'].map((tag) => (
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
              <p className="text-brand-orange font-medium italic text-lg mb-5">
                &ldquo;People are the future. Technology is the tool.&rdquo;
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                AI must augment human capability — not replace human beings. This podcast
                explores what it means to lead, build, and stay human in a world being
                transformed by artificial intelligence.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Guests include founders, executives, and community leaders — people who are
                navigating this transformation with clarity, conviction, and hard-won wisdom.
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Episodes */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="accent-bar mx-auto" />
            <h2 className="section-heading mx-auto">Upcoming Episodes</h2>
            <p className="section-subheading mx-auto text-center">
              Conversations with founders, executives, and community leaders on leadership
              and staying human in an AI-driven world.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEpisodes.map((ep) => (
              <div key={ep.guest} className="card border-t-4 border-t-brand-orange">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold bg-brand-orange/10 text-brand-orange px-2.5 py-1 rounded-full uppercase tracking-wide">
                    {ep.label}
                  </span>
                </div>
                <h3 className="font-bold text-brand-navy text-base leading-snug mb-1">
                  {ep.guest}
                </h3>
                <p className="text-brand-green text-xs font-medium mb-3 leading-snug">
                  {ep.bio}
                </p>
                <p className="text-gray-600 text-sm italic mb-4">&ldquo;{ep.title}&rdquo;</p>
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
        </div>
      </section>

      {/* Selected Client Work */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="accent-bar mx-auto" />
            <h2 className="section-heading mx-auto">Selected Client Work</h2>
            <p className="section-subheading mx-auto text-center">
              A sample of work from over 25 years of global enterprise and startup leadership.
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
                  <span className="text-brand-orange text-lg flex-shrink-0">▶</span>
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
            I&apos;m looking for founders, executives, and community leaders with compelling
            perspectives on what it means to stay human while building in an AI-driven world.
            Let&apos;s have a conversation.
          </p>
          <Link href="/contact" className="btn-primary text-lg px-10 py-4">
            Apply to Be a Guest
          </Link>
        </div>
      </section>
    </>
  )
}
