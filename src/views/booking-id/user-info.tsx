import clsx from "clsx"
import { Clock4, MapPin, Wallet } from "lucide-react"
import { memo } from "react"

type Data = {
  duration: number
  name: string
  surname: string
  title: string
  price: number
  currency: string
  date: string
  time: string
  location: string
  description: string
}

type Props = {
  selected: boolean
  data: Data
}

const UserInfo = memo((props: Props) => {
  const { selected, data } = props
  const { name, surname, duration, title, price, currency, location, description } = data

  return (
    <div className={clsx("transition-all duration-300 ease-in-out border-r border-divider", selected ? "w-[35%]" : "w-1/2")}>
      <div className="mb-6 mt-5 pl-7 pr-2.5">
        <div className="size-16 rounded-full border my-2.5" />
        <p className="text-base font-semibold">
          {name} {surname}
        </p>
        <p className="text-2xl font-bold">{title}</p>
      </div>
      <div className="space-y-3 pl-7 pr-2.5">
        <div className="flex gap-2 items-center">
          <Clock4 size={20} strokeWidth={2} />
          <p className="text-sm font-medium">{duration} min</p>
        </div>
        <div className="flex gap-2 items-center">
          <MapPin size={20} strokeWidth={2} />
          <p className="text-sm font-medium">{location}</p>
        </div>
        <div className="flex gap-2 items-center">
          <Wallet size={20} strokeWidth={2} />
          <p className="text-sm font-medium">
            {price} {currency}
          </p>
        </div>
        <p className="text-sm font-medium text-balance">{description}</p>
      </div>
    </div>
  )
})

export default UserInfo
