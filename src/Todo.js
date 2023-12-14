import React, { useState } from 'react';
import './style.css'

const generated = () => {
    return Math.floor(Math.random() * 10000)
}

const Todo = () => {
    const [todos, setTodos] = useState([])
    const [input, setInput] = useState('')


    const handleSubmit = () => {
        setTodos((todos) =>
            todos.concat({
                text: input,
                id: generated()
            }),
            setInput('')
        )
    }

    const removeHandler = (id) => {
        setTodos((todos) => todos.filter((item) => item.id !== id))
    }
    return (
        <div>
            <div className="container">
                <input type="text" value={input} onChange={(event) => setInput(event.target.value)} placeholder='Enter your text' className='todo-input' />
                <button onClick={handleSubmit} className='submit'>Submit</button>
                <ul className='todos'>
                    {todos.map(({ text, id }, index) => {
                        return (
                            <li key={id} className='list'>
                                <span>{index + 1}: {text}</span>
                                <button onClick={() => removeHandler(id)} className='close'>X</button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Todo;