import { type NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/database"

export async function GET(request: NextRequest, { params }: { params: { token: string } }) {
  try {
    const { token } = params

    const purchase = db.getPurchaseByToken(token)
    if (!purchase) {
      return NextResponse.json({ error: "Invalid download token" }, { status: 404 })
    }

    if (purchase.status !== "completed") {
      return NextResponse.json({ error: "Purchase not completed" }, { status: 400 })
    }

    // Check if download has expired
    const now = new Date()
    const isValid = now < purchase.expiresAt

    if (!isValid) {
      return NextResponse.json({ error: "Download link has expired" }, { status: 410 })
    }

    // Get package details
    const package_ = db.getPackage(purchase.packageId)
    if (!package_) {
      return NextResponse.json({ error: "Package not found" }, { status: 404 })
    }

    return NextResponse.json({
      id: purchase.id,
      packageName: purchase.packageName,
      files: package_.files,
      expiresAt: purchase.expiresAt.toISOString(),
      isValid: true,
    })
  } catch (error) {
    console.error("Download token error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
