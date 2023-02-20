import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

function Login() {
  console.log("%cLogin Component rendered", "background-color: yellow")

  return (
    <div>
      <form>
        <input 
          type="text"
          placeholder="Username"
        />
        <input 
          type="password"
          placeholder="Password"
        />
        <button>Login</button>
      </form>
    </div>
  )
}

export default Login