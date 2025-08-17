import type { NextRequest } from 'next/server'
import nodemailer from 'nodemailer'

function createTransport() {
  const host = process.env.MAIL_HOST
  const port = process.env.MAIL_PORT ? parseInt(process.env.MAIL_PORT, 10) : 587
  const user = process.env.MAIL_USER
  const pass = process.env.MAIL_PASS
  if (!host || !user || !pass) {
    throw new Error('Mail transport env vars missing')
  }
  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  })
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, message } = body || {}
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 })
    }
    const transport = createTransport()
    const to = process.env.MAIL_TO || process.env.MAIL_USER!
    const mail = await transport.sendMail({
      from: `TDH Website <${process.env.MAIL_USER}>`,
      to,
      replyTo: email,
      subject: 'General query',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br/>${message.replace(/\n/g,'<br/>')}</p>`
    })
    return new Response(JSON.stringify({ ok: true, id: mail.messageId }), { status: 200 })
  } catch (e: any) {
    console.error('Contact email error', e)
    return new Response(JSON.stringify({ error: 'Internal error' }), { status: 500 })
  }
}
