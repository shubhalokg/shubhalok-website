import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Podcast',
  description:
    "HUMANity in the Age of AI — Shubhalok Ghosh's podcast exploring what it means to lead, build, and stay human in a world being transformed by artificial intelligence.",
}

const episode1 = {
  number: '01',
  guest: 'Stephen Bonner',
  bio: 'CEO, SkinIO — Former CEO, Cancer Treatment Centers of America',
  title: 'Skin Cancer Detection, AI Innovation, and Why Dermatologists Still Matter',
  description:
    'Stephen Bonner, former CEO of Cancer Treatment Centers of America and now CEO of SkinIO, joins Shubhalok Ghosh to discuss what it really takes to build healthcare innovation that matters. The conversation explores melanoma detection, why access to dermatology care is as important as the technology itself, and how AI can support better outcomes without replacing the human judgment that still matters most. At HUMANity in the Age of AI, the future is still people.',
  spotify: 'https://open.spotify.com/episode/34Gb9I6rV1YbYL4ti1XisX?si=L-4xplElTK6H4ZznYDWdCg',
  youtube: 'https://youtu.be/iYdZBYfaNAc',
  topics: ['Healthcare AI', 'Dermatology', 'Innovation', 'Human Judgment'],
}

const upcomingEpisodes = [
  {
    guest: 'Gary Miller',
    label: 'Next Episode',
    bio: 'Founder, US Human Charger — Olympian & Elite Performance Coach',
    description:
      'Founder of US Human Charger, Olympian skier, and elite performance coach who trained Mikaela Shiffrin. Gary brings a world-class perspective on human performance, resilience, and what it takes to compete at the highest level.',
    topics: ['Human Performance', 'Resilience', 'Elite Coaching'],
  },
  {
    guest: 'Woody Giessmann',
    label: 'Upcoming',
    bio: 'Therapist & Interventionalist — Creator, Rock Bottom',
    description:
      'Former drummer for Boston\'s Del Fuegos, current therapist, interventionalist, and creator of Rock Bottom — a musical project exploring recovery, resilience, and the human experience.',
    topics: ['Recovery', 'Resilience', 'Music & Healing'],
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
  { name: 'Spotify', icon: '🎵', href: episode1.spotify },
  { name: 'YouTube', icon: '▶️', href: episode1.youtube },
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
                      target="_blank"
                      rel="noopener noreferrer"
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

      {/* Episode 1 — Featured */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="accent-bar mx-auto" />
            <h2 className="section-heading mx-auto">Latest Episode</h2>
          </div>

          <div className="max-w-3xl mx-auto bg-brand-navy rounded-2xl overflow-hidden shadow-2xl">
            <div className="p-8 md:p-10">
              {/* Episode badge + status */}
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-brand-orange text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest">
                  Episode {episode1.number}
                </span>
                <span className="text-brand-green text-sm font-medium">● Now Live</span>
              </div>

              {/* Title */}
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-white leading-tight mb-2">
                {episode1.title}
              </h3>
              <p className="text-brand-orange font-medium mb-1">
                with {episode1.guest}
              </p>
              <p className="text-gray-400 text-sm mb-6">{episode1.bio}</p>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed mb-8">
                {episode1.description}
              </p>

              {/* Topic tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {episode1.topics.map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-white/10 text-gray-300 px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Listen links */}
              <div className="flex flex-wrap gap-3">
                <a
                  href={episode1.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#1DB954] hover:bg-[#1ed760] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors duration-150"
                >
                  🎵 Listen on Spotify
                </a>
                <a
                  href={episode1.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#FF0000] hover:bg-[#cc0000] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors duration-150"
                >
                  ▶️ Watch on YouTube
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Up */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="accent-bar mx-auto" />
            <h2 className="section-heading mx-auto">Coming Up</h2>
            <p className="section-subheading mx-auto text-center">
              More conversations with founders, executives, and community leaders on leadership
              and staying human in an AI-driven world.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
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
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {ep.description}
                </p>
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
      <section className="py-20 bg-gray-50">
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
