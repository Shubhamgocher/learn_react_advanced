import {createContext,useContext} from "react";
export const TodoContext=createContext({
    todos:[{
        id:1,
        todo:"Hellow sg",
        completed:false,
    }],
    addTodo:(todo)=>{},
    deleteTodo:(id)=>{},
    updateTodo:(id,todo)=>{},
    todoCompleted:(id)=>{},

})
export const TodoProvider=TodoContext.Provider;
export const useTodo=()=>{
    return useContext(TodoContext);
}