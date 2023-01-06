import React from 'react';
import logo from './logo.svg';
import './App.css';

let nombreCreador = 'César Torres García';
let mensaje = 'esta suave'

function App(props: { descripcion: string, creador: string  }) {
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
          {props.descripcion}<br></br>
          {props.creador}
        </a>
      </header>
    </div>
  );
}

export default App;
