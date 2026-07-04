import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Shubhalok Ghosh — growth executive, company builder, and human-first leader with 25+ years of global experience.',
}

const awards = [
  { year: '2024', title: 'HotTopics Global Top 100 Chief Experience Officers' },
  { year: '2024', title: 'Everest "Leader of the Year" — Life Sciences Digital, Data & Analytics' },
  { year: '2020–2024', title: 'MM+M (Medical Marketing & Media) "Agency 100" — Top 10 Design (annual feature)' },
]

const education = [
  {
    degree: 'MBA, Marketing',
    school: 'Boston University, Questrom School of Business',
    detail: 'Strategic career advisor to current Questrom MBA students',
  },
  {
    degree: 'BA, Economics',
    school: 'University of Michigan',
    detail: '',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-navy pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-brand-orange font-medium text-sm tracking-widest uppercase mb-4">
              About Shubhalok
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
              Growth Executive. Company Builder.<br />
              <span className="text-brand-orange">Human-first leader.</span>
            </h1>
            <p className="text-gray-300 text-xl leading-relaxed font-medium">
              I&apos;ve spent 25 years building commercial engines across global enterprises,
              founder-led startups, and every stage in between. Here&apos;s what I learned.
            </p>
          </div>
        </div>
      </section>

      {/* The Professional */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="accent-bar" />
          <h2 className="section-heading">The Professional</h2>

          <div className="space-y-5 text-gray-700 leading-relaxed text-base">
            <p>
              At <strong className="text-brand-navy">TCS</strong>, I built the eXperience
              Transformation Group into a $300M+ global CX, MarTech, and digital transformation
              practice operating across the US, India, and EU, ranked #13 among healthcare
              agencies in North America in MM+M&apos;s 2025 Agency 100. Earlier in my career, I
              led go-to-market strategy and business development for billion-dollar brands at{' '}
              <strong className="text-brand-navy">J&amp;J</strong> and served as General Manager
              for <strong className="text-brand-navy">Merck Vaccines</strong> across Japan and
              Australia. Those experiences shaped how I think about growth, complexity, and the
              decisions that determine whether a business scales.
            </p>
            <p>
              At <strong className="text-brand-navy">Therakos</strong>, I served as CMO during
              a private-equity-backed turnaround that culminated in a $1.3B acquisition. At{' '}
              <strong className="text-brand-navy">NAYAderm</strong>, I spent four years as
              co-founder and CEO working to build a dermatology biotech from the ground up,
              securing core IP and manufacturing agreements and taking the company deep into
              investor conversations. It was not a commercialization success story, but it gave
              me firsthand experience with the ambiguity, persistence, and judgment required to
              build something before the outcome is clear.
            </p>
            <p>
              My family&apos;s story is rooted in education, service, and India&apos;s
              independence movement. My grandparents worked closely with Gandhi and led the
              development of Nai Talim, the educational philosophy designed to put human
              development at the center of post-independence India. My mother,{' '}
              <strong className="text-brand-navy">Mita Ghosh</strong>, grew up at Sevagram
              Ashram and carried that same conviction into her life&apos;s work, founding{' '}
              <strong className="text-brand-navy">Mita&apos;s House</strong>, an early childhood
              program she ran for nearly 30 years in Southfield, Michigan. That legacy shaped
              how I think about service, accountability, and what leadership is actually for.
            </p>
            <p>
              Today I work with founders and growth-stage companies navigating commercial scale,
              creativity, and the questions raised by artificial intelligence. The work is not
              just about growth. It is about building businesses that people trust, adopt, and
              want to be part of. I also host{' '}
              <em className="text-brand-orange font-semibold">HUMANity in the Age of AI</em>, a
              podcast exploring what it means to lead, build, and stay human in a world being
              transformed by technology.
            </p>
          </div>

          <blockquote className="mt-12 border-l-4 border-brand-orange pl-8 py-1">
            <p className="font-serif text-brand-navy text-2xl md:text-3xl italic leading-snug font-medium">
              &ldquo;The best strategy keeps the human at the center. That&apos;s not a business
              philosophy — it&apos;s a family inheritance.&rdquo;
            </p>
            <footer className="text-sm text-gray-500 mt-4 font-medium not-italic">
              — Shubhalok Ghosh
            </footer>
          </blockquote>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link href="/services" className="btn-primary">
              Work With Me
            </Link>
            <Link href="/media-kit" className="btn-outline">
              Download Media Kit
            </Link>
          </div>
        </div>
      </section>

      {/* Beyond Business — Ganges Delta Blues */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="accent-bar" />
          <h2 className="section-heading mb-2">Beyond Business</h2>
          <p className="text-brand-orange font-medium italic mb-10">
            The creative soul
          </p>

          <div className="space-y-5 text-gray-700 leading-relaxed text-base">
            <p>
              Shubhalok began performing tabla at age four, alongside his mother — a classically
              trained bhajan singer who studied at Shantiniketan. He has studied the instrument
              throughout his life and has performed internationally.
            </p>
          </div>

          {/* Ganges Delta Blues */}
          <div className="mt-10 bg-brand-navy text-white rounded-2xl p-8">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1">
                <span className="inline-block text-brand-orange font-medium text-xs tracking-widest uppercase mb-3">
                  Musical Project
                </span>
                <h3 className="font-serif text-2xl font-bold text-white mb-3">
                  Ganges Delta Blues
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  An intimate cross-cultural trio weaving Indian classical tabla, Delta
                  bottleneck blues, harmonica, and bass into a warm, improvisational
                  raga-blues sound.
                </p>
                <ul className="space-y-1.5 text-sm text-gray-300 mb-5">
                  <li className="flex items-center gap-2">
                    <span className="text-brand-orange">▶</span>
                    Shakey Lyman — bottleneck guitar, harmonica
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-brand-orange">▶</span>
                    Bob Solarz — bass
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-brand-orange">▶</span>
                    Recorded with Stephen D. Ambrose (known for his work with Stevie Wonder)
                  </li>
                </ul>
              </div>
              <div className="md:w-64 w-full flex-shrink-0">
                <p className="text-xs font-bold uppercase tracking-widest text-brand-orange mb-3">
                  Listen
                </p>
                <div className="space-y-3">
                  <a
                    href="https://drive.google.com/file/d/1j6Bc8pjF5lgbkTANoz-dNIALUHDirSKG/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-white/10 border border-white/20 hover:bg-white/20 rounded-lg px-4 py-3 transition-colors duration-150"
                  >
                    ▶
                    <div className="w-8 h-8 rounded-full bg-brand-orange flex items-center justify-center flex-shrink-0">
                      <svg className="w-3.5 h-3.5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold">Fire in My Hands</p>
                      <p className="text-gray-400 text-xs">Listen on Google Drive</p>
                    </div>
                  </a>
                  <a
                    href="https://drive.google.com/file/d/1len16EpIcn9v72wIC8w0J9jwszpUDnKu/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-white/10 border border-white/20 hover:bg-white/20 rounded-lg px-4 py-3 transition-colors duration-150"
                  >
                    ▶
                    <div className="w-8 h-8 rounded-full bg-brand-orange flex items-center justify-center flex-shrink-0">
                      <svg className="w-3.5 h-3.5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold">Pontiac Baby</p>
                      <p className="text-gray-400 text-xs">Listen on Google Drive</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Voices With Hands */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="accent-bar" />
            <h2 className="text-2xl font-serif font-bold text-brand-navy mb-4">
              Voices With Hands
            </h2>
            <div className="space-y-3 text-gray-700 leading-relaxed text-base">
              <p>
                Shubhalok is the Founder of{' '}
                <strong className="text-brand-navy">Voices With Hands</strong>, a community
                initiative focused on leadership and inclusion for the Deaf Community in Colombia.
              </p>
              <p>
                Over six trips to Colombia, Shubhalok built relationships with the local Deaf
                community and developed the initiative&apos;s leadership and inclusion strategy —
                grounded in the same human-first conviction that drives his professional work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="accent-bar mx-auto" />
            <h2 className="section-heading mx-auto">Recognition &amp; Awards</h2>
          </div>
          <div className="space-y-3">
            {awards.map((award) => (
              <div
                key={award.title}
                className="flex items-center gap-4 bg-white border border-gray-100 rounded-xl px-6 py-4 hover:border-brand-orange/30 transition-colors"
              >
                <span className="text-2xl flex-shrink-0">🏆</span>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-orange mr-3">
                    {award.year}
                  </span>
                  <span className="text-brand-navy font-semibold text-sm">{award.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="accent-bar" />
          <h2 className="text-2xl font-serif font-bold text-brand-navy mb-6">Education</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {education.map((ed) => (
              <div key={ed.degree} className="card">
                <h3 className="font-bold text-brand-navy text-base">{ed.degree}</h3>
                <p className="text-brand-green font-medium text-sm mt-0.5">{ed.school}</p>
                {ed.detail && (
                  <p className="text-gray-500 text-xs mt-2 italic">{ed.detail}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="accent-bar mx-auto" />
          <h2 className="section-heading mx-auto">Let&apos;s Build Something Together</h2>
          <p className="section-subheading mx-auto text-center mb-8">
            Whether you need fractional marketing leadership, a strategic advisor, or a
            podcast guest with a story worth telling — I&apos;m here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Get in Touch
            </Link>
            <Link href="/services" className="btn-outline">
              View Services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}