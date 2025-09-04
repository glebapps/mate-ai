'use client'

import React, { useState } from 'react'
import {
  MessageCircle,
  Calendar,
  DollarSign,
  CheckSquare,
  MapPin,
  Send,
  Home,
  Users,
  Bell,
} from 'lucide-react'

interface Task {
  person: string
  task: string
  due: string
}

interface Expense {
  person: string
  item: string
  amount: number
  split: number
}

interface Booking {
  person: string
  space: string
  date: string
  event: string
}

interface Message {
  id: number
  type: 'user' | 'ai'
  message: string
}

interface TabButtonProps {
  id: string
  icon: React.ComponentType<{ size?: number }>
  label: string
  active: boolean
  onClick: () => void
}

const MateAIMockUp: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('dashboard')
  const [chatMessages, setChatMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'ai',
      message:
        "Hey! I'm Mate, your flatmate assistant. How can I help you today?",
    },
  ])
  const [inputMessage, setInputMessage] = useState<string>('')

  const currentUser = 'Alex'
  const flatmates = ['Alex', 'Bob', 'Charlie', 'Diana']

  // Mock data
  const thisWeekTasks: Task[] = [
    { person: 'Alex', task: 'Clean bathroom', due: 'This week' },
    { person: 'Bob', task: 'Living room', due: 'This week' },
    { person: 'Charlie', task: 'Kitchen', due: 'This week' },
    { person: 'Diana', task: 'Take out trash', due: 'Friday' },
  ]

  const recentExpenses: Expense[] = [
    { person: 'Bob', item: 'Cleaning supplies', amount: 25.5, split: 4 },
    { person: 'Diana', item: 'Toilet paper', amount: 12.0, split: 4 },
    { person: 'Alex', item: 'Dish soap', amount: 8.0, split: 4 },
  ]

  const upcomingBookings: Booking[] = [
    {
      person: 'Charlie',
      space: 'Living room',
      date: 'Sat 7PM',
      event: 'Study group',
    },
    {
      person: 'Bob',
      space: 'Kitchen',
      date: 'Sun 2PM',
      event: 'Cooking class',
    },
  ]

  const sendMessage = () => {
    if (!inputMessage.trim()) return

    const newMessage: Message = {
      id: Date.now(),
      type: 'user',
      message: inputMessage,
    }
    setChatMessages((prev) => [...prev, newMessage])

    // Mock AI response
    setTimeout(() => {
      let aiResponse = "I'm processing that for you..."

      if (inputMessage.toLowerCase().includes('clean')) {
        aiResponse = `This week you need to clean the bathroom! It's your turn according to the rotation. Need me to swap with someone?`
      } else if (inputMessage.toLowerCase().includes('expense')) {
        aiResponse = `Your recent expenses total $8.00 for dish soap. You're owed $18.88 from other flatmates' purchases this month.`
      } else if (inputMessage.toLowerCase().includes('book')) {
        aiResponse = `The living room is available this weekend except Saturday 7PM (Charlie's study group). Want me to book it for you?`
      }

      setChatMessages((prev) => [
        ...prev,
        { id: Date.now(), type: 'ai', message: aiResponse },
      ])
    }, 1000)

    setInputMessage('')
  }

  const TabButton: React.FC<TabButtonProps> = ({
    id,
    icon: Icon,
    label,
    active,
    onClick,
  }) => (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
        active
          ? 'bg-blue-500 text-white shadow-lg'
          : 'text-gray-600 hover:bg-gray-100'
      }`}
    >
      <Icon size={18} />
      <span className="font-medium">{label}</span>
    </button>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-blue-500 text-white p-2 rounded-xl">
              <Home size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Mate AI</h1>
              <p className="text-sm text-gray-500">Your flatmate assistant</p>
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

      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Navigation */}
        <nav className="flex gap-2 mb-6 overflow-x-auto pb-2">
          <TabButton
            id="dashboard"
            icon={Home}
            label="Dashboard"
            active={activeTab === 'dashboard'}
            onClick={() => setActiveTab('dashboard')}
          />
          <TabButton
            id="chat"
            icon={MessageCircle}
            label="Chat with Mate"
            active={activeTab === 'chat'}
            onClick={() => setActiveTab('chat')}
          />
          <TabButton
            id="cleaning"
            icon={CheckSquare}
            label="Cleaning"
            active={activeTab === 'cleaning'}
            onClick={() => setActiveTab('cleaning')}
          />
          <TabButton
            id="expenses"
            icon={DollarSign}
            label="Expenses"
            active={activeTab === 'expenses'}
            onClick={() => setActiveTab('expenses')}
          />
          <TabButton
            id="booking"
            icon={MapPin}
            label="Booking"
            active={activeTab === 'booking'}
            onClick={() => setActiveTab('booking')}
          />
        </nav>

        {/* Dashboard */}
        {activeTab === 'dashboard' && (
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
                      <span className="font-medium text-gray-900">
                        {task.person}
                      </span>
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
                      Split {expense.split} ways:
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
                      <span className="text-sm text-gray-500">
                        {booking.date}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">
                      {booking.space} - {booking.event}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Chat Interface */}
        {activeTab === 'chat' && (
          <div className="bg-white rounded-xl shadow-sm max-w-4xl mx-auto">
            <div className="p-4 border-b">
              <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                <MessageCircle className="text-blue-500" size={20} />
                Chat with Mate
              </h2>
              <p className="text-sm text-gray-500">
                Ask me anything about your flat!
              </p>
            </div>

            <div className="h-96 overflow-y-auto p-4 space-y-4">
              {chatMessages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.type === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                      msg.type === 'user'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {msg.message}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                  placeholder="Ask Mate anything... (e.g., 'What do I need to clean this week?')"
                  className="flex-1 p-3 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500"
                />
                <button
                  title="Send Message"
                  onClick={sendMessage}
                  className="bg-blue-500 text-white p-3 rounded-xl hover:bg-blue-600 transition-colors"
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Other tabs */}
        {activeTab !== 'dashboard' && activeTab !== 'chat' && (
          <div className="bg-white rounded-xl p-8 shadow-sm text-center">
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Module
            </h2>
            <p className="text-gray-600">
              This section is coming soon! The foundation is ready for detailed
              views.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default MateAIMockUp
