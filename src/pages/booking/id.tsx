import { BookingContent } from "@features/booking"
import { StepProvider } from "@providers/step-provider"

const BookingId = () => (
  <StepProvider initialStep={1} max={3}>
    <BookingContent />
  </StepProvider>
)

export default BookingId
