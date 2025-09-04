'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { DollarSign, CheckSquare, MapPin, Home } from 'lucide-react'

interface TabButtonProps {
  href: string
  icon: React.ComponentType<{ size?: number }>
  label: string
  active: boolean
}

const TabButton: React.FC<TabButtonProps> = ({
  href,
  icon: Icon,
  label,
  active,
}) => (
  <Link
    href={href}
    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
      active
        ? 'bg-blue-500 text-white shadow-lg'
        : 'text-gray-600 hover:bg-gray-100'
    }`}
  >
    <Icon size={18} />
    <span className="font-medium">{label}</span>
  </Link>
)

export function Navigation() {
  const pathname = usePathname()

  const tabs = [
    { id: 'dashboard', href: '/dashboard', icon: Home, label: 'Dashboard' },
    { id: 'cleaning', href: '/cleaning', icon: CheckSquare, label: 'Cleaning' },
    { id: 'expenses', href: '/expenses', icon: DollarSign, label: 'Expenses' },
    { id: 'booking', href: '/booking', icon: MapPin, label: 'Booking' },
  ]

  return (
    <nav className="flex gap-2 mb-6 overflow-x-auto pb-2 justify-center">
      {tabs.map((tab) => (
        <TabButton
          key={tab.id}
          href={tab.href}
          icon={tab.icon}
          label={tab.label}
          active={pathname === tab.href}
        />
      ))}
    </nav>
  )
}
