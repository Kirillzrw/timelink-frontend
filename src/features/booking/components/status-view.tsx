import ConfirmationSuccess from "./confirmation-success"
import ConfirmationFailed from "./confirmation-failed"
import { useState } from "react"
import type { Data } from "./user-info"
import type { Dayjs } from "dayjs"

type Props = {
  data: Data
  selectedDate: Dayjs | null
  selectedTime: string | null
}

const StatusView = (props: Props) => {
  const { data, selectedDate, selectedTime } = props
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false)

  return (
    <>
      {isBookingConfirmed && <ConfirmationSuccess data={data} selectedDate={selectedDate} selectedTime={selectedTime} />}
      {!isBookingConfirmed && <ConfirmationFailed data={data} selectedDate={selectedDate} selectedTime={selectedTime} />}
    </>
  )
}

export default StatusView
