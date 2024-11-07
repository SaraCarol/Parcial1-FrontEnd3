import React from 'react'

const Card = ({nombre, edad, generoFav, cancionFav}) => {
  return (
    <div>
      <h2>Gracias por tus respuestas {nombre} </h2>
      <h3>Evidenciamos que tu género de música favorito es: {generoFav} </h3>
      <h3>Tu canción favorita es: {cancionFav} </h3>
      <h3>¡Que buen gusto musical! </h3>
    </div>
  )
}

export default Card