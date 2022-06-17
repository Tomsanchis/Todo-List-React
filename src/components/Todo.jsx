import React from "react";

const Todo = (props) => {
  return (
    <div className="card">
      <div>
        <p>{props.todo.content}</p>
        <p>{props.id}</p>
      </div>
    </div>
  );
};

export default Todo;
