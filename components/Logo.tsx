'use client'

import React from 'react'

interface LogoProps {
  className?: string
  iconOnly?: boolean
  size?: number
  brandColor?: string
  inkColor?: string
}

export default function Logo({ 
  className = '', 
  iconOnly = false, 
  size = 32,
  brandColor = 'text-brand',
  inkColor = 'text-ink'
}: LogoProps) {
  return (
    <div className={`inline-flex items-center gap-[10px] ${className}`}>
      <svg
        width={size}
        height={(size * 80) / 66}
        viewBox="60 45 66 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <path
          d="M 72 47 C 108 47 126 62 126 85 C 126 108 108 123 72 123 Z"
          fill="currentColor"
          className={brandColor}
        />
        <rect
          x="60"
          y="45"
          width="16"
          height="80"
          rx="3"
          fill="currentColor"
          className={inkColor}
        />
      </svg>
      {!iconOnly && (
        <span 
          className={inkColor}
          style={{ 
            fontFamily: 'Georgia, "Book Antiqua", Palatino, serif',
            fontSize: '26px',
            letterSpacing: '3px',
            fontWeight: 400
          }}
        >
          Prologue
        </span>
      )}
    </div>
  )
}
