import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { Spinner } from '../../utils'
import styled from 'styled-components'
import axios from 'axios'

function ResetPassword() {
  console.log("%cReset Password Component rendered", "background-color: yellow")

  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  async function resetPassword(email) {
    try {
      setLoading(true)
      const url = "/accounts/auth/users/reset_password/"
      const response = await axios.post(url, {
        email: email
      })
      navigate("/reset/sent")
    } catch(error) {
      setError(error.response.data)
    } finally {
      setLoading(false)
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    resetPassword(email)
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
      <Title>RESET PASSWORD</Title>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(prev => e.target.value)}
        />
        <ErrorMessage>{error && error.email}</ErrorMessage>
        <button>RESET PASSWORD</button>
      </form>
      <Link to="/login">Login instead?</Link>
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
      background-color: "#FFFFFF";
      border: none;
      /* border: 2px solid #BF3100; */
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

export default ResetPassword