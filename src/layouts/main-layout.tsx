import { Outlet } from "react-router"
import AsideMenu from "@components/layout/aside-menu"

const MainLayout = () => {
  return (
    <div className="flex">
      <AsideMenu />
      <Outlet />
    </div>
  )
}

export default MainLayout
