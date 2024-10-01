'use client'

import * as React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { add, eachDayOfInterval, endOfMonth, format, getDay, isBefore, isEqual, isSameMonth, isToday, parse, startOfToday, startOfWeek, addDays, endOfWeek } from 'date-fns'
import { cn } from '@/lib/utils'

interface CalendarProps {
  className?: string,
  handleDateSelect?: (date: Date) => void
}

function Calendar({ className, handleDateSelect }: CalendarProps) {
  const today = startOfToday()
  const [selectedDay, setSelectedDay] = React.useState(today)
  const [currentMonth, setCurrentMonth] = React.useState(format(today, 'MMM-yyyy'))
  const firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date())

  const days = eachDayOfInterval({
    start: startOfWeek(firstDayCurrentMonth, { weekStartsOn: 1 }),
    end: endOfWeek(endOfMonth(firstDayCurrentMonth), { weekStartsOn: 1 }),
  })

  function previousMonth() {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 })
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
  }

  function nextMonth() {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 })
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
  }

  function handleDayClick(day: Date) {
    setSelectedDay(day)
    handleDateSelect && handleDateSelect(day)
  }

  return (
    <div className={cn('p-3', className)}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">
          {format(firstDayCurrentMonth, 'MMMM yyyy')}
        </h2>
        <div className="flex space-x-2">
          <button
            onClick={previousMonth}
            className="p-2 text-gray-400 hover:text-gray-500"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextMonth}
            className="p-2 text-gray-400 hover:text-gray-500"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-2 text-xs text-center text-gray-500 mb-2">
        {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-2">
        {days.map((day, dayIdx) => {
          const isSelected = isEqual(day, selectedDay)
          const isCurrentMonth = isSameMonth(day, firstDayCurrentMonth)
          const dayClasses = cn(
            'flex items-center justify-center w-10 h-10 rounded-full',
            {
              'bg-[#ddd] text-primary-foreground': isSelected,
              'text-dark': !isSelected && isCurrentMonth,
              'text-gray-400': !isSelected && !isCurrentMonth,
              'bg-accent text-accent-foreground': isToday(day) && !isSelected,
              'text-gray-200 pointer-events-none': isBefore(day, startOfToday()),
            }
          )

          return (
            <button
              key={day.toString()}
              onClick={() => handleDayClick(day)}
              className={dayClasses}
            >
              <time dateTime={format(day, 'yyyy-MM-dd')}>{format(day, 'd')}</time>
            </button>
          )
        })}
      </div>
    </div>
  )
}

Calendar.displayName = 'Calendar'

export { Calendar }