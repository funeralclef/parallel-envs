import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { AuthProvider } from "@/contexts/AuthContext"
import { ToasterProvider } from "@/components/providers/ToasterProvider"

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: "Art Voting Platform",
  description: "A platform for experts to vote on their favorite songs",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="theme-color" content="#0a0a0a" />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground`}>
        <div className="min-h-screen">
          <AuthProvider>
            {children}
            <ToasterProvider />
          </AuthProvider>
        </div>
      </body>
    </html>
  )
}



import './globals.css'