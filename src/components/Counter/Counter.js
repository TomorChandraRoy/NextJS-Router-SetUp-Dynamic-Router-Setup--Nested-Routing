"use client"
import { useState } from "react";


const Counter = () => {

    const [Counter, setCounter] = useState(0);

    return (
        <div>
            <h1 className="text-center">Counter: {Counter}</h1>
            <div className="text-center">
            <button className="text-center text-lg   text-red-600 mr-5" onClick={() => setCounter(Counter + 1)}>Increment</button>
            <button className="text-center text-lg   text-red-600" 
            onClick={() => {
            if (Counter !== 0) {
                setCounter(Counter - 1);
            }
            }}>
            decrement</button>
            </div>
        </div>
    );
};

export default Counter;