import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TimeMate - Teman Manajemen Waktu Kamu",
  description:
    "Website manajemen waktu yang dibuat khusus buat nemenin kamu ngatur aktivitas harian, bikin tujuan hidup lebih jelas, dan kasih ruang buat refleksi diri.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
