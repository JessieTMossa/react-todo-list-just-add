
import { useState } from 'react' // import React useState hook

const AddTodo = ({ onAdd }) => { // define constant variable called AddTodo, uses onAdd event handler as prop (similar to onClick) via destructuring
    const [item, setItem] = useState('')//    item value entered by user, empty string default value of new ToDo 
    const onSubmit = (e) => { // new handler function, e is event, preventDefault asks page not to refresh
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
