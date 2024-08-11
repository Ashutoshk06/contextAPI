import {createContext,useContext} from 'react';

export const TodoContext = createContext({

    todos:
    [
        {
         id:1,
         todo:"todo msg",
         completed:false
        }
    ],

    addTodo : (todo) => {}, //we will decide the functionality in app.jsx
    updateTodo :(id,todo) => {},
    deleteTodo : (id) => {},
    toggleComplete : (id) => {}

})
  

  export const useTodo= () => {

    return useContext(TodoContext)
  };
  

  export const TodoProvider = TodoContext.Provider