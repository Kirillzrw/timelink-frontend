import type { Dayjs } from "dayjs"
import dayjs from "dayjs"
import { capitalizeWords } from "@utils/string"

const FORMAT = "YYYY.MM.DD"

export const formatDate = (date: string | Dayjs) => {
  return dayjs(date).format(FORMAT)
}

export const formatWeekdayMonthDay = (date: Dayjs | Date | string): string => {
  return capitalizeWords(dayjs(date).format("dddd, MMMM D"))
}

export const parseYMDDate = (date: string): Dayjs => {
  return dayjs(date, FORMAT)
}
