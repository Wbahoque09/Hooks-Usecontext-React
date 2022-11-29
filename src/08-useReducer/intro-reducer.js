

// console.log('Hola Mundo');

const initilState = [{

    id: 1,
    todo: 'Recolectar la piedra del Alma',
    done: false,

}];

// Teoricamente este es un reducer
const todoReducer = ( state = initilState, action = {} ) => {
    // Aqui se modifica el estado... 
    if (action.type === '[TODO] add todo') {
        return [ ...state, action.payload ];

        // Jamas añadir esto, asi sea que funcione en algunos casos
        // state.push( action.payload );
    }

    return state;

};

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Recolectar la piedra del poder',
    done: false,
}

// Accion para añadir cambios... 
const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo,
};
// Aqui se manda la accion para cambios
todos = todoReducer( todos, addTodoAction );

// todos.push({
//     id: 2, 
//     todo: 'Recolectar la piedra del poder',
//     done: false,
// });

console.log({state: todos});
