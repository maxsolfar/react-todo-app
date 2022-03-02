import React from "react";
import style from "../styles/TodoList.module.css"


function TodoList(props) {

    return (
    <section>
      <ul className={style.listItem}>{props.children}</ul>
    </section>
  );
}

export { TodoList };
