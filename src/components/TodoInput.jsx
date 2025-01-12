import React, { useState } from 'react'
import Input from  '../css/todoinp.module.css'


const TodoInput = ({addTodo}) => {
  const[task,setTask] = useState("");

  const handleSubmit= (e) =>{
      e.preventDefault();
      addTodo(task);
      setTask("");
  };

  return (
    <div >
        <form action="" onSubmit={handleSubmit} className={Input.todoInputbody}>
            <input type="text" 
            placeholder='type your checklist'
            value={task}
            onChange={(e)=>setTask(e.target.value)}/>
            <button>+</button>
        </form>
    </div>
  )
}

export default TodoInput
