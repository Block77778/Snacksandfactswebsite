import nodemailer from "nodemailer"

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || "587"),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

// Function to send notification email to admin when someone submits the form
export async function sendNotificationEmail(formData: {
  firstName: string
  lastName: string
  email: string
  phone: string
  package: string
  message?: string
}) {
  const mailOptions = {
    from: process.env.SMTP_FROM,
    to: process.env.ADMIN_EMAIL,
    subject: `New Hammer Fit Program Subscription Request: ${formData.package}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #000; text-align: center;">🔨 New Subscription Request</h1>
        
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <h2>Customer Details:</h2>
          <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone}</p>
          <p><strong>Package Selected:</strong> ${formData.package}</p>
          ${formData.message ? `<p><strong>Message:</strong> ${formData.message}</p>` : ""}
        </div>
        
        <p>Please contact this customer to collect payment and send them their subscription materials.</p>
        
        <hr style="margin: 30px 0;">
        <p style="text-align: center; color: #666; font-size: 12px;">
          © 2024 Hammer Fit Program. All rights reserved.
        </p>
      </div>
    `,
  }

  await transporter.sendMail(mailOptions)
}

// Function to send confirmation email to customer
export async function sendConfirmationEmail(formData: {
  firstName: string
  lastName: string
  email: string
  package: string
}) {
  const mailOptions = {
    from: process.env.SMTP_FROM,
    to: formData.email,
    subject: `Thank You for Your Hammer Fit Program Interest!`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #000; text-align: center;">🔨 Hammer Fit Program</h1>
        
        <p>Hi ${formData.firstName},</p>
        
        <p>Thank you for your interest in the <strong>${formData.package}</strong> package!</p>
        
        <p>We've received your request and will be contacting you shortly to complete your subscription and provide you with your personalized workout and meal plans.</p>
        
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <h3>What happens next?</h3>
          <ol>
            <li>We'll contact you within 24-48 hours</li>
            <li>We'll arrange payment collection</li>
            <li>Once payment is received, we'll send your personalized plans</li>
          </ol>
        </div>
        
        <p>If you have any questions in the meantime, please reply to this email or contact us at hammer.snacksnfacts@gmail.com</p>
        
        <p>Looking forward to helping you on your fitness journey!</p>
        
        <p>Best regards,<br>The Hammer Fit Team</p>
        
        <hr style="margin: 30px 0;">
        <p style="text-align: center; color: #666; font-size: 12px;">
          © 2024 Hammer Fit Program. All rights reserved.
        </p>
      </div>
    `,
  }

  await transporter.sendMail(mailOptions)
}

// Function to send download email with link to customer
export async function sendDownloadEmail(formData: {
  firstName: string
  lastName: string
  email: string
  package: string
  downloadToken: string
}) {
  const downloadUrl = `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/download/${formData.downloadToken}`

  const mailOptions = {
    from: process.env.SMTP_FROM,
    to: formData.email,
    subject: `Your Hammer Fit Program Materials Are Ready!`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #000; text-align: center;">🔨 Hammer Fit Program</h1>
        
        <p>Hi ${formData.firstName},</p>
        
        <p>Great news! Your <strong>${formData.package}</strong> materials are now ready for download.</p>
        
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0; text-align: center;">
          <h3>Download Your Materials</h3>
          <a href="${downloadUrl}" style="display: inline-block; background-color: #000; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; font-weight: bold;">
            Download Now
          </a>
          <p style="margin-top: 15px; font-size: 12px; color: #666;">
            This link will expire in 7 days for security purposes.
          </p>
        </div>
        
        <div style="background-color: #fff3cd; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <h4>What's Included:</h4>
          <ul>
            <li>Personalized workout plan</li>
            <li>Custom meal plan and recipes</li>
            <li>Progress tracking sheets</li>
            <li>Exercise demonstration videos</li>
          </ul>
        </div>
        
        <p>If you have any questions or need support getting started, please reply to this email or contact us at hammer.snacksnfacts@gmail.com</p>
        
        <p>Let's get you started on your transformation journey!</p>
        
        <p>Best regards,<br>The Hammer Fit Team</p>
        
        <hr style="margin: 30px 0;">
        <p style="text-align: center; color: #666; font-size: 12px;">
          © 2024 Hammer Fit Program. All rights reserved.
        </p>
      </div>
    `,
  }

  await transporter.sendMail(mailOptions)
}
