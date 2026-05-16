// Server component

export default function CompareSection() {
  return (
    <section className="py-24 pt-16">
      <div className="max-w-[1080px] mx-auto px-7">
        <div
          className="bg-parchment-card text-[#EFE7D6] rounded-3xl px-11 py-14 relative overflow-hidden max-[760px]:px-6 max-[760px]:py-9"
        >
          <div className="grid grid-cols-3 max-[760px]:grid-cols-1 max-[760px]:gap-6 relative z-10">

            {/* Column 1 */}
            <div className="px-6 border-l border-white/[0.08] first:border-l-0 first:pl-0 max-[760px]:border-l-0 max-[760px]:px-0">
              <h4 className="font-code text-[11px] tracking-[1.6px] uppercase text-[#7A6F5E] mb-[14px] font-medium">
                Not a
              </h4>
              <p className="font-display text-[22px] leading-[1.3] text-[#EFE7D6] tracking-[-0.2px]">
                <span className="text-[#5A5145] line-through decoration-[1px]">video</span>{' '}
                you watch in silence at 2× speed.
              </p>
            </div>

            {/* Column 2 */}
            <div className="px-6 border-l border-white/[0.08] max-[760px]:border-l-0 max-[760px]:px-0">
              <h4 className="font-code text-[11px] tracking-[1.6px] uppercase text-[#7A6F5E] mb-[14px] font-medium">
                Not a
              </h4>
              <p className="font-display text-[22px] leading-[1.3] text-[#EFE7D6] tracking-[-0.2px]">
                <span className="text-[#5A5145] line-through decoration-[1px]">chatbot</span>{' '}
                handing you a wall of words to re-read.
              </p>
            </div>

            {/* Column 3 */}
            <div className="px-6 border-l border-white/[0.08] max-[760px]:border-l-0 max-[760px]:px-0">
              <h4 className="font-code text-[11px] tracking-[1.6px] uppercase text-[#7A6F5E] mb-[14px] font-medium">
                But a
              </h4>
              <p className="font-display text-[22px] leading-[1.3] text-[#EFE7D6] tracking-[-0.2px]">
                working environment where the concept{' '}
                <em className="italic text-brand">behaves</em>, and you control it.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
