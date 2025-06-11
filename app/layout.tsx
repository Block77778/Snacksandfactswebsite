import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Hammer Fit - Transform Your Body & Mind",
  description:
    "Join Hammer's fitness transformation program for personalized workout routines, meal plans, and coaching to achieve your fitness goals.",
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
