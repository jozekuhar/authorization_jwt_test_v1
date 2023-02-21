import React, { createContext, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import "../axios/global"

const AuthContext = createContext()

function AuthProvider({children}) {
  console.log("%cAuth Context Rendered", "background-color: lightblue")
  
  const navigate = useNavigate()
  const [firstVisit, setFirstVisit] = useState(true)
  const [user, setUser] = useState(null)

  async function registerUser(username, email, password, re_password) {
    try {
      const url = "/accounts/auth/users/"
      const response = await axios.post(url, {
        username: username, email: email, password: password, re_password: re_password
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
        username: username, password: password
      })
      localStorage.setItem("authTokens", JSON.stringify(response.data))
      await getUser() // počaka da se izvede getUser funkcija
      navigate("/") // navigira na homepage (user je nastavljen) // sproži še en render
    } catch(error) {
      console.log(error)
    }
  }

  async function getUser() {
    try {
      const url = "/accounts/auth/users/me/"
      const response = await axios.get(url, {
        headers: {
          "Authorization": "Bearer " + JSON.parse(localStorage.getItem("authTokens")).access
        }
      })
      setUser(response.data)
    } catch(error) {
      console.log(error)
    }
  }

  async function updateToken() {
    try {
      const url = "/accounts/auth/jwt/refresh/"
      const response = await axios.post(url, {
        refresh: JSON.parse(localStorage.getItem("authTokens")).refresh
      })
      localStorage.setItem("authTokens", JSON.stringify(response.data))
      await getUser()
    } catch(error) {
      console.log(error)
    }

    if (firstVisit) {
      setFirstVisit(false)
    }
  }

  function logoutUser() {
    localStorage.removeItem("authTokens")
    setUser(null)
    navigate("/login")
  }

  useEffect(() => {
    console.log("%cUse Effect", "background-color: lightgreen")

    if (firstVisit) {
      updateToken()
    }

    const fourMinutes = 1000 * 60 * 4
    const tokenInterval = setInterval(() => {
      updateToken()
    }, fourMinutes)

    return () => clearInterval(tokenInterval)

  }, [firstVisit])

  const context = {
    user: user,
    loginUser: loginUser,
    logoutUser: logoutUser,
    registerUser: registerUser,
    getUser: getUser,
  }

  return (
    <AuthContext.Provider value={context}>
      {firstVisit ? null : children}
    </AuthContext.Provider>
  )
}

export { AuthContext }
export default AuthProvider