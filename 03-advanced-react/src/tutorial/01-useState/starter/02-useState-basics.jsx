import { useState } from "react";


const UseStateBasics = () => {

  const [state, setState] = useState(0)

  return <div>
    <h2>useState basics</h2>

    <button onClick={()=>{setState((old)=>old-1)}}>decrese</button>
    {state}
    <button onClick={()=>{setState((old)=>old+1)}}>increase</button>
   
    </div>;
};

export default UseStateBasics;
