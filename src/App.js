import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Layout from "./components/Layout";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

function App() {
  // const initialState = [
  //   {
  //     id: 0,
  //     title: "JS",
  //     body: "Array Methods 공부하기",
  //     isDone: false,
  //   },
  // ];
  const initialState = localStorage.getItem("todoList")
    ? JSON.parse(localStorage.getItem("todoList"))
    : [];

  const [toDoList, setToDoList] = useState(initialState);

  useEffect(
    () => localStorage.setItem("todoList", JSON.stringify(toDoList)),
    [toDoList]
  );

  const handleToDoDelete = (id) => {
    setToDoList(toDoList.filter((todo) => todo.id !== id));
  };
  const handleToDoStateChange = (id) => {
    const changed = toDoList.map((todo) => {
      if (todo.id === id) {
        todo.isDone = !todo.isDone;
      }
      return todo;
    });
    setToDoList(changed);
  };
  return (
    <>
      <Header />
      <Layout>
        <TodoInput toDoList={toDoList} setToDoList={setToDoList} />
        <section className="grid grid-cols-2 gap-4">
          <TodoList
            title="WORKING"
            toDoList={toDoList}
            handleDelete={handleToDoDelete}
            handleChange={handleToDoStateChange}
            isDone={false}
          />
          <TodoList
            title="DONE"
            toDoList={toDoList}
            handleDelete={handleToDoDelete}
            handleChange={handleToDoStateChange}
            isDone={true}
          />
        </section>
      </Layout>
    </>
  );
}

export default App;
