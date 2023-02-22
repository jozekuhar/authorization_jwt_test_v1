import React, { useContext } from 'react'
import { AuthContext } from '../context'
import Navbar from '../layouts/Navbar'

function Home() {
  console.log("%cHome Component rendered", "background-color: yellow")

  const { user } = useContext(AuthContext)

  console.log(user)

  return (
    <>
     <div>{user.username}</div>
    </>
  )
}

export default Home