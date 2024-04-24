import React, { useState } from 'react';
import './App.css';
import NewTodo from './components/NewTodo';
import { Todo } from './types';
import TodoList from './components/TodoList';

//!винос типів для повторного використання
function App2() {

  const [text, setText] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  }
  const addTodo = () => {
    const newTodo = {
      id: new Date().toString(),
      title: text,
      completed: false
    }
    setTodos([newTodo, ...todos]);//краще копію!
    setText("");
  }
  const remTodo = (id:string) : void =>{
    const newTodo = todos.filter(item => item.id !== id);
    setTodos(newTodo)
  }

  const setCheckedTodo = (id:string):void =>{
    const newTodo = todos.map(item => item.id===id?{...item,completed:!item.completed}:item);
    setTodos(newTodo)
  }

  return (
    <div className="App">
      <NewTodo
        value={text}
        onChange={handleInput}
        handleClick={addTodo} />
      <TodoList todos={todos} todoActions={{remTodo,setCheckedTodo}}/>
    </div>
  );
}

export default App2;
