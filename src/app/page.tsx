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
      <header className="pt-10 sm:pt-[72px] pb-10 sm:pb-14 relative overflow-x-hidden">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-7">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
            <div className="lg:w-[55%] lg:flex-shrink-0">
              <div className="inline-flex items-center gap-[10px] font-body text-[11px] sm:text-xs font-medium tracking-[1.6px] sm:tracking-[1.8px] uppercase text-muted mb-5 sm:mb-7">
                <span className="w-[7px] h-[7px] rounded-full bg-brand shadow-[0_0_0_4px_rgba(193,63,37,0.16)] flex-shrink-0" />
                Interactive learning, for any concept
              </div>

              <h1 className="font-display font-normal text-[clamp(38px,9vw,82px)] leading-[0.98] sm:leading-[0.96] tracking-[-1px] sm:tracking-[-1.5px] m-0 mb-5 sm:mb-[26px] text-ink [text-wrap:balance]">
                Understand anything
                <br />
                by <em className="italic text-brand">touching</em> it.
              </h1>

              <p className="font-display text-[clamp(17px,2vw,24px)] leading-snug text-ink-soft max-w-[520px] mb-8 sm:mb-10 [text-wrap:pretty]">
                Type any concept you don&apos;t quite grasp — at any grade, in any
                subject. Prologue generates a living, touchable visual you can drag,
                pull, and manipulate until the idea clicks.
              </p>

              <WaitlistForm
                formId="hero-form"
                inputId="hero-email"
                successId="hero-success"
                submitLabel="Join the waitlist"
                successMessage="We'll email you the moment your spot opens up. No spam, promise."
              />
            </div>

            <div className="lg:w-[45%] mt-10 lg:mt-0">
              <DerivativeDemo />
            </div>
          </div>
        </div>
      </header>

      <PhoneShowcase />
      <CompareSection />
      <HowItWorks />
      <Gallery />
      <FounderNote />

      <section className="text-center pt-14 sm:pt-[120px] pb-16 sm:pb-[100px]" id="join">
        <div className="max-w-[720px] mx-auto px-5 sm:px-7">
          <h2 className="font-display font-normal text-[clamp(40px,9vw,88px)] leading-[0.95] tracking-[-1px] sm:tracking-[-1.5px] mb-6 sm:mb-[28px] [text-wrap:balance]">
            Be one of the first
            <br />
            to <em className="italic text-brand">understand</em>.
          </h2>
          <p className="font-display text-[clamp(17px,2.2vw,26px)] leading-snug text-ink-soft mx-auto mb-8 sm:mb-9 [text-wrap:pretty]">
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
