import { createContext, useContext, useState } from "react";


  const GlobalAppContext = createContext()

 
 export const AppContext = ({children})=>{
    const[isDark,setIsDark] = useState(true)
    const [formValue,setFormValue]= useState('cat')

    function toggleDarkTheme(){
        setIsDark(!isDark)
        const body = document.querySelector('body')
        body.classList.toggle('dark-theme',isDark)
       
    }
 

    return(

        <GlobalAppContext.Provider value={{isDark,toggleDarkTheme,formValue,setFormValue}}>{children}</GlobalAppContext.Provider>

    )
 }

 export const useGlobalContext = ()=> useContext(GlobalAppContext)

