import React, { useState } from 'react';
import './index.css';
import data from './data';

function BirthRemainder() {
    const [people, setPeople] = useState(data);
    
    const removeItem = (id) => {
        let newPeople = people.filter((person) => person.id !== id);
        setPeople(newPeople);
    };
    return (
        <section>
        {people.map((person) => {
            const { id, name } = person;
            return (
                <div key={id} className="name">
                    <h2>{name}</h2>
                    <button className = "btn" onClick={()=>removeItem(id)}>remove</button>
                </div>
            );
        })}
            <button className = "btn" onClick={()=>setPeople([])}>Clear Items</button>
        </section>
    );
    
};

export default BirthRemainder;