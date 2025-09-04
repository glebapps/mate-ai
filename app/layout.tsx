import type { Metadata } from 'next'
import { Home, Users, Bell } from 'lucide-react'
import './globals.css'
import { flatmates } from '@/lib/data/mockData'

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
      <body>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
          {/* Global Header */}
          <header className="bg-white shadow-sm border-b">
            <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-blue-500 text-white p-2 rounded-xl">
                  <Home size={24} />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-800">Mate AI</h1>
                  <p className="text-sm text-gray-500">
                    Your flatmate assistant
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <Users size={18} />
                  <span className="text-sm">{flatmates.length} flatmates</span>
                </div>
                <Bell size={20} className="text-gray-400" />
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="max-w-6xl mx-auto px-4 py-6">{children}</main>
        </div>
      </body>
    </html>
  )
}
