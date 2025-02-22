"use client";
import { useState } from "react";
import Button from "./Button";

export function TodoApp() {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [singleTodo, setSingleTodo] = useState({
    text: "",
    index: "",
  });
  console.log("🚀 ~ TodoApp ~ input:", input);
  const addTodo = () => {
    console.log("input in add todo", input);
    // todoList.push(input); ,counter++
    // counter++
    //  setCounter(counter++)--> setCounter(counter+1)
    console.log("tood list before", todoList);
    // adding item in todo list
    setTodoList([...todoList, input]);
    // rest input state
    setInput("");
  };
  const deleteTodo = (index) => {
    console.log("🚀 ~ deleteTodo ~ item:", index);
    console.log("todolist", todoList);
    // filter the item
    const updatedList = todoList.filter(
      (todo, todoIndex) => todoIndex != index
    );
    console.log("🚀 ~ deleteTodo ~ updatedList:", updatedList);
    setTodoList(updatedList);
  };
  console.log("todolist after", todoList);

  const editTodo = (item, index) => {
    // set the data for edit
    setSingleTodo({
      text: item,
      index: index,
    });
    setInput(item);
    setIsEdit(true);
  };

  const updateTodo = () => {
    console.log("update todo working");
    console.log("input", input);
    console.log("singole", singleTodo);
    console.log("todolist", todoList);
    // update the specific item
    const updatedList = todoList.map((item, index) => {
      console.log("index", index);
      if (index === singleTodo.index) {
        return input;
      }
      return item;
    });
    console.log("🚀 ~ updatedList ~ updatedList:", updatedList);
    setTodoList(updatedList);
    setInput("");
    setIsEdit(false);
    setSingleTodo({ text: "", index: "" });
  };
  return (
    <div className="ms-4 mt-3 ">
      {/* form */}
      <div className="">
        <form className="flex gap-3">
          <input
            className="p-3 text-black"
            type="text"
            placeholder="Add todo"
            value={input}
            onChange={(event) => {
              //   console.log("event", event.target.value);
              setInput(event.target.value);
            }}
          />
          <Button
            type="button"
            onUserClick={() => {
              if (!isEdit) {
                addTodo();
              } else {
                updateTodo();
              }
            }}
            bgColor={isEdit ? "orange" : "blue"}
            title={isEdit ? "Update" : "Add"}
          />
        </form>
      </div>
      {/*Todo list */}
      <ul className="list-decimal ms-4">
        {todoList.map((item, index) => {
          return (
            <li key={index}>
              <div className="flex gap-3 m-3">
                <p>{item}</p>
                <div className="flex gap-3">
                  <Button
                    title="Delete"
                    className="border-0 px-2 text-black"
                    bgColor="red"
                    onUserClick={() => deleteTodo(index)}
                  />
                  <Button
                    title="Edit"
                    onUserClick={() => editTodo(item, index)}
                    className="border-0 px-2 text-black"
                    bgColor="orange"
                  />
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
