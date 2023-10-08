import React from 'react'
import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa'

const Content01 = () => {
    const handleCheck = (id) => {
        //console.log(`key: ${id}`)
        const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
        setItems(listItems);
        localStorage.setItem('shoppingList', JSON.stringify(listItems));
    }

    const handelDelete = (id) => {
        //console.log(id)
        const listItems = items.filter((item) => item.id !== id);
        setItems(listItems);
        localStorage.setItem('shoppingList', JSON.stringify(listItems));
    }

    return (
        <main>
            {items.length ? (
                <ul>
                    {items.map((item) => (
                        <li className='item' key={item.id}>
                            <input type='checkbox'
                                onChange={() => handleCheck(item.id)}
                                checked={item.checked}
                            />
                            <label
                                style={(item.checked) ? { textDecoration: 'line-through' } : null}
                                onDoubleClick={() => handleCheck(item.id)}>
                                {item.item}
                            </label>
                            <FaTrashAlt
                                onClick={() => handelDelete((item.id))}
                                role='button'
                                tabIndex='0'
                            />
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Your list is empty</p>
            )}
        </main>
    )
}

export default Content01


/*
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
                <header>
            <p onDoubleClick={handeleClick}>
                Hello {name}
            </p>
            <button onClick={handeleNameChange}>Change Name</button>
            <button onClick={handeleClick}>Click name</button>
            <button onClick={handeleClick2}>Click name</button>
        </header>
*/