import React from 'react'
import { useState } from 'react'


function Tour({tour,removeTour}) {

  const[readMore,setReadMore]=useState(false)




  return (
<article className='single-tour'>
  <img src={tour.image} alt="image" className='img'/>
  <span className='tour-price'>{tour.price}</span>
  <div className="tour-info">
    <h5>{tour.name}</h5>

  
    <p>{readMore? tour.info :tour.info.substring(0,200)+"..." } <button className='btn' onClick={()=>setReadMore(!readMore)}>{readMore? "show less":"read more"}</button></p  >
    <button className='btn' onClick={()=>{removeTour(tour.id)}}>remove</button>
  </div>
</article>
  )
}

export default Tour