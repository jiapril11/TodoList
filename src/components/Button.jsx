import React from "react";

export default function Button({
  children: btnText,
  handleEvent,
  todoId,
  bgColor,
  textColor,
}) {
  return (
    <button
      className={`rounded-md px-4 py-1 text-sm font-semibold ${bgColor} ${textColor}`}
      onClick={() => handleEvent(todoId)}
    >
      {btnText}
    </button>
  );
}
