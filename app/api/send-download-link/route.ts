import { type NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/database"
import { sendDownloadEmail } from "@/lib/email"

export async function POST(request: NextRequest) {
  try {
    const { purchaseId } = await request.json()

    const purchase = db.getPurchase(purchaseId)
    if (!purchase) {
      return NextResponse.json({ error: "Purchase not found" }, { status: 404 })
    }

    if (purchase.status !== "completed") {
      return NextResponse.json({ error: "Purchase not completed" }, { status: 400 })
    }

    // Send download email
    await sendDownloadEmail(purchase.email, purchase.packageName, purchase.downloadToken)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Email error:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
