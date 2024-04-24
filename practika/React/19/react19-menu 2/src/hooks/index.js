import {useState} from "react";

export const useTodo = (initialValue) => {
  const [tasks, setTasks] = useState(initialValue);

  return {
    tasks,
    addTask: (task) => {
      const newTask = {
        id: Date.now(),
        body: task.body,
        isDone: false
      }
      setTasks([...tasks, newTask])
    },
    deleteTask: (id) => {
      setTasks(tasks.filter(task => task.id !== id))
    },
    setDoneTask: (id) => {
      console.log('hello' + id)
      setTasks(tasks.map(task => {
        if (task.id === id) {  //тернаркой очень длинная строка
          return { ...task, isDone: !task.isDone};
        }
        return task;
      }));
    }
  }
}
