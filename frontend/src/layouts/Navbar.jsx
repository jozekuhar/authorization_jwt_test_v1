import React from 'react'
import { Link } from "react-router-dom"
import styled from "styled-components"

function Navbar() {
  return (
    <Container>
      <Link to="/">Home</Link>
      <Link to="/protected">Protected</Link>
      <Link to="/unprotected">Unprotected</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`

export default Navbar