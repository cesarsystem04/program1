import React from "react";
import './TodoCounter.css';

const estilos = {
    color: 'red',
    backgroundColor: 'yellow',
}


function TodoCounter() {
    return (
        <h2 className="TodoCounter">has completado 2 de 3 TODOS</h2>
    );
}

export { TodoCounter };