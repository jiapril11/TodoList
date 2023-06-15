import { useEffect, useRef, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Layout from "./components/Layout";
import TodoList from "./components/TodoList";

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
  const [toDoTitle, setToDoTitle] = useState("");
  const [toDoContent, setToDoContent] = useState("");
  const titleInput = useRef(null);
  const contentInput = useRef(null);

  useEffect(
    () => localStorage.setItem("todoList", JSON.stringify(toDoList)),
    [toDoList]
  );
  const handleSetTitle = (e) => {
    setToDoTitle(e.target.value.trim());
  };
  const handleSetContent = (e) => {
    setToDoContent(e.target.value.trim());
  };
  const handleTodoSubmit = (e) => {
    e.preventDefault();
    if (toDoTitle.length > 0 && toDoContent.length > 0) {
      const id =
        toDoList.length !== 0 ? toDoList[toDoList.length - 1].id + 1 : 0;
      const title = toDoTitle;
      const body = toDoContent;
      const isDone = false;
      setToDoList([...toDoList, { id, title, body, isDone }]);

      setToDoTitle("");
      setToDoContent("");
      titleInput.current.focus();
    } else {
      alert("제목과 내용을 모두 채워주세요.");
      if (toDoTitle.length <= 0) {
        titleInput.current.focus();
      } else {
        contentInput.current.focus();
      }
    }
  };
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
        <form onSubmit={handleTodoSubmit}>
          <div className="flex justify-center gap-4 pt-8 pb-14">
            <div>
              <label htmlFor="toDoTitle" className="text-lg font-semibold">
                제목{" "}
              </label>
              <input
                id="toDoTitle"
                type="text"
                className="border px-3 py-1 rounded font-semibold"
                value={toDoTitle}
                onChange={handleSetTitle}
                ref={titleInput}
                placeholder="제목을 입력해주세요"
              />
            </div>
            <div>
              <label htmlFor="toDoContent" className="text-lg font-semibold">
                내용{" "}
              </label>
              <input
                id="toDoContent"
                type="text"
                className="border px-3 py-1 rounded font-semibold"
                value={toDoContent}
                onChange={handleSetContent}
                ref={contentInput}
                placeholder="내용을 입력해주세요"
              />
            </div>
            <button
              type="submit"
              className="bg-[#D4634F] text-white px-4 rounded font-semibold"
            >
              추가하기
            </button>
          </div>
        </form>
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
