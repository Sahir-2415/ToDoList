import React from 'react'

function Tasks({task}) {
  return (
    <div className='taskitem'>
      <span>{task}</span>
      <span>❌</span>
    </div>
  )
}

export default Tasks
