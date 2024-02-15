import { useState } from 'react';
import { useAddItem } from './util/reactQueryCustomHooks/costomHooks';
 

const Form = () => {

  const [newItemName, setNewItemName] = useState('');
  const {createTask,isLoading} = useAddItem()

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(newItemName,{
      onSuccess:()=>{setNewItemName('')}
    })

  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>task bud</h4>
      <div className='form-control'>
        <input
          type='text '
          className='form-input'
          value={newItemName}
          onChange={(event) => setNewItemName(event.target.value)}
        />
        <button disabled={isLoading} type='submit' className='btn' >
          add task
        </button>
      </div>
    </form>
  );
};
export default Form;
