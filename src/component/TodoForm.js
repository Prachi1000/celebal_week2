import React,{useState} from 'react';

const TodoForm = ({addTodo}) => {
    const [value,setvalue]=useState("");
    const handlesubmit=(e)=>{
    e.preventDefault();
    // addTodo(value);
    // setvalue('');
   addTodo(value);
   setvalue('')
    }
  return (
  
      <form onSubmit={handlesubmit} className='TodoForm'>
        <input type='text' value={value}  onChange={(e)=>
         setvalue(e.target.value)
        // console.log(e.target.value);
        }  className="todo-input" placeholder='What is the task today?'/>
        <button type='submit' className='todo-btn'>Add Task</button>
      </form>
  )
}

export default TodoForm
