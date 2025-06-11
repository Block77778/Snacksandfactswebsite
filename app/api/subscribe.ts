import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' })
  }

  const { firstName, lastName, email, phone, message, package: selectedPackage } = req.body

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // your Gmail
        pass: process.env.GMAIL_PASS, // your App Password (not your Gmail password)
      },
    })

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'theblockchainsolutions@gmail.com',
      subject: `New Hammer Fit Subscription from ${firstName} ${lastName}`,
      text: `
New Subscription Request:

Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}
Package: ${selectedPackage}
Message: ${message || 'N/A'}
      `,
    }

    await transporter.sendMail(mailOptions)

    return res.status(200).json({ message: 'Form submitted and email sent successfully.' })
  } catch (error) {
    console.error('Email error:', error)
    return res.status(500).json({ message: 'Failed to send email.' })
  }
}
