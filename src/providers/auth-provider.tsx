import { AuthContext, type LoginData, type User } from "@contexts/use-auth-context"
import { useState, type ReactNode } from "react"

type ProviderProps = {
  children: ReactNode
}

export const AuthProvider = ({ children }: ProviderProps) => {
  const [user, setUser] = useState<User | null>({ email: "test", id: 1, name: "Test Testov", role: "admin" })
  const [isAuthenticated, setIsAuthenticated] = useState(true)

  const login = async (data: LoginData) => {
    console.log(data)
    setUser({ email: "test", id: 1, name: "Test Testov", role: "admin" })
    setIsAuthenticated(true)
  }

  const logout = () => {
    setUser(null)
    setIsAuthenticated(false)
  }

  return <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>{children}</AuthContext.Provider>
}
