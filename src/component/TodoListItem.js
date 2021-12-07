import React, { useState } from "react";

function TodoListItem(
  {
    todo,
    todoList,
    toggleTodo,
    onRemoveTodo,
    setTodoList,
  }) {
  const [todoEditing, setTodoEditing] = useState(null);
  const [editTodoText, setEditTodoText] = useState('');

  const submitEdits = (id) => {
    const updatedTodos = [...todoList].map((todo) => {
      if (todo.id === id) {
        todo.text = editTodoText;
      }
      return todo;
    });
    setTodoList(updatedTodos)
    setTodoEditing(null);
  }

  const { title } = todo;

  function handleTodoClick() {
    toggleTodo(todo.id);
  }

  return (
    <label>
      <div className="todo">
        <input
          type="checkbox"
          id="completed"
          checked={todo.completed}
          onChange={handleTodoClick}
        />
        <span>{title} </span>
        {todo.id === todoEditing ? (
          <input type="text" onChange={(e) => setEditTodoText(e.target.value)} />
        ) : (
          <div>{todo.text}</div>
        )}
        {todo.id === todoEditing ? (
          <button style={{ color: "Green" }} onClick={() => submitEdits(todo.id)}>
            Save
          </button>
        ) : (
          <button style={{ color: "blue" }} onClick={() => setTodoEditing(todo.id)}>
            Edit
          </button>
        )}
        <button style={{ color: "red" }} onClick={() => onRemoveTodo(todo.id)}>
          Remove
        </button>
      </div>
    </label>
  );
}

export default TodoListItem;