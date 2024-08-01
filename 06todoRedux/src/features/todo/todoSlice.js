import { compose, createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      text: "Hellow Sg",
      complete: false,
    },
  ],
};
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        complete: false,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(
        (prevTodo) => prevTodo.id !== action.payload
      );
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((prevTodo) =>
        prevTodo.id === action.payload
          ? { ...prevTodo, text: action.payload }
          : prevTodo
      );
    },
    toggleCompleted: (state, action) => {
      state.todos = state.todos.map((prevTodo) =>
        prevTodo.id === action.payload
          ? { ...prevTodo, complete: !prevTodo.complete }
          : prevTodo
      );
    },
  },
});
export const { addTodo, removeTodo, updateTodo, toggleCompleted } =
  todoSlice.actions;
export default todoSlice.reducer;
