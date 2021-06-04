// import React useState hook
import { useState } from 'react'

// define constant variable called AddTodo, uses onAdd prop (similar to onClick) via destructuring
const AddTodo = ({ onAdd }) => { 
    const [item, setItem] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        onAdd({item})

        setItem('')
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Add Todo:</label>
            <input 
                type="text" 
                placeholder="Todo Item"
                value={item}
                onChange={ (e) => setItem(e.target.value)}
            /> 
            <input type="submit" value="Add Todo" />
        </form>
    )
}

export default AddTodo
