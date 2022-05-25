import {Task} from './Task'
import React,{useState} from 'react';
import './App.css';

function App() {
  
  const [NewTask, SetTask] =useState("");
  const [Id,Setid] =useState(-1);
  const [TaskList, SetTaskList] =useState([]);

  const addTask=()=>{
    Setid(+1);
    SetTaskList([...TaskList,NewTask]);
    SetTask("");

  }

 
 
  return (
    <>

    <h4 className='titel'>My To Do List</h4>
   <div className='Container'>

 <div className='f-block'>
<label>Write your task here:</label>
<input type="text" value={NewTask} onChange={(e)=>{
  SetTask(e.target.value)
}}></input>

<button onClick={addTask}>Add</button>
<hr></hr>
</div>


<div className='List'>

{TaskList.map((t)=>{
  return <Task TaskName={t}/>
}

)
}



</div>
   </div>
  

  
    </>
  );
}

export default App;
