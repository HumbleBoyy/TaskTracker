import { FaTimes } from "react-icons/fa"


const Task = ({task, onDelete}) => {
  return (
    <div className='task'>
        <h3 className="task_title">{task.text} <FaTimes color="red" onClick={()=> onDelete(task.id)}/></h3>
        <p className="task_day">{task.day}</p>
    </div>
  )
}

export default Task
