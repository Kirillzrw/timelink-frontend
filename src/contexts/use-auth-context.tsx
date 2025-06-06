import { createContext, useContext } from "react"

export type User = {
  id: number
  name: string
  email: string
  role: string
}

export type LoginData = {
  email: string
  password: string
}

interface AuthContextType {
  user: User | null
  login: (data: LoginData) => Promise<void>
  logout: () => void
  isAuthenticated: boolean
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuthContext = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error("useAuthContext must be used within AuthProvider")
  return context
}
