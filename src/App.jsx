import React, { useEffect, useState } from "react"; 
import { v4 as uuidv4 } from "uuid";
import { Form } from "./Components/form";
import { Listatareas } from "./Components/listatareas";

const App = () => {
  const initialState = [
    { id : uuidv4(), 
      title : "Estudiar javascript", 
      completed : false,   
    },
    { id : uuidv4(), 
      title : "Estudiar React", 
      completed : false,   
    },
    { id : uuidv4(), 
      title : "Estudiar Express", 
      completed : false,   
    },
    { id : uuidv4(), 
      title : "Estudiar Mongo DB", 
      completed : false,   
    },
  ];

  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || initialState); // || para valores por defecto
  const [taskValue, setTaskValue] = useState(""); //

  const handleAddTask = (target) => {
    target.preventDefault();

    console.log("Largo " + taskValue.length);

    if (taskValue.length === 0){
      alert("Debe ingresar nombre de la tarea");
      return;
    }

    setTasks([
      ...tasks,
      {
        id: uuidv4(),
        title: taskValue,
        completed: false,
      },
    ]);
    setTaskValue("");
  };

  const saveToLocalStorage = (key, value) => localStorage.setItem(key, JSON.stringify(value));

  useEffect(() => {
     saveToLocalStorage("tasks", tasks);
  }, [tasks, setTasks]);

  const handleCompletedTask = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      })
    );
  };

  const handleDeleteTask = (id) => {
    const tasksArr = tasks.filter((item) => item.id !== id);
    saveToLocalStorage("tasks", tasksArr);
    setTasks(tasksArr);
  };

  return (
    <div>
      <h1>Lista de quehaceres</h1>

      <div>
        <Form handleAddTask={handleAddTask} taskValue={taskValue} setTaskValue={setTaskValue} />

        <Listatareas tasks={tasks} handleCompletedTask={handleCompletedTask} handleDeleteTask={handleDeleteTask} />
      </div>
    </div>
  )
}

export default App;
