import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Shubhalok Ghosh — strategic advisor, fractional CMO, podcast host, and human-first leader with 25+ years of global experience.',
}

const timeline = [
  {
    period: 'Apr 2025 – Present',
    role: 'Founder & Principal',
    org: 'Tin Taal Advisory & Leadership — King of Prussia, PA',
    desc: 'Enable founder-led organizations to accelerate revenue through go-to-market strategy, brand positioning, and operational execution. Applying 25 years of enterprise growth leadership to the businesses that need it most.',
    color: 'brand-orange',
    highlight: 'Current',
  },
  {
    period: 'Nov 2018 – Jan 2025',
    role: 'Chief Experience Officer / Chief Commercial Officer',
    org: 'Tata Consultancy Services — King of Prussia, PA',
    desc: 'Built and led the Experience Transformation Practice serving global enterprise clients including Johnson & Johnson, Eli Lilly, Bayer, Pfizer, Humana, Cigna, Jaguar Land Rover, H&M, and Marks & Spencer. Led cross-functional US, EU, and India teams. Developed SYMPHONY, an AI-powered marketing transformation accelerator.',
    color: 'brand-navy',
    highlight: '6 Years',
  },
  {
    period: 'Jan 2013 – Dec 2017',
    role: 'CEO & Co-Founder',
    org: 'NayaDerm, LLC — Philadelphia, PA',
    desc: 'Founded dermatology biotech startup. Secured IP agreement with Sapporo University Japan. Engaged leading US and Israeli venture capital firms through the fundraising process.',
    color: 'brand-green',
    highlight: '',
  },
  {
    period: 'Oct 2014 – Sep 2015',
    role: 'Chief Marketing Officer & VP Global Customer Operations',
    org: 'Therakos, Inc. — West Chester, PA',
    desc: 'Integral executive team member through the company\'s $1.3B acquisition by Mallinckrodt. Led OUS sales turnaround and global brand strategy for oncology drug and medical device portfolio.',
    color: 'brand-green',
    highlight: '',
  },
  {
    period: 'Oct 2012 – Oct 2014',
    role: 'Head of Business Development',
    org: 'Accunostics Ltd. — Forres, UK',
    desc: 'Led licensing strategy for SMBG diagnostic platform. Out-licensed technology to Johnson & Johnson/LifeScan.',
    color: 'brand-green',
    highlight: '',
  },
  {
    period: 'Apr 2008 – Jul 2012',
    role: 'VP Business Development, Board Member APAC Franchise',
    org: 'Johnson & Johnson / Diabetes Care — Chesterbrook, PA',
    desc: 'Led franchise business development and global digital health strategy. Conducted due diligence on 100+ companies. Created mHealth strategic partnership with Korea\'s leading electronics company.',
    color: 'brand-navy',
    highlight: '',
  },
  {
    period: 'Apr 2005 – Mar 2008',
    role: 'Global Marketing Leader, Simponi® / Director Immunology Marketing',
    org: 'Johnson & Johnson — Horsham, PA',
    desc: 'Directed pre-launch strategy and brand vision for Simponi® (now a $1B+ drug). Led J&J Respiratory Strategic Plan.',
    color: 'brand-navy',
    highlight: '',
  },
  {
    period: 'Nov 2000 – Mar 2005',
    role: 'Director, Vaccines',
    org: 'Merck & Co., Inc.',
    desc: 'Led India Vaccine Strategy Team and created 10-year market entry plan. GM-level role for Japan and Australia vaccine operations. Signed HPV Vaccine Agreement with CSL.',
    color: 'brand-green',
    highlight: '',
  },
]

const awards = [
  { year: '2024', title: 'HotTopics Global Top 100 Chief Experience Officers' },
  { year: '2024', title: 'Everest "Leader of the Year" — Life Sciences Digital, Data & Analytics' },
  { year: '2024', title: 'Adobe Experience Maker Award' },
  { year: '2024', title: 'TCS INNOVISTA Design Honor Award — JLR GTM Dealer Transformation' },
  { year: '2020–2024', title: 'MMM Magazine (Medical Marketing & Media) "Agency 100" — Top 10 Design (annual feature)' },
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

      {/* Layer 1: Professional Bio */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="accent-bar" />
          <h2 className="section-heading">The Professional</h2>

          <div className="space-y-5 text-gray-700 leading-relaxed text-base">
            <p>
              At <strong className="text-brand-navy">TCS</strong>, I built the eXperience
              Transformation Group into a $300M+ global CX, MarTech, and digital transformation
              practice operating across the US, India, and EU. The practice has since grown to
              be recognized as the #7 marketing and technology agency in North America in
              MM+M&apos;s 2026 Top 100 ranking, a reflection of the foundation, team, and
              commercial model built during my tenure. Earlier in my career, I led go-to-market
              strategy and business development for billion-dollar brands at{' '}
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

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link href="/services" className="btn-primary">
              Work With Me
            </Link>
            <Link href="/media-kit" className="btn-outline">
              Download Media Kit
            </Link>
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="accent-bar mx-auto" />
            <h2 className="section-heading mx-auto">Career Journey</h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 hidden sm:block" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="hidden sm:flex flex-shrink-0 w-16 justify-center pt-1">
                    <div
                      className={`w-4 h-4 rounded-full border-2 border-white shadow-md bg-${item.color}`}
                    />
                  </div>
                  <div className="card flex-1">
                    <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                      <span className="text-xs font-semibold uppercase tracking-widest text-brand-orange">
                        {item.period}
                      </span>
                      {item.highlight && (
                        <span className="text-xs font-bold bg-brand-orange text-white px-2 py-0.5 rounded-full">
                          {item.highlight}
                        </span>
                      )}
                    </div>
                    <h3 className="text-base font-bold text-brand-navy leading-snug">
                      {item.role}
                    </h3>
                    <p className="text-brand-green font-medium text-sm mb-2">{item.org}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Layer 2: Heritage — A Legacy of Purpose */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="accent-bar" />
          <h2 className="section-heading mb-2">A Legacy of Purpose</h2>
          <p className="text-brand-orange font-medium italic mb-10">
            Where it all begins
          </p>

          <div className="prose prose-gray max-w-none space-y-5 text-gray-600 leading-relaxed">
            <p>
              Shubhalok&apos;s roots run deep into one of history&apos;s most meaningful movements.
              His grandparents,{' '}
              <strong className="text-brand-navy">Dr. Edwin Williams Aryanayakam</strong> and{' '}
              <strong className="text-brand-navy">Asha Devi Aryanayakam</strong>, were freedom
              fighters in India&apos;s independence movement and among Mahatma Gandhi&apos;s
              closest educational collaborators.
            </p>
            <p>
              Dr. Aryanayakam worked with Nobel Laureate Rabindranath Tagore for 15 years at
              Shantiniketan. Asha Devi became the{' '}
              <strong className="text-brand-navy">first woman chancellor of Banaras Hindu University</strong>.
            </p>
            <p>
              In 1936, Gandhi personally invited them to Sevagram Ashram to design and lead the
              national education system for India&apos;s villages — a philosophy called{' '}
              <em>Nai Talim</em> (&ldquo;New Education&rdquo;), which became the educational
              foundation for independent India. They trained over 10,000 teachers across the country.
            </p>
            <p>
              Shubhalok&apos;s mother,{' '}
              <strong className="text-brand-navy">Mita Ghosh</strong>, grew up in
              Gandhi&apos;s Sevagram Ashram, shaped by these same principles of service,
              forgiveness, and equal respect for all faiths. Shubhalok is currently co-authoring
              a biography of his mother —{' '}
              <em className="text-brand-orange">
                Mita Ghosh: A Life of Forgiveness, Faith, and Resilience
              </em>{' '}
              — a story of extraordinary resilience rooted in Gandhi&apos;s principles.
            </p>
            <p>
              This legacy of education, service, and human-centered change is the foundation
              of everything Shubhalok does — including his podcast,{' '}
              <em className="font-semibold">HUMANity in the Age of AI</em>.
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
        </div>
      </section>

      {/* Layer 3: Creative Soul — Ganges Delta Blues */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="accent-bar" />
          <h2 className="section-heading mb-2">Beyond Business</h2>
          <p className="text-brand-orange font-medium italic mb-10">
            The creative soul
          </p>

          <div className="prose prose-gray max-w-none space-y-5 text-gray-600 leading-relaxed">
            <p>
              Shubhalok began performing tabla at age four, alongside his mother — a classically
              trained bhajan singer who studied at Shantiniketan. He later undertook formal study
              with{' '}
              <strong className="text-brand-navy">Guruji Ustad Shafaatullah Khan</strong>, a
              master of sitar and tabla and lineage bearer of the{' '}
              <em>Imdadkhani gharana</em>, descending from Imrat Khan and Vilayat Khan. He has
              performed internationally.
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
                    Performed at the Vision &amp; Grit Festival, Connecticut
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

      {/* Voices With Hands + Faith */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Voices With Hands */}
            <div>
              <div className="accent-bar" />
              <h2 className="text-2xl font-serif font-bold text-brand-navy mb-4">
                Voices With Hands
              </h2>
              <div className="space-y-3 text-gray-600 leading-relaxed text-sm">
                <p>
                  Shubhalok is the Founder of{' '}
                  <strong className="text-brand-navy">Voices With Hands</strong>, a community
                  initiative focused on leadership and inclusion for the Deaf Community in Colombia.
                </p>
                <p>
                  After six mission trips to Colombia through{' '}
                  <strong className="text-brand-navy">Tenth Presbyterian Church</strong> in
                  Philadelphia — reflecting a 20-year relationship between the church and
                  Colombia — Shubhalok led the strategy for a new church plant launching in
                  June 2025.
                </p>
              </div>
            </div>

            {/* Faith as Foundation */}
            <div>
              <div className="accent-bar" />
              <h2 className="text-2xl font-serif font-bold text-brand-navy mb-4">
                Faith as Foundation
              </h2>
              <div className="space-y-3 text-gray-600 leading-relaxed text-sm">
                <p>
                  Faith and service are foundational to how Shubhalok leads, advises, and lives.
                  This thread runs through everything — from his grandparents&apos; work alongside
                  Gandhi to his own mission work in Colombia.
                </p>
                <p>
                  It is this orientation — toward service, toward the human, toward
                  purpose — that shapes his work with founders and organizations, and that
                  gives the podcast{' '}
                  <em className="font-semibold text-brand-orange">HUMANity in the Age of AI</em>{' '}
                  its animating conviction.
                </p>
              </div>
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
