import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "@mantine/core/styles.css"
import { BrowserRouter, Route, Routes } from "react-router"

import "@styles/index.css"

import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"
import relativeTime from "dayjs/plugin/relativeTime"
import isoWeek from "dayjs/plugin/isoWeek"
import localeData from "dayjs/plugin/localeData"
import "dayjs/locale/ru"
import { AuthProvider } from "@providers/auth-provider.tsx"
import ErrorBoundary from "@components/ui/error-boundary.tsx"
import MainLayout from "@layouts/main-layout.tsx"
import BookingId from "@pages/booking/id"
import MantineProvider from "@providers/mantine-provider"

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(relativeTime)
dayjs.extend(isoWeek)
dayjs.extend(localeData)

dayjs.locale("ru")

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <MantineProvider>
          <ErrorBoundary fallback={<p>Something went wrong</p>}>
            <Routes>
              <Route element={<MainLayout />} path="/">
                <Route element={<BookingId />} path="booking/:id" />
              </Route>
              {/* <Route path="/booking/list" element={<BookingId />} /> */}
              {/* <Route path="/booking/confirm" element={<BookingId />} /> */}
            </Routes>
          </ErrorBoundary>
        </MantineProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
