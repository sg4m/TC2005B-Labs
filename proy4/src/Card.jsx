import React from 'react'

export const Card = ({id, name, sprites = []}) => {
  return (
    <section style= {{height: 200}}>
        <div className='card'></div>
        <h2 className="text-capitalize">Numero: {id} - { name } </h2>
        { /*imagenes */ }
        <div> {
            sprites.map( sprite => (
                <img src={sprite} key={sprite} alt={name}/>
            ))
        }
        </div>
        <div className='card-body'></div>
        </section>
  )
}
