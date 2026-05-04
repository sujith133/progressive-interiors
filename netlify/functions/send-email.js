import nodemailer from 'nodemailer'

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) }
  }

  let body
  try {
    body = JSON.parse(event.body)
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid JSON' }) }
  }

  const { name, email, phone, service, message } = body

  if (!name || !email || !message) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Name, email, and message are required' }) }
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  })

  const serviceLabel = service || 'Not specified'
  const phoneLabel = phone || 'Not provided'

  const mailOptions = {
    from: `"Progressive Interiors Website" <${process.env.GMAIL_USER}>`,
    to: 'sales@progressiveinteriors.in',
    replyTo: email,
    subject: `New Enquiry from ${name} — Progressive Interiors`,
    html: `
      <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #f9f6f0; padding: 40px; border-radius: 8px;">
        <div style="text-align: center; margin-bottom: 32px;">
          <h1 style="font-size: 24px; color: #1a2f3d; margin: 0;">Progressive Interiors</h1>
          <p style="color: #b8952a; font-size: 12px; letter-spacing: 3px; text-transform: uppercase; margin: 6px 0 0;">New Website Enquiry</p>
        </div>

        <table style="width: 100%; border-collapse: collapse; background: white; border-radius: 8px; overflow: hidden;">
          <tr style="background: #1a2f3d; color: #f8d984;">
            <td style="padding: 14px 20px; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; font-weight: bold;">Field</td>
            <td style="padding: 14px 20px; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; font-weight: bold;">Details</td>
          </tr>
          <tr>
            <td style="padding: 14px 20px; border-bottom: 1px solid #f0ece4; color: #888; font-size: 13px;">Name</td>
            <td style="padding: 14px 20px; border-bottom: 1px solid #f0ece4; color: #1a2f3d; font-size: 14px; font-weight: bold;">${name}</td>
          </tr>
          <tr style="background: #fdf9f3;">
            <td style="padding: 14px 20px; border-bottom: 1px solid #f0ece4; color: #888; font-size: 13px;">Email</td>
            <td style="padding: 14px 20px; border-bottom: 1px solid #f0ece4; color: #1a2f3d; font-size: 14px;"><a href="mailto:${email}" style="color: #b8952a;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 14px 20px; border-bottom: 1px solid #f0ece4; color: #888; font-size: 13px;">Phone</td>
            <td style="padding: 14px 20px; border-bottom: 1px solid #f0ece4; color: #1a2f3d; font-size: 14px;">${phoneLabel}</td>
          </tr>
          <tr style="background: #fdf9f3;">
            <td style="padding: 14px 20px; border-bottom: 1px solid #f0ece4; color: #888; font-size: 13px;">Service</td>
            <td style="padding: 14px 20px; border-bottom: 1px solid #f0ece4; color: #1a2f3d; font-size: 14px;">${serviceLabel}</td>
          </tr>
          <tr>
            <td style="padding: 14px 20px; color: #888; font-size: 13px; vertical-align: top;">Message</td>
            <td style="padding: 14px 20px; color: #1a2f3d; font-size: 14px; line-height: 1.6;">${message.replace(/\n/g, '<br/>')}</td>
          </tr>
        </table>

        <p style="margin-top: 24px; font-size: 12px; color: #aaa; text-align: center;">
          Sent from progressiveinteriors.in · Reply directly to this email to respond to ${name}
        </p>
      </div>
    `,
  }

  // Auto-reply to the enquirer
  const autoReplyOptions = {
    from: `"Progressive Interiors" <${process.env.GMAIL_USER}>`,
    to: email,
    subject: `We've received your enquiry — Progressive Interiors`,
    html: `
      <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #f9f6f0; padding: 40px; border-radius: 8px;">
        <h1 style="font-size: 22px; color: #1a2f3d; margin: 0 0 8px;">Thank you, ${name}!</h1>
        <p style="color: #b8952a; font-size: 11px; letter-spacing: 3px; text-transform: uppercase; margin: 0 0 28px;">Progressive Interiors</p>

        <p style="color: #444; font-size: 15px; line-height: 1.7; margin: 0 0 16px;">
          We've received your message and our team will get back to you within <strong>24 hours</strong>.
        </p>
        <p style="color: #444; font-size: 15px; line-height: 1.7; margin: 0 0 28px;">
          In the meantime, feel free to reach us on WhatsApp at <strong>+91 90525 25249</strong> for a quicker response.
        </p>

        <div style="background: #1a2f3d; border-radius: 8px; padding: 20px 24px; color: #f9f6f0; font-size: 13px; line-height: 1.8;">
          <strong style="color: #f8d984; letter-spacing: 1px;">PROGRESSIVE INTERIORS</strong><br/>
          2nd Floor, Brindavan Colony, A. S. Rao Nagar<br/>
          Hyderabad, Telangana 500062<br/>
          Mon–Sat, 10 AM – 7 PM IST
        </div>
      </div>
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    await transporter.sendMail(autoReplyOptions)
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: 'Email sent successfully' }),
    }
  } catch (err) {
    console.error('Email send error:', err)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send email', details: err.message }),
    }
  }
}
