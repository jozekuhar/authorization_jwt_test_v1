import React, { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../context"

function AnonymousRoute({children}) {
  console.log("%cAnonymous Route Entered", "background-color: lightgrey")


  const { user } = useContext(AuthContext)

  if (user) {
    console.log("%cAnonymous Route Denied", "background-color: lightgrey")
    return <Navigate to="/" />
  }

  console.log("%cAnonymous Route Approved", "background-color: lightgrey")
  return children
}

export default AnonymousRoute