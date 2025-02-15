"use client";
import { useState } from "react";

export function TodoApp() {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  console.log("🚀 ~ TodoApp ~ input:", input);
  const addTodo = () => {
    console.log("input in add todo", input);
    // todoList.push(input); ,
    // counter++
    //  setCounter(counter++)--> setCounter(counter+1)
    setTodoList([...todoList, input]);
    console.log("todolist", todoList);
    setInput("");
  };
  return (
    <div>
      {/* form */}
      <div>
        <form>
          <input
            type="text"
            placeholder="Add todo"
            value={input}
            onChange={(event) => {
              //   console.log("event", event.target.value);
              setInput(event.target.value);
            }}
          />
          <button type="button" onClick={addTodo}>
            Add
          </button>
        </form>
      </div>
      {/*Todo list */}
      <ul>
        {todoList.map((todo, index) => {
          return <li key={index}>{todo}</li>;
        })}
      </ul>
    </div>
  );
}
