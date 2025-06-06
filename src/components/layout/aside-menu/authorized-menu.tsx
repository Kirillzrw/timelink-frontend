import { CreditCard, Headphones, Home, Info, Users } from "lucide-react"
import { NavLink as NavLink } from "@mantine/core"
import { NavLink as RouterNavLink } from "react-router"
import { useAuthContext } from "@contexts/use-auth-context"

const AuthorizedMenu = () => {
  const { user } = useAuthContext()

  return (
    <>
      <div className="flex items-center gap-4 mb-8 p-3 rounded-xl ">
        <div className="size-13 rounded-full bg-[#2E3E9A] text-2xl flex items-center justify-center text-white font-semibold">
          {user?.name?.charAt(0)}
        </div>
        <div className="flex flex-col">
          <p className="text-sm text-gray-600">Logged in as</p>
          <p className="text-gray-600 text-base">{user?.name}</p>
        </div>
      </div>

      <div className="space-y-1">
        <p className="text-text-secondary text-sm font-medium uppercase tracking-wider px-3 mb-2">Menu</p>
        <ul className="space-y-1">
          <li>
            <NavLink
              unstyled
              className="nav-link"
              component={RouterNavLink}
              label="Booking List"
              leftSection={<Home size={20} strokeWidth={1.5} />}
              to="/booking/list"
              variant="subtle"
            />
          </li>
          <li>
            <NavLink
              unstyled
              className="nav-link"
              component={RouterNavLink}
              label="Explore User"
              leftSection={<Users size={20} strokeWidth={1.5} />}
              to="/users"
              variant="subtle"
            />
          </li>
          <li>
            <NavLink
              unstyled
              className="nav-link"
              component={RouterNavLink}
              label="About"
              leftSection={<Info size={20} strokeWidth={1.5} />}
              to="/about"
              variant="subtle"
            />
          </li>
          <li>
            <NavLink
              unstyled
              className="nav-link"
              component={RouterNavLink}
              label="Support"
              leftSection={<Headphones size={20} strokeWidth={1.5} />}
              to="/support"
              variant="subtle"
            />
          </li>
          <li>
            <NavLink
              unstyled
              className="nav-link"
              component={RouterNavLink}
              label="Pricing"
              leftSection={<CreditCard size={20} strokeWidth={1.5} />}
              to="/pricing"
              variant="subtle"
            />
          </li>
        </ul>
      </div>
    </>
  )
}

export default AuthorizedMenu
