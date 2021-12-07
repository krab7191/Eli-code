import React from "react";
import TodoListItem from "./component/TodoListItem";

function TodoList({ todoList, toggleTodo, removeTodo, setTodoList }) {
  return (
    <div>
      <ul>
        {todoList.map(item => (
          <TodoListItem
            key={item.id}
            toggleTodo={toggleTodo}
            todo={item}
            onRemoveTodo={removeTodo}
            todoList={todoList}
            setTodoList={setTodoList}
          />
        ))}
        <div>
          <span>{todoList.filter((todo) => !todo.completed).length} left to do</span>
        </div>
      </ul>
    </div>
  );
}

export default TodoList;