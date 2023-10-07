import React from 'react'
import { useState } from 'react';

const Content01 = () => {
    // getter, setter
    const [name, setName] = useState('Kien');
    const [count, setCount] = useState(0);

    const handeleNameChange = () => {
        const names = ['Kien dep trai', 'Kevin', 'Dave'];
        const int = Math.floor(Math.random() * 3);
        //return names[int]
        setName(names[int]);
    }

    const handeleClick = () => {
        setCount(count + 1)
        console.log(count)
    }

    const handeleClick2 = () => {
        console.log(count)
    }

    const handeleClick3 = (e) => {
        console.log(e.target.innerText)
    }

    return (
        <main>
            <header>
                <p onDoubleClick={handeleClick}>
                    Hello {name}
                </p>
                <button onClick={handeleNameChange}>Change Name</button>
                <button onClick={handeleClick}>Click name</button>
                <button onClick={handeleClick2}>Click name</button>
            </header>
        </main>
    )
}

export default Content01
