import styles from "./todoForm.module.css";
import { useState } from "react";
export default function TodoForm({ todos, setTodos }) {
  //const [todo, setTodo] = useState("");
  const [todo, setTodo] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }
  return (
    <form className={styles.todoForm} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <input
          className={styles.modernInput}
          type="text"
          placeholder="Enter Todo Item..."
          value={todo.name}
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
        />
        <button type="submit" className={styles.modernButton}>
          Add
        </button>
      </div>
    </form>
  );
}
