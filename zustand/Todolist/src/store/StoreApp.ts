import { create } from "zustand";

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}
interface TodoStore{
   todos:Todo[];
   addTodos: (todo: Todo) =>void;
   removeTodos:(id:number)=>void;
   toggleTodos:(id:number)=>void;
}
const UseStoreApp = create<TodoStore>((set)=>({
    todos:[],
    addTodos:(todo)=>set((state)=>({todos:[...state.todos,todo]})),
    removeTodos:(id)=>set((state)=>({todos : state.todos.filter((todo)=>todo.id !==id)})),
    toggleTodos:(id)=>set((state)=>({todos:state.todos.map((todo)=>todo.id===id ?{...todo,completed:!todo.completed}:todo)})),
}));
export default UseStoreApp;