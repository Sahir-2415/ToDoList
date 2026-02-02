import React from 'react'

function TaskDetails({task,onClose}) {
    if(!task) return null;
  return (
    <>
    <div className='overlay'>
        <div className="card">
            <h2>{task.text}</h2>
            <p>📅 Added: {task.createdAt.toDateString()}</p>
            <p>⏰ Deadline: {task.deadline?.toDateString()||"None"}</p>
            <button onClick={onClose}>Close</button>
        </div>
    </div>
    
    </>
  )
}

export default TaskDetails
