import React, { useState } from 'react'
import { useGlobalContext } from './Context'

function SearchForm() {
    const [input,setInput] = useState('')
    const {setFormValue} = useGlobalContext()
    console.log()

    const handleInput = (e)=>{
        e.preventDefault()
        if(!input) return
        setFormValue(input)
        setInput('')
    }





  return (
    <section>
        <h1 className='title'>Unsplash-images</h1>
    <form className='search-form' onSubmit={handleInput} >
        <input 
        value={input}
        onChange={(e)=>{setInput(e.target.value)}}
        className='form-input search-input'
         type="text"
          name='search'
           placeholder='cat' />
           <button type='submit' className='btn'>Search</button>
    </form>
    </section>
  )
}

export default SearchForm