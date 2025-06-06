import { Button } from "@mantine/core"
import { LogOut } from "lucide-react"
import { NavLink } from "react-router"
import UnauthorizedMenu from "./unauthorized-menu"
import AuthorizedMenu from "./authorized-menu"
import { useAuthContext } from "@contexts/use-auth-context"

const AsideMenu = () => {
  const { user, isAuthenticated, logout } = useAuthContext()

  return (
    <aside className="h-dvh flex flex-col w-[280px] border-r border-divider">
      <div className="flex-grow flex flex-col p-6 overflow-y-auto">
        <NavLink className="text-[1.75rem] items-center flex font-bold text-primary-dark mb-8 tracking-wide ml-3" to="/">
          <span className="bg-primary text-white font-bold w-9 h-9 rounded-full flex items-center justify-center mr-[0.125rem]">
            T
          </span>
          imeLink
        </NavLink>

        {user ? <AuthorizedMenu /> : <UnauthorizedMenu />}
      </div>

      {isAuthenticated && (
        <div className="p-6 border-t border-divider">
          <Button
            color="var(--color-primary)"
            leftSection={<LogOut size={24} strokeWidth={1.5} />}
            radius={8}
            size="md"
            w="100%"
            onClick={logout}>
            Logout
          </Button>
        </div>
      )}
    </aside>
  )
}

export default AsideMenu
