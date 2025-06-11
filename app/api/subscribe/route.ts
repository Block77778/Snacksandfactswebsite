import { type NextRequest, NextResponse } from "next/server"
import { sendNotificationEmail, sendConfirmationEmail } from "@/lib/email"

export async function POST(request: NextRequest) {
  try {
    // Parse the form data
    const formData = await request.json()

    // Validate required fields
    const requiredFields = ["firstName", "lastName", "email", "phone", "package"]
    for (const field of requiredFields) {
      if (!formData[field]) {
        return NextResponse.json({ success: false, message: `Missing required field: ${field}` }, { status: 400 })
      }
    }

    // Send notification email to admin
    await sendNotificationEmail(formData)

    // Send confirmation email to customer
    await sendConfirmationEmail(formData)

    return NextResponse.json({
      success: true,
      message: "Subscription request received. We'll contact you shortly.",
    })
  } catch (error) {
    console.error("Subscription request error:", error)
    return NextResponse.json(
      { success: false, message: "Failed to process your request. Please try again." },
      { status: 500 },
    )
  }
}
