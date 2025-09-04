import { recentExpenses, balances } from '@/lib/data/mockData'
import { DollarSign, Plus, Calculator } from 'lucide-react'

export default function ExpensesPage() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-8 shadow-sm">
        <div className="text-center mb-8">
          <div className="bg-yellow-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <DollarSign className="text-yellow-600" size={32} />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Expense Tracker
          </h1>
          <p className="text-gray-600">Split bills and track shared expenses</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <DollarSign className="text-green-500" size={20} /> Recent
              Expenses
            </h3>
            <div className="space-y-3">
              {recentExpenses.map((expense, index) => (
                <div key={index} className="p-3 bg-white rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900">
                      {expense.person}
                    </span>
                    <span className="text-green-600 font-bold">
                      {expense.amount} €
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">{expense.item}</p>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>
                      Split {expense.split} ways:{' '}
                      {(expense.amount / expense.split).toFixed(2)} € each
                    </span>
                    <span>{expense.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Calculator className="text-blue-500" size={20} /> Balances
            </h3>
            <div className="space-y-3">
              {balances.map((balance, index) => (
                <div key={index} className="p-3 bg-white rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900">
                      {balance.person}
                    </span>
                    <div className="text-right">
                      {balance.owed > 0 && (
                        <span className="text-green-600 font-bold">
                          +{balance.owed.toFixed(2)} €
                        </span>
                      )}
                      {balance.owes > 0 && (
                        <span className="text-red-600 font-bold">
                          -{balance.owes.toFixed(2)} €
                        </span>
                      )}
                      {balance.owed === 0 && balance.owes === 0 && (
                        <span className="text-gray-500">Settled</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors mr-4">
            <Plus className="inline mr-2" size={18} /> Add Expense
          </button>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
            Split Bill
          </button>
        </div>
      </div>
    </div>
  )
}
