import { useState } from "react";
import Todo from "./components/Todo";

function App() {
  const [data, setdata] = useState("");
  const [todos, setTodos] = useState([]);

  const FormaterDate = () => {
    let newDate = new Date().toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
    return newDate;
  };

  const submit = (e) => {
    e.preventDefault();
    {
      const todo = {
        id: FormaterDate(),
        content: data,
        done: false,
      };
      data && setTodos([...todos, todo]);
    }
    setdata("");
  };

  return (
    <div className="container">
      <header>
        <div className="at-container">
          <h1 className="at-item">
            <span className="red">t</span>o<span className="red">d</span>o
            <span className="red">l</span>i<span className="red">s</span>t
          </h1>
        </div>
      </header>
      <main>
        <section id="todo">
          <h2>Enjoy your Wednesday 👀👊</h2>
          <form action="#" onSubmit={(e) => submit(e)}>
            <label htmlFor="item">Add Item</label>
            <input
              type="text"
              name="item"
              id="item"
              placeholder="Add Item ..."
              onChange={(e) => setdata(e.target.value)}
              value={data}
            />
            <button type="submit">add</button>
          </form>
          <div id="render-todo">
            {todos.map((todo, index) => (
              <Todo key={index} todo={todo} />
            ))}
          </div>
          <div id="footer">
            <p>Made with ❤️ by [PABLO]</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
