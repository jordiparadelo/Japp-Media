import React from 'react'
import { Card, CardBody, CardHeader, Button } from '@nextui-org/react'

interface DailyViewProps {
  selectedDate: Date
  availableSlots: string[]
  onSelectSlot: (slot: string) => void
}

const DailyView: React.FC<DailyViewProps> = ({ selectedDate, availableSlots, onSelectSlot }) => {
  return (
    <Card>
      <CardHeader>
        <h2 className="text-lg font-semibold">
          {selectedDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </h2>
      </CardHeader>
      <CardBody>
        <div className="space-y-2">
          {availableSlots.map((slot) => (
            <Button
              key={slot}
              onClick={() => onSelectSlot(slot)}
              variant="flat"
              color="primary"
              fullWidth
            >
              {slot}
            </Button>
          ))}
        </div>
      </CardBody>
    </Card>
  )
}

export default DailyView