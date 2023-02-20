import React, { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../context"

function ProtectedRoute({children}) {
  console.log("%cProtected Route Entered", "background-color: orange")


  const { user } = useContext(AuthContext)

  if (!user) {
    console.log("%cProtected Route Denied", "background-color: orange")
    return <Navigate to="/login" />
  }

  console.log("%cProtected Route Approved", "background-color: orange")
  return children
}

export default ProtectedRoute