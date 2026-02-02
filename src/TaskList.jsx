import React from 'react'
import Task from './Tasks'
function TaskList({tasks,deleteTask,endTask,onTaskClick}) {
    // TaskList gets the value from the App.jsx , bcz usme addTask mai hamne task add kiya tha na array mai ,wahi array hamne Task list mai pass kardi taaki uspe map lgake TASK COMPONENT mai pass kar ske that will print it
  return (
    <div>
      <ul>
        {tasks.map((task,index)=>(
            <Task key={index} task={task} index={index} deleteTask={deleteTask} endTask={endTask} onTaskClick={onTaskClick}/>
        ))}
      </ul>
    </div>
  )
}

export default TaskList
