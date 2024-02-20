import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    fetch("https://www.greatfrontend.com/api/questions/contact-form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    }).then((res) => {
      if (res.ok)
        alert(`Thank you ${formData.name}, message was received successfully!`);
    });

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <form onSubmit={formSubmit} className="form">
      <label htmlFor="name">Name: </label>
      <input
        type="name"
        name="name"
        value={formData.name}
        onChange={onChangeHandler}
      />
      <label htmlFor="email">Email: </label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={onChangeHandler}
      />
      <label htmlFor="text">Message: </label>
      <textarea
        rows={4}
        cols={20}
        type="text"
        name="message"
        value={formData.message}
        onChange={onChangeHandler}
      />
      <button className="btn" type="submit">
        Send
      </button>
    </form>
  );
}

export default App;
