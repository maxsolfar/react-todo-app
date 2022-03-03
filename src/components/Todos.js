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

  const {error, loading, searchTodos, completeTodo, deleteTodo} = React.useContext(TodoContext);

  return (

    <React.Fragment>


        

        <section className={style.Container}>
          <TodoCounter/>

          <TodoList>
            {error && <p className={style.Error}>There has been an error, please try again...</p>}
            {loading && <section className={style.loader}>
                <div></div>
                <div></div>
                <div></div>
            </section>}
            {(!loading && !searchTodos.length) && <p className={style.NewTodo}>¡Create your first Todo!</p>}
            
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
