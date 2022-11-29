// import { useEffect } from 'react';
// import { useReducer } from 'react';
import useTodos from '../hooks/useTodos';
import TodoAdd from './TodoAdd';
import TodoList from './TodoList';
// import { todoReducer } from './todoReducer';

const initialState = [
    // {
        
    //     id: new Date().getTime(),
    //     description: 'Recolectar la piedra del alma',
    //     done: false, 

    // },
    // {
        
    //     id: new Date().getTime() * 3,
    //     description: 'Recolectar la piedra del poder',
    //     done: false, 

    // },
];

// const init = () => {
//     return JSON.parse( localStorage.getItem('todos') || []);
// }

const TodoApp = () => {
    /* Tarea 
    // useTodo
    // todos, handleDeleteTodo, handleToggle, handleNewTodo
    
    */
    const { todos, todosCount, pendingTodosCount, handleDeleteTodo, handleToggleTodo, handleNewTodo } = useTodos();

    // Declaracion de reducer y lugar donde estan los states
    // Desde aqui paso al hook useTodo.js
    // const [todos, dispatch] = useReducer( todoReducer, initialState, init );

    // useEffect(() => {
    //     localStorage.setItem('todos', JSON.stringify( todos ));
    // },[todos])

    // const handleNewTodo = ( todo ) => {
    //     const action = {
    //         type: '[TODO] Add Todo',
    //         carga: todo
    //     }

    //     dispatch( action );
    // };

    // const handleDeleteTodo = ( id ) => {
    //     dispatch({
    //         type: '[TODO] Remove Todo',
    //         payload: id
    //     })
    // }

    // const handleToggleTodo = ( id ) => {
    //     // console.log({ id });
    //     dispatch({
    //         type: '[TODO] Toggle Todo',
    //         payload: id
    //     })
    // }
    // Dentro del return estan alojados todos los compenentes 
    return (
        <>

            <h1>TodoApp: { todosCount } <small>pendientes: { pendingTodosCount }</small></h1>
            <hr /> 

            <div className="row">
                <div className="col-7">
                {/* Aqui importo jsx como un component y le paso los "todos" del useReducer */}
                {/* TodoList */}
                {/* Componentes personalizados que no se encargan tanto de ejecutar la funcion, Adicional 
                 se emitir los eventos  */}
                < TodoList todos={ todos } onDeleteTodo={ handleDeleteTodo } onToggleTodo={ handleToggleTodo } />
                {/* <ul className="list-group">

                    {

                        todos.map( todo => (

                        <li key={todo.id} className="list-group-item d-flex justify-content-between">
                            <span className="aling-self-center">Item 1</span>
                            <button className="btn btn-danger">Borrar</button>
                        </li> 

                        ))
                        

                    }
                
 
                </ul>    */}
                {/* Fin TodoList */}

                </div>

                <div className="col-5">

                    <h4>Agregar TODO</h4>
                    <hr />
                    {/*  TodoAdd onNewTodo( todo ) */}
                    { /* id: new Date()..., description: '', done: false */ }
                    <TodoAdd onNewTodo={handleNewTodo}/>
                    {/* <form>

                        <input 
                            type="text"
                            placeholder="¿Qué hay que hacer?"
                            className="form-control" 
                        />

                        <button 
                            type="submit"
                            className="btn btn-outline-primary mt-1" 
                        >
                            Agregar
                        </button>

                    </form> */}

                </div>

            </div>

        </>
    );
};

export default TodoApp;
