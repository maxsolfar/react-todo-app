import React from "react";
import style from "../styles/TodoSearch.module.css"
import { TodoContext } from "./TodoContext/index";


function TodoSearch(){
    const {search, setSearch} = React.useContext(TodoContext);

    const onSearchValueChange = (event) => {
        setSearch(event.target.value);
    };


    return(
        <div className={style.Container}>
                <input
                onChange = {onSearchValueChange}
                className = {style.todoSearch}
                value = {search[0]==="#" ? "" : search}
                placeholder = "Search ToDo..."
                /> 


            <div className={style.Buttons}>
                <button value="#All" onClick={onSearchValueChange}>All</button>
                <button value="#Work" onClick={onSearchValueChange}>Work</button>
                <button value="#Study" onClick={onSearchValueChange}>Study</button>
                <button value="#Home" onClick={onSearchValueChange}>Home</button>
                <button value="#Other" onClick={onSearchValueChange}>Other</button>
            </div>
        </div>
    );
}

export { TodoSearch };