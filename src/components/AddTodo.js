// import React useState hook
import { useState } from 'react' 

// define constant variable called AddTodo, uses onAdd event handler as prop (similar to onClick) via destructuring
const AddTodo = ({ onAdd }) => { 
    //    item value entered by user, empty string default value of new ToDo 
    const [item, setItem] = useState('')
    // new handler function, e is event, preventDefault asks page not to refresh
    const onSubmit = (e) => { 
        e.preventDefault()
        onAdd({item})

        setItem('')
    }

//     return rendered html of Todo form 
    return (
        <form onSubmit={onSubmit}>
            <label>Add Todo:</label>
// form input, textbox with placeholder text, assigns entered text to {item}, when text is entered (onChange), updates setItem (from line 7)
            <input 
                type="text" 
                placeholder="Todo Item"
                value={item}
                onChange={ (e) => setItem(e.target.value)}
            /> 
// form submit button labeled "Add Todo"
            <input type="submit" value="Add Todo" />
        </form>
    )
}

// export AddTodo component for use in App.js
export default AddTodo
