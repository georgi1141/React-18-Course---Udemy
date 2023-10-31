import React from 'react'


function Person({person}) {

const img = person.images?.[0]?.small?.url


  return ( <>
    <li >{person.name.toUpperCase()}
    <p>{person.nickName && person.nickName}</p>
     {img && <img src={img} alt="" style={{width:"50px"}} />}
     
    
    </li>

    </>

  )
}

export default Person