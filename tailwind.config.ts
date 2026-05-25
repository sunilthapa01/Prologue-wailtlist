import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        parchment: '#F2EDE1',
        'parchment-soft': '#EAE3D1',
        'parchment-card': '#1A1612',
        ink: '#1B1714',
        'ink-soft': '#3A332C',
        muted: '#7B7264',
        'muted-soft': '#B6AC9A',
        rule: '#D9D2BF',
        brand: '#C13F25',
        'brand-deep': '#A8351F',
      },
      fontFamily: {
        display: ['var(--font-instrument-serif)', 'Georgia', 'serif'],
        body: ['var(--font-geist)', 'system-ui', 'sans-serif'],
        code: ['var(--font-geist-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
}

export default config
