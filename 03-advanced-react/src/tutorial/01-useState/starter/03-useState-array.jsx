import { useState } from "react";
import {data} from "../../../data.js";

const UseStateArray = () => {
    const [names,setNames] = useState(data) 

    const removeHandler = (id)=>{
        setNames(names.filter((name)=>name.id!==id))
    }

    const removeAll = ()=>{
        setNames([])
    }


  return (
    <>  
      <h2>useState array example</h2>
     {
        names.map(line=>{
            return<div key={line.id}>
            <h1>{line.name}</h1>
            <button className="btn" onClick={()=>{removeHandler(line.id)}}>remove</button>
            </div>
        })
     }
     
     <div>
     <button onClick={()=>{removeAll()}} className="btn" style={{margin:'5em'}}>clear all</button>
     </div>
    </>
  );
};

export default UseStateArray;
