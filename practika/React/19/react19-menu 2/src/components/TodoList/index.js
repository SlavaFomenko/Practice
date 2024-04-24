import React, {useId, useState} from 'react';
import { useTodo } from '../../hooks';
import {Task} from "./TaskList";
import styles from './TodoList.module.css'
import AddBoxIcon from '@mui/icons-material/AddBox';
import {create} from "@mui/material/styles/createTransitions";
import {logDOM} from "@testing-library/react";

const TodoList = () => {
  const [listType,setListType]=useState('all')
  const { tasks,addTask,deleteTask,setDoneTask } = useTodo([
    {
      id: Date.now(),
      body: 'Wash the car',
      isDone: false
    }
  ]);
  const idelem = useId();
  const btnInputHandler = ()=>{
    const inputValue = document.getElementById(idelem).value.trim()
    const isHave = tasks.find(task => task.body === inputValue);
    console.log(isHave)
    if(isHave === undefined){
      addTask({
        id:Date.now(),
        body:inputValue,
        isDone:false
      })
    }
    document.getElementById(idelem).value = '';
  }

  function createTask(task){
    return(<Task key={task.id}
                     id={task.id}
                     body={task.body}
                     setDoneTask={setDoneTask}
                     isDone={task.isDone}
                     deleteTask = {deleteTask}
    />)}


  return (
    <div className={styles.wrapper}>
      <h1>AbacaxiGuy's Todo List</h1>
      <div className={styles.add_task}>
        <div className={styles.input_wrapper}>
          <input id={idelem}/>
          <button onClick={btnInputHandler}>
            <AddBoxIcon />
          </button>
        </div>

        <div className={styles.select_block}>
          <select onChange={({target})=>{
            setListType(target.value)
          }} defaultValue={'All'}>
            <option value={'all'}>All</option>
            <option value={'done'}>Done</option>
            <option value={'not done'}>Not Done</option>
          </select>
        </div>
      </div>

      <ul className={styles.task_list}>
        {
          tasks.map((task)=>{
            if(listType === 'done' && task.isDone){
              return createTask(task)
            }
            if(listType === 'not done' && !task.isDone){
              return createTask(task)
            }
            if(listType === 'all'){
              console.log('hello')
              return createTask(task)
            }
          })
        }
      </ul>

    </div>
  );
}

export default TodoList;
