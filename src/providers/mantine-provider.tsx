import { createTheme, MantineProvider as Provider } from "@mantine/core"
import type { ReactNode } from "react"

type Props = {
  children: ReactNode
}

const theme = createTheme({
  fontFamily: "Inter, sans-serif",
  headings: { fontFamily: "Inter, sans-serif" },
  focusClassName: "focus-visible:outline focus-visible:outline-offset-3 focus-visible:outline-primary",
  colors: {
    brand: [
      "#f0fdf4", // 0 — очень светлый фон (color-bg)
      "#d1fae5", // 1 — light (primary-light)
      "#bbf7d0", // 2 — hover (primary-hover)
      "#a7f3d0", // 3 — не указано напрямую, подобрано из Tailwind
      "#6ee7b7", // 4 — не указано напрямую, подобрано из Tailwind
      "#10b981", // 5 — основной (color-primary)
      "#0fa373", // 6 — можно вручную добавить
      "#0f766e", // 7 — подобран вручную
      "#065f46", // 8 — тёмный (color-primary-dark)
      "#064e3b", // 9 — текст (color-text-primary)
    ],
  },
  primaryColor: "brand",
  components: {
    Input: {},
  },
})

const MantineProvider = ({ children }: Props) => {
  return <Provider theme={theme}>{children}</Provider>
}

export default MantineProvider
