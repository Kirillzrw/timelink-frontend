import { Button, Input, Textarea } from "@mantine/core"
import { Link } from "react-router"
import type { FieldErrors } from "react-hook-form"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { BookingDetailsSchema, type BookingDetails } from "../schemas/booking.schema"

const DetailsForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<BookingDetails>({
    defaultValues: { name: "", email: "", message: "" },
    resolver: zodResolver(BookingDetailsSchema),
    shouldUnregister: true,
  })

  const onSubmit = (data: BookingDetails) => {
    console.log(data, "data")
  }

  const onError = (errors: FieldErrors<BookingDetails>) => {
    console.log(errors, "errors")
  }

  // TODO: move input and textarea to separate component

  return (
    <div className="w-1/2 basis-1/2 shrink grow">
      <div className="p-5">
        <form className="max-w-[25rem]" onSubmit={handleSubmit(onSubmit, onError)}>
          <p className="mt-5 mb-2.5 text-[1.25rem] font-semibold">Enter Details</p>
          <div className="space-y-4">
            <Controller
              control={control}
              name="name"
              render={({ field }) => (
                <Input.Wrapper className="space-y-1" error={errors.name?.message} label="Name*" size="xs">
                  <Input size="md" {...field} error={errors.name?.message} />
                </Input.Wrapper>
              )}
            />

            <Controller
              control={control}
              name="email"
              render={({ field }) => (
                <Input.Wrapper className="space-y-1" error={errors.email?.message} label="Email*" size="xs">
                  <Input size="md" {...field} error={errors.email?.message} />
                </Input.Wrapper>
              )}
            />

            <Controller
              control={control}
              name="message"
              render={({ field }) => (
                <Textarea
                  className="space-y-1"
                  classNames={{
                    label: "!text-xs",
                  }}
                  label="Please share anything that will help prepare for our meeting"
                  resize="vertical"
                  {...field}
                />
              )}
            />

            <p className="text-sm text-text-secondary">
              By proceeding, you confirm that you have read and agree to{" "}
              <Link className="font-bold text-text-primary" to="/terms">
                TimeLink Terms
              </Link>{" "}
              of Use and{" "}
              <Link className="font-bold text-text-primary" to="/privacy">
                Privacy Notice
              </Link>
              .
            </p>
            <Button className="!text-sm !mt-2" radius="xl" size="md" type="submit">
              Schedule Event
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default DetailsForm
