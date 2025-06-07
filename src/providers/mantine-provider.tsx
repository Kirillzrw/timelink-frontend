import { createTheme, MantineProvider as Provider } from "@mantine/core"
import type { ReactNode } from "react"

type Props = {
  children: ReactNode
}

const theme = createTheme({
  fontFamily: "Inter, sans-serif",
  headings: { fontFamily: "Inter, sans-serif" },
  focusClassName: "focus-visible:outline focus-visible:outline-offset-3 focus-visible:outline-primary",
})

const MantineProvider = ({ children }: Props) => {
  return <Provider theme={theme}>{children}</Provider>
}

export default MantineProvider
