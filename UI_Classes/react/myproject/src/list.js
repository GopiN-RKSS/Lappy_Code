
import './App.css';
import React, { useState } from 'react';

const List = ({ people }) => {
  
  return (
      <article>
        {people.map((person) => {
        const { id, name, age } = person;
        return(
        <div key={id}>
           <h2>{name}</h2>
           <h3>{age}</h3>
        </div>
      )})}
      </article>
  );
}

export default List;
