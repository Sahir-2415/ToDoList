import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import SearchBar from './SearchBar'
import TaskList from './TaskList'
import TaskDetails from './TaskDetails'
function App() {
  // const [searchText,setSearchText]=useState("");
  const [tasks,setTask]=useState([]);
  const [selectedTask,setSelectedTask] = useState(null);
  function addTask(taskText,deadline){
    // addTask receieves the input value from searchBar
    if(taskText.trim()===""){
      return;
    }
    else{
      setTask([...tasks,{text:taskText,completed:false,createdAt:new Date(),deadline:deadline? new Date(deadline):null}])
      // set thea task array that is in useState with the value 
    }
  }
  function deleteTask(indexToRemove){
      setTask(tasks.filter((tasks,index)=>index!==indexToRemove))
  }

  function endTask(index){
    setTask(
      tasks.map((task,i)=>{
        return i===index?{...task,completed:!task.completed}:task
      })
      
    )
  }

  return (
    <>
    <Navbar></Navbar>
    <div className="container-box">
      
      <SearchBar addTask={addTask}></SearchBar>
      {/* a prop addTask is given to search bar and inside it is the addTask function */}
      <TaskList tasks={tasks} deleteTask={deleteTask} endTask={endTask} onTaskClick={setSelectedTask}></TaskList>
      <TaskDetails task={selectedTask} onClose={()=>setSelectedTask(null)}/>
    </div>
      
    </>
  )
}

export default App

