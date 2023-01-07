import React from "react";
import './TodoList.css';


type Props = {
    children: string | JSX.Element | JSX.Element[]
}

function TodoList({ children }: Props) {
    return (
        <section>
            <ul>{children}</ul>
        </section>);
}

export { TodoList };