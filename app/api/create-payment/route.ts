import { type NextRequest, NextResponse } from "next/server"
import { client } from "@/lib/square"
import { db } from "@/lib/database"
import { randomUUID } from "crypto"

export async function POST(request: NextRequest) {
  try {
    // Check if Square client is available
    if (!client || !client.paymentsApi) {
      return NextResponse.json({ error: "Payment service unavailable" }, { status: 503 })
    }

    const { sourceId, packageId, email, firstName, lastName } = await request.json()

    // Get package details
    const package_ = db.getPackage(packageId)
    if (!package_) {
      return NextResponse.json({ error: "Package not found" }, { status: 404 })
    }

    // Create payment request
    const paymentRequest = {
      sourceId,
      amountMoney: {
        amount: BigInt(package_.price),
        currency: "USD",
      },
      idempotencyKey: randomUUID(),
      note: `Hammer Fit - ${package_.name}`,
      buyerEmailAddress: email,
    }

    // Process payment with Square
    const { result, statusCode } = await client.paymentsApi.createPayment(paymentRequest)

    if (statusCode === 200 && result.payment) {
      // Generate download token
      const downloadToken = randomUUID()
      const expiresAt = new Date()
      expiresAt.setDate(expiresAt.getDate() + 7) // 7 days expiry

      // Create purchase record
      const purchase = db.createPurchase({
        email,
        packageId,
        packageName: package_.name,
        amount: package_.price,
        paymentId: result.payment.id!,
        status: "completed",
        downloadToken,
        expiresAt,
      })

      return NextResponse.json({
        success: true,
        paymentId: result.payment.id,
        downloadToken,
        purchaseId: purchase.id,
      })
    } else {
      return NextResponse.json({ error: "Payment failed", details: result.errors }, { status: 400 })
    }
  } catch (error) {
    console.error("Payment error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
