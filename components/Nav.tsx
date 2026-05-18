'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Logo from './Logo'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const isLegalPage = pathname === '/privacy' || pathname === '/terms'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={[
        'sticky top-0 z-50',
        'backdrop-blur-[14px] saturate-150',
        'bg-[rgba(242,237,225,0.78)]',
        'border-b transition-colors duration-[250ms]',
        scrolled ? 'border-rule' : 'border-transparent',
      ].join(' ')}
    >
      <div className="max-w-[1200px] mx-auto px-7 flex items-center justify-between py-[14px]">
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <Logo size={24} />
        </Link>
        <div className="flex items-center gap-6 font-body text-[14px] text-ink-soft">
          {!isLegalPage && (
            <>
              <a
                href="#how"
                className="text-ink-soft hover:text-brand transition-colors duration-150 max-sm:hidden"
              >
                How it works
              </a>
              <a
                href="#examples"
                className="text-ink-soft hover:text-brand transition-colors duration-150 max-sm:hidden"
              >
                Examples
              </a>
            </>
          )}
          <a
            href={isLegalPage ? '/#join' : '#join'}
            onClick={() => {
              if (!isLegalPage) {
                window.dispatchEvent(new CustomEvent('prologue:show-waitlist'))
              }
            }}
            className="px-4 py-2 rounded-full bg-ink text-[#F3EBDA] font-medium text-[13px] hover:bg-brand transition-colors duration-150"
          >
            Early Access
          </a>
        </div>
      </div>
    </nav>
  )
}
