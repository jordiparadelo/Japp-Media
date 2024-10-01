'use client'

import React, { useState, useEffect } from 'react'
// import { Calendar } from '@nextui-org/react'
import DailyView from './DailyView'
import { parseDate } from '@internationalized/date';
// import { fetchSlotsForDate } from '@/lib/api'
import { CalendarDate } from '@internationalized/date';
import { Calendar } from './Calendar'
const CalendarWidget: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())
  const [availableSlots, setAvailableSlots] = useState<string[]>([])

  useEffect(() => {
    async function fetchAvailableSlots() {
      // Replace this with your actual API call
    //   const slots = await fetchSlotsForDate(selectedDate)
      setAvailableSlots([
        '09:00 AM', '10:00 AM', '11:00 AM',
        '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'
      ])
    }

    fetchAvailableSlots()
  }, [selectedDate])

  const handleDateSelect = (value: CalendarDate) => {
    setSelectedDate(new Date(value.toString()));
  }

  const handleSlotSelect = (slot: string) => {
    console.log(`Selected slot: ${slot} on ${selectedDate.toDateString()}`)
    // Implement booking logic here
  }

  return (
    <div className="flex space-x-8">
      <div className="w-1/2">
        <Calendar
          className="rounded-md border"
        />
      </div>
      <div className="w-1/2">
        <DailyView
          selectedDate={selectedDate}
          availableSlots={availableSlots}
          onSelectSlot={handleSlotSelect}
        />
      </div>
    </div>
  )
}

export default CalendarWidget