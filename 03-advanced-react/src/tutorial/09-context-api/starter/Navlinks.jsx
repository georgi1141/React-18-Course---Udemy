import React from 'react'
import UserContainer from './UserContainer'

function Navlinks({
    name,
    userLogout
}) {
  return (
    <>
    <ul style={{display:"flex",marginLeft:"5em",marginRight:"25em"}}>
        <li style={{marginLeft:"1em"}}><a href="#">Home</a></li>
        <li style={{marginLeft:"1em"}}><a href="#">About</a></li>
    </ul>
    <UserContainer name={name} userLogout={userLogout} />
    </>
  )
}

export default Navlinks