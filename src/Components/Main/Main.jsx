import "./main.css"
import Header from '../Header/Header'
import Tasks from "../Tasks/Tasks"
import { useState } from "react";
import AddForm from "../AddForm/AddForm";

const Main = () => {
  const [tasks, setTasks] = useState([
  
    {
        id: 1,
        text: "Meeting With Partners",
        day: "Oct 10th at 15:00",
        reminder:true,
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
        <Header/>
        <AddForm/>
        {
          tasks.length !== 0 ?  <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> :
          <div className="Task_bar_red">
            <h2 className="no_task_message">There is no task yet!</h2> 
          </div>
         }
      </section>
    </>
  )
}



export default Main
