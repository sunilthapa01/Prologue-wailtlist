import Nav from '@/components/Nav'
import SuccessModal from '@/components/SuccessModal'
import WaitlistForm from '@/components/WaitlistForm'
import DerivativeDemo from '@/components/DerivativeDemo'
import PhoneShowcase from '@/components/PhoneShowcase'
import CompareSection from '@/components/CompareSection'
import HowItWorks from '@/components/HowItWorks'
import Gallery from '@/components/Gallery'
import FounderNote from '@/components/FounderNote'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />

      {/* ── Hero ──────────────────────────────────────────────── */}
      <header className="pt-[72px] pb-14 relative">
        <div className="max-w-[1200px] mx-auto px-7">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
            {/* Left column — Text content */}
            <div className="lg:w-[55%] lg:flex-shrink-0">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-[10px] font-body text-xs font-medium tracking-[1.8px] uppercase text-muted mb-7">
                <span className="w-[7px] h-[7px] rounded-full bg-brand shadow-[0_0_0_4px_rgba(193,63,37,0.16)]" />
                Interactive learning, for any concept
              </div>

              {/* Headline */}
              <h1 className="font-display font-normal text-[clamp(42px,6vw,82px)] leading-[0.96] tracking-[-1.5px] m-0 mb-[26px] text-ink [text-wrap:balance]">
                Understand anything
                <br />
                by <em className="italic text-brand">touching</em> it.
              </h1>

              {/* Lede */}
              <p className="font-display text-[clamp(18px,2vw,24px)] leading-snug text-ink-soft max-w-[520px] mb-10 [text-wrap:pretty]">
                Type any concept you don&apos;t quite grasp — at any grade, in any
                subject. Prologue generates a living, touchable visual you can drag,
                pull, and manipulate until the idea clicks.
              </p>

              {/* Hero waitlist form */}
              <WaitlistForm
                formId="hero-form"
                inputId="hero-email"
                successId="hero-success"
                submitLabel="Join the waitlist"
                successMessage="We'll email you the moment your spot opens up. No spam, promise."
              />

            </div>

            {/* Right column — Live derivative demo */}
            <div className="lg:w-[45%] mt-12 lg:mt-0">
              <DerivativeDemo />
            </div>
          </div>
        </div>
      </header>

      {/* ── Device Showcase ───────────────────────────────────── */}
      <PhoneShowcase />

      {/* ── Compare strip ─────────────────────────────────────── */}
      <CompareSection />

      {/* ── How It Works ──────────────────────────────────────── */}
      <HowItWorks />

      {/* ── Examples Gallery ──────────────────────────────────── */}
      <Gallery />

      {/* ── Founder Note ──────────────────────────────────────── */}
      <FounderNote />

      {/* ── Final CTA ─────────────────────────────────────────── */}
      <section className="text-center pt-[120px] pb-[100px]" id="join">
        <div className="max-w-[720px] mx-auto px-7">
          <h2 className="font-display font-normal text-[clamp(48px,7vw,88px)] leading-[0.95] tracking-[-1.5px] mb-[28px] [text-wrap:balance]">
            Be one of the first
            <br />
            to <em className="italic text-brand">understand</em>.
          </h2>
          <p className="font-display text-[clamp(20px,2.2vw,26px)] leading-snug text-ink-soft mx-auto mb-9 [text-wrap:pretty]">
            Join the first learners exploring a more interactive way to understand
            ideas. Early access is limited while we carefully shape the experience.
          </p>
          <WaitlistForm
            formId="final-form"
            inputId="final-email"
            successId="final-success"
            submitLabel="Save my spot"
            successMessage="Welcome. We'll be in touch soon."
            centered
          />
        </div>
      </section>

      <Footer />
      <SuccessModal />
    </>
  )
}
