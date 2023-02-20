import React from 'react'

function Register() {
  console.log("%cRegister Component rendered", "background-color: yellow")

  return (
    <div>
      <form>
        <input 
          type="text"
          placeholder="Username"
        />
        <input 
          type="email"
          placeholder="Email"
        />
        <input 
          type="password"
          placeholder="Password"
        />
        <input 
          type="password"
          placeholder="Retype Password"
        />
        <button>Register</button>
      </form>
    </div>
  )
}



export default Register