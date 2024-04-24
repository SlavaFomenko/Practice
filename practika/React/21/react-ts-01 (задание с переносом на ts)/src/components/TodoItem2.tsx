import React from 'react';
import { Todo } from '../types';

interface TodoItemProps extends Todo {
    style?: React.CSSProperties;
}

interface TodoItem2Props {
    todo: TodoItemProps;
    todoActions: {
        remTodo: (id: string) => void;
        setCheckedTodo: (id: string) => void;
    };
}

const TodoItem2: React.FC<TodoItem2Props> = ({ todo, todoActions: { remTodo, setCheckedTodo } }) => {
    console.log(remTodo);

    const textColor = todo.completed ? 'green' : 'red';

    return (
        <li key={todo.id} style={{ color: textColor, backgroundColor: 'white', ...todo.style }}>
            <input onChange={() => setCheckedTodo(todo.id)} type="checkbox" checked={todo.completed} />
            <span>{todo.title}</span>
            <span onClick={() => remTodo(todo.id)} style={{cursor:'pointer'}}> &times;</span>
        </li>
    );
}

export default TodoItem2;
