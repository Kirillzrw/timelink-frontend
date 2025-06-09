import { StepContext } from "@contexts/use-step-context"
import { useStep } from "@hooks/useStep"
import type { ReactNode } from "react"

type StepProviderProps = {
  initialStep: number
  max: number
  children: ReactNode
}

export const StepProvider = ({ children, initialStep, max }: StepProviderProps) => {
  const step = useStep({ initial: initialStep, max })

  return <StepContext.Provider value={{ ...step }}>{children}</StepContext.Provider>
}
