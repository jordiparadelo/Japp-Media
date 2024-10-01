"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/Calendar";
import { format } from "date-fns";

const GoogleCalendarWidget: React.FC<{ calendarId: string }> = ({
	calendarId,
}) => {
	const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

	const handleDateSelect = (date: Date | undefined) => {
		setSelectedDate(date);
		if (date) {
			console.log("Selected date:", format(date, "yyyy-MM-dd"));
			// Here you would typically fetch available slots for the selected date
			// For now, we'll just log the selected date
		}
	};

	return (
		<>
			<Calendar
				mode='single'
				selected={selectedDate}
				onSelect={handleDateSelect}
			/>
			{selectedDate && (
				<p className='text-sm'>
					Selected date: {format(selectedDate, "MMMM d, yyyy")}
				</p>
			)}
		</>
	);
};

export default GoogleCalendarWidget;
