import Link from 'next/link'

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/work-podcast', label: 'Work & Podcast' },
  { href: '/services', label: 'Services' },
  { href: '/media-kit', label: 'Media Kit' },
  { href: '/contact', label: 'Contact' },
]

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/shubhalokghosh',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Twitter / X',
    href: 'https://twitter.com/shubhalokghosh',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'Podcast',
    href: 'https://open.spotify.com',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand column */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-1">Shubhalok Ghosh</h3>
            <p className="text-brand-orange text-sm font-medium tracking-widest uppercase mb-4">
              Fractional CMO &amp; CX Leader
            </p>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
              Helping businesses under $25M grow through human-centered marketing,
              strategic CX transformation, and fractional leadership.
            </p>
            <div className="flex gap-3 mt-6">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:bg-brand-orange hover:text-white transition-colors duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-brand-orange mb-5">
              Navigation
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 text-sm hover:text-white transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA column */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-brand-orange mb-5">
              Let&apos;s Connect
            </h4>
            <p className="text-gray-300 text-sm mb-5 leading-relaxed">
              Ready to transform your marketing and customer experience? Let&apos;s start a conversation.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-brand-orange text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-brand-orange-light transition-colors duration-150 text-sm"
            >
              Book a Discovery Call
            </Link>
            <p className="text-gray-400 text-xs mt-6">
              Also catch the podcast:{' '}
              <span className="text-brand-orange font-medium italic">
                HUMANity in the Age of AI
              </span>
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-400 text-xs">
            &copy; {new Date().getFullYear()} Shubhalok Ghosh. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs">
            Fractional CMO &middot; CX Strategy &middot; Podcast Host &middot; Executive Coach
          </p>
        </div>
      </div>
    </footer>
  )
}
