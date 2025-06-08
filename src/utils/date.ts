import type { Dayjs } from "dayjs"
import dayjs from "dayjs"
import { capitalizeWords } from "@utils/string"

export const DATE_FORMATS = {
  ymd: "YYYY.MM.DD",
  weekdayMonthDay: "dddd, MMMM DD",
  weekdayMonthDayYear: "dddd, MMMM, DD, YYYY",
  time: "HH:mm",
  monthYear: "MMMM YYYY",
}

export const formatDate = (date: string | Dayjs) => {
  return dayjs(date).format(DATE_FORMATS.ymd)
}

export const formatWeekdayMonthDay = (date: Dayjs | string): string => {
  return capitalizeWords(dayjs(date).format(DATE_FORMATS.weekdayMonthDay))
}

export const formatWeekdayMonthDayYear = (date: Dayjs | string | null): string => {
  if (!date) return ""
  return capitalizeWords(dayjs(date).format(DATE_FORMATS.weekdayMonthDayYear))
}

export const parseYMDDate = (date: string): Dayjs => {
  return dayjs(date, DATE_FORMATS.ymd)
}
