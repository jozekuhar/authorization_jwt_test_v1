import React, { createContext, useState } from "react"

const AuthContext = createContext()

function AuthProvider({children}) {
  console.log("%cAuth Context rendered", "background-color: lightblue")

  const [authTokens, setAuthTokens] = useState(null)
  const [user, setUser] = useState(null)

  console.log("authTokens:", authTokens)
  console.log("user:", user)

  const context = {
    auth: "test"
  }

  return (
    <AuthContext.Provider value={context}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext }
export default AuthProvider