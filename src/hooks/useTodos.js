import { useEffect, useReducer } from 'react';
import { todoReducer } from '../08-useReducer/todoReducer';





const init = () => {
    return JSON.parse( localStorage.getItem('todos') || []);
}


const useTodos = () => {
// Aqui el initialState se deja solo como un arry vacio
    const [todos, dispatch] = useReducer( todoReducer, [], init );

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ));
    },[todos])

    const handleNewTodo = ( todo ) => {
        const action = {
            type: '[TODO] Add Todo',
            carga: todo
        }

        dispatch( action );
    };

    const handleDeleteTodo = ( id ) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        })
    }

    const handleToggleTodo = ( id ) => {
        // console.log({ id });
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        })
    }

    return {
        todos,
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo=> !todo.done).length,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
    }

  
}

export default useTodos;
