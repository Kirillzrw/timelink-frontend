import type { Dayjs } from "dayjs"
import { useCallback, useState } from "react"

export const useBooking = () => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)

  const handleSelectDate = useCallback((date: Dayjs) => {
    setSelectedTime(null)
    setSelectedDate(date)
  }, [])

  const handleSelectTime = useCallback((time: string) => {
    setSelectedTime(time)
  }, [])

  return {
    selectedDate,
    selectedTime,
    handleSelectDate,
    handleSelectTime,
  }
}
