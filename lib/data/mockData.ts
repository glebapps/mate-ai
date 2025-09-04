// TODO: Remove this file
interface Task {
  person: string
  task: string
  due: string
  completed: boolean
}

interface Expense {
  person: string
  item: string
  amount: number
  split: number
  date: string
}

interface Booking {
  person: string
  space: string
  date: string
  event: string
}

interface Balance {
  person: string
  owed: number
  owes: number
}

export const currentUser = 'Alex'

export const flatmates = ['Alex', 'Bob', 'Charlie', 'Diana']

export const thisWeekTasks: Task[] = [
  {
    person: 'Alex',
    task: 'Clean bathroom',
    due: 'This week',
    completed: false,
  },
  { person: 'Bob', task: 'Living room', due: 'This week', completed: true },
  { person: 'Charlie', task: 'Kitchen', due: 'This week', completed: false },
  { person: 'Diana', task: 'Take out trash', due: 'Friday', completed: false },
]

// expenses
export const balances: Balance[] = [
  { person: 'Alex', owed: 18.88, owes: 0 },
  { person: 'Bob', owed: 0, owes: 6.38 },
  { person: 'Charlie', owed: 0, owes: 11.38 },
  { person: 'Diana', owed: 0, owes: 1.13 },
]

export const recentExpenses: Expense[] = [
  {
    person: 'Bob',
    item: 'Cleaning supplies',
    amount: 25.5,
    split: 4,
    date: '2 days ago',
  },
  {
    person: 'Diana',
    item: 'Toilet paper',
    amount: 12.0,
    split: 4,
    date: '1 week ago',
  },
  {
    person: 'Alex',
    item: 'Dish soap',
    amount: 8.0,
    split: 4,
    date: '2 weeks ago',
  },
]

export const upcomingBookings: Booking[] = [
  {
    person: 'Charlie',
    space: 'Living room',
    date: 'Sat 7PM',
    event: 'Study group',
  },
  { person: 'Bob', space: 'Kitchen', date: 'Sun 2PM', event: 'Cooking class' },
]
