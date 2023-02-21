import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import styled from "styled-components"
import { AuthContext } from '../context'

function Navbar() {
  const { user, logoutUser } = useContext(AuthContext)

  return (
    <Container>
      {user && <Link to="/">Home</Link>}
      {user && <Link to="/protected">Protected</Link>}
      {user && <Link onClick={logoutUser}>Logout</Link>}
      {!user && <Link to="/unprotected">Unprotected</Link>}
      {!user && <Link to="/login">Login</Link>}
      {!user && <Link to="/register">Register</Link>}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`

export default Navbar