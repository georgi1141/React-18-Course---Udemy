import React from 'react'
import Person from "./Person"

import {people} from "../../../data"


function List() {
  return (
    <div>
        <ul>
            {people.map(person=>{
                return (
                  <Person key={person.id } person={person} />  
                );
            })}
        </ul>
    </div>
  )
}

export default List