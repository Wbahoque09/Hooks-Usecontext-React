import TodoItem from "./TodoItem";


const TodoList = ({ todos = [], onDeleteTodo, onToggleTodo }) => {
    return (
        <>

            <ul className="list-group">

                {

                    todos.map( todo => (

                    // <li key={todo.id} className="list-group-item d-flex justify-content-between">
                    //     <span className="aling-self-center">Item 1</span>
                    //     <button className="btn btn-danger">Borrar</button>
                    // </li> 
                        <TodoItem key={ todo.id } todo = { todo } onDeleteTodo = {onDeleteTodo} onToggleTodo = { onToggleTodo } />
                    ))
                    

                }


            </ul> 

        </>
    )
}

export default TodoList;
