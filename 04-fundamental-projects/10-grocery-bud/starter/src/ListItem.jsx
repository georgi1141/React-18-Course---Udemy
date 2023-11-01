import React from 'react'
import { useState } from 'react'

function ListItem({item,removeItem}) {

    const[isChecked,setIsChecked] = useState(item.isCompleted)


  return (
    <div className="single-item">
        <input type="checkbox" checked={isChecked}
        onClick={()=>setIsChecked(!isChecked)} 
        />
        {!isChecked? <p>{item.name}</p>:<p><s>{item.name}</s></p>}
        <button onClick={()=>removeItem(item.id)} className="btn">Remove</button>
    </div>
  )
}

export default ListItem