import React from 'react'
import Navbar from '../layouts/Navbar'

function UnProtected() {
  console.log("%cUnprotected Component rendered", "background-color: yellow")

  return (
    <>
     <div>UnProtected</div>
    </>
  )
}

export default UnProtected