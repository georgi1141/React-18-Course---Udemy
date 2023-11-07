 import React, { useContext } from 'react'
import { NavbarContext } from './Navbar'
 
 function UserContainer({
 }) {

    const {name,userLogout}= useContext(NavbarContext)
   return (
     <div style={{display:"flex"}}>
        {name? <>
            <h5>Hello there,{name}</h5>
        <button onClick={userLogout} className='btn'>Logout</button>
        </> :
        <p>Please Login</p> }
        
     </div>
   )
 }
 
 export default UserContainer