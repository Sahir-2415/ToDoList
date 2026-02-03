import React from 'react'

function Tasks({task,index,deleteTask,endTask,onTaskClick}) {
  return (
    <>
    <div className={`taskitem ${task.completed ? "completed":""}`} onClick={()=>onTaskClick(task)}>
    <button className='tick' onClick={(e)=>{e.stopPropagation();endTask(index)}}>
      ✅
    </button>
    <span className='class-text'>{task.text}</span>
    <button className='remove' onClick={(e)=>{e.stopPropagation();deleteTask(index)}}>❌</button>
    </div>
    </>
  )
}

export default Tasks
