import React from 'react'

const nombre = 'Santiago';
const apellido = 'Gamborino';
const element = '<h1>Titulo {nombre}</h1>';
console.log(nombre);
console.log(apellido);
console.log(element);

let valor = 5;
valor = 7;
console.log(valor);

if (true) {
    let valor = 6;
    console.log(valor);
}

function saludo() {
return ('Saludo');
}
console.log(saludo());

const Segundo = () => {
  return (
    <>
    <h1>Hola, yo soy {nombre} {apellido}</h1>
    <p> Revisar la consola para ver los console.log de las variables</p>
    <p> El valor es: {valor}</p>
    </>
  )
}

export default Segundo
