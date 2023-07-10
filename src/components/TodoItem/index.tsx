import React from "react";

import { BsFillTrashFill } from "react-icons/bs";

import styles from "./index.module.css";

interface ITodoItem {
  id: number;
  description: string;
  completed: boolean;
  toggleCompleted: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<ITodoItem> = ({
  id,
  description,
  completed,
  toggleCompleted,
  deleteTodo,
}) => (
  <li className={styles.todoItem}>
    <input
      type="checkbox"
      id="todoCheckbox"
      className="todoCheckbox"
      checked={completed}
      onChange={() => toggleCompleted(id)}
    />
    <p>{description}</p>
    <button onClick={() => deleteTodo(id)}>
      <BsFillTrashFill size={20} />
    </button>
  </li>
);

export default TodoItem;
