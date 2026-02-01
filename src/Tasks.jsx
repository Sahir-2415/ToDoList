import React from 'react'

function Tasks({task,index,deleteTask,endTask}) {
  return (
    <>
    <div className={`taskitem ${task.completed ? "completed":""}`}>
    <button className='tick' onClick={()=>endTask(index)}>
      ✅
    </button>
    <span>{task.text}</span>
    <button className='remove' onClick={()=>deleteTask(index)}>❌</button>
    </div>
    </>
  )
}

export default Tasks
