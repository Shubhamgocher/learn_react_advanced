import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice"
import { loadState,saveState } from "./localStorage";
const preloadedState=loadState();
export const store= configureStore({
    reducer:todoReducer,
    preloadedState,
    

});
store.subscribe(() => {
    saveState(store.getState());
  });