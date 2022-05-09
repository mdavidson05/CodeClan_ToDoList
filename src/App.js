import './App.css';
import React, {useState} from 'react';

function App() {
  

  const [tasks, setTasks] = useState([
    { name: "Buy Shopping", isDone: false, priority: true },
    { name: "Clean Bathroom", isDone: true, priority: false },
    { name: "Car's MOT", isDone: false, priority: true }
  ])
  
  const [newTask, setNewTask] = useState("Hello i am the new task state")
  const [newPriority, setNewPriority] = useState("")

  const completeTask = ((index) => {
    const copyTasks = [... tasks]
    copyTasks[index].isDone = true
    setTasks(copyTasks)
  })
  const priorityTask = ((index) => {
    const copyTasks = [... tasks]
    copyTasks[index].priority = true
    setTasks(copyTasks)
  })
  
  const taskNodes = tasks.map((task, index) => { 
    return(
        <li key={index} className={task.isDone ? "done" : "not-done"} >
        <span>{task.name}</span>
        <button onClick={() => completeTask(index)}>Done</button>

        <button className={task.priority ? "High" : "Low"}
        onMouseEnter={() => priorityTask(index)}>Priority
        </button>
        </li> 
    )
})


  const handleTaskInput = (event) => {
    setNewTask(event.target.value)
  }
  
  const handleRadioInput = (event) => {
    const result = event.target.value
    setNewPriority (result)

  }
  const saveNewTask = ((event) => {
    event.preventDefault()
    const copyTasks = [... tasks]
    copyTasks.push({name: newTask, isDone: false})
    setTasks(copyTasks)
    setNewTask("")
  })
  // itemNodes = [<li>(milk)</li>, <li>(item.name)</li>, <li>(item.name)</li>]
  
  return (
    <div className="App">

      <h1>To-Do List</h1>
      <hr></hr>

      <form>
        <div className="radio">
          <label>
            <input type="radio" name = "priority" value="High" onChange={handleRadioInput}  />
             High Priority
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" name = "priority" value="Low" onChange={handleRadioInput}/>
            Low Priority
          </label>
        </div>
      </form>

      <form onSubmit={(saveNewTask)}>        
        <label htmlFor="new-task">Add a new task:</label>   
        <input id="new-task" type="text" value={newTask} onChange={handleTaskInput}/>            
        <input type="submit" value="Save New Task" />       
      </form>

      <ul>
      {taskNodes}
      </ul>
        
        


    </div>
  );
}

export default App;
