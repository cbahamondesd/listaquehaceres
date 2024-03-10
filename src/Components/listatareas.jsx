import React from "react";

export const Listatareas = ( { tasks, handleCompletedTask, handleDeleteTask } ) => {
    return(
        <ul>
        {tasks.map((task) => (
            <li key={task.id}>
            <span style={{ textDecoration: task.completed && "line-through" }}>{task.title}</span>
            <input type="checkbox" checked={task.completed} onChange={() => handleCompletedTask(task.id)}/>{" "}
            <button onClick={() => handleDeleteTask(task.id)}>Eliminar</button>
            </li>
        ) )  }
        </ul>
    );
};