import React from 'react';

//!типізація props
// interface TodoItemProps {
//   id: string,
//   title: string,
//   completed: boolean
// }
// const TodoItem: React.FC<TodoItemProps> = ({ id, title, completed }) => {
//   return (
//     <li>
//       <input type="checkbox" checked={completed} />
//       <span>{title}</span>
//       <span> &times;</span>
//     </li>
//   )
// }

// interface TodoItemProps {
//   id: string,
//   title: string,
//   completed: boolean,
//   children: React.ReactNode
// }
// const TodoItem = ({ id, title, completed, children }: TodoItemProps) => {
//   return (
//     <li>
//       <input type="checkbox" checked={completed} />
//       <span>{title}</span>
//       <span> &times;</span>
//       {children}
//     </li>
//   )
// }

//!Типізація style
interface TodoItemProps {
  id: string,
  title: string,
  completed: boolean,
  style?: React.CSSProperties
}
const TodoItem = ({ id, title, completed, style }: TodoItemProps) => {
  return (
    <li style={{ color: 'red', backgroundColor: 'white', ...style }}>
      <input type="checkbox" checked={completed} />
      <span>{title}</span>
      <span> &times;</span>
    </li>
  )
}

export default TodoItem;