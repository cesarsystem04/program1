import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoCounter } from './TodoCounter'
import { TodoSearch } from './TodoSearch'
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';

let nombreCreador = 'César Torres García';
let mensaje = 'esta suave'

function App2() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprende react {nombreCreador}<br></br>
          {mensaje}<br></br>
        </a>
      </header>
    </div>
  );
}


const todos = [
  { text: 'Cortar cebolla', completed: false },
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
          <TodoItem text={todo.text} completed={todo.completed} />
        ))}

      </TodoList>
      {/*<CreateTodoButton /> */}
      <button>+</button>
    </React.Fragment>
  );

}



export default App;
