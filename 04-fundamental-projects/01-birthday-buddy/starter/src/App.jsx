import { useState } from "react";
import data from "./data";

const App = () => {
  const [people, setPeople] = useState(data);

  function removePerson(id) {
    setPeople(people.filter((person) => person.id !== id));
  }

  return (
    <div className="container">
      <h1>{people.length} birthdays today</h1>

      {people.map((person) => {
        return (
          <article key={person.id} className="person">
            <img src={person.image} alt={person.image} className="img" />
            <div>
              <h4>{person.name}</h4>
              <p>{person.age} years</p>
            </div>
            <button
              className="btn"
              style={{ marginTop: "1em" }}
              onClick={() => {
                removePerson(person.id);
              }}
            >
              remove
            </button>
          </article>
        );
      })}
      <button
        className="btn"
        onClick={() => {
          setPeople([]);
        }}
      >
        Clear All
      </button>
    </div>
  );
};
export default App;
