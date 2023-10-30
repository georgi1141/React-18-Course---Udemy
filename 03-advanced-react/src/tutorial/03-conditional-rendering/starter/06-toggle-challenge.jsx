import { useState } from "react";
import Button from "./Button";

const ToggleChallenge = () => {

  const [state,setState]= useState(true)

  function clickHandler(){
    setState(!state)

  }


  return <div>
      <Button state={state}/>
      <button className="btn" onClick={clickHandler}>Change state</button>

  </div>
  
};

export default ToggleChallenge;
