import { type NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/database"

export async function GET(request: NextRequest, { params }: { params: { token: string } }) {
  try {
    const { token } = params
    const { searchParams } = new URL(request.url)
    const fileName = searchParams.get("file")

    if (!fileName) {
      return NextResponse.json({ error: "File name required" }, { status: 400 })
    }

    const purchase = db.getPurchaseByToken(token)
    if (!purchase) {
      return NextResponse.json({ error: "Invalid download token" }, { status: 404 })
    }

    if (purchase.status !== "completed") {
      return NextResponse.json({ error: "Purchase not completed" }, { status: 400 })
    }

    // Check if download has expired
    const now = new Date()
    if (now >= purchase.expiresAt) {
      return NextResponse.json({ error: "Download link has expired" }, { status: 410 })
    }

    // Get package details
    const package_ = db.getPackage(purchase.packageId)
    if (!package_) {
      return NextResponse.json({ error: "Package not found" }, { status: 404 })
    }

    // Verify file is part of the package
    const file = package_.files.find((f) => f.name === fileName)
    if (!file) {
      return NextResponse.json({ error: "File not found in package" }, { status: 404 })
    }

    // In a real implementation, you would serve the actual file
    // For now, we'll create a sample PDF content
    const samplePdfContent = `%PDF-1.4
1 0 obj
<<
/Type /Catalog
/Pages 2 0 R
>>
endobj

2 0 obj
<<
/Type /Pages
/Kids [3 0 R]
/Count 1
>>
endobj

3 0 obj
<<
/Type /Page
/Parent 2 0 R
/MediaBox [0 0 612 792]
/Contents 4 0 R
/Resources <<
/Font <<
/F1 5 0 R
>>
>>
>>
endobj

4 0 obj
<<
/Length 44
>>
stream
BT
/F1 12 Tf
72 720 Td
(${file.name} - Hammer Fit Program) Tj
ET
endstream
endobj

5 0 obj
<<
/Type /Font
/Subtype /Type1
/BaseFont /Helvetica
>>
endobj

xref
0 6
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000274 00000 n 
0000000369 00000 n 
trailer
<<
/Size 6
/Root 1 0 R
>>
startxref
466
%%EOF`

    const buffer = Buffer.from(samplePdfContent)

    return new NextResponse(buffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${fileName}"`,
        "Content-Length": buffer.length.toString(),
      },
    })
  } catch (error) {
    console.error("File download error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
