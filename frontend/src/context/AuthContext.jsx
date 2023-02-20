import React, { createContext, useState, useEffect } from "react"
import axios from "axios"

const AuthContext = createContext()

function AuthProvider({children}) {
  console.log("%cAuth Context Rendered", "background-color: lightblue")

  const [authTokens, setAuthTokens] = useState(null)
  const [user, setUser] = useState(null)

  async function registerUser(username, email, password, rePassword) {
    try {
      const url = "/accounts/auth/users/"
      const response = await axios.post(url, {
        username: username,
        email: email,
        password: password,
        re_password: rePassword
      })
      console.log(response)
    } catch(error) {
      console.log(error)
    }
  }

  async function loginUser(username, password) {
    try {
      const url = "/accounts/auth/jwt/create/"
      const response = await axios.post(url, {
        username: username,
        password: password
      })
      console.log(response)
    } catch(error) {
      console.log(error)
    }
  }






  const context = {
    user: user,
    registerUser: registerUser,
    loginUser: loginUser,
  }

  useEffect(() => {
    console.log("%cAuth Context Effect", "background-color: lightblue")
  }, [])

  return (
    <AuthContext.Provider value={context}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext }
export default AuthProvider