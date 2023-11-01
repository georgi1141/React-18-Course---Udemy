import React from "react";
import { useState } from "react";

import {toast } from 'react-toastify';


function Form({ addItem }) {
  const [item, setItem] = useState("");

  function onChangeHandler(e) {
    setItem(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!item) {
        toast.error("Field can not be empty!")
      return;
    }
    toast.success("Successfully added to list!")
    addItem(item);
    setItem("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>grocery list</h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          value={item}
          onChange={onChangeHandler}
        />
        <button className="btn" type="submit">
          Add
        </button>
      </div>
    </form>
  );
}

export default Form;
