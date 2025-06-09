import { DATE_FORMATS } from "@utils/date"
import { capitalizeWords } from "@utils/string"
import type { Dayjs } from "dayjs"

export const formatEventTimeRange = (date: Dayjs | null, start: string | null, duration: number): string => {
  if (!start || !date) return "Invalid date"
  const [hours, minutes] = start.split(":").map(Number)
  if (isNaN(hours) || isNaN(minutes)) return "Invalid time format"

  const startTime = date.set("hour", hours).set("minute", minutes).set("second", 0)
  const endTime = startTime.add(duration, "minute")

  if (!startTime.isValid() || !endTime.isValid()) return "Invalid time format"

  const formattedDate = capitalizeWords(startTime.format(DATE_FORMATS.weekdayMonthDayYear))
  const formattedStart = startTime.format(DATE_FORMATS.time)
  const formattedEnd = endTime.format(DATE_FORMATS.time)
  const formattedRange = `${formattedStart} - ${formattedEnd}`

  return `${formattedRange}, ${formattedDate}`
}
