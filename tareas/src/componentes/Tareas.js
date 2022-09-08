import React from "react";
import '../hojasDeStylo/tareas.css'
import { AiOutlineCheckSquare } from "react-icons/ai";

function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
    return ( <
        div className = { completada ? 'tarea-contenedor completada' : 'tarea-contenedor' } >

        <
        div className = "tarea-texto" >
        onClick = {
            () => completarTarea(id) } { texto } <
        /div> <
        div className = "tareaContenedorIconos" >
        onClick = {
            () => eliminarTarea(id) } <
        AiOutlineCheckSquare className = "tarea-icono" / >
        <
        /div>

        <
        /div>
    )
}
export default Tarea;