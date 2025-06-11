"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, FileText, Clock, CheckCircle, Hammer } from "lucide-react"
import Link from "next/link"

interface DownloadFile {
  name: string
  url: string
  type: "meal" | "exercise"
}

interface PurchaseData {
  id: string
  packageName: string
  files: DownloadFile[]
  expiresAt: string
  isValid: boolean
}

export default function DownloadPage() {
  const params = useParams()
  const token = params.token as string
  const [purchaseData, setPurchaseData] = useState<PurchaseData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [downloadingFiles, setDownloadingFiles] = useState<Set<string>>(new Set())

  useEffect(() => {
    async function fetchPurchaseData() {
      try {
        const response = await fetch(`/api/download/${token}`)
        if (response.ok) {
          const data = await response.json()
          setPurchaseData(data)
        } else {
          const errorData = await response.json()
          setError(errorData.error || "Invalid or expired download link")
        }
      } catch (err) {
        setError("Failed to load download data")
      } finally {
        setLoading(false)
      }
    }

    if (token) {
      fetchPurchaseData()
    }
  }, [token])

  const handleDownload = async (file: DownloadFile) => {
    setDownloadingFiles((prev) => new Set(prev).add(file.name))

    try {
      const response = await fetch(`/api/download-file/${token}?file=${encodeURIComponent(file.name)}`)
      if (response.ok) {
        const blob = await response.blob()
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement("a")
        a.href = url
        a.download = file.name
        document.body.appendChild(a)
        a.click()
        window.URL.revokeObjectURL(url)
        document.body.removeChild(a)
      } else {
        throw new Error("Download failed")
      }
    } catch (err) {
      alert("Download failed. Please try again.")
    } finally {
      setDownloadingFiles((prev) => {
        const newSet = new Set(prev)
        newSet.delete(file.name)
        return newSet
      })
    }
  }

  const downloadAll = async () => {
    if (!purchaseData) return

    for (const file of purchaseData.files) {
      await handleDownload(file)
      // Small delay between downloads
      await new Promise((resolve) => setTimeout(resolve, 500))
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Hammer className="h-12 w-12 animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading your download...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="max-w-md w-full mx-4">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-red-600" />
            </div>
            <h2 className="text-xl font-bold mb-2">Download Unavailable</h2>
            <p className="text-gray-600 mb-6">{error}</p>
            <Link href="/shop">
              <Button className="bg-black text-white hover:bg-gray-800">Browse Packages</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (!purchaseData?.isValid) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="max-w-md w-full mx-4">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-red-600" />
            </div>
            <h2 className="text-xl font-bold mb-2">Download Expired</h2>
            <p className="text-gray-600 mb-6">
              This download link has expired. Please contact support if you need assistance.
            </p>
            <Link href="/contact">
              <Button className="bg-black text-white hover:bg-gray-800">Contact Support</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  }

  const expiryDate = new Date(purchaseData.expiresAt)
  const timeLeft = expiryDate.getTime() - new Date().getTime()
  const daysLeft = Math.ceil(timeLeft / (1000 * 60 * 60 * 24))

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-black text-white p-4">
        <div className="container mx-auto flex items-center gap-2">
          <Hammer className="h-6 w-6" />
          <h1 className="text-xl font-bold">Hammer Fit Program</h1>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Success Message */}
        <Card className="mb-8 border-green-200 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <CheckCircle className="h-8 w-8 text-green-600" />
              <div>
                <h2 className="text-xl font-bold text-green-800">Purchase Successful!</h2>
                <p className="text-green-700">Your {purchaseData.packageName} is ready for download.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Download Info */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>{purchaseData.packageName}</span>
              <Badge variant="outline" className="text-orange-600 border-orange-600">
                Expires in {daysLeft} days
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-4">
              <p className="text-gray-600">{purchaseData.files.length} files available for download</p>
              <Button onClick={downloadAll} className="bg-black text-white hover:bg-gray-800">
                <Download className="h-4 w-4 mr-2" />
                Download All
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Files List */}
        <div className="grid gap-4 md:grid-cols-2">
          {purchaseData.files.map((file, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        file.type === "exercise" ? "bg-blue-100" : "bg-green-100"
                      }`}
                    >
                      <FileText
                        className={`h-5 w-5 ${file.type === "exercise" ? "text-blue-600" : "text-green-600"}`}
                      />
                    </div>
                    <div>
                      <p className="font-medium">{file.name}</p>
                      <Badge variant="secondary" className="text-xs">
                        {file.type === "exercise" ? "Exercise Plan" : "Meal Plan"}
                      </Badge>
                    </div>
                  </div>
                  <Button
                    onClick={() => handleDownload(file)}
                    disabled={downloadingFiles.has(file.name)}
                    size="sm"
                    className="bg-black text-white hover:bg-gray-800"
                  >
                    {downloadingFiles.has(file.name) ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Downloading...
                      </div>
                    ) : (
                      <>
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Important Notes */}
        <Card className="mt-8 bg-yellow-50 border-yellow-200">
          <CardContent className="p-6">
            <h3 className="font-bold mb-3 text-yellow-800">Important Notes:</h3>
            <ul className="space-y-2 text-yellow-700 text-sm">
              <li>• Download links expire in {daysLeft} days for security purposes</li>
              <li>• Save these files to your device for offline access</li>
              <li>• If you have any issues, contact support at hammer.snacksnfacts@gmail.com</li>
              <li>• These files are for personal use only</li>
            </ul>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-8 pt-8 border-t">
          <p className="text-gray-600 mb-4">Thank you for choosing Hammer Fit Program!</p>
          <div className="flex justify-center gap-4">
            <Link href="/">
              <Button variant="outline">Back to Home</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline">Contact Support</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
