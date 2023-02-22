import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { useNavigate, useParams } from 'react-router'
import styled from 'styled-components'
import axios from "axios"
import { Spinner } from '../../utils'

function ResetPasswordConfirm() {
  const { uid, token } = useParams()
  const navigate = useNavigate()

  const [newPassword, setNewPassword] = useState("")
  const [loading, setLoading] = useState(false)

  async function confirmPassword(new_password) {
    try {
      setLoading(true)
      const url = "/accounts/auth/users/reset_password_confirm/"
      const response = await axios.post(url, {
        uid: uid,
        token: token,
        new_password: new_password,
      })
      navigate("/login")
    } catch(error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    confirmPassword(newPassword)
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
      <Title>CONFIRM NEW PASSWORD</Title>
      <form onSubmit={handleSubmit}>
        <input 
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(prev => e.target.value)}
        />
        <button>CONFIRM NEW PASSWORD</button>
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

export default ResetPasswordConfirm