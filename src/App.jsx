import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import SearchBar from './SearchBar'
import TaskList from './TaskList'
function App() {
  // const [searchText,setSearchText]=useState("");
  const [tasks,setTask]=useState([]);
  function addTask(taskText){
    // addTask receieves the input value from searchBar
    if(taskText.trim()===""){
      return;
    }
    else{
      setTask([...tasks,taskText])
      // set the task array that is in useState with the value 
    }
  }
  return (
    <>
      <Navbar></Navbar>
      <SearchBar addTask={addTask}></SearchBar>
      {/* a prop addTask is given to search bar and inside it is the addTask function */}
      <TaskList tasks={tasks}></TaskList>
    </>
  )
}

export default App

