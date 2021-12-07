import React, { useEffect, useRef } from 'react'

const InputWithLabel = ({
  id,
  name,
  handleTitleChange,
  handleClearTodos,
  children,
  todoTitle,
}) => {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, [todoTitle]);

  return (
    <>
      <div>
        <label
          htmlFor={id}><strong>{ children }</strong>
        </label>
        &nbsp;
        <input
          id={id}
          type="text"
          name={name}
          ref={inputRef}
          placeholder="add new to do"
          value={todoTitle}
          onChange={handleTitleChange}
        />
        <button style={{ color: "blue" }}>Add</button>
        <button style={{ color: "red" }} onClick={() => handleClearTodos()}>
          Clear
        </button>
      </div>
    </>
  )
}

export default InputWithLabel;
