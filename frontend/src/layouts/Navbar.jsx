import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import styled from "styled-components"
import { AuthContext } from '../context'

function Navbar() {
  const { user, logoutUser } = useContext(AuthContext)

  if (!user) {
    return <></>
  }

  return (
    <Container>
      <Link to="/">Home</Link>
      <Link to="/protected">Protected</Link>
      <Link onClick={logoutUser}>Logout</Link>
    </Container>
  )
}

const Container = styled.div`
  height: 60px;
  background-color: #D76A03;
`

export default Navbar