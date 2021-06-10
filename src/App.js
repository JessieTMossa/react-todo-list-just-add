// import useState hook, Header component, List component, AddTodo component
import { useState } from 'react'
import Header from "./components/Header";
import List from "./components/List"
import AddTodo from "./components/AddTodo"

// create function 
function App() {
// create global state variable using array destructuring, useState hook holding array of objects, each with unique id
//  useState hook gives us 2 pieces of info at beginning: actual state (todos here), and a way to change the state (setTodos here)
  const [todos, setTodos] = useState([
//     whatever is inside useState parentheses (here an array of objects/todos) will be initial state
    {
      id: 1,
      item: "Drink Water",
    },
    {
      id: 2,
      item: "Make Healthy Dinner",
    },
    {
      id: 3,
      item: "Exercise",
    },
  ]);

//  create addTodo event handler method using argument todo, generates random id#, helps work with state
  const addTodo = (todo) => {
    const id = Math.ceil(Math.random()*100000)
    const newTodo = {id, ...todo}
//     combines existing todos and new todos in an array
    setTodos([...todos, newTodo])
  }

//    return rendered HTML of the individual components.
  return (
    <div className="container">
//     title is prop for Header component
      <Header title="Todo List" />
//     input form for new todos
      <AddTodo onAdd={addTodo} />
// list component has child component of individual todos
      <List todos={todos}/>
    </div>
  );
}

// export App so it can be accessed in index.js
export default App;
