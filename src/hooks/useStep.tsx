import { useRef, useState } from "react"

interface UseStepParams {
  initial: number
  max: number
}

interface UseStepReturn {
  counts: number
  currentStep: number
  isFirst: boolean
  isLast: boolean
  back: () => void
  next: () => void
  reset: () => void
  set: (value: number | "first" | "last") => void
}

const FIRST_STEP_VALUE = 1

export const useStep = (params: number | UseStepParams): UseStepReturn => {
  const max = typeof params === "object" ? params.max : params
  const initial = typeof params === "object" ? params.initial : FIRST_STEP_VALUE

  const initialStep = useRef(initial > max || initial < FIRST_STEP_VALUE ? FIRST_STEP_VALUE : initial)
  const [currentStep, setCurrentStep] = useState(initial)

  const isFirst = currentStep === FIRST_STEP_VALUE
  const isLast = currentStep === max

  const next = () => {
    if (isLast) return
    setCurrentStep((prevStep) => prevStep + 1)
  }

  const back = () => {
    if (isFirst) return
    setCurrentStep((prevStep) => prevStep - 1)
  }

  const reset = () => setCurrentStep(initialStep.current)

  const set = (value: number | "first" | "last") => {
    if (value === "first") return setCurrentStep(initialStep.current)
    if (value === "last") return setCurrentStep(max)
    if (value >= max) return setCurrentStep(max)
    if (value <= FIRST_STEP_VALUE) return setCurrentStep(FIRST_STEP_VALUE)
    setCurrentStep(value)
  }

  return {
    counts: max,
    currentStep,
    isFirst,
    isLast,
    next,
    back,
    reset,
    set,
  }
}
