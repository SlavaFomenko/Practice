//!типізація хендлерів
interface NewTodoProps {
  value: string,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  handleClick: React.MouseEventHandler<HTMLButtonElement>
}

const NewTodo = ({ value, onChange, handleClick }: NewTodoProps) => {
  return (
    <>
      <input
        type="text"
        placeholder="new todo"
        value={value}
        onChange={onChange}
      />
      <button onClick={handleClick}>Add todo</button>
    </>
  )
}
export default NewTodo;