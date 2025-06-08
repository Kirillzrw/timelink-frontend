import type { Dayjs } from "dayjs"
import dayjs from "dayjs"
import { memo, useCallback, useMemo, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { getCalendarGridDays, shortDays } from "@utils/calendar"
import { clsx } from "clsx"
import { DATE_FORMATS, parseYMDDate } from "@utils/date"

type Props = {
  activeDates: string[]
  selectedDate: Dayjs | null
  selectDate: (date: Dayjs) => void
}

const variants = {
  enter: (direction: "left" | "right") => ({
    x: direction === "right" ? 220 : -220,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: "left" | "right") => ({
    x: direction === "right" ? -220 : 220,
    opacity: 0,
  }),
}

const Calendar = memo((props: Props) => {
  const today = dayjs()

  const { activeDates, selectedDate, selectDate } = props
  const [currentDate, setCurrentDate] = useState(selectedDate ?? dayjs())
  const [direction, setDirection] = useState<"left" | "right">("right")

  const dateList = useMemo(() => getCalendarGridDays(currentDate), [currentDate])
  const isPrevDisabled = currentDate.isSame(today, "month") || currentDate.isBefore(today, "month")

  const formattedActiveDates = useMemo((): Dayjs[] => {
    return activeDates.map((date) => parseYMDDate(date))
  }, [activeDates])

  const isActiveDate = useCallback(
    (date: Dayjs): boolean => formattedActiveDates.some((d) => d.isSame(date, "day")),
    [formattedActiveDates],
  )

  const handleSelectDate = useCallback(
    (date: Dayjs) => {
      if (!isActiveDate(date)) return

      selectDate(date)

      if (!date.isSame(currentDate, "month")) {
        setDirection(date.isBefore(currentDate, "month") ? "left" : "right")
        setCurrentDate(date)
      }
    },
    [isActiveDate, selectDate, currentDate],
  )

  const handleNextMonth = useCallback(() => {
    const nextMonth = currentDate.add(1, "month")
    setDirection("right")
    setCurrentDate(nextMonth)
  }, [currentDate])

  const handlePreviousMonth = useCallback(() => {
    if (isPrevDisabled) return

    const previousMonth = currentDate.subtract(1, "month")
    setDirection("left")
    setCurrentDate(previousMonth)
  }, [currentDate, isPrevDisabled])

  return (
    <div className="">
      <div className="flex items-center justify-center gap-1 px-0.5">
        <button
          className={clsx("group flex justify-center rounded-full items-center size-[2.375rem]", {
            "text-primary bg-primary-light cursor-pointer hover:bg-primary-hover hover:text-text-primary": !isPrevDisabled,
          })}
          onClick={handlePreviousMonth}
        >
          <ChevronLeft className="group-hover:text-text-primary mr-0.5" size={20} />
        </button>
        <div className="relative min-w-36 h-6 overflow-hidden text-center">
          <AnimatePresence custom={direction} initial={false}>
            <motion.p
              animate="center"
              className="first-letter:uppercase absolute left-0 right-0"
              custom={direction}
              exit="exit"
              initial="enter"
              transition={{ duration: 0.3 }}
              variants={variants}
            >
              {/* // TODO: возможно вынести в formatMonthYear(), если потребуется переиспользование */}
              {currentDate.format(DATE_FORMATS.monthYear)}
            </motion.p>
          </AnimatePresence>
        </div>
        <button
          className={clsx("group flex justify-center rounded-full items-center size-[2.375rem]", {
            "text-primary bg-primary-light cursor-pointer hover:bg-primary-hover hover:text-text-primary": true,
          })}
          onClick={handleNextMonth}
        >
          <ChevronRight className="group-hover:text-text-primary ml-0.5" size={20} />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-y-2 box-border mt-3 mb-2 px-0.5">
        {shortDays.map((day, index) => (
          <abbr className="flex text-xs no-underline justify-center w-11" key={index} title={day.full}>
            {day.short}
          </abbr>
        ))}
      </div>

      <div className="relative min-h-[315px] overflow-hidden">
        <AnimatePresence custom={direction} initial={false}>
          <motion.div
            animate="center"
            className="grid grid-cols-7 gap-y-2 box-border absolute px-0.5 py-1 top-0 left-0 w-full"
            custom={direction}
            exit="exit"
            initial="enter"
            transition={{ duration: 0.3 }}
            variants={variants}
          >
            {dateList.map((item, index) => (
              <button
                className={clsx(
                  "size-11 transition-colors duration-200 ease-out flex justify-center items-center rounded-full",
                  {
                    "": item.type !== "current",
                    "text-primary bg-primary-light cursor-pointer hover:bg-primary-hover hover:text-text-primary":
                      isActiveDate(item.date) && !selectedDate?.isSame(item.date, "day"),
                    "text-disabled cursor-default": !isActiveDate(item.date),
                    "bg-primary text-surface": selectedDate?.isSame(item.date, "day"),
                  },
                )}
                key={index}
                onClick={() => handleSelectDate(item.date)}
              >
                {item.date.format("D")}
              </button>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
})

export default Calendar
