import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props){
    
  const [todos, savedTodos] = useLocalStorage('ToDos_V1', []);

  
  const [search, setSearch] = React.useState("");


  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  /*
   * cambia la propiedad completed de el ToDo
   */

  const completeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);

    const newTodos = [...todos];

    !newTodos[todoIndex].completed
      ? (newTodos[todoIndex].completed = true)
      : (newTodos[todoIndex].completed = false);

    savedTodos(newTodos);
  };


  /*
   * elimina el todo
   */


  const deleteTodo = (id) => {

    const todoIndex = todos.findIndex((todo) => todo.id === id);

    const newTodos = [...todos];

    newTodos.splice(todoIndex, 1);

    savedTodos(newTodos);
  };


  /*
   * agrega un todo
   */

  const addTodo = (text, type) => {
    const newTodos = [...todos];
    console.log(text, type);

    newTodos.push({
      id: totalTodos + 1,
      text: text,
      type: type,
      completed: false
    })

    savedTodos(newTodos);
  };

  
  
  /*
   * Busca ToDos con el search, en caso de que no haya escrito nada en el search
   * devolverá el array completo.
   */
  let searchTodos = [];
  if (!searchTodos >= 1 || search === "#All") {
    searchTodos = todos;
  } else {
    searchTodos = todos.filter((todo) => {
      if (search[0] === "#"){
        return todo.type.includes(search.substring(1));  
      }
      else {
        const todoText = todo.text.toLowerCase();
        const searchText = search.toLowerCase();
        return todoText.includes(searchText);
      }
    });
  }

  return(
    <TodoContext.Provider
        value={{
            searchTodos,
            completeTodo,
            deleteTodo,
            addTodo,
            search,
            setSearch,
            totalTodos,
            completedTodos
        }}
    >
        {props.children}
    </TodoContext.Provider>
  );

}

export { TodoContext, TodoProvider };
