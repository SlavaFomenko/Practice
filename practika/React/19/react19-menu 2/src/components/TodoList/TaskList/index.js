import React from 'react';
import classNames from "classnames";
import styles from './TaskList.module.css'
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';



export const Task = (props) =>{
    // const done = styles.li_done
    console.log(props.isDone)
    return(
        <li className={classNames(styles.li ,{[styles.li_done]:props.isDone})}>
            <span>{props.body}</span>
            <button onClick={()=>props.setDoneTask(props.id)}>
                <DoneIcon/>
            </button>
            <button onClick={()=>props.deleteTask(props.id)}>
                <DeleteIcon/>
            </button>
        </li>
    )
}