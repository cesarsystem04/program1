import React from "react";

const estilos ={
    color: 'red',
    backgroundColor: 'yellow',
}


function TodoCounter() {
    return (
        <h2 style={estilos}>has completado 2 de 3 TODOS</h2>
    );
}

export { TodoCounter };