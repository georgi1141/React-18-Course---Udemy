import { createContext, useContext, useState } from "react";



const AppContext = createContext()


import React from 'react'

function GlobarContext({children}) {
    const [showSidebar,setShowSidebar] = useState(false)
    const [showModal,setShowModal] = useState(false)

    const openSidebar=()=>{
      setShowSidebar(!showSidebar)
    }
    const openModal=()=>{
      setShowModal(!showModal)
    }
    
  return (
    <AppContext.Provider value={{
      showSidebar,
      openSidebar,
      showModal,
      openModal}}>
        {children}
    </AppContext.Provider>
  )
}

export default GlobarContext


export const useGlobalContect = ()=>{
    return useContext(AppContext)
}