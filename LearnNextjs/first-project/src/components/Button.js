// import { useState } from "react";

export default function Button({
  title = "submit",
  type = "button",
  onUserClick,
  bgColor = "blue",
}) {
  return (
    <button
      className={`${
        bgColor == "blue"
          ? "bg-blue-500"
          : bgColor == "red"
          ? "bg-red-500"
          : "bg-orange-500"
      } hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full`}
      type={type}
      onClick={onUserClick}
    >
      {title}
    </button>
  );
}
