import TimeButton from "./time-button"

type Props = {
  times: string[]
  timeState: {
    selectTime: (time: string) => void
    selectedTime: string | null
  }
}

const TimeSelector = (props: Props) => {
  const { times, timeState } = props
  const { selectTime, selectedTime } = timeState

  return (
    <div className="overflow-auto flex-[1_1_100px] pr-[1.875rem] pl-1 pb-[0.9375rem] h-full">
      <div className="space-y-2">
        {times.map((time, index) => {
          const isSelected = time === selectedTime
          return <TimeButton isSelected={isSelected} key={index} selectTime={selectTime} time={time} />
        })}
      </div>
    </div>
  )
}

export default TimeSelector
