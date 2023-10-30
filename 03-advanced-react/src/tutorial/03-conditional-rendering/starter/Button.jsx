import React from 'react'

const Button = ({state}) => {
  return (
    <p>State is <span style={{color:'red',textTransform:'uppercase'}}>{state? 'true!' : 'false!'}</span></p>
  )
}

export default Button