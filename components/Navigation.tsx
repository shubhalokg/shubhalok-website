'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/work-podcast', label: 'Work & Podcast' },
  { href: '/services', label: 'Services' },
  { href: '/media-kit', label: 'Media Kit' },
  { href: '/contact', label: 'Contact' },
]

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-brand-navy shadow-lg py-3' : 'bg-brand-navy/95 py-4'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-tight">
            <span className="text-white font-serif text-xl font-bold tracking-wide">
              Shubhalok Ghosh
            </span>
            <span className="text-brand-orange text-xs font-medium tracking-widest uppercase">
              Fractional CMO &amp; CX Leader
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors duration-150 ${
                  pathname === link.href
                    ? 'text-brand-orange'
                    : 'text-gray-200 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-3 bg-brand-orange text-white text-sm font-semibold px-5 py-2 rounded-lg hover:bg-brand-orange-light transition-colors duration-150"
            >
              Work With Me
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${
                  menuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${
                  menuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${
                  menuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? 'max-h-96 mt-4' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col gap-1 pb-4 border-t border-white/10 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2.5 text-sm font-medium rounded-md transition-colors duration-150 ${
                  pathname === link.href
                    ? 'text-brand-orange bg-white/10'
                    : 'text-gray-200 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 mx-4 text-center bg-brand-orange text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-brand-orange-light transition-colors duration-150"
            >
              Work With Me
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
