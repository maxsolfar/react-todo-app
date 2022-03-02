import React from "react";
import style from "../styles/TodoCounter.module.css";
import { TodoSearch } from "./TodoSearch";

import { TodoContext } from "./TodoContext/index";


function TodoCounter(){
    
    const {totalTodos, completedTodos, search, setSearch} = React.useContext(TodoContext);

    return(
        <React.Fragment>
            <div className={style.Container}>
                <h2 className={style.title}>You have completed <b>{completedTodos}</b> of <b>{totalTodos} ToDos</b></h2>
                <TodoSearch
                search = {search}
                setSearch = {setSearch}
                />
                <hr/>
            </div>
            
        </React.Fragment>
    );
}

export { TodoCounter };