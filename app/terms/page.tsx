import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service — Prologue',
  description: 'The terms governing your use of the Prologue website, mobile applications, and learning platform.',
}

export default function TermsPage() {
  return (
    <>
      <Nav />

      <main className="max-w-[1200px] mx-auto px-7 pt-20 pb-24">
        {/* Header */}
        <div className="mb-14">
          <p className="font-body text-xs font-medium tracking-[1.8px] uppercase text-muted mb-5">
            Legal
          </p>
          <h1 className="font-display font-normal text-[clamp(40px,5vw,68px)] leading-[0.96] tracking-[-1.2px] text-ink mb-5">
            Terms of Service
          </h1>
          <p className="font-body text-[14px] text-muted">
            Last updated: <strong className="text-ink-soft font-medium">May 2026</strong>
          </p>
        </div>

        {/* Intro */}
        <div className="prose-prologue">
          <p className="lead">
            These Terms of Service (“Terms”) govern your access to and use of Prologue (“the App”, “the Platform”, “we”, “our”, or “us”), including our mobile applications, web platform, website at <span className="text-ink font-medium">prologue.app</span>, and all related educational services.
          </p>
          <p>
            By accessing or using Prologue, you agree to be bound by these Terms and our associated Privacy Policy. If you do not agree to these Terms, you may not access or use our services.
          </p>

          <Section title="1. Acceptance of Terms">
            <p>
              By creating an account, subscribing to Prologue Pro, visiting our web platform, or joining our waitlist, you confirm that you are of legal age in your jurisdiction (or, if you are a minor, that you have your parent or legal guardian's explicit permission to use the platform) and that you agree to these Terms.
            </p>
          </Section>

          <Section title="2. Account Registration and Security">
            <p>
              To access certain features of the platform, you may be required to register for an account. When registering:
            </p>
            <ul>
              <li>You must provide accurate, current, and complete information, including a name or display name and a valid email address.</li>
              <li>You are responsible for maintaining the security of your authentication credentials.</li>
              <li>You must immediately notify us of any unauthorized use of your account or security breach.</li>
              <li>You agree to keep your account login details secure.</li>
            </ul>
            <p>
              Prologue is not liable for any losses or damages caused by your failure to protect your login credentials.
            </p>
          </Section>

          <Section title="3. The Service & AI Content Generation">
            <p>
              Prologue uses advanced AI systems to generate interactive educational explanations, diagrams, HTML, JavaScript, and other visual learning experiences.
            </p>
            <SubSection heading="Academic Integrity">
              <p>
                Prologue is built as an interactive visual helper to foster deep understanding and conceptual curiosity. It is designed to support learning — <strong>not to facilitate academic dishonesty, cheating, or automated answer generation</strong>.
              </p>
            </SubSection>
            <SubSection heading="Limitations of Generative AI">
              <p>
                While we strive for high educational accuracy, AI-generated content can occasionally contain inaccuracies. Users and educators are encouraged to cross-reference academic concepts and exercise critical review.
              </p>
            </SubSection>
          </Section>

          <Section title="4. Voice Input and Speech Processing">
            <p>
              Some features of Prologue allow speech interactions. When using these features:
            </p>
            <ul>
              <li>You grant us permission to process voice inputs and audio through platform-level speech APIs or Apple system services.</li>
              <li>On-device processing will be prioritized where supported by your hardware and platform settings.</li>
              <li>You agree not to submit voice recordings containing highly sensitive personal, medical, or third-party details.</li>
            </ul>
          </Section>

          <Section title="5. Prologue Pro Subscriptions & Purchases">
            <p>
              Prologue offers optional paid subscriptions (“Prologue Pro”) providing premium features, expanded AI generation, and advanced subjects.
            </p>
            <SubSection heading="Mobile Purchases">
              <p>
                Subscriptions purchased through our iOS or Android apps are processed securely through the Apple App Store or Google Play Store. These purchases are subject to the respective store's terms and billing policies.
              </p>
            </SubSection>
            <SubSection heading="Web Purchases">
              <p>
                Subscriptions purchased on our web platform are processed securely via Stripe. By providing payment details, you authorize Stripe to process the subscription fees on our behalf.
              </p>
            </SubSection>
            <SubSection heading="Verification & Access">
              <p>
                We use RevenueCat and secure anonymous entitlement systems to manage and verify your subscription status. All fees are non-refundable except as required by law or the specific policies of the processing application store.
              </p>
            </SubSection>
          </Section>

          <Section title="6. User Content & License">
            <p>
              You retain all ownership rights to the educational prompts, notes, bookmarks, and learning history you create on Prologue.
            </p>
            <p>
              By submitting inputs or prompts to the platform, you grant Prologue a secure, royalty-free, worldwide license to process, cache, and transmit the content solely for the purpose of operating, moderating, and improving the educational and generative features of the platform.
            </p>
          </Section>

          <Section title="7. Acceptable Use and Safety Guardrails">
            <p>
              To maintain a safe educational environment for all students and educators, you agree not to:
            </p>
            <ul>
              <li>Submit inputs that are harmful, offensive, sexually explicit, abusive, or promote violence.</li>
              <li>Use the platform for any illegal activities or to violate academic integrity codes.</li>
              <li>Decompile, reverse-engineer, or attempt to extract source code from interactive learning visuals.</li>
              <li>Deploy automated bots, scrapers, or scripts to harvest data or interact with our APIs without authorization.</li>
              <li>Overload, disrupt, or attack our database, AI interfaces, or server infrastructure.</li>
            </ul>
          </Section>

          <Section title="8. Moderation and Access Restriction">
            <p>
              We employ automated moderation systems to review user inputs for safety and relevance. We reserve the right to:
            </p>
            <ul>
              <li>Block unsafe, inappropriate, or non-educational prompts.</li>
              <li>Suspend or terminate accounts that repeatedly violate these Terms.</li>
              <li>Modify, suspend, or terminate any feature of the platform at our discretion to protect the community.</li>
            </ul>
          </Section>

          <Section title="9. Intellectual Property">
            <p>
              Except for user-submitted content, all elements of Prologue — including logos, designs, source code, interactive visuals, CSS styles, animations, graphics, and the “Prologue” brand — are the exclusive property of Prologue Learning, Inc. and are protected by copyright, trademark, and other proprietary laws.
            </p>
          </Section>

          <Section title="10. Disclaimers">
            <p>
              THE SERVICE IS PROVIDED “AS IS” AND “AS AVAILABLE” WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT PROLOGUE WILL BE COMPLETELY ERROR-FREE, SECURE, OR UNINTERRUPTED.
            </p>
          </Section>

          <Section title="11. Limitation of Liability">
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, PROLOGUE LEARNING, INC. AND ITS DIRECTORS, EMPLOYEES, OR PARTNERS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES ARISING OUT OF YOUR USE OF THE SERVICE, EVEN IF ADVISED OF THE POSSIBILITY. OUR TOTAL LIABILITY TO YOU FOR ANY CLAIMS UNDER THESE TERMS WILL NOT EXCEED $100 USD OR THE AMOUNT PAID BY YOU FOR PROLOGUE PRO IN THE PAST THREE MONTHS, WHICHEVER IS HIGHER.
            </p>
          </Section>

          <Section title="12. Governing Law">
            <p>
              These Terms and your use of Prologue are governed by the laws of the State of Delaware, United States, without regard to its conflict-of-law principles. Any legal actions or disputes must be filed exclusively in the federal or state courts located in Delaware.
            </p>
          </Section>

          <Section title="13. Changes to These Terms">
            <p>
              We reserve the right to modify these Terms at any time. Any changes will be reflected by the “Last updated” date at the top of this document. Your continued use of the platform after updates are posted indicates your acceptance of the revised Terms.
            </p>
          </Section>

          <Section title="14. Contact Information">
            <p>
              If you have any questions, feedback, or concerns regarding these Terms, you may reach us at:
            </p>
            <p className="mt-4">
              <strong>Email:</strong>{' '}
              <a href="mailto:prologue.help@gmail.com" className="text-brand hover:underline">
                prologue.help@gmail.com
              </a>
            </p>
          </Section>
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
