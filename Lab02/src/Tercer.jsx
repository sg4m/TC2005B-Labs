import React from 'react'
import { heroes } from './heroes';

console.log(heroes);

const getHeroeById = (id) => heroes.find( heroe => heroe.id === id );
console.log(getHeroeById(2));

const getHeroeByEmpresa = (empresa) => heroes.filter( heroe => heroe.owner === empresa );
console.log(getHeroeByEmpresa('DC'));


const Tercer = () => {
  return (
    <>
    <h1>Analizar archivo "heroes.js"</h1>
    <p>Revisar consola para más detalles</p>
    <p>El superheroe elegido es: {JSON.stringify(getHeroeById(2))}</p>
    </>
  )
}

export default Tercer
