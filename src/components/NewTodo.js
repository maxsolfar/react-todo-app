import React from "react";
import style from "../styles/NewTodo.module.css";

import { InputCreateTodo } from "./InputCreateTodo";



function NewTodo(){

    

    return(
        <React.Fragment>
            <section className={ style.Container }>
                <InputCreateTodo />
            </section>
        </React.Fragment>
    );
}

export { NewTodo };