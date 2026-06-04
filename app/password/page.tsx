'use client'

import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'

export default function PasswordPage() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const res = await fetch('/api/unlock', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })

    if (res.ok) {
      router.push('/')
      router.refresh()
    } else {
      setError('Incorrect password. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ backgroundColor: '#1A2A5E' }}
    >
      <div className="w-full max-w-md">
        {/* Logo / Name */}
        <div className="text-center mb-10">
          <div
            className="inline-block w-16 h-1 mb-6 rounded"
            style={{ backgroundColor: '#E86C1A' }}
          />
          <h1
            className="text-4xl font-bold tracking-tight mb-2"
            style={{ fontFamily: 'Playfair Display, serif', color: '#ffffff' }}
          >
            Shubhalok Ghosh
          </h1>
          <p className="text-sm uppercase tracking-widest mb-6" style={{ color: '#E86C1A' }}>
            Strategic Advisor &amp; Fractional CMO
          </p>
          <div
            className="inline-block w-16 h-1 rounded"
            style={{ backgroundColor: '#1A7A3C' }}
          />
        </div>

        {/* Card */}
        <div
          className="rounded-2xl p-8 shadow-2xl"
          style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)' }}
        >
          <p className="text-center text-white text-base mb-6 leading-relaxed">
            Site coming soon.&nbsp;
            <span style={{ color: '#E86C1A' }}>Enter password to preview.</span>
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
              className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-400 outline-none focus:ring-2 transition"
              style={{
                backgroundColor: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.2)',
              }}
            />

            {error && (
              <p className="text-sm text-center" style={{ color: '#E86C1A' }}>
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-lg font-semibold text-white transition-opacity disabled:opacity-60"
              style={{ backgroundColor: '#E86C1A' }}
            >
              {loading ? 'Checking…' : 'Enter Site'}
            </button>
          </form>
        </div>

        {/* Footer note */}
        <p className="text-center text-xs mt-8" style={{ color: 'rgba(255,255,255,0.35)' }}>
          shubhalok.com &mdash; coming soon
        </p>
      </div>
    </div>
  )
}
