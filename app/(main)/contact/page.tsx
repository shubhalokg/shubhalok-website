'use client'

import { useState } from 'react'
import Link from 'next/link'

const inquiryTypes = [
  'Fractional CMO Inquiry',
  'Marketing Services Project',
  'Podcast Production',
  'Executive Coaching',
  'Speaking / Podcast Guest',
  'Media / Press Inquiry',
  'Other',
]

const contactReasons = [
  {
    icon: '📊',
    title: 'Fractional CMO',
    desc: 'Ready to hire senior marketing leadership on a fractional basis.',
    href: '#contact-form',
  },
  {
    icon: '🎙️',
    title: 'Podcast / Speaking',
    desc: 'Book Shubhalok as a podcast guest, speaker, or panelist.',
    href: '#contact-form',
  },
  {
    icon: '🧭',
    title: 'Executive Coaching',
    desc: 'Looking for a thought partner and executive coach.',
    href: '#contact-form',
  },
  {
    icon: '📋',
    title: 'Media Kit',
    desc: 'Need photos, bio, or press information.',
    href: '/media-kit',
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    inquiryType: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic — integrate with your preferred service (Formspree, Resend, etc.)
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-navy pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-brand-orange font-medium text-sm tracking-widest uppercase mb-4">
              Contact
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
              Let&apos;s start a<br />
              <span className="text-brand-orange">real conversation.</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Whether you&apos;re ready to work together or just exploring, I&apos;m happy to talk.
              Most inquiries get a response within 24 business hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact reasons grid */}
      <section className="py-14 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {contactReasons.map((r) => (
              <a
                key={r.title}
                href={r.href}
                className="card text-center group hover:border-brand-orange/30 hover:border"
              >
                <div className="text-3xl mb-3">{r.icon}</div>
                <h3 className="font-bold text-brand-navy text-sm mb-1.5 group-hover:text-brand-orange transition-colors">
                  {r.title}
                </h3>
                <p className="text-gray-500 text-xs leading-snug">{r.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form + info */}
      <section id="contact-form" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-14">
            {/* Left: Info */}
            <div>
              <div className="accent-bar" />
              <h2 className="section-heading">Get in Touch</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                I&apos;m always open to the right conversations. Fill out the form and I&apos;ll
                be in touch within 24 business hours to schedule a discovery call.
              </p>

              <div className="space-y-5 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-brand-navy mb-1">Email</p>
                    <a
                      href="mailto:hello@shubhalokghosh.com"
                      className="text-gray-600 hover:text-brand-orange transition-colors text-sm"
                    >
                      hello@shubhalokghosh.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-brand-green" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-brand-navy mb-1">LinkedIn</p>
                    <a
                      href="https://linkedin.com/in/shubhalokghosh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-brand-orange transition-colors text-sm"
                    >
                      linkedin.com/in/shubhalokghosh
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-navy/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-brand-navy text-lg">🎙️</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-brand-navy mb-1">Podcast</p>
                    <Link
                      href="/work-podcast"
                      className="text-gray-600 hover:text-brand-orange transition-colors text-sm"
                    >
                      HUMANity in the Age of AI
                    </Link>
                  </div>
                </div>
              </div>

              {/* Note */}
              <div className="bg-brand-navy/5 border border-brand-navy/10 rounded-xl p-5">
                <h4 className="font-bold text-brand-navy text-sm mb-2">Discovery Call</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  The best first step is a free 30-minute discovery call. No commitment —
                  just an honest conversation about what you&apos;re trying to accomplish
                  and whether I&apos;m the right fit to help.
                </p>
              </div>
            </div>

            {/* Right: Form */}
            <div>
              {submitted ? (
                <div className="card flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-brand-green/10 flex items-center justify-center mb-5">
                    <svg className="w-8 h-8 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy mb-2">Message Received!</h3>
                  <p className="text-gray-600 text-sm max-w-xs">
                    Thank you for reaching out. I&apos;ll be in touch within 24 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="card space-y-5">
                  <h3 className="text-lg font-bold text-brand-navy mb-1">Send a Message</h3>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wide text-gray-600 mb-1.5">
                        Name <span className="text-brand-orange">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wide text-gray-600 mb-1.5">
                        Email <span className="text-brand-orange">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wide text-gray-600 mb-1.5">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wide text-gray-600 mb-1.5">
                      What can I help you with? <span className="text-brand-orange">*</span>
                    </label>
                    <select
                      name="inquiryType"
                      required
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange transition-colors bg-white"
                    >
                      <option value="">Select an option…</option>
                      {inquiryTypes.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wide text-gray-600 mb-1.5">
                      Message <span className="text-brand-orange">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell me about your situation, your goals, and what kind of support you're looking for…"
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-brand-orange text-white font-semibold py-3 rounded-lg hover:bg-brand-orange-light transition-colors duration-150 shadow-md"
                  >
                    Send Message
                  </button>

                  <p className="text-xs text-gray-400 text-center">
                    No spam. No sales sequence. Just a human response.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
