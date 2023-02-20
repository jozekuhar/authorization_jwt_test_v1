import React from "react"
import { Routes, Route } from "react-router-dom"
import { Navbar } from "./layouts"
import { Home, Protected, UnProtected } from "./pages"
import { Login, Register } from "./components/Auth"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/protected" element={<Protected />} />
        <Route path="/unprotected" element={<UnProtected />} />
      </Routes>
    </>
  )
}

export default App
