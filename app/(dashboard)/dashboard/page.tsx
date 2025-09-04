'use client'

import { CheckSquare, DollarSign, Calendar } from 'lucide-react'
import {
  currentUser,
  thisWeekTasks,
  recentExpenses,
  upcomingBookings,
} from '@/lib/data/mockData'

export default function DashboardPage() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* This Week's Tasks */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
          <CheckSquare className="text-green-500" size={20} />
          This Week's Tasks
        </h2>
        <div className="space-y-3">
          {thisWeekTasks.map((task, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg ${
                task.person === currentUser
                  ? 'bg-blue-50 border-l-4 border-blue-500'
                  : 'bg-gray-50'
              }`}
            >
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-900">{task.person}</span>
                <span className="text-sm text-gray-500">{task.due}</span>
              </div>
              <p className="text-gray-600 text-sm">{task.task}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Expenses */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
          <DollarSign className="text-yellow-500" size={20} />
          Recent Expenses
        </h2>
        <div className="space-y-3">
          {recentExpenses.map((expense, index) => (
            <div key={index} className="p-3 bg-gray-50 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-900">
                  {expense.person}
                </span>
                <span className="text-green-600 font-bold">
                  {expense.amount} €
                </span>
              </div>
              <p className="text-gray-600 text-sm">{expense.item}</p>
              <p className="text-xs text-gray-500">
                Split {expense.split} ways:{' '}
                {(expense.amount / expense.split).toFixed(2)} € each
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Bookings */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Calendar className="text-purple-500" size={20} />
          Upcoming Bookings
        </h2>
        <div className="space-y-3">
          {upcomingBookings.map((booking, index) => (
            <div
              key={index}
              className="p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500"
            >
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-900">
                  {booking.person}
                </span>
                <span className="text-sm text-gray-500">{booking.date}</span>
              </div>
              <p className="text-gray-600 text-sm">
                {booking.space} - {booking.event}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
