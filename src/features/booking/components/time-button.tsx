import { memo, useCallback } from "react"
import { motion } from "framer-motion"
import clsx from "clsx"
import { useStepContext } from "@contexts/use-step-context"

type Props = {
  time: string
  selectTime: (time: string) => void
  isSelected: boolean
}

const TimeButton = memo((props: Props) => {
  const { isSelected, selectTime, time } = props
  const { next } = useStepContext()

  const baseButtonClasses = "rounded-lg flex py-3.5 justify-center items-center"

  const handleSelectTime = useCallback(
    (time: string) => {
      selectTime(time)
    },
    [selectTime],
  )

  const handleNext = useCallback(() => next(), [next])

  return (
    <div aria-label={`Select time slot ${time}`} className="flex justify-between gap-2.5">
      <motion.button
        animate={{
          width: isSelected ? "50%" : "100%",
        }}
        aria-label={`Select time ${time}, ${isSelected ? "selected" : ""}`}
        className={clsx(baseButtonClasses, {
          "bg-gray-700/50": isSelected,
          "border border-primary cursor-pointer": !isSelected,
        })}
        initial={{ width: "100%" }}
        transition={{ duration: 0.2 }}
        type="button"
        onClick={() => handleSelectTime(time)}
      >
        <span
          className={clsx("font-bold", {
            "text-surface": isSelected,
            "text-text-primary": !isSelected,
          })}
        >
          {time}
        </span>
      </motion.button>

      {isSelected && (
        <motion.button
          animate={{ width: "50%" }}
          aria-label={`Confirm selected time ${time}`}
          className={clsx(baseButtonClasses, "cursor-pointer overflow-hidden bg-primary")}
          initial={{
            width: 0,
          }}
          transition={{ duration: 0.2 }}
          type="button"
          onClick={handleNext}
        >
          <span className="text-surface font-bold">Next</span>
        </motion.button>
      )}
    </div>
  )
})

export default TimeButton
