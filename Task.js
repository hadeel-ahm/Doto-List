import React from 'react'
import './App.css';

export  function Task({TaskName}) {
  return (
    <div className='task'>
        
        <h5 className='Task-card'>Task Name:  {TaskName}</h5>
        <button>update</button>
        <button>delete</button>
        
    </div>
  )
}
