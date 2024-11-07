import React, { useState } from 'react';
import Card from './Card';
import "../styles/form.css";

const Form = () => {
    const [usuario, setUsuario] = useState({
        nombre:"",
        edad: "",
        generoFav: "",
        cancionFav: ""
    })
    console.log(usuario);

    const [error, setError] = useState(false);
    const [card, setCard] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(
            usuario.nombre.trim().length >= 3 &&
            usuario.generoFav.trim().length >= 3 &&
            usuario.cancionFav.trim().length >= 6
        ) {
            setCard(true);
            setError(false);
        } else {
            setError(true);
        }
    };

  return (
    <div >
        {card ? (<Card nombre = {usuario.nombre} edad = {usuario.edad} generoFav = {usuario.generoFav} cancionFav = {usuario.cancionFav}  />) : (
            <form className="formContainer" onSubmit={handleSubmit}>
            <label >Nombre completo:</label>
            <input type="text"
            value={usuario.nombre}
            onChange={(e)=>
                setUsuario({...usuario, nombre: e.target.value})
            } />
 
            <label >Edad: </label>
            <input type="number"
            value={usuario.edad}
            onChange={(e)=>
                setUsuario({...usuario, edad: e.target.value})
            } />
 
            <label >Género de música Favorito: </label>
            <input type="text"
            value={usuario.generoFav}
            onChange={(e)=>
                setUsuario({...usuario, generoFav: e.target.value})
            } />
 
            <label >Canción Favorita: </label>
            <input type="text"
            value={usuario.cancionFav}
            onChange={(e)=>
                setUsuario({...usuario, cancionFav: e.target.value})
            } />
            
            <button>Enviar respuestas</button>
            {error ? (
                <h3 style={{color:"red"}}> Por favor chequea que la información sea correcta</h3>
            ): null}
            
        </form>
        )}

        
    </div>
)
}

export default Form