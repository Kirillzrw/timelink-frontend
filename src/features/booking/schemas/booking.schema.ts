import { z } from "zod"

export const BookingDetailsSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().optional(),
})

export type BookingDetails = z.infer<typeof BookingDetailsSchema>
