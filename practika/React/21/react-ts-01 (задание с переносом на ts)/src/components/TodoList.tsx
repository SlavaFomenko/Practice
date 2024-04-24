import React from "react";
import { Todo } from "../types";
import TodoItem2 from "./TodoItem2";

interface TodoListProps {
    todos: Todo[];
    todoActions: {
        remTodo: (id: string) => void;
        setCheckedTodo: (id: string) => void;
    };
}

const TodoList: React.FC<TodoListProps> = ({todos,todoActions}) => {
    const renderTodos = todos.map(e => <TodoItem2 todoActions={todoActions} todo={e} />);
    return (
        <>
            <h2>List:</h2>
            <ul>
                {renderTodos}
            </ul>
        </>
    );
};

export default TodoList;
