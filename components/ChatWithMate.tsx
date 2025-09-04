'use client'

import { MessageCircle, Send } from 'lucide-react'
import { useState } from 'react'

interface Message {
  id: number
  type: 'user' | 'ai'
  message: string
}

export function ChatWithMate() {
  const [showChat, setShowChat] = useState<boolean>(false)
  const [chatMessages, setChatMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'ai',
      message:
        "Hey! I'm Mate, your flatmate assistant. How can I help you today?",
    },
  ])
  const [inputMessage, setInputMessage] = useState<string>('')

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

  const toggleChat = () => setShowChat((prev) => !prev)

  const chatModal = (
    <div className="fixed bottom-24 right-2 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md mx-4">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
            <MessageCircle className="text-blue-500" size={20} />
            Chat with Mate
          </h2>
          <button
            onClick={toggleChat}
            className="text-gray-400 hover:text-gray-600"
            title="Close Chat"
          >
            &#10005;
          </button>
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
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Ask Mate anything... (e.g., 'What do I need to clean this week?')"
              className="flex-1 p-3 border text-gray-600 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500"
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
    </div>
  )

  return (
    <>
      <button
        onClick={toggleChat}
        className="fixed flex gap-2 bottom-6 right-6 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-colors z-50"
        title="Chat with Mate"
      >
        <MessageCircle size={24} /> Chat with Mate AI
      </button>
      {showChat && chatModal}
    </>
  )
}
