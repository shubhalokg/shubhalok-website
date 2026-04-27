import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Shubhalok Ghosh — former TCS Chief Experience Officer, Fractional CMO, podcast host, and executive coach with 25+ years of global marketing leadership.',
}

const timeline = [
  {
    period: 'Apr 2025 – Present',
    role: 'Founder & Principal',
    org: 'Tin Taal Advisory & Leadership — King of Prussia, PA',
    desc: 'Enabling founder-led organizations to scale revenue via AI-assisted GTM systems. Developing SMB founder interview podcast. Applying 25 years of enterprise growth leadership to the businesses that need it most.',
    color: 'brand-orange',
    highlight: 'Current',
  },
  {
    period: 'Nov 2018 – Jan 2025',
    role: 'CXO / Senior Managing Director, XTG / TCS Interactive',
    org: 'Tata Consultancy Services — King of Prussia, PA',
    desc: 'Built $300M+ global practice and $500M+ pipeline. Led $100M J&J platform deal, $100M Cigna transformation, and $35M Jaguar Land Rover GTM program. Launched SYMPHONY, an AI-powered content transformation accelerator. Led global teams across US, Europe, and India.',
    color: 'brand-navy',
    highlight: '6 Years',
  },
  {
    period: 'Jan 2013 – Dec 2017',
    role: 'CEO & Co-Founder',
    org: 'NayaDerm, LLC — Philadelphia, PA',
    desc: 'Co-founded dermatology biotech. Secured Japan IP/pharma partnerships and led $10M Series A fundraising round.',
    color: 'brand-green',
    highlight: '',
  },
  {
    period: 'Oct 2014 – Sep 2015',
    role: 'CMO & VP Global Customer Operations',
    org: 'Therakos, Inc. — West Chester, PA',
    desc: 'Led $200M oncology and medical device business. Drove 15% international revenue growth. Key executive in $1.3B acquisition by Mallinckrodt.',
    color: 'brand-green',
    highlight: '',
  },
  {
    period: 'Oct 2012 – Oct 2014',
    role: 'Head of Business Development',
    org: 'Accunostics Ltd. — Forres, UK',
    desc: 'Led BD and licensing strategy for SMBG diagnostic platform. Secured out-licensing deal with J&J/Lifescan.',
    color: 'brand-green',
    highlight: '',
  },
  {
    period: 'Apr 2008 – Jul 2012',
    role: 'VP Business Development & Sales / APAC Board Member',
    org: 'Johnson & Johnson / Lifescan — Chesterbrook, PA',
    desc: 'Directed digital strategy for $4B diabetes franchise. APAC Board Member. Vetted 60+ partnerships and M&A targets across Asia-Pacific.',
    color: 'brand-navy',
    highlight: '',
  },
  {
    period: 'Apr 2005 – Mar 2008',
    role: 'Director Respiratory Marketing & Global Marketing Leader, Simponi®',
    org: 'Johnson & Johnson Bio',
    desc: 'Co-Therapeutic Area Head for 8 Phase I–II candidates. Directed Phase III strategy for Simponi® immunology franchise, which went on to achieve $1B+ annual revenue.',
    color: 'brand-navy',
    highlight: '',
  },
  {
    period: 'Nov 2000 – Mar 2005',
    role: 'GM Vaccine Operations Japan, Australia & India Strategy',
    org: 'Merck & Co.',
    desc: 'Managed $100M revenue business. Signed landmark $9B HPV vaccine agreement with CSL. Architected India 10-year market entry plan and established the India subsidiary in 2005.',
    color: 'brand-green',
    highlight: '',
  },
]

const awards = [
  { year: '2024', title: 'HotTopics Global Top 100 Chief Experience Officers' },
  { year: '2024', title: 'Everest "Leader of the Year" — Life Sciences Digital, Data & Analytics' },
  { year: '2024', title: 'Adobe Experience Maker Award' },
  { year: '2024', title: 'TCS INNOVISTA Design Honor Award — JLR GTM Dealer Transformation' },
  { year: 'Prior', title: 'MMM Top 100 — Top 10 Design Award' },
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

const expertise = [
  {
    category: 'Marketing Strategy',
    items: [
      'B2B Demand Generation',
      'Brand Positioning',
      'Go-to-Market Strategy',
      'Content Marketing',
      'Account-Based Marketing',
    ],
  },
  {
    category: 'Customer Experience',
    items: [
      'CX Transformation',
      'Journey Mapping',
      'Voice of the Customer',
      'Service Design',
      'NPS & CX Metrics',
    ],
  },
  {
    category: 'MarTech & Digital',
    items: [
      'MarTech Stack Design',
      'Marketing Automation',
      'Analytics & Attribution',
      'AI in Marketing',
      'Digital Transformation',
    ],
  },
  {
    category: 'Leadership',
    items: [
      'Fractional CMO',
      'Executive Coaching',
      'Global Team Leadership',
      'Agency Management',
      'Thought Leadership',
    ],
  },
]

const industries = [
  { name: 'Life Sciences & Healthcare', icon: '🧬' },
  { name: 'Retail & Consumer', icon: '🛍️' },
  { name: 'Automotive', icon: '🚗' },
  { name: 'B2B Technology', icon: '💻' },
  { name: 'Financial Services', icon: '📈' },
  { name: 'Professional Services', icon: '🤝' },
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
              Merck. J&amp;J. TCS.<br />
              <span className="text-brand-orange">25 years. One conviction:</span><br />
              business is human.
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              From vaccine strategy at Merck to a $300M+ practice at TCS, my career spans
              pharma, biotech, life sciences, and digital transformation — always in pursuit
              of the same truth: the best strategy keeps the human at the center.
            </p>
          </div>
        </div>
      </section>

      {/* Bio section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-14 items-start">
            {/* Headshot placeholder */}
            <div className="relative sticky top-28">
              <div className="aspect-[4/5] bg-gradient-to-br from-brand-navy to-brand-navy-light rounded-2xl overflow-hidden flex items-end justify-center shadow-xl">
                <div className="text-center p-8 text-white">
                  <div className="text-7xl mb-4">👤</div>
                  <p className="text-gray-400 text-sm italic">
                    [Replace with professional headshot]
                  </p>
                </div>
              </div>
              {/* Floating badges */}
              <div className="absolute top-6 -right-4 bg-brand-orange text-white rounded-lg px-4 py-2 shadow-lg text-sm font-semibold">
                Former TCS CXO
              </div>
              <div className="absolute bottom-10 -left-4 bg-brand-green text-white rounded-lg px-4 py-2 shadow-lg text-sm font-semibold">
                Podcast Host
              </div>
            </div>

            {/* Bio text */}
            <div>
              <div className="accent-bar" />
              <h2 className="section-heading">My Story</h2>

              <div className="prose prose-gray max-w-none space-y-4 text-gray-600 leading-relaxed">
                <p>
                  My career began at{' '}
                  <strong className="text-brand-navy">Merck</strong>, where I spent five
                  years as General Manager of Vaccine Operations across Japan, Australia, and
                  India. I signed a landmark $9B HPV vaccine agreement with CSL and built the
                  market entry strategy that established Merck&apos;s India subsidiary in 2005.
                </p>
                <p>
                  From there, seven years at{' '}
                  <strong className="text-brand-navy">Johnson &amp; Johnson</strong> — first
                  leading global marketing for the Simponi® immunology franchise (which achieved
                  $1B+ in annual revenue), then as VP of Business Development and APAC Board
                  Member for Lifescan, directing digital strategy for a $4B diabetes business
                  and vetting 60+ partnership and M&amp;A targets.
                </p>
                <p>
                  I also co-founded{' '}
                  <strong className="text-brand-navy">NayaDerm</strong>, a dermatology
                  biotech, where I secured Japan IP/pharma partnerships and led a $10M Series A.
                  Concurrently, I served as CMO at{' '}
                  <strong className="text-brand-navy">Therakos</strong> — a $200M oncology
                  business — driving 15% international growth and playing a key role in a $1.3B
                  acquisition by Mallinckrodt.
                </p>
                <p>
                  At{' '}
                  <strong className="text-brand-navy">Tata Consultancy Services</strong>, I
                  became CXO and Senior Managing Director — building a $300M+ global practice,
                  generating $500M+ in pipeline, and leading landmark engagements: a $100M
                  J&amp;J platform transformation, a $100M Cigna program, and a $35M Jaguar
                  Land Rover GTM that won the 2024 TCS INNOVISTA Design Honor Award.
                </p>
                <p>
                  Today, through{' '}
                  <strong className="text-brand-navy">Tin Taal Advisory</strong>, I bring
                  that same rigor to founder-led organizations — building AI-assisted GTM
                  systems that scale revenue. I also host{' '}
                  <em className="text-brand-orange font-semibold">
                    HUMANity in the Age of AI
                  </em>
                  , a podcast exploring the irreplaceable human elements of leadership,
                  marketing, and CX in an AI-driven world.
                </p>
                <p>
                  Outside of work, I am a classically trained tabla player and active
                  performer with Ganges Delta Blues, and the founder of{' '}
                  <strong className="text-brand-navy">Voices with Hands Foundation</strong>,
                  supporting deaf communities in Colombia.
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
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="accent-bar mx-auto" />
            <h2 className="section-heading mx-auto">Career Journey</h2>
          </div>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 hidden sm:block" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  {/* Dot */}
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
                    <h3 className="text-base font-bold text-brand-navy leading-snug">{item.role}</h3>
                    <p className="text-brand-green font-medium text-sm mb-2">{item.org}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="accent-bar mx-auto" />
            <h2 className="section-heading mx-auto">Recognition & Awards</h2>
          </div>
          <div className="space-y-3">
            {awards.map((award) => (
              <div
                key={award.title}
                className="flex items-center gap-4 bg-gray-50 border border-gray-100 rounded-xl px-6 py-4 hover:border-brand-orange/30 transition-colors"
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

      {/* Expertise grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="accent-bar mx-auto" />
            <h2 className="section-heading mx-auto">Areas of Expertise</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((area) => (
              <div key={area.category} className="card">
                <h3 className="text-base font-bold text-brand-navy mb-4 pb-3 border-b border-gray-100">
                  {area.category}
                </h3>
                <ul className="space-y-2">
                  {area.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-white mb-3">
              Industry Experience
            </h2>
            <p className="text-gray-300 text-base">
              Deep domain knowledge across sectors where CX and brand differentiation matter most.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((ind) => (
              <div
                key={ind.name}
                className="bg-white/10 border border-white/20 rounded-xl p-4 text-center hover:bg-white/20 transition-colors duration-200"
              >
                <div className="text-3xl mb-2">{ind.icon}</div>
                <p className="text-white text-xs font-medium leading-snug">{ind.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Community */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Education */}
            <div>
              <div className="accent-bar" />
              <h2 className="text-2xl font-serif font-bold text-brand-navy mb-6">Education</h2>
              <div className="space-y-4">
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

            {/* Community */}
            <div>
              <div className="accent-bar" />
              <h2 className="text-2xl font-serif font-bold text-brand-navy mb-6">
                Community &amp; Personal
              </h2>
              <div className="space-y-3">
                {[
                  {
                    icon: '🤝',
                    text: 'Founder, Voices with Hands Foundation — deaf community initiative in Colombia',
                  },
                  {
                    icon: '✝️',
                    text: 'Tenth Presbyterian Church — Mercy Commission & Global Missions; 6 mission trips to Colombia',
                  },
                  {
                    icon: '🥁',
                    text: 'Classically trained tabla (Indian percussion) player — active performer with Ganges Delta Blues (2025–2026)',
                  },
                  {
                    icon: '🎓',
                    text: 'Strategic career advisor, Boston University Questrom School of Business MBA program',
                  },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-3 text-sm text-gray-600">
                    <span className="text-xl flex-shrink-0">{item.icon}</span>
                    <span className="leading-relaxed">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="accent-bar mx-auto" />
          <h2 className="section-heading mx-auto">Let&apos;s Build Something Together</h2>
          <p className="section-subheading mx-auto text-center mb-8">
            Whether you need fractional marketing leadership, an executive coach, or a
            podcast guest who has seen marketing from both sides — I&apos;m here.
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
