import { CheckSquare, Calendar, Users } from 'lucide-react'
import { currentUser, thisWeekTasks } from '@/lib/data/mockData'

export default function CleaningPage() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-8 shadow-sm">
        <div className="text-center mb-8">
          <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <CheckSquare className="text-green-600" size={32} />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Cleaning Schedule
          </h1>
          <p className="text-gray-600">
            Track and manage household cleaning tasks
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Calendar className="text-blue-500" size={20} />
              This Week's Tasks
            </h3>
            <div className="space-y-3">
              {thisWeekTasks.map((task, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg flex items-center justify-between ${
                    task.person === currentUser
                      ? 'bg-blue-50 border-l-4 border-blue-500'
                      : 'bg-white border'
                  } ${task.completed ? 'opacity-60' : ''}`}
                >
                  <div>
                    <div className="font-medium text-gray-900">
                      {task.person}
                    </div>
                    <div className="text-sm text-gray-600">{task.task}</div>
                    <div className="text-xs text-gray-500">{task.due}</div>
                  </div>
                  {task.completed && (
                    <CheckSquare className="text-green-500" size={20} />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Users className="text-purple-500" size={20} />
              Rotation Schedule
            </h3>
            <div className="space-y-2">
              <div className="p-3 bg-white rounded border-l-4 border-blue-500">
                <div className="font-medium">Alex - Bathroom</div>
                <div className="text-sm text-gray-600">This week</div>
              </div>
              <div className="p-3 bg-white rounded border">
                <div className="font-medium">Bob - Living Room</div>
                <div className="text-sm text-gray-600">Next week</div>
              </div>
              <div className="p-3 bg-white rounded border">
                <div className="font-medium">Charlie - Kitchen</div>
                <div className="text-sm text-gray-600">Week after</div>
              </div>
              <div className="p-3 bg-white rounded border">
                <div className="font-medium">Diana - Trash</div>
                <div className="text-sm text-gray-600">Every Friday</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors mr-4">
            Mark Complete
          </button>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
            Swap Task
          </button>
        </div>
      </div>
    </div>
  )
}
