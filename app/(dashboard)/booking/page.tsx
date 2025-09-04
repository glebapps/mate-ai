import { MapPin, Calendar, Clock } from 'lucide-react'

export default function BookingPage() {
  return (
    <div className="bg-white rounded-xl p-8 shadow-sm">
      <div className="text-center mb-8">
        <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
          <MapPin className="text-blue-600" size={32} />
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Booking System
        </h1>
        <p className="text-gray-600">Manage shared spaces and events</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Calendar className="text-green-500" size={20} /> Available Spaces
          </h3>
          <div className="space-y-2">
            <div className="p-3 bg-white rounded border">
              <span className="font-medium">Living Room</span>
              <span className="text-sm text-gray-500 ml-2">
                - Available this weekend
              </span>
            </div>
            <div className="p-3 bg-white rounded border">
              <span className="font-medium">Kitchen</span>
              <span className="text-sm text-gray-500 ml-2">
                - Available Sunday 2PM+
              </span>
            </div>
            <div className="p-3 bg-white rounded border">
              <span className="font-medium">Garden</span>
              <span className="text-sm text-gray-500 ml-2">
                - Always available
              </span>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Clock className="text-purple-500" size={20} /> Upcoming Bookings
          </h3>
          <div className="space-y-2">
            <div className="p-3 bg-white rounded border-l-4 border-purple-500">
              <div className="font-medium">Charlie - Living Room</div>
              <div className="text-sm text-gray-600">Sat 7PM - Study group</div>
            </div>
            <div className="p-3 bg-white rounded border-l-4 border-purple-500">
              <div className="font-medium">Bob - Kitchen</div>
              <div className="text-sm text-gray-600">
                Sun 2PM - Cooking class
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
          Book a Space
        </button>
      </div>
    </div>
  )
}
