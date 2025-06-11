import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Snacks & Facts - Hammer's World",
  description:
    "Automotive expertise meets powerful content. Join Hammer for authentic conversations, interesting facts, and fitness transformation.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/snacks-and-facts-logo.png" type="image/png" />
      </head>
      <body>{children}</body>
    </html>
  )
}
