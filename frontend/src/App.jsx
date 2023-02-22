import React from "react"
import { Routes, Route } from "react-router-dom"
import { Navbar } from "./layouts"
import { Home, Protected, UnProtected } from "./pages"
import { ProtectedRoute, AnonymousRoute } from "./utils"
import { Login, Register, ResetPassword, ResetPasswordEmail, ResetPasswordConfirm } from "./components/Auth"
import "./App.css"
import "./axios/global"

function App() {
  console.log("%cApp Component Rendered", "background-color: lighpink")

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/login" element={<AnonymousRoute><Login /></AnonymousRoute>} />
        <Route path="/register" element={<AnonymousRoute><Register /></AnonymousRoute>} />
        <Route path="/reset" element={<AnonymousRoute><ResetPassword /></AnonymousRoute>} />
        <Route path="/reset/sent" element={<AnonymousRoute><ResetPasswordEmail /></AnonymousRoute>} />
        <Route path="/reset/confirm/:uid/:token" element={<AnonymousRoute><ResetPasswordConfirm /></AnonymousRoute>} />
        <Route path="/protected" element={<ProtectedRoute><Protected /></ProtectedRoute>} />
        <Route path="/unprotected" element={<UnProtected />} />
      </Routes>
    </>
  )
}

export default App
