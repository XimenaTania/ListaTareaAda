import React, { useState } from "react";
import TareaFormulario from "./tareaformulario";
import '../hojasDeStylo/listadeTareas.css'
import Tarea from "./Tareas";

function ListadeTareas() {
    const [tareas, setTareas] = useState([]);


    const agregarTarea = tarea => {
        console.log(tarea);

        if (tarea.texto.trim()) {
            tarea.texto = tarea.texto.trim();
            const tareaActualizada = [tarea, ...tareas];
            setTareas(tareaActualizada);
        }
    }


    return ( <
        >
        <
        TareaFormulario onSubmit = { agregarTarea }
        />


        <
        div className = "TareaListaContenedor" > {
            tareas.map(
                (tarea) =>
                <
                Tarea key = { tarea.id }
                id = { tarea.id }
                texto = { tarea.texto }
                completada = { tarea.completada }
                />

            )
        }


        <
        /div> <
        />

    )

}
export default ListadeTareas;