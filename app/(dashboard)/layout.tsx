'use client'

import { Navigation } from '@/components/Navigation'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Navigation */}
        <Navigation />

        {/* Page Content */}
        {children}
      </div>
    </div>
  )
}
