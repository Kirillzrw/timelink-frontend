import { AlertCircleIcon, CalendarIcon, EarthIcon, MapPinIcon, UserIcon } from "lucide-react"
import { Button } from "@mantine/core"
import type { Data } from "./user-info"
import type { Dayjs } from "dayjs"
import { formatEventTimeRange } from "../utils/formatScheduleTime"

type Props = {
  data: Data
  selectedDate: Dayjs | null
  selectedTime: string | null
}

const ConfirmationFailed = (props: Props) => {
  const { data, selectedDate, selectedTime } = props
  const { title, name, surname, duration, location } = data

  return (
    <div className="max-w-1/2 w-full mx-auto my-10 flex flex-col items-center space-y-3">
      <div className="border border-divider size-16 rounded-full" />
      <div className="flex items-center gap-2.5">
        <AlertCircleIcon className="text-red-500" size={24} />
        <p className="text-[1.375rem] font-semibold text-red-600">Booking failed</p>
      </div>
      <p className="text-xs text-center text-gray-600">
        Unfortunately, we couldn&apos;t confirm your booking. <br /> Please try again or contact support for assistance.
      </p>
      <div className="border border-red-200 bg-red-50 max-w-[28.125rem] w-full p-5 space-y-2 rounded-lg">
        <h2 className="text-[1.375rem] font-semibold text-gray-500">{title}</h2>
        <div className="flex items-center gap-2">
          <UserIcon className="text-gray-500" size={22} />
          <p className="text-gray-500 text-sm font-semibold">
            {name} {surname}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <CalendarIcon className="text-gray-500" size={22} />
          <p className="text-gray-500 text-sm font-semibold">{formatEventTimeRange(selectedDate, selectedTime, duration)}</p>
        </div>
        <div className="flex items-center gap-2">
          <EarthIcon className="text-gray-500" size={22} />
          <p className="text-gray-500 text-sm font-semibold">Moscow time</p>
        </div>
        <div className="flex items-center gap-2">
          <MapPinIcon className="text-gray-500" size={22} />
          <p className="text-gray-500 text-sm font-semibold">{location}</p>
        </div>
      </div>
      <div className="flex gap-3 mt-4">
        <Button
          color="red"
          radius="md"
          size="md"
          variant="filled"
          onClick={() => {
            // Handle try again logic
          }}
        >
          Try Again
        </Button>
        <Button
          color="gray"
          radius="md"
          size="md"
          variant="outline"
          onClick={() => {
            // Handle contact support logic
          }}
        >
          Contact Support
        </Button>
      </div>
    </div>
  )
}

export default ConfirmationFailed
