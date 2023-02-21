import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { AuthContext } from '../../context/AuthContext'

function Login() {
  console.log("%cLogin Component rendered", "background-color: yellow")

  const { loginUser, getUser } = useContext(AuthContext)

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    loginUser(username, password)
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
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(prev => e.target.value)}
        />
        <button>Login</button>
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

export default Login