import React from "react";
import Button from "./Button";

export default function Todo({ todo, handleDelete, handleChange }) {
  const { id, title, body, isDone } = todo;
  const isDoneStyle = {
    doneTodo: {
      cardBgColor: "bg-[#f1f1f1]",
      btnBgColor: "bg-[#3F7E9A]",
      text: "취소",
    },
    notDoneTodo: {
      cardBgColor: "bg-[#fff]",
      btnBgColor: "bg-[#0E2D3E]",
      text: "완료",
    },
  };
  let isDoneObj;
  isDone
    ? (isDoneObj = isDoneStyle.doneTodo)
    : (isDoneObj = isDoneStyle.notDoneTodo);

  return (
    <li
      className={`mb-4 p-4 border rounded border-[#C5D5DD] ${isDoneObj.cardBgColor}`}
    >
      <h3 className="mb-1 font-semibold text-lg text-[#0E2D3E] break-words">
        {title}
      </h3>
      <p className="break-words">{body}</p>
      <div className="flex justify-end gap-1 mt-3">
        <Button
          handleEvent={handleDelete}
          todoId={id}
          bgColor="bg-red-500"
          textColor="text-white"
        >
          삭제
        </Button>
        <Button
          handleEvent={handleChange}
          todoId={id}
          bgColor={isDoneObj.btnBgColor}
          textColor="text-white"
        >
          {isDoneObj.text}
        </Button>
      </div>
    </li>
  );
}
