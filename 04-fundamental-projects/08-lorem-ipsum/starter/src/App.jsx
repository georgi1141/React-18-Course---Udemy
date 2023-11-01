import { useState } from "react";
import text from "./data";

const data = text;

const App = () => {
  const [count, setCount] = useState(1);
  const [text,setText] = useState([])

  const handleChange = (e) => {
    setCount(e.target.value);
  };

  function handleSubmit(e){
    e.preventDefault()
    setText(data.slice(0,count))
 

  }

  return (
    <section className="section-center">
      <h4>Tired of boring lorem?</h4>
      <form onSubmit={handleSubmit} className="lorem-form">
        <label htmlFor="amount">paragraphs:</label>
        <input
          id="amount"
          type="number"
          min="1"
          step="1"
          max="8"
          value={count}
          onChange={handleChange}
        />
        <button className="btn" type="submit"> Generate </button>
      </form>
      {text.map(text=><div style={{marginBottom:'2em'}} key={text}>{text}</div>)}
    </section>
  );
};
export default App;
