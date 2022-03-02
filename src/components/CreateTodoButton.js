import React from "react";
import style from "../styles/CreateTodoButton.module.css"

function CreateTodoButton(){
    return(
        <button className={style.Button}>Create Task +</button>
    );
}

export { CreateTodoButton };