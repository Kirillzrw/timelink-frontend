import { StepContext } from "@contexts/use-step-context"
import { useStep } from "@hooks/useStep"
import type { ReactNode } from "react"

type StepProviderProps = {
  initialStep: number
  children: ReactNode
}

export const StepProvider = ({ children, initialStep }: StepProviderProps) => {
  const step = useStep(initialStep)
  return <StepContext.Provider value={step}>{children}</StepContext.Provider>
}
