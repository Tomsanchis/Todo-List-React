import { useState } from "react";
import Todo from "./components/Todo";

function App() {
  const [data, setdata] = useState("");
  const [todos, setTodos] = useState([]);
  const [error, seterror] = useState(false);
  const [filter, setFilter] = useState("ALL");

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

    if (data.length > 0) {
      seterror(false);
    } else {
      seterror(true);
    }
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

  const date = new Date();
  const tbDate = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

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
          <h2>Enjoy your {tbDate[date.getDay()]} 👀👊</h2>
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
            <button type="submit">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
          {error && (
            <p
              className="error"
              style={{ color: "red", fontWeight: "italic", fontSize: "2rem" }}
            >
              <i class="fa-solid fa-triangle-exclamation"></i> Please, Enter
              name item ...
            </p>
          )}
          <div id="filter-container">
            <button
              onClick={() => {
                setFilter("DONE");
              }}
            >
              Done
            </button>
            <button
              onClick={() => {
                setFilter("TODO");
              }}
            >
              Todo
            </button>
            <button
              onClick={() => {
                setFilter("ALL");
              }}
            >
              All
            </button>
          </div>
          <div id="render-todo">
            {todos
              .filter((todo) => {
                if (filter === "ALL") {
                  return true;
                }
                return filter === "DONE" ? todo.done : !todo.done;
              })
              .map((todo, index) => (
                <Todo
                  key={index}
                  todo={todo}
                  checkTodo={(id) => {
                    setTodos(
                      todos.map((todo) => {
                        if (todo.id === id) {
                          return { ...todo, done: !todo.done };
                        }
                        return todo;
                      })
                    );
                  }}
                />
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
