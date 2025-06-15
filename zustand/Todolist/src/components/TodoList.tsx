import { useState } from "react";
import UseStoreApp from "../store/StoreApp";

const TodoList = () => {
  const { todos, addTodos, removeTodos, toggleTodos } = UseStoreApp();
  const [input, setInput] = useState("");
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const handleAdd = () =>{
if (input.trim() === "") return;
    addTodos({
      id: Date.now(),
      text: input,
      completed: false,
    });
    setInput("");
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Todo List
        </h1>
        <div className="flex items-center mb-4">
          <input
            type="text"
            placeholder="enter your todo "
            value={input}
            onChange={handleInput}
            className="flex-grow px-4 py-2 border rounded-l-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleAdd}
            className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add
          </button>
        </div>
        <ul className="space-y-3">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between bg-gray-50 p-3 rounded-lg shadow-sm"
            >
              <div className="flex items-center">
                <input
                  className="mr-2 form-checkbox h-5 w-5 text-blue-600"
                  type="checkbox"
                //   checked={todo.completed}
                  onChange={() => toggleTodos(todo.id)}
                />
                <span
                  className={`${
                    todo.completed
                      ? `line-through text-gray-400`
                      : `text-gray-700`
                  }`}
                >
                  {todo.text}
                </span>
              </div>

              <button
                onClick={() => removeTodos(todo.id)}
                className="text-red-500 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
