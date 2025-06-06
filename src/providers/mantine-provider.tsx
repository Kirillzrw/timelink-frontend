import { createTheme, MantineProvider as Provider } from "@mantine/core"
import type { ReactNode } from "react"

type Props = {
  children: ReactNode
}

const theme = createTheme({
  fontFamily: "Inter, sans-serif",
  headings: { fontFamily: "Inter, sans-serif" },
})

const MantineProvider = ({ children }: Props) => {
  return <Provider theme={theme}>{children}</Provider>
}

export default MantineProvider
