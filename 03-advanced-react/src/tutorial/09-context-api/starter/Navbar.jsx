import React, { createContext, useState } from 'react'
import Navlinks from './Navlinks'

export const NavbarContext = createContext()

function Navbar() {

    const [name,setName]=useState("Mateo")

    function userLogout(){
        setName(null)
    }

  return (
    <NavbarContext.Provider value={{name,userLogout}}>
    <div style={{display:"flex"}}>
    <h4>Context API</h4>
    <Navlinks name={name} userLogout={userLogout}/>
    </div>
    </NavbarContext.Provider>
  )
}

export default Navbar