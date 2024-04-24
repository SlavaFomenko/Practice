import React, { useState } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import NewTodo from './components/NewTodo';

// function App() {
//   return (
//     <div className="App">
//       {/* <TodoItem id={"111"} completed={false} title="test 1">
//         "Hello World"
//       </TodoItem> */}
//       <TodoItem id={"111"} completed={false} title="test 1" style={{ border: "1px solid black" }} />
//     </div>
//   );
// }

//!типізація state
interface TodoState {
  id: string,
  title: string,
  completed: boolean
}
function App() {
  // const [text, setText] = useState("");
  // setText(3);
  // const [todos, setTodos] = useState();
  // todos.push('test');
  // setTodos(['one', 'two']);
  // const [todos, setTodos] = useState([]);
  // todos.push('test');
  // setTodos(['one', 'two']);
  // const [todos, setTodos] = useState<string[]>([]);
  // todos.push('test');
  // setTodos(['one', 'two']);
  // const [todos, setTodos] = useState(['']);
  // todos.push('test');
  // setTodos(['one', 'two']);
  // const [todos, setTodos] = useState(null);
  // todos.push('test');
  // setTodos(['one', 'two']);
  // const [todos, setTodos] = useState<TodoState[]>(null);
  // setTodos([{ id: "123", title: "test", completed: false }])
  // const [todo, setTodo] = useState<TodoState>({} as TodoState);
  //const [todo, setTodo] = useState<TodoState | null>(null);
  // const [todos, setTodos] = useState<ReadonlyArray<string> | null>(null);
  // todos.push('one');
  // setTodos(['two', 'three']);

  const [text, setText] = useState("");
  const [todos, setTodos] = useState<ReadonlyArray<string>>([]);


  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  }
  const addTodo = () => {
    setTodos([text, ...todos]);
    setText("");
    return 777;
  }

  return (
    <div className="App">
      <NewTodo
        value={text}
        onChange={handleInput}
        handleClick={addTodo} />
    </div>
  );
}

export default App;
