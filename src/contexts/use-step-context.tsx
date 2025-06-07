import type { useStep } from "@hooks/useStep"
import { createContext, useContext } from "react"

type StepContextType = ReturnType<typeof useStep>

export const StepContext = createContext<StepContextType | undefined>(undefined)

export const useStepContext = () => {
  const context = useContext(StepContext)
  if (!context) throw new Error("useStepContext must be used within StepProvider")
  return context
}
