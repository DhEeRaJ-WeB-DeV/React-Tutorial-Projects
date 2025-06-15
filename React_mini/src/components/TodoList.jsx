import React, { useState } from 'react'
import '../Style.css'
const TodoList = () => {
    const[todo,setTodo]=useState([]);
    const[input,setInput]=useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if(input!==""){
        setTodo((todo)=>{
               return [...todo,{text:input,id:Math.floor(Math.random()*10)}]
        })
    } 
        setInput('');
         
    };
    const handleDelete = (id) => {
        setTodo((todo) => todo.filter((t) => t.id !== id));
    }
  return (
    <div className='container'>
      <input type='text' placeholder='add Todos' value={input} onChange={(e)=>setInput(e.target.value)} />
      <button onClick={handleSubmit}>add</button>

      <ul className="todos-list">
        {
            todo.map(({text,id})=>(
                <li className="todo" key={id}>
                    <span>{text}</span>
                    <button className="close" onClick={()=>handleDelete(id)}>x</button>
                </li>
            ))
        }
      </ul>
    </div>
  )
}

export default TodoList