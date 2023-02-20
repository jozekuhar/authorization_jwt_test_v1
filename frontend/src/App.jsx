import React from "react"
import { Routes, Route } from "react-router-dom"
import { Navbar } from "./layouts"
import { Home, Protected, UnProtected } from "./pages"
import { ProtectedRoute } from "./utils"
import { Login, Register } from "./components/Auth"
import "./axios/global"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/protected" element={<ProtectedRoute><Protected /></ProtectedRoute>} />
        <Route path="/unprotected" element={<UnProtected />} />
      </Routes>
    </>
  )
}

export default App
