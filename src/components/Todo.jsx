import React from "react";

const Todo = (props) => {
  return (
    <div className="card">
        <div>
          <label htmlFor="checker"></label>
          <input type="checkbox" name="checker" id="checker"/>
          <p>{props.todo.content}</p>
        </div>
        <div>  
          <p className="date">{props.todo.id}</p>
        </div>
    </div>
  );
};

export default Todo;
