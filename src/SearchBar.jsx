// basically is component ka kaam hai input laana as a value and agar input change ho to value change karke , button press karke addTask ko call karna jiske paas ye value jaayegi
import React from 'react'
import './SearchBox.css'
import {useState} from "react";
function SearchBar({addTask}) {
    // SearchBar is getting the power addTask , like hey kid you can use my Power
    const [input,setInput]=useState("");
    // take it as a kid who wants to remember things,  then input is the value the thing that the kid wants to remember and setInput is like he is writing it in a diary
    const [deadline,setDeadline]=useState("");
    function handleAdd(){
        addTask(input,deadline);
        // call the power the kid got , ie. talk to app.jsx
        setInput("");
        setDeadline("");
    }
  return (
    <div className='container'>
      <div className="searchbar">
        <input type="text" required placeholder='Enter the Task' value={input} onChange={(e)=>setInput(e.target.value)}/>
        {/* value={input} means the current value that the placeholder will give is the input and on any change in input , it will use SetInput function to set the value as the new input that the person types */}
        <input type="date" value={deadline} onChange={(e)=>setDeadline(e.target.value)}/>
      </div>
      <button className='searchbar-btn' onClick={handleAdd}><span>Add Task</span></button>
      {/* onclick pass the handleAdd function , handleAdd function AddTask ko call karega jo ki App.jsx mai hai*/}
    </div>
  )
}

export default SearchBar
