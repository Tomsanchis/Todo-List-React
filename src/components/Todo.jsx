import React from "react";

const Todo = (props) => {
  return (
    <div
      className="card"
      style={{ background: props.todo.done ? "rgb(90, 90, 148)" : "#fff" }}
    >
      <div>
        <label htmlFor="checker"></label>
        <input
          type="checkbox"
          name="checker"
          checked={props.todo.done}
          id="checker"
          onChange={() => {
            props.checkTodo(props.todo.id);
          }}
        />
        <p style={{ color: props.todo.done ? "#fff" : "#000" }}>
          {props.todo.content}
        </p>
      </div>
      <div>
        <p
          className="date"
          style={{ color: props.todo.done ? "#fff" : "#000" }}
        >
          {props.todo.id}
        </p>
      </div>
    </div>
  );
};

export default Todo;
