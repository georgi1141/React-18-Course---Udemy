import React from 'react'
import { useGlobalContext } from './Context'
import {BsFillSunFill,BsFillMoonFill} from 'react-icons/bs'


function ThemeToggle() {

    const {isDark,toggleDarkTheme} = useGlobalContext()

  return (
    <section className='toggle-container'>
        <button className='dark-toggle' onClick={()=>{ toggleDarkTheme()}}>
            {isDark ?
            <BsFillMoonFill  className='toggle-icon'/>:
            <BsFillSunFill color={!isDark && 'white'} className='toggle-icon'/>
            
            }
        </button>

    </section>
  )
}

export default ThemeToggle