import { CalendarIcon, CircleCheckBigIcon, EarthIcon, MapPinIcon, UserIcon } from "lucide-react"
import type { Data } from "./user-info"
import type { Dayjs } from "dayjs"
import { formatEventTimeRange } from "../utils/formatScheduleTime"

type Props = {
  data: Data
  selectedDate: Dayjs | null
  selectedTime: string | null
}

const ConfirmationSuccess = (props: Props) => {
  const { data, selectedDate, selectedTime } = props
  const { title, name, surname, duration, location } = data

  return (
    <div className="max-w-1/2 w-full mx-auto my-10 flex flex-col items-center space-y-3">
      <div className="border border-divider size-16 rounded-full" />
      <div className="flex items-center gap-2.5">
        <CircleCheckBigIcon className="text-accent" size={24} />
        <p className="text-[1.375rem] font-semibold">You are scheduled</p>
      </div>
      <p className="text-xs  text-center">
        A meeting invitation has been sent to your email address. <br /> Kindly check your inbox for further details.
      </p>
      <div className="border border-divider max-w-[28.125rem] w-full p-5 space-y-2 rounded-lg">
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
    </div>
  )
}

export default ConfirmationSuccess
