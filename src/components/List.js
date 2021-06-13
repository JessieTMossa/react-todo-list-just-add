// import Todo from Todo.js file in components
import Todo from './Todo'

// uses destructuring to extract todos from state, instead of (props) and (props.todos)
const List = ({ todos }) => {
    return (
        <div>
// loop through/map todos and create individual Todo components containing id number and todo item text
          {todos.map((todo) => 
            <Todo key={todo.id} todo={todo} />
          )}  
        </div>
    )
}

// export List for use in App.js
export default List

