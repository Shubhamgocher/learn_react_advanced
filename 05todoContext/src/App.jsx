import { useState,useEffect } from "react";

import { TodoForm, TodoItem } from "./components";
import { TodoProvider } from "./context/TodoContext";

function App() {
  const [todos,setTodos]=useState([]);
  function addTodo(todo){
    setTodos((todos)=>([...todos,{id:Date.now(),...todo}]));

  }
  function deleteTodo(id){
    setTodos((prev)=>prev.filter((todo)=>(todo.id!==id)));
  }
  function updateTodo(id,todo){
    setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id===id ? todo:prevTodo))

  }
  function todoCompleted(id){
    setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id===id ? {...prevTodo,completed:!prevTodo.completed}:prevTodo))
  }
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{todos,addTodo,deleteTodo,updateTodo,todoCompleted}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white bg-[#223550]">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap  gap-y-3">
            {todos.map((todo)=>(
              <div key={todo.id} className="w-full"><TodoItem todo={todo}/></div>

            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
