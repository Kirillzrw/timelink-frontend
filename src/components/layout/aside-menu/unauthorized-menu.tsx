import { NavLink as NavLink } from "@mantine/core"
import { NavLink as RouterNavLink } from "react-router"
import { Info, Headphones, CreditCard, LogIn, UserPlus, Clock, Calendar, ShieldCheck, Laptop } from "lucide-react"

const UnauthorizedMenu = () => {
  return (
    <>
      <div className="space-y-1 mb-8">
        <p className="text-text-secondary text-xs font-medium uppercase tracking-wider px-3 mb-2">Menu</p>
        <ul className="space-y-1">
          <li>
            <NavLink
              unstyled
              className="nav-link"
              component={RouterNavLink}
              label="Login"
              leftSection={<LogIn size={20} strokeWidth={1.5} />}
              to="/login"
              variant="subtle"
            />
          </li>
          <li>
            <NavLink
              unstyled
              className="nav-link"
              component={RouterNavLink}
              label="Register"
              leftSection={<UserPlus size={20} strokeWidth={1.5} />}
              to="/register"
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

      <div className="space-y-1 mb-8">
        <p className="text-text-secondary text-sm font-medium uppercase tracking-wider px-3 mb-2">Why Choose Us</p>
        <div className="space-y-3 px-3">
          <div className="flex items-start gap-3">
            <div className="mt-1">
              <Clock className="text-primary" size={20} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-base font-medium text-gray-900">Save Time</p>
              <p className="text-sm text-gray-600">Quick and easy booking process</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="mt-1">
              <Calendar className="text-primary" size={20} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-base font-medium text-gray-900">Smart Scheduling</p>
              <p className="text-sm text-gray-600">Flexible appointment management</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="mt-1">
              <ShieldCheck className="text-primary" size={20} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-base font-medium text-gray-900">Secure & Reliable</p>
              <p className="text-sm text-gray-600">Your data is always protected</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="mt-1">
              <Laptop className="text-primary" size={20} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-base font-medium text-gray-900">Easy Access</p>
              <p className="text-sm text-gray-600">Available on all devices</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary/5 rounded-xl p-4 mx-3">
        <h3 className="text-sm font-semibold text-gray-900 mb-2">Ready to get started?</h3>
        <p className="text-xs text-gray-600 mb-3">Join thousands of users who trust TimeLink for their scheduling needs.</p>
        <NavLink
          unstyled
          className="nav-link bg-primary text-white rounded-lg px-4 py-2 text-sm font-medium hover:bg-primary-dark transition-colors"
          component={RouterNavLink}
          label="Create Free Account"
          to="/register"
        />
      </div>
    </>
  )
}

export default UnauthorizedMenu
