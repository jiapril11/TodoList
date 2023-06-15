import React from "react";
import Todo from "./Todo";

export default function TodoList({
  title,
  toDoList,
  isDone,
  handleDelete,
  handleChange,
}) {
  return (
    <article>
      <h2 className="text-2xl font-semibold font-mono text-[#D4634F] mb-5">
        {title}
      </h2>
      <ul>
        {toDoList
          .filter((todo) => todo.isDone === isDone)
          .map((todo) => (
            <Todo
              todo={todo}
              handleDelete={handleDelete}
              handleChange={handleChange}
              key={todo.id}
            />
          ))}
      </ul>
    </article>
  );
}
