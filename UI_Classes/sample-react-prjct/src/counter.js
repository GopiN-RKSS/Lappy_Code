import React , { useState } from 'react';
import ReactDOM from 'react-dom';

const Counter = () => {
    const [value, setValue] = useState(0);
    const reset = () => {
        setValue(0);
    };
    const complex = () => {
        setTimeout(() => {
            // setValue(value + 1);
            setValue((prevState) => {
                return prevState + 1;
            });
        }, 2000);
        
    };
    return (
        <section className="counter">
            <h1>Regular Counter</h1>
            <h1>{value}</h1>
            <div>
                <button class="btn1" onClick={() => setValue(value - 1)}>Decrease</button>
                <button class="btn1" onClick={reset}>reset</button>
                <button class="btn1" onClick={() => setValue(value + 1)}>Increase</button>
            </div>
            <article>
                <h1>Complex Counter</h1>
                <h1>{value}</h1>
                <div>
                    <button class="btn1" onClick={complex}>Increase</button>
                </div>
            </article>
        </section>
    );
};

export default Counter;