import React from 'react';

const Segundo = () => {

    const newmsg = "Santiago Gamborino";

    const getSuma = (a,b) => {
        return a + b;
    }


    return (
        <fragment>
            <h1>Titulo: {newmsg} </h1>
            <h3>Funcion: {getSuma(5,4)}</h3>
            <p>Este es un parrafo lorem ipsum</p>
        </fragment>
    );
}

export default Segundo;