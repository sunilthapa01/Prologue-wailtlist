import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return NextResponse.json({ error: 'Missing RESEND_API_KEY' }, { status: 500 })
  }

  const body = await req.json()
  const { email } = body

  if (!email) {
    return NextResponse.json({ error: 'Missing email' }, { status: 400 })
  }

  const resend = new Resend(apiKey)

  try {
    await resend.emails.send({
      from: 'Prologue <onboarding@resend.dev>',
      to: email,
      subject: 'Welcome to Prologue ✨',
      html: `
        <div style="font-family:Arial;padding:20px">
          <h1>You're on the list ✨</h1>
          <p>Thanks for joining the Prologue waitlist. We'll be in touch the moment early access opens up.</p>
        </div>
      `
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Resend error:', error)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
