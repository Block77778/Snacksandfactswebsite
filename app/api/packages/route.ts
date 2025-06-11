import { NextResponse } from "next/server"
import { db } from "@/lib/database"

export async function GET() {
  try {
    const packages = db.getPackages()
    return NextResponse.json(packages)
  } catch (error) {
    console.error("Error fetching packages:", error)
    return NextResponse.json({ error: "Failed to fetch packages" }, { status: 500 })
  }
}
