'use client'

import { useState } from 'react'

export default function CopyBioButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handleCopy}
      className="text-xs text-brand-orange font-medium hover:underline flex items-center gap-1"
    >
      {copied ? 'Copied!' : 'Copy Text'}
    </button>
  )
}
