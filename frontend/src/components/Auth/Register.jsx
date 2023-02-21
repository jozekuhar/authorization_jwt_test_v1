import React, { useContext, useState } from 'react'
import styled from "styled-components"
import { AuthContext } from '../../context/AuthContext'

function Register() {
  console.log("%cRegister Component rendered", "background-color: yellow")

  const { registerUser, loginUser } = useContext(AuthContext) 

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rePassword, setRePassword] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    registerUser(username, email, password, rePassword)
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(prev => e.target.value)}
        />
        <input 
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(prev => e.target.value)}
        />
        <input 
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(prev => e.target.value)}
        />
        <input 
          type="password"
          placeholder="Retype Password"
          value={rePassword}
          onChange={(e) => setRePassword(prev => e.target.value)}
        />
        <button>Register</button>
      </form>
    </Container>
  )
}

const Container = styled.div`
  margin-top: 50px;
  form {
    display: flex;
    flex-direction: column;
  }
`

export default Register