import clsx from "clsx"
import { useCallback, useMemo, useState } from "react"
import type { Dayjs } from "dayjs"
import UserInfo from "@views/booking-id/user-info"
import Calendar from "@features/meeting-calendar"

const data = {
  duration: 60,
  name: "Name",
  surname: "Surname",
  title: "60 Minute lesson",
  price: 100,
  currency: "USD",
  date: "2024-01-01",
  time: "10:00",
  location: "Kuala Lumpur",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
}

const BookingId = () => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null)

  const activeDates = useMemo(() => ["2025-06-01", "2025-06-18", "2025-06-30"], [])

  const handleSelectDate = useCallback((date: Dayjs) => {
    setSelectedDate(date)
  }, [])

  return (
    <div className="mt-16 px-6 mx-auto">
      <div className="flex min-h-[43.75rem] max-w-[100rem] border border-divider rounded-lg overflow-hidden">
        <UserInfo data={data} selected={!!selectedDate} />

        <div
          className={clsx("transition-all min-w-auto duration-300 ease-in-out", selectedDate ? "w-[65%]" : "w-1/2", {
            "min-w-[36.5625rem]": selectedDate,
          })}>
          <div className="flex flex-col h-full">
            <h2 className="text-[1.25rem] font-bold p-5">Select a Date & Time</h2>
            <div className="flex flex-[1_1_300px] w-full">
              <div
                className={clsx(
                  "transition-all duration-300 max-w-full ease-in-out px-5",
                  selectedDate ? "w-[60%]" : "w-full",
                )}>
                <Calendar activeDates={activeDates} selectDate={handleSelectDate} selectedDate={selectedDate} />
                <p>Time zone</p>
              </div>

              {selectedDate && (
                <div className="w-[40%] flex flex-col h-full">
                  <h2 className="min-w-[12.5rem]">{selectedDate.format("dddd, MMMM D")}</h2>
                  <div className="overflow-auto flex-[1_1_100px] pr-[1.875rem] pb-[0.9375rem] h-full">
                    <div className="space-y-2">
                      <button className="w-full cursor-pointer flex py-3.5 border border-primary justify-center items-center">
                        <span className="text-text-primary font-bold ">09:00</span>
                      </button>
                      <button className="w-full cursor-pointer flex py-3.5 border border-primary justify-center items-center">
                        <span className="text-text-primary font-bold ">09:00</span>
                      </button>
                      <button className="w-full cursor-pointer flex py-3.5 border border-primary justify-center items-center">
                        <span className="text-text-primary font-bold ">09:00</span>
                      </button>
                      <button className="w-full cursor-pointer flex py-3.5 border border-primary justify-center items-center">
                        <span className="text-text-primary font-bold ">09:00</span>
                      </button>
                      <button className="w-full cursor-pointer flex py-3.5 border border-primary justify-center items-center">
                        <span className="text-text-primary font-bold ">09:00</span>
                      </button>
                      <button className="w-full cursor-pointer flex py-3.5 border border-primary justify-center items-center">
                        <span className="text-text-primary font-bold ">09:00</span>
                      </button>
                      <button className="w-full cursor-pointer flex py-3.5 border border-primary justify-center items-center">
                        <span className="text-text-primary font-bold ">09:00</span>
                      </button>
                      <button className="w-full cursor-pointer flex py-3.5 border border-primary justify-center items-center">
                        <span className="text-text-primary font-bold ">09:00</span>
                      </button>
                      <button className="w-full cursor-pointer flex py-3.5 border border-primary justify-center items-center">
                        <span className="text-text-primary font-bold ">09:00</span>
                      </button>
                      <button className="w-full cursor-pointer flex py-3.5 border border-primary justify-center items-center">
                        <span className="text-text-primary font-bold ">09:00</span>
                      </button>
                      <button className="w-full cursor-pointer flex py-3.5 border border-primary justify-center items-center">
                        <span className="text-text-primary font-bold ">09:00</span>
                      </button>
                      <button className="w-full cursor-pointer flex py-3.5 border border-primary justify-center items-center">
                        <span className="text-text-primary font-bold ">09:00</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookingId
