import React, { useState } from 'react';
import './index.css';

function UseStateExample () {
    const [text, setText] = useState('Learning React');
    const eventHandler = () => {
        if(text === 'Learning React'){
            setText('Advance React');
        }else {
            setText('Learning React');
        }
    };
    return (
        <section className="txtcen">
            <h1>{text}</h1>
            <button type="button" onClick={eventHandler}>Change</button>
        </section>
    );
};

export default UseStateExample;