import "./App.css";
import Header from "./components/Header";
import Layout from "./components/Layout";

function App() {
  const initialState = [
    {
      id: 0,
      title: "JS",
      body: "Array Methods 공부하기",
      isDone: false,
    },
    {
      id: 1,
      title: "React",
      body: "Todo List 만들기",
      isDone: false,
    },
  ];
  return (
    <>
      <Header />
      <Layout>
        <form>
          <div className="flex justify-center gap-4 pt-8 pb-14">
            <div>
              <label htmlFor="toDoTitle" className="text-lg font-semibold">
                제목{" "}
              </label>
              <input
                id="toDoTitle"
                type="text"
                className="border px-3 py-1 rounded font-semibold"
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
          <article>
            <h2 className="text-2xl font-semibold font-mono text-[#D4634F] mb-5">
              WORKING
            </h2>
            <ul>
              {initialState.map((todo) => (
                <li className={`mb-4 p-4 border rounded border-[#C5D5DD]`}>
                  <h3 className="mb-1 font-semibold text-lg text-[#0E2D3E] break-words">
                    {todo.title}
                  </h3>
                  <p className="break-words">{todo.body}</p>
                  <div className="flex justify-end gap-1 mt-3">
                    <button className="rounded-md px-4 py-1 text-sm font-semibold bg-red-500 text-white">
                      삭제
                    </button>
                    <button className="rounded-md px-4 py-1 text-sm font-semibold bg-[#0E2D3E] text-white">
                      완성
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </article>
          <article>
            <h2 className="text-2xl font-semibold font-mono text-[#D4634F] mb-5">
              DONE
            </h2>
            <ul></ul>
          </article>
        </section>
      </Layout>
    </>
  );
}

export default App;
