import React from 'react'
import { useGlobalContect } from './GlobalContext'



function Home() {

  const {showModal,openModal} = useGlobalContect()
  
  return (
    <>
      <div>
        {showModal? <>Working</>:<>Not working</>}
      </div>
      <button onClick={()=>openModal()}>Switch</button>
    </>
  )
}

export default Home