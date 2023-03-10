import React, { useContext, useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import styled from "styled-components"
import { AuthContext } from '../../context/AuthContext'
import { Spinner } from "../../utils"

function Register() {
  console.log("%cRegister Component rendered", "background-color: yellow")

  const { registerUser, loginUser, loading, error} = useContext(AuthContext)

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rePassword, setRePassword] = useState("")

  async function handleSubmit(e) {
    e.preventDefault()
    await registerUser(username, email, password, rePassword)
    loginUser(username, password)
  }

  if (loading) {
    return (
      <Container>
        <Spinner />
      </Container>
    )
  }

  return (
    <Container>
      <Title>REGISTER</Title>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(prev => e.target.value)}
        />
        <ErrorMessage>{error && error.username}</ErrorMessage>
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
        <ErrorMessage>{error && error.password}</ErrorMessage>
        <input 
          type="password"
          placeholder="Retype Password"
          value={rePassword}
          onChange={(e) => setRePassword(prev => e.target.value)}
        />
        <ErrorMessage>{error && error.re_password}</ErrorMessage>
        <ErrorMessage>{error && error.non_field_errors}</ErrorMessage>
        <button>REGISTER</button>
      </form>
      <Link to="/login">Already have an account?</Link>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  form {
    display: flex;
    flex-direction: column;
    width: 86%;
    max-width: 440px;
    input {
      font-size: 18px;
      margin-top: 15px;
      text-align: center;
      background-color: #FFFFFF;
      border: none;
      box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
      border-radius: 10px;
      height: 54px;
      width: 100%;
      ::placeholder {
        font-size: 16px;
      }
    }
    button {
      margin: 15px 0;
      background-color: #8EA604;
      border: 1px solid #7C9200;
      box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
      border-radius: 10px;
      height: 54px;
      color: #FFFFFF;
      font-size: 21px;
      font-weight: 600;
      cursor: pointer;
      :hover {
        opacity: 0.93;
      }
      :active {
        background-color: #7C9200;
      }
    }
  }
  a {
    margin-bottom: 5px;
    font-size: 12px;
    color: #002D71;
  }
`
const Title = styled.span`
  font-size: 32px;
  font-weight: 600;
  color: #2E2E2E;
`
const ErrorMessage = styled.span`
  text-align: center;
  font-size: 12px;
  margin-top: 5px;
  color: #932600;
`

export default Register