import { Header } from "@/components/Header";
import { TodoApp } from "@/components/TodoApp";

export default function Todo() {
  return (
    <div className="flex bg-red-100 h-screen justify-center items-center text-black flex-col">
      <Header title="Todo APP" />
      <TodoApp />
    </div>
  );
}
