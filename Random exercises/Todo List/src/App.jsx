import { useState } from 'react'

import './App.css'

function App() {

  const [todoList, setTodoList] = useState(['Walk the dog'])
  const [todoInput, setTodoInput] = useState('')

  const onSubmitHandler = (e) => {
    e.preventDefault()
    if (!todoInput) return;
    setTodoList(oldData => [...oldData, todoInput])
    setTodoInput('')

  }

  const onChangeHandler = (e) => {
    setTodoInput(e.target.value)

  }

  const onDeleteHandler = (key) => {
    setTodoList(old => old.filter((item, index) => index != key))

  }

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          placeholder="Add your task"
          name='todoInput'
          value={todoInput}
          onChange={onChangeHandler}
        />
        <div>
          <button onClick={onSubmitHandler} >Submit</button>
        </div>
      </div>
      <ul>
        {todoList.map((item, index) => {
          return <li key={index}>
            <span>{item}</span>
            <button onClick={() => onDeleteHandler(index)}>Delete</button>
          </li>
        })}

      </ul>
    </div>
  );
}

export default App
