import { memo } from "react"
import { motion } from "framer-motion"
import clsx from "clsx"

type Props = {
  time: string
  handleSelectTime: (time: string) => void
  isSelected: boolean
}

const TimeButton = memo((props: Props) => {
  const { isSelected, handleSelectTime, time } = props

  const baseButtonClasses =
    "rounded-lg flex py-3.5 justify-center items-center"

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
            originX: 1,
          }}
          transition={{ duration: 0.2 }}
          type="button"
        >
          <span className="text-surface font-bold">Next</span>
        </motion.button>
      )}
    </div>
  )
})

export default TimeButton
