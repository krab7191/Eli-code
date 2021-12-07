import { useState, useEffect } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./component/AddTodoForm";
import "./styles.css"

const initialTodoList = "firstApp.todos";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: {
            todoList: JSON.parse(localStorage.getItem(initialTodoList)) || []
          }
        })
      }, 2000);
    })
      .then(({ data }) => {
        setTodoList(data.todoList);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!isLoading)
      localStorage.setItem(initialTodoList, JSON.stringify(todoList));
  }, [todoList, isLoading]);

  function toggleTodo(id) {
    const updatedTodos = [...todoList];
    const todo = updatedTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodoList(updatedTodos);
  }

  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo]);
  }

  const removeTodo = (id) => {
    const updatedTodos = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodos)
  }

  const handleClearTodos = () => {
    const nonChecked = [...todoList].filter(item => !item.completed);
    setTodoList(nonChecked);
  }

  return (
    <>
      <div className="App">
        <h1 style={{ color: "blue" }}>Todo List</h1>
        <AddTodoForm onAddTodo={addTodo} handleClearTodos={handleClearTodos} />
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <TodoList
            setTodoList={setTodoList}
            todoList={todoList}
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
          />
        )}
      </div>
    </>
  );
}

export default App;