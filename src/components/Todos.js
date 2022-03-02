import React from "react";
import style from "../styles/Todos.module.css";

import { TodoCounter } from "./TodoCounter";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";

import { TodoContext } from "./TodoContext/index";


/*
   * Component
*/


function Todos() {
  
  const {searchTodos, completeTodo, deleteTodo} = React.useContext(TodoContext);

  return (

    <React.Fragment>

      

        <section className={style.Container}>
          <TodoCounter
            /* total={totalTodos}
            completedTodos={completedTodos}
            search={search}
            setSearch={setSearch} */
          />

         
          <TodoList>
            {searchTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                text={todo.text}
                type={todo.type}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.id)}
                onDelete={() => deleteTodo(todo.id)}
              />
            ))}
          </TodoList>

        </section>
        
    </React.Fragment>
  );
}

export { Todos };
