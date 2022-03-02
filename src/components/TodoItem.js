import React from "react";
import style from "../styles/TodoItem.module.css";

function TodoItem(props) {

  
  return (
    <React.Fragment>
      <div className={style.Container}>
        <button onClick={props.onDelete} className={style.Button}>X</button>
        <li
          className={`${
            props.completed ? style.TodoItemComplete : style.TodoItem
          }`}
        >
          <input checked={props.completed ? true : false} onChange={props.onComplete} className={style.check} type="checkbox" />

          <p>{props.text}</p>

          <p
            className={`${
              props.type === "Work"
                ? style.typeTodoGreen
                : props.type === "Study"
                ? style.typeTodoOrange
                : props.type === "Home"
                ? style.typeTodoBlue
                : style.typeTodoRed
            }`}
          >
            {props.type}
          </p>
        </li>
      </div>
    </React.Fragment>
  );
}

export { TodoItem };
