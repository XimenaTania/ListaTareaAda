import React, { useState } from "react";
import '../hojasDeStylo/tareasformularios.css'
import { v4 as uuidv4 } from 'uuid'


function TareaFormulario(props) {
    const [input, setImput] = useState('');

    const manejarCambio = e => {
        setImput(e.target.value);


    }


    const manejarEnvio = e => {
        e.preventDefault();


        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false
        }
        props.onSubmit(tareaNueva);
    }



    return ( <
        form className = "TareaFormulario"
        onSubmit = { manejarEnvio } >
        <
        input className = "tareaInput"
        type = "texto"
        placeholder = "Escribe tu tarea"
        name = "texto"
        onChange = { manejarCambio }
        />

        <
        button className = "TareaBoton" >
        Agregar Tarea < /button>

        <
        /form>
    )

}
export default TareaFormulario;