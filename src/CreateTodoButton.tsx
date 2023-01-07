import React from 'react';
import './CreateTodoButton.css';

type Props = {
    children: string | JSX.Element | JSX.Element[]
}

function CreateTodoButton() {
  return (
    <button className="CreateTodoButton">+</button>
  );
}

export { CreateTodoButton };