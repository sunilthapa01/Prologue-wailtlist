'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/supabase/supabase'

const STORAGE_KEY = 'prologue.waitlist'
const BASE_COUNT = 2847
const WAITLIST_TABLE = 'waitlist'

function getStoredEmails(): string[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function getCount(): number {
  return BASE_COUNT + getStoredEmails().length
}

function addEmail(email: string): void {
  const arr = getStoredEmails()
  if (!arr.includes(email)) {
    arr.push(email)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(arr))
  }
}

// ── WaitlistCount: reads localStorage on client only ─────────────────────────
export function WaitlistCount({ className }: { className?: string }) {
  const [count, setCount] = useState(BASE_COUNT)

  useEffect(() => {
    setCount(getCount())
  }, [])

  return (
    <strong className={className}>{count.toLocaleString()}</strong>
  )
}

// ── WaitlistForm ──────────────────────────────────────────────────────────────
interface WaitlistFormProps {
  formId: string
  inputId: string
  successId: string
  submitLabel: string
  successMessage: string
  centered?: boolean
}

export default function WaitlistForm({
  formId,
  inputId,
  successId,
  submitLabel,
  successMessage,
  centered = false,
}: WaitlistFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const trimmed = email.trim()
    if (!trimmed) return

    setIsSubmitting(true)
    setError('')

    const { error: insertError } = await supabase
      .from(WAITLIST_TABLE)
      .insert({ email: trimmed })

    const isDuplicate = !!insertError && (
      insertError.code === '23505' ||
      insertError.message?.toLowerCase().includes('duplicate') ||
      insertError.details?.toLowerCase().includes('already exists')
    )

    if (insertError && !isDuplicate) {
      setError('Something went wrong. Please try again.')
      setIsSubmitting(false)
      return
    }
    
    if (!insertError) {
      // Successful insertion: send welcome email
      try {
        await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email: trimmed })
        })
      } catch (err) {
        console.error('Failed to send welcome email:', err)
      }
      
      addEmail(trimmed)
    }

    setSubmitted(true)
    setIsSubmitting(false)
    window.dispatchEvent(
      new CustomEvent('prologue:waitlist-success', { detail: { alreadyRegistered: isDuplicate } })
    )
  }

  if (submitted) {
    return (
      <div
        id={successId}
        className={[
          'max-w-[460px] px-[22px] py-[18px]',
          'bg-parchment-soft border border-rule rounded-2xl',
          'font-body',
          centered ? 'mx-auto mt-5' : '',
        ].join(' ')}
      >
        <strong className="block font-display text-[22px] font-normal text-ink mb-1">
          You&apos;re in line.
        </strong>
        <span className="text-[14px] text-ink-soft">{successMessage}</span>
      </div>
    )
  }

  return (
    <>
    <form
      id={formId}
      autoComplete="off"
      onSubmit={handleSubmit}
      className={[
        'flex items-center gap-2 max-w-[460px]',
        'px-5 py-[6px] pr-[6px]',
        'bg-white rounded-full border border-rule',
        'shadow-[0_1px_0_rgba(28,24,21,0.04),0_18px_36px_-22px_rgba(28,24,21,0.22)]',
        'focus-within:shadow-[0_1px_0_rgba(28,24,21,0.04),0_20px_40px_-20px_rgba(193,63,37,0.28),0_0_0_4px_rgba(193,63,37,0.12)]',
        'transition-shadow duration-200',
        centered ? 'mx-auto' : '',
      ].join(' ')}
    >
      <input
        type="email"
        id={inputId}
        name="email"
        placeholder="your@email.com"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={isSubmitting}
        className="flex-1 min-w-0 border-0 outline-none bg-transparent font-body text-[16px] text-ink py-[14px] placeholder:text-muted-soft"
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className="border-0 bg-ink text-[#F3EBDA] font-body text-[15px] font-medium px-[22px] py-3 rounded-full cursor-pointer inline-flex items-center gap-2 hover:bg-brand active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-70 transition-all duration-150 group"
      >
        {isSubmitting ? 'Joining...' : submitLabel}
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-transform duration-200 group-hover:translate-x-0.5"
        >
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </button>
    </form>
    {error && (
      <p
        role="alert"
        className={[
          'mt-3 max-w-[460px] font-body text-[14px] text-brand',
          centered ? 'mx-auto text-center' : '',
        ].join(' ')}
      >
        {error}
      </p>
    )}
    </>
  )
}
