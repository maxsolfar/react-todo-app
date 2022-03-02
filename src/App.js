import React from "react";

import { NewTodo } from "./components/NewTodo";
import { Todos } from "./components/Todos";

//import style from "./App.css";
import { TodoProvider } from "./components/TodoContext/index";



function App() {
  return (
    <React.Fragment>
      <TodoProvider>
      
        <NewTodo />
        <Todos />
      

      </TodoProvider>
    </React.Fragment>
  );
}

export default App;
