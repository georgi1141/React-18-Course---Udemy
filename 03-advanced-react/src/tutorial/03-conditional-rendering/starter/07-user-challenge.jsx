import { useState } from "react";

const UserChallenge = () => {

  const [user,setUser]=useState(null)

  const login = ()=>{
    return setUser({name:'Georgi'})
  }

  const logout = ()=>{
    return setUser(null)
  }




  return <div>

     {user? (<>
      <h4>Hello {user.name}</h4>
      <button onClick={logout}>logout</button>
      </>

     ):(<>
      <h4>Please login</h4>
      <button onClick={login}>login</button>

      </>

     )}

  </div>;
};

export default UserChallenge;
