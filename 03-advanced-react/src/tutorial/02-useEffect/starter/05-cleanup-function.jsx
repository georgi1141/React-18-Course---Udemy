import { useState } from "react";
import SecondComponent from "./SecondComponent";

const CleanupFunction = () => {

  const [state,setState] = useState(true)

  function btnHandler(){
    return setState(!state)
  }


  return <div>
    {state?<>
      <h1>Hello</h1>

    </>:<>
      <SecondComponent/>
    
    </>}
    <button className="btn" onClick={btnHandler}>click me</button>
  </div>;
};

export default CleanupFunction;
