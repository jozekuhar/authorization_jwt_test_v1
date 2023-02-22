import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import styled from 'styled-components'
import axios from 'axios'

function ResetPasswordEmail() {
  console.log("%cEmail Reset Password Component rendered", "background-color: yellow")

  return (
    <Container>
      <Title>EMAIL CONFIRMATION SENT</Title>
      <Text>We've sent you confirmation email if your email is valid.</Text>
      <Link to="/login">Back to Login page?</Link>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  a {
    font-size: 12px;
    color: #002D71;
  }
`
const Title = styled.span`
  font-size: 32px;
  font-weight: 600;
  color: #2E2E2E;
`
const Text = styled.span`
  margin-bottom: 5px;
`

export default ResetPasswordEmail