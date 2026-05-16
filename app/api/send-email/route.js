import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req) {
  const body = await req.json()

  const { email } = body

  try {
    await resend.emails.send({
      from: 'Prologue <onboarding@yourdomain.com>',
      to: email,
      subject: 'Welcome to Prologue ✨',
      html: `
        <div style="font-family:Arial;padding:20px">
          <h1>You’re on the list ✨</h1>
          <p>Thanks for joining Prologue waitlist.</p>
        </div>
      `
    })

    return Response.json({ success: true })
  } catch (error) {
    return Response.json({ error })
  }
}