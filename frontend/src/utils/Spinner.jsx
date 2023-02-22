import React from 'react'
import styled, { keyframes } from 'styled-components'

function Spinner() {
  return (
    <Container>

    </Container>
  )
}

const spinner = keyframes`
 0% { rotate: 0deg; }
 100% { rotate: 360deg; }
`

const Container = styled.div`
  height: 50px;
  width: 50px;
  border: 7px solid whitesmoke;
  border-top: 7px solid #8EA604;
  border-radius: 50%;
  animation: ${spinner} 0.7s linear infinite;
`

export default Spinner