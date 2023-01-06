import React from "react";

function TodoItem(props: { text: string, completed: boolean }) {
    return (

        <li>
            <span>C</span>
            <p>{props.text}</p>
            <span>X</span>
        </li>
    );

}


export { TodoItem };