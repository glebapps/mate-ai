import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mate AI - Your Flatmate Assistant',
  description: 'AI-powered flatmate management app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
