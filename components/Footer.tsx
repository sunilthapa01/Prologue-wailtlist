import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="border-t border-rule pt-12 pb-16 font-body text-[13px] text-muted">
      <div className="max-w-[1080px] mx-auto px-7">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
          <div className="flex flex-col gap-4">
            <Logo size={24} />
            <div className="opacity-60">© 2026 Prologue Learning, Inc.</div>
          </div>
        <div className="flex gap-[22px]">
          <a href="#" className="text-muted hover:text-brand transition-colors duration-150">
            Privacy
          </a>
          <a href="#" className="text-muted hover:text-brand transition-colors duration-150">
            Terms
          </a>
          <a href="#" className="text-muted hover:text-brand transition-colors duration-150">
            Twitter
          </a>
          <a
            href="mailto:hello@prologue.app"
            className="text-muted hover:text-brand transition-colors duration-150"
          >
            hello@prologue.app
          </a>
        </div>
        </div>
      </div>
    </footer>
  )
}
