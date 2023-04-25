import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoCounter } from './TodoCounter'
import { TodoSearch } from './TodoSearch'
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

let nombreCreador = 'César Torres García';
let mensaje = 'esta suave';



const todos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar curso de introduccióñ', completed: false },
  { text: 'Cortar cebolla 2', completed: false }
];

function App() {

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList >
        {todos.map(todo => (
          <TodoItem key={todo.text}
            text={todo.text}
            completed={todo.completed} />
        ))}

      </TodoList>
      <CreateTodoButton />      
    </React.Fragment>
  );

}



export default App;
