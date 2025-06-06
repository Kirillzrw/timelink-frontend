import type dayjs from "dayjs"

export type Day = {
  date: dayjs.Dayjs
  type: DayType
}

export type DayType = "prev" | "next" | "current"

export const DAYS_IN_WEEK = 7

export const shortDays = [
  { full: "Понедельник", short: "ПН" },
  { full: "Вторник", short: "ВТ" },
  { full: "Среда", short: "СР" },
  { full: "Четверг", short: "ЧТ" },
  { full: "Пятница", short: "ПТ" },
  { full: "Суббота", short: "СБ" },
  { full: "Воскресенье", short: "ВС" },
]

const getPrevMonthPadding = (date: dayjs.Dayjs): Day[] => {
  const startOffset = date.startOf("month").isoWeekday() - 1

  if (startOffset === 0) return []

  const prevMonth = date.subtract(1, "month").startOf("day")
  const prevMonthDaysCount = prevMonth.daysInMonth()

  return Array.from({ length: startOffset }).map((_, index) => {
    const dateOffset = prevMonthDaysCount - startOffset + index + 1
    const day = prevMonth.date(dateOffset)
    return {
      date: day,
      type: "prev",
    }
  })
}

const getNextMonthPadding = (date: dayjs.Dayjs): Day[] => {
  const endOffset = DAYS_IN_WEEK - date.endOf("month").isoWeekday()

  if (endOffset === DAYS_IN_WEEK) return []

  const nextMonth = date.add(1, "month").startOf("day")

  return Array.from({ length: endOffset }).map((_, index) => {
    const dateOffset = index + 1
    const day = nextMonth.date(dateOffset)
    return {
      date: day,
      type: "next",
    }
  })
}

const getDaysInMonth = (date: dayjs.Dayjs): Day[] => {
  const daysInMonth = date.daysInMonth()
  return Array.from({ length: daysInMonth }).map((_, index) => {
    const day = date.date(index + 1)
    return {
      date: day,
      type: "current",
    }
  })
}

export const getCalendarGridDays = (date: dayjs.Dayjs): Day[] => {
  return [...getPrevMonthPadding(date), ...getDaysInMonth(date), ...getNextMonthPadding(date)]
}
