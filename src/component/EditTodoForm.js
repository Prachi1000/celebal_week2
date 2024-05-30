import React,{useState} from 'react';

const EditTodoForm = ({editTodo,task}) => {
    const [value,setvalue]=useState("");
    const handlesubmit=(e)=>{
    e.preventDefault();
   editTodo(value,task.id);
   setvalue('')
    }
  return (
  
      <form onSubmit={handlesubmit} className='TodoForm'>
        <input type='text' value={value}  onChange={(e)=>
         setvalue(e.target.value)
        // console.log(e.target.value);
        }  className="todo-input" placeholder='Update task'/>
        <button type='submit' className='todo-btn'>Update Task</button>
      </form>
  )
}

export default EditTodoForm;
