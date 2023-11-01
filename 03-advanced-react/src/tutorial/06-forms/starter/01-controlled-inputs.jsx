import { useState } from "react";

const ControlledInputs = () => {

  const [name,setName] = useState('')
  const [mail,setMail] = useState('')

  function handleEvent(e){
    setName(e.target.value)
  }


  return (
    <form className='form'>
      <h4>controlled inputs</h4>
      <div className='form-row'>
        <label htmlFor='name' className='form-label'>
          name
        </label>
        <input value={name} onChange={handleEvent} type='text' className='form-input' id='name' />
      </div>
      <div className='form-row'>
        <label htmlFor='email' className='form-label'>
          Email
        </label>
        <input type='email' className='form-input' id='email' />
      </div>
      <button type='submit' className='btn btn-block'>
        submit
      </button>
    </form>
  );
};
export default ControlledInputs;