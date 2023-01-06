import React from "react";

type Props = {
    children: string | JSX.Element | JSX.Element[]
}

function TodoList({ children }: Props) {
    return (
        <section>
            <p>{children}</p>
        </section>);
}

export { TodoList };