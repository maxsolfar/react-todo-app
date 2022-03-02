import React from "react";
import style from "../styles/InputCreateTodo.module.css";

import { TodoContext } from "./TodoContext/index";

function InputCreateTodo() {

  const {addTodo} = React.useContext(TodoContext);

  const [newValue, setNewValue] = React.useState("");
  const [newType, setNewType] = React.useState("");


  const onChange = (event) => {
    setNewValue(event.target.value);
  };

  const onChangeType = (event) => {
    setNewType(event.target.value);
  };

  const addTodoB = (event) => {
    event.preventDefault();

    addTodo(newValue, newType);

    setNewValue("");
    setNewType("Study");
  }

  return (
    <React.Fragment>
      <h2 className={style.titleNewTodo}>Create New Task</h2>

      <div className={style.ContainerL}>
        
        <select onChange={onChangeType} value={newType} className={style.selectType} name="todoType">
            <option>Study</option>
            <option>Work</option>
            <option>Home</option>
            <option>Other</option>
        </select>

        <input type="text" name="newTodo" value={newValue} onChange={onChange} className={style.inputNewTodo} placeholder="Type here..."/>

    
        <button onClick={addTodoB} className={style.Button}>Create Task +</button>

        

      </div>
    </React.Fragment>
  );
}

export { InputCreateTodo };
