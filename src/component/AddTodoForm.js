import React, { useState } from "react";
import InputWithLabel from "../InputWithLabel";

function AddTodoForm({ onAddTodo, handleClearTodos }) {
  const [todoTitle, setTodoTitle] = useState("");

  const handleTitleChange = ({ target }) => {
    const { value } = target;
    setTodoTitle(value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    todoTitle.trim() && onAddTodo({ id: Date.now(), title: todoTitle });
    setTodoTitle("");
  };

  return (
    <div className="form">
      <form onSubmit={handleAddTodo}>
        <InputWithLabel
          id="title" required
          type="text"
          todoTitle={todoTitle}
          isFocused
          handleTitleChange={handleTitleChange}
          handleAddTodo={handleAddTodo}
          handleClearTodos={handleClearTodos}
        >
          <strong>Title: </strong>
        </InputWithLabel>
      </form>
      <hr />
    </div>
  );
}

export default AddTodoForm;
