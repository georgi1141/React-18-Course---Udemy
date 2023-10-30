import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function SecondComponent() {
const[hi,setHi]=useState('')
    useEffect(()=>{
         (setHi('Hi'))
         console.log('initial render')
    },[])
  return (
    <h1>{hi}</h1>
  )
}

export default SecondComponent