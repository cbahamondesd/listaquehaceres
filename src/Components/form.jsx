import React from "react";

export const Form = ({handleAddTask, taskValue, setTaskValue}) => {
    return(
        <form onSubmit={handleAddTask}>
            <input type="text" name="taskValue" value={taskValue} placeholder="Ingresa nombre de la tarea" onChange={(e)=> setTaskValue(e.target.value) } />
            <input type="submit" value="Agregar tarea"></input>
        </form>
    );
}