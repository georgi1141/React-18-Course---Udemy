import { useState } from "react";
import {data} from "../../../data"

const UserChallenge = () => {

  const [name,setName] = useState('')

  const [users,setUsers] = useState(data)

  function getInput(e){
    setName(e.target.value)
  }

  function addUser(e){
    e.preventDefault()
    if(!name) {
      alert('Field can not be empty') 
      return;
    }
    setUsers(old=>[...old,{id:Math.floor(Math.random() * 99999),name}])
    setName('')
  }

  return (
    <div>
      <form onSubmit={addUser} className='form'>
        <h4>Add User</h4>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input 
          value={name} 
          onChange={getInput}
          type='text' 
          className='form-input' 
          id='name' />
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
      {users.length>0 && <h4>users</h4>}
      {users.map((value)=>{
        return <div key={value.id} >
          {value.name}
                <button 
                  className="btn" 
                  style={{marginLeft:"1em"}}
                  onClick={()=>{setUsers(user=>user.filter(user=>user.id!==value.id))}}
                  >Remove
                </button>
              </div>
      })}
    </div>
  );
};
export default UserChallenge;
