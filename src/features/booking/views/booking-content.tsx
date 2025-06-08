import clsx from "clsx"
import { useMemo } from "react"
import { Calendar, TimeSelector, useBooking, UserInfo } from "@features/booking"
import { formatWeekdayMonthDay } from "@utils/date"
import { useStepContext } from "@contexts/use-step-context"
import DetailsForm from "../components/details-form"

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

const BookingContent = () => {
  const { currentStep } = useStepContext()
  const { selectedDate, selectedTime, handleSelectDate, handleSelectTime } = useBooking()

  const activeDates = useMemo(() => ["2025-06-01", "2025-06-18", "2025-06-30"], [])
  const times = useMemo(
    () => ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"],
    [],
  )

  return (
    <div className="mt-16 px-6 mx-auto">
      <div className="flex min-h-[43.75rem] max-w-[100rem] border border-divider rounded-lg overflow-hidden">
        <UserInfo data={data} selected={!!selectedDate} selectedDate={selectedDate} selectedTime={selectedTime} />

        {currentStep === 1 && (
          <div
            className={clsx("transition-all min-w-auto duration-300 ease-in-out", selectedDate ? "w-[65%]" : "w-1/2", {
              "min-w-[36.5625rem]": selectedDate,
            })}
          >
            <div className="flex flex-col h-full">
              <h2 className="text-[1.25rem] font-bold p-5">Select a Date & Time</h2>
              <div className="flex flex-[1_1_300px] w-full">
                <div
                  className={clsx(
                    "transition-all duration-300 max-w-full ease-in-out px-5",
                    selectedDate ? "w-[60%]" : "w-full",
                  )}
                >
                  <Calendar activeDates={activeDates} selectDate={handleSelectDate} selectedDate={selectedDate} />
                  <p>Time zone</p>
                </div>

                {selectedDate !== null && (
                  <div className="w-[40%] flex flex-col h-full">
                    <h2 className="min-w-[12.5rem]">{formatWeekdayMonthDay(selectedDate)}</h2>
                    <TimeSelector
                      timeState={{
                        selectTime: handleSelectTime,
                        selectedTime,
                      }}
                      times={times}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        {currentStep === 2 && <DetailsForm />}
      </div>
    </div>
  )
}

export default BookingContent
