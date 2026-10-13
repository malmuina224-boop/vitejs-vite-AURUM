import { createContext, useMemo, useState } from 'react'
export const AuthContext = createContext(null)
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const loginDemo = email => setUser({ name: 'Cliente AURUM', email, role: 'Cliente' })
  const logout = () => { localStorage.removeItem('aurum_token'); setUser(null) }
  const value = useMemo(() => ({ user, loginDemo, logout }), [user])
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
