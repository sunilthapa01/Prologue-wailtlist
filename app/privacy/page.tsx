import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — Prologue',
  description: 'How Prologue collects, uses, and protects your personal information.',
}

export default function PrivacyPage() {
  return (
    <>
      <Nav />

      <main className="max-w-[1200px] mx-auto px-5 sm:px-7 pt-12 sm:pt-20 pb-16 sm:pb-24">
        {/* Header */}
        <div className="mb-10 sm:mb-14">
          <p className="font-body text-xs font-medium tracking-[1.8px] uppercase text-muted mb-4 sm:mb-5">
            Legal
          </p>
          <h1 className="font-display font-normal text-[clamp(32px,8vw,68px)] leading-[1.02] sm:leading-[0.96] tracking-[-0.8px] sm:tracking-[-1.2px] text-ink mb-4 sm:mb-5">
            Privacy Policy
          </h1>
          <p className="font-body text-[14px] text-muted">
            Last updated: <strong className="text-ink-soft font-medium">May 2026</strong>
          </p>
        </div>

        {/* Intro */}
        <div className="prose-prologue">
          <p className="lead">
            Prologue (“the App”, “the Platform”, “we”, “our”, or “us”) is designed to help students understand concepts through interactive visual learning experiences while respecting user privacy.
          </p>
          <p>
            This Privacy Policy explains how information is handled when you use Prologue across mobile apps and the web platform. By using Prologue, you agree to the practices described in this policy.
          </p>

          <Section title="1. Overview">
            <p>
              Prologue is a privacy-focused educational platform built to help students explore and understand concepts through interactive visuals.
            </p>
            <p>
              We aim to minimize data collection wherever possible and ensure users remain in control of their learning experience and content.
            </p>
            <p>
              Prologue does not sell user data, does not use invasive advertising systems, and does not profile users for marketing purposes.
            </p>
          </Section>

          <Section title="2. Information We Collect">
            <p>
              Depending on how you use Prologue, we may collect limited information necessary to provide core functionality.
            </p>

            <SubSection heading="Account Information">
              <p>When creating an account, we may collect:</p>
              <ul>
                <li>Name or display name</li>
                <li>Email address</li>
                <li>Authentication credentials handled securely through our authentication providers</li>
              </ul>
            </SubSection>

            <SubSection heading="Learning Data">
              <p>To improve your experience, Prologue may store:</p>
              <ul>
                <li>Saved concepts and bookmarks</li>
                <li>Learning history</li>
                <li>Notes created within sessions</li>
                <li>Preferences such as subjects, grade level, and curriculum board</li>
                <li>Progress-related information such as streaks, XP, or completed activities</li>
              </ul>
            </SubSection>

            <SubSection heading="Subscription Information">
              <p>If you purchase Prologue Pro:</p>
              <ul>
                <li>Subscription status</li>
                <li>Purchase entitlement information</li>
                <li>Anonymous device identifiers required for subscription verification</li>
              </ul>
              <p className="mt-2 text-xs text-muted">
                Payment information is never stored or processed directly by Prologue.
              </p>
            </SubSection>
          </Section>

          <Section title="3. Information We Do Not Collect">
            <p>Prologue does not collect or use:</p>
            <ul>
              <li>Precise location tracking</li>
              <li>Advertising identifiers for behavioral advertising</li>
              <li>Personal data for resale</li>
              <li>Voice recordings for advertising or profiling</li>
              <li>Unrelated personal information outside the educational experience</li>
            </ul>
            <p>
              We do not sell user-generated content or learning data to third parties.
            </p>
          </Section>

          <Section title="4. Voice Input and Speech Processing">
            <p>
              Some Prologue features may allow users to create voice-based inputs or interact using speech.
            </p>
            <p>
              When voice features are used:
            </p>
            <ul>
              <li>Speech recognition may be processed using Apple system services or supported platform-level speech APIs</li>
              <li>Audio recordings are stored only when required for the feature experience</li>
              <li>Prologue does not use voice recordings for advertising, profiling, or marketing</li>
              <li>Voice recordings and transcripts are never shared with third parties for commercial purposes</li>
            </ul>
            <p>
              On supported Apple devices, speech processing may occur entirely on-device depending on platform capabilities and user settings.
            </p>
          </Section>

          <Section title="5. AI and Interactive Content Generation">
            <p>
              Prologue uses AI systems to generate interactive educational visuals and explanations.
            </p>
            <p>
              This may include:
            </p>
            <ul>
              <li>Processing educational prompts submitted by users</li>
              <li>Generating HTML, JavaScript, and visual learning experiences</li>
              <li>Providing follow-up educational explanations and guided responses</li>
            </ul>
            <p>
              User prompts may be securely processed through AI infrastructure providers to generate educational content.
            </p>
            <p>
              Prologue is designed to support understanding and learning — not automated cheating or answer generation.
            </p>
          </Section>

          <Section title="6. Data Storage">
            <p>
              Depending on the platform and feature used, Prologue may store data:
            </p>
            <ul>
              <li>Locally on your device</li>
              <li>In secure cloud infrastructure</li>
              <li>In encrypted databases used for caching and account synchronization</li>
            </ul>
            <p>
              Examples of stored data include: saved notes, bookmarks, cached visuals, learning history, and subscription status. We use reasonable safeguards to protect stored data.
            </p>
          </Section>

          <Section title="7. Third-Party Services">
            <p>
              Prologue may use trusted third-party providers to operate parts of the platform. These services may include:
            </p>
            <ul>
              <li><strong>Supabase</strong> — authentication, database, and backend infrastructure</li>
              <li><strong>Anthropic</strong> — AI-powered educational generation</li>
              <li><strong>RevenueCat</strong> — subscription and entitlement management</li>
              <li><strong>Apple</strong> — App Store payments, speech recognition, and platform services</li>
              <li><strong>Google</strong> — platform and authentication-related services where applicable</li>
              <li><strong>Stripe</strong> — web subscription payments</li>
            </ul>
            <p>
              These providers process only the information necessary to perform their services. Third-party services operate under their own privacy policies and security practices.
            </p>
          </Section>

          <Section title="8. Subscriptions & Purchases">
            <p>
              Prologue offers optional paid subscriptions (“Prologue Pro”).
            </p>

            <SubSection heading="Mobile Purchases">
              <p>On iOS and Android:</p>
              <ul>
                <li>Payments are processed through Apple App Store or Google Play</li>
                <li>Prologue never receives or stores your payment card information</li>
              </ul>
            </SubSection>

            <SubSection heading="Web Purchases">
              <p>On the web platform:</p>
              <ul>
                <li>Payments may be processed securely through Stripe</li>
              </ul>
              <p className="mt-2">
                Subscription systems may use anonymous identifiers and purchase history solely to verify access and entitlement status. This information is not used for advertising or profiling.
              </p>
            </SubSection>
          </Section>

          <Section title="9. Educational Use">
            <p>
              Prologue is intended for educational purposes.
            </p>
            <p>
              The platform may support multiple curricula and education systems, including:
            </p>
            <ul>
              <li>Common Core</li>
              <li>Advanced Placement (AP)</li>
              <li>CBSE</li>
              <li>International and General learning systems</li>
            </ul>
            <p>
              Student interactions may be used internally to improve platform quality, reliability, moderation, and educational performance. We do not use student-generated educational content for advertising purposes.
            </p>
          </Section>

          <Section title="10. Safety and Moderation">
            <p>
              To maintain a safe educational environment:
            </p>
            <ul>
              <li>Inputs may be automatically reviewed for harmful or inappropriate requests</li>
              <li>Unsafe or non-educational requests may be blocked</li>
              <li>Moderation systems are used to prevent misuse of the platform</li>
            </ul>
            <p>
              This helps ensure Prologue remains focused on safe academic learning experiences.
            </p>
          </Section>

          <Section title="11. User Control and Data Deletion">
            <p>
              Users maintain control over their information. Depending on the platform and account type, users may:
            </p>
            <ul>
              <li>Edit or delete notes</li>
              <li>Remove saved concepts and bookmarks</li>
              <li>Clear locally stored data</li>
              <li>Delete their account</li>
              <li>Request deletion of associated cloud data where applicable</li>
            </ul>
            <p>
              Once deleted, certain information may not be recoverable.
            </p>
          </Section>

          <Section title="12. Children’s Privacy">
            <p>
              Prologue is designed for educational use, including by students.
            </p>
            <p>
              We do not knowingly collect unnecessary personal information from children. If we become aware that information has been collected in violation of applicable child privacy laws, we will take appropriate steps to remove it.
            </p>
            <p>
              Parents or guardians may contact us regarding concerns about child privacy.
            </p>
          </Section>

          <Section title="13. Changes to This Policy">
            <p>
              This Privacy Policy may be updated periodically to reflect:
            </p>
            <ul>
              <li>Product changes</li>
              <li>New features</li>
              <li>Legal or regulatory requirements</li>
              <li>Platform or infrastructure updates</li>
            </ul>
            <p>
              Any updates will be reflected by the “Last updated” date at the top of this document.
            </p>
          </Section>

          <Section title="14. Contact Information">
            <p>
              If you have questions or concerns regarding this Privacy Policy, you may contact us at:
            </p>
            <p className="mt-4">
              <strong>Email:</strong>{' '}
              <a href="mailto:prologue.help@gmail.com" className="text-brand hover:underline">
                prologue.help@gmail.com
              </a>
            </p>
          </Section>

          <div className="mt-14 pt-10 border-t border-rule text-center text-muted font-body text-sm space-y-1">
            <p className="italic">Built for curiosity.</p>
            <p className="italic">Built for understanding.</p>
            <p className="italic">Built for students.</p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10 pt-10 border-t border-rule">
      <h2 className="font-display font-normal text-[clamp(24px,3vw,34px)] tracking-[-0.5px] text-ink mb-5">
        {title}
      </h2>
      <div className="space-y-4">{children}</div>
    </section>
  )
}

function SubSection({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <div className="mb-5">
      <h3 className="font-body font-semibold text-[15px] text-ink-soft mb-2">{heading}</h3>
      {children}
    </div>
  )
}
