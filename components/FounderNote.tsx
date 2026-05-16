import Logo from './Logo'

export default function FounderNote() {
  return (
    <section className="pb-24">
      <div className="max-w-[1080px] mx-auto px-7">
        <div className="grid grid-cols-[120px_1fr] gap-8 items-start p-14 bg-parchment-soft border border-rule rounded-3xl max-[640px]:grid-cols-1 max-[640px]:gap-5 max-[640px]:p-8 max-[640px]:px-6">

          {/* Founder avatar */}
          <div
            className="w-[120px] h-[120px] rounded-full grid place-items-center"
            style={{
              background:
                'linear-gradient(135deg, #E88566 0%, #C13F25 50%, #7A2814 100%)',
              boxShadow: '0 18px 36px -22px rgba(193,63,37,0.5)',
            }}
          >
            <Logo 
              iconOnly 
              size={56} 
              brandColor="text-white opacity-90" 
              inkColor="text-white" 
            />
          </div>

          <div>
            <div className="font-display text-[22px] leading-[1.5] text-ink tracking-[-0.2px] [text-wrap:pretty]">
              Hi — I&rsquo;m building Prologue because I spent fifteen years explaining
              hard ideas to students, and every time the moment of{' '}
              <em className="italic text-brand">understanding</em> came when they
              got to <em className="italic text-brand">touch</em> the idea. Not
              read about it. Not watch it.{' '}
              <em className="italic text-brand">Move it.</em>
              <br />
              <br />
              Prologue is that moment, on demand, for anything.
            </div>
            <div className="mt-[18px] font-body text-[13px] text-muted">
              <strong className="text-ink font-medium">Anna Chen</strong> · Founder
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
