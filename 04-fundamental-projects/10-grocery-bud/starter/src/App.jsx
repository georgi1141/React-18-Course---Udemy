import { useState } from "react";
import Form from "./Form";
import { nanoid } from "nanoid";
import { ToastContainer, toast } from 'react-toastify';
import List from "./List";


const App = () => {


  const [items,setItems]= useState([])

  function addItem(name){
    setItems(old=>[...old,{name,isCompleted:false,id:nanoid()}])
  }

  function removeItem(id){
    setItems(items.filter(item=>item.id!==id))
  }


  return (
    <section className="section-center">
      <ToastContainer position="top-center"/>
      <Form addItem={addItem}/>
      <List items={items} removeItem={removeItem}/>
    </section>
  )
};

export default App;
