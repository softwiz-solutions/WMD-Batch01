import { useState } from "react";

export default function Button({ title }) {
  return (
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
      {title}
    </button>
  );
}
