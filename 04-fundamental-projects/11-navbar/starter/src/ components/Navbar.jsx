import React, {  useEffect, useRef, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import {links,social} from "./../data"
import logo  from "../logo.svg"




function Navbar() {


    const [showLinks,setShowLinks] = useState(0)
    const refContainer = useRef(0)

    useEffect(()=>{
        refContainer.current = showLinks
        console.log(showLinks)
        console.log('ref is'+refContainer.current)


    },[showLinks])

    
    
  return (
    <nav>
        <div className="nav-center">
            <div className="nav-header">
                <img src={logo} alt="site logo" className='logo'/>
                <button onClick={()=>setShowLinks(showLinks+1) }className='nav-toggle'><FaBars/></button>
            </div>
            {     <div className="links-container">
                <ul className="links">
                    {links.map(link=> {
                        return <li key={link.id}><a href={link.url}>{link.text}</a></li>
                    })}
                </ul>
                <div>{showLinks}</div>
             <div>    {refContainer.current}</div>
            
            </div>}
            
        
        </div>
    </nav>
  )
}

export default Navbar