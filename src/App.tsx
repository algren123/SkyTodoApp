import React from "react";

import { BiSearch } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";

import Title from "./components/Title";
import TodoItem from "./components/TodoItem";

import "./App.css";

export interface ITodo {
  id: number;
  description: string;
  completed: boolean;
}

function App() {
  const [todos, setTodos] = React.useState<ITodo[]>([]);
  const [description, setDescription] = React.useState<string>("");

  const addTodo = (todo: ITodo) => {
    if (todo.description) {
      setTodos([...todos, todo]);
    } else {
      alert("Please enter a description");
    }
  };

  const deleteTodo = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);

    setTodos(newTodos);
  };

  const toggleCompleted = (id: number) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }

      return todo;
    });

    setTodos(newTodos);
  };

  const handleAddTodo = () => {
    addTodo({
      id: todos.length ? todos.length : 0,
      description: description,
      completed: false,
    });
    setDescription("");
  };

  return (
    <div className="App">
      <Title />
      <div className="inputContainer">
        <BiSearch className="todoIcon" size={20} />
        <input
          type="text"
          className="todoInput"
          placeholder="Add Todo"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="addButton" onClick={handleAddTodo}>
          <AiOutlinePlus size={18} />
        </button>
      </div>
      {todos.length ? (
        <>
          <p>Number of todos: {todos.length}</p>
          <ul className="todoList">
            {todos.map((todo) => (
              <TodoItem
                description={todo.description}
                id={todo.id}
                completed={todo.completed}
                toggleCompleted={toggleCompleted}
                deleteTodo={deleteTodo}
              />
            ))}
          </ul>
        </>
      ) : (
        <p>No Todos</p>
      )}
    </div>
  );
}

export default App;
