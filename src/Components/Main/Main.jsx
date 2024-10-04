import "./main.css"
import Header from '../Header/Header'
import Tasks from "../Tasks/Tasks"
import { useState } from "react";
import AddForm from "../AddForm/AddForm";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Main = () => {
  const [showAdd, setShowAdd] = useState(false)
  const [tasks, setTasks] = useState([
  
    {
        id: 1,
        text: "Meeting With Partners",
        day: "Oct 10th at 15:00",
        reminder:false,
    },
    {
        id: 2,
        text: "Going to Gym",
        day: "Oct 5th at 19:00",
        reminder:true,
    },
    {
        id: 3,
        text: "Going to Cinema",
        day: "Oct 11th at 20:00",
        reminder:false,
    },

])

// Add Task
const addTask = (task) =>{
   const id = Math.floor(Math.random() * 1000) + 1

   const newTask = {id, ...task}

   setTasks([...tasks, newTask])
}

// Delete Task
const deleteTask = (id) => {
   setTasks(tasks.filter((task)=> 
     task.id !== id
   ))
}

// Toggle reminder
const toggleReminder = (id) => {
    setTasks(tasks.map((task)=>  task.id === id ? {...task, reminder: !task.reminder} : task))
}




  return (
    <>
      <section className='Main'>
        <ToastContainer className="toast_container" />
        <Header onAdd={()=> setShowAdd(!showAdd)} showAdd={showAdd}/>
        {
          showAdd && <AddForm onAdd={addTask}/>
        }
         {
          tasks.length !== 0 ?  <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> :
          <div className="Task_bar_red">
            <h2 className="no_task_message">There is no task yet!</h2> 
          </div>
         }
      </section>
    </>
  )
}



export default Main
