import { useState } from "react";

const TodoApp = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const onChange = (event) => setTodo(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();
    if (!todo) {
      return;
    }
    setTodoList((curr) => [todo, ...curr]);
    setTodo("");
  };

  return (
    <div>
      <h1>{`My Todo List(${todoList.length})`}</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={todo}
          type="text"
          placeholder="input Todo.."
        />
        <button>Add Todo</button>
      </form>
      <hr />
      <ul>
        {todoList.map((el, idx) => (
          <li key={idx}>{el}</li>
        ))}
      </ul>
      {/* <div>
        <span>{todoList.join(", ")}</span>
      </div> */}
    </div>
  );
};
export default TodoApp;
